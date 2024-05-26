import React from 'react';

const Star = ({ color = '#fff', width = 51.19, height = 51.19 }) => (
  <svg
    id="Calque_2"
    data-name="Calque 2"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 51.19 51.19"
    width={width}
    height={height}
  >
    <defs>
      <style>
        {`.cls-3 { fill: ${color}; stroke-width: 0px; }`}
      </style>
    </defs>
    <g id="Calque_1-2" data-name="Calque 1">
      <polygon
        id="_étoile"
        data-name="étoile"
        className="cls-3"
        points="33.99 30.12 51.19 25.6 33.99 21.08 39.42 11.77 30.12 17.2 25.6 0 21.08 17.2 11.77 11.77 17.2 21.08 0 25.6 17.2 30.12 11.77 39.42 21.08 33.99 25.6 51.19 30.12 33.99 39.42 39.42 33.99 30.12"
      />
    </g>
  </svg>
);

export default Star;