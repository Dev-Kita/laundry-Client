import { FC, HTMLAttributes } from 'react';

import Button, { ButtonProps } from '@/atoms/Button';
import Input, { InputProps } from '@/atoms/Input';

type InputGroupType = FC<
  {
    inputProps?: InputProps;
    buttonProps?: ButtonProps;
  } & HTMLAttributes<HTMLDivElement>
>;
const InputGroup: InputGroupType = ({
  buttonProps = {},
  inputProps = {},
  className,
  ...props
}) => {
  return (
    <div className={`flex w-full ${className}`} {...props}>
      <Input className="m-0" {...inputProps} />
      <Button className="m-0 -ml-1" {...buttonProps} />
    </div>
  );
};

export default InputGroup;
