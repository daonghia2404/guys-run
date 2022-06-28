import React from 'react';

import { EIconColor } from './Icon.enums';

const Svg = ({ color = EIconColor.BLACK }) => {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect y="10.6066" width="15" height="1" transform="rotate(-45 0 10.6066)" fill={color} />
      <rect x="0.707031" y="3.8147e-06" width="15" height="1" transform="rotate(45 0.707031 3.8147e-06)" fill={color} />
    </svg>
  );
};

export default Svg;
