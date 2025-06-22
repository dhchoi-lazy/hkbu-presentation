import type { TitleSlideProps } from '@/types/slides';

export default function TitleSlide({ title, subtitle, author }: TitleSlideProps) {
  return (
    <section>
      <h1 className="text-4xl font-bold mb-4">{title}</h1>
      {subtitle && <h2 className="text-2xl text-gray-600 mb-6">{subtitle}</h2>}
      {author && <p className="text-lg text-gray-500">{author}</p>}
    </section>
  );
}