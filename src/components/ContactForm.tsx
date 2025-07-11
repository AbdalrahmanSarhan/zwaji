import React, { useState } from 'react';
// ... existing code ...
// Import useContact
import { useContact } from './admin/ContactContext';
export function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  // Add the hook to add contact messages
  const {
    addContactMessage
  } = useContact();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Add the contact message to the context
    addContactMessage({
      name,
      email,
      phone,
      subject,
      message
    });
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      // Reset form after success
      setName('');
      setEmail('');
      setPhone('');
      setSubject('');
      setMessage('');
      // Reset success message after a delay
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    }, 1500);
  };
  // ... rest of the component ...
}