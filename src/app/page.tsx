'use client';

import dynamic from 'next/dynamic';
import S1 from '@/slides/S1';
import S2 from '@/slides/S2';
import S3 from '@/slides/S3';
import S4 from '@/slides/S4';
import S5 from '@/slides/S5';
import S6 from '@/slides/S6';
import S7 from '@/slides/S7';
import S8 from '@/slides/S8';
import S9 from '@/slides/S9';
import S10 from '@/slides/S10';
import ThemeToggle from '@/components/ThemeToggle';

const RevealPresentation = dynamic(() => import('@/components/RevealPresentation'), {
  ssr: false,
  loading: () => <div className="flex items-center justify-center h-screen">Loading presentation...</div>
});

export default function Home() {
  return (
    <>
      <RevealPresentation>
        <S1 />
        <S2 />
        <S3 />
        <S4 />
        <S5 />
        <S6 />
        <S7 />
        <S8 />
        <S9 />
        <S10 />
      </RevealPresentation>
      <ThemeToggle />
    </>
  );
}
