import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BookOpen, Palette, Music, FlaskConical, Calculator, Globe, Dumbbell, Languages, Sparkles, ArrowRight, GraduationCap } from 'lucide-react';
import { cn } from '@/lib/utils';
import SchoolImage from '../../schoolimage.png'
export default function Academics() {
  return (
    <div>
      {/* Hero Section with Background Image */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={SchoolImage}
            alt="Bk Gyandeep Public School Campus"
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
              Academics at{' '}
              <span className="bg-gradient-to-r from-background via-white to-background bg-clip-text text-transparent">
                Bk Gyandeep Public School
              </span>
            </h1>
            <p className="text-xl text-background/90 leading-relaxed max-w-2xl mx-auto">
              A comprehensive educational program designed to nurture intellectual curiosity and academic excellence at every level.
            </p>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-20 lg:py-32 bg-background relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/5 rounded-full blur-xl -translate-x-1/2" />
          <div className="absolute bottom-1/4 right-0 w-48 h-48 bg-destructive/5 rounded-full blur-xl translate-x-1/2 animate-pulse" />
          <div className="absolute top-10 left-10 w-6 h-6">
            <Sparkles className="h-6 w-6 text-primary/10 animate-spin-slow" />
          </div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <Tabs defaultValue="primary" className="max-w-7xl mx-auto animate-in fade-in-0 slide-in-from-top-4 duration-1000">
            <TabsList className="grid w-full grid-cols-3 mb-12 rounded-3xl bg-card border-border/50 p-1 shadow-lg">
              <TabsTrigger value="primary" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md rounded-2xl transition-all duration-300 py-3">
                Primary School
              </TabsTrigger>
              <TabsTrigger value="middle" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md rounded-2xl transition-all duration-300 py-3">
                Middle School
              </TabsTrigger>
              <TabsTrigger value="senior" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md rounded-2xl transition-all duration-300 py-3">
                Senior School
              </TabsTrigger>
            </TabsList>

            {/* Primary School Tab */}
            <TabsContent value="primary" className="space-y-8 animate-in fade-in-0 slide-in-from-bottom-2 duration-700">
              <div className="text-center mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-primary/10 to-destructive/10 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <BookOpen className="h-12 w-12 text-primary" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Primary School (Grades 1-5)</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                  Building strong foundations through interactive learning, hands-on activities, and play-based education.
                </p>
              </div>

              <Card className="group bg-card border-border/50 rounded-3xl hover:shadow-2xl transition-all duration-700">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-6 group-hover:text-primary">Curriculum Overview</h3>
                  <p className="text-muted-foreground mb-8 leading-relaxed text-lg group-hover:text-foreground/90">
                    Our primary school curriculum focuses on developing fundamental skills in literacy, numeracy, and social interaction. We employ a child-centered approach that encourages exploration, creativity, and a love for learning.
                  </p>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                        <BookOpen className="h-5 w-5 text-primary" />
                        Core Subjects
                      </h4>
                      <ul className="space-y-3">
                        <li className="flex items-center gap-3 p-3 bg-muted/50 rounded-xl group-hover:bg-primary/5 transition-colors">
                          <div className="w-2 h-2 bg-primary rounded-full" />
                          English Language & Literature
                        </li>
                        <li className="flex items-center gap-3 p-3 bg-muted/50 rounded-xl group-hover:bg-primary/5 transition-colors">
                          <div className="w-2 h-2 bg-primary rounded-full" />
                          Mathematics
                        </li>
                        <li className="flex items-center gap-3 p-3 bg-muted/50 rounded-xl group-hover:bg-primary/5 transition-colors">
                          <div className="w-2 h-2 bg-primary rounded-full" />
                          Environmental Science
                        </li>
                        <li className="flex items-center gap-3 p-3 bg-muted/50 rounded-xl group-hover:bg-primary/5 transition-colors">
                          <div className="w-2 h-2 bg-primary rounded-full" />
                          Social Studies
                        </li>
                      </ul>
                    </div>

                    <div className="space-y-4">
                      <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                        <Palette className="h-5 w-5 text-destructive" />
                        Enrichment Activities
                      </h4>
                      <ul className="space-y-3">
                        <li className="flex items-center gap-3 p-3 bg-muted/50 rounded-xl group-hover:bg-destructive/5 transition-colors">
                          <div className="w-2 h-2 bg-destructive rounded-full" />
                          Art & Craft
                        </li>
                        <li className="flex items-center gap-3 p-3 bg-muted/50 rounded-xl group-hover:bg-destructive/5 transition-colors">
                          <div className="w-2 h-2 bg-destructive rounded-full" />
                          Music & Dance
                        </li>
                        <li className="flex items-center gap-3 p-3 bg-muted/50 rounded-xl group-hover:bg-destructive/5 transition-colors">
                          <div className="w-2 h-2 bg-destructive rounded-full" />
                          Physical Education
                        </li>
                        <li className="flex items-center gap-3 p-3 bg-muted/50 rounded-xl group-hover:bg-destructive/5 transition-colors">
                          <div className="w-2 h-2 bg-destructive rounded-full" />
                          Language Labs
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Highlight Cards */}
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { emoji: '📖', title: 'Reading Program', desc: 'Structured phonics and guided reading sessions to build literacy skills.', color: 'from-primary/10 to-destructive/10' },
                  { emoji: '🎮', title: 'Play-Based Learning', desc: 'Learning through play to develop cognitive and social skills.', color: 'from-destructive/10 to-primary/10' },
                  { emoji: '👥', title: 'Small Groups', desc: 'Individualized attention with small class sizes for optimal learning.', color: 'from-primary/10 to-destructive/10' },
                ].map((highlight, index) => (
                  <Card key={index} className={cn('group border-border/50 rounded-2xl p-6 hover:shadow-xl transition-all duration-700 animate-in fade-in-0 slide-in-from-bottom-4', `delay-${index * 200}`)}>
                    <CardContent className="p-0">
                      <div className="text-4xl mb-3 text-center">{highlight.emoji}</div>
                      <h4 className="font-semibold text-foreground mb-2 text-center group-hover:text-primary">
                        {highlight.title}
                      </h4>
                      <p className="text-muted-foreground text-sm text-center leading-relaxed group-hover:text-foreground/90">
                        {highlight.desc}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Middle School Tab */}
            <TabsContent value="middle" className="space-y-8 animate-in fade-in-0 slide-in-from-bottom-2 duration-700">
              <div className="text-center mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-destructive/10 to-primary/10 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Calculator className="h-12 w-12 text-destructive" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Middle School (Grades 6-8)</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                  Developing critical thinking, analytical skills, and comprehensive subject knowledge through engaging pedagogy.
                </p>
              </div>

              <Card className="group bg-card border-border/50 rounded-3xl hover:shadow-2xl transition-all duration-700">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-6 group-hover:text-primary">Curriculum Overview</h3>
                  <p className="text-muted-foreground mb-8 leading-relaxed text-lg group-hover:text-foreground/90">
                    The middle school curriculum bridges foundational learning with advanced concepts. Students explore subjects in greater depth while developing research skills, critical thinking, and independent learning abilities.
                  </p>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                        <BookOpen className="h-5 w-5 text-primary" />
                        Core Subjects
                      </h4>
                      <ul className="space-y-3">
                        <li className="flex items-center gap-3 p-3 bg-muted/50 rounded-xl group-hover:bg-primary/5 transition-colors">
                          <div className="w-2 h-2 bg-primary rounded-full" />
                          English Language & Literature
                        </li>
                        <li className="flex items-center gap-3 p-3 bg-muted/50 rounded-xl group-hover:bg-primary/5 transition-colors">
                          <div className="w-2 h-2 bg-primary rounded-full" />
                          Mathematics & Algebra
                        </li>
                        <li className="flex items-center gap-3 p-3 bg-muted/50 rounded-xl group-hover:bg-primary/5 transition-colors">
                          <div className="w-2 h-2 bg-primary rounded-full" />
                          Integrated Science (Physics, Chemistry, Biology)
                        </li>
                        <li className="flex items-center gap-3 p-3 bg-muted/50 rounded-xl group-hover:bg-primary/5 transition-colors">
                          <div className="w-2 h-2 bg-primary rounded-full" />
                          Social Studies & Geography
                        </li>
                        <li className="flex items-center gap-3 p-3 bg-muted/50 rounded-xl group-hover:bg-primary/5 transition-colors">
                          <div className="w-2 h-2 bg-primary rounded-full" />
                          Second Language (Spanish/French)
                        </li>
                      </ul>
                    </div>

                    <div className="space-y-4">
                      <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                        <Palette className="h-5 w-5 text-destructive" />
                        Elective & Activities
                      </h4>
                      <ul className="space-y-3">
                        <li className="flex items-center gap-3 p-3 bg-muted/50 rounded-xl group-hover:bg-destructive/5 transition-colors">
                          <div className="w-2 h-2 bg-destructive rounded-full" />
                          Visual Arts
                        </li>
                        <li className="flex items-center gap-3 p-3 bg-muted/50 rounded-xl group-hover:bg-destructive/5 transition-colors">
                          <div className="w-2 h-2 bg-destructive rounded-full" />
                          Performing Arts
                        </li>
                        <li className="flex items-center gap-3 p-3 bg-muted/50 rounded-xl group-hover:bg-destructive/5 transition-colors">
                          <div className="w-2 h-2 bg-destructive rounded-full" />
                          Sports & Athletics
                        </li>
                        <li className="flex items-center gap-3 p-3 bg-muted/50 rounded-xl group-hover:bg-destructive/5 transition-colors">
                          <div className="w-2 h-2 bg-destructive rounded-full" />
                          Debate & Public Speaking
                        </li>
                        <li className="flex items-center gap-3 p-3 bg-muted/50 rounded-xl group-hover:bg-destructive/5 transition-colors">
                          <div className="w-2 h-2 bg-destructive rounded-full" />
                          STEM Projects
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Highlight Cards */}
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { emoji: '🔬', title: 'Lab Work', desc: 'Hands-on experiments in well-equipped science laboratories.', color: 'from-primary/10 to-destructive/10' },
                  { emoji: '💻', title: 'Technology Integration', desc: 'Digital literacy and computer science fundamentals.', color: 'from-destructive/10 to-primary/10' },
                  { emoji: '🌱', title: 'Project-Based Learning', desc: 'Real-world projects fostering creativity and problem-solving.', color: 'from-primary/10 to-destructive/10' },
                ].map((highlight, index) => (
                  <Card key={index} className={cn('group border-border/50 rounded-2xl p-6 hover:shadow-xl transition-all duration-700 animate-in fade-in-0 slide-in-from-bottom-4', `delay-${index * 200}`)}>
                    <CardContent className="p-0">
                      <div className="text-4xl mb-3 text-center">{highlight.emoji}</div>
                      <h4 className="font-semibold mb-2 text-center group-hover:text-primary">
                        {highlight.title}
                      </h4>
                      <p className="text-muted-foreground text-sm text-center leading-relaxed group-hover:text-foreground/90">
                        {highlight.desc}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Senior School Tab */}
            <TabsContent value="senior" className="space-y-8 animate-in fade-in-0 slide-in-from-bottom-2 duration-700">
              <div className="text-center mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-destructive/10 to-primary/10 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <GraduationCap className="h-12 w-12 text-destructive" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Senior School (Grades 9-12)</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                  Advanced academic preparation for higher education and professional success with specialized subject streams.
                </p>
              </div>

              <Card className="group bg-card border-border/50 rounded-3xl hover:shadow-2xl transition-all duration-700">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-6 group-hover:text-primary">Curriculum Overview</h3>
                  <p className="text-muted-foreground mb-8 leading-relaxed text-lg group-hover:text-foreground/90">
                    Our senior school program offers rigorous academic preparation aligned with national and international standards. Students choose specialized streams based on their interests and career goals, with comprehensive support for college admissions.
                  </p>

                  <div className="space-y-8">
                    {/* Science Stream */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2 text-destructive">
                        <FlaskConical className="h-5 w-5" />
                        Science Stream
                      </h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <ul className="space-y-2 text-muted-foreground">
                          <li className="flex items-center gap-2 p-3 bg-muted/50 rounded-xl group-hover:bg-primary/5 transition-colors">
                            <div className="w-2 h-2 bg-destructive rounded-full" />
                            Physics
                          </li>
                          <li className="flex items-center gap-2 p-3 bg-muted/50 rounded-xl group-hover:bg-primary/5 transition-colors">
                            <div className="w-2 h-2 bg-destructive rounded-full" />
                            Chemistry
                          </li>
                          <li className="flex items-center gap-2 p-3 bg-muted/50 rounded-xl group-hover:bg-primary/5 transition-colors">
                            <div className="w-2 h-2 bg-destructive rounded-full" />
                            Biology
                          </li>
                        </ul>
                        <ul className="space-y-2 text-muted-foreground">
                          <li className="flex items-center gap-2 p-3 bg-muted/50 rounded-xl group-hover:bg-primary/5 transition-colors">
                            <div className="w-2 h-2 bg-destructive rounded-full" />
                            Mathematics
                          </li>
                          <li className="flex items-center gap-2 p-3 bg-muted/50 rounded-xl group-hover:bg-primary/5 transition-colors">
                            <div className="w-2 h-2 bg-destructive rounded-full" />
                            English
                          </li>
                          <li className="flex items-center gap-2 p-3 bg-muted/50 rounded-xl group-hover:bg-primary/5 transition-colors">
                            <div className="w-2 h-2 bg-destructive rounded-full" />
                            Computer Science (Elective)
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/* Commerce Stream */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2 text-destructive">
                        <Calculator className="h-5 w-5" />
                        Commerce Stream
                      </h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <ul className="space-y-2 text-muted-foreground">
                          <li className="flex items-center gap-2 p-3 bg-muted/50 rounded-xl group-hover:bg-primary/5 transition-colors">
                            <div className="w-2 h-2 bg-destructive rounded-full" />
                            Accountancy
                          </li>
                          <li className="flex items-center gap-2 p-3 bg-muted/50 rounded-xl group-hover:bg-primary/5 transition-colors">
                            <div className="w-2 h-2 bg-destructive rounded-full" />
                            Business Studies
                          </li>
                          <li className="flex items-center gap-2 p-3 bg-muted/50 rounded-xl group-hover:bg-primary/5 transition-colors">
                            <div className="w-2 h-2 bg-destructive rounded-full" />
                            Economics
                          </li>
                        </ul>
                        <ul className="space-y-2 text-muted-foreground">
                          <li className="flex items-center gap-2 p-3 bg-muted/50 rounded-xl group-hover:bg-primary/5 transition-colors">
                            <div className="w-2 h-2 bg-destructive rounded-full" />
                            Mathematics
                          </li>
                          <li className="flex items-center gap-2 p-3 bg-muted/50 rounded-xl group-hover:bg-primary/5 transition-colors">
                            <div className="w-2 h-2 bg-destructive rounded-full" />
                            English
                          </li>
                          <li className="flex items-center gap-2 p-3 bg-muted/50 rounded-xl group-hover:bg-primary/5 transition-colors">
                            <div className="w-2 h-2 bg-destructive rounded-full" />
                            Informatics (Elective)
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/* Humanities Stream */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2 text-destructive">
                        <Globe className="h-5 w-5" />
                        Humanities Stream
                      </h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <ul className="space-y-2 text-muted-foreground">
                          <li className="flex items-center gap-2 p-3 bg-muted/50 rounded-xl group-hover:bg-primary/5 transition-colors">
                            <div className="w-2 h-2 bg-destructive rounded-full" />
                            History
                          </li>
                          <li className="flex items-center gap-2 p-3 bg-muted/50 rounded-xl group-hover:bg-primary/5 transition-colors">
                            <div className="w-2 h-2 bg-destructive rounded-full" />
                            Geography
                          </li>
                          <li className="flex items-center gap-2 p-3 bg-muted/50 rounded-xl group-hover:bg-primary/5 transition-colors">
                            <div className="w-2 h-2 bg-destructive rounded-full" />
                            Political Science
                          </li>
                        </ul>
                        <ul className="space-y-2 text-muted-foreground">
                          <li className="flex items-center gap-2 p-3 bg-muted/50 rounded-xl group-hover:bg-primary/5 transition-colors">
                            <div className="w-2 h-2 bg-destructive rounded-full" />
                            Sociology
                          </li>
                          <li className="flex items-center gap-2 p-3 bg-muted/50 rounded-xl group-hover:bg-primary/5 transition-colors">
                            <div className="w-2 h-2 bg-destructive rounded-full" />
                            English
                          </li>
                          <li className="flex items-center gap-2 p-3 bg-muted/50 rounded-xl group-hover:bg-primary/5 transition-colors">
                            <div className="w-2 h-2 bg-destructive rounded-full" />
                            Psychology (Elective)
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Highlight Cards */}
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { emoji: '📝', title: 'College Prep', desc: 'Comprehensive guidance for college applications and entrance exams.', color: 'from-primary/10 to-destructive/10' },
                  { emoji: '🎯', title: 'Career Counseling', desc: 'Professional guidance for career planning and goal setting.', color: 'from-destructive/10 to-primary/10' },
                  { emoji: '🏆', title: 'Advanced Learning', desc: 'Honors courses and advanced placement opportunities.', color: 'from-primary/10 to-destructive/10' },
                ].map((highlight, index) => (
                  <Card key={index} className={cn('group border-border/50 rounded-2xl p-6 hover:shadow-xl transition-all duration-700 animate-in fade-in-0 slide-in-from-bottom-4', `delay-${index * 200}`)}>
                    <CardContent className="p-0">
                      <div className="text-4xl mb-3 text-center">{highlight.emoji}</div>
                      <h4 className="font-semibold mb-2 text-center group-hover:text-primary">
                        {highlight.title}
                      </h4>
                      <p className="text-muted-foreground text-sm text-center leading-relaxed group-hover:text-foreground/90">
                        {highlight.desc}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Beyond the Classroom Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-muted/50 to-primary/5 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-0 w-56 h-56 bg-primary/5 rounded-full blur-xl -translate-x-1/2 animate-float" />
          <div className="absolute bottom-1/2 right-0 w-40 h-40 bg-destructive/5 rounded-full blur-xl translate-x-1/2 animate-pulse delay-500" />
          <div className="absolute top-20 left-20 w-6 h-6">
            <Sparkles className="h-6 w-6 text-primary/10 animate-bounce" />
          </div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto animate-in fade-in-0 slide-in-from-top-4 duration-1000">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center bg-gradient-to-r from-primary to-destructive bg-clip-text text-transparent">
              Beyond the Classroom
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12 text-center leading-relaxed">
              We believe in holistic education that extends beyond textbooks. Our comprehensive co-curricular programs ensure students develop well-rounded personalities.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { emoji: '⚽', title: 'Sports & Athletics', color: 'from-primary/10 to-destructive/10' },
                { emoji: '🎨', title: 'Arts & Crafts', color: 'from-destructive/10 to-primary/10' },
                { emoji: '🎭', title: 'Drama & Theater', color: 'from-primary/10 to-destructive/10' },
                { emoji: '🎵', title: 'Music & Dance', color: 'from-destructive/10 to-primary/10' },
                { emoji: '🤖', title: 'Robotics Club', color: 'from-primary/10 to-destructive/10' },
                { emoji: '📰', title: 'School Magazine', color: 'from-destructive/10 to-primary/10' },
                { emoji: '🗣️', title: 'Debate Society', color: 'from-primary/10 to-destructive/10' },
                { emoji: '🌍', title: 'Environmental Club', color: 'from-destructive/10 to-primary/10' },
              ].map((activity, index) => (
                <Card key={index} className={cn('group border-border/50 rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-700 animate-in fade-in-0 slide-in-from-bottom-6', `delay-${index * 150}`)}>
                  <CardContent className="p-0">
                    <div className="text-4xl mb-3 text-center">{activity.emoji}</div>
                    <h4 className="font-semibold mb-2 text-center group-hover:text-primary">
                      {activity.title}
                    </h4>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}