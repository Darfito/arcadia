<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class detil_peminjaman extends Model
{
    use HasFactory;

       /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */

     protected $fillable = [
        'peminjam_id',
        'buku_id',
        'kode_pinjam'
     ];

     public function books(){
         return $this->belongsTo(Book::class);
     }
     public function peminjaman(){
        return $this->belongsTo(Peminjaman::class);
     }
}
