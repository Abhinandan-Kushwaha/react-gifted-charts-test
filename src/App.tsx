import React from 'react';
import AllScreenshotTests from './ScreenshotTests';
import { barChartTestsArray } from './ScreenshotTests/BarChartTests';
import { BarChart } from 'react-gifted-charts';

function App() {
  // return <BarChart data={[{value:4},{value:7}]} />
  // return barChartTestsArray[0].component()
  // return <div>hi</div>
  return <AllScreenshotTests />;
}

export default App;
