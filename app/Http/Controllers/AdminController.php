<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Auth/LoginAdmin');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // Validate the request data
        $request->validate([
            'nama_admin' => 'required',
            'password_admin' => 'required',
        ]);

        // Attempt to authenticate the user
        $credentials = $request->only('nama_admin', 'password_admin');
        if (Auth::attempt($credentials)) {
            // Authentication successful, redirect to dashboard or desired location
            return redirect()->intended('/AdminDashboard');
        }

        // Authentication failed, redirect back with error message
        return redirect()->back()->withErrors([
            'login' => 'These credentials do not match our records.',
        ])->withInput($request->only('nama_admin'));
    
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

    public function showDashboard()
    {
        return Inertia::render('AdminDashboard');
    }
}
