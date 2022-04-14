import { ButtonHTMLAttributes } from 'react';

type ButtonVariant = 'primary' | 'white' | 'outline' | 'outline-primary';
type IButton = React.FC<
  ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: ButtonVariant;
  }
>;

const variantList: Record<ButtonVariant, string> = {
  primary: 'text-white bg-blueMain',
  outline: 'text-white outline',
  white: 'text-blueMain bg-white',
  'outline-primary': 'text-blueMain outline outline-blueMain',
};

const Button: IButton = ({
  title = 'button',
  variant = 'primary',
  className,
  children,
  type = 'button',
  ...props
}) => {
  return (
    <button
      type={type}
      title={title}
      className={`m-2 p-2 px-5 rounded-3xl ${variantList[variant]} ${className} h-fit`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
