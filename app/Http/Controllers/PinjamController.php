<?php

namespace App\Http\Controllers;

use App\Models\Peminjaman;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class PinjamController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('PinjamFiles/Pinjam');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function handleSelectedBooks(Request $request)
    {
        $selectedBooks = $request->input('selectedBooks');
        // Process the selected books data
        // dd($selectedBooks);
        return Inertia::render('PinjamFiles/Pinjam', ['selectedBooks' => $selectedBooks]);
    }

    public function createPeminjam(Request $request)
{
    $tgl_ambil = $request->input('tgl_ambil');
    $tgl_wajibkembali = $request->input('tgl_wajibkembali');
    
    // Dapatkan user yang sedang login
    $user = Auth::user();
    
    // Buat instance Peminjaman
    $peminjam = new Peminjaman();
    
    // Set nilai atribut
    $peminjam->tgl_ambil = $tgl_ambil;
    $peminjam->user_id = $user->id; // Set user_id
    $peminjam->tgl_wajibkembali = $tgl_wajibkembali;
    
    // Simpan peminjaman
    $peminjam->save();
    
    // Redirect ke dashboard
    return redirect('dashboard');
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
