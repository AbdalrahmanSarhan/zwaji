import React from 'react';
import { Outlet } from 'react-router-dom';
import { StoriesTabs } from './StoriesTabs';
import { PageHeader } from '../PageHeader';
import { HeartIcon } from 'lucide-react';
interface StoriesPageProps {
  userType: string;
}
export function StoriesPage({
  userType
}: StoriesPageProps) {
  const pageTitle = 'يوميات زوجين';
  const pageDescription = 'قصص واقعية من حياة الأزواج مع دروس وعبر مستفادة';
  return <div className="max-w-4xl mx-auto">
      <PageHeader title={pageTitle} description={pageDescription} icon={<HeartIcon className="h-6 w-6" />} color="rose" />
      <StoriesTabs userType={userType} />
      <Outlet />
    </div>;
}