import React from 'react';
import {PieChart} from 'react-gifted-charts';

const ThreeDPie = () => {
  const pieData = [
    {value: 54, color: '#177AD5'},
    {value: 40, color: '#79D2DE'},
    {value: 20, color: '#ED6665'},
  ];

  return (
    <div style={{borderWidth:1}}>
      <PieChart
        donut
        isThreeD
        shadow
        showText
        showValuesAsLabels
        innerCircleBorderWidth={6}
        innerCircleBorderColor="lightgray"
        shiftInnerCenterX={-10}
        shiftInnerCenterY={-15}
        textColor="black"
        radius={170}
        textSize={20}
        showTextBackground
        textBackgroundRadius={26}
        data={pieData}
      />
    </div>
  );
};

export default ThreeDPie;
