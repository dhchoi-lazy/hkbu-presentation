import type { VisualizationSlideProps } from '@/types/slides';

export default function VisualizationSlide({ title, children, fullHeight = true }: VisualizationSlideProps) {
  return (
    <section style={{ height: fullHeight ? '100%' : 'auto' }}>
      {title && <h2 style={{ marginBottom: '1em' }}>{title}</h2>}
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        height: fullHeight ? '80vh' : 'auto'
      }}>
        {children}
      </div>
    </section>
  );
}