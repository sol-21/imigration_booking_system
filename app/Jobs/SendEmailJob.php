<?php

namespace App\Jobs;

use App\Mail\AppointementEmail;
use App\Models\User;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Mail;

class SendEmailJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    protected $user;

    public function __construct($user)
    {
        $this->user= $user;
     
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
         if($this->user){
           Mail::to($this->user->email)->send(new AppointementEmail($this->user->name));
          }
        
    }
}
