import React from "react";

const RightArrowIcon = ({ shouldResizeIcon = false, isIcon16x16 = false }) => {
  return (
    <svg
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      className={`${
        isIcon16x16
          ? "w-4 w-4"
          : shouldResizeIcon
          ? "w-4 h-4 md:w-5 md:h-5"
          : "w-5 h-5"
      }`}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.0031 17.1532C5.54064 16.6907 5.54064 15.9409 6.0031 15.4784L11.4815 10L6.0031 4.52157C5.54063 4.05911 5.54063 3.30931 6.0031 2.84685C6.46556 2.38438 7.21536 2.38438 7.67782 2.84685L13.9936 9.16264C14.4561 9.6251 14.4561 10.3749 13.9936 10.8374L7.67783 17.1532C7.21536 17.6156 6.46556 17.6156 6.0031 17.1532Z"
      />
    </svg>
  );
};

export default RightArrowIcon;
