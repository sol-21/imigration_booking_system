<?php

namespace App\Console\Commands;

use App\Mail\NotificationEmail;
use App\Models\User;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Mail;

class AutoSendEmail extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'send:email';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'sending appointement notification';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
    //    $userNames = User::where('is_admin',false);
       $users = User::pluck('email')->toArray();
            foreach ($users as $userEmail) {
                Mail::to($userEmail)->send(new NotificationEmail());
            }
        return Command::SUCCESS;
    }
}
