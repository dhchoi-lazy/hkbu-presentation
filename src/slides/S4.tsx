import VisualizationSlide from '@/components/slides/VisualizationSlide';

export default function S4() {
  return (
    <VisualizationSlide title="Data Visualization Example">
      <div className="w-full max-w-4xl">
        <div className="bg-gray-100 rounded-lg p-8">
          <div className="flex justify-around items-end h-64">
            <div className="bg-blue-500 w-16" style={{ height: '40%' }}>
              <div className="text-white text-center mt-2">40%</div>
            </div>
            <div className="bg-green-500 w-16" style={{ height: '60%' }}>
              <div className="text-white text-center mt-2">60%</div>
            </div>
            <div className="bg-yellow-500 w-16" style={{ height: '80%' }}>
              <div className="text-white text-center mt-2">80%</div>
            </div>
            <div className="bg-red-500 w-16" style={{ height: '45%' }}>
              <div className="text-white text-center mt-2">45%</div>
            </div>
          </div>
          <div className="flex justify-around mt-4 text-sm text-gray-600">
            <span>Q1</span>
            <span>Q2</span>
            <span>Q3</span>
            <span>Q4</span>
          </div>
        </div>
        <p className="text-center mt-4 text-gray-600">Quarterly Performance Metrics</p>
      </div>
    </VisualizationSlide>
  );
}