import RevealPresentation from "@/components/RevealPresentation";
import TitleSlide from "@/components/slides/TitleSlide";
import ContentSlide from "@/components/slides/ContentSlide";

export default function SlidesPage() {
  return (
    <RevealPresentation>
      <TitleSlide
        title="Welcome to Your Presentation"
        subtitle="Built with Next.js & Reveal.js"
        author="Your Name"
      />

      <ContentSlide title="Getting Started">
        <ul className="list-disc list-inside space-y-2">
          <li>Navigate with arrow keys or swipe gestures</li>
          <li>Press ESC for slide overview</li>
          <li>Press F for fullscreen mode</li>
        </ul>
      </ContentSlide>

      <ContentSlide title="Features">
        <ul className="list-disc list-inside space-y-2">
          <li>Responsive design</li>
          <li>Touch navigation support</li>
          <li>Hash-based navigation</li>
          <li>Progress indicator</li>
        </ul>
      </ContentSlide>

      <section>
        <h2 className="text-3xl font-bold">Thank You!</h2>
        <p className="text-xl mt-6">Questions?</p>
      </section>
    </RevealPresentation>
  );
}
