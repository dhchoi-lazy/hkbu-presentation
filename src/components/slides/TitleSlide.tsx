import type { TitleSlideProps } from "@/types/slides";
import Image from "next/image";

export default function TitleSlide({
  title,
  subtitle,
  author,
  date,
}: TitleSlideProps) {
  return (
    <section className="title-slide">
      {/* Main content container */}
      <div className="title-content">
        <h1 className="title-main">{title}</h1>
        {subtitle && <h2 className="title-subtitle">{subtitle}</h2>}
      </div>

      {/* Footer */}
      <div className="title-footer">
        <div className="footer-logo">
          <Image
            src="/hkbu/hkbu-logo.png"
            alt="HKBU Logo"
            width={200}
            height={40}
            priority
          />
        </div>
        <div className="footer-info">
          {author && <h2 className="author">{author}</h2>}
          {date && <h3 className="date">{date}</h3>}
        </div>
      </div>
    </section>
  );
}
