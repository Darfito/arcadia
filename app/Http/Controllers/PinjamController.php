<?php

namespace App\Http\Controllers;

use App\Models\detil_peminjaman;
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
    // Ambil data dari request
    $selectedBooks = $request->input('selectedBooks');
    $tgl_ambil = $request->input('tgl_ambil');
    $tgl_wajibkembali = $request->input('tgl_wajibkembali');
    
    // Dapatkan user yang sedang login
    $user = Auth::user();
    
    // Buat instance Peminjaman
    $peminjam = new Peminjaman();
    
    // Set nilai atribut peminjaman
    $peminjam->tgl_ambil = $tgl_ambil;
    $peminjam->user_id = $user->id;
    $peminjam->tgl_wajibkembali = $tgl_wajibkembali;
    
    // Simpan peminjaman
    $peminjam->save();

    // Iterasi melalui setiap buku yang dipilih
    foreach ($selectedBooks as $book) {
        // Ambil nilai id buku dari setiap objek buku
        $bookId = $book['id'];
        
        // Buat instance detil_peminjaman untuk setiap buku yang dipinjam
        $detil_peminjaman = new detil_peminjaman();
        $detil_peminjaman->kode_pinjam = $peminjam->id;
        $detil_peminjaman->peminjam_id = $user->id;
        $detil_peminjaman->buku_id = $bookId;
        $detil_peminjaman->save();
    }
    
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
