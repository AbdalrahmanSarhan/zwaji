import React from 'react';
type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'link';
type ButtonSize = 'sm' | 'md' | 'lg';
type ButtonColor = 'sky' | 'rose' | 'amber' | 'emerald' | 'purple' | 'slate';
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  color?: ButtonColor;
  fullWidth?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  isLoading?: boolean;
  children: React.ReactNode;
}
export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  color = 'sky',
  fullWidth = false,
  icon,
  iconPosition = 'left',
  isLoading = false,
  children,
  className = '',
  disabled,
  ...props
}) => {
  // Map of variant styles
  const variantStyles = {
    primary: `bg-${color}-600 text-white hover:bg-${color}-700`,
    secondary: `bg-${color}-100 text-${color}-700 hover:bg-${color}-200`,
    outline: `border border-${color}-300 text-${color}-700 hover:bg-${color}-50`,
    ghost: `text-${color}-600 hover:bg-${color}-50`,
    link: `text-${color}-600 hover:underline`
  };
  // Map of size styles
  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2',
    lg: 'px-6 py-3 text-lg'
  };
  // Base button classes
  const baseClasses = 'font-medium rounded-md transition-colors duration-200 flex items-center justify-center';
  // Disabled state
  const disabledClasses = disabled || isLoading ? 'opacity-50 cursor-not-allowed' : '';
  // Full width
  const widthClasses = fullWidth ? 'w-full' : '';
  return <button className={`${baseClasses} ${variantStyles[variant]} ${sizeStyles[size]} ${widthClasses} ${disabledClasses} ${className}`} disabled={disabled || isLoading} {...props}>
      {isLoading && <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>}
      {icon && iconPosition === 'left' && !isLoading && <span className="mr-2">{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span className="ml-2">{icon}</span>}
    </button>;
};