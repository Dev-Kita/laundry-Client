import { FC, HTMLAttributes } from 'react';

type ContainerType = FC<HTMLAttributes<HTMLDivElement>>;

const Container: ContainerType = ({ children, className, ...props }) => {
  return (
    <div className={`${className} px-7 w-full `} {...props}>
      {children}
    </div>
  );
};

export default Container;
