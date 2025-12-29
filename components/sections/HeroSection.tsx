'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { BookOpen, Users, Award } from 'lucide-react';
import { cn } from '@/lib/utils';
import SchoolImage from '../../schoolimage.png'
export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-muted/50 py-20 lg:py-32 min-h-screen flex items-center">
      {/* Decorative floating elements for dynamism */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full animate-ping" />
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-destructive/10 rounded-full animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-primary/20 rounded-full animate-bounce" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 items-center gap-12 max-w-7xl mx-auto">
          {/* Left: Content */}
          <div className="text-left lg:pr-8 animate-in fade-in-0 slide-in-from-left-4 duration-1000">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Welcome to{' '}
              <span className="bg-gradient-to-r from-primary to-destructive bg-clip-text text-transparent">
                B.K.Gyan Deep Public School
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-lg">
              Empowering young minds through excellence in education, innovation in learning, and commitment to holistic development.
            </p>
            
            {/* Feature highlights for added engagement */}
            <div className="grid grid-cols-3 gap-4 mb-8 max-w-md">
              {[
                { icon: BookOpen, label: 'Curriculum' },
                { icon: Users, label: 'Faculty' },
                { icon: Award, label: 'Achievements' },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className={cn('flex flex-col items-center p-3 rounded-lg bg-accent/50 animate-in fade-in-0 slide-in-from-bottom-2 duration-700', `delay-${index * 200}`)}>
                    <Icon className="h-6 w-6 text-primary mb-2" />
                    <span className="text-xs font-medium text-muted-foreground">{item.label}</span>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-gradient-to-r from-primary to-destructive hover:from-primary/90 hover:to-destructive/90 text-primary-foreground px-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5">
                  Enroll Now
                </Button>
              </Link>
              <Link href="/about">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-primary/50 text-primary hover:bg-primary/5 hover:border-primary/80 transition-all duration-300"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </div>

          {/* Right: Visual element with actual image */}
          <div className="relative animate-in fade-in-0 slide-in-from-right-4 duration-1000">
            <div className="relative w-full h-96 lg:h-[500px] bg-gradient-to-br from-primary/20 to-destructive/20 rounded-3xl overflow-hidden shadow-2xl">
              {/* Hero image */}
              <Image
                src={SchoolImage}
                alt="B.K.Gyan Deep Public School Campus"
                fill
                className="object-cover"
                priority
              />
              {/* Subtle overlay animation */}
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-background/50 animate-slide" />
            </div>
            <p className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-card px-4 py-2 rounded-full text-sm text-muted-foreground shadow-md">
              Discover Our Vibrant Campus
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slide {
          0% { transform: translateY(100%); }
          100% { transform: translateY(-100%); }
        }
        .animate-slide {
          animation: slide 20s linear infinite;
        }
      `}</style>
    </section>
  );
}