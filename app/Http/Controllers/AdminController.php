<?php

namespace App\Http\Controllers;

use App\Models\Appointement;
use App\Models\User;
use Illuminate\Http\Request;
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
        $users= User::all();
        $appointements= Appointement::all();
        return Inertia::render('Admin/HomePage',['users'=>$users,'appointements'=>$appointements]);
    }

    public function appointementIndex(){
        $users= User::all();
        $appointements= Appointement::all();
        return Inertia::render('Admin/ManageAppointement',['users'=>$users,'appointements'=>$appointements]);
    } 
}
