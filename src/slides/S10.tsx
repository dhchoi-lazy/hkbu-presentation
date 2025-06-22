import TitleSlide from '@/components/slides/TitleSlide';

export default function S10() {
  return (
    <TitleSlide
      title="Thank You!"
      subtitle="Questions & Discussion"
      date={new Date().toLocaleDateString()}
    />
  );
}