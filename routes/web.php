<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\HomeController;
use App\Http\Controllers\GuestController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\UserController;

Auth::routes();

Route::get('/', [GuestController::class, 'index'])->name('home');
Route::get('/dashboard', [HomeController::class, 'index'])->name('dashboard');


Route::group(['middleware' => ['auth']], function() {
    Route::resource('role', RoleController::class);
    Route::resource('user', UserController::class);
});