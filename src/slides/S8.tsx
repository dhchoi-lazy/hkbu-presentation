import VisualizationSlide from '@/components/slides/VisualizationSlide';

export default function S8() {
  return (
    <VisualizationSlide title="Progress Timeline">
      <div className="w-full max-w-4xl">
        <div className="relative">
          <div className="absolute left-0 right-0 h-1 bg-gray-300 top-1/2 transform -translate-y-1/2"></div>
          <div className="relative flex justify-between">
            {['Planning', 'Development', 'Testing', 'Deployment'].map((phase, index) => (
              <div key={phase} className="flex flex-col items-center">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold ${
                  index < 2 ? 'bg-green-500' : index === 2 ? 'bg-yellow-500' : 'bg-gray-400'
                }`}>
                  {index + 1}
                </div>
                <span className="mt-2 text-sm font-medium">{phase}</span>
                <span className="text-xs text-gray-500 mt-1">
                  {index < 2 ? 'Complete' : index === 2 ? 'In Progress' : 'Pending'}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </VisualizationSlide>
  );
}