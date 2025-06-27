import React from 'react';
import { Quiz } from '../components/Quiz';
import { PageLayout } from '../components/PageLayout';
interface QuizPageProps {
  userType: 'husband' | 'wife' | 'both' | 'engaged';
}
export function QuizPage({
  userType
}: QuizPageProps) {
  return <PageLayout title="اختبر معلوماتك">
      <Quiz userType={userType} />
    </PageLayout>;
}