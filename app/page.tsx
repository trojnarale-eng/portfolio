'use client';

import Image from 'next/image'
import { projects } from './data/projects'
import { Gallery, Item } from 'react-photoswipe-gallery'
import 'photoswipe/dist/photoswipe.css'

export default function Home() {
  return (
    <main className="min-h-screen relative">
      {/* Zdjęcie w tle */}
      <div className="fixed inset-0 -z-10">
        <Image
          src="/images/tlo.jpg"
          alt="Tło"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>
    

      {/* Treść */}
      <div className="container mx-auto px-4 py-16 relative">
        <h1 className="text-4xl font-bold text-center mb-8 text-white drop-shadow-lg">
          Portfolio
        </h1>
        
        {/* Grid projektów */}
        <Gallery
          options={{
            bgOpacity: 0.9,              // Ciemniejsze tło
            zoom: true,                   // Włącz zoom
            wheelToZoom: true,             // Zoom kółkiem myszy
            pinchToClose: false,           // Nie zamykaj przy szczypaniu
            closeOnVerticalDrag: false,    // Nie zamykaj przy przeciąganiu w dół
            maxZoomLevel: 8,               // Maksymalny zoom 8x (domyślnie był 2x)
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Item
                key={project.id}
                original={project.imageUrl}
                thumbnail={project.imageUrl}
                width={2400}                 // Większa rozdzielczość dla zoomu
                height={1800}
              >
                {({ ref, open }) => (
                  <div 
                    ref={ref}
                    onClick={open}
                    className="bg-white/90 backdrop-blur-sm rounded-lg shadow-md overflow-hidden cursor-pointer transition-transform hover:scale-105"
                  >
                    <div className="relative w-full">
                      <Image
                        src={project.imageUrl}
                        alt={project.title}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        style={{ width: '100%', height: 'auto' }}
                        width={800}
                        height={600}
                      />
                    </div>
                    <div className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h2 className="text-xl font-semibold mb-2 text-black">{project.title}</h2>
                        <span className="text-sm px-2 py-1 bg-gray-100/80 rounded text-gray-800">
                          {project.category}
                        </span>
                      </div>
                      <p className="text-gray-700 mb-3">
                        {project.description}
                      </p>
                      {project.tags && (
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <span 
                              key={tag} 
                              className="text-xs px-2 py-1 bg-blue-50/80 text-blue-800 rounded"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </Item>
            ))}
          </div>
        </Gallery>
      </div>
    </main>
  )
}