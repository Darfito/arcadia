import InputError from "@/Components/InputError"
import InputLabel from "@/Components/InputLabel"
import PrimaryButton from "@/Components/PrimaryButton"
import TextInput from "@/Components/TextInput"
import GuestLayout from "@/Layouts/GuestLayout"
import { Head, useForm } from "@inertiajs/react"
import { Checkbox, Link, Typography } from "@mui/material"
import { FormEventHandler } from "react"

const LoginAdmin =()=> {
    const{data, setData, post, processing, errors, reset} = useForm({
        'nama_admin': '',
        'username_admin':'',
        'password_admin':'',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('login'));
    };
    return (
        <GuestLayout>
        <Head title="Log in" />
        <Typography variant='h5'> Login</Typography>
        {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}

        <form onSubmit={submit}>
            <div>
                <InputLabel htmlFor="Email" value="Email" />
                <TextInput
                    id="nama_admin"
                    type='nama_admin'
                    name="nama_admin"
                    value={data.nama_admin}
                    className="mt-1 block w-full"
                    autoComplete="nama_admin"
                    isFocused={true}
                    onChange={(e) => setData('nama_admin', e.target.value)}
                />

                <InputError message={errors.nama_admin} className="mt-2" />
            </div>
            <div>
                <InputLabel htmlFor="Password" value="Password" />
                <TextInput
                    id="password_admin"
                    type='password_admin'
                    name="password_admin"
                    value={data.password_admin}
                    className="mt-1 block w-full"
                    autoComplete="password_admin"
                    isFocused={true}
                    onChange={(e) => setData('password_admin', e.target.value)}
                />

                <InputError message={errors.password_admin} className="mt-2" />
            </div>
            <div className="flex items-center justify-end mt-4">
                <PrimaryButton className="ms-4" disabled={processing}>
                    Log in
                </PrimaryButton>
            </div>
        </form>
    </GuestLayout>
    )
}

export default LoginAdmin