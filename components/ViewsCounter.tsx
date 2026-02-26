'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

// Dynamiczny import z wyłączeniem SSR (bo licznik działa tylko w przeglądarce)
const SiteViews = dynamic(() => import('react-siteviews'), { ssr: false });

export default function ViewsCounter() {
  const [viewCount, setViewCount] = useState<number | null>(null);

  return (
    <div className="fixed top-20 right-4 z-50 bg-white/80 backdrop-blur-sm rounded-full shadow-md px-4 py-2 text-sm flex items-center space-x-2">
      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
      <span className="font-medium text-gray-700">Odwiedziny:</span>
      <SiteViews
        projectName="aleksandra-trojnar-portfolio"
        getData={(data: any) => {
          // data to tablica, ale dla pojedynczego licznika zainteresuje nas pierwszy wpis
          if (data && data.length > 0) {
            setViewCount(data[0].visits);
          }
        }}
        suppressLogs
      >
        <span className="font-bold text-blue-600">
          {viewCount !== null ? viewCount : '...'}
        </span>
      </SiteViews>
    </div>
  );
}