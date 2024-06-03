<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\BookController;
use App\Http\Controllers\DummyController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\PinjamController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UserController;
use App\Models\Book;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    $books = Book::all();
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
        'books' => $books,
    ]);
});



Route::get('/dashboard', [BookController::class,'index'])->middleware(['auth', 'verified'])->name('dashboard');
Route::get('/tersedia', [BookController::class,'tersediaView'])->middleware(['auth', 'verified'])->name('tersedia');
Route::get('/tersedia/pinjam', [PinjamController::class, 'index'])->name('pinjam.index');
Route::post('/tersedia/pinjam', [PinjamController::class, 'handleSelectedBooks'])->name('objek.buku');
Route::post('/dashboard', [PinjamController::class, 'createPeminjam'])->name('pinjam.create');
Route::delete('/dashboard/{id}', [PinjamController::class, 'destroy'])->name('pinjam.destroy');


Route::get('/admin-dashboard',[AdminController::class, 'index'])->middleware(['auth', 'verified'])->name('admin-dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});


Route::get('/users', [UserController::class, 'index'])->name('users.index');

Route::get('/admin', [AdminController::class, 'index'])->name('admin.index');
Route::get('/AdminDashboard', [AdminController::class, 'showDashboard'])->name('admin.showDashboard');
Route::post('/login', [AdminController::class, 'store']);

require __DIR__.'/auth.php';
