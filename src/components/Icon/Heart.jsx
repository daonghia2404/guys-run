import React from 'react';

import { EIconColor } from './Icon.enums';

const Svg = ({ color = EIconColor.BLACK }) => {
  return (
    <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M18.0443 12.8534L10.9485 18.8848L3.85273 12.8534C2.04016 11.3168 1 9.04852 1 6.65479C1 1.28196 7.69413 -1.04905 10.9485 3.1844C14.2029 -1.04905 20.897 1.28196 20.897 6.65479C20.897 9.04852 19.8465 11.3168 18.0443 12.8534Z"
        fill={color}
        stroke={color}
        stroke-miterlimit="10"
      />
    </svg>
  );
};

export default Svg;
