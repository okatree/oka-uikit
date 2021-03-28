import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
   return (
      <Svg viewBox="0 0 24 24" {...props}>
         <g
            id="g8143"
            transform="matrix(0.04687496,0,0,0.04687496,-1.074376e-5,-3.8781228e-4)">
            <path
               d="m 215.829,451.566 c -11.743,1.339 -23.59,-0.655 -37.292,-6.274 -5.112,-2.096 -10.952,0.349 -13.046,5.458 -2.095,5.11 0.349,10.951 5.458,13.046 13.328,5.465 25.833,8.161 37.966,8.161 3.081,0 6.14,-0.174 9.18,-0.521 5.487,-0.625 9.429,-5.581 8.803,-11.068 -0.626,-5.486 -5.581,-9.428 -11.069,-8.802 z"
               id="path8147" />
            <path
               d="m 511.575,200.431 c -3.61,-31.89 -29.986,-63.609 -78.47,-94.435 5.721,-27.369 10.105,-51.458 -0.338,-80.083 -3.673,-10.05 -10.893,-18.002 -20.33,-22.392 -8.496,-3.953 -18.221,-4.611 -26.012,-1.764 -7.518,2.748 -13.516,8.259 -16.888,15.518 -3.373,7.259 -3.717,15.396 -0.971,22.908 4.225,11.58 6.497,23.381 6.816,35.228 -39.038,-16.267 -70.965,-19.175 -95.242,-8.599 -22.561,9.829 -37.651,30.727 -44.85,62.112 -1.016,4.43 -0.105,8.324 1.864,11.712 -9.97,17.76 -18.234,34.726 -24.665,50.639 -7.092,-3.971 -14.679,-6.579 -22.748,-7.791 -26.187,-3.932 -56.274,7.141 -89.772,32.958 -2.758,-11.525 -3.617,-23.511 -2.533,-35.785 0.708,-7.973 -1.729,-15.745 -6.866,-21.883 -5.137,-6.138 -12.356,-9.91 -20.329,-10.619 -8.261,-0.737 -17.486,2.419 -24.67,8.437 -7.979,6.683 -12.895,16.233 -13.843,26.897 -2.677,30.345 7.792,52.48 20.402,77.435 -38.855,42.324 -56.122,79.789 -51.356,111.526 3.655,24.337 19.935,44.321 48.388,59.399 2.461,1.304 4.913,1.86 7.315,1.86 1.518,0 3.015,-0.229 4.48,-0.626 45.697,44.634 86.626,69.786 124.974,76.826 7.977,1.464 15.5,2.089 22.616,2.089 24.04,0 43.402,-7.135 59.69,-13.138 11.507,-4.241 21.444,-7.903 30.009,-7.903 5.523,0 10,-4.477 10,-10 0,-8.564 3.663,-18.502 7.903,-30.009 5.912,-16.042 12.915,-35.069 13.126,-58.608 22.165,-2.633 42.572,-10.852 62.145,-25.033 26.785,-19.407 52.239,-49.773 77.713,-92.729 0.019,0 0.038,0.002 0.057,0.002 3.899,0 7.707,-1.171 11.019,-4.251 23.581,-21.928 34.134,-45.445 31.366,-69.898 z M 387.352,33.323 c -0.914,-2.5 -0.799,-5.207 0.322,-7.621 1.121,-2.414 3.116,-4.247 5.617,-5.161 2.149,-0.786 6.243,-0.966 10.709,1.113 3.251,1.513 7.623,4.67 9.979,11.119 7.755,21.258 5.405,40.092 0.949,62.31 -6.718,-3.826 -13.276,-7.344 -19.661,-10.534 0.853,-17.252 -1.796,-34.452 -7.915,-51.226 z M 51.649,185.253 c 0.608,-6.845 4.013,-11.026 6.763,-13.329 3.777,-3.165 7.781,-4.052 10.057,-3.847 2.651,0.235 5.052,1.49 6.76,3.531 1.708,2.042 2.519,4.626 2.283,7.284 -1.569,17.779 0.327,35.079 5.614,51.521 -5.343,4.735 -10.767,9.831 -16.267,15.266 C 56.806,225.371 49.661,207.788 51.649,185.253 Z M 20.552,369.48 c -4.205,-28.005 16.021,-65.256 58.491,-107.727 38.802,-38.803 73.245,-59.035 100.263,-59.035 2.554,0 5.045,0.181 7.464,0.544 17.259,2.592 31.977,14.785 43.767,36.251 -1.002,1.688 -4.058,5.67 -13.21,13.118 -8.762,7.129 -20.156,15.121 -32.22,23.581 -19.019,13.338 -38.685,27.131 -51.579,40.025 -12.893,12.894 -26.686,32.56 -40.024,51.579 -8.46,12.063 -16.452,23.458 -23.581,32.22 -7.448,9.153 -11.43,12.208 -13.118,13.21 C 35.337,401.457 23.144,386.74 20.552,369.48 Z m 276.831,74.552 c -3.509,9.521 -6.873,18.647 -8.351,27.711 -9.063,1.479 -18.19,4.842 -27.711,8.351 -39.678,14.625 -88.826,32.713 -183.575,-58.596 1.44,-1.519 2.683,-2.939 3.686,-4.084 8.63,-9.858 18.255,-23.583 28.445,-38.113 12.847,-18.317 26.131,-37.259 37.792,-48.92 11.662,-11.662 30.604,-24.946 48.921,-37.792 14.53,-10.19 28.254,-19.815 38.113,-28.445 1.145,-1.003 2.566,-2.248 4.084,-3.687 91.309,94.748 73.219,143.895 58.596,183.575 z m 30.443,-71.636 c -0.191,-1.242 -0.396,-2.491 -0.628,-3.755 -7.04,-38.348 -32.193,-79.277 -76.828,-124.976 1.024,-3.782 0.896,-7.778 -1.232,-11.793 -5.953,-11.235 -12.675,-20.563 -20.124,-27.974 5.968,-15.567 13.897,-32.341 23.668,-50.046 1.84,0.998 3.536,1.834 4.902,2.506 11.756,5.784 27.504,11.529 44.176,17.612 21.019,7.668 42.753,15.597 57.036,23.843 14.282,8.246 32.017,23.104 49.167,37.473 13.604,11.397 26.453,22.163 37.34,29.452 1.265,0.847 2.834,1.896 4.617,2.991 -50.193,83.159 -92.529,100.97 -122.094,104.667 z M 468.013,254.339 c -1.89,-0.532 -6.527,-2.452 -16.09,-9.366 -9.154,-6.618 -19.822,-15.556 -31.116,-25.018 C 403,205.036 384.588,189.61 368.796,180.493 c -15.792,-9.117 -38.357,-17.35 -60.181,-25.312 -13.842,-5.05 -26.917,-9.82 -37.225,-14.438 -10.769,-4.825 -14.75,-7.881 -16.156,-9.252 5.832,-23.787 16.892,-39.373 32.893,-46.343 25.962,-11.311 67.18,-1.416 119.195,28.616 52.016,30.031 81.193,60.778 84.379,88.917 1.964,17.342 -6.004,34.714 -23.688,51.658 z"
               id="path8149" />
            <path
               d="m 135.855,421.897 -0.007,0 c -5.523,0 -9.996,4.477 -9.996,10 0,5.523 4.48,10 10.003,10 5.523,0 10,-4.477 10,-10 0,-5.523 -4.477,-10 -10,-10 z"
               id="path8151" />
         </g>
      </Svg>
   );
};

export default Icon;
