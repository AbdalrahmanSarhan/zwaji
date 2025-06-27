import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRightIcon } from 'lucide-react';
interface PageLayoutProps {
  title: string;
  children: ReactNode;
}
export function PageLayout({
  title,
  children
}: PageLayoutProps) {
  const navigate = useNavigate();
  return <div className="min-h-screen bg-amber-50">
      <header className="bg-white shadow-sm py-4 px-6 mb-6">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <button onClick={() => navigate(-1)} className="flex items-center text-sky-600 hover:text-sky-800 transition-colors">
            <ArrowRightIcon className="h-5 w-5 ml-1" />
            <span>العودة</span>
          </button>
          <h1 className="text-xl font-bold text-sky-900">{title}</h1>
        </div>
      </header>
      <main className="px-4 pb-10">
        <div className="max-w-4xl mx-auto">{children}</div>
      </main>
      <footer className="bg-white py-4 px-6 text-center text-slate-600 border-t">
        <p className="text-sm">
          © {new Date().getFullYear()} حقوق الزوجين في الإسلام - جميع الحقوق
          محفوظة
        </p>
      </footer>
    </div>;
}