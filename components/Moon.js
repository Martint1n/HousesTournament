import React from 'react';

const Moon = ({ color = '#fff', width = 39.27, height = 45.55 }) => (
  <svg
    id="Calque_2"
    data-name="Calque 2"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 39.27 45.55"
    width={width}
    height={height}
  >
    <defs>
      <style>
        {`.cls-4 { fill: ${color}; stroke-width: 0px; }`}
      </style>
    </defs>
    <g id="Calque_1-2" data-name="Calque 1">
      <g id='lune'>
        <path
          className="cls-4"
          d="M31.04,40.53c-9.83.04-17.83-7.88-17.87-17.71-.04-9.83,7.88-17.83,17.71-17.87,2.97-.01,5.78.71,8.25,1.99C34.96,2.63,29.12-.03,22.67,0,10.09.06-.06,10.3,0,22.88c.06,12.58,10.3,22.73,22.88,22.67,6.45-.03,12.27-2.75,16.39-7.08-2.46,1.3-5.26,2.05-8.23,2.06Z"
        />
      </g>
    </g>
  </svg>
);

export default Moon;
