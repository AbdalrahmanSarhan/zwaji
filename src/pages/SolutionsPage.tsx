import React from 'react';
import { Solutions } from '../components/Solutions';
import { PageLayout } from '../components/PageLayout';
interface SolutionsPageProps {
  userType: 'husband' | 'wife' | 'both' | 'engaged';
}
export function SolutionsPage({
  userType
}: SolutionsPageProps) {
  return <PageLayout title="الحلول الهادئة">
      <Solutions userType={userType} />
    </PageLayout>;
}