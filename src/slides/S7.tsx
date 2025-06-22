import Slide from '@/components/slides/Slide';

export default function S7() {
  return (
    <Slide title="Best Practices">
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold text-blue-600 mb-2">Code Quality</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            <li>Type-safe development with TypeScript</li>
            <li>Component reusability and composition</li>
            <li>Clean and maintainable code structure</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-green-600 mb-2">Performance</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            <li>Optimized builds with Next.js</li>
            <li>Lazy loading for better performance</li>
            <li>Efficient rendering strategies</li>
          </ul>
        </div>
      </div>
    </Slide>
  );
}