
export const HamburgerIcon = ({ onClick }) => (
  <svg
    onClick={onClick}
    className="hamburger-icon"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 80 80"
  >
    <g filter="url(#filter2_d_1_1006)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.3462 26C21.6027 26 21 26.6218 21 27.3889C21 28.1559 21.6027 28.7778 22.3462 28.7778H54.6538C55.3972 28.7778 56 28.1559 56 27.3889C56 26.6218 55.3972 26 54.6538 26H22.3462ZM21 38.5C21 37.7329 21.6027 37.1111 22.3462 37.1111H54.6538C55.3972 37.1111 56 37.7329 56 38.5C56 39.2671 55.3972 39.8889 54.6538 39.8889H22.3462C21.6027 39.8889 21 39.2671 21 38.5ZM21 49.6111C21 48.8442 21.6027 48.2222 22.3462 48.2222H54.6538C55.3972 48.2222 56 48.8442 56 49.6111C56 50.3781 55.3972 51 54.6538 51H22.3462C21.6027 51 21 50.3781 21 49.6111Z"
        fill="black"
      />
    </g>
    <defs>
      <filter
        id="filter2_d_1_1006"
        x="17"
        y="26"
        width="43"
        height="33"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="4" />
        <feGaussianBlur stdDeviation="2" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_1_1006"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_1_1006"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);


export default HamburgerIcon;