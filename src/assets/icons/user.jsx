const UserIcon = ({ color, ...rest }) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        fill={color}
        d="M 16 15.482 C 20.362 15.482 23.09 11.531 20.907 8.37 C 19.896 6.902 18.025 6 16 6 C 11.638 6 8.912 9.95 11.093 13.11 C 12.103 14.578 13.976 15.482 16 15.482 Z M 16 17.852 C 11.541 17.85 7.34 19.605 4.667 22.593 C 7.34 25.579 11.541 27.336 16 27.333 C 20.46 27.336 24.66 25.579 27.333 22.593 C 24.66 19.605 20.46 17.85 16 17.852 Z"
      />
    </svg>
  );
};

export default UserIcon;
