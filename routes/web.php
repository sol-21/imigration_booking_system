<?php

use App\Http\Controllers\AboutController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\AppointementController;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
 */

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Admin/ManageAppointement');
})->middleware(['auth', 'verified','admin'])->name('dashboard');

Route::middleware('auth')->group(function () {
    //profile
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    //apointmen

    Route::get('/appointements/create', [AppointementController::class, 'create'])->name('appointement.create');
    Route::post('/appointements/store', [AppointementController::class, 'store'])->name('appointement.store');
    Route::get('/appointements/manage', [AppointementController::class, 'show'])->name('appointement.show');
    Route::get('/appointements/destroy', [AppointementController::class, 'destroy'])->name('appointement.destroy');

    
    //user route
    Route::get('/home', [RegisteredUserController::class, 'home'])->name('user.home');

    
Route::prefix('/admin')->group(function(){
Route::get('/home', [AdminController::class, 'index'])->name('admin.home');
Route::Patch('/appointement/{date}', [AdminController::class, 'appointementUpdate'])->name('appointement.update');
Route::get('/appointement', [AdminController::class, 'appointementIndex'])->name('appointement.index');;
Route::get('/user', [AdminController::class, 'userIndex'])->name('user.index');
Route::delete('/user/{id}',[AdminController::class, 'userDestroy'])->name('user.destroy');



});
    
    //about page
    Route::get('/about', [AboutController::class, 'create'])->name('about');


    //contact page
    Route::get('/contact', [ContactController::class, 'create'])->name('contact');
    Route::post('/contact/store', [ContactController::class, 'store'])->name('contact.store');
});

require __DIR__ . '/auth.php';
