import React from 'react';
import {useScreenShotTest} from 'screenshot-test-react';
import {barChartTestsArray} from './BarChartTests';
import {lineChartTestsArray} from './LineChartTests';
import {stackedBarChartTestsArray} from './BarChartTests/stacked';
import {pieChartsTestArray} from './PieChartTests';
import {specialBarChartTestsArray} from './SpecialScreenShots/SpecialBarTests';
import {specialLineChartTestArray} from './SpecialScreenShots/SpecialLineTests';
import {specialPieChartTestsArray} from './SpecialScreenShots/SpecialPieTests';

const AllScreenshotTests = () => {
  const allTestsArray = [
    ...barChartTestsArray,
    ...stackedBarChartTestsArray,
    ...lineChartTestsArray,
    ...pieChartsTestArray,
    ...specialBarChartTestsArray,
    ...specialLineChartTestArray,
    ...specialPieChartTestsArray,
  ];

  return useScreenShotTest(allTestsArray,{batchSize:205});
};

export default AllScreenshotTests;
