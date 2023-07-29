<?php

namespace App\Http\Controllers;

use App\Events\AnnouncmentEvent;
use App\Events\AnnouncmentNotification;
use App\Models\Appointement;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
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
        $user->appointements()->create(
            [
                'reason' => $request->reason,
                'booking_date' => $request->datetime
            ]
        );
        // $message = $user->name . " creates Appointment: ";



        return redirect(route('appointement.show'));
    }
    public function show()
    {
        $user = Auth::user();
        $appointements = $user->appointements;


        return Inertia::render('User/ManageAppointement', ['appointment' => $appointements]);
    }
    public function destroy()
    {
    }
}
