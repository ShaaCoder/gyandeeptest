import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Target, Eye, Heart, Users, Building2, BookOpen, Sparkles, Quote, Award, Users2, Home, Calendar, Clock, Trophy, GraduationCap, BarChart3, Globe, Leaf } from 'lucide-react';
import { cn } from '@/lib/utils';
import SchoolImage from '../../schoolimage.png'
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
                Bk Gyandeep Public School
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Discover the story behind our commitment to excellence in education and holistic student development.
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
                Founded in 1995, Bk Gyandeep Public School has been a beacon of educational excellence for over 28 years. What began as a small institution with a vision to provide quality education has grown into a thriving educational community serving hundreds of students from diverse backgrounds.
              </p>
              <p>
                Our journey has been marked by continuous innovation, unwavering commitment to academic excellence, and a deep understanding of the evolving needs of modern education. We've consistently adapted our teaching methodologies, infrastructure, and curriculum to ensure our students receive the best possible education.
              </p>
              <p>
                Today, Bk Gyandeep Public School stands as a testament to the power of dedicated educators, supportive parents, and motivated students working together towards a common goal: shaping well-rounded individuals ready to make a positive impact on the world.
              </p>
            </div>
           
            {/* Stats Grid */}
            <div className="grid md:grid-cols-3 gap-8 mt-16">
              {[
                { number: '28+', label: 'Years of Excellence', icon: BookOpen },
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
              { icon: Eye, title: 'Our Vision', desc: 'To be a globally recognized institution that nurtures innovative thinkers, compassionate leaders, and lifelong learners who contribute positively to society. We envision a future where every student discovers their unique potential and develops the skills to thrive in an ever-changing world.' },
              { icon: Target, title: 'Our Mission', desc: 'To provide a nurturing, inclusive, and stimulating learning environment that empowers students to achieve academic excellence, develop strong character, and become responsible global citizens. We are committed to fostering creativity, critical thinking, and a lifelong passion for learning.' },
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
                { icon: Heart, title: 'Integrity', desc: 'Upholding honesty, transparency, and ethical behavior in all our actions.' },
                { icon: BookOpen, title: 'Excellence', desc: 'Striving for the highest standards in education and character development.' },
                { icon: Users, title: 'Community', desc: 'Building a supportive and inclusive environment for all stakeholders.' },
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
              State-of-the-art infrastructure designed to foster learning, creativity, and holistic development.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: Home, title: 'Modern Classrooms', desc: 'Smart classrooms equipped with interactive technology and comfortable learning environments.' },
                { icon: Calendar, title: 'Library & Resources', desc: 'Extensive collection of books, digital resources, and quiet study spaces for research and reading.' },
                { icon: Clock, title: 'Sports Complex', desc: 'Full-sized fields, indoor gymnasium, and fitness centers promoting physical health and teamwork.' },
                { icon: Users2, title: 'Auditorium', desc: 'Multi-purpose hall for assemblies, performances, and cultural events with advanced audio-visual systems.' },
                { icon: BookOpen, title: 'Science Labs', desc: 'Well-equipped laboratories for hands-on experiments in physics, chemistry, and biology.' },
                { icon: Heart, title: 'Counseling Center', desc: 'Dedicated space for student wellness, career guidance, and emotional support services.' },
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
              Celebrating our milestones and recognitions that reflect our dedication to excellence.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: Award, title: 'Best CBSE School 2024', desc: 'Recognized by Delhi Education Board for outstanding academic performance.' },
                { icon: Trophy, title: 'Sports Excellence Award', desc: 'Champions in inter-school sports tournament for three consecutive years.' },
                { icon: Sparkles, title: 'Innovation in Education', desc: 'Awarded for implementing cutting-edge STEM programs and tech integration.' },
                { icon: Users2, title: 'Community Service Honor', desc: 'Commended for environmental initiatives and social outreach programs.' },
                { icon: BookOpen, title: 'Literary Festival Winners', desc: 'Students excelled in national-level debate and essay competitions.' },
                { icon: Heart, title: 'Wellness Program Certification', desc: 'Certified for comprehensive student mental health and wellness initiatives.' },
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
              Hear from parents, students, and alumni about their experiences at Bk Gyandeep Public School.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { quote: '"The teachers at Bk Gyandeep are not just educators; they are mentors who genuinely care about each child\'s growth. My son has flourished here."', author: 'Priya Sharma, Parent' },
                { quote: '"The balance of academics and extracurriculars is perfect. I\'ve developed skills I never knew I had!"', author: 'Rahul Kumar, Student' },
                { quote: '"As an alumnus, I credit Bk Gyandeep for building my foundation. The values learned here have guided my career success."', author: 'Dr. Anjali Mehta, Alumnus' },
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

      {/* Leadership Team Section */}
      <section className="py-20 lg:py-32 bg-background relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-0 w-48 h-48 bg-primary/5 rounded-full blur-xl -translate-x-1/2 animate-float" />
          <div className="absolute bottom-1/4 right-0 w-56 h-56 bg-destructive/5 rounded-full blur-xl translate-x-1/2 animate-pulse" />
          <div className="absolute top-20 right-20 w-6 h-6">
            <Sparkles className="h-6 w-6 text-primary/10 animate-spin-slow" />
          </div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto animate-in fade-in-0 slide-in-from-top-4 duration-1000">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-primary to-destructive bg-clip-text text-transparent">Our Leadership Team</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12 text-center leading-relaxed">
              Meet the dedicated leaders shaping the future of education at Bk Gyandeep Public School.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { name: 'Dr. Sarah Johnson', role: 'Principal', desc: 'With 25 years of experience, Dr. Johnson leads with a passion for innovative teaching and student-centered learning.', image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
                { name: 'Mr. Raj Patel', role: 'Vice Principal', desc: 'Expert in curriculum development and extracurricular programs, ensuring balanced growth for all students.', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
                { name: 'Ms. Priya Singh', role: 'Academic Director', desc: 'Champion of technology integration and teacher training, driving academic excellence across all grades.', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
              ].map((leader, index) => (
                <Card key={index} className="group bg-card border-border/50 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-700 animate-in fade-in-0 slide-in-from-bottom-6" style={{ animationDelay: `${index * 250}ms` } as React.CSSProperties}>
                  <CardContent className="p-0">
                    <div className="relative h-48">
                      <Image
                        src={leader.image}
                        alt={leader.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-foreground mb-2">{leader.name}</h3>
                      <p className="text-muted-foreground mb-3">{leader.role}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground/90 transition-colors">
                        {leader.desc}
                      </p>
                    </div>
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
              Our curriculum is designed to blend academic rigor with experiential learning, preparing students for global success.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { icon: GraduationCap, title: 'Holistic Approach', desc: 'Integrating CBSE curriculum with international best practices, focusing on 21st-century skills like critical thinking and collaboration.' },
                { icon: BarChart3, title: 'Assessment Innovation', desc: 'Continuous evaluation through projects, portfolios, and formative assessments rather than rote memorization.' },
                { icon: Globe, title: 'Global Perspective', desc: 'Incorporating world languages, cultural studies, and exchange programs to foster global citizenship.' },
                { icon: Leaf, title: 'Sustainability Focus', desc: 'Embedding environmental education and sustainable practices across all subjects and school operations.' },
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
                <div className="flex flex-col lg:flex-row gap-8 items-center">
                  <div className="flex-shrink-0 lg:w-1/3">
                    <div className="w-32 h-32 bg-gradient-to-br from-primary to-destructive rounded-3xl flex items-center justify-center text-background text-6xl shadow-2xl animate-pulse">
                      👨‍💼
                    </div>
                  </div>
                  <div className="flex-1 text-center lg:text-left">
                    <h2 className="text-3xl font-bold text-foreground mb-6">Message from the Chairman</h2>
                    <div className="text-muted-foreground leading-relaxed space-y-4 prose prose-lg max-w-none">
                      <p>
                        Dear Parents, Students, and Community Members,
                      </p>
                      <p>
                        As Chairman of Bk Gyandeep Public School, it is with immense pride that I reflect on our institution's legacy of excellence since its founding in 1995. Our vision has always been to create an educational ecosystem that not only imparts knowledge but also instills values of integrity, innovation, and inclusivity.
                      </p>
                      <p>
                        In today's rapidly evolving world, education must transcend traditional boundaries. We are committed to equipping our students with the tools to navigate global challenges—be it through cutting-edge STEM programs, arts that inspire creativity, or leadership initiatives that build character. Our dedicated team works tirelessly to ensure every child discovers their potential in a nurturing, technology-enriched environment.
                      </p>
                      <p>
                        I am grateful for the trust placed in us by our families and community. Together, let us continue shaping the leaders of tomorrow.
                      </p>
                      <div className="mt-8 pt-6 border-t border-border/30 text-center lg:text-left">
                        <p className="font-bold text-foreground">Mr. Rajesh Kumar</p>
                        <p className="text-muted-foreground text-sm">Chairman, Bk Gyandeep Public School</p>
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
                <div className="flex flex-col lg:flex-row gap-8 items-center">
                  <div className="flex-shrink-0 lg:w-1/3">
                    <div className="w-32 h-32 bg-gradient-to-br from-primary to-destructive rounded-3xl flex items-center justify-center text-background text-6xl shadow-2xl animate-pulse">
                      👨‍🏫
                    </div>
                  </div>
                  <div className="flex-1 text-center lg:text-left">
                    <h2 className="text-3xl font-bold text-foreground mb-6">Message from the Principal</h2>
                    <div className="text-muted-foreground leading-relaxed space-y-4 prose prose-lg max-w-none">
                      <p>
                        Dear Parents and Students,
                      </p>
                      <p>
                        It is my great privilege to welcome you to Bk Gyandeep Public School. As we navigate the ever-evolving landscape of education, our commitment remains steadfast: to provide an environment where every child can flourish academically, socially, and emotionally.
                      </p>
                      <p>
                        We believe that education extends far beyond textbooks and examinations. Our focus is on developing well-rounded individuals equipped with the knowledge, skills, and values needed to succeed in the 21st century. Through our dedicated faculty, modern facilities, and comprehensive curriculum, we ensure that each student receives the support and guidance they need to reach their full potential.
                      </p>
                      <p>
                        I invite you to join our vibrant community and experience firsthand the difference that quality education can make.
                      </p>
                      <div className="mt-8 pt-6 border-t border-border/30 text-center lg:text-left">
                        <p className="font-bold text-foreground">Dr. Sarah Johnson</p>
                        <p className="text-muted-foreground text-sm">Principal, Bk Gyandeep Public School</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}