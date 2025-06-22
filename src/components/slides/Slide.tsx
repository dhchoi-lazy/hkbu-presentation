import type { SlideProps } from "@/types/slides";

export default function Slide({ title, children }: SlideProps) {
  return (
    <section className="content-slide">
      <div className="slide-container">
        {title && <h2 className="slide-title">{title}</h2>}
        <div className="slide-content">{children}</div>
      </div>
    </section>
  );
}
