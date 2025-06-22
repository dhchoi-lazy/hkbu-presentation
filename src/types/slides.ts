import { ReactNode } from 'react';

export interface TitleSlideProps {
  title: string;
  subtitle?: string;
  author?: string;
}

export interface ContentSlideProps {
  title: string;
  children: ReactNode;
}