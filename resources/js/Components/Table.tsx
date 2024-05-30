import { DataGrid, GridColDef } from '@mui/x-data-grid';


const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'judul', headerName: 'Judul', width: 130 }, // Ganti dengan kolom yang sesuai
  { field: 'tgl_terbit', headerName: 'Tanggal Terbit', width: 130 }, // Ganti dengan kolom yang sesuai
  { field: 'nama_penulis', headerName: 'Nama Penulis', width: 130 }, // Ganti dengan kolom yang sesuai
  { field: 'nama_penerbit', headerName: 'Nama Penerbit', width: 130 }, // Ganti dengan kolom yang sesuai
];

export default function DataTable({books} :any) {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={books}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}
