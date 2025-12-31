'use client';

import { useState, useRef } from 'react';
import { Card } from '@/components/ui/card';
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  ArrowRight,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

// Video data
const videoReels = [
  {
    id: 1,
    title: 'Dance Fun (Nursery to Class 3)',
    src: '/images/dance.mp4',
    duration: '0:45',
  },
  {
    id: 2,
    title: 'Independence Day Joy (Classes 4-6)',
    src: '/images/independenceday.mp4',
    duration: '1:20',
  },
  {
    id: 3,
    title: 'Janmashtami Stories (Nursery to Class 5)',
    src: '/images/janamastami.mp4',
    duration: '0:55',
  },
  {
    id: 4,
    title: 'Teachers Day Thanks (Classes 6-8)',
    src: '/images/teachersday.mp4',
    duration: '1:10',
  },
  {
    id: 5,
    title: 'Science Sparks (Classes 3-7)',
    src: '/images/chandrayan.mp4',
    duration: '1:30',
  },
];

export default function VideoReelsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const togglePlayPause = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const scrollToVideo = (index: number) => {
    setCurrentIndex(index);
    if (scrollRef.current) {
      const card = scrollRef.current.children[index] as HTMLElement;
      card?.scrollIntoView({ behavior: 'smooth', inline: 'center' });
    }
  };

  const handleNext = () =>
    scrollToVideo((currentIndex + 1) % videoReels.length);

  const handlePrev = () =>
    scrollToVideo(
      (currentIndex - 1 + videoReels.length) % videoReels.length
    );

  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-br from-background via-muted/30 to-primary/5 overflow-hidden">
      {/* Theme-aligned background with subtle gradients and sparkles */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-destructive/5" />
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 animate-float" />
        <div className="absolute bottom-1/3 right-0 w-56 h-56 bg-destructive/10 rounded-full blur-3xl translate-x-1/2 animate-pulse delay-1000" />
        {/* Sparkle accents matching theme */}
        <div className="absolute top-20 right-20 w-8 h-8">
          <Sparkles className="h-8 w-8 text-primary/20 animate-spin-slow" />
        </div>
        <div className="absolute bottom-20 left-20 w-6 h-6">
          <Sparkles className="h-6 w-6 text-destructive/20 animate-bounce delay-500" />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">

        {/* Header */}
        <div className="text-center mb-12 animate-in fade-in-0 zoom-in-95 duration-1000">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-destructive bg-clip-text text-transparent">
            Video Moments (Nursery to Class 8)
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Swipe left to right to explore joyful moments. Only pure video —
            no distractions.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide"
          >
            {videoReels.map((video, index) => (
              <Card
                key={video.id}
                onClick={() => scrollToVideo(index)}
                className={cn(
                  'relative w-80 h-96 flex-shrink-0 snap-center overflow-hidden bg-background transition-all duration-500 cursor-pointer border-border/50',
                  index === currentIndex
                    ? 'scale-105 ring-4 ring-primary/50 z-10 shadow-2xl'
                    : 'scale-95 opacity-60 hover:opacity-80'
                )}
              >
                {/* Video Container */}
                <div className="relative w-full h-full bg-background overflow-hidden">
                  <video
                    src={video.src}
                    className="absolute inset-0 w-full h-full object-cover bg-background"
                    muted
                    loop
                    playsInline
                    autoPlay={index === currentIndex}
                    preload="auto"
                    ref={index === currentIndex ? videoRef : null}
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                  />

                  {/* Top Controls */}
                  {index === currentIndex && (
                    <div className="absolute top-3 left-3 right-3 flex justify-between items-center z-10">
                      <span className="text-foreground font-semibold text-sm bg-card/90 px-2 py-1 rounded-md">
                        {video.title}
                      </span>
                      <button
                        onClick={toggleMute}
                        className="p-2 rounded-full bg-card/90 hover:bg-card shadow-md transition-colors"
                      >
                        {isMuted ? (
                          <VolumeX className="h-5 w-5 text-foreground" />
                        ) : (
                          <Volume2 className="h-5 w-5 text-foreground" />
                        )}
                      </button>
                    </div>
                  )}

                  {/* Bottom Controls */}
                  {index === currentIndex && (
                    <div className="absolute bottom-3 left-3 right-3 flex justify-between items-center z-10">
                      <span className="text-muted-foreground text-xs bg-card/90 px-3 py-1 rounded-full">
                        ⏱ {video.duration}
                      </span>
                      <button
                        onClick={togglePlayPause}
                        className="p-3 rounded-full bg-gradient-to-r from-primary to-destructive hover:from-primary/90 hover:to-destructive/90 shadow-lg transition-all"
                      >
                        {isPlaying ? (
                          <Pause className="h-5 w-5 text-primary-foreground" />
                        ) : (
                          <Play className="h-5 w-5 text-primary-foreground" />
                        )}
                      </button>
                    </div>
                  )}
                </div>
              </Card>
            ))}
          </div>

          {/* Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 p-3 rounded-full bg-gradient-to-r from-primary to-destructive text-primary-foreground hover:from-primary/90 hover:to-destructive/90 shadow-lg transition-all hidden md:block"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-3 rounded-full bg-gradient-to-r from-primary to-destructive text-primary-foreground hover:from-primary/90 hover:to-destructive/90 shadow-lg transition-all hidden md:block"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-destructive hover:from-primary/90 hover:to-destructive/90 text-primary-foreground font-semibold rounded-3xl shadow-lg transition-all"
          >
            Watch More Reels <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>

      {/* Utilities */}
      <style jsx>{`
        .scrollbar-hide {
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        video {
          background-color: background;
          display: block;
        }
      `}</style>
    </section>
  );
}