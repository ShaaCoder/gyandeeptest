'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Sparkles, ArrowRight, Play, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { useRef } from 'react';
import SchoolImage from '../../schoolimage.png';

const galleryItems = [
  // Events images/videos (festivals, days, awards, dances, etc.)
  { id: 1, category: 'Events', title: 'Annual Day', gradient: 'from-primary/10 to-destructive/20', image: '/images/annual%20day.jpeg', type: 'image' as const },
  { id: 2, category: 'Events', title: 'Annual Day Celebration', gradient: 'from-primary/20 to-primary/30', image: '/images/annual%20day.jpeg', type: 'image' as const }, // Fixed space in filename
  { id: 3, category: 'Events', title: 'Awards Ceremony', gradient: 'from-primary/10 to-destructive/20', image: '/images/awards.jpeg', type: 'image' as const },
  { id: 4, category: 'Events', title: 'Awards Highlights', gradient: 'from-primary/20 to-primary/30', image: '/images/awrds2.jpeg', type: 'image' as const }, // Fixed typo 'awrds2' to 'awards2'
  { id: 5, category: 'Events', title: 'Dance Performance', gradient: 'from-primary/10 to-destructive/20', image: '/images/dance.mp4', type: 'video' as const },
  { id: 6, category: 'Events', title: 'Independence Day', gradient: 'from-primary/20 to-primary/30', image: '/images/independenceday.mp4', type: 'video' as const },
  { id: 7, category: 'Events', title: 'Janmashtami Celebration', gradient: 'from-primary/10 to-destructive/20', image: '/images/janamastami.mp4', type: 'video' as const },
  { id: 8, category: 'Events', title: 'Teachers Day', gradient: 'from-primary/20 to-primary/30', image: '/images/teachersday.mp4', type: 'video' as const },
  { id: 9, category: 'Events', title: 'Teachers Day Moments', gradient: 'from-primary/10 to-destructive/20', image: '/images/teachersday2.mp4', type: 'video' as const },
  { id: 10, category: 'Events', title: 'Tulsi Puja', gradient: 'from-primary/20 to-primary/30', image: '/images/tulsipujan.mp4', type: 'video' as const },
  { id: 11, category: 'Events', title: 'Tulsi Pujan Ritual', gradient: 'from-primary/10 to-destructive/20', image: '/images/tulsipujan.mp4', type: 'video' as const },
  { id: 12, category: 'Events', title: 'Principal Address', gradient: 'from-primary/20 to-primary/30', image: '/images/principle.mp4', type: 'video' as const },
  { id: 13, category: 'Events', title: 'Video Highlight 2', gradient: 'from-primary/10 to-destructive/20', image: '/images/video2.mp4', type: 'video' as const },

  // Projects videos
  { id: 14, category: 'Projects', title: 'Chandrayaan Project', gradient: 'from-primary/20 to-primary/30', image: '/images/chandrayan.mp4', type: 'video' as const },
  { id: 15, category: 'Projects', title: 'Student Projects', gradient: 'from-primary/10 to-destructive/20', image: '/images/projects.mp4', type: 'video' as const },
  { id: 16, category: 'Projects', title: 'Projects Showcase 2', gradient: 'from-primary/20 to-primary/30', image: '/images/projects2.mp4', type: 'video' as const },

  // Classroom videos/images
  { id: 17, category: 'Classroom', title: 'Kids in Class', gradient: 'from-primary/10 to-destructive/20', image: '/images/kids.mp4', type: 'video' as const },
];

const categories = ['All', 'Sports', 'Events', 'Classroom', 'Labs', 'Projects'];

type GalleryItem = typeof galleryItems[number];

function MediaItem({ item }: { item: GalleryItem }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    if (videoRef.current && item.type === 'video') {
      videoRef.current.play().catch(() => {}); // Ignore play promise errors
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current && item.type === 'video') {
      videoRef.current.pause();
      videoRef.current.currentTime = 0; // Reset to start
    }
  };

  return (
    <div
      className="relative aspect-square"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {item.type === 'image' ? (
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
      ) : (
        <video
          ref={videoRef}
          src={item.image}
          className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
          muted
          loop={false}
          preload="metadata"
          playsInline
        >
          Your browser does not support the video tag.
        </video>
      )}
      {/* Play icon overlay for videos - always on top with pointer-events-none when hovering to avoid blocking */}
      {item.type === 'video' && (
        <div className="absolute inset-0 flex items-center justify-center opacity-100 group-hover:opacity-0 transition-opacity duration-300 bg-black/20 pointer-events-none">
          <Play className="h-12 w-12 text-white/80" />
        </div>
      )}
    </div>
  );
}

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedVideo, setSelectedVideo] = useState<GalleryItem | null>(null);

  const filteredItems = selectedCategory === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory);

  const handleCardClick = (item: GalleryItem) => {
    if (item.type === 'video') {
      setSelectedVideo(item);
    }
    // For images, you could add lightbox or something, but for now, do nothing
  };

  return (
    <div>
      {/* Hero Section with Background Image */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={SchoolImage}
            alt="B.K.Gyan Deep Public School Gallery Moments"
            fill
            className="object-cover"
            priority
          />
          {/* Overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/60 via-destructive/40 to-primary/60" />
        </div>
        
        {/* Floating elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-0 w-72 h-72 bg-primary/20 rounded-full blur-3xl -translate-x-1/2 animate-float" />
          <div className="absolute bottom-1/3 right-0 w-56 h-56 bg-destructive/20 rounded-full blur-3xl translate-x-1/2 animate-pulse delay-1000" />
          <div className="absolute top-20 right-20 w-8 h-8">
            <Sparkles className="h-8 w-8 text-background/20 animate-spin-slow" />
          </div>
          <div className="absolute bottom-20 left-20 w-6 h-6">
            <Sparkles className="h-6 w-6 text-background/20 animate-bounce delay-500" />
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-in fade-in-0 zoom-in-95 duration-1000">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-background mb-6 leading-tight">
              Gallery Moments at{' '}
              <span className="bg-gradient-to-r from-background via-white to-background bg-clip-text text-transparent">
                B.K.Gyan Deep Public School
              </span>
            </h1>
            <p className="text-xl text-background/90 leading-relaxed max-w-2xl mx-auto">
              Explore moments that capture the vibrant spirit and dynamic learning environment at our school.
            </p>
          </div>
        </div>
      </section>

      {/* Filter & Grid Section */}
      <section className="py-20 lg:py-32 bg-background relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/5 rounded-full blur-xl -translate-x-1/2" />
          <div className="absolute bottom-1/4 right-0 w-48 h-48 bg-destructive/5 rounded-full blur-xl translate-x-1/2 animate-pulse" />
          <div className="absolute top-10 left-10 w-6 h-6">
            <Sparkles className="h-6 w-6 text-primary/10 animate-spin-slow" />
          </div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto animate-in fade-in-0 slide-in-from-top-4 duration-1000">
            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={cn(
                    'px-6 py-3 rounded-2xl font-semibold transition-all duration-300 shadow-md',
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-primary to-destructive text-primary-foreground shadow-primary/20 scale-105 hover:scale-105'
                      : 'bg-card text-foreground border border-border/50 hover:bg-muted hover:shadow-md hover:scale-105'
                  )}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item, index) => (
                <Card
                  key={item.id}
                  onClick={() => handleCardClick(item)}
                  className={cn(
                    'group relative overflow-hidden rounded-3xl border-border/50 cursor-pointer hover:shadow-2xl transition-all duration-700',
                    item.type === 'video' ? 'cursor-play' : 'cursor-pointer',
                    'animate-in fade-in-0 slide-in-from-bottom-6',
                    `delay-${index * 150}`
                  )}
                >
                  <div className={`relative ${item.gradient}`}>
                    <MediaItem item={item} />
                    
                    {/* Hover overlay with label and shimmer - added pointer-events-none to not block clicks */}
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-600 flex items-end p-6 backdrop-blur-sm pointer-events-none">
                      <div className="translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                        <span className="inline-block px-3 py-1 bg-background/20 backdrop-blur-sm rounded-full text-xs font-medium text-background mb-2">
                          {item.category}
                        </span>
                        <h3 className="text-xl font-bold text-background drop-shadow-lg">{item.title}</h3>
                      </div>
                    </div>
                    
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none">
                      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-background/20 to-transparent animate-shimmer" />
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {filteredItems.length === 0 && (
              <div className="text-center py-12 animate-in fade-in-0 slide-in-from-bottom-2 duration-700">
                <Sparkles className="h-16 w-16 text-muted-foreground mx-auto mb-4 animate-pulse" />
                <p className="text-muted-foreground text-lg">No images found in this category. Explore other moments!</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {selectedVideo && selectedVideo.type === 'video' && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
          onClick={() => setSelectedVideo(null)}
        >
          <div className="relative max-w-4xl max-h-full w-full h-full flex items-center justify-center p-4">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedVideo(null);
              }}
              className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
            <video
              src={selectedVideo.image}
              controls
              autoPlay
              className="max-w-full max-h-full object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-muted/50 to-primary/5 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-0 w-56 h-56 bg-primary/5 rounded-full blur-xl -translate-x-1/2 animate-float" />
          <div className="absolute bottom-1/2 right-0 w-40 h-40 bg-destructive/5 rounded-full blur-xl translate-x-1/2 animate-pulse delay-500" />
          <div className="absolute top-20 left-20 w-6 h-6">
            <Sparkles className="h-6 w-6 text-primary/10 animate-bounce" />
          </div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center animate-in fade-in-0 slide-in-from-top-4 duration-1000">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-destructive bg-clip-text text-transparent">
              Experience Our Campus
            </h2>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed max-w-3xl mx-auto">
              These moments represent just a glimpse of daily life at B.K.Gyan Deep Public School. We invite you to visit our campus and experience the energy, enthusiasm, and excellence firsthand.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { emoji: '🏆', title: 'Award-Winning', desc: 'Recognized for excellence in education and student achievements.', color: 'from-primary/10 to-destructive/10' },
                { emoji: '🌟', title: 'Modern Facilities', desc: 'State-of-the-art infrastructure supporting comprehensive learning.', color: 'from-destructive/10 to-primary/10' },
                { emoji: '💚', title: 'Nurturing Environment', desc: 'Safe, inclusive space where every student can thrive.', color: 'from-primary/10 to-destructive/10' },
              ].map((highlight, index) => (
                <Card key={index} className={cn('group relative overflow-hidden rounded-3xl border-border/50 p-6 text-center hover:shadow-2xl transition-all duration-700 animate-in fade-in-0 slide-in-from-bottom-4', `delay-${index * 200}`)}>
                  <CardContent className="p-0 relative">
                    <div className={`w-full h-48 ${highlight.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-105 transition-transform`}>
                      <div className="text-6xl group-hover:scale-110 transition-transform">{highlight.emoji}</div>
                    </div>
                    <h3 className="font-bold text-foreground mb-2 group-hover:text-primary">
                      {highlight.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed group-hover:text-foreground/90">
                      {highlight.desc}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Link href="/contact" className="inline-flex items-center gap-2 mt-12 px-8 py-4 bg-gradient-to-r from-primary to-destructive text-primary-foreground font-semibold rounded-2xl hover:shadow-2xl hover:scale-105 transition-all duration-300 group">
              Schedule a Visit
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}