import { FC, InputHTMLAttributes } from 'react';

export type InputProps = InputHTMLAttributes<HTMLInputElement>;
export type InputType = FC<InputProps>;

const Input: InputType = ({
  className,
  title = 'Input',
  type = 'text',
  ...props
}) => {
  return (
    <>
      <input
        type={type}
        title={title}
        className={`m-2 border-2 py-1 px-2 w-full border-blueMain rounded-sm ${className}`}
        {...props}
      />
    </>
  );
};

export default Input;
