import { FC } from 'react';

import Image, { ImageProps } from 'next/image';

type IconCircleType = {
  text: string;
};
const IconCircle: FC<IconCircleType & ImageProps> = ({
  src,
  alt = 'Image',
  text,
}) => {
  return (
    <div className="flex flex-col items-center">
      <div className="p-6 bg-blueMain rounded-full shadow-lg">
        <div
          className={`hover:scale-110 transition-all flex relative text-white items-center justify-center h-16 w-16`}
        >
          <Image src={src} alt={alt} layout="fill" />
        </div>
      </div>
      <h5 className="mt-2 text-center text-blueMain">{text}</h5>
    </div>
  );
};

export default IconCircle;
