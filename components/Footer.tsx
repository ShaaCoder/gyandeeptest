'use client'
import Link from 'next/link';
import Image from 'next/image';
import { Mail, ArrowRight, Phone, MapPin, ExternalLink, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-primary via-destructive/80 to-primary text-primary-foreground mt-auto overflow-hidden">
      {/* Subtle background elements for modern depth */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-primary-foreground/10 rounded-full blur-3xl -translate-x-1/2 animate-float" />
        <div className="absolute bottom-1/3 right-0 w-48 h-48 bg-destructive/20 rounded-full blur-3xl translate-x-1/2 animate-pulse delay-1000" />
        {/* Sparkle accents for subtle energy */}
        <div className="absolute top-20 right-20 w-6 h-6">
          <Sparkles className="h-6 w-6 text-primary-foreground/20 animate-spin-slow" />
        </div>
        <div className="absolute bottom-20 left-20 w-8 h-8">
          <Sparkles className="h-8 w-8 text-primary-foreground/20 animate-bounce delay-500" />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 py-12 items-stretch">
          {/* School Info Column with Map */}
          <div className="animate-in fade-in-0 slide-in-from-left-4 duration-1000 flex flex-col">
            <div className="flex-1 space-y-4">
              <h3 className="text-background font-bold text-xl bg-gradient-to-r from-white to-primary-foreground/50 bg-clip-text text-transparent">
                Our Location
              </h3>
              <p className="text-primary-foreground/80 text-sm leading-relaxed">
                Nestled in the vibrant heart of Okhla, Delhi—empowering young minds and shaping bright futures since 1995.
              </p>
              <Link
                href="https://www.google.com/maps/dir/?api=1&destination=28.5579959648869,77.21849006155017"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm text-primary-foreground/70 hover:text-background transition-colors group"
              >
                Get Directions
                <ExternalLink className="h-3 w-3 opacity-70 group-hover:opacity-100" />
              </Link>
            </div>
            <div className="w-full rounded-lg overflow-hidden shadow-xl flex-shrink-0 mt-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d71742.94756270468!2d77.21849006155017!3d28.5579959648869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce7a28b48cff3%3A0xfff17363200598!2sBk%20Gyan%20deep%20public%20school!5e0!3m2!1sen!2sin!4v1766335766201!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{ border: 0, display: 'block' }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="B.K.Gyan Deep Public School Location"
              />
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="animate-in fade-in-0 slide-in-from-left-4 duration-1000 delay-200 flex flex-col justify-between">
            <div className="space-y-4">
              <h3 className="text-background font-semibold text-lg">Quick Links</h3>
              <ul className="space-y-2">
                {[
                  { href: '/', label: 'Home' },
                  { href: '/about', label: 'About Us' },
                  { href: '/academics', label: 'Academics' },
                  { href: '/gallery', label: 'Gallery' },
                  { href: '/contact', label: 'Contact' },
                ].map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-primary-foreground/80 text-sm font-medium hover:text-background hover:translate-x-1 transition-all duration-300 inline-flex items-center gap-1 group"
                    >
                      {link.label}
                      <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Info Column */}
          <div className="animate-in fade-in-0 slide-in-from-right-4 duration-1000 delay-200 flex flex-col justify-between">
            <div className="space-y-4">
              <h3 className="text-background font-semibold text-lg">Contact Info</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm group">
                  <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-primary-foreground/80 group-hover:text-background transition-colors mt-1" />
                  <span className="text-primary-foreground/80 group-hover:text-background transition-colors text-xs leading-relaxed break-words">
                    105 Allah Mohall, 105 Building, BK Gyan Deep Public School, Allah Mohalla, Tekhand, Okhla Industrial Area Phase 1, Delhi-110020
                  </span>
                </li>
                <li className="flex items-center gap-3 text-sm group">
                  <Phone className="h-4 w-4 flex-shrink-0 text-primary-foreground/80 group-hover:text-background transition-colors" />
                  <Link
                    href="tel:+919953539988"
                    className="text-primary-foreground/80 group-hover:text-background transition-colors hover:underline font-medium"
                  >
                    +91 99535 39988
                  </Link>
                </li>
                <li className="flex items-center gap-3 text-sm group">
                  <Phone className="h-4 w-4 flex-shrink-0 text-primary-foreground/80 group-hover:text-background transition-colors" />
                  <Link
                    href="tel:+911144759969"
                    className="text-primary-foreground/80 group-hover:text-background transition-colors hover:underline font-medium"
                  >
                    +91 11 4475 9969
                  </Link>
                </li>
                <li className="flex items-center gap-3 text-sm group">
                  <Mail className="h-4 w-4 flex-shrink-0 text-primary-foreground/80 group-hover:text-background transition-colors" />
                  <Link
                    href="mailto:lalitbidhuri07@gmail.com"
                    className="text-primary-foreground/80 group-hover:text-background transition-colors hover:underline font-medium break-all"
                  >
                    lalitbidhuri07@gmail.com
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* School Hours Column */}
          <div className="animate-in fade-in-0 slide-in-from-right-4 duration-1000 delay-400 flex flex-col justify-between">
            <div className="space-y-4">
              <h3 className="text-background font-semibold text-lg">School Hours</h3>
              <ul className="space-y-3 text-sm">
                {[
                  { day: 'Monday - Saturday', time: '8:00 AM - 1:30 PM' },
                  { day: 'Sunday', time: 'Closed' },
                ].map((hour, index) => (
                  <li key={index} className="flex justify-between items-center py-3 px-4 rounded-xl bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-all duration-300 group border border-primary-foreground/20">
                    <span className="text-primary-foreground/80 group-hover:text-background font-medium">{hour.day}</span>
                    <span className="font-bold text-primary-foreground group-hover:text-background px-3 py-1 bg-background/20 rounded-full text-xs">
                      {hour.time}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright with animation */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center animate-in fade-in-0 slide-in-from-bottom-2 duration-700 delay-600">
          <p className="text-primary-foreground/70 text-sm font-medium">
            &copy; {new Date().getFullYear()} B.K.Gyan Deep Public School. All rights reserved. |{' '}
            <Link
              href="https://www.nayastack.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-background transition-colors underline decoration-1 underline-offset-2"
            >
              Designed by Nayastack
            </Link>
          </p>
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
    </footer>
  );
}