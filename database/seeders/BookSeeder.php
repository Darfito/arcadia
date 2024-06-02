<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Book; // Pastikan untuk mengimpor namespace Book jika belum
use Carbon\Carbon;

class BookSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        $books = [
            [
                'judul' => 'Bumi',
                'tgl_terbit' => Carbon::createFromFormat('Y-m-d', '2005-08-30'),
                'nama_penulis' => 'Tere Liye',
                'nama_penerbit' => 'Gramedia Pustaka Utama',
            ],
            [
                'judul' => 'Matahari',
                'tgl_terbit' => Carbon::createFromFormat('Y-m-d','2016-08-15'),
                'nama_penulis' => 'Ahmad Tohari',
                'nama_penerbit' => 'Bentang Pustaka',
            ],
            [
                'judul' => 'Laskar Pelangi',
                'tgl_terbit' => Carbon::createFromFormat('Y-m-d','2005-08-30'),
                'nama_penulis' => 'Andrea Hirata',
                'nama_penerbit' => 'Bentang Pustaka',
            ],
            [
                'judul' => 'Percy Jackson',
                'tgl_terbit' => Carbon::createFromFormat('Y-m-d','2005-08-30'),
                'nama_penulis' => 'Rick Riordan',
                'nama_penerbit' => 'Gramedia Pustaka Utama',
            ],
            [
                'judul' => 'Harry Potter',
                'tgl_terbit' => Carbon::createFromFormat('Y-m-d','2005-08-30'),
                'nama_penulis' => 'J.K. Rowling',
                'nama_penerbit' => 'Gramedia Pustaka Utama',
            ],
            [
                'judul' => 'Lord of the Rings',
                'tgl_terbit' => Carbon::createFromFormat('Y-m-d','2005-08-30'),
                'nama_penulis' => 'J.R.R. Tolkien',
                'nama_penerbit' => 'Gramedia Pustaka Utama',
            ],
            [
                'judul' => 'The Hobbit',
                'tgl_terbit' => Carbon::createFromFormat('Y-m-d','2005-08-30'),
                'nama_penulis' => 'J.R.R. Tolkien',
                'nama_penerbit' => 'Gramedia Pustaka Utama',
            ],
            [
                'judul' => 'The Kata',
                'tgl_terbit' => Carbon::createFromFormat('Y-m-d','2019-08-30'),
                'nama_penulis' => 'Rintik Sedu',
                'nama_penerbit' => 'Gramedia Pustaka Utama',    
            ],
            [
                'judul' => 'Laut Bercerita',
                'tgl_terbit' => Carbon::createFromFormat('Y-m-d','2020-08-30'),
                'nama_penulis' => 'Tere Liye',
                'nama_penerbit' => 'Gramedia Pustaka Utama',
            ],
            [
                'judul' => 'Manusia Setengah Salmon',
                'tgl_terbit' => Carbon::createFromFormat('Y-m-d','2015-08-30'),
                'nama_penulis' => 'Rade Rizkia',
                'nama_penerbit' => 'Gramedia Pustaka Utama',
            ],
        ];

        foreach ($books as $bookData) {
        
            Book::create($bookData);
        }
    }
}
