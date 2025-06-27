import React, { useState, lazy } from 'react';
import { PlayIcon, ExternalLinkIcon, SearchIcon, XIcon } from 'lucide-react';
import { PageHeader } from './PageHeader';
import { SEO } from './SEO';
import { urlMappings } from '../utils/urlMappings';
import { useVideos, Video } from './admin/VideosContext';
interface EducationalVideosProps {
  userType: 'husband' | 'wife' | 'both' | 'engaged';
}
export function EducationalVideos({
  userType
}: EducationalVideosProps) {
  const {
    videos,
    loading,
    error
  } = useVideos();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const sectionId = 'videos';
  const pageTitle = urlMappings.sectionTitles[sectionId];
  const pageDescription = urlMappings.sectionDescriptions[sectionId];
  // Filter videos based on user type and search query
  const filteredVideos = videos.filter(video => {
    // Filter by user type
    const matchesUserType = video.path === userType || video.path === 'both' || video.path === 'general';
    // Filter by search query
    const matchesSearch = !searchQuery || video.title.toLowerCase().includes(searchQuery.toLowerCase()) || video.description && video.description.toLowerCase().includes(searchQuery.toLowerCase()) || video.author && video.author.toLowerCase().includes(searchQuery.toLowerCase());
    // Filter by category
    const matchesCategory = !selectedCategory || video.path === selectedCategory;
    return matchesUserType && matchesSearch && matchesCategory;
  });
  // Sort videos: featured first, then by creation date
  const sortedVideos = [...filteredVideos].sort((a, b) => {
    if (a.isFeatured && !b.isFeatured) return -1;
    if (!a.isFeatured && b.isFeatured) return 1;
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
  });
  // Group videos by category
  const featuredVideos = sortedVideos.filter(video => video.isFeatured);
  const remainingVideos = sortedVideos.filter(video => !video.isFeatured);
  // Handle video click to open YouTube
  const handleVideoClick = (youtubeId: string) => {
    window.open(`https://www.youtube.com/watch?v=${youtubeId}`, '_blank', 'noopener,noreferrer');
  };
  // Get category label
  const getCategoryLabel = (path: string) => {
    switch (path) {
      case 'husband':
        return 'للزوج';
      case 'wife':
        return 'للزوجة';
      case 'both':
        return 'للزوجين';
      case 'engaged':
        return 'للمقبلين على الزواج';
      case 'general':
        return 'عام';
      default:
        return '';
    }
  };
  // Get category color
  const getCategoryColor = (path: string) => {
    switch (path) {
      case 'husband':
        return 'bg-sky-100 text-sky-800';
      case 'wife':
        return 'bg-rose-100 text-rose-800';
      case 'both':
        return 'bg-amber-100 text-amber-800';
      case 'engaged':
        return 'bg-purple-100 text-purple-800';
      case 'general':
        return 'bg-emerald-100 text-emerald-800';
      default:
        return 'bg-slate-100 text-slate-800';
    }
  };
  return <div className="max-w-4xl mx-auto">
      <SEO title={pageTitle} description={pageDescription} path={window.location.pathname} />
      <PageHeader title={pageTitle} description={pageDescription} icon={<PlayIcon className="h-6 w-6" />} color="sky" />
      {/* Search and filter */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <div className="relative flex-1">
            <input type="text" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} placeholder="ابحث عن فيديو..." className="w-full px-4 py-2 pr-10 rounded-lg border border-slate-200 focus:border-sky-300 focus:ring focus:ring-sky-100 focus:outline-none" />
            <SearchIcon className="absolute top-2.5 right-3 h-5 w-5 text-slate-400" />
            {searchQuery && <button onClick={() => setSearchQuery('')} className="absolute top-2.5 left-3 text-slate-400 hover:text-slate-600">
                <XIcon className="h-5 w-5" />
              </button>}
          </div>
          <div className="flex flex-wrap gap-2">
            <button onClick={() => setSelectedCategory(null)} className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${selectedCategory === null ? 'bg-sky-100 text-sky-800' : 'bg-white text-slate-600 hover:bg-sky-50'}`}>
              الكل
            </button>
            <button onClick={() => setSelectedCategory(userType)} className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${selectedCategory === userType ? getCategoryColor(userType) : 'bg-white text-slate-600 hover:bg-sky-50'}`}>
              {getCategoryLabel(userType)}
            </button>
            <button onClick={() => setSelectedCategory('both')} className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${selectedCategory === 'both' ? 'bg-amber-100 text-amber-800' : 'bg-white text-slate-600 hover:bg-amber-50'}`}>
              للزوجين
            </button>
            <button onClick={() => setSelectedCategory('general')} className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${selectedCategory === 'general' ? 'bg-emerald-100 text-emerald-800' : 'bg-white text-slate-600 hover:bg-emerald-50'}`}>
              عام
            </button>
          </div>
        </div>
        {loading ? <div className="text-center py-12">
            <div className="inline-block w-8 h-8 border-4 border-sky-200 border-t-sky-600 rounded-full animate-spin"></div>
            <p className="mt-4 text-slate-600">جاري تحميل الفيديوهات...</p>
          </div> : error ? <div className="text-center py-12">
            <p className="text-rose-600">حدث خطأ أثناء تحميل الفيديوهات</p>
            <p className="text-slate-600 mt-2">يرجى المحاولة مرة أخرى لاحقاً</p>
          </div> : sortedVideos.length === 0 ? <div className="text-center py-12">
            <PlayIcon className="mx-auto h-12 w-12 text-slate-300" />
            <p className="mt-4 text-slate-600">
              {searchQuery ? 'لا توجد فيديوهات تطابق بحثك' : 'لا توجد فيديوهات متاحة حالياً'}
            </p>
            {searchQuery && <button onClick={() => {
          setSearchQuery('');
          setSelectedCategory(null);
        }} className="mt-4 px-4 py-2 bg-sky-50 hover:bg-sky-100 text-sky-700 rounded-md transition-colors">
                مسح البحث
              </button>}
          </div> : <div>
            {/* Featured Videos Section */}
            {featuredVideos.length > 0 && <div className="mb-10">
                <h3 className="text-xl font-bold text-sky-900 mb-6 flex items-center">
                  <span className="ml-2 text-amber-500">★</span>
                  فيديوهات مميزة
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {featuredVideos.map(video => <VideoCard key={video.id} video={video} onClick={handleVideoClick} getCategoryColor={getCategoryColor} getCategoryLabel={getCategoryLabel} />)}
                </div>
              </div>}
            {/* Regular Videos Section */}
            {remainingVideos.length > 0 && <div>
                <h3 className="text-xl font-bold text-sky-900 mb-6">
                  {featuredVideos.length > 0 ? 'فيديوهات أخرى' : 'جميع الفيديوهات'}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {remainingVideos.map(video => <VideoCard key={video.id} video={video} onClick={handleVideoClick} getCategoryColor={getCategoryColor} getCategoryLabel={getCategoryLabel} />)}
                </div>
              </div>}
          </div>}
      </div>
    </div>;
}
interface VideoCardProps {
  video: Video;
  onClick: (youtubeId: string) => void;
  getCategoryColor: (path: string) => string;
  getCategoryLabel: (path: string) => string;
}
function VideoCard({
  video,
  onClick,
  getCategoryColor,
  getCategoryLabel
}: VideoCardProps) {
  return <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-slate-200 hover:shadow-md transition-shadow duration-300">
      <div className="relative">
        <img src={`https://img.youtube.com/vi/${video.youtubeId}/0.jpg`} alt={video.title} className="w-full h-48 object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 cursor-pointer" onClick={() => onClick(video.youtubeId)}>
          <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
            <PlayIcon className="h-8 w-8 text-white" />
          </div>
        </div>
        {video.isFeatured && <div className="absolute top-2 right-2 bg-amber-500 text-white px-2 py-1 rounded-full text-xs font-medium">
            مميز
          </div>}
        <div className="absolute bottom-2 left-2">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(video.path)}`}>
            {getCategoryLabel(video.path)}
          </span>
        </div>
      </div>
      <div className="p-4">
        <h4 className="font-bold text-lg mb-2 text-sky-900 line-clamp-2">
          {video.title}
        </h4>
        {video.author && <p className="text-sm text-sky-600 mb-2">{video.author}</p>}
        <p className="text-slate-600 text-sm mb-4 line-clamp-2">
          {video.description}
        </p>
        <a href={`https://www.youtube.com/watch?v=${video.youtubeId}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 bg-sky-50 hover:bg-sky-100 text-sky-700 rounded-md transition-colors duration-200" onClick={e => {
        e.preventDefault();
        onClick(video.youtubeId);
      }}>
          <span>شاهد الآن</span>
          <ExternalLinkIcon className="h-4 w-4 mr-2" />
        </a>
      </div>
    </div>;
}