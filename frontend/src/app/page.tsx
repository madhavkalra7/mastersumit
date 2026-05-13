import React from 'react';
import HeroPopup from '@/components/sections/HeroPopup';
import BottomNav from '@/components/sections/BottomNav';
import AnnouncementBar from '@/components/sections/AnnouncementBar';
import Header from '@/components/sections/Header';
import MobileMenu from '@/components/sections/MobileMenu';
import AiBreatherSection from '@/components/sections/AiBreatherSection';
import AiEducationHero from '@/components/sections/AiEducationHero';
import AiStatsSection from '@/components/sections/AiStatsSection';
import Robo from '@/components/sections/Robo';
import SummitAgenda from '@/components/sections/SummitAgenda';
import SummitAppearances from '@/components/sections/SummitAppearances';
import TechSpeaker from '@/components/sections/TechSpeaker';
import AiAwardsShowcase from '@/components/sections/AiAwardsShowcase';
import AiSpeakers from '@/components/sections/AiSpeakers';
import AiWhoShouldAttend from '@/components/sections/AiWhoShouldAttend';
import AiWhyMustNotMiss from '@/components/sections/AiWhyMustNotMiss';
import SummitPartners from '@/components/sections/SummitPartners';
import TicketSection from '@/components/sections/TicketSection';
import TechOurProgramme from '@/components/sections/TechOurProgramme';
import VenueSection from '@/components/sections/VenueSection';
import BookStaySection from '@/components/sections/BookStaySection';
import AiSubmit from '@/components/sections/AiSubmit';
import PageEffects from '@/components/sections/PageEffects';

export default function Page() {
  return (
    <div className="ai-summit-page theNextTech">
        <PageEffects />
        <HeroPopup />
        <BottomNav />
        <AnnouncementBar />
        <Header />
        <MobileMenu />
        <AiBreatherSection />
        <AiEducationHero />
        <AiStatsSection />
        <Robo />
        <AiBreatherSection />
        <SummitAgenda />
        <AiWhyMustNotMiss />
        <SummitAppearances />
        <TechSpeaker />
        <AiAwardsShowcase />
        <AiWhoShouldAttend />
        <AiSpeakers />
        <SummitPartners />
        <TicketSection />
        <TechOurProgramme />
        <VenueSection />
        <BookStaySection />
        <AiSubmit />
    </div>
  );
}
