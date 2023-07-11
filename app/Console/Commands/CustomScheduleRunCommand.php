<?php
namespace App\Console\Commands;
use Illuminate\Console\Command;
use Illuminate\Console\Scheduling\Schedule;
use Carbon\Carbon;

class CustomScheduleRunCommand extends Command
{
    
    protected $signature = 'custom:schedule-run';

    
    protected $description = 'Custom command to run schedule:run every 2 minutes';

    public function handle()
    {
        $this->info('Custom schedule run command started.');

        while (true) {
            if (Carbon::now()->minute % 2 === 0) {
                $this->call('schedule:run');
            }

            sleep(60);
        }

        return 0;
    }
}
