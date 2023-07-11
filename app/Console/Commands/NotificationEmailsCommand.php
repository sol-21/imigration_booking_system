<?php

namespace App\Console\Commands;

use App\Jobs\SendEmailJob;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Console\Command;

class NotificationEmailsCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'send:emails';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Send appointement email for selected subscribers';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
         $users = User::all();
         
        foreach ($users as $user) {
            dispatch(new SendEmailJob($user));
        }
        return Command::SUCCESS;
    }
}
