import React, { useEffect, useState, createContext, useContext } from 'react';
export interface ContactMessage {
  id: number;
  name: string;
  email: string;
  phone: string;
  message: string;
  subject: string;
  createdAt: string;
  status: 'new' | 'read' | 'replied' | 'archived';
}
interface ContactContextType {
  contactMessages: ContactMessage[];
  addContactMessage: (message: Omit<ContactMessage, 'id' | 'createdAt' | 'status'>) => void;
  updateContactMessage: (id: number, message: Partial<ContactMessage>) => void;
  deleteContactMessage: (id: number) => void;
  loading: boolean;
}
export const ContactContext = createContext<ContactContextType | undefined>(undefined);
export function ContactProvider({
  children
}: {
  children: React.ReactNode;
}) {
  const [contactMessages, setContactMessages] = useState<ContactMessage[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Load contact messages from localStorage on mount
    const savedMessages = localStorage.getItem('contactMessages');
    if (savedMessages) {
      setContactMessages(JSON.parse(savedMessages));
    } else {
      // If no saved messages, initialize with sample data
      setContactMessages(sampleContactMessages);
      localStorage.setItem('contactMessages', JSON.stringify(sampleContactMessages));
    }
    setLoading(false);
  }, []);
  const saveContactMessages = (newMessages: ContactMessage[]) => {
    localStorage.setItem('contactMessages', JSON.stringify(newMessages));
    setContactMessages(newMessages);
  };
  const addContactMessage = (message: Omit<ContactMessage, 'id' | 'createdAt' | 'status'>) => {
    const newMessage = {
      ...message,
      id: Math.max(0, ...contactMessages.map(m => m.id)) + 1,
      createdAt: new Date().toISOString(),
      status: 'new' as const
    };
    const newMessages = [...contactMessages, newMessage];
    saveContactMessages(newMessages);
  };
  const updateContactMessage = (id: number, updatedFields: Partial<ContactMessage>) => {
    const newMessages = contactMessages.map(message => message.id === id ? {
      ...message,
      ...updatedFields
    } : message);
    saveContactMessages(newMessages);
  };
  const deleteContactMessage = (id: number) => {
    const newMessages = contactMessages.filter(message => message.id !== id);
    saveContactMessages(newMessages);
  };
  return <ContactContext.Provider value={{
    contactMessages,
    addContactMessage,
    updateContactMessage,
    deleteContactMessage,
    loading
  }}>
      {children}
    </ContactContext.Provider>;
}
export function useContact() {
  const context = useContext(ContactContext);
  if (context === undefined) {
    throw new Error('useContact must be used within a ContactProvider');
  }
  return context;
}
// Sample contact messages data
const sampleContactMessages: ContactMessage[] = [{
  id: 1,
  name: 'محمد أحمد',
  email: 'mohammad@example.com',
  phone: '0777123456',
  subject: 'استفسار عن الاستشارات',
  message: 'أرغب في معرفة المزيد عن خدمات الاستشارة الزوجية التي تقدمونها وكيفية التسجيل للحصول على استشارة.',
  createdAt: '2023-07-10T14:30:00.000Z',
  status: 'new'
}, {
  id: 2,
  name: 'سارة خالد',
  email: 'sara@example.com',
  phone: '0799876543',
  subject: 'اقتراح محتوى جديد',
  message: 'أود اقتراح إضافة محتوى عن كيفية التعامل مع الخلافات الزوجية في السنة الأولى من الزواج. أعتقد أن هذا سيكون مفيدًا للمتزوجين حديثًا.',
  createdAt: '2023-07-08T09:15:00.000Z',
  status: 'read'
}, {
  id: 3,
  name: 'أحمد محمود',
  email: 'ahmed@example.com',
  phone: '0788123456',
  subject: 'مشكلة في تسجيل الدخول',
  message: 'أواجه مشكلة في تسجيل الدخول إلى حسابي. عندما أدخل بيانات الدخول، تظهر رسالة خطأ. هل يمكنكم مساعدتي في حل هذه المشكلة؟',
  createdAt: '2023-07-05T11:45:00.000Z',
  status: 'replied'
}, {
  id: 4,
  name: 'فاطمة العلي',
  email: 'fatima@example.com',
  phone: '0799123456',
  subject: 'شكر وتقدير',
  message: 'أود أن أشكركم على المحتوى القيم الذي تقدمونه. لقد استفدت كثيرًا من المقالات والنصائح الموجودة في موقعكم، وقد ساعدتني في تحسين علاقتي الزوجية.',
  createdAt: '2023-07-01T16:20:00.000Z',
  status: 'archived'
}, {
  id: 5,
  name: 'عمر السعيد',
  email: 'omar@example.com',
  phone: '0795123456',
  subject: 'طلب تعاون',
  message: 'أنا مستشار زواجي وأرغب في التعاون معكم لتقديم محتوى متخصص أو المشاركة في ندوات توعوية. كيف يمكنني التواصل مع المسؤولين عن المحتوى لديكم؟',
  createdAt: '2023-06-28T13:10:00.000Z',
  status: 'new'
}];