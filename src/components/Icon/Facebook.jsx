import React from 'react';

import { EIconColor } from './Icon.enums';

const Svg = ({ color = EIconColor.BLACK }) => {
  return (
    <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M7.82008 2.98875H9.46577V0.12675C9.18185 0.08775 8.2054 0 7.06821 0C4.69545 0 3.07004 1.49025 3.07004 4.22925V6.75H0.45166V9.9495H3.07004V18H6.2803V9.95025H8.79277L9.19161 6.75075H6.27955V4.5465C6.2803 3.62175 6.52967 2.98875 7.82008 2.98875Z"
        fill={color}
      />
    </svg>
  );
};

export default Svg;
