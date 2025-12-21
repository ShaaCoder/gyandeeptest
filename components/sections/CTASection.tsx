'use client';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sparkles, ArrowRight, Quote, Phone, MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';

export function CTASection() {
  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-br from-primary via-destructive/80 to-primary text-primary-foreground overflow-hidden">
      {/* Enhanced dynamic background with layered gradients and sparkles */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-destructive/20 opacity-30" />
        <div className="absolute top-1/4 left-0 w-80 h-80 bg-primary-foreground/10 rounded-full blur-3xl -translate-x-1/2 animate-float" />
        <div className="absolute bottom-1/3 right-0 w-64 h-64 bg-destructive/20 rounded-full blur-3xl translate-x-1/2 animate-pulse delay-1000" />
        {/* Multiple sparkle accents for high-energy CTA */}
        <div className="absolute top-10 right-10 w-8 h-8">
          <Sparkles className="h-8 w-8 text-background/20 animate-spin-slow" />
        </div>
        <div className="absolute top-40 left-10 w-6 h-6">
          <Sparkles className="h-6 w-6 text-background/20 animate-bounce delay-500" />
        </div>
        <div className="absolute bottom-20 right-40 w-10 h-10">
          <Sparkles className="h-10 w-10 text-background/20 animate-pulse delay-2000" />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center animate-in fade-in-0 zoom-in-95 duration-1200">
          {/* Layered heading with quote icon and gradient */}
          <div className="inline-flex items-center justify-center gap-3 mb-6 animate-in fade-in-0 slide-in-from-top-2 duration-700">
            <Quote className="h-8 w-8 text-background/80" />
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-background via-white/90 to-background bg-clip-text -webkit-background-clip-text leading-tight">
              Ready to Join Our Community?
            </h2>
          </div>
          
          {/* Expanded subtitle with contact teasers */}
          <p className="text-primary-foreground/90 mb-12 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto animate-in fade-in-0 slide-in-from-bottom-2 duration-700">
            Take the first step towards a bright future. Contact us today to schedule a campus tour or learn more about admissions. Our dedicated team is here to guide you every step of the way.
          </p>
          
          {/* Contact info row for quick actions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto mb-10 animate-in fade-in-0 slide-in-from-bottom-4 duration-700 delay-400">
            {[
              { icon: Phone, label: 'Call Us', text: '+1 (555) 123-4567', href: 'tel:+15551234567' },
              { icon: MapPin, label: 'Visit Us', text: '105 Allah Mohall, 105 Building, BK Gyan Deep Public School, Allah Mohalla, Tekhand, Okhla Industrial Area Phase 1, Delhi-110020', href: 'https://maps.google.com' },
              { icon: Sparkles, label: 'Email Us', text: 'admissions@bkgyandeep.edu', href: 'mailto:admissions@bkgyandeep.edu' },
            ].map((contact, index) => {
              const Icon = contact.icon;
              return (
                <Link key={index} href={contact.href} className="group flex flex-col items-center p-4 rounded-2xl bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-all duration-400">
                  <Icon className="h-8 w-8 text-background/80 mb-2 group-hover:text-background transition-colors" />
                  <span className="text-xs font-medium text-background/70 group-hover:text-background">{contact.label}</span>
                  <span className="text-sm font-semibold text-background group-hover:translate-y-[-1px] transition-transform break-words">{contact.text}</span>
                </Link>
              );
            })}
          </div>
          
          {/* Dual enhanced buttons with staggered animation */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in-0 slide-in-from-bottom-2 duration-700 delay-600">
            <Link href="/contact">
              <Button 
                size="lg" 
                className={cn(
                  "bg-background text-primary hover:bg-muted hover:shadow-2xl hover:scale-105 transition-all duration-500 relative overflow-hidden group shadow-xl",
                  "border-2 border-background/20 hover:border-primary/50"
                )}
              >
                <span className="relative z-10 flex items-center gap-2 font-bold">
                  Schedule Tour
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                {/* Animated underline and glow */}
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-destructive scale-x-0 group-hover:scale-x-100 transition-transform duration-600 origin-left" />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-destructive/20 opacity-0 group-hover:opacity-100 transition-opacity duration-600 blur-sm" />
              </Button>
            </Link>
            <Link href="/admissions">
              <Button 
                variant="outline" 
                size="lg" 
                className="border-background text-background hover:bg-primary/10 hover:text-primary-foreground transition-all duration-500 group shadow-xl"
              >
                Learn Admissions
                <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </Link>
          </div>
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