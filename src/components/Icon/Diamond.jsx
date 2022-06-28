import React from 'react';

import { EIconColor } from './Icon.enums';

const Svg = ({ color = EIconColor.BLACK }) => {
  return (
    <svg viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg" className="SvgIconAdaptive_svg__3gHSl">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.477 15.785a1.883 1.883 0 01-2.954 0L.456 8.293A2.076 2.076 0 01.575 5.56l3.382-3.48c.361-.372.85-.581 1.358-.581h5.37c.509 0 .996.209 1.358.581l3.382 3.48c.718.739.77 1.928.12 2.732l-6.068 7.492zM1.962 7.812l4.487 5.54-1.948-5.54H1.962zM9.56 13.34l4.477-5.53h-2.524l-1.953 5.53zm2.016-7.03h2.516l-3.067-3.156a.473.473 0 00-.34-.145h-.098l.99 3.302zm-2.556-3.3l.978 3.3H5.99l.988-3.3h2.04zm.91 4.8l-1.928 5.443-1.919-5.442h3.848zm-4.615-4.8h.096l-.999 3.3H1.908l3.067-3.156a.473.473 0 01.34-.145z"
        fill="#8850FF"
      />
    </svg>
  );
};

export default Svg;
