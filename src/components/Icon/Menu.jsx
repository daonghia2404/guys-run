import React from 'react';

import { EIconColor } from './Icon.enums';

const Svg = ({ color = EIconColor.BLACK }) => {
  return (
    <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="16" height="4" fill={color} />
      <rect y="8" width="16" height="4" fill={color} />
    </svg>
  );
};

export default Svg;
