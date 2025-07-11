import React from 'react';
// ... existing code ...
// Import useConsultationRequests
import { useConsultationRequests } from './admin/ConsultationRequestsContext';
interface BookingFormProps {
  consultant: Consultant;
  onClose: () => void;
  userType: 'husband' | 'wife' | 'both' | 'engaged';
}
export function BookingForm({
  consultant,
  onClose,
  userType
}: BookingFormProps) {
  // ... existing state ...
  // Add the hook to add consultation requests
  const {
    addConsultationRequest
  } = useConsultationRequests();
  // ... existing code ...
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // If payment method is selected and it's CliQ or bank transfer, show payment instructions
    if (paymentMethod === 'cliq' || paymentMethod === 'bank') {
      setShowPaymentInstructions(true);
      setIsSubmitting(false);
    } else {
      // Add the consultation request to the context
      if (consultationType && selectedDay && selectedTime) {
        addConsultationRequest({
          consultantId: consultant.id,
          consultantName: consultant.name,
          userName: name,
          userPhone: phone,
          userEmail: email,
          topic,
          date: selectedDay,
          time: selectedTime,
          consultationType,
          status: 'pending',
          paymentMethod: paymentMethod || 'unknown',
          paymentStatus: 'pending'
        });
      }
      // For cash payments, show success immediately
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
      }, 1500);
    }
  };
  const handleCompletePayment = () => {
    // Add the consultation request to the context when payment is completed
    if (consultationType && selectedDay && selectedTime) {
      addConsultationRequest({
        consultantId: consultant.id,
        consultantName: consultant.name,
        userName: name,
        userPhone: phone,
        userEmail: email,
        topic,
        date: selectedDay,
        time: selectedTime,
        consultationType,
        status: 'pending',
        paymentMethod: paymentMethod || 'unknown',
        paymentStatus: 'paid'
      });
    }
    setShowPaymentInstructions(false);
    setIsSuccess(true);
  };
  // ... rest of the component remains the same ...
}