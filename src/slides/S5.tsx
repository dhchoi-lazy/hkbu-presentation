import Slide from '@/components/slides/Slide';

export default function S5() {
  return (
    <Slide title="Implementation Details">
      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-semibold mb-2">Architecture Overview</h3>
          <p>The application follows a component-based architecture with clear separation of concerns:</p>
        </div>
        <div className="bg-gray-50 rounded-lg p-4 font-mono text-sm">
          <pre>{`src/
├── app/          # Next.js app router
├── components/   # Reusable components
├── slides/       # Individual slide components
├── types/        # TypeScript definitions
└── hooks/        # Custom React hooks`}</pre>
        </div>
      </div>
    </Slide>
  );
}