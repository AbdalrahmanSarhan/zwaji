import React, { useEffect, useState, createContext, useContext } from 'react';
export interface ConsultationRequest {
  id: number;
  consultantId: number;
  consultantName: string;
  userName: string;
  userPhone: string;
  userEmail: string;
  topic: string;
  date: string;
  time: string;
  consultationType: 'online' | 'inPerson';
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  paymentMethod: string;
  paymentStatus: 'pending' | 'paid';
  createdAt: string;
}
interface ConsultationRequestsContextType {
  consultationRequests: ConsultationRequest[];
  addConsultationRequest: (request: Omit<ConsultationRequest, 'id' | 'createdAt'>) => void;
  updateConsultationRequest: (id: number, request: Partial<ConsultationRequest>) => void;
  deleteConsultationRequest: (id: number) => void;
  loading: boolean;
}
export const ConsultationRequestsContext = createContext<ConsultationRequestsContextType | undefined>(undefined);
export function ConsultationRequestsProvider({
  children
}: {
  children: React.ReactNode;
}) {
  const [consultationRequests, setConsultationRequests] = useState<ConsultationRequest[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Load consultation requests from localStorage on mount
    const savedRequests = localStorage.getItem('consultationRequests');
    if (savedRequests) {
      setConsultationRequests(JSON.parse(savedRequests));
    } else {
      // If no saved requests, initialize with sample data
      setConsultationRequests(sampleConsultationRequests);
      localStorage.setItem('consultationRequests', JSON.stringify(sampleConsultationRequests));
    }
    setLoading(false);
  }, []);
  const saveConsultationRequests = (newRequests: ConsultationRequest[]) => {
    localStorage.setItem('consultationRequests', JSON.stringify(newRequests));
    setConsultationRequests(newRequests);
  };
  const addConsultationRequest = (request: Omit<ConsultationRequest, 'id' | 'createdAt'>) => {
    const newRequest = {
      ...request,
      id: Math.max(0, ...consultationRequests.map(r => r.id)) + 1,
      createdAt: new Date().toISOString()
    };
    const newRequests = [...consultationRequests, newRequest];
    saveConsultationRequests(newRequests);
  };
  const updateConsultationRequest = (id: number, updatedFields: Partial<ConsultationRequest>) => {
    const newRequests = consultationRequests.map(request => request.id === id ? {
      ...request,
      ...updatedFields
    } : request);
    saveConsultationRequests(newRequests);
  };
  const deleteConsultationRequest = (id: number) => {
    const newRequests = consultationRequests.filter(request => request.id !== id);
    saveConsultationRequests(newRequests);
  };
  return <ConsultationRequestsContext.Provider value={{
    consultationRequests,
    addConsultationRequest,
    updateConsultationRequest,
    deleteConsultationRequest,
    loading
  }}>
      {children}
    </ConsultationRequestsContext.Provider>;
}
export function useConsultationRequests() {
  const context = useContext(ConsultationRequestsContext);
  if (context === undefined) {
    throw new Error('useConsultationRequests must be used within a ConsultationRequestsProvider');
  }
  return context;
}
// Sample consultation requests data
const sampleConsultationRequests: ConsultationRequest[] = [{
  id: 1,
  consultantId: 1,
  consultantName: 'د. وائل المومني',
  userName: 'أحمد محمد',
  userPhone: '0777123456',
  userEmail: 'ahmed@example.com',
  topic: 'مشاكل في التواصل مع الزوجة',
  date: 'الأحد',
  time: 'صباحاً',
  consultationType: 'online',
  status: 'confirmed',
  paymentMethod: 'bank',
  paymentStatus: 'paid',
  createdAt: '2023-06-15T10:30:00.000Z'
}, {
  id: 2,
  consultantId: 3,
  consultantName: 'د. عصام محمد الجراح',
  userName: 'محمد عبدالله',
  userPhone: '0799876543',
  userEmail: 'mohammad@example.com',
  topic: 'استشارة ما قبل الزواج',
  date: 'الثلاثاء',
  time: 'مساءً',
  consultationType: 'inPerson',
  status: 'pending',
  paymentMethod: 'cash',
  paymentStatus: 'pending',
  createdAt: '2023-06-18T14:20:00.000Z'
}, {
  id: 3,
  consultantId: 2,
  consultantName: 'د. موسى القطامي',
  userName: 'سارة أحمد',
  userPhone: '0788123456',
  userEmail: 'sara@example.com',
  topic: 'مشاكل مع أهل الزوج',
  date: 'الخميس',
  time: 'مساءً',
  consultationType: 'online',
  status: 'completed',
  paymentMethod: 'cliq',
  paymentStatus: 'paid',
  createdAt: '2023-06-10T09:15:00.000Z'
}, {
  id: 4,
  consultantId: 4,
  consultantName: 'د. خالد البداينة',
  userName: 'فاطمة محمود',
  userPhone: '0799123456',
  userEmail: 'fatima@example.com',
  topic: 'الاستعداد للزواج والحياة الزوجية',
  date: 'السبت',
  time: 'صباحاً',
  consultationType: 'online',
  status: 'cancelled',
  paymentMethod: 'bank',
  paymentStatus: 'pending',
  createdAt: '2023-06-05T16:45:00.000Z'
}];