import React from 'react';
import { CoupleStories } from '../components/CoupleStories';
import { PageLayout } from '../components/PageLayout';
interface CoupleStoriesPageProps {
  userType: 'husband' | 'wife' | 'both' | 'engaged';
}
export function CoupleStoriesPage({
  userType
}: CoupleStoriesPageProps) {
  return <PageLayout title="يوميات زوجين ناجحين">
      <CoupleStories userType={userType} />
    </PageLayout>;
}