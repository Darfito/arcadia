import { Link, Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import { Children } from 'react';
import { Box, Button, Typography } from '@mui/material';
import ActionAreaCard from '@/Components/CardItems';
import Navbar from '@/Components/Navbar';

export default function Welcome({ auth, laravelVersion, phpVersion }: PageProps<{ laravelVersion: string, phpVersion: string }>) {
    const handleImageError = () => {
        document.getElementById('screenshot-container')?.classList.add('!hidden');
        document.getElementById('docs-card')?.classList.add('!row-span-1');
        document.getElementById('docs-card-content')?.classList.add('!flex-row');
        document.getElementById('background')?.classList.add('!hidden');
    };

    return (
        <>
            <Head title="Welcome" />
            <div className="text-black">
                <div className="relative min-h-screen flex flex-col items-center justify-center selection:bg-[#FF2D20] selection:text-white">
                    <div className="relative w-full max-w-2xl px-6 lg:max-w-7xl">
                       <Navbar auth={{
                            user: auth.user
                        }}>
                        
                       </Navbar>

                        <main className="mt-6">
                            <Box sx={
                                {
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    height: '100%',
                                    width: '100%',
                                    gap: '1rem'
                                }
                             }>
                         <div className="card-items flex flex-row w-full align-middle justify-around">
                         <ActionAreaCard image={'/public/img/bumi.jpg'} judul={'Bumi'}/>
                         <ActionAreaCard image={'/public/img/bumi.jpg'} judul={'Laut Bercerita'}/>
                         <ActionAreaCard image={'/public/img/bumi.jpg'} judul={'Percy Jackson Lightning Thief'}/>           
                         </div>
                            </Box>
                        
                        </main>

                        <footer className="py-16 text-center text-sm text-black dark:text-white/70">
                            Laravel v{laravelVersion} (PHP v{phpVersion})
                        </footer>
                    </div>
                </div>
            </div>
        </>
    );
}
