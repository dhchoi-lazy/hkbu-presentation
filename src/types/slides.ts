import type { ReactNode } from "react";

export interface TitleSlideProps {
  title: string;
  subtitle?: string;
  author?: string;
  date?: string;
}

export interface SlideProps {
  title?: string;
  children: ReactNode;
}

export interface VisualizationSlideProps {
  title?: string;
  children: ReactNode;
  fullHeight?: boolean;
}
