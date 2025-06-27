import React from 'react';
import { ScholarOpinions } from '../components/ScholarOpinions';
import { PageLayout } from '../components/PageLayout';
interface ScholarOpinionsPageProps {
  userType: 'husband' | 'wife' | 'both' | 'engaged';
}
export function ScholarOpinionsPage({
  userType
}: ScholarOpinionsPageProps) {
  return <PageLayout title="أصوات العلماء">
      <ScholarOpinions userType={userType} />
    </PageLayout>;
}