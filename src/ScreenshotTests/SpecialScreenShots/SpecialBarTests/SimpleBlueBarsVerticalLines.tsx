import React from 'react';
import {BarChart} from 'react-gifted-charts';

const SimpleBlueBarsVerticalLines = () => {
  const barData1 = [
    {value: 250, label: 'M'},
    {value: 500, label: 'T', frontColor: '#177AD5'},
    {value: 745, label: 'W', frontColor: '#177AD5'},
    {value: 320, label: 'T'},
    {value: 600, label: 'F', frontColor: '#177AD5'},
    {value: 256, label: 'S'},
    {value: 300, label: 'S'},
  ];
  return (
    // <View style={{borderWidth:1}}>
      <BarChart
        barWidth={22}
        noOfSections={3}
        barBorderRadius={4}
        frontColor="lightgray"
        data={barData1}
        yAxisThickness={0}
        xAxisThickness={0}
        showVerticalLines
      />
    // </View>
  );
};

export default SimpleBlueBarsVerticalLines;
