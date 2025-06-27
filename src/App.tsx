import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Welcome } from './components/Welcome';
import { Dashboard } from './components/Dashboard';
import { UpdatesDialog } from './components/UpdatesDialog';
import { AdminDashboard } from './components/admin/AdminDashboard';
import { ErrorBoundary } from './components/ErrorBoundary';
import { LoadingSpinner } from './components/LoadingSpinner';
export function App() {
  const [userType, setUserType] = useState<'husband' | 'wife' | 'both' | 'engaged' | null>(() => {
    // Check if we have a saved user type in localStorage
    const savedUserType = localStorage.getItem('userType');
    if (savedUserType && ['husband', 'wife', 'both', 'engaged'].includes(savedUserType)) {
      return savedUserType as 'husband' | 'wife' | 'both' | 'engaged';
    }
    return null;
  });
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
  const handleSelectUserType = (type: 'husband' | 'wife' | 'both' | 'engaged') => {
    setUserType(type);
    localStorage.setItem('userType', type);
  };
  const handleReset = () => {
    setUserType(null);
    localStorage.removeItem('userType');
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
            <Route path="/" element={!userType ? <Welcome onSelectUserType={handleSelectUserType} /> : <Navigate to={`/${userType}`} replace />} />
            <Route path="/husband/*" element={userType ? <Dashboard userType="husband" onReset={handleReset} /> : <Navigate to="/" replace />} />
            <Route path="/wife/*" element={userType ? <Dashboard userType="wife" onReset={handleReset} /> : <Navigate to="/" replace />} />
            <Route path="/both/*" element={userType ? <Dashboard userType="both" onReset={handleReset} /> : <Navigate to="/" replace />} />
            <Route path="/engaged/*" element={userType ? <Dashboard userType="engaged" onReset={handleReset} /> : <Navigate to="/" replace />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
          {showUpdatesDialog && <UpdatesDialog onClose={handleCloseUpdatesDialog} />}
        </div>
      </BrowserRouter>
    </ErrorBoundary>;
}