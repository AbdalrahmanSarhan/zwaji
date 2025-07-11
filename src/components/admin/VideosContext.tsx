import React, { useEffect, useState, createContext, useContext } from 'react';
export interface Video {
  id: string;
  title: string;
  youtubeId: string;
  description: string;
  path: 'husband' | 'wife' | 'engaged' | 'general';
  isFeatured: boolean;
  createdAt: string;
  author?: string;
}
interface VideosContextType {
  videos: Video[];
  addVideo: (video: Omit<Video, 'id' | 'createdAt'>) => void;
  updateVideo: (id: string, video: Partial<Video>) => void;
  deleteVideo: (id: string) => void;
  getVideosByPath: (path: string) => Video[];
}
export const VideosContext = createContext<VideosContextType | undefined>(undefined);
// Mock data for initial videos
const initialVideos: Video[] = [{
  id: '1',
  title: 'حقوق الزوج على زوجته في الإسلام',
  youtubeId: 'by1WRpfSyOQ',
  description: 'شرح مفصل للحقوق الشرعية للزوج وكيفية تطبيقها في الحياة اليومية',
  path: 'husband',
  isFeatured: true,
  createdAt: new Date().toISOString(),
  author: 'د. هالة سمير'
}, {
  id: '2',
  title: 'كيف تكون زوجاً ناجحاً؟',
  youtubeId: 'OgbEf9b9nU4',
  description: 'نصائح عملية للرجل لبناء حياة زوجية سعيدة ومستقرة',
  path: 'husband',
  isFeatured: false,
  createdAt: new Date().toISOString(),
  author: 'د. خالد الحداد'
}, {
  id: '3',
  title: 'حقوق الزوجة في الإسلام',
  youtubeId: '5ZD7RgG4h1U',
  description: 'شرح مفصل للحقوق المالية والمعنوية للزوجة في الشريعة الإسلامية',
  path: 'wife',
  isFeatured: true,
  createdAt: new Date().toISOString(),
  author: 'د. عائض القرني'
}, {
  id: '4',
  title: 'كيف تكونين زوجة صالحة؟',
  youtubeId: 'A2Gu8EFydiA',
  description: 'نصائح عملية للمرأة لبناء بيت سعيد وعلاقة زوجية ناجحة',
  path: 'wife',
  isFeatured: false,
  createdAt: new Date().toISOString(),
  author: 'د. رقية المحارب'
}, {
  id: '5',
  title: 'أسرار السعادة الزوجية',
  youtubeId: 'q9SjgHDEWJM',
  description: 'مفاتيح بناء علاقة زوجية ناجحة ومستقرة من منظور إسلامي',
  path: 'both',
  isFeatured: true,
  createdAt: new Date().toISOString(),
  author: 'د. محمد العريفي'
}, {
  id: '6',
  title: 'كيف تستعد للزواج؟',
  youtubeId: 'BoYQZ-zBtFM',
  description: 'نصائح عملية للمقبلين على الزواج للاستعداد النفسي والعملي',
  path: 'engaged',
  isFeatured: true,
  createdAt: new Date().toISOString(),
  author: 'د. محمد الدويش'
}, {
  id: '7',
  title: 'مهارات اختيار شريك الحياة',
  youtubeId: 'Yy9g4q0z3KA',
  description: 'معايير الاختيار الصحيح لشريك الحياة وعلامات التوافق',
  path: 'engaged',
  isFeatured: false,
  createdAt: new Date().toISOString(),
  author: 'د. ياسر الدوسري'
}, {
  id: '8',
  title: 'الأسس الشرعية للعلاقة الزوجية',
  youtubeId: 'dQw4w9WgXcQ',
  description: 'شرح مفصل للأسس الشرعية التي تنظم العلاقة بين الزوجين',
  path: 'general',
  isFeatured: true,
  createdAt: new Date().toISOString(),
  author: 'د. عبدالله المطلق'
}];
export const VideosProvider: React.FC<{
  children: React.ReactNode;
}> = ({
  children
}) => {
  const [videos, setVideos] = useState<Video[]>(() => {
    // Try to load videos from localStorage
    const savedVideos = localStorage.getItem('educational_videos');
    return savedVideos ? JSON.parse(savedVideos) : initialVideos;
  });
  // Save videos to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('educational_videos', JSON.stringify(videos));
  }, [videos]);
  const addVideo = (videoData: Omit<Video, 'id' | 'createdAt'>) => {
    const newVideo: Video = {
      ...videoData,
      id: Math.random().toString(36).substr(2, 9),
      createdAt: new Date().toISOString()
    };
    setVideos(prevVideos => [...prevVideos, newVideo]);
  };
  const updateVideo = (id: string, videoData: Partial<Video>) => {
    setVideos(prevVideos => prevVideos.map(video => video.id === id ? {
      ...video,
      ...videoData
    } : video));
  };
  const deleteVideo = (id: string) => {
    setVideos(prevVideos => prevVideos.filter(video => video.id !== id));
  };
  const getVideosByPath = (path: string) => {
    return videos.filter(video => video.path === path);
  };
  return <VideosContext.Provider value={{
    videos,
    addVideo,
    updateVideo,
    deleteVideo,
    getVideosByPath
  }}>
      {children}
    </VideosContext.Provider>;
};
export const useVideos = () => {
  const context = useContext(VideosContext);
  if (context === undefined) {
    throw new Error('useVideos must be used within a VideosProvider');
  }
  return context;
};