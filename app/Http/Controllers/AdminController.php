<?php

namespace App\Http\Controllers;

use App\Models\Appointement;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminController extends Controller
{
    public function appointementIndex(){
$appointements = Appointement::all();

return Inertia::render('Admin/ManageAppointement',['appointment'=>$appointements]);
    //   return Inertia::render('Admin/ManageAppointement',['appointments'=> $appointments]);
}
}
