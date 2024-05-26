import React from 'react';

const Heart = ({ color = '#fff', width = 45.78, height = 42.46 }) => (
  <svg
    id="Calque_3"
    data-name="Calque 3"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 45.78 42.46"
    width={width}
    height={height}
  >
    <defs>
      <style>
        {`.cls-2 { fill: ${color}; stroke-width: 0px; }`}
      </style>
    </defs>
    <g id="Calque_1-2" data-name="Calque 1">
      <g id="coeur">
        <path
          className="cls-2"
          d="M44.07,5.46C41.9,1.83,37.56-.49,33.37.09c-4.19.58-10.23,5.8-10.48,10.02C22.64,5.89,16.6,.66,12.41,.09,8.22-.49,3.88,1.83,1.71,5.46c-2.17,3.63-2.22,8.34-.47,12.19,2.32,5.1,7.25,8.41,11.74,11.76,4.49,3.35,9.04,7.51,9.91,13.05.86-5.54,5.41-9.69,9.91-13.05,4.49-3.35,9.43-6.66,11.74-11.76,1.75-3.85,1.7-8.56-.47-12.19Z"
        />
      </g>
    </g>
  </svg>
);

export default Heart;
