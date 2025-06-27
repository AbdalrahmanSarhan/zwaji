import React from 'react';
import { Scenarios } from '../components/Scenarios';
import { PageLayout } from '../components/PageLayout';
interface ScenariosPageProps {
  userType: 'husband' | 'wife' | 'both' | 'engaged';
}
export function ScenariosPage({
  userType
}: ScenariosPageProps) {
  return <PageLayout title="سيناريوهات واقعية">
      <Scenarios userType={userType} />
    </PageLayout>;
}