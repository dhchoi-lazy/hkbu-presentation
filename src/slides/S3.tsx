import Slide from '@/components/slides/Slide';

export default function S3() {
  return (
    <Slide title="Key Concepts">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2em' }}>
        <div>
          <h3 style={{ marginBottom: '0.5em' }}>Technology Stack</h3>
          <ul>
            <li>Next.js 15</li>
            <li>React 19</li>
            <li>TypeScript</li>
            <li>Tailwind CSS</li>
          </ul>
        </div>
        <div>
          <h3 style={{ marginBottom: '0.5em' }}>Features</h3>
          <ul>
            <li>Server-side rendering</li>
            <li>Dynamic imports</li>
            <li>Type safety</li>
            <li>Responsive design</li>
          </ul>
        </div>
      </div>
    </Slide>
  );
}