import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import { PageProps } from '@/types';
import DataTable from '@/Components/Table';



export default function Pinjam({ auth, books }: PageProps) {
    return (
<>

<div className="py-12">
    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 text-gray-900">
                <div className="buttonAction">
                </div>
        <DataTable books={books}/>
            </div>
        </div>
    </div>
</div>

</>
           

    );
}
