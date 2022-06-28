import React from 'react';

import { EIconColor } from './Icon.enums';

const Svg = ({ color = EIconColor.BLACK }) => {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="9.24268" y="6.00232" width="6.74286" height="2" transform="rotate(-180 9.24268 6.00232)" fill={color} />
      <rect x="5" y="9.245" width="6" height="2" transform="rotate(-135 5 9.245)" fill={color} />
      <rect x="6.41418" y="2.17395" width="6" height="2" transform="rotate(135 6.41418 2.17395)" fill={color} />
    </svg>
  );
};

export default Svg;
