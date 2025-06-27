import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { UserIcon, UsersIcon } from 'lucide-react';
import { urlMappings } from '../../utils/urlMappings';
export function StoriesTabs({
  userType
}: {
  userType: string;
}) {
  const location = useLocation();
  const userTypePath = urlMappings.userTypePaths[userType as keyof typeof urlMappings.userTypePaths];
  const storiesPath = urlMappings.sectionPaths.stories;
  const tabs = [{
    label: 'للجميع',
    path: `/${userTypePath}/${storiesPath}/all`,
    icon: <UsersIcon className="h-4 w-4 ml-1.5 text-amber-500" />
  }, {
    label: 'قصص للزوج',
    path: `/${userTypePath}/${storiesPath}/husband`,
    icon: <UserIcon className="h-4 w-4 ml-1.5 text-sky-500" />
  }, {
    label: 'قصص للزوجة',
    path: `/${userTypePath}/${storiesPath}/wife`,
    icon: <UserIcon className="h-4 w-4 ml-1.5 text-rose-500" />
  }];
  return <div className="bg-white p-4 rounded-lg shadow-md mb-6">
      <div className="flex flex-wrap gap-2 justify-center">
        {tabs.map(tab => <Link key={tab.path} to={tab.path} className={`px-3 py-1.5 rounded-full text-sm font-medium flex items-center transition-colors duration-200 ${location.pathname === tab.path ? tab.path.includes('/husband') ? 'bg-sky-100 text-sky-700' : tab.path.includes('/wife') ? 'bg-rose-100 text-rose-700' : 'bg-amber-100 text-amber-700' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
            {tab.icon}
            <span>{tab.label}</span>
          </Link>)}
      </div>
    </div>;
}