<?php 
 
namespace App\Jobs; 
 
use App\Events\Hello; 
use App\Mail\AppointementEmail; 
use App\Models\Appointement; 
use App\Models\User; 
use Carbon\Carbon; 
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
 
 
 
    public function __construct() 
    { 
    } 
 
    /** 
     * Execute the job. 
     * 
     * @return void 
     */ 
    public function handle() 
    { 
        $notificationDay = Carbon::now()->addDay()->format('Y-m-d'); 
 
        $appointments = Appointement::where('booking_date', $notificationDay)->get(); 
 
        
        if ($appointments->isNotEmpty()) { 
 
           
            foreach ($appointments as $appointment) {
                $user = User::find($appointment->user_id);
                
                // Check if the user has an appointment on the specified day
                if ($user) {
                    event(new Hello($user->id));
                }
            }
        } 
    } 
}