'use client';

import Image from 'next/image';
import Sheet from '@mui/joy/Sheet';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const logo = '/logo/Logo-vert-transparent.png';

export default function Splashscreen() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/dashboard');
    }, 2000);
  }, []);
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
