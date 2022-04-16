import { DetailedHTMLProps, FC, HTMLAttributes, LiHTMLAttributes } from 'react';

import Image, { ImageProps } from 'next/image';

export type StepType = {
  isDone?: boolean;
  imgSrc: string;
  size?: number;
  containerProps?: DetailedHTMLProps<
    LiHTMLAttributes<HTMLLIElement>,
    HTMLLIElement
  >;
  imageContainerProps?: DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >;
  imageProps?: ImageProps;
  titleProps?: DetailedHTMLProps<
    HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  >;
};
const Step: FC<StepType> = ({
  imgSrc,
  size = 30,
  isDone = false,
  children,
  containerProps = {},
  imageContainerProps = {},
  imageProps = {},
  titleProps = {},
}) => {
  return (
    <>
      <li {...containerProps} className={`step ${isDone ? 'active' : ''}`}>
        <div {...imageContainerProps} className={`step__icon`}>
          <Image
            height={size}
            width={size}
            alt="Image"
            {...imageProps}
            src={imgSrc}
          />
        </div>
        <h3 {...titleProps} className={`step__text`}>
          {children}
        </h3>
      </li>
    </>
  );
};

export default Step;
