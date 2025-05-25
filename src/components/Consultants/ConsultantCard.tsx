import React from 'react';
import { Consultant } from './index';
import { StarIcon, MapPinIcon, ClockIcon, CheckIcon, MonitorIcon, UsersIcon } from 'lucide-react';
interface ConsultantCardProps {
  consultant: Consultant;
  onBooking: () => void;
}
export function ConsultantCard({
  consultant,
  onBooking
}: ConsultantCardProps) {
  return <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="p-5">
        <div className="flex items-start">
          <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-sky-100 flex-shrink-0">
            <img src={consultant.image} alt={consultant.name} className="w-full h-full object-cover" />
          </div>
          <div className="mr-4 flex-1">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-bold text-lg text-sky-900">
                  {consultant.name}
                </h3>
                <p className="text-slate-600 text-sm">{consultant.title}</p>
              </div>
              <div className="flex items-center bg-amber-50 px-2 py-1 rounded-md">
                <StarIcon className="h-4 w-4 text-amber-500 ml-1" />
                <span className="font-medium text-amber-700">
                  {consultant.rating}
                </span>
                <span className="text-xs text-slate-500 mr-1">
                  ({consultant.reviewCount})
                </span>
              </div>
            </div>
            <div className="mt-2 flex flex-wrap gap-1">
              {consultant.specialization.map((spec, index) => <span key={index} className="text-xs bg-blue-50 text-blue-700 rounded-full px-2 py-0.5">
                  {spec}
                </span>)}
            </div>
          </div>
        </div>
        <div className="mt-4 text-sm text-slate-700">
          <div className="flex items-center text-slate-600 mb-2">
            <CheckIcon className="h-4 w-4 text-green-500 ml-1" />
            <span>{consultant.experience}</span>
          </div>
          <p className="mb-3">{consultant.bio}</p>
          <div className="flex items-start mb-2">
            <MapPinIcon className="h-4 w-4 text-slate-400 ml-1 mt-0.5 flex-shrink-0" />
            <span className="text-slate-600">{consultant.location}</span>
          </div>
          <div className="flex items-center mb-2">
            <ClockIcon className="h-4 w-4 text-slate-400 ml-1" />
            <span className="text-slate-600">
              مدة الجلسة: {consultant.duration}
            </span>
          </div>
        </div>
        <div className="mt-4 space-y-2">
          {consultant.onlineAvailable && <div className="flex items-center justify-between bg-green-50 p-2 rounded-md">
              <div className="flex items-center">
                <MonitorIcon className="h-4 w-4 text-green-600 ml-2" />
                <span className="text-green-800 font-medium">
                  استشارة أونلاين
                </span>
              </div>
              <span className="font-bold text-green-700">
                {consultant.price.online}
              </span>
            </div>}
          {consultant.inPersonAvailable && <div className="flex items-center justify-between bg-purple-50 p-2 rounded-md">
              <div className="flex items-center">
                <UsersIcon className="h-4 w-4 text-purple-600 ml-2" />
                <span className="text-purple-800 font-medium">
                  استشارة وجاهية
                </span>
              </div>
              <span className="font-bold text-purple-700">
                {consultant.price.inPerson}
              </span>
            </div>}
        </div>
        {consultant.badges && consultant.badges.length > 0 && <div className="mt-3 flex flex-wrap gap-1">
            {consultant.badges.map((badge, index) => <span key={index} className="text-xs bg-rose-50 text-rose-700 rounded-full px-2 py-0.5">
                {badge}
              </span>)}
          </div>}
        {consultant.discount && <div className="mt-3 bg-amber-50 border border-amber-100 rounded-md p-2 text-sm text-amber-800">
            <span className="font-medium">{consultant.discount}</span>
          </div>}
      </div>
      <div className="px-5 pb-5">
        <button onClick={onBooking} className="w-full py-2.5 bg-sky-600 hover:bg-sky-700 text-white rounded-md transition-colors duration-200 font-medium">
          حجز موعد
        </button>
      </div>
    </div>;
}