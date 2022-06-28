import React from 'react';

import { EIconColor } from './Icon.enums';

const Svg = ({ color = EIconColor.BLACK }) => {
  return (
    <svg width="19" height="9" viewBox="0 0 19 9" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0.737793" y="3.50006" width="16" height="2" fill={color} />
      <rect x="14.47" y="0.257385" width="6" height="2" transform="rotate(45 14.47 0.257385)" fill={color} />
      <rect x="13.0558" y="7.32846" width="6" height="2" transform="rotate(-45 13.0558 7.32846)" fill={color} />
    </svg>
  );
};

export default Svg;
