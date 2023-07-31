<?php

namespace App\Http\Controllers;

use App\Mail\UpdatedAppointementEmail;
use App\Models\Appointement;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;
use Inertia\Inertia;

class AdminController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $users = User::all();
        $appointements = Appointement::all();
        return Inertia::render('Admin/HomePage', ['users' => $users, 'appointements' => $appointements]);
    }

    public function appointementIndex()
    {
        $appointments = Appointement::select('booking_date', DB::raw('COUNT(*) as count'))
            ->groupBy('booking_date')
            ->get();

        return Inertia::render('Admin/ManageAppointement', ['appointments' => $appointments]);
    }

    public function appointementUpdate($date, Request $request)
    {



        $startDate = Carbon::parse($request->changeDdate);
        $endDate = Carbon::parse($date);

        $diffInDays = $startDate->diffInDays($endDate);


        // $validatedAppointement = $request->validate([

        //     'changeDdate' => 'required',
        // ]);


        $appointmentChange =  Appointement::where('booking_date', '>=', $date);



        if ($appointmentChange) {
            $appointmentChange->getQuery()->update([
                'booking_date' => DB::raw("DATE_ADD(booking_date, INTERVAL {$diffInDays} DAY)")
            ]);


            foreach ($appointmentChange as $appointment) {
                $user = $appointment->user;

                if ($user) {

                    Mail::to($user->email)->send(new UpdatedAppointementEmail($user->name));
                }
            }
        }
    }
}
