import React from 'react';

const Spade = ({ color = '#fff', width = 42.4, height = 42.7 }) => (
  <svg
    id="Calque_2"
    data-name="Calque 2"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 42.4 42.7"
    width={width}
    height={height}
  >
    <defs>
      <style>
        {`.cls-5 { fill: ${color}; stroke-width: 0px; }`}
      </style>
    </defs>
    <g id="Calque_1-2" data-name="Calque 1">
      <g id="pique">
        <path
          className="cls-5"
          d="M41.25,22.98c-2.15-4.73-6.72-7.79-10.88-10.89-4.16-3.11-8.38-6.95-9.17-12.08-.8,5.13-5.02,8.98-9.17,12.08-4.16,3.11-8.73,6.17-10.88,10.89-1.62,3.57-1.57,7.93.44,11.29,2.01,3.36,6.03,5.51,9.91,4.98,3.57-.49,8.6-4.63,9.55-8.34-.55,3.69-2.38,9.98-5,11.79h10.31c-2.63-1.81-4.45-8.11-5-11.79.95,3.71,5.98,7.85,9.55,8.34,3.88.53,7.9-1.62,9.91-4.98,2.01-3.36,2.05-7.72.44-11.29Z"
        />
      </g>
    </g>
  </svg>
);

export default Spade;
