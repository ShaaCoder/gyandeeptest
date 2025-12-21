'use client'

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Sparkles, ArrowRight, Users, Music, Users2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import SchoolImage from '../../schoolimage.png'
const galleryItems = [
  { 
    label: 'Campus Life', 
    description: 'Explore our modern facilities and green spaces designed for learning and play.',
    gradient: 'from-primary/20 to-primary/30',
    image: {SchoolImage},
    icon: Users
  },
  { 
    label: 'Sports', 
    description: 'From soccer fields to indoor gyms, fostering teamwork and physical fitness.',
    gradient: 'from-primary/10 to-destructive/20',
    image: {SchoolImage},
    icon: Users2
  },
  { 
    label: 'Arts & Culture', 
    description: 'Unleash creativity through theater, music, and visual arts programs.',
    gradient: 'from-primary/20 to-primary/30',
    image: {SchoolImage},
    icon: Music
  },
  { 
    label: 'Science Labs', 
    description: 'Hands-on experiments in state-of-the-art labs sparking curiosity and discovery.',
    gradient: 'from-primary/10 to-destructive/20',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    icon: Sparkles
  },
];

export function SchoolLifeSection() {
  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-br from-background via-muted/30 to-primary/5 overflow-hidden">
      {/* Dynamic background with floating sparkles */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-0 w-72 h-72 bg-primary/5 rounded-full blur-2xl -translate-x-1/2 animate-float" />
        <div className="absolute bottom-1/3 right-0 w-56 h-56 bg-destructive/5 rounded-full blur-2xl translate-x-1/2 animate-pulse delay-1500" />
        {/* Sparkle accents for vibrancy */}
        <div className="absolute top-20 left-20 w-8 h-8">
          <Sparkles className="h-8 w-8 text-primary/20 animate-spin-slow" />
        </div>
        <div className="absolute bottom-20 right-20 w-6 h-6">
          <Sparkles className="h-6 w-6 text-destructive/20 animate-bounce delay-1000" />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Modern header with gradient and staggered animation */}
        <div className="text-center mb-16 animate-in fade-in-0 zoom-in-95 duration-1000">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-destructive bg-clip-text text-transparent leading-tight animate-in fade-in-0 slide-in-from-top-2 duration-700">
            Life at School
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-in fade-in-0 slide-in-from-bottom-2 duration-700">
            A glimpse into our vibrant school community and engaging activities that build lifelong memories and skills.
          </p>
        </div>

        {/* New layout: 2-column cards with image + text, responsive to 1-col on mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className={cn(
                'group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 cursor-pointer',
                'animate-in fade-in-0 slide-in-from-bottom-6',
                `delay-${index * 300}`
              )}
            >
              {/* Image with gradient overlay */}
              <div className={`relative h-64 ${item.gradient} group-hover:opacity-80 transition-opacity duration-500`}>
                <Image
                  src={SchoolImage}
                  alt={`${item.label} at Bk Gyandeep Public School`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Hover overlay with label */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-600 flex items-end p-6">
                  <h3 className="text-background font-bold text-xl drop-shadow-lg">{item.label}</h3>
                </div>
              </div>
              
              {/* Content below image */}
              <div className="p-6 bg-card border-t border-border/50">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary/10 to-destructive/10 rounded-lg flex items-center justify-center">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground">{item.label}</h4>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {item.description}
                </p>
                <Link
                  href="/gallery"
                  className="inline-flex items-center gap-2 text-primary hover:text-destructive font-medium transition-colors duration-300 group/link"
                >
                  See More Photos
                  <ArrowRight className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced CTA with animation */}
        <div className="text-center animate-in fade-in-0 slide-in-from-top-2 duration-700 delay-1200">
          <Link href="/gallery">
            <Button 
              variant="outline" 
              size="lg" 
              className="border-primary text-primary hover:bg-primary/10 hover:border-destructive/50 transition-all duration-400 group relative overflow-hidden shadow-lg"
            >
              <span className="relative z-10 flex items-center gap-2">
                View Full Gallery
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              {/* Subtle underline animation */}
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-destructive scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </Button>
          </Link>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-25px) rotate(3deg); }
        }
        .animate-float {
          animation: float 10s ease-in-out infinite;
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 15s linear infinite;
        }
      `}</style>
    </section>
  );
}