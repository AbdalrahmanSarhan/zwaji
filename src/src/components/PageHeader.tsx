import React from 'react';
interface PageHeaderProps {
  title: string;
  description: string;
  icon: ReactNode;
  color: string;
}
export function PageHeader({
  title,
  description,
  icon,
  color
}: PageHeaderProps) {
  return <div className="mb-8">
      <div className={`bg-${color}-50 rounded-xl p-6 shadow-sm border border-${color}-100`}>
        <div className="flex items-center mb-4">
          <div className={`p-3 rounded-full bg-${color}-100 ml-4`}>
            <div className={`text-${color}-600`}>{icon}</div>
          </div>
          <div>
            <h2 className={`text-2xl font-bold text-${color}-900 mb-1`}>
              {title}
            </h2>
            <p className={`text-${color}-600`}>{description}</p>
          </div>
        </div>
      </div>
    </div>;
}