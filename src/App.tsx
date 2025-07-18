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
            <Route path="/*" element={
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
                    
                    <Route path="/:lang/competition/:slug" element={<CompetitionPage />} />
                    <Route path="/:lang/team/:slug" element={<TeamPage />} />
                    <Route path="/:lang/venue/:slug" element={<VenuePage />} />
                  </Routes>
                </main>
                <Footer />
              </div>
            } />
          </Routes>
        </Router>
      </LanguageProvider>
    </AuthProvider>
  );
}

export default App;