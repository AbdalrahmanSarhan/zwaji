import React from 'react';
type CardVariant = 'default' | 'outline' | 'filled';
interface CardProps {
  children: React.ReactNode;
  variant?: CardVariant;
  color?: 'sky' | 'rose' | 'amber' | 'emerald' | 'purple' | 'slate';
  className?: string;
  onClick?: () => void;
}
export const Card: React.FC<CardProps> = ({
  children,
  variant = 'default',
  color = 'slate',
  className = '',
  onClick
}) => {
  // Map of variant styles
  const variantStyles = {
    default: 'bg-white shadow-md',
    outline: `bg-white border border-${color}-200`,
    filled: `bg-${color}-50 border border-${color}-100`
  };
  const clickableStyles = onClick ? 'cursor-pointer transition-all duration-200 hover:shadow-lg' : '';
  return <div className={`rounded-lg overflow-hidden ${variantStyles[variant]} ${clickableStyles} ${className}`} onClick={onClick}>
      {children}
    </div>;
};
export const CardHeader: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({
  children,
  className = ''
}) => <div className={`p-4 border-b border-slate-100 ${className}`}>{children}</div>;
export const CardBody: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({
  children,
  className = ''
}) => <div className={`p-4 ${className}`}>{children}</div>;
export const CardFooter: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({
  children,
  className = ''
}) => <div className={`p-4 border-t border-slate-100 ${className}`}>{children}</div>;