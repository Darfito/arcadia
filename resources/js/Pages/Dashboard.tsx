import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { PageProps } from "@/types";
import DataTable from "@/Components/Table";
import { GridColDef } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import { Inertia } from '@inertiajs/inertia';

const Dashboard = ({ auth, peminjams }: PageProps<{ peminjams: any }>) => {
    // Add a sequentialId property to each item in the peminjams array
    const peminjamsWithSequentialId = peminjams.map((peminjam: any, index: number) => ({
        ...peminjam,
        sequentialId: index + 1
    }));

    const handleActionClick = (id: number) => {
        Inertia.delete(route('pinjam.destroy', { id }));
    };

    const columns: GridColDef[] = [
        { field: "sequentialId", headerName: "No", width: 70 },
        { field: "tgl_ambil", headerName: "Tanggal Ambil", width: 130 }, // Adjust the column to match your data
        { field: "tgl_wajibkembali", headerName: "Tanggal Kembali", width: 130 }, // Adjust the column to match your data
        {
            field: "actions",
            headerName: "Actions",
            width: 150,
            renderCell: (params) => (
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        handleActionClick(params.row.id);
                    }}
                >
                    <input type="hidden" name="id" value={params.row.id} />
                    <Button
                        type="submit"
                        variant="contained"
                        color="error"
                    >
                        Delete
                    </Button>
                </form>
            )
        }
    ];

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
                            {peminjamsWithSequentialId && peminjamsWithSequentialId.length > 0 ? (
                                <DataTable
                                    columns={columns}
                                    books={peminjamsWithSequentialId}
                                    showForm={false} // Do not show the form
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
