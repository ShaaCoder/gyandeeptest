'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { MapPin, Phone, Mail, Clock, Sparkles, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import SchoolImage from '../../schoolimage.png'
export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      {/* Hero Section with Background Image */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={SchoolImage}
            alt="Contact B.K.Gyan Deep Public School"
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
              Get In Touch with{' '}
              <span className="bg-gradient-to-r from-background via-white to-background bg-clip-text text-transparent">
                B.K.Gyan Deep Public School
              </span>
            </h1>
            <p className="text-xl text-background/90 leading-relaxed max-w-2xl mx-auto">
              We'd love to hear from you. Reach out to learn more about admissions, schedule a campus tour, or ask any questions.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form Section */}
      <section className="py-20 lg:py-32 bg-background relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/5 rounded-full blur-xl -translate-x-1/2" />
          <div className="absolute bottom-1/4 right-0 w-48 h-48 bg-destructive/5 rounded-full blur-xl translate-x-1/2 animate-pulse" />
          <div className="absolute top-10 left-10 w-6 h-6">
            <Sparkles className="h-6 w-6 text-primary/10 animate-spin-slow" />
          </div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 animate-in fade-in-0 slide-in-from-top-4 duration-1000">
            {/* Contact Info Cards */}
            <div className="space-y-6 animate-in fade-in-0 slide-in-from-left-4 duration-1000 delay-200">
              <Card className="group bg-card border-border/50 rounded-3xl hover:shadow-2xl transition-all duration-700">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-destructive/10 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                    <MapPin className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary">Visit Us</h3>
                  <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/90">
                    105 Allah Mohall, 105 Building, <br />
                    BK Gyan Deep Public School, <br />
                    Allah Mohalla, Tekhand, <br />
                    Okhla Industrial Area Phase 1, <br />
                    Delhi-110020
                  </p>
                </CardContent>
              </Card>

              <Card className="group bg-card border-border/50 rounded-3xl hover:shadow-2xl transition-all duration-700">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-destructive/10 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                    <Phone className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary">Call Us</h3>
                  <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/90">
                    Main: +91 11 2045 6789 <br />
                    Admissions: +91 11 2045 6790 <br />
                    WhatsApp: +91 11 2045 6791
                  </p>
                </CardContent>
              </Card>

              <Card className="group bg-card border-border/50 rounded-3xl hover:shadow-2xl transition-all duration-700">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-destructive/10 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                    <Mail className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary">Email Us</h3>
                  <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/90">
                    General: info@bkgyandeep.edu <br />
                    Admissions: admissions@bkgyandeep.edu <br />
                    Careers: careers@bkgyandeep.edu
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="animate-in fade-in-0 slide-in-from-right-4 duration-1000 delay-200">
              <Card className="bg-card border-border/50 rounded-3xl shadow-lg">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-foreground mb-8">Send us a Message</h2>

                  {submitted ? (
                    <div className="bg-primary/10 border border-primary/20 rounded-3xl p-8 text-center animate-pulse">
                      <Sparkles className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold text-primary mb-2">Message Sent!</h3>
                      <p className="text-muted-foreground">Thank you for contacting us. We'll get back to you soon.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <Label htmlFor="name" className="text-foreground font-semibold">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="mt-2 h-12 rounded-2xl border-border/50 focus-visible:ring-primary/30"
                          placeholder="John Doe"
                        />
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="email" className="text-foreground font-semibold">Email *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="mt-2 h-12 rounded-2xl border-border/50 focus-visible:ring-primary/30"
                            placeholder="john@example.com"
                          />
                        </div>
                        <div>
                          <Label htmlFor="phone" className="text-foreground font-semibold">Phone Number *</Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="mt-2 h-12 rounded-2xl border-border/50 focus-visible:ring-primary/30"
                            placeholder="+91 11 2045 6789"
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="subject" className="text-foreground font-semibold">Subject *</Label>
                        <Input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="mt-2 h-12 rounded-2xl border-border/50 focus-visible:ring-primary/30"
                          placeholder="Admission Inquiry"
                        />
                      </div>

                      <div>
                        <Label htmlFor="message" className="text-foreground font-semibold">Message *</Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          className="mt-2 min-h-32 rounded-2xl border-border/50 focus-visible:ring-primary/30"
                          placeholder="Tell us how we can help you..."
                        />
                      </div>

                      <Button type="submit" className="w-full h-12 bg-gradient-to-r from-primary to-destructive hover:from-primary/90 hover:to-destructive/90 text-primary-foreground rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                        Send Message
                        <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Office Hours & Map */}
          <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-8 mt-16 animate-in fade-in-0 slide-in-from-bottom-2 duration-1000 delay-400">
            <Card className="group bg-card border-border/50 rounded-3xl hover:shadow-2xl transition-all duration-700">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-destructive/10 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary">Office Hours</h3>
                <div className="space-y-4 text-muted-foreground group-hover:text-foreground/90">
                  <div className="flex justify-between py-3 px-4 bg-muted/50 rounded-2xl group-hover:bg-primary/5 transition-colors">
                    <span>Monday - Friday:</span>
                    <span className="font-semibold text-foreground">8:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between py-3 px-4 bg-muted/50 rounded-2xl group-hover:bg-primary/5 transition-colors">
                    <span>Saturday:</span>
                    <span className="font-semibold text-foreground">9:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between py-3 px-4 bg-muted/50 rounded-2xl group-hover:bg-primary/5 transition-colors">
                    <span>Sunday:</span>
                    <span className="font-semibold text-foreground">Closed</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group bg-card border-border/50 rounded-3xl hover:shadow-2xl transition-all duration-700 overflow-hidden">
              <CardContent className="p-0 relative">
                <div className="aspect-video relative">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d71742.94756270468!2d77.21849006155017!3d28.5579959648869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce7a28b48cff3%3A0xfff17363200598!2sBk%20Gyan%20deep%20public%20school!5e0!3m2!1sen!2sin!4v1766335766201!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0 group-hover:scale-105 transition-transform duration-700"
                  ></iframe>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary">Our Location</h3>
                  <p className="text-muted-foreground text-sm group-hover:text-foreground/90">
                    Click to view larger map and get directions to our campus in Delhi.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-primary via-destructive/80 to-primary relative overflow-hidden text-primary-foreground">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-0 w-80 h-80 bg-primary-foreground/10 rounded-full blur-3xl -translate-x-1/2 animate-float" />
          <div className="absolute bottom-1/3 right-0 w-64 h-64 bg-destructive/20 rounded-full blur-3xl translate-x-1/2 animate-pulse delay-1000" />
          <div className="absolute top-20 right-20 w-8 h-8">
            <Sparkles className="h-8 w-8 text-primary-foreground/20 animate-spin-slow" />
          </div>
          <div className="absolute bottom-20 left-20 w-10 h-10">
            <Sparkles className="h-10 w-10 text-primary-foreground/20 animate-bounce delay-500" />
          </div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-in fade-in-0 zoom-in-95 duration-1000">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-background via-white/90 to-background bg-clip-text -webkit-background-clip-text">
              Schedule a Campus Tour
            </h2>
            <p className="text-primary-foreground/90 mb-10 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
              Experience our facilities firsthand and meet our dedicated faculty. We offer personalized campus tours every weekday. Contact us to schedule your visit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="tel:+911120456789">
                <Button size="lg" className="bg-background text-primary hover:bg-muted hover:shadow-2xl hover:scale-105 transition-all duration-300 border-2 border-background/20">
                  Call to Schedule
                  <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="mailto:admissions@bkgyandeep.edu">
                <Button size="lg" variant="outline" className="border-background text-background hover:bg-background/10 hover:text-primary transition-all duration-300 shadow-xl">
                  Email Admissions
                  <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}