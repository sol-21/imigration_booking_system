<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Appointement extends Model
{
    use HasFactory;

protected $fillable =['reason','booking_date','user_id'];

public function user(): BelongsTo
{
    return $this->belongsTo(User::class);
}

}
