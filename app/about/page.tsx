'use client'


import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Target, Eye, Heart, Users, Building2, BookOpen, Sparkles, Quote, Award, Users2, Home, Calendar, Clock, Trophy, GraduationCap, BarChart3, Globe, Leaf } from 'lucide-react';
import { cn } from '@/lib/utils';
import SchoolImage from '../../schoolimage.png';
import ChairmanImage from '../../public/images/chairmen.jpeg'; // Adjust relative path to your public/images/ folder (e.g., '../../../public/' if in app/about/page.tsx)
import PrincipalImage from '../../public/images/lailtprinciple.jpeg'
export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-primary/5 via-background to-muted/50 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={SchoolImage}
            alt="Vibrant school environment"
            fill
            className="object-cover opacity-20 z-0"
          />
          <div className="absolute top-1/4 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 animate-float" />
          <div className="absolute bottom-1/3 right-0 w-56 h-56 bg-destructive/5 rounded-full blur-3xl translate-x-1/2 animate-pulse delay-1000" />
          <div className="absolute top-20 right-20 w-8 h-8">
            <Sparkles className="h-8 w-8 text-primary/20 animate-spin-slow" />
          </div>
          <div className="absolute bottom-20 left-20 w-6 h-6">
            <Sparkles className="h-6 w-6 text-destructive/20 animate-bounce delay-500" />
          </div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-in fade-in-0 zoom-in-95 duration-1000">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              About{' '}
              <span className="bg-gradient-to-r from-primary to-destructive bg-clip-text text-transparent">
                B.K.Gyan Deep Public School
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Discover the story behind our commitment to excellence in foundational education and holistic development for students from Nursery to Class 8.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 lg:py-32 bg-background relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/5 rounded-full blur-xl -translate-x-1/2" />
          <div className="absolute bottom-1/4 right-0 w-48 h-48 bg-destructive/5 rounded-full blur-xl translate-x-1/2 animate-pulse" />
          <div className="absolute top-10 left-10 w-6 h-6">
            <Sparkles className="h-6 w-6 text-primary/10 animate-spin-slow" />
          </div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto animate-in fade-in-0 slide-in-from-top-4 duration-1000">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-primary to-destructive bg-clip-text text-transparent">Our Story</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed space-y-6">
              <p>
                Founded in 1995, B.K.Gyan Deep Public School has been a beacon of educational excellence for over 30 years. What began as a small institution with a vision to provide quality foundational education has grown into a thriving educational community serving hundreds of young learners from diverse backgrounds, from Nursery to Class 8.
              </p>
              <p>
                Our journey has been marked by continuous innovation, unwavering commitment to academic excellence, and a deep understanding of the evolving needs of early and middle school education. We've consistently adapted our teaching methodologies, infrastructure, and curriculum to ensure our students receive the best possible foundational learning experience.
              </p>
              <p>
                Today, B.K.Gyan Deep Public School stands as a testament to the power of dedicated educators, supportive parents, and motivated young students working together towards a common goal: shaping well-rounded individuals ready to make a positive impact on the world.
              </p>
            </div>
           
            {/* Stats Grid */}
            <div className="grid md:grid-cols-3 gap-8 mt-16">
              {[
                { number: '30+', label: 'Years of Excellence', icon: BookOpen },
                { number: '500+', label: 'Happy Students', icon: Users },
                { number: '50+', label: 'Expert Teachers', icon: Building2 },
              ].map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <Card key={index} className="group bg-card border-border/50 rounded-3xl p-6 text-center hover:shadow-2xl transition-all duration-700 animate-in fade-in-0 slide-in-from-bottom-4" style={{ animationDelay: `${index * 200}ms` } as React.CSSProperties}>
                    <CardContent className="p-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-destructive/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                        <Icon className="h-8 w-8 text-primary group-hover:rotate-12" />
                      </div>
                      <div className="text-3xl font-bold text-foreground mb-2 group-hover:text-primary">
                        {stat.number}
                      </div>
                      <p className="text-muted-foreground text-sm">{stat.label}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>
                {/* Chairman's Message Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-primary/5 to-destructive/10 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-0 w-56 h-56 bg-primary/5 rounded-full blur-xl -translate-x-1/2 animate-float" />
          <div className="absolute bottom-1/2 right-0 w-72 h-72 bg-destructive/5 rounded-full blur-xl translate-x-1/2 animate-pulse" />
          <div className="absolute top-10 left-10 w-6 h-6">
            <Sparkles className="h-6 w-6 text-primary/10 animate-spin-slow" />
          </div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto animate-in fade-in-0 slide-in-from-top-4 duration-1000">
            <Card className="bg-card border-border/50 rounded-3xl shadow-2xl overflow-hidden">
              <CardContent className="p-8 md:p-12 relative">
                <div className="flex flex-col lg:flex-row gap-8 items-start">
                  <div className="flex-shrink-0 lg:w-2/5 w-full">
                    <div className="relative w-full aspect-[3/4] bg-gradient-to-br from-primary/10 to-destructive/10 rounded-2xl shadow-2xl overflow-hidden">
                      <Image
                        src={ChairmanImage}
                        alt="L.N BIDHURI, Chairman"
                        fill
                        sizes="(max-width: 1024px) 100vw, 40vw"
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        priority
                        placeholder="blur"
                        onError={(e) => {
                          console.error('Chairman image failed to load:', e);
                        }}
                      />
                    </div>
                  </div>
                  <div className="flex-1 text-left">
                    <h2 className="text-3xl font-bold text-foreground mb-6">Message from the Chairman</h2>
                    <div className="text-muted-foreground leading-relaxed space-y-4 prose prose-lg max-w-none">
                      <p>
                        Dear Parents, Students, and Community Members,
                      </p>
                      <p>
                        As Chairman of B.K.Gyan Deep Public School, it is with immense pride that I reflect on our institution's legacy of excellence since its founding in 1995. Our vision has always been to create an educational ecosystem for young learners from Nursery to Class 8 that not only imparts foundational knowledge but also instills values of integrity, innovation, and inclusivity.
                      </p>
                      <p>
                        In today's rapidly evolving world, early education must transcend traditional boundaries. We are committed to equipping our young students with the tools to navigate future challenges—be it through engaging play-based learning, foundational STEM programs, arts that inspire creativity, or leadership initiatives that build character. Our dedicated team works tirelessly to ensure every child discovers their potential in a nurturing, technology-enriched environment.
                      </p>
                      <p>
                        I am grateful for the trust placed in us by our families and community. Together, let us continue shaping the leaders of tomorrow.
                      </p>
                    </div>
                    <div className="mt-8 flex justify-start">
                      <div className="bg-primary/10 border border-primary/20 rounded-2xl px-6 py-4 text-left">
                        <p className="font-bold text-foreground text-lg">L.N BIDHURI</p>
                        <p className="text-muted-foreground text-sm">Chairman, B.K.Gyan Deep Public School</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Principal Message Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-muted/50 to-primary/5 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-0 w-56 h-56 bg-primary/5 rounded-full blur-xl -translate-x-1/2 animate-float" />
          <div className="absolute bottom-1/2 right-0 w-72 h-72 bg-destructive/5 rounded-full blur-xl translate-x-1/2 animate-pulse" />
          <div className="absolute top-10 left-10 w-6 h-6">
            <Sparkles className="h-6 w-6 text-primary/10 animate-spin-slow" />
          </div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto animate-in fade-in-0 slide-in-from-top-4 duration-1000">
            <Card className="bg-card border-border/50 rounded-3xl shadow-2xl overflow-hidden">
              <CardContent className="p-8 md:p-12 relative">
                <div className="flex flex-col lg:flex-row gap-8 items-start">
                  <div className="flex-shrink-0 lg:w-2/5 w-full">
                    <div className="relative w-full aspect-[3/4] bg-gradient-to-br from-primary/10 to-destructive/10 rounded-2xl shadow-2xl overflow-hidden">
                      <Image
                        src={PrincipalImage}
                        alt="Lalit Bidhuri, Principal"
                        fill
                        sizes="(max-width: 1024px) 100vw, 40vw"
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        priority
                        placeholder="blur"
                        onError={(e) => {
                          console.error('Principal image failed to load:', e);
                        }}
                      />
                    </div>
                  </div>
                  <div className="flex-1 text-left">
                    <h2 className="text-3xl font-bold text-foreground mb-6">Message from the Principal</h2>
                    <div className="text-muted-foreground leading-relaxed space-y-4 prose prose-lg max-w-none">
                      <p>
                        Dear Parents and Students,
                      </p>
                      <p>
                        It is my great privilege to welcome you to B.K.Gyan Deep Public School. As we navigate the ever-evolving landscape of foundational education, our commitment remains steadfast: to provide an environment where every child from Nursery to Class 8 can flourish academically, socially, and emotionally.
                      </p>
                      <p>
                        We believe that early education extends far beyond textbooks and examinations. Our focus is on developing well-rounded young individuals equipped with the foundational knowledge, skills, and values needed to succeed in the 21st century. Through our dedicated faculty, modern facilities, and comprehensive curriculum tailored for primary and middle school, we ensure that each student receives the support and guidance they need to reach their full potential.
                      </p>
                      <p>
                        I invite you to join our vibrant community and experience firsthand the difference that quality foundational education can make.
                      </p>
                    </div>
                    <div className="mt-8 flex justify-start">
                      <div className="bg-primary/10 border border-primary/20 rounded-2xl px-6 py-4 text-left">
                        <p className="font-bold text-foreground text-lg">Lalit Bidhuri</p>
                        <p className="text-muted-foreground text-sm">Principal, B.K.Gyan Deep Public School</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      {/* Vision & Mission Section */}
      <section className="py-20 lg:py-32 bg-muted relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-0 w-56 h-56 bg-primary/5 rounded-full blur-xl -translate-x-1/2 animate-float" />
          <div className="absolute bottom-1/2 right-0 w-40 h-40 bg-destructive/5 rounded-full blur-xl translate-x-1/2 animate-pulse" />
          <div className="absolute top-40 right-10 w-6 h-6">
            <Sparkles className="h-6 w-6 text-primary/10 animate-bounce" />
          </div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 animate-in fade-in-0 slide-in-from-top-4 duration-1000">
            {[
              { icon: Eye, title: 'Our Vision', desc: 'To be a globally recognized institution that nurtures innovative thinkers, compassionate young leaders, and lifelong learners from Nursery to Class 8 who contribute positively to society. We envision a future where every young student discovers their unique potential and develops the foundational skills to thrive in an ever-changing world.' },
              { icon: Target, title: 'Our Mission', desc: 'To provide a nurturing, inclusive, and stimulating learning environment for students from Nursery to Class 8 that empowers them to achieve academic excellence, develop strong character, and become responsible global citizens. We are committed to fostering creativity, critical thinking, and a lifelong passion for learning through age-appropriate foundational education.' },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={index} className="group bg-card border-border/50 rounded-3xl p-8 hover:shadow-2xl transition-all duration-700 animate-in fade-in-0 slide-in-from-left-8" style={{ animationDelay: `${index * 300}ms` } as React.CSSProperties}>
                  <CardContent className="p-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-destructive/10 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                      <Icon className="h-8 w-8 text-primary group-hover:rotate-6" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-primary">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/90 transition-colors">
                      {item.desc}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 lg:py-32 bg-background relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-0 w-48 h-48 bg-primary/5 rounded-full blur-xl -translate-x-1/2" />
          <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-destructive/5 rounded-full blur-xl translate-x-1/2 animate-pulse" />
          <div className="absolute bottom-10 left-10 w-6 h-6">
            <Sparkles className="h-6 w-6 text-destructive/10 animate-spin-slow" />
          </div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto animate-in fade-in-0 slide-in-from-top-4 duration-1000">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-primary to-destructive bg-clip-text text-transparent">Our Core Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: Heart, title: 'Integrity', desc: 'Upholding honesty, transparency, and ethical behavior in all our actions, guiding young minds from an early age.' },
                { icon: BookOpen, title: 'Excellence', desc: 'Striving for the highest standards in foundational education and character development for Nursery to Class 8.' },
                { icon: Users, title: 'Community', desc: 'Building a supportive and inclusive environment for all young learners, families, and educators.' },
              ].map((value, index) => {
                const Icon = value.icon;
                return (
                  <Card key={index} className="group bg-card border-border/50 rounded-3xl p-6 text-center hover:shadow-2xl transition-all duration-700 animate-in fade-in-0 slide-in-from-bottom-6" style={{ animationDelay: `${index * 250}ms` } as React.CSSProperties}>
                    <CardContent className="p-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-destructive/10 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform">
                        <Icon className="h-8 w-8 text-primary group-hover:rotate-12" />
                      </div>
                      <h3 className="text-xl font-bold mb-3 group-hover:text-primary">
                        {value.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed group-hover:text-foreground/90 transition-colors">
                        {value.desc}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Our Facilities Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-muted/50 to-primary/5 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-0 w-64 h-64 bg-primary/5 rounded-full blur-xl -translate-x-1/2 animate-float" />
          <div className="absolute bottom-1/2 right-0 w-48 h-48 bg-destructive/5 rounded-full blur-xl translate-x-1/2 animate-pulse delay-500" />
          <div className="absolute top-20 left-20 w-6 h-6">
            <Sparkles className="h-6 w-6 text-primary/10 animate-bounce" />
          </div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto animate-in fade-in-0 slide-in-from-top-4 duration-1000">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-primary to-destructive bg-clip-text text-transparent">Our Facilities</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12 text-center leading-relaxed">
              Child-friendly infrastructure designed to foster learning, creativity, and holistic development for Nursery to Class 8.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: Home, title: 'Modern Classrooms', desc: 'Bright, interactive classrooms equipped with age-appropriate technology and comfortable seating for young learners.' },
                { icon: Calendar, title: 'Library & Resources', desc: 'Vibrant collection of picture books, early readers, and digital story resources with cozy reading corners.' },
                { icon: Clock, title: 'Play & Sports Areas', desc: 'Safe playgrounds, indoor play zones, and age-suited sports facilities promoting physical activity and teamwork.' },
                { icon: Users2, title: 'Activity Hall', desc: 'Multi-purpose space for assemblies, creative performances, and group activities with child-safe audio-visual aids.' },
                { icon: BookOpen, title: 'Discovery Labs', desc: 'Hands-on exploration labs for basic science experiments and sensory learning tailored to primary levels.' },
                { icon: Heart, title: 'Wellness Corner', desc: 'Dedicated space for play therapy, emotional support, and early wellness guidance for young students.' },
              ].map((facility, index) => {
                const Icon = facility.icon;
                return (
                  <Card key={index} className="group bg-card border-border/50 rounded-3xl p-6 hover:shadow-2xl transition-all duration-700 animate-in fade-in-0 slide-in-from-bottom-6" style={{ animationDelay: `${index * 200}ms` } as React.CSSProperties}>
                    <CardContent className="p-0">
                      <div className="w-14 h-14 bg-gradient-to-br from-primary/10 to-destructive/10 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform">
                        <Icon className="h-7 w-7 text-primary group-hover:rotate-6" />
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-center group-hover:text-primary">
                        {facility.title}
                      </h3>
                      <p className="text-muted-foreground text-sm text-center leading-relaxed group-hover:text-foreground/90 transition-colors">
                        {facility.desc}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements & Awards Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-primary/5 to-muted/50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-0 w-56 h-56 bg-primary/5 rounded-full blur-xl -translate-x-1/2" />
          <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-destructive/5 rounded-full blur-xl translate-x-1/2 animate-pulse" />
          <div className="absolute top-10 right-10 w-6 h-6">
            <Sparkles className="h-6 w-6 text-primary/10 animate-spin-slow" />
          </div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto animate-in fade-in-0 slide-in-from-top-4 duration-1000">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-primary to-destructive bg-clip-text text-transparent">Achievements & Awards</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12 text-center leading-relaxed">
              Celebrating our milestones and recognitions that reflect our dedication to foundational excellence.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: Award, title: 'Best CBSE Primary School 2025', desc: 'Recognized by Delhi Education Board for outstanding foundational academic performance.' },
                { icon: Trophy, title: 'Junior Sports Excellence Award', desc: 'Champions in inter-school junior sports tournament for three consecutive years.' },
                { icon: Sparkles, title: 'Innovation in Early Education', desc: 'Awarded for implementing engaging play-based STEM programs and tech integration for young learners.' },
                { icon: Users2, title: 'Community Service Honor', desc: 'Commended for child-led environmental initiatives and social outreach programs.' },
                { icon: BookOpen, title: 'Young Readers Festival Winners', desc: 'Students excelled in national-level storytelling and creative writing competitions.' },
                { icon: Heart, title: 'Early Wellness Program Certification', desc: 'Certified for comprehensive child mental health and emotional wellness initiatives.' },
              ].map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <Card key={index} className="group bg-card border-border/50 rounded-3xl p-6 hover:shadow-2xl transition-all duration-700 animate-in fade-in-0 slide-in-from-bottom-6" style={{ animationDelay: `${index * 200}ms` } as React.CSSProperties}>
                    <CardContent className="p-0">
                      <div className="w-14 h-14 bg-gradient-to-br from-primary/10 to-destructive/10 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform">
                        <Icon className="h-7 w-7 text-primary group-hover:rotate-6" />
                      </div>
                      <h3 className="text-lg font-bold mb-3 text-center group-hover:text-primary">
                        {achievement.title}
                      </h3>
                      <p className="text-muted-foreground text-sm text-center leading-relaxed group-hover:text-foreground/90 transition-colors">
                        {achievement.desc}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 lg:py-32 bg-muted relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-0 w-48 h-48 bg-primary/5 rounded-full blur-xl -translate-x-1/2 animate-float" />
          <div className="absolute bottom-1/2 right-0 w-64 h-64 bg-destructive/5 rounded-full blur-xl translate-x-1/2 animate-pulse delay-500" />
          <div className="absolute bottom-10 right-10 w-6 h-6">
            <Sparkles className="h-6 w-6 text-destructive/10 animate-bounce" />
          </div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto animate-in fade-in-0 slide-in-from-top-4 duration-1000">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-primary to-destructive bg-clip-text text-transparent">What Our Community Says</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12 text-center leading-relaxed">
              Hear from parents, students, and alumni about their experiences at B.K.Gyan Deep Public School.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { quote: '"The teachers at Bk Gyandeep are not just educators; they are mentors who genuinely care about each child\'s early growth. My daughter has flourished from Nursery onwards."', author: 'Priya Sharma, Parent' },
                { quote: '"The balance of play-based learning and academics is perfect. I\'ve made so many friends and discovered new talents in Class 5!"', author: 'Rahul Kumar, Student' },
                { quote: '"As an alumnus from Class 8, I credit Bk Gyandeep for building my strong foundation. The values learned here have guided my high school success."', author: 'Dr. Anjali Mehta, Alumnus' },
              ].map((testimonial, index) => (
                <Card key={index} className="group bg-card border-border/50 rounded-3xl p-6 hover:shadow-2xl transition-all duration-700 animate-in fade-in-0 slide-in-from-bottom-6" style={{ animationDelay: `${index * 250}ms` } as React.CSSProperties}>
                  <CardContent className="p-0">
                    <Quote className="h-8 w-8 text-primary/50 mx-auto mb-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                    <p className="text-muted-foreground italic leading-relaxed mb-4 group-hover:text-foreground/90 transition-colors">
                      "{testimonial.quote}"
                    </p>
                    <p className="text-foreground font-semibold text-sm text-center">
                      {testimonial.author}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Philosophy Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-primary/5 to-muted/50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-0 w-64 h-64 bg-primary/5 rounded-full blur-xl -translate-x-1/2 animate-float" />
          <div className="absolute bottom-1/2 right-0 w-48 h-48 bg-destructive/5 rounded-full blur-xl translate-x-1/2 animate-pulse delay-500" />
          <div className="absolute bottom-10 left-10 w-6 h-6">
            <Sparkles className="h-6 w-6 text-primary/10 animate-bounce" />
          </div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto animate-in fade-in-0 slide-in-from-top-4 duration-1000">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-primary to-destructive bg-clip-text text-transparent">Curriculum Philosophy</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12 text-center leading-relaxed">
              Our CBSE-aligned curriculum for Nursery to Class 8 blends academic rigor with experiential, play-based learning to build strong foundations for global success.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { icon: GraduationCap, title: 'Holistic Approach', desc: 'Integrating CBSE foundational curriculum with play-based and international best practices, focusing on early 21st-century skills like curiosity and collaboration.' },
                { icon: BarChart3, title: 'Assessment Innovation', desc: 'Continuous, child-friendly evaluation through activities, observations, and portfolios rather than rote memorization.' },
                { icon: Globe, title: 'Global Perspective', desc: 'Incorporating simple world languages, cultural stories, and virtual exchanges to foster early global awareness.' },
                { icon: Leaf, title: 'Sustainability Focus', desc: 'Embedding fun environmental education and eco-friendly practices across all subjects and daily school life for young minds.' },
              ].map((philo, index) => {
                const Icon = philo.icon;
                return (
                  <Card key={index} className="group bg-card border-border/50 rounded-3xl p-6 hover:shadow-2xl transition-all duration-700 animate-in fade-in-0 slide-in-from-bottom-6" style={{ animationDelay: `${index * 200}ms` } as React.CSSProperties}>
                    <CardContent className="p-0">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-destructive/10 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform">
                        <Icon className="h-6 w-6 text-primary group-hover:rotate-6" />
                      </div>
                      <h3 className="text-lg font-bold mb-3 text-center group-hover:text-primary">
                        {philo.title}
                      </h3>
                      <p className="text-muted-foreground text-sm text-center leading-relaxed group-hover:text-foreground/90 transition-colors">
                        {philo.desc}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

    
    </div>
  );
}