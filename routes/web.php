<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\HomeController;
use App\Http\Controllers\GuestController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\UserController;

Auth::routes();

Route::get('/', [GuestController::class, 'index'])->name('home');


Route::group(['middleware' => ['auth']], function() {
    Route::get('/', [HomeController::class, 'index'])->name('index');

    
    Route::get('/role', [RoleController::class,'index'])->name('role.index');
    
    Route::get('/user',         [UserController::class,'index'])->name('user.index');
    Route::get('/user/profile', [UserController::class,'profile'])->name('user.profile');
    Route::get('/user/{id}',    [UserController::class,'detail'])->name('user.index');
});