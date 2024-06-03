<?php

namespace Database\Seeders;

use App\Models\Admin;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::create(
            [
                'name'=> 'Admin',
                'username'=> 'admin',
                'status_peminjam'=>0,
                'is_admin'=>1,
                'password'=> bcrypt('admin'),
            ]
        );
    }
}
