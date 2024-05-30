import { PageProps } from "@/types"
import { Link } from "@inertiajs/react"
import { Typography } from "@mui/material"

const Navbar = ({auth} : PageProps) => {
    return (
        <header className="w-full grid grid-cols-2 items-center gap-2 py-5 px-2 lg:grid-cols-3 rounded" style={{backgroundColor: '#1f2937'}}>
        <div className="Logo">
            <Typography variant="h5" className='text-white'>Arcadia Library</Typography>
        </div>
        <div className="flex lg:justify-center lg:col-start-2">
            <Link href='#' className='rounded-md px-3 py-2 text-white hover:text-black/70'>
            Borrow Book
            </Link>
        </div>
        <nav className="-mx-3 flex flex-1 justify-end">
            {auth.user ? (
                <Link
                    href={route('dashboard')}
                    className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-black dark:hover:text-blue/80 dark:focus-visible:ring-white"
                >
                    Dashboard
                </Link>
            ) : (
                <>
                    <Link
                        href={route('login')}
                        className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-blue/80 dark:focus-visible:ring-white"
                    >
                        Log in
                    </Link>
                    <Link
                        href={route('register')}
                        className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-blue/80 dark:focus-visible:ring-white"
                    >
                        Register
                    </Link>
                </>
            )}
        </nav>
    </header>
    ) 
    
}

export default Navbar