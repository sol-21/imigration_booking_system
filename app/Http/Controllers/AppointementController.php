<?php

namespace App\Http\Controllers;

use App\Models\Appointement;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AppointementController extends Controller
{
    public function create()
    {
        return Inertia::render('User/CreateAppointement');
    }
    public function store(Request $request)
    {
$request->validate([
    'reason'=>'required|max:255|string',
    'datetime'=>'required|max:255|string'
]);
Appointement::create(
    ['reason'=>$request->reason,
    'booking_date'=>$request->datetime
    ]
);
        

    }
}
