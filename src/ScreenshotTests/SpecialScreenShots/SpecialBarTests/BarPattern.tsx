import {BarChart} from 'react-gifted-charts';

const BarPattern = () => {
  const MyPattern = () => {
    return (
      <pattern
        id="DiagonalLines"
        patternUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="20"
        height="20"
        viewBox="0 0 10 10">
        <path d="M 0 0 L 7 0 L 3.5 7 z" fill="red" stroke="blue" />
      </pattern>
    );
  };

  const data = [
    {
      value: 110,
      frontColor: '#4444dd',
      spacing: 8,
      barBackgroundPattern: MyPattern,
      patternId: "DiagonalLines"
    },
    {value: 130},
    {
      value: 120,
      frontColor: '#4444dd',
      spacing: 8,
    },
    {value: 160},
    {
      value: 190,
      frontColor: '#4444dd',
      spacing: 8,
      barBackgroundPattern: MyPattern,
      patternId: "DiagonalLines"
    },
  ];

  return (
    <BarChart
      data={data}
      barWidth={40}
      spacing={30}
      // barBackgroundPattern={MyPattern}
      // patternId="DiagonalLines"
    />
  );
};

export default BarPattern;
