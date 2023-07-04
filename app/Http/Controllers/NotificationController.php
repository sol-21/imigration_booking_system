<?php

namespace App\Http\Controllers;

use App\Mail\NotificationEmail;
use App\Models\Notification;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Symfony\Component\Mailer\Exception\TransportException;

class NotificationController extends Controller
{
    public function create()
    {
    
    }

    public function store(Request $request)
    {
        try {
            $validatedNotification = $request->validate([
                'subject' => 'required',
                'notification' => 'required',
            ]);

            $notification = Notification::create($validatedNotification);
            $users = User::pluck('email')->toArray();

            foreach ($users as $userEmail) {
                Mail::to($userEmail)->send(new NotificationEmail($notification));
            }

            return redirect()->back()->with('success', 'Announcement sent successfully!');
        } catch (TransportException $r) {
            return redirect()->back()->with('success', 'Failed to send notification. Please check your internet connection and try again.');
        } catch (\Exception $e) {
            return redirect()->back()->with('success', 'An error occurred while sending the announcement. Please try again later.');
        }
    }
}

