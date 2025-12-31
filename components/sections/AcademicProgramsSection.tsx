'use client'
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Palette, Book, GraduationCap, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

const programs = [
  {
    icon: Palette,
    title: 'Early Years (Nursery - KG)',
    description: 'Play-based foundational learning for Nursery to KG: Fostering curiosity, social skills, and early literacy through engaging activities and nurturing environments.',
  },
  {
    icon: Book,
    title: 'Primary School',
    description: 'Grades 1-5: Building strong foundations through interactive learning, foundational literacy, numeracy, and creative exploration.',
  },
  {
    icon: GraduationCap,
    title: 'Middle School',
    description: 'Grades 6-8: Developing critical thinking, subject mastery, leadership, and real-world skills in a supportive, holistic environment.',
  },
];

export function AcademicProgramsSection() {
  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-br from-muted/50 via-background to-primary/5 overflow-hidden">
      {/* Enhanced floating elements with multiple animations */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-primary/5 rounded-full blur-xl -translate-x-1/2 animate-float" />
        <div className="absolute bottom-1/2 right-0 w-48 h-48 bg-destructive/5 rounded-full blur-xl translate-x-1/2 animate-pulse delay-1000" />
        {/* Sparkle elements for modern flair */}
        <div className="absolute top-10 right-20 w-6 h-6">
          <Sparkles className="h-6 w-6 text-primary/20 animate-spin-slow" />
        </div>
        <div className="absolute bottom-20 left-20 w-8 h-8">
          <Sparkles className="h-8 w-8 text-destructive/20 animate-bounce delay-500" />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Modern header with layered animations */}
        <div className="text-center mb-16 animate-in fade-in-0 zoom-in-95 duration-1000">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-destructive bg-clip-text text-transparent leading-tight animate-in fade-in-0 slide-in-from-top-2 duration-700">
            Our Academic Programs (Nursery to Class 8)
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-in fade-in-0 slide-in-from-bottom-2 duration-700">
            Nurturing young minds from early years through middle school with engaging, balanced, and holistic education.
          </p>
        </div>

        {/* Enhanced 3-column grid with staggered animations and modern cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <Card
                key={index}
                className={cn(
                  'group relative bg-card/95 backdrop-blur-sm border-border/30 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:border-primary/30 transition-all duration-700 ring-1 ring-transparent group-hover:ring-primary/20',
                  'animate-in fade-in-0 slide-in-from-bottom-8',
                  `delay-${index * 300}`
                )}
              >
                {/* Multi-layer gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-transparent to-destructive/3 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 delay-200" />
                
                <CardContent className="relative p-8 h-full flex flex-col justify-between">
                  {/* Icon with enhanced scale, glow, and rotation */}
                  <div className="w-20 h-20 bg-gradient-to-br from-primary/10 to-destructive/10 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:shadow-2xl group-hover:ring-2 group-hover:ring-primary/30 transition-all duration-600 mx-auto border border-primary/10">
                    <Icon className="h-10 w-10 text-primary group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 drop-shadow-lg" />
                  </div>
                  
                  <div className="flex flex-col items-center text-center space-y-3 flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-all duration-400 leading-tight">
                      {program.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed group-hover:text-foreground/95 transition-colors duration-400 text-base">
                      {program.description}
                    </p>
                  </div>
                  
                  {/* Animated link with enhanced arrow and scale */}
                  <div className="pt-4 border-t border-border/20">
                    <Link
                      href="/academics"
                      className="inline-flex items-center justify-center gap-2 text-primary hover:text-destructive font-semibold transition-all duration-400 group/link transform hover:scale-110 hover:bg-primary/5 rounded-lg px-4 py-2"
                    >
                      Learn More
                      <ArrowRight className="h-4 w-4 group-hover/link:translate-x-2 group-hover/link:scale-110 transition-all duration-400" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 12s linear infinite;
        }
      `}</style>
    </section>
  );
}