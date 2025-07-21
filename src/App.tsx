
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AdminPanel from './pages/AdminPanel';
import LoginPage from './pages/LoginPage';
import SearchPage from './pages/SearchPage';
import CompetitionPage from './pages/CompetitionPage';
import TeamPage from './pages/TeamPage';
import VenuePage from './pages/VenuePage';
import AboutPage from './pages/AboutPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import ContactPage from './pages/ContactPage';
import HelpPage from './pages/HelpPage';
import WorldCupTicketsPage from './pages/WorldCupTicketsPage';
import PremierLeagueTicketsPage from './pages/PremierLeagueTicketsPage';
import ManchesterCityTicketsPage from './pages/ManchesterCityTicketsPage';
import EtihadStadiumTicketsPage from './pages/EtihadStadiumTicketsPage';
import ArgentinaBrazilTicketsPage from './pages/ArgentinaBrazilTicketsPage';
import ChampionsLeagueTicketsPage from './pages/ChampionsLeagueTicketsPage';
import EuropaLeagueTicketsPage from './pages/EuropaLeagueTicketsPage';
import LaLigaTicketsPage from './pages/LaLigaTicketsPage';
import Euro2028TicketsPage from './pages/Euro2028TicketsPage';
import MLSTicketsPage from './pages/MLSTicketsPage';
import SaudiProLeagueTicketsPage from './pages/SaudiProLeagueTicketsPage';
import WorldCupFinalTicketsPage from './pages/WorldCupFinalTicketsPage';
import WorldCupSemiFinalTicketsPage from './pages/WorldCupSemiFinalTicketsPage';
import WorldCupQuarterFinalTicketsPage from './pages/WorldCupQuarterFinalTicketsPage';
import WorldCupRoundOf16TicketsPage from './pages/WorldCupRoundOf16TicketsPage';
import WorldCupGroupStageTicketsPage from './pages/WorldCupGroupStageTicketsPage';
import ChampionsLeagueFinalTicketsPage from './pages/ChampionsLeagueFinalTicketsPage';
import EuropaLeagueFinalTicketsPage from './pages/EuropaLeagueFinalTicketsPage';
import FACupFinalTicketsPage from './pages/FACupFinalTicketsPage';
import CopaDelReyFinalTicketsPage from './pages/CopaDelReyFinalTicketsPage';
import ArgentinaTicketsPage from './pages/ArgentinaTicketsPage';
import FranceTicketsPage from './pages/FranceTicketsPage';
import BrazilTicketsPage from './pages/BrazilTicketsPage';
import EnglandTicketsPage from './pages/EnglandTicketsPage';
import SpainTicketsPage from './pages/SpainTicketsPage';
import GermanyTicketsPage from './pages/GermanyTicketsPage';
import PortugalTicketsPage from './pages/PortugalTicketsPage';
import NetherlandsTicketsPage from './pages/NetherlandsTicketsPage';
import ItalyTicketsPage from './pages/ItalyTicketsPage';
import CroatiaTicketsPage from './pages/CroatiaTicketsPage';
import MoroccoTicketsPage from './pages/MoroccoTicketsPage';
import JapanTicketsPage from './pages/JapanTicketsPage';
import MexicoTicketsPage from './pages/MexicoTicketsPage';
import USATicketsPage from './pages/USATicketsPage';
import CanadaTicketsPage from './pages/CanadaTicketsPage';
import BelgiumTicketsPage from './pages/BelgiumTicketsPage';
import ManchesterUnitedTicketsPage from './pages/ManchesterUnitedTicketsPage';
import LiverpoolTicketsPage from './pages/LiverpoolTicketsPage';
import ChelseaTicketsPage from './pages/ChelseaTicketsPage';
import ArsenalTicketsPage from './pages/ArsenalTicketsPage';
import TottenhamTicketsPage from './pages/TottenhamTicketsPage';
import NewcastleUnitedTicketsPage from './pages/NewcastleUnitedTicketsPage';
import WestHamTicketsPage from './pages/WestHamTicketsPage';
import AstonVillaTicketsPage from './pages/AstonVillaTicketsPage';
import BrightonTicketsPage from './pages/BrightonTicketsPage';
import CrystalPalaceTicketsPage from './pages/CrystalPalaceTicketsPage';
import EvertonTicketsPage from './pages/EvertonTicketsPage';
import FulhamTicketsPage from './pages/FulhamTicketsPage';
import BrentfordTicketsPage from './pages/BrentfordTicketsPage';
import RealMadridTicketsPage from './pages/RealMadridTicketsPage';
import BarcelonaTicketsPage from './pages/BarcelonaTicketsPage';
import BayernMunichTicketsPage from './pages/BayernMunichTicketsPage';
import PSGTicketsPage from './pages/PSGTicketsPage';
import ACMilanTicketsPage from './pages/ACMilanTicketsPage';
import InterMilanTicketsPage from './pages/InterMilanTicketsPage';
import JuventusTicketsPage from './pages/JuventusTicketsPage';
import AtleticoMadridTicketsPage from './pages/AtleticoMadridTicketsPage';
import BorussiaDortmundTicketsPage from './pages/BorussiaDortmundTicketsPage';
import NapoliTicketsPage from './pages/NapoliTicketsPage';
import PortoTicketsPage from './pages/PortoTicketsPage';
import BenficaTicketsPage from './pages/BenficaTicketsPage';
import ASRomaTicketsPage from './pages/ASRomaTicketsPage';
import SevillaTicketsPage from './pages/SevillaTicketsPage';
import EintrachtFrankfurtTicketsPage from './pages/EintrachtFrankfurtTicketsPage';
import OlympiakosTicketsPage from './pages/OlympiakosTicketsPage';
import AjaxTicketsPage from './pages/AjaxTicketsPage';
import FeyenoordTicketsPage from './pages/FeyenoordTicketsPage';
import RangersTicketsPage from './pages/RangersTicketsPage';
import RealSociedadTicketsPage from './pages/RealSociedadTicketsPage';
import AtalantaTicketsPage from './pages/AtalantaTicketsPage';
import VillarrealTicketsPage from './pages/VillarrealTicketsPage';
import BayerLeverkusenTicketsPage from './pages/BayerLeverkusenTicketsPage';
import UnionBerlinTicketsPage from './pages/UnionBerlinTicketsPage';
import SportingCPTicketsPage from './pages/SportingCPTicketsPage';
import MarseilleTicketsPage from './pages/MarseilleTicketsPage';
import ValenciaTicketsPage from './pages/ValenciaTicketsPage';
import RealBetisTicketsPage from './pages/RealBetisTicketsPage';
import OsasunaTicketsPage from './pages/OsasunaTicketsPage';
import GironaTicketsPage from './pages/GironaTicketsPage';
import LasPalmasTicketsPage from './pages/LasPalmasTicketsPage';
import CeltaVigoTicketsPage from './pages/CeltaVigoTicketsPage';
import RayoVallecanoTicketsPage from './pages/RayoVallecanoTicketsPage';
import GetafeTicketsPage from './pages/GetafeTicketsPage';
import AlavesTicketsPage from './pages/AlavesTicketsPage';
import BundesligaTicketsPage from './pages/BundesligaTicketsPage';
import SerieATicketsPage from './pages/SerieATicketsPage';
import Ligue1TicketsPage from './pages/Ligue1TicketsPage';
import NationsLeagueTicketsPage from './pages/NationsLeagueTicketsPage';
import CopaAmericaTicketsPage from './pages/CopaAmericaTicketsPage';
import FACupTicketsPage from './pages/FACupTicketsPage';
import CopaDelReyTicketsPage from './pages/CopaDelReyTicketsPage';
import DFBPokalTicketsPage from './pages/DFBPokalTicketsPage';
import CoppaItaliaTicketsPage from './pages/CoppaItaliaTicketsPage';
import CoupeDeFranceTicketsPage from './pages/CoupeDeFranceTicketsPage';
import WorldCupQualifiersTicketsPage from './pages/WorldCupQualifiersTicketsPage';
import EuroQualifiersTicketsPage from './pages/EuroQualifiersTicketsPage';
import InternationalFriendliesTicketsPage from './pages/InternationalFriendliesTicketsPage';
import ConferenceLeagueTicketsPage from './pages/ConferenceLeagueTicketsPage';
import SuperCupTicketsPage from './pages/SuperCupTicketsPage';
import ClubWorldCupTicketsPage from './pages/ClubWorldCupTicketsPage';
import WomensChampionsLeagueTicketsPage from './pages/WomensChampionsLeagueTicketsPage';
import ArgentinaVsBrazilTicketsPage from './pages/ArgentinaVsBrazilTicketsPage';
import FranceVsEnglandTicketsPage from './pages/FranceVsEnglandTicketsPage';
import SpainVsGermanyTicketsPage from './pages/SpainVsGermanyTicketsPage';
import WorldCupOpeningCeremonyTicketsPage from './pages/WorldCupOpeningCeremonyTicketsPage';
import WorldCupClosingCeremonyTicketsPage from './pages/WorldCupClosingCeremonyTicketsPage';
import WorldCupPackageDealTicketsPage from './pages/WorldCupPackageDealTicketsPage';
import WorldCupVIPExperienceTicketsPage from './pages/WorldCupVIPExperienceTicketsPage';
import WorldCupHospitalityTicketsPage from './pages/WorldCupHospitalityTicketsPage';
import WorldCupPremiumTicketsPage from './pages/WorldCupPremiumTicketsPage';
import ManchesterUnitedVsLiverpoolTicketsPage from './pages/ManchesterUnitedVsLiverpoolTicketsPage';
import ArsenalVsChelseaTicketsPage from './pages/ArsenalVsChelseaTicketsPage';
import ManchesterCityVsLiverpoolTicketsPage from './pages/ManchesterCityVsLiverpoolTicketsPage';
import ArsenalVsTottenhamTicketsPage from './pages/ArsenalVsTottenhamTicketsPage';
import ManchesterUnitedVsManchesterCityTicketsPage from './pages/ManchesterUnitedVsManchesterCityTicketsPage';
import ChelseaVsArsenalTicketsPage from './pages/ChelseaVsArsenalTicketsPage';
import LiverpoolVsChelseaTicketsPage from './pages/LiverpoolVsChelseaTicketsPage';
import TottenhamVsChelseaTicketsPage from './pages/TottenhamVsChelseaTicketsPage';
import PremierLeagueSeasonOpenerTicketsPage from './pages/PremierLeagueSeasonOpenerTicketsPage';
import PremierLeagueFinalDayTicketsPage from './pages/PremierLeagueFinalDayTicketsPage';
import PremierLeagueChristmasFixtureTicketsPage from './pages/PremierLeagueChristmasFixtureTicketsPage';
import PremierLeagueBoxingDayTicketsPage from './pages/PremierLeagueBoxingDayTicketsPage';
import PremierLeagueNewYearFixtureTicketsPage from './pages/PremierLeagueNewYearFixtureTicketsPage';
import ChampionsLeagueRoundOf16TicketsPage from './pages/ChampionsLeagueRoundOf16TicketsPage';
import ChampionsLeagueQuarterFinalTicketsPage from './pages/ChampionsLeagueQuarterFinalTicketsPage';
import ChampionsLeagueSemiFinalTicketsPage from './pages/ChampionsLeagueSemiFinalTicketsPage';
import ChampionsLeagueGroupStageTicketsPage from './pages/ChampionsLeagueGroupStageTicketsPage';
import RealMadridVsBarcelonaTicketsPage from './pages/RealMadridVsBarcelonaTicketsPage';
import BayernMunichVsPSGTicketsPage from './pages/BayernMunichVsPSGTicketsPage';
import ManchesterCityVsRealMadridTicketsPage from './pages/ManchesterCityVsRealMadridTicketsPage';
import ChampionsLeagueFinalVIPTicketsPage from './pages/ChampionsLeagueFinalVIPTicketsPage';
import ChampionsLeagueFinalHospitalityTicketsPage from './pages/ChampionsLeagueFinalHospitalityTicketsPage';
import ChampionsLeagueFinalPremiumTicketsPage from './pages/ChampionsLeagueFinalPremiumTicketsPage';
import ChampionsLeagueFinalCorporateTicketsPage from './pages/ChampionsLeagueFinalCorporateTicketsPage';
import EuropaLeagueGroupStageTicketsPage from './pages/EuropaLeagueGroupStageTicketsPage';
import EuropaLeagueRoundOf16TicketsPage from './pages/EuropaLeagueRoundOf16TicketsPage';
import EuropaLeagueQuarterFinalTicketsPage from './pages/EuropaLeagueQuarterFinalTicketsPage';
import EuropaLeagueSemiFinalTicketsPage from './pages/EuropaLeagueSemiFinalTicketsPage';
import ASRomaVsSevillaTicketsPage from './pages/ASRomaVsSevillaTicketsPage';
import WestHamVsAjaxTicketsPage from './pages/WestHamVsAjaxTicketsPage';
import EintrachtFrankfurtVsRangersTicketsPage from './pages/EintrachtFrankfurtVsRangersTicketsPage';
import EuropaLeagueFinalVIPTicketsPage from './pages/EuropaLeagueFinalVIPTicketsPage';
import EuropaLeagueFinalHospitalityTicketsPage from './pages/EuropaLeagueFinalHospitalityTicketsPage';
import EuropaLeagueFinalPremiumTicketsPage from './pages/EuropaLeagueFinalPremiumTicketsPage';
import RealMadridVsAtleticoMadridTicketsPage from './pages/RealMadridVsAtleticoMadridTicketsPage';
import BarcelonaVsAtleticoMadridTicketsPage from './pages/BarcelonaVsAtleticoMadridTicketsPage';
import SevillaVsRealBetisTicketsPage from './pages/SevillaVsRealBetisTicketsPage';
import AthleticBilbaoVsRealSociedadTicketsPage from './pages/AthleticBilbaoVsRealSociedadTicketsPage';
import ValenciaVsVillarrealTicketsPage from './pages/ValenciaVsVillarrealTicketsPage';
import LaLigaSeasonOpenerTicketsPage from './pages/LaLigaSeasonOpenerTicketsPage';
import LaLigaFinalDayTicketsPage from './pages/LaLigaFinalDayTicketsPage';
import LaLigaChristmasFixtureTicketsPage from './pages/LaLigaChristmasFixtureTicketsPage';
import LaLigaNewYearFixtureTicketsPage from './pages/LaLigaNewYearFixtureTicketsPage';
import CampNouTicketsPage from './pages/CampNouTicketsPage';
import SantiagoBernabeuTicketsPage from './pages/SantiagoBernabeuTicketsPage';
import OldTraffordTicketsPage from './pages/OldTraffordTicketsPage';
import AnfieldTicketsPage from './pages/AnfieldTicketsPage';
import WembleyStadiumTicketsPage from './pages/WembleyStadiumTicketsPage';
import AllianzArenaTicketsPage from './pages/AllianzArenaTicketsPage';
import SanSiroTicketsPage from './pages/SanSiroTicketsPage';
import MetLifeStadiumTicketsPage from './pages/MetLifeStadiumTicketsPage';


// Protected Route Component
const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600"></div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/admin/login" replace />;
  }

  return <>{children}</>;
};

// Public Route Component (redirects to admin if already logged in)
const PublicRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600"></div>
      </div>
    );
  }

  if (user) {
    return <Navigate to="/admin" replace />;
  }

  return <>{children}</>;
};

const AppContent: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/help" element={<HelpPage />} />
          
          {/* Ticket Pages */}
          <Route path="/world-cup-tickets" element={<WorldCupTicketsPage />} />
          <Route path="/world-cup-2026-tickets" element={<WorldCupTicketsPage />} />
          <Route path="/premier-league-tickets" element={<PremierLeagueTicketsPage />} />
          <Route path="/manchester-city-tickets" element={<ManchesterCityTicketsPage />} />
          <Route path="/etihad-stadium-tickets" element={<EtihadStadiumTicketsPage />} />
          <Route path="/argentina-vs-brazil-tickets" element={<ArgentinaBrazilTicketsPage />} />
          <Route path="/champions-league-tickets" element={<ChampionsLeagueTicketsPage />} />
          <Route path="/europa-league-tickets" element={<EuropaLeagueTicketsPage />} />
          <Route path="/la-liga-tickets" element={<LaLigaTicketsPage />} />
          <Route path="/euro-2028-tickets" element={<Euro2028TicketsPage />} />
          <Route path="/mls-tickets" element={<MLSTicketsPage />} />
          <Route path="/saudi-pro-league-tickets" element={<SaudiProLeagueTicketsPage />} />
          <Route path="/world-cup-final-tickets" element={<WorldCupFinalTicketsPage />} />
          <Route path="/world-cup-semi-final-tickets" element={<WorldCupSemiFinalTicketsPage />} />
          <Route path="/world-cup-quarter-final-tickets" element={<WorldCupQuarterFinalTicketsPage />} />
          <Route path="/world-cup-round-of-16-tickets" element={<WorldCupRoundOf16TicketsPage />} />
          <Route path="/world-cup-group-stage-tickets" element={<WorldCupGroupStageTicketsPage />} />
          <Route path="/champions-league-final-tickets" element={<ChampionsLeagueFinalTicketsPage />} />
          <Route path="/europa-league-final-tickets" element={<EuropaLeagueFinalTicketsPage />} />
          <Route path="/fa-cup-final-tickets" element={<FACupFinalTicketsPage />} />
          <Route path="/copa-del-rey-final-tickets" element={<CopaDelReyFinalTicketsPage />} />
          <Route path="/argentina-tickets" element={<ArgentinaTicketsPage />} />
          <Route path="/france-tickets" element={<FranceTicketsPage />} />
          <Route path="/brazil-tickets" element={<BrazilTicketsPage />} />
          <Route path="/england-tickets" element={<EnglandTicketsPage />} />
          <Route path="/spain-tickets" element={<SpainTicketsPage />} />
          <Route path="/germany-tickets" element={<GermanyTicketsPage />} />
          <Route path="/portugal-tickets" element={<PortugalTicketsPage />} />
          <Route path="/netherlands-tickets" element={<NetherlandsTicketsPage />} />
          <Route path="/italy-tickets" element={<ItalyTicketsPage />} />
          <Route path="/croatia-tickets" element={<CroatiaTicketsPage />} />
          <Route path="/morocco-tickets" element={<MoroccoTicketsPage />} />
          <Route path="/japan-tickets" element={<JapanTicketsPage />} />
          <Route path="/mexico-tickets" element={<MexicoTicketsPage />} />
          <Route path="/usa-tickets" element={<USATicketsPage />} />
          <Route path="/canada-tickets" element={<CanadaTicketsPage />} />
          <Route path="/belgium-tickets" element={<BelgiumTicketsPage />} />
          <Route path="/manchester-united-tickets" element={<ManchesterUnitedTicketsPage />} />
          <Route path="/liverpool-tickets" element={<LiverpoolTicketsPage />} />
          <Route path="/chelsea-tickets" element={<ChelseaTicketsPage />} />
          <Route path="/arsenal-tickets" element={<ArsenalTicketsPage />} />
          <Route path="/tottenham-tickets" element={<TottenhamTicketsPage />} />
          <Route path="/newcastle-united-tickets" element={<NewcastleUnitedTicketsPage />} />
          <Route path="/west-ham-tickets" element={<WestHamTicketsPage />} />
          <Route path="/aston-villa-tickets" element={<AstonVillaTicketsPage />} />
          <Route path="/brighton-tickets" element={<BrightonTicketsPage />} />
          <Route path="/crystal-palace-tickets" element={<CrystalPalaceTicketsPage />} />
          <Route path="/everton-tickets" element={<EvertonTicketsPage />} />
          <Route path="/fulham-tickets" element={<FulhamTicketsPage />} />
          <Route path="/brentford-tickets" element={<BrentfordTicketsPage />} />
          <Route path="/real-madrid-tickets" element={<RealMadridTicketsPage />} />
          <Route path="/barcelona-tickets" element={<BarcelonaTicketsPage />} />
          <Route path="/bayern-munich-tickets" element={<BayernMunichTicketsPage />} />
          <Route path="/psg-tickets" element={<PSGTicketsPage />} />
          <Route path="/ac-milan-tickets" element={<ACMilanTicketsPage />} />
          <Route path="/inter-milan-tickets" element={<InterMilanTicketsPage />} />
          <Route path="/juventus-tickets" element={<JuventusTicketsPage />} />
          <Route path="/atletico-madrid-tickets" element={<AtleticoMadridTicketsPage />} />
          <Route path="/borussia-dortmund-tickets" element={<BorussiaDortmundTicketsPage />} />
          <Route path="/napoli-tickets" element={<NapoliTicketsPage />} />
          <Route path="/porto-tickets" element={<PortoTicketsPage />} />
          <Route path="/benfica-tickets" element={<BenficaTicketsPage />} />
          <Route path="/as-roma-tickets" element={<ASRomaTicketsPage />} />
          <Route path="/sevilla-tickets" element={<SevillaTicketsPage />} />
          <Route path="/eintracht-frankfurt-tickets" element={<EintrachtFrankfurtTicketsPage />} />
          <Route path="/olympiakos-tickets" element={<OlympiakosTicketsPage />} />
          <Route path="/ajax-tickets" element={<AjaxTicketsPage />} />
          <Route path="/feyenoord-tickets" element={<FeyenoordTicketsPage />} />
          <Route path="/rangers-tickets" element={<RangersTicketsPage />} />
          <Route path="/real-sociedad-tickets" element={<RealSociedadTicketsPage />} />
          <Route path="/atalanta-tickets" element={<AtalantaTicketsPage />} />
          <Route path="/villarreal-tickets" element={<VillarrealTicketsPage />} />
          <Route path="/bayer-leverkusen-tickets" element={<BayerLeverkusenTicketsPage />} />
          <Route path="/union-berlin-tickets" element={<UnionBerlinTicketsPage />} />
          <Route path="/sporting-cp-tickets" element={<SportingCPTicketsPage />} />
          <Route path="/marseille-tickets" element={<MarseilleTicketsPage />} />
          <Route path="/valencia-tickets" element={<ValenciaTicketsPage />} />
          <Route path="/real-betis-tickets" element={<RealBetisTicketsPage />} />
          <Route path="/osasuna-tickets" element={<OsasunaTicketsPage />} />
          <Route path="/girona-tickets" element={<GironaTicketsPage />} />
          <Route path="/las-palmas-tickets" element={<LasPalmasTicketsPage />} />
          <Route path="/celta-vigo-tickets" element={<CeltaVigoTicketsPage />} />
          <Route path="/rayo-vallecano-tickets" element={<RayoVallecanoTicketsPage />} />
          <Route path="/getafe-tickets" element={<GetafeTicketsPage />} />
          <Route path="/alaves-tickets" element={<AlavesTicketsPage />} />
          <Route path="/bundesliga-tickets" element={<BundesligaTicketsPage />} />
          <Route path="/serie-a-tickets" element={<SerieATicketsPage />} />
          <Route path="/ligue-1-tickets" element={<Ligue1TicketsPage />} />
          <Route path="/nations-league-tickets" element={<NationsLeagueTicketsPage />} />
          <Route path="/copa-america-tickets" element={<CopaAmericaTicketsPage />} />
          <Route path="/fa-cup-tickets" element={<FACupTicketsPage />} />
          <Route path="/copa-del-rey-tickets" element={<CopaDelReyTicketsPage />} />
          <Route path="/dfb-pokal-tickets" element={<DFBPokalTicketsPage />} />
          <Route path="/coppa-italia-tickets" element={<CoppaItaliaTicketsPage />} />
          <Route path="/coupe-de-france-tickets" element={<CoupeDeFranceTicketsPage />} />
          <Route path="/world-cup-qualifiers-tickets" element={<WorldCupQualifiersTicketsPage />} />
          <Route path="/euro-qualifiers-tickets" element={<EuroQualifiersTicketsPage />} />
          <Route path="/international-friendlies-tickets" element={<InternationalFriendliesTicketsPage />} />
          <Route path="/conference-league-tickets" element={<ConferenceLeagueTicketsPage />} />
          <Route path="/super-cup-tickets" element={<SuperCupTicketsPage />} />
          <Route path="/club-world-cup-tickets" element={<ClubWorldCupTicketsPage />} />
          <Route path="/womens-champions-league-tickets" element={<WomensChampionsLeagueTicketsPage />} />
          <Route path="/argentina-vs-brazil-tickets" element={<ArgentinaVsBrazilTicketsPage />} />
          <Route path="/france-vs-england-tickets" element={<FranceVsEnglandTicketsPage />} />
          <Route path="/spain-vs-germany-tickets" element={<SpainVsGermanyTicketsPage />} />
          <Route path="/world-cup-opening-ceremony-tickets" element={<WorldCupOpeningCeremonyTicketsPage />} />
          <Route path="/world-cup-closing-ceremony-tickets" element={<WorldCupClosingCeremonyTicketsPage />} />
          <Route path="/world-cup-package-deal-tickets" element={<WorldCupPackageDealTicketsPage />} />
          <Route path="/world-cup-vip-experience-tickets" element={<WorldCupVIPExperienceTicketsPage />} />
          <Route path="/world-cup-hospitality-tickets" element={<WorldCupHospitalityTicketsPage />} />
          <Route path="/world-cup-premium-tickets" element={<WorldCupPremiumTicketsPage />} />
          <Route path="/manchester-united-vs-liverpool-tickets" element={<ManchesterUnitedVsLiverpoolTicketsPage />} />
          <Route path="/arsenal-vs-chelsea-tickets" element={<ArsenalVsChelseaTicketsPage />} />
          <Route path="/manchester-city-vs-liverpool-tickets" element={<ManchesterCityVsLiverpoolTicketsPage />} />
          <Route path="/arsenal-vs-tottenham-tickets" element={<ArsenalVsTottenhamTicketsPage />} />
          <Route path="/manchester-united-vs-manchester-city-tickets" element={<ManchesterUnitedVsManchesterCityTicketsPage />} />
          <Route path="/chelsea-vs-arsenal-tickets" element={<ChelseaVsArsenalTicketsPage />} />
          <Route path="/liverpool-vs-chelsea-tickets" element={<LiverpoolVsChelseaTicketsPage />} />
          <Route path="/tottenham-vs-chelsea-tickets" element={<TottenhamVsChelseaTicketsPage />} />
          <Route path="/premier-league-season-opener-tickets" element={<PremierLeagueSeasonOpenerTicketsPage />} />
          <Route path="/premier-league-final-day-tickets" element={<PremierLeagueFinalDayTicketsPage />} />
          <Route path="/premier-league-christmas-fixture-tickets" element={<PremierLeagueChristmasFixtureTicketsPage />} />
          <Route path="/premier-league-boxing-day-tickets" element={<PremierLeagueBoxingDayTicketsPage />} />
          <Route path="/premier-league-new-year-fixture-tickets" element={<PremierLeagueNewYearFixtureTicketsPage />} />
          <Route path="/champions-league-round-16-tickets" element={<ChampionsLeagueRoundOf16TicketsPage />} />
          <Route path="/champions-league-quarter-final-tickets" element={<ChampionsLeagueQuarterFinalTicketsPage />} />
          <Route path="/champions-league-semi-final-tickets" element={<ChampionsLeagueSemiFinalTicketsPage />} />
          <Route path="/champions-league-group-stage-tickets" element={<ChampionsLeagueGroupStageTicketsPage />} />
          <Route path="/real-madrid-vs-barcelona-tickets" element={<RealMadridVsBarcelonaTicketsPage />} />
          <Route path="/bayern-munich-vs-psg-tickets" element={<BayernMunichVsPSGTicketsPage />} />
          <Route path="/manchester-city-vs-real-madrid-tickets" element={<ManchesterCityVsRealMadridTicketsPage />} />
          <Route path="/champions-league-final-vip-tickets" element={<ChampionsLeagueFinalVIPTicketsPage />} />
          <Route path="/champions-league-final-hospitality-tickets" element={<ChampionsLeagueFinalHospitalityTicketsPage />} />
          <Route path="/champions-league-final-premium-tickets" element={<ChampionsLeagueFinalPremiumTicketsPage />} />
          <Route path="/champions-league-final-corporate-tickets" element={<ChampionsLeagueFinalCorporateTicketsPage />} />
          <Route path="/europa-league-group-stage-tickets" element={<EuropaLeagueGroupStageTicketsPage />} />
          <Route path="/europa-league-round-16-tickets" element={<EuropaLeagueRoundOf16TicketsPage />} />
          <Route path="/europa-league-quarter-final-tickets" element={<EuropaLeagueQuarterFinalTicketsPage />} />
          <Route path="/europa-league-semi-final-tickets" element={<EuropaLeagueSemiFinalTicketsPage />} />
          <Route path="/as-roma-vs-sevilla-tickets" element={<ASRomaVsSevillaTicketsPage />} />
          <Route path="/west-ham-vs-ajax-tickets" element={<WestHamVsAjaxTicketsPage />} />
          <Route path="/eintracht-frankfurt-vs-rangers-tickets" element={<EintrachtFrankfurtVsRangersTicketsPage />} />
          <Route path="/europa-league-final-vip-tickets" element={<EuropaLeagueFinalVIPTicketsPage />} />
          <Route path="/europa-league-final-hospitality-tickets" element={<EuropaLeagueFinalHospitalityTicketsPage />} />
          <Route path="/europa-league-final-premium-tickets" element={<EuropaLeagueFinalPremiumTicketsPage />} />
          <Route path="/real-madrid-vs-atletico-madrid-tickets" element={<RealMadridVsAtleticoMadridTicketsPage />} />
          <Route path="/barcelona-vs-atletico-madrid-tickets" element={<BarcelonaVsAtleticoMadridTicketsPage />} />
          <Route path="/sevilla-vs-real-betis-tickets" element={<SevillaVsRealBetisTicketsPage />} />
          <Route path="/athletic-bilbao-vs-real-sociedad-tickets" element={<AthleticBilbaoVsRealSociedadTicketsPage />} />
          <Route path="/valencia-vs-villarreal-tickets" element={<ValenciaVsVillarrealTicketsPage />} />
          <Route path="/la-liga-season-opener-tickets" element={<LaLigaSeasonOpenerTicketsPage />} />
          <Route path="/la-liga-final-day-tickets" element={<LaLigaFinalDayTicketsPage />} />
          <Route path="/la-liga-christmas-fixture-tickets" element={<LaLigaChristmasFixtureTicketsPage />} />
          <Route path="/la-liga-new-year-fixture-tickets" element={<LaLigaNewYearFixtureTicketsPage />} />
          <Route path="/camp-nou-tickets" element={<CampNouTicketsPage />} />
          <Route path="/santiago-bernabeu-tickets" element={<SantiagoBernabeuTicketsPage />} />
          <Route path="/old-trafford-tickets" element={<OldTraffordTicketsPage />} />
          <Route path="/anfield-tickets" element={<AnfieldTicketsPage />} />
          <Route path="/wembley-stadium-tickets" element={<WembleyStadiumTicketsPage />} />
          <Route path="/allianz-arena-tickets" element={<AllianzArenaTicketsPage />} />
          <Route path="/san-siro-tickets" element={<SanSiroTicketsPage />} />
          <Route path="/metlife-stadium-tickets" element={<MetLifeStadiumTicketsPage />} />
          <Route path="/competition/:slug" element={<CompetitionPage />} />
          <Route path="/team/:slug" element={<TeamPage />} />
          <Route path="/venue/:slug" element={<VenuePage />} />
          <Route path="/:lang" element={<HomePage />} />
          <Route path="/:lang/about" element={<AboutPage />} />
          <Route path="/:lang/privacy" element={<PrivacyPage />} />
          <Route path="/:lang/terms" element={<TermsPage />} />
          <Route path="/:lang/contact" element={<ContactPage />} />
          <Route path="/:lang/help" element={<HelpPage />} />
          
          {/* Multilingual Ticket Pages */}
          <Route path="/:lang/world-cup-tickets" element={<WorldCupTicketsPage />} />
          <Route path="/:lang/world-cup-2026-tickets" element={<WorldCupTicketsPage />} />
          <Route path="/:lang/premier-league-tickets" element={<PremierLeagueTicketsPage />} />
          <Route path="/:lang/manchester-city-tickets" element={<ManchesterCityTicketsPage />} />
          <Route path="/:lang/etihad-stadium-tickets" element={<EtihadStadiumTicketsPage />} />
          <Route path="/:lang/argentina-vs-brazil-tickets" element={<ArgentinaBrazilTicketsPage />} />
          <Route path="/:lang/champions-league-tickets" element={<ChampionsLeagueTicketsPage />} />
          <Route path="/:lang/europa-league-tickets" element={<EuropaLeagueTicketsPage />} />
          <Route path="/:lang/la-liga-tickets" element={<LaLigaTicketsPage />} />
          <Route path="/:lang/euro-2028-tickets" element={<Euro2028TicketsPage />} />
          <Route path="/:lang/mls-tickets" element={<MLSTicketsPage />} />
          <Route path="/:lang/saudi-pro-league-tickets" element={<SaudiProLeagueTicketsPage />} />
          
          <Route path="/:lang/competition/:slug" element={<CompetitionPage />} />
          <Route path="/:lang/team/:slug" element={<TeamPage />} />
          <Route path="/:lang/venue/:slug" element={<VenuePage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <LanguageProvider>
        <Router>
          <Routes>
            {/* Admin Routes */}
            <Route 
              path="/admin/login" 
              element={
                <PublicRoute>
                  <LoginPage />
                </PublicRoute>
              } 
            />
            <Route 
              path="/admin/*" 
              element={
                <ProtectedRoute>
                  <AdminPanel />
                </ProtectedRoute>
              } 
            />

            {/* Public Routes */}
            <Route path="/*" element={<AppContent />} />
          </Routes>
        </Router>
      </LanguageProvider>
    </AuthProvider>
  );
}

export default App;
