import { Container, Typography } from '@mui/material';
import * as S from './PinjamStyles'
import { Head, Link, useForm } from '@inertiajs/react';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { FormEventHandler, useEffect } from 'react';
import InputLabel from '@/Components/InputLabel';

const Pinjam = () => {
    const {data, setData, post, processing, errors, reset} = useForm({
        judul: '',
        tgl_pesan: '',
        tgl_ambil: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('pinjam.create'));
    };
    return (
     <S.StyledPinjam>
        <Container>
        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
        <GuestLayout>
            <Head title="Register" />
            <Typography variant='h5' className='text-center'> Register </Typography>
            <form onSubmit={submit}>
                <div>
                    <InputLabel htmlFor="judul" value="Peminjam" />
                    <TextInput
                        id="judul"
                        name="judul"
                        value={data.judul}
                        className="mt-1 block w-full"
                        isFocused={true}
                        onChange={(e) => setData('judul', e.target.value)}
                        required
                    />

                    <InputError message={errors.judul} className="mt-2" />
                </div>
                <div>
                    <InputLabel htmlFor="judul" value="Peminjam" />
                    <TextInput
                        id="tgl_pesan"
                        name="tgl_pesan"
                        type='date'
                        value={data.tgl_pesan}
                        className="mt-1 block w-full"
                        isFocused={true}
                        onChange={(e) => setData('tgl_pesan', e.target.value)}
                        required
                    />
                    <InputError message={errors.judul} className="mt-2" />
                </div>
                <div>
                    <InputLabel htmlFor="judul" value="Peminjam" />
                    <TextInput
                        id="tgl_ambil"
                        name="tgl_ambil"
                        type='date'
                        value={data.tgl_ambil}
                        className="mt-1 block w-full"
                        isFocused={true}
                        onChange={(e) => setData('tgl_ambil', e.target.value)}
                        required
                    />
                    <InputError message={errors.judul} className="mt-2" />
                </div>
                <div className="flex items-center justify-end mt-4">
                    <PrimaryButton className="ms-4" disabled={processing}>
                        Book
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
        </div>
        </Container>
     </S.StyledPinjam>   
    )
};

export default Pinjam