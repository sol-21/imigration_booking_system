<?php

namespace App\Http\Controllers;

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
        $user = Auth::user();
        $request->validate([
            'reason'=>'required|max:255|string',
            'datetime'=>'required|max:255|string'
        ]);
        Appointement::create(
            ['reason'=>$request->reason,
            'booking_date'=>$request->datetime
            ]
        );

return redirect(route('appointement.show'));

    }
    public function show(){
        $userId = Auth::id();

        
        $appointments = Appointement::where('user_id', $userId)->get();
        return Inertia::render('User/ManageAppointement',['appointment'=>$appointments]);
    }
    public function destroy(){}
}

