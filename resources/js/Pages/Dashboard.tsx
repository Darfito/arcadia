import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import { PageProps } from "@/types";
import DataTable from "@/Components/Table";
import { GridColDef } from "@mui/x-data-grid";

const Dashboard = ({ auth, peminjams }: PageProps<{ peminjams: any }>) => {
    const columns: GridColDef[] = [
        { field: "id", headerName: "ID", width: 70 },
        { field: "judul", headerName: "Judul", width: 130 }, // Ganti dengan kolom yang sesuai
        { field: "tgl_ambil", headerName: "Tanggal Ambil", width: 130 }, // Ganti dengan kolom yang sesuai
        { field: "tgl_wajibkembali", headerName: "Tanggal Kembali", width: 130 }, // Ganti dengan kolom yang sesuai
    ];
    {console.log(peminjams)}
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Peminjaman
                </h2>
            }
        >
            <Head title="Dashboard" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <div className="buttonAction"></div>
                            {peminjams && peminjams.length > 0 ? (
                                <DataTable
                                    columns={columns}
                                    books={peminjams}
                                />
                            ) : (
                                <p>No books borrowed</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Dashboard;
