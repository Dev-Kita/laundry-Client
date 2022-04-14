import { FC, SVGAttributes } from 'react';

type SearchIconType = SVGAttributes<SVGSVGElement>;
const SearchIcon: FC<SearchIconType> = (props) => {
  return (
    <svg
      viewBox="0 0 95 95"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_132_0)">
        <path
          d="M63.4422 10.87C48.9498 -3.62236 25.3624 -3.62236 10.87 10.87C-3.61926 25.3655 -3.61926 48.9498 10.87 63.4453C23.7758 76.348 43.876 77.7304 58.359 67.6551C58.6637 69.0971 59.3612 70.4732 60.4827 71.5947L81.5882 92.7003C84.6639 95.7696 89.634 95.7696 92.6939 92.7003C95.7665 89.6277 95.7665 84.6577 92.6939 81.5946L71.5884 60.4828C70.4731 59.3706 69.094 58.67 67.6519 58.3653C77.7335 43.8792 76.3511 23.7821 63.4422 10.87ZM56.7787 56.7819C45.9589 67.6017 28.3501 67.6017 17.5334 56.7819C6.71987 45.9621 6.71987 28.3564 17.5334 17.5366C28.3501 6.71991 45.9589 6.71991 56.7787 17.5366C67.5985 28.3564 67.5985 45.9621 56.7787 56.7819Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_132_0">
          <rect width="95" height="95" fill="currentColor" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default SearchIcon;
