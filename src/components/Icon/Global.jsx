import React from 'react';

import { EIconColor } from './Icon.enums';

const Svg = ({ color = EIconColor.BLACK }) => {
  return (
    <svg viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg" className="SvgIconAdaptive_svg__3gHSl">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.002 16.5a8 8 0 10.005-16 8 8 0 00-.01 16h.005zM6.346 2.165a6.551 6.551 0 00-4.852 5.608H4.4c.163-2.01.836-3.939 1.946-5.608zm3.308 0A11.854 11.854 0 0111.6 7.773h2.905a6.551 6.551 0 00-4.851-5.608zm.486 5.608A10.4 10.4 0 008 2.355a10.4 10.4 0 00-2.14 5.418h4.28zM5.86 9.227h4.28A10.4 10.4 0 018 14.645a10.4 10.4 0 01-2.14-5.418zm-1.46 0H1.494a6.551 6.551 0 004.852 5.608A11.855 11.855 0 014.4 9.227zm5.254 5.608A11.854 11.854 0 0011.6 9.227h2.905a6.551 6.551 0 01-4.851 5.608z"
        fill="#FF7A00"
      ></path>
    </svg>
  );
};

export default Svg;
