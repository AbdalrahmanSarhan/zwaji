import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { HeartIcon } from 'lucide-react';
import { PageHeader } from './PageHeader';
import { LoadingSpinner } from './LoadingSpinner';
export function EngagementPhase() {
  const navigate = useNavigate();
  // Redirect to the engagement layout
  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      navigate('/moqbilin-ala-alzawaj/engagement');
    }, 100);
    return () => clearTimeout(redirectTimer);
  }, [navigate]);
  return <div className="max-w-4xl mx-auto">
      <PageHeader title="مرحلة الخطوبة في الإسلام" description="جاري التحويل إلى صفحة مرحلة الخطوبة..." icon={<HeartIcon className="h-6 w-6" />} color="purple" />
      <div className="bg-white rounded-xl shadow-md p-8 text-center">
        <div className="flex flex-col items-center justify-center space-y-4">
          <LoadingSpinner size="md" />
          <p className="text-slate-600">جاري التحميل...</p>
        </div>
      </div>
    </div>;
}