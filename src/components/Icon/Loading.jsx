import React from 'react';

import { EIconColor } from './Icon.enums';

const Svg = ({ color = EIconColor.BLACK }) => {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        opacity="0.2"
        d="M14.0001 25.1328C20.1487 25.1328 25.1331 20.1484 25.1331 13.9999C25.1331 7.85133 20.1487 2.86694 14.0001 2.86694C7.85158 2.86694 2.86719 7.85133 2.86719 13.9999C2.86719 20.1484 7.85158 25.1328 14.0001 25.1328Z"
        stroke={color}
        stroke-width="5"
        stroke-miterlimit="10"
      />
      <path
        d="M10.3934 24.5433C8.83275 24.0231 7.37611 23.1214 6.12755 21.8728C4.879 20.6243 4.01194 19.1676 3.45703 17.6069"
        stroke={color}
        stroke-width="5"
        stroke-miterlimit="10"
      />
    </svg>
  );
};

export default Svg;
