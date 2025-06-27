import React from 'react';
interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  color?: 'sky' | 'purple' | 'amber' | 'rose' | 'emerald' | 'slate';
}
export function LoadingSpinner({
  size = 'md',
  color = 'sky'
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'h-4 w-4 border-2',
    md: 'h-8 w-8 border-3',
    lg: 'h-12 w-12 border-4'
  };
  const colorClasses = {
    sky: 'border-sky-600 border-t-transparent',
    purple: 'border-purple-600 border-t-transparent',
    amber: 'border-amber-600 border-t-transparent',
    rose: 'border-rose-600 border-t-transparent',
    emerald: 'border-emerald-600 border-t-transparent',
    slate: 'border-slate-600 border-t-transparent'
  };
  return <div className={`${sizeClasses[size]} ${colorClasses[color]} rounded-full animate-spin`}></div>;
}