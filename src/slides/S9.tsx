import Slide from '@/components/slides/Slide';

export default function S9() {
  return (
    <Slide title="Conclusion">
      <div className="space-y-6">
        <p className="text-xl leading-relaxed">
          This presentation framework demonstrates the power of combining modern web technologies
          to create engaging and interactive presentations.
        </p>
        <div className="bg-blue-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-3">Key Takeaways</h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              <span>Flexible slide system with multiple presentation modes</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              <span>Easy to extend with custom visualizations</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              <span>Production-ready deployment configuration</span>
            </li>
          </ul>
        </div>
      </div>
    </Slide>
  );
}