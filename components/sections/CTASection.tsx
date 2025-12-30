'use client';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sparkles, ArrowRight, Quote, Phone, MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';

export function CTASection() {
  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-br from-yellow-500/10 via-primary/10 to-destructive/10 text-foreground overflow-hidden">
      {/* Enhanced dynamic background with layered gradients and sparkles */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-destructive/5 opacity-40" />
        <div className="absolute top-1/4 left-0 w-80 h-80 bg-primary-foreground/10 rounded-full blur-3xl -translate-x-1/2 animate-float" />
        <div className="absolute top-1/3 right-0 w-64 h-64 bg-yellow-500/20 rounded-full blur-xl translate-x-1/2 animate-pulse" />
        <div className="absolute bottom-1/3 left-0 w-56 h-56 bg-destructive/10 rounded-full blur-3xl -translate-x-1/2 animate-bounce delay-500" />
        {/* Multiple sparkle accents for high-energy CTA */}
        <div className="absolute top-10 right-10 w-8 h-8">
          <Sparkles className="h-8 w-8 text-yellow-500/30 animate-spin-slow" />
        </div>
        <div className="absolute top-40 left-10 w-6 h-6">
          <Sparkles className="h-6 w-6 text-primary/30 animate-bounce delay-500" />
        </div>
        <div className="absolute bottom-20 right-40 w-10 h-10">
          <Sparkles className="h-10 w-10 text-destructive/30 animate-pulse delay-2000" />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center animate-in fade-in-0 zoom-in-95 duration-1200">
          {/* Layered heading with quote icon and gradient */}
          <div className="inline-flex items-center justify-center gap-3 mb-6 animate-in fade-in-0 slide-in-from-top-2 duration-700">
            <Quote className="h-8 w-8 text-yellow-500/80" />
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-yellow-500 via-primary to-destructive bg-clip-text text-transparent leading-tight">
              Ready to Join Our Community?
            </h2>
          </div>
          
          {/* Expanded subtitle with contact teasers */}
          <p className="text-muted-foreground/90 mb-12 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto animate-in fade-in-0 slide-in-from-bottom-2 duration-700">
            Take the first step towards a bright future. Contact us today to schedule a campus tour or learn more about admissions from Nursery to Class 8. Our dedicated team is here to guide you every step of the way.
          </p>
          
          {/* Contact info row for quick actions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto mb-10 animate-in fade-in-0 slide-in-from-bottom-4 duration-700 delay-400">
            {[
              { icon: Phone, label: 'Call Us', text: '+91 99535 39988', href: 'tel:+919953539988' },
              { icon: MapPin, label: 'Visit Us', text: '105 Allah Mohall, Delhi-110020', href: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d71742.94756270468!2d77.21849006155017!3d28.5579959648869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce7a28b48cff3%3A0xfff17363200598!2sBk%20Gyan%20deep%20public%20school!5e0!3m2!1sen!2sin!4v1766335766201!5m2!1sen!2sin' },
              { icon: Sparkles, label: 'Email Us', text: 'admissions@bkgyandeep.edu', href: 'mailto:admissions@bkgyandeep.edu' },
            ].map((contact, index) => {
              const Icon = contact.icon;
              return (
                <Link key={index} href={contact.href} className="group flex flex-col items-center p-4 rounded-2xl bg-yellow-500/10 hover:bg-yellow-500/20 transition-all duration-400">
                  <Icon className="h-8 w-8 text-yellow-500/80 mb-2 group-hover:text-yellow-500 transition-colors" />
                  <span className="text-xs font-medium text-muted-foreground/80 group-hover:text-foreground">{contact.label}</span>
                  <span className="text-sm font-semibold text-foreground group-hover:translate-y-[-1px] transition-transform break-words">{contact.text}</span>
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
                  "bg-gradient-to-r from-yellow-500 to-orange-500 text-foreground hover:from-yellow-600 hover:to-orange-600 hover:shadow-2xl hover:scale-105 transition-all duration-500 relative overflow-hidden group shadow-xl",
                  "border-2 border-yellow-500/30 hover:border-yellow-500/50"
                )}
              >
                <span className="relative z-10 flex items-center gap-2 font-bold">
                  Schedule Tour
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                {/* Animated underline and glow */}
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-yellow-400 to-orange-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-600 origin-left" />
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-600 blur-sm" />
              </Button>
            </Link>
            <Link href="/admissions">
              <Button 
                variant="outline" 
                size="lg" 
                className="border-yellow-500 text-foreground hover:bg-yellow-500/10 hover:text-yellow-600 transition-all duration-500 group shadow-xl"
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