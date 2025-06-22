import Slide from "@/components/slides/Slide";

export default function S2() {
  return (
    <Slide title="Introduction">
      <p className="slide-intro">
        Welcome to this presentation about data visualization and modern web
        technologies.
      </p>
      <ul className="slide-list">
        <li>Built with Next.js and Reveal.js</li>
        <li>Features interactive data visualizations</li>
        <li>Responsive and accessible design</li>
      </ul>
    </Slide>
  );
}
