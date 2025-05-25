import React, { Component } from 'react';
interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}
interface State {
  hasError: boolean;
  error?: Error;
}
export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };
  public static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      error
    };
  }
  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error caught by ErrorBoundary:', error, errorInfo);
  }
  public render() {
    if (this.state.hasError) {
      return this.props.fallback || <div className="p-4 text-center">
            <h2 className="text-xl font-bold text-red-600 mb-2">
              عذراً، حدث خطأ ما
            </h2>
            <p className="text-slate-600">
              يرجى تحديث الصفحة أو المحاولة مرة أخرى لاحقاً
            </p>
          </div>;
    }
    return this.props.children;
  }
}