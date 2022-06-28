import React from 'react';

import { EIconColor } from './Icon.enums';

const Svg = ({ color = EIconColor.BLACK }) => {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="0.757324" width="6" height="2" transform="rotate(45 5 0.757324)" fill={color} />
      <rect x="3.58582" y="7.82861" width="6" height="2" transform="rotate(-45 3.58582 7.82861)" fill={color} />
    </svg>
  );
};

export default Svg;
