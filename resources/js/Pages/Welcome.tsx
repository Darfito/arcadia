import { Link, Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import { Children, Key } from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';

import Navbar from '@/Components/Navbar';
import ActionAreaCard from '@/Components/Card';

export default function Welcome({ books,auth, laravelVersion, phpVersion }: PageProps<{ books: any,laravelVersion: string, phpVersion: string }>) {
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
                        <Box className="rounded py-8">
                    <Grid
                        className="py-8"
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        container
                        spacing={2}
                    >
                        <Grid
                            className="py-8"
                            direction="row"
                            justifyContent="center"
                            alignItems="center"
                            container
                            spacing={2}
                        >
                            {books.map(
                                (book: any, index: Key | null | undefined) => (
                                    <Grid
                                        item
                                        xs={4}
                                        lg={4}
                                        xl={4}
                                        key={index}
                                        sx={{
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            flexGrow: 1,
                                        }}
                                    >
                                        <ActionAreaCard books={book} />
                                    </Grid>
                                )
                            )}
                        </Grid>
                    </Grid>
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
