'use client';

import Image from 'next/image';
import Sheet from '@mui/joy/Sheet';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const logo = '/logo/Logo-vert-transparent.png';

export default function Splashscreen() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/dashboard');
    }, 2000);

    // Nettoyage du timer lors du démontage du composant
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <Sheet
      sx={{
        height: '100vh',
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Image src={logo} alt="logo" width={400} height={400} />
    </Sheet>
  );
}
