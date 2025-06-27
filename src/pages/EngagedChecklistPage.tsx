import React from 'react';
import { EngagedChecklist } from '../components/EngagedChecklist';
import { PageLayout } from '../components/PageLayout';
export function EngagedChecklistPage() {
  return <PageLayout title="قائمة التحضير">
      <EngagedChecklist />
    </PageLayout>;
}