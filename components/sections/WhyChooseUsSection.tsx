"use client"
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen, Users, Award, Trophy, Globe, Lightbulb, Activity, Sparkles, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const features = [
  {
    icon: BookOpen,
    title: 'Quality Education',
    description: 'Comprehensive curriculum aligned with international standards, delivered by experienced educators.',
    step: 1,
  },
  {
    icon: Users,
    title: 'Small Class Sizes',
    description: 'Personalized attention with optimal student-teacher ratios for better learning outcomes.',
    step: 2,
  },
  {
    icon: Award,
    title: 'Expert Faculty',
    description: 'Highly qualified and passionate teachers committed to nurturing each student\'s potential.',
    step: 3,
  },
  {
    icon: Trophy,
    title: 'Excellence Record',
    description: 'Proven track record of academic excellence and outstanding student achievements.',
    step: 4,
  },
  {
    icon: Globe,
    title: 'Global Perspective',
    description: 'International curriculum preparing students for success in a globalized world.',
    step: 5,
  },
  {
    icon: Lightbulb,
    title: 'Modern Facilities',
    description: 'State-of-the-art infrastructure with smart classrooms and advanced learning resources.',
    step: 6,
  },
];

export function WhyChooseUsSection() {
  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-br from-primary/5 via-background to-muted/50 overflow-hidden">
      {/* Enhanced background elements with floating animations */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/2 to-destructive/2 opacity-20" />
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 animate-float" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-destructive/5 rounded-full blur-3xl translate-x-1/2 animate-pulse" />
      {/* Decorative sparkles for magic */}
      <div className="absolute top-20 right-10 w-8 h-8">
        <Sparkles className="h-8 w-8 text-primary/30 animate-spin-slow" />
      </div>
      <div className="absolute bottom-20 left-10 w-6 h-6">
        <Sparkles className="h-6 w-6 text-destructive/30 animate-bounce delay-1000" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Animated header with entrance effects */}
        <div className="text-center mb-16 animate-in fade-in-0 zoom-in-95 duration-1000">
          <div className="inline-flex items-center gap-2 text-primary mb-4 animate-in fade-in-0 slide-in-from-top-2 duration-700">
            <Activity className="h-6 w-6 animate-spin-slow" />
            <span className="text-sm font-medium uppercase tracking-wide">Our Journey</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-destructive bg-clip-text text-transparent animate-in fade-in-0 slide-in-from-top-4 duration-700">
            Why Choose Us
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-in fade-in-0 slide-in-from-bottom-2 duration-700">
            Embark on a transformative educational path at Bk Gyandeep Public School, where innovation meets tradition.
          </p>
        </div>

        {/* 2-column grid layout with central dividing line and card enhancements */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {/* Central dividing line with subtle pulse animation */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/30 to-destructive/30 transform -translate-x-1/2 z-0 animate-pulse opacity-50" />
          
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const colIndex = index % 2; // Alternate column feel
            return (
              <Card
                key={index}
                className={cn(
                  'group relative bg-card border-border/50 rounded-2xl overflow-visible shadow-sm hover:shadow-xl transition-all duration-700 z-10',
                  'animate-in fade-in-0 slide-in-from-bottom-8',
                  `delay-${index * 200}`,
                  colIndex === 0 ? 'md:pr-4' : 'md:pl-4' // Subtle padding alternation
                )}
              >
                {/* Step badge with hover glow */}
                <div className="absolute -top-3 left-4 z-20 bg-gradient-to-r from-primary to-destructive text-primary-foreground px-3 py-1 rounded-full text-xs font-bold shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-300">
                  Step {feature.step}
                </div>
                
                <CardContent className="p-6 pt-8 relative">
                  {/* Icon badge with rotation on hover */}
                  <div className="absolute -top-3 right-4 w-12 h-12 bg-card rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 border border-border/50">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-3 leading-tight group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed break-words group-hover:text-foreground/90 transition-colors duration-300">
                    {feature.description}
                  </p>
                  
                  {/* Subtle arrow element for direction */}
                  <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowRight className="h-4 w-4 text-primary" />
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Enhanced stats row with individual animations and icons */}
        <div className="text-center animate-in fade-in-0 slide-in-from-top-2 duration-700 delay-900">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-8">
            {[
              { label: '95%', desc: 'Graduation Rate', icon: '🎓' },
              { label: '50+', desc: 'Acre Campus', icon: '🏫' },
              { label: '100%', desc: 'Qualified Staff', icon: '👩‍🏫' },
            ].map((stat, index) => (
              <div 
                key={index} 
                className={cn(
                  'group p-6 rounded-xl bg-accent/30 transition-all duration-500 hover:bg-primary/10 hover:scale-110 cursor-default animate-in fade-in-0 slide-in-from-bottom-4',
                  `delay-${900 + (index * 200)}`
                )}
              >
                <div className="text-4xl mb-3 opacity-80">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2 group-hover:text-destructive transition-colors duration-300">
                  {stat.label}
                </div>
                <p className="text-sm text-muted-foreground group-hover:text-primary transition-colors font-medium">
                  {stat.desc}
                </p>
              </div>
            ))}
          </div>
          <a 
            href="/about" 
            className="inline-flex items-center gap-2 text-primary hover:text-destructive font-semibold transition-all duration-300 group"
          >
            Explore Our Story 
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 10s linear infinite;
        }
      `}</style>
    </section>
  );
}