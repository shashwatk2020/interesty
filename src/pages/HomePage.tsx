import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import HeroSection from '../components/HeroSection';
import CompetitionsSection from '../components/CompetitionsSection';
import TeamsSection from '../components/TeamsSection';
import NationalTeamsSection from '../components/NationalTeamsSection';
import FixturesSection from '../components/FixturesSection';
import VenuesSection from '../components/VenuesSection';

const HomePage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      {/* Verification: This is a hidden text segment for internal use. */}
      <HeroSection />
      <CompetitionsSection />
      <TeamsSection />
      <NationalTeamsSection />
      <FixturesSection />
      <VenuesSection />
    </div>
  );
};

export default HomePage;