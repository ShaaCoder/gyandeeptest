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
            alt="B.K.Gyan Deep Public School Campus"
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
                B.K.Gyan Deep Public School
              </span>
            </h1>
            <p className="text-xl text-background/90 leading-relaxed max-w-2xl mx-auto">
              Joyful learning adventures for Nursery to Class 8, sparking curiosity and building strong foundations through play and discovery.
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
          <Tabs defaultValue="early" className="max-w-7xl mx-auto animate-in fade-in-0 slide-in-from-top-4 duration-1000">
            <TabsList className="grid w-full grid-cols-3 mb-12 rounded-3xl bg-card border-border/50 p-1 shadow-lg">
              <TabsTrigger value="early" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md rounded-2xl transition-all duration-300 py-3">
                Early Years (Nursery-KG)
              </TabsTrigger>
              <TabsTrigger value="primary" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md rounded-2xl transition-all duration-300 py-3">
                Primary (1-5)
              </TabsTrigger>
              <TabsTrigger value="middle" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md rounded-2xl transition-all duration-300 py-3">
                Middle (6-8)
              </TabsTrigger>
            </TabsList>

            {/* Early Years Tab */}
            <TabsContent value="early" className="space-y-8 animate-in fade-in-0 slide-in-from-bottom-2 duration-700">
              <div className="text-center mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-primary/10 to-destructive/10 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <BookOpen className="h-12 w-12 text-primary" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Early Years (Nursery to KG)</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                  Magical beginnings with play-based fun, building confidence and love for learning through stories, games, and hands-on discovery.
                </p>
              </div>

              <Card className="group bg-card border-border/50 rounded-3xl hover:shadow-2xl transition-all duration-700">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-6 group-hover:text-primary">Curriculum Overview</h3>
                  <p className="text-muted-foreground mb-8 leading-relaxed text-lg group-hover:text-foreground/90">
                    Our early years program sparks joy in learning with colorful activities, songs, and group play. Little ones explore the world at their own pace, making friends and discovering wonders every day.
                  </p>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                        <BookOpen className="h-5 w-5 text-primary" />
                        Core Explorations
                      </h4>
                      <ul className="space-y-3">
                        <li className="flex items-center gap-3 p-3 bg-muted/50 rounded-xl group-hover:bg-primary/5 transition-colors">
                          <div className="w-2 h-2 bg-primary rounded-full" />
                          Fun with Colors & Shapes
                        </li>
                        <li className="flex items-center gap-3 p-3 bg-muted/50 rounded-xl group-hover:bg-primary/5 transition-colors">
                          <div className="w-2 h-2 bg-primary rounded-full" />
                          Counting Games
                        </li>
                        <li className="flex items-center gap-3 p-3 bg-muted/50 rounded-xl group-hover:bg-primary/5 transition-colors">
                          <div className="w-2 h-2 bg-primary rounded-full" />
                          Nature Sensory Play
                        </li>
                        <li className="flex items-center gap-3 p-3 bg-muted/50 rounded-xl group-hover:bg-primary/5 transition-colors">
                          <div className="w-2 h-2 bg-primary rounded-full" />
                          Simple Stories
                        </li>
                      </ul>
                    </div>

                    <div className="space-y-4">
                      <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                        <Palette className="h-5 w-5 text-destructive" />
                        Joyful Activities
                      </h4>
                      <ul className="space-y-3">
                        <li className="flex items-center gap-3 p-3 bg-muted/50 rounded-xl group-hover:bg-destructive/5 transition-colors">
                          <div className="w-2 h-2 bg-destructive rounded-full" />
                          Finger Painting
                        </li>
                        <li className="flex items-center gap-3 p-3 bg-muted/50 rounded-xl group-hover:bg-destructive/5 transition-colors">
                          <div className="w-2 h-2 bg-destructive rounded-full" />
                          Rhythm & Rhymes
                        </li>
                        <li className="flex items-center gap-3 p-3 bg-muted/50 rounded-xl group-hover:bg-destructive/5 transition-colors">
                          <div className="w-2 h-2 bg-destructive rounded-full" />
                          Sand & Water Play
                        </li>
                        <li className="flex items-center gap-3 p-3 bg-muted/50 rounded-xl group-hover:bg-destructive/5 transition-colors">
                          <div className="w-2 h-2 bg-destructive rounded-full" />
                          Circle Time Fun
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Highlight Cards */}
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { emoji: '🧸', title: 'Toy Discoveries', desc: 'Exploring textures and sounds through safe play.', color: 'from-primary/10 to-destructive/10' },
                  { emoji: '🎵', title: 'Baby Rhymes', desc: 'Singing and clapping to build language joy.', color: 'from-destructive/10 to-primary/10' },
                  { emoji: '🌈', title: 'Sensory Rainbow', desc: 'Bright colors and gentle touches for wonder.', color: 'from-primary/10 to-destructive/10' },
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

            {/* Primary School Tab */}
            <TabsContent value="primary" className="space-y-8 animate-in fade-in-0 slide-in-from-bottom-2 duration-700">
              <div className="text-center mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-primary/10 to-destructive/10 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <BookOpen className="h-12 w-12 text-primary" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Primary School (Grades 1-5)</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                  Magical beginnings with play-based fun, building confidence and love for learning through stories, games, and hands-on discovery.
                </p>
              </div>

              <Card className="group bg-card border-border/50 rounded-3xl hover:shadow-2xl transition-all duration-700">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-6 group-hover:text-primary">Curriculum Overview</h3>
                  <p className="text-muted-foreground mb-8 leading-relaxed text-lg group-hover:text-foreground/90">
                    Our primary program sparks joy in learning with colorful activities, songs, and group play. Little ones explore the world at their own pace, making friends and discovering wonders every day.
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
                          Fun with English & Stories
                        </li>
                        <li className="flex items-center gap-3 p-3 bg-muted/50 rounded-xl group-hover:bg-primary/5 transition-colors">
                          <div className="w-2 h-2 bg-primary rounded-full" />
                          Number Games & Math
                        </li>
                        <li className="flex items-center gap-3 p-3 bg-muted/50 rounded-xl group-hover:bg-primary/5 transition-colors">
                          <div className="w-2 h-2 bg-primary rounded-full" />
                          Nature Explorations
                        </li>
                        <li className="flex items-center gap-3 p-3 bg-muted/50 rounded-xl group-hover:bg-primary/5 transition-colors">
                          <div className="w-2 h-2 bg-primary rounded-full" />
                          Our World & Friends
                        </li>
                      </ul>
                    </div>

                    <div className="space-y-4">
                      <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                        <Palette className="h-5 w-5 text-destructive" />
                        Playful Activities
                      </h4>
                      <ul className="space-y-3">
                        <li className="flex items-center gap-3 p-3 bg-muted/50 rounded-xl group-hover:bg-destructive/5 transition-colors">
                          <div className="w-2 h-2 bg-destructive rounded-full" />
                          Drawing & Crafts
                        </li>
                        <li className="flex items-center gap-3 p-3 bg-muted/50 rounded-xl group-hover:bg-destructive/5 transition-colors">
                          <div className="w-2 h-2 bg-destructive rounded-full" />
                          Songs & Movement
                        </li>
                        <li className="flex items-center gap-3 p-3 bg-muted/50 rounded-xl group-hover:bg-destructive/5 transition-colors">
                          <div className="w-2 h-2 bg-destructive rounded-full" />
                          Outdoor Playtime
                        </li>
                        <li className="flex items-center gap-3 p-3 bg-muted/50 rounded-xl group-hover:bg-destructive/5 transition-colors">
                          <div className="w-2 h-2 bg-destructive rounded-full" />
                          Story Circles
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Highlight Cards */}
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { emoji: '📚', title: 'Storytime Magic', desc: 'Daily reading adventures to ignite imagination and love for books.', color: 'from-primary/10 to-destructive/10' },
                  { emoji: '🧩', title: 'Puzzle Play', desc: 'Fun games that build thinking skills and teamwork.', color: 'from-destructive/10 to-primary/10' },
                  { emoji: '🌈', title: 'Colorful Days', desc: 'Bright classrooms full of laughter and discovery.', color: 'from-primary/10 to-destructive/10' },
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
                  Growing stronger with exciting challenges, friendships, and real-world explorations that build confidence and skills.
                </p>
              </div>

              <Card className="group bg-card border-border/50 rounded-3xl hover:shadow-2xl transition-all duration-700">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-6 group-hover:text-primary">Curriculum Overview</h3>
                  <p className="text-muted-foreground mb-8 leading-relaxed text-lg group-hover:text-foreground/90">
                    Middle school is an adventure of discovery! Students dive deeper into subjects with fun projects, group challenges, and exciting field trips that connect learning to the big world around them.
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
                          English Adventures
                        </li>
                        <li className="flex items-center gap-3 p-3 bg-muted/50 rounded-xl group-hover:bg-primary/5 transition-colors">
                          <div className="w-2 h-2 bg-primary rounded-full" />
                          Math Mysteries
                        </li>
                        <li className="flex items-center gap-3 p-3 bg-muted/50 rounded-xl group-hover:bg-primary/5 transition-colors">
                          <div className="w-2 h-2 bg-primary rounded-full" />
                          Science Quests
                        </li>
                        <li className="flex items-center gap-3 p-3 bg-muted/50 rounded-xl group-hover:bg-primary/5 transition-colors">
                          <div className="w-2 h-2 bg-primary rounded-full" />
                          World Explorers
                        </li>
                        <li className="flex items-center gap-3 p-3 bg-muted/50 rounded-xl group-hover:bg-primary/5 transition-colors">
                          <div className="w-2 h-2 bg-primary rounded-full" />
                          Fun with Hindi
                        </li>
                      </ul>
                    </div>

                    <div className="space-y-4">
                      <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                        <Palette className="h-5 w-5 text-destructive" />
                        Fun Electives
                      </h4>
                      <ul className="space-y-3">
                        <li className="flex items-center gap-3 p-3 bg-muted/50 rounded-xl group-hover:bg-destructive/5 transition-colors">
                          <div className="w-2 h-2 bg-destructive rounded-full" />
                          Art Workshop
                        </li>
                        <li className="flex items-center gap-3 p-3 bg-muted/50 rounded-xl group-hover:bg-destructive/5 transition-colors">
                          <div className="w-2 h-2 bg-destructive rounded-full" />
                          Music Jam
                        </li>
                        <li className="flex items-center gap-3 p-3 bg-muted/50 rounded-xl group-hover:bg-destructive/5 transition-colors">
                          <div className="w-2 h-2 bg-destructive rounded-full" />
                          Sports Stars
                        </li>
                        <li className="flex items-center gap-3 p-3 bg-muted/50 rounded-xl group-hover:bg-destructive/5 transition-colors">
                          <div className="w-2 h-2 bg-destructive rounded-full" />
                          Debate Fun
                        </li>
                        <li className="flex items-center gap-3 p-3 bg-muted/50 rounded-xl group-hover:bg-destructive/5 transition-colors">
                          <div className="w-2 h-2 bg-destructive rounded-full" />
                          Coding Club
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Highlight Cards */}
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { emoji: '🔬', title: 'Science Fun', desc: 'Cool experiments and nature hunts to spark wonder.', color: 'from-primary/10 to-destructive/10' },
                  { emoji: '💻', title: 'Tech Explorers', desc: 'Simple coding and digital games for future creators.', color: 'from-destructive/10 to-primary/10' },
                  { emoji: '🌍', title: 'World Friends', desc: 'Stories and maps to discover cultures and places.', color: 'from-primary/10 to-destructive/10' },
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
              Beyond the Classroom (Nursery to Class 8)
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12 text-center leading-relaxed">
              Every day brings new adventures! From playground laughs to creative crafts, we celebrate growth through play and friendship.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { emoji: '⚽', title: 'Playground Games', color: 'from-primary/10 to-destructive/10' },
                { emoji: '🎨', title: 'Art Corner', color: 'from-destructive/10 to-primary/10' },
                { emoji: '🎭', title: 'Puppet Play', color: 'from-primary/10 to-destructive/10' },
                { emoji: '🎵', title: 'Song Circle', color: 'from-destructive/10 to-primary/10' },
                { emoji: '🧑‍🔬', title: 'Bubble Lab', color: 'from-primary/10 to-destructive/10' },
                { emoji: '🌳', title: 'Nature Hunt', color: 'from-destructive/10 to-primary/10' },
                { emoji: '🗣️', title: 'Story Share', color: 'from-primary/10 to-destructive/10' },
                { emoji: '🤝', title: 'Friendship Club', color: 'from-destructive/10 to-primary/10' },
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