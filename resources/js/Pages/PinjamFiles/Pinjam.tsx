import { Box, Container, Typography } from "@mui/material";
import { Head, Link, useForm } from "@inertiajs/react";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import GuestLayout from "@/Layouts/GuestLayout";
import { FormEventHandler, JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal, useEffect } from "react";
import InputLabel from "@/Components/InputLabel";

const Pinjam = ({selectedBooks}:any) => {
    const { data, setData, post, processing, errors, reset } = useForm({
        tgl_ambil: "",
        tgl_wajibkembali: "",
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route("pinjam.create"));
    };
    return (
        <Container>
            <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <GuestLayout>
                    <Head title="Register" />
                    <Typography variant="h5" className="text-center">
                        Tanggal Pinjam{" "}
                    </Typography>
                    <div>
            <Box sx={{ marginBottom: 5 }} className="selected-book">
                <h1>Selected Books</h1>
                {selectedBooks && selectedBooks.length > 0 ? (
                    <ul>
                        {selectedBooks.map((selectedBook: { judul: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; }, index: Key | null | undefined) => (
                            <li key={index}>{selectedBook.judul}</li>
                        ))}
                    </ul>
                ) : (
                    <p>No books selected</p>
                )}
            </Box>
        </div>
                    <form onSubmit={submit}>
                        <div>
                            <InputLabel
                                htmlFor="tgl_ambil"
                                value="Tanggal Ambil"
                            />
                            <TextInput
                                id="tgl_ambil"
                                type="date"
                                name="tgl_ambil"
                                value={data.tgl_ambil}
                                className="mt-1 block w-full"
                                isFocused={true}
                                onChange={(e) =>
                                    setData("tgl_ambil", e.target.value)
                                }
                                required
                            />
                            <InputError
                                message={errors.tgl_ambil}
                                className="mt-2"
                            />
                        </div>
                        <div>
                            <InputLabel
                                htmlFor="tgl_ambil"
                                value="Tanggal Kembali"
                            />
                            <TextInput
                                id="tgl_wajibkembali"
                                type="date"
                                name="tgl_wajibkembali"
                                value={data.tgl_wajibkembali}
                                className="mt-1 block w-full"
                                isFocused={true}
                                onChange={(e) =>
                                    setData("tgl_wajibkembali", e.target.value)
                                }
                                required
                            />
                            <InputError
                                message={errors.tgl_wajibkembali}
                                className="mt-2"
                            />
                        </div>
                        <div className="flex items-center justify-end mt-4">
                            <PrimaryButton
                                className="ms-4"
                                disabled={processing}
                            >
                                Books!
                            </PrimaryButton>
                        </div>
                    </form>
                </GuestLayout>
            </div>
        </Container>
    );
};

export default Pinjam;
