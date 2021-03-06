import { FC, SVGProps } from 'react';

const ArrowDownIcon: FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width="30"
      height="17"
      viewBox="0 0 30 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M29.6335 0.36654C29.1447 -0.12218 28.3547 -0.12218 27.866 0.36654L15 13.2325L2.13398 0.36654C1.64526 -0.12218 0.855261 -0.12218 0.36654 0.36654C-0.12218 0.85526 -0.12218 1.64526 0.36654 2.13398L14.1163 15.8837C14.36 16.1275 14.68 16.25 15 16.25C15.3201 16.25 15.64 16.1275 15.8838 15.8837L29.6335 2.13398C30.1222 1.64526 30.1222 0.85526 29.6335 0.36654Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default ArrowDownIcon;
