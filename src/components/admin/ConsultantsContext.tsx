import React, { useEffect, useState, createContext, useContext } from 'react';
import { Consultant } from '../Consultants';
interface ConsultantsContextType {
  consultants: Consultant[];
  addConsultant: (consultant: Omit<Consultant, 'id'>) => void;
  updateConsultant: (id: number, consultant: Consultant) => void;
  deleteConsultant: (id: number) => void;
  loading: boolean;
}
const ConsultantsContext = createContext<ConsultantsContextType | undefined>(undefined);
export function ConsultantsProvider({
  children
}: {
  children: React.ReactNode;
}) {
  const [consultants, setConsultants] = useState<Consultant[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Load consultants from localStorage on mount
    const savedConsultants = localStorage.getItem('consultants');
    if (savedConsultants) {
      setConsultants(JSON.parse(savedConsultants));
    }
    setLoading(false);
  }, []);
  const saveConsultants = (newConsultants: Consultant[]) => {
    localStorage.setItem('consultants', JSON.stringify(newConsultants));
    setConsultants(newConsultants);
  };
  const addConsultant = (consultant: Omit<Consultant, 'id'>) => {
    const newConsultant = {
      ...consultant,
      id: Math.max(0, ...consultants.map(c => c.id)) + 1
    };
    const newConsultants = [...consultants, newConsultant];
    saveConsultants(newConsultants);
  };
  const updateConsultant = (id: number, updatedConsultant: Consultant) => {
    const newConsultants = consultants.map(consultant => consultant.id === id ? updatedConsultant : consultant);
    saveConsultants(newConsultants);
  };
  const deleteConsultant = (id: number) => {
    const newConsultants = consultants.filter(consultant => consultant.id !== id);
    saveConsultants(newConsultants);
  };
  return <ConsultantsContext.Provider value={{
    consultants,
    addConsultant,
    updateConsultant,
    deleteConsultant,
    loading
  }}>
      {children}
    </ConsultantsContext.Provider>;
}
export function useConsultants() {
  const context = useContext(ConsultantsContext);
  if (context === undefined) {
    throw new Error('useConsultants must be used within a ConsultantsProvider');
  }
  return context;
}