import React from 'react';
interface AllStoriesProps {
  userType: string;
}
export function AllStories({
  userType
}: AllStoriesProps) {
  return <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-bold mb-4 text-amber-800">قصص للجميع</h3>
      <div className="space-y-4">
        {/* Stories content goes here */}
        <p className="text-slate-600">
          هنا ستظهر قصص واقعية للأزواج تناسب الجميع
        </p>
      </div>
    </div>;
}