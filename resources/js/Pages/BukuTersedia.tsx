import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { PageProps } from "@/types";
import DataTable from "@/Components/Table";
import { GridColDef } from "@mui/x-data-grid";

const BukuTersedia = ({ auth, books }: PageProps<{ books: any }>) => {
    const columns: GridColDef[] = [
        { field: "id", headerName: "No", width: 70 },
        { field: "judul", headerName: "Judul", width: 130 }, // Ganti dengan kolom yang sesuai
        { field: "tgl_terbit", headerName: "Tanggal Terbit", width: 130 }, // Ganti dengan kolom yang sesuai
        { field: "nama_penulis", headerName: "Nama Penulis", width: 130 }, // Ganti dengan kolom yang sesuai
        { field: "nama_penerbit", headerName: "Nama Penerbit", width: 130 }, // Ganti dengan kolom yang sesuai
    ];

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Buku yang Tersedia
                </h2>
            }
        >
            <Head title="Buku Tersedia" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <DataTable columns={columns} books={books} showForm={true} />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default BukuTersedia;
