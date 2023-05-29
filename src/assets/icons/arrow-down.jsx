import React from "react";
const ArrowDown = ({
  color = "currentColor",
  width = "29px",
  height = "29px",
  ...props
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 29 29"
      {...props}
    >
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="2"
        d="m20.5 11.5-6 6-6-6"
        transform="translate(18.396 18.4) rotate(180)"
        fill={color}
      />
    </svg>

    // <svg

    //      xmlns="http://www.w3.org/2000/svg"
    //     width={width}
    //     height={height}
    //     viewBox="0 0 11.996 12"
    //     {...props}
    //   >
    //     <path
    //       data-name="Path 2462"
    //       d="M 340.495 79.248 C 334.371 73.584 324.438 73.583 318.313 79.249 L 172.549 214.047 L 26.778 79.248 C 20.653 73.584 10.721 73.583 4.595 79.249 C -1.531 84.914 -1.531 94.098 4.595 99.763 L 161.457 244.818 C 164.4 247.538 168.389 249.066 172.549 249.066 C 176.708 249.066 180.699 247.537 183.64 244.817 L 340.494 99.762 C 346.621 94.098 346.621 84.913 340.495 79.248 Z"
    //       transform="translate(18.396 18.4) rotate(180)"
    //       fill={color}
    //     />
    //   </svg>
  );
};

export default ArrowDown;
