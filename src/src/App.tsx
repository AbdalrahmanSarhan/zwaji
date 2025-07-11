import React, { useEffect, useState, Suspense } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Welcome } from './components/Welcome'
import { Dashboard } from './components/Dashboard'
import { UpdatesDialog } from './components/UpdatesDialog'
import { AdminDashboard } from './components/admin/AdminDashboard'
import { ErrorBoundary } from './components/ErrorBoundary'
import { LoadingSpinner } from './components/LoadingSpinner'
import { urlMappings } from './utils/urlMappings'
import { VideosProvider } from './components/admin/VideosContext'
import { ConsultationRequestsProvider } from './components/admin/ConsultationRequestsContext'
import { ContactProvider } from './components/admin/ContactContext'
// Lazy load engagement components for better performance
const EngagementLayout = React.lazy(() =>
  import('./components/engagement/EngagementLayout').then((module) => ({
    default: module.EngagementLayout,
  })),
)
const EngagementIndex = React.lazy(() =>
  import('./components/engagement/EngagementIndex').then((module) => ({
    default: module.EngagementIndex,
  })),
)
const EngagementDefinition = React.lazy(() =>
  import('./components/engagement/EngagementDefinition').then((module) => ({
    default: module.EngagementDefinition,
  })),
)
const EngagementRules = React.lazy(() =>
  import('./components/engagement/EngagementRules').then((module) => ({
    default: module.EngagementRules,
  })),
)
const EngagementCommunication = React.lazy(() =>
  import('./components/engagement/EngagementCommunication').then((module) => ({
    default: module.EngagementCommunication,
  })),
)
const EngagementAllowed = React.lazy(() =>
  import('./components/engagement/EngagementAllowed').then((module) => ({
    default: module.EngagementAllowed,
  })),
)
const EngagementChallenges = React.lazy(() =>
  import('./components/engagement/EngagementChallenges').then((module) => ({
    default: module.EngagementChallenges,
  })),
)
const EngagementTips = React.lazy(() =>
  import('./components/engagement/EngagementTips').then((module) => ({
    default: module.EngagementTips,
  })),
)
export function App() {
  const [userType, setUserType] = useState<
    'husband' | 'wife' | 'both' | 'engaged' | null
  >(() => {
    // Check if we have a saved user type in localStorage
    const savedUserType = localStorage.getItem('userType')
    if (
      savedUserType &&
      ['husband', 'wife', 'both', 'engaged'].includes(savedUserType)
    ) {
      return savedUserType as 'husband' | 'wife' | 'both' | 'engaged'
    }
    return null
  })
  const [showUpdatesDialog, setShowUpdatesDialog] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)
    // Check if this is the first time visiting after update
    const hasSeenUpdates = localStorage.getItem('hasSeenUpdatesV1.1')
    if (!hasSeenUpdates) {
      const updateTimer = setTimeout(() => {
        setShowUpdatesDialog(true)
      }, 1500)
      return () => {
        clearTimeout(timer)
        clearTimeout(updateTimer)
      }
    }
    return () => clearTimeout(timer)
  }, [])
  const handleCloseUpdatesDialog = () => {
    setShowUpdatesDialog(false)
    localStorage.setItem('hasSeenUpdatesV1.1', 'true')
  }
  const handleSelectUserType = (
    type: 'husband' | 'wife' | 'both' | 'engaged',
  ) => {
    setUserType(type)
    localStorage.setItem('userType', type)
  }
  const handleReset = () => {
    setUserType(null)
    localStorage.removeItem('userType')
  }
  if (isLoading) {
    return (
      <div className="min-h-screen bg-amber-50 flex items-center justify-center">
        <div className="text-center">
          <LoadingSpinner size="lg" />
          <p className="mt-4 text-slate-600">جاري تحميل التطبيق...</p>
        </div>
      </div>
    )
  }
  return (
    <ErrorBoundary>
      <ContactProvider>
        <ConsultationRequestsProvider>
          <VideosProvider>
            <BrowserRouter>
              <div className="min-h-screen bg-amber-50 text-slate-800 font-sans">
                <Routes>
                  <Route path="/admin/*" element={<AdminDashboard />} />
                  <Route
                    path="/"
                    element={
                      !userType ? (
                        <Welcome onSelectUserType={handleSelectUserType} />
                      ) : (
                        <Navigate
                          to={`/${urlMappings.userTypePaths[userType]}`}
                          replace
                        />
                      )
                    }
                  />
                  {/* Routes for different user types */}
                  <Route
                    path="/ana-zawj/*"
                    element={
                      userType ? (
                        <Dashboard userType="husband" onReset={handleReset} />
                      ) : (
                        <Navigate to="/" replace />
                      )
                    }
                  />
                  <Route
                    path="/ana-zawja/*"
                    element={
                      userType ? (
                        <Dashboard userType="wife" onReset={handleReset} />
                      ) : (
                        <Navigate to="/" replace />
                      )
                    }
                  />
                  <Route
                    path="/maarefa-3amma/*"
                    element={
                      userType ? (
                        <Dashboard userType="both" onReset={handleReset} />
                      ) : (
                        <Navigate to="/" replace />
                      )
                    }
                  />
                  <Route
                    path="/moqbilin-ala-alzawaj/*"
                    element={
                      userType ? (
                        <Dashboard userType="engaged" onReset={handleReset} />
                      ) : (
                        <Navigate to="/" replace />
                      )
                    }
                  />
                  {/* Engagement routes with lazy loading */}
                  <Route path="/moqbilin-ala-alzawaj/engagement">
                    <Route
                      index
                      element={
                        <Suspense fallback={<LoadingView />}>
                          <EngagementLayout />
                        </Suspense>
                      }
                    />
                    <Route
                      path="definition"
                      element={
                        <Suspense fallback={<LoadingView />}>
                          <EngagementLayout />
                        </Suspense>
                      }
                    />
                    <Route
                      path="rules"
                      element={
                        <Suspense fallback={<LoadingView />}>
                          <EngagementLayout />
                        </Suspense>
                      }
                    />
                    <Route
                      path="communication"
                      element={
                        <Suspense fallback={<LoadingView />}>
                          <EngagementLayout />
                        </Suspense>
                      }
                    />
                    <Route
                      path="allowed"
                      element={
                        <Suspense fallback={<LoadingView />}>
                          <EngagementLayout />
                        </Suspense>
                      }
                    />
                    <Route
                      path="challenges"
                      element={
                        <Suspense fallback={<LoadingView />}>
                          <EngagementLayout />
                        </Suspense>
                      }
                    />
                    <Route
                      path="tips"
                      element={
                        <Suspense fallback={<LoadingView />}>
                          <EngagementLayout />
                        </Suspense>
                      }
                    />
                  </Route>
                  <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
                {showUpdatesDialog && (
                  <UpdatesDialog onClose={handleCloseUpdatesDialog} />
                )}
              </div>
            </BrowserRouter>
          </VideosProvider>
        </ConsultationRequestsProvider>
      </ContactProvider>
    </ErrorBoundary>
  )
}
function LoadingView() {
  return (
    <div className="min-h-[300px] flex items-center justify-center">
      <div className="text-center">
        <LoadingSpinner size="md" color="purple" />
        <p className="mt-4 text-slate-600">جاري تحميل المحتوى...</p>
      </div>
    </div>
  )
}
function AdminDashboard() {
  return <div>Admin Dashboard</div>
}
