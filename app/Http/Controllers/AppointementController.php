<?php

namespace App\Http\Controllers;

use App\Events\AnnouncmentEvent;
use App\Events\AnnouncmentNotification;
use App\Models\Appointement;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;
use Inertia\Inertia;



class AppointementController extends Controller
{
    public function create()
    {

        return Inertia::render('User/CreateAppointement');
    }



    public function store(Request $request)
    {

        $user = User::find(Auth::user()->id);

        $request->validate([
            'reason' => 'required|max:255|string',
            'datetime' => 'required|max:255|string'
        ]);

        $existingAppointment = $user->appointements()
            ->whereDate('booking_date', $request->datetime)
            ->first();
        $bookingCount = $user->appointements()
            ->whereDate('booking_date', $request->datetime)
            ->count();

        if ($existingAppointment) {
            Session::flash('alert', 'You have already booked an appointment on this day. Please select another day.');
            return redirect()->back();
        }



        if ($bookingCount >= 10) {
            Session::flash('alert', 'Maximum booking limit reached for this day. Please select another day.');
            return redirect()->back();
        }
        $user->appointements()->create(
            [
                'reason' => $request->reason,
                'booking_date' => $request->datetime
            ]
        );
        Session::flash('success', 'Appointment created successfully.');
        return redirect(route('appointement.show'));
    }
    public function show()
    {
        $user = Auth::user();
        $appointements = $user->appointements;


        return Inertia::render('User/ManageAppointement', ['appointment' => $appointements]);
    }

    public function destroy($id)
    {
        $appointment = Appointement::findOrFail($id);



        $appointment->delete();
        session()->flash('success', 'Appointment deleted successfully.');

        return redirect()->route('appointement.show');
    }
}
