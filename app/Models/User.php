<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Spatie\Permission\Traits\HasRoles;
use App\Traits\Uuids;
use Auth;

class User extends Authenticatable
{
    use HasFactory, Notifiable,HasRoles,Uuids;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public static function search($query)
    {
        $data = empty($query) ? static::query()
            : static::where(function($q) use ($query) {
                    $q
                        ->where('name', 'LIKE', '%'. $query . '%')
                        ->orWhere('email', 'LIKE', '%' . $query . '%');
        });
        return 
            $data
                ->where('id','!=',Auth::user()->id)
                ->where('email','!=','admin@mail.com');
    }
}
