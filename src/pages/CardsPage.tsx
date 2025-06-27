import React from 'react';
import { CardView } from '../components/CardView';
import { PageLayout } from '../components/PageLayout';
interface CardsPageProps {
  userType: 'husband' | 'wife' | 'both' | 'engaged';
}
export function CardsPage({
  userType
}: CardsPageProps) {
  return <PageLayout title="بطاقات معرفية">
      <CardView userType={userType} />
    </PageLayout>;
}