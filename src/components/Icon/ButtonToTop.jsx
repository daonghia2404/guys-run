import React from 'react';

import { EIconColor } from './Icon.enums';

const Svg = ({ color = EIconColor.BLACK }) => {
  return (
    <svg width="13" height="20" viewBox="0 0 13 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect y="13.3639" width="9" height="3" transform="rotate(-45 0 13.3639)" fill={color} />
      <rect x="10.6074" y="15.4854" width="9" height="3" transform="rotate(-135 10.6074 15.4854)" fill="white" />
      <rect width="13" height="3" fill={color} />
    </svg>
  );
};

export default Svg;
