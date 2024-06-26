<?php

namespace App\Http\Controllers;

use App\Models\Book;
use App\Models\Peminjaman;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class BookController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $peminjams = Peminjaman::where('user_id', Auth::user()->id)->get();
        return inertia('Dashboard', ['peminjams' => $peminjams]);
        // $peminjams = Peminjaman::all();
        // // dd($peminjams);
        // return inertia('Dashboard', ['peminjams' => $peminjams]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function tersediaView()
    {
        $books = Book::all();
        // dd($books);
        return inertia('BukuTersedia', ['books' => $books]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
