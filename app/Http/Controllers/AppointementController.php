<?php

namespace App\Http\Controllers;

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

        dd('hello');

    }
}
