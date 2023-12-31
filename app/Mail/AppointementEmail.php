<?php

namespace App\Mail;

use App\Models\User;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class AppointementEmail extends Mailable
{
    use Queueable, SerializesModels;

    protected $name;

    public function __construct($username)
    {
        $this->name = $username;
    }

    
    public function envelope()
    {
        return new Envelope(
            subject: 'Appointement Email',
        );
    }

    /**
     * Get the message content definition.
     *
     * @return \Illuminate\Mail\Mailables\Content
     */
    public function content()
    {
        return new Content(
            view: 'email.notification',
            with: ['name' => $this->name]
          
        );
    }

    
    public function attachments()
    {
        return [];
    }
}
