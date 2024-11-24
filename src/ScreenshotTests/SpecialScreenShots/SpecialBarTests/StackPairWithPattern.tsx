import React from 'react';
import {BarChart, stackDataItem} from 'react-gifted-charts';

const StackPairWithPattern = () => {
  const SurfAndCons = [
    {
      value: 40,
      labelComponent: () => (
        <div
          style={{
            color: 'gray',
            fontSize: 13,
            fontFamily: 'PoppinsMedium',
            // transform: [{rotate: '-45deg'}],
            top: 7,
            left: 7,
          }}>
          T193
        </div>
      ),
      frontColor: '#D38600',
    },
    {
      value: 20,
    },
    {
      value: 50,
      frontColor: '#177AD5',
      labelComponent: () => (
        <div
          style={{
            color: 'gray',
            fontSize: 13,
            fontFamily: 'PoppinsMedium',
            // transform: [{rotate: '-45deg'}],
            top: 7,
            left: 7,
          }}>
          828
        </div>
      ),
    },
    {
      value: 40,
    },
    {
      value: 75,
      labelComponent: () => (
        <div
          style={{
            color: 'gray',
            fontSize: 13,
            fontFamily: 'PoppinsMedium',
            // transform: [{rotate: '-45deg'}],
            top: 7,
            left: 7,
          }}>
          939
        </div>
      ),
      frontColor: '#177AD5',
    },
    {
      value: 25,
    },
    {
      value: 30,
      labelComponent: () => (
        <div
          style={{
            color: 'gray',
            fontSize: 13,
            fontFamily: 'PoppinsMedium',
            // transform: [{rotate: '-45deg'}],
            top: 7,
            left: 7,
          }}>
          NH950
        </div>
      ),
      frontColor: '#177AD5',
    },
    {
      value: 20,
    },
    {
      value: 60,
      labelComponent: () => (
        <div
          style={{
            color: 'gray',
            fontSize: 13,
            fontFamily: 'PoppinsMedium',
            // transform: [{rotate: '-45deg'}],
            top: 7,
            left: 7,
          }}>
          N123
        </div>
      ),
      frontColor: '#177AD5',
    },
    {
      value: 40,
    },
    {
      value: 65,
      labelComponent: () => (
        <div
          style={{
            color: 'gray',
            fontSize: 13,
            fontFamily: 'PoppinsMedium',
            // transform: [{rotate: '-45deg'}],
            top: 7,
            left: 7,
          }}>
          T250
        </div>
      ),
      frontColor: '#177AD5',
    },
    {
      value: 30,
    },
  ];

  const MyPattern = () => {
    return (
      <pattern
        id="myPattern"
        patternUnits="userSpaceOnUse"
        width="30"
        height="6">
        <rect
          x={0}
          y={0}
          height={4}
          width={30}
          rx={2}
          ry={2}
          fill={'#D38600'}
        />
      </pattern>
    );
  };

  const stackData: stackDataItem[] = SurfAndCons.map((item, index) => {
    const bar: stackDataItem = {
      stacks: [
        {
          value: item.value,
        },
      ],
      labelComponent: item.labelComponent,
    };
    if (index % 2 === 0) {
      // even index bars are normal bars
      bar.spacing = 5;
      bar.color = item.frontColor;
    } else {
      // odd index bars are coins (so we will use barBackgroundPattern)
      bar.barBackgroundPattern = MyPattern;
      bar.patternId = 'myPattern';
      bar.color = 'transparent';
      bar.topLabelComponent = () => (
        <img
          style={{height: 20, width: 20}}
          src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkky2PgMWu-BxNQsQHeaVqG0iiqmcSs57VyA&s'}
        />
      );
    }

    if (index === 2) {
      // Adding an extra bar on this stack
      bar.stacks.push({value: 30, color: '#D38600'});
    }

    return bar;
  });
  return (
    <BarChart
      stackData={stackData}
      spacing={24}
      endSpacing={0}
      yAxisLabelWidth={24}
      xAxisThickness={0}
      xAxisLabelsHeight={18}
      yAxisThickness={0}
      yAxisTextStyle={{color: 'gray'}}
      xAxisTextNumberOfLines={1}
      noOfSections={3}
      maxValue={100}
      initialSpacing={18}
      frontColor={'white'}
    />
  );
};

export default StackPairWithPattern;
