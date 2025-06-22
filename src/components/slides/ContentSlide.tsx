import type { ContentSlideProps } from '@/types/slides';

export default function ContentSlide({ title, children }: ContentSlideProps) {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-6">{title}</h2>
      <div className="text-left space-y-4">{children}</div>
    </section>
  );
}
