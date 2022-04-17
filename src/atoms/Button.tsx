import { ButtonHTMLAttributes, forwardRef } from 'react';

type ButtonVariant = 'primary' | 'white' | 'outline' | 'outline-primary';
export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  rounded?: boolean;
};

const variantList: Record<ButtonVariant, string> = {
  primary: 'text-white bg-blueMain',
  outline: 'text-white outline',
  white: 'text-blueMain bg-white',
  'outline-primary': 'text-blueMain outline outline-blueMain',
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      title = 'Button',
      variant = 'primary',
      className,
      children,
      type = 'button',
      rounded = false,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        type={type}
        title={title}
        className={`m-2 min-w-max p-2 px-5 ${
          rounded ? 'rounded-3xl' : 'rounded-sm'
        } ${variantList[variant]} ${className} h-fit`}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
