// app/page.tsx (or pages/index.tsx) - Main Home component
import Link from 'next/link';

import { HeroSection } from '@/components/sections/HeroSection';
import { WhyChooseUsSection } from '@/components/sections/WhyChooseUsSection';
import { AcademicProgramsSection } from '@/components/sections/AcademicProgramsSection';
import { SchoolLifeSection } from '@/components/sections/SchoolLifeSection';
import { CTASection } from '@/components/sections/CTASection';
import VideoReelsSection from '@/components/sections/VideoReels';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <WhyChooseUsSection />
      <AcademicProgramsSection />
      <SchoolLifeSection />
      <VideoReelsSection />
      <CTASection />
    </div>
  );
}