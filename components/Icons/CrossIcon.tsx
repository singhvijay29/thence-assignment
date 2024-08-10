import React from "react";

const CrossIcon = () => {
  return (
    <svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0.5" y="0.5" width="63" height="63" rx="31.5" stroke="#CACACA" />
      <g clipPath="url(#clip0_11_214)">
        <path
          d="M40 24L24 40"
          stroke="#0C1319"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M24 24L40 40"
          stroke="#0C1319"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_11_214">
          <rect
            width="32"
            height="32"
            fill="white"
            transform="translate(16 16)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default CrossIcon;
