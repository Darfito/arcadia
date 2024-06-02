<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('detil_peminjamen', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->unsignedBigInteger('peminjam_id')->index();
            $table->foreign('peminjam_id')->references('id')->on('users')->onDelete('cascade');
            $table->unsignedBigInteger('kode_pinjam')->index();
            $table->foreign('kode_pinjam')->references('id')->on('peminjamen')->onDelete('cascade');
            $table->unsignedBigInteger('buku_id')->index();
            $table->foreign('buku_id')->references('id')->on('books')->onDelete('cascade');
        });

    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('detil_peminjamen');
    }
};
