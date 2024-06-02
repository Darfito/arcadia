import { router } from "@inertiajs/react";
import { Button, Link } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";

export default function DataTable({ books, columns } : any) {
    const [value, setValues] = useState({
        selectedRowData: [],
    });

    function handleSubmit(e: { preventDefault: () => void; }) {
        e.preventDefault();
        router.post("/tersedia/pinjam", { selectedBooks: value.selectedRowData });
    }

    return (
        <>
            <div style={{ height: 400, width: "100%" }}>
                <DataGrid
                    onRowSelectionModelChange={(ids) => {
                        const selectedIDs = new Set(ids);
                        const selectedRowData = books.filter((book:any) =>
                            selectedIDs.has(book.id)
                        );
                        setValues({ selectedRowData });
                    }}
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
            <form onSubmit={handleSubmit}>
                <input type="hidden" name="selectedBooks" value={JSON.stringify(value.selectedRowData)} />
                <div className="buttonAction my-8">
                    <Button type="submit" sx={{ color: "white" }} variant="contained">
                        Pinjam Buku
                    </Button>
                </div>
            </form>
            {/* {console.log(value.selectedRowData)} */}
        </>
    );
}
