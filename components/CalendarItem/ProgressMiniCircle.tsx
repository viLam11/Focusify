import React from 'react';
import { View } from 'react-native';
import Svg, { Circle } from 'react-native-svg';

const ProgressMiniCircle = ({ percent = 0, size = 30, strokeWidth = 4, color = '#fc6343' }) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const progress = (percent / 100) * circumference;
  
  return (
    <View className='absolute'>
      <Svg width={size} height={size}>
        <Circle
          stroke="#eee"
          fill="none"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
        />
        <Circle
          stroke={color}
          fill="none"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          strokeDasharray={`${progress},${circumference}`}
          rotation="-90"
          origin={`${size / 2},${size / 2}`}
        />
      </Svg>
    </View>
  );
};

export default ProgressMiniCircle;
