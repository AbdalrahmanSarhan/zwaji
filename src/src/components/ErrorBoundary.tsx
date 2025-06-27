import React, { Component } from 'react';
import { AlertTriangleIcon, RefreshCwIcon } from 'lucide-react';
interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}
interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}
export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null
    };
  }
  static getDerivedStateFromError(error: Error) {
    return {
      hasError: true,
      error
    };
  }
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      error,
      errorInfo
    });
    // Log error to an error reporting service
    console.error('Error caught by ErrorBoundary:', error, errorInfo);
  }
  handleReset = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null
    });
  };
  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }
      return <div className="min-h-[300px] flex items-center justify-center">
          <div className="bg-white p-6 rounded-xl shadow-md max-w-md w-full text-center">
            <div className="bg-red-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <AlertTriangleIcon className="h-8 w-8 text-red-500" />
            </div>
            <h2 className="text-xl font-bold text-slate-800 mb-2">
              عذراً، حدث خطأ ما
            </h2>
            <p className="text-slate-600 mb-4">
              يرجى تحديث الصفحة أو المحاولة مرة أخرى لاحقاً
            </p>
            <button onClick={this.handleReset} className="px-4 py-2 bg-sky-100 hover:bg-sky-200 text-sky-700 rounded-md transition-colors duration-200 inline-flex items-center">
              <RefreshCwIcon className="h-4 w-4 ml-1.5" />
              <span>إعادة المحاولة</span>
            </button>
          </div>
        </div>;
    }
    return this.props.children;
  }
}