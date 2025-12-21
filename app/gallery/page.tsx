'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Sparkles, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import SchoolImage from '../../schoolimage.png'
const galleryItems = [
  { id: 1, category: 'Campus', title: 'Main Building', gradient: 'from-primary/20 to-primary/30', image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { id: 2, category: 'Sports', title: 'Football Match', gradient: 'from-primary/10 to-destructive/20', image: 'https://images.unsplash.com/photo-1544718045-981e0a8a1a0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { id: 3, category: 'Events', title: 'Annual Day', gradient: 'from-primary/20 to-primary/30', image: 'https://images.unsplash.com/photo-1511632765486-a56892877a51?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { id: 4, category: 'Classroom', title: 'Smart Classroom', gradient: 'from-primary/10 to-destructive/20', image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { id: 5, category: 'Labs', title: 'Science Lab', gradient: 'from-primary/20 to-primary/30', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { id: 6, category: 'Sports', title: 'Basketball Court', gradient: 'from-primary/10 to-destructive/20', image: 'https://images.unsplash.com/photo-1517838277536-f5f8a7ee8f12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { id: 7, category: 'Campus', title: 'School Garden', gradient: 'from-primary/20 to-primary/30', image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { id: 8, category: 'Events', title: 'Art Exhibition', gradient: 'from-primary/10 to-destructive/20', image: 'https://images.unsplash.com/photo-1516321310764-3b490c0a0e9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { id: 9, category: 'Labs', title: 'Computer Lab', gradient: 'from-primary/20 to-primary/30', image: 'https://images.unsplash.com/photo-1517433456452-f9633a875f6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { id: 10, category: 'Classroom', title: 'Study Session', gradient: 'from-primary/10 to-destructive/20', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { id: 11, category: 'Events', title: 'Music Concert', gradient: 'from-primary/20 to-primary/30', image: 'https://images.unsplash.com/photo-1519501777829-ea3d2d3f8b90?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { id: 12, category: 'Sports', title: 'Swimming Pool', gradient: 'from-primary/10 to-destructive/20', image: 'https://images.unsplash.com/photo-1578631613620-1ebeb1a70d9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { id: 13, category: 'Campus', title: 'Library', gradient: 'from-primary/20 to-primary/30', image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { id: 14, category: 'Events', title: 'Cultural Fest', gradient: 'from-primary/10 to-destructive/20', image: 'https://images.unsplash.com/photo-1511882221126-2bb5d5e4f90b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { id: 15, category: 'Classroom', title: 'Writing Workshop', gradient: 'from-primary/20 to-primary/30', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
];

const categories = ['All', 'Campus', 'Sports', 'Events', 'Classroom', 'Labs'];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredItems = selectedCategory === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <div>
      {/* Hero Section with Background Image */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={SchoolImage}
            alt="Bk Gyandeep Public School Gallery Moments"
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
                Bk Gyandeep Public School
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
                  className={cn(
                    'group relative overflow-hidden rounded-3xl border-border/50 cursor-pointer hover:shadow-2xl transition-all duration-700',
                    'animate-in fade-in-0 slide-in-from-bottom-6',
                    `delay-${index * 150}`
                  )}
                >
                  <div className={`aspect-square ${item.gradient} relative`}>
                    {/* Image */}
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    
                    {/* Hover overlay with label and shimmer */}
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-600 flex items-end p-6 backdrop-blur-sm">
                      <div className="translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                        <span className="inline-block px-3 py-1 bg-background/20 backdrop-blur-sm rounded-full text-xs font-medium text-background mb-2">
                          {item.category}
                        </span>
                        <h3 className="text-xl font-bold text-background drop-shadow-lg">{item.title}</h3>
                      </div>
                    </div>
                    
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
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
              These moments represent just a glimpse of daily life at Bk Gyandeep Public School. We invite you to visit our campus and experience the energy, enthusiasm, and excellence firsthand.
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