<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Peminjaman extends Model
{
    use HasFactory;

      /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */

     protected $fillable = [
        'kode_pinjam',
        'tgl_pesan',
        'tgl_ambil',
        'tgl_wajibkembali',
        'tgl_kembali',
        'status_peminjam',
        'user_id',
     ];

     public function detil_peminjaman(){
        return $this->hasMany(detil_peminjaman::class);
     }
     public function user(){
        return $this->belongsTo(User::class);
     }

}
