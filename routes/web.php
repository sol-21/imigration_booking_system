<?php
use App\Events\Hello;
use App\Http\Controllers\AboutController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\AppointementController;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;





Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/socket', function () {

Route::get('/broadcast', function(){
    broadcast(new Hello());
});
Route::middleware('auth')->group(function () {
    // user profile
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    //user apointment 


    Route::get('/appointements/create', [AppointementController::class, 'create'])->name('appointement.create');
    Route::post('/appointements/store', [AppointementController::class, 'store'])->name('appointement.store');
    Route::get('/appointements/manage', [AppointementController::class, 'show'])->name('appointement.show');
    Route::get('/appointements/destroy/{id}', [AppointementController::class, 'destroy'])->name('appointement.destroy');


    //user route
    Route::get('/home', [RegisteredUserController::class, 'home'])->name('user.home');



    //admin routes
Route::prefix('/admin')->middleware('admin')->group(function(){
Route::get('/dashboard', function () {
   return    redirect(route('admin.home')) ;
    })->middleware(['auth', 'verified','admin'])->name('dashboard');

        Route::get('/home', [AdminController::class, 'index'])->name('admin.home');
        Route::post('/appointement/{date}', [AdminController::class, 'appointementUpdate'])->name('appointement.update');
        Route::get('/appointement', [AdminController::class, 'appointementIndex'])->name('appointement.index');
        Route::get('/user', [AdminController::class, 'userIndex'])->name('user.index');
        Route::delete('/user/{id}', [AdminController::class, 'userDestroy'])->name('user.destroy');
    });

    //about page

});
Route::get('/about', [AboutController::class, 'create'])->name('about');


//contact page
Route::get('/contact', [ContactController::class, 'create'])->name('contact');
Route::post('/contact/store', [ContactController::class, 'store'])->name('contact.store');
// Broadcasting route



require __DIR__ . '/auth.php';
