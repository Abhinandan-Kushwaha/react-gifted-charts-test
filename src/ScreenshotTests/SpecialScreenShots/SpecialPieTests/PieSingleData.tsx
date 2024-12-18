import React from 'react';
import {PieChart} from 'react-gifted-charts';

const PieSingleData = () => {
  const pieData = [{value: 54, color: '#177AD5', text: '54%'}];
  return (
    <div style={{borderWidth:1}}>
      <PieChart
        donut
        showText
        textColor="black"
        innerRadius={70}
        showTextBackground
        textBackgroundColor="white"
        textBackgroundRadius={22}
        data={pieData}
      />
    </div>
  );
};

export default PieSingleData;
