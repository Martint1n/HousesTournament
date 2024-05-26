import React from 'react';

const Diamond = ({ color = '#fff', width = 40.68, height = 46.68 }) => (
  <svg
    id="Calque_1"
    data-name="Calque 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 40.68 46.68"
    width={width}
    height={height}
  >
    <defs>
      <style>
        {`.cls-1 { fill: ${color}; stroke-width: 0px; }`}
      </style>
    </defs>
    <g id="Calque_1-1" data-name="Calque 2">
      <g id="carreau">
        <path
          className="cls-1"
          d="M20.34,0C17.32,10.3,9.89,18.88,0,23.29c9.83,4.43,17.33,13.13,20.34,23.39,3.02-10.3,10.45-18.88,20.34-23.29C30.85,18.96,23.34,10.26,20.34,0Z"
        />
      </g>
    </g>
  </svg>
);

export default Diamond;
