import React, { useEffect, useState } from 'react';
import { Welcome } from './components/Welcome';
import { Dashboard } from './components/Dashboard';
import { UpdatesDialog } from './components/UpdatesDialog';
import { useLocalStorage } from './hooks/useLocalStorage';
export function App() {
  const [userType, setUserType] = useState<'husband' | 'wife' | 'both' | 'engaged' | null>(null);
  const [showUpdatesDialog, setShowUpdatesDialog] = useState(false);
  const [hasSeenUpdates, setHasSeenUpdates] = useLocalStorage('hasSeenUpdatesV1.1', false);
  useEffect(() => {
    // Check if this is the first time visiting after update
    if (!hasSeenUpdates) {
      // Wait a bit before showing dialog for better UX
      const timer = setTimeout(() => {
        setShowUpdatesDialog(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [hasSeenUpdates]);
  const handleCloseUpdatesDialog = () => {
    setShowUpdatesDialog(false);
    setHasSeenUpdates(true);
  };
  return <div className="min-h-screen bg-amber-50 text-slate-800 font-sans">
      {!userType ? <Welcome onSelectUserType={setUserType} /> : <Dashboard userType={userType} onReset={() => setUserType(null)} />}
      {showUpdatesDialog && <UpdatesDialog onClose={handleCloseUpdatesDialog} />}
    </div>;
}