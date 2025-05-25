import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Welcome } from './components/Welcome';
import { Dashboard } from './components/Dashboard';
import { UpdatesDialog } from './components/UpdatesDialog';
import { AdminDashboard } from './components/admin/AdminDashboard';
import { ErrorBoundary } from './components/ErrorBoundary';
import { LoadingSpinner } from './components/LoadingSpinner';
export function App() {
  const [userType, setUserType] = useState<'husband' | 'wife' | 'both' | 'engaged' | null>(null);
  const [showUpdatesDialog, setShowUpdatesDialog] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    // Check if this is the first time visiting after update
    const hasSeenUpdates = localStorage.getItem('hasSeenUpdatesV1.1');
    if (!hasSeenUpdates) {
      const updateTimer = setTimeout(() => {
        setShowUpdatesDialog(true);
      }, 1500);
      return () => {
        clearTimeout(timer);
        clearTimeout(updateTimer);
      };
    }
    return () => clearTimeout(timer);
  }, []);
  const handleCloseUpdatesDialog = () => {
    setShowUpdatesDialog(false);
    localStorage.setItem('hasSeenUpdatesV1.1', 'true');
  };
  if (isLoading) {
    return <div className="min-h-screen bg-amber-50 flex items-center justify-center">
        <div className="text-center">
          <LoadingSpinner size="lg" />
          <p className="mt-4 text-slate-600">جاري تحميل التطبيق...</p>
        </div>
      </div>;
  }
  return <ErrorBoundary>
      <BrowserRouter>
        <div className="min-h-screen bg-amber-50 text-slate-800 font-sans">
          <Routes>
            <Route path="/admin/*" element={<AdminDashboard />} />
            <Route path="/" element={!userType ? <Welcome onSelectUserType={setUserType} /> : <Dashboard userType={userType} onReset={() => setUserType(null)} />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
          {showUpdatesDialog && <UpdatesDialog onClose={handleCloseUpdatesDialog} />}
        </div>
      </BrowserRouter>
    </ErrorBoundary>;
}