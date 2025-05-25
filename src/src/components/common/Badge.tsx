import React from 'react';
interface BadgeProps {
  children: React.ReactNode;
  color?: 'sky' | 'rose' | 'amber' | 'emerald' | 'purple' | 'slate';
  variant?: 'solid' | 'outline' | 'subtle';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  className?: string;
}
export const Badge: React.FC<BadgeProps> = ({
  children,
  color = 'sky',
  variant = 'subtle',
  size = 'md',
  icon,
  className = ''
}) => {
  // Map variant styles
  const variantStyles = {
    solid: `bg-${color}-500 text-white`,
    outline: `bg-transparent text-${color}-700 border border-${color}-300`,
    subtle: `bg-${color}-50 text-${color}-700`
  };
  // Map size styles
  const sizeStyles = {
    sm: 'text-xs px-2 py-0.5',
    md: 'text-sm px-2.5 py-1',
    lg: 'px-3 py-1.5'
  };
  return <span className={`inline-flex items-center font-medium rounded-full ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}>
      {icon && <span className="mr-1.5">{icon}</span>}
      {children}
    </span>;
};