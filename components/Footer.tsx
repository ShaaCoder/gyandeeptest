'use client'
import Link from 'next/link';
import { Mail, ArrowRight ,Phone, MapPin, Facebook, Twitter, Instagram, Youtube, Sparkles } from 'lucide-react';
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12">
          {/* School Info Column */}
          <div className="animate-in fade-in-0 slide-in-from-left-4 duration-1000">
            <h3 className="text-background font-bold text-xl mb-4 bg-gradient-to-r from-white to-primary-foreground/50 bg-clip-text text-transparent">
              B.K.Gyan Deep Public School
            </h3>
            <p className="text-primary-foreground/80 text-sm leading-relaxed mb-6">
              Empowering minds, shaping futures. Excellence in education since 1995.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Facebook, href: 'https://facebook.com' },
                { icon: Twitter, href: 'https://twitter.com' },
                { icon: Instagram, href: 'https://instagram.com' },
                { icon: Youtube, href: 'https://youtube.com' },
              ].map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-background hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-primary/20"
                  >
                    <Icon className="h-5 w-5 text-primary-foreground hover:text-primary" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="animate-in fade-in-0 slide-in-from-left-4 duration-1000 delay-200">
            <h3 className="text-background font-semibold mb-4 text-lg">Quick Links</h3>
            <ul className="space-y-3">
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

          {/* Contact Info Column */}
          <div className="animate-in fade-in-0 slide-in-from-right-4 duration-1000 delay-200">
            <h3 className="text-background font-semibold mb-4 text-lg">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm group">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-primary-foreground/80 group-hover:text-background transition-colors" />
                <span className="text-primary-foreground/80 group-hover:text-background transition-colors break-words">
                  105 Allah Mohall, 105 Building, BK Gyan Deep Public School, Allah Mohalla, Tekhand, Okhla Industrial Area Phase 1, Delhi-110020
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm group">
                <Phone className="h-4 w-4 flex-shrink-0 text-primary-foreground/80 group-hover:text-background transition-colors" />
                <Link
                  href="tel:+911120456789"
                  className="text-primary-foreground/80 group-hover:text-background transition-colors hover:underline"
                >
                  +91 11 2045 6789
                </Link>
              </li>
              <li className="flex items-center gap-3 text-sm group">
                <Mail className="h-4 w-4 flex-shrink-0 text-primary-foreground/80 group-hover:text-background transition-colors" />
                <Link
                  href="mailto:admissions@bkgyandeep.edu"
                  className="text-primary-foreground/80 group-hover:text-background transition-colors hover:underline"
                >
                  admissions@bkgyandeep.edu
                </Link>
              </li>
            </ul>
          </div>

          {/* School Hours Column */}
          <div className="animate-in fade-in-0 slide-in-from-right-4 duration-1000 delay-400">
            <h3 className="text-background font-semibold mb-4 text-lg">School Hours</h3>
            <ul className="space-y-3 text-sm">
              {[
                { day: 'Monday - Friday', time: '8:00 AM - 3:30 PM' },
                { day: 'Saturday', time: '9:00 AM - 12:00 PM' },
                { day: 'Sunday', time: 'Closed' },
              ].map((hour, index) => (
                <li key={index} className="flex justify-between items-center py-2 px-3 rounded-lg bg-primary-foreground/5 hover:bg-primary-foreground/10 transition-colors group">
                  <span className="text-primary-foreground/80 group-hover:text-background">{hour.day}</span>
                  <span className="font-semibold text-primary-foreground group-hover:text-background">{hour.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright with animation */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center animate-in fade-in-0 slide-in-from-bottom-2 duration-700 delay-600">
          <p className="text-primary-foreground/70 text-sm">
            &copy; {new Date().getFullYear()} B.K.Gyan Deep Public School. All rights reserved.
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