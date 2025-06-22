import VisualizationSlide from '@/components/slides/VisualizationSlide';

export default function S6() {
  return (
    <VisualizationSlide title="Interactive Visualization">
      <div className="w-full max-w-3xl">
        <div className="relative h-96 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-8">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="w-48 h-48 mx-auto bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse flex items-center justify-center">
                <span className="text-white text-4xl font-bold">Data</span>
              </div>
              <p className="mt-6 text-gray-700">Interactive elements can be added here</p>
              <p className="mt-2 text-sm text-gray-500">Charts, graphs, and real-time data</p>
            </div>
          </div>
        </div>
      </div>
    </VisualizationSlide>
  );
}