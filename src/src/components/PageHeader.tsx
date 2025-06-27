import React from 'react';
interface PageHeaderProps {
  title: string;
  description?: string;
  icon?: React.ReactNode;
  color?: 'sky' | 'amber' | 'emerald' | 'purple' | 'rose' | 'blue' | 'red';
}
export function PageHeader({
  title,
  description,
  icon,
  color = 'sky'
}: PageHeaderProps) {
  const colorClasses = {
    sky: 'from-sky-50 to-sky-100 text-sky-800',
    amber: 'from-amber-50 to-amber-100 text-amber-800',
    emerald: 'from-emerald-50 to-emerald-100 text-emerald-800',
    purple: 'from-purple-50 to-purple-100 text-purple-800',
    rose: 'from-rose-50 to-rose-100 text-rose-800',
    blue: 'from-blue-50 to-blue-100 text-blue-800',
    red: 'from-red-50 to-red-100 text-red-800'
  };
  const iconColorClasses = {
    sky: 'bg-sky-100 text-sky-600',
    amber: 'bg-amber-100 text-amber-600',
    emerald: 'bg-emerald-100 text-emerald-600',
    purple: 'bg-purple-100 text-purple-600',
    rose: 'bg-rose-100 text-rose-600',
    blue: 'bg-blue-100 text-blue-600',
    red: 'bg-red-100 text-red-600'
  };
  const descriptionColorClasses = {
    sky: 'text-sky-600/80',
    amber: 'text-amber-600/80',
    emerald: 'text-emerald-600/80',
    purple: 'text-purple-600/80',
    rose: 'text-rose-600/80',
    blue: 'text-blue-600/80',
    red: 'text-red-600/80'
  };
  return <div className={`bg-gradient-to-r ${colorClasses[color]} rounded-xl p-6 shadow-md mb-6`}>
      <div className="flex items-center mb-3">
        {icon && <div className={`p-3 rounded-full ${iconColorClasses[color]} ml-3`}>
            {icon}
          </div>}
        <h1 className="text-2xl font-bold">{title}</h1>
      </div>
      {description && <p className={`${descriptionColorClasses[color]} max-w-2xl`}>
          {description}
        </p>}
    </div>;
}