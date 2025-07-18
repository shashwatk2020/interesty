import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, Menu, X, Globe, User, LogIn } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import MegaMenu from './MegaMenu';
import LanguageSelector from './LanguageSelector';

const Header: React.FC = () => {
  const { t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  const suggestions = [
    'World Cup Tickets',
    'Premier League Tickets',
    'Champions League Tickets',
    'Manchester United Tickets',
    'Real Madrid Tickets',
    'Barcelona Tickets',
    'Liverpool Tickets',
    'Chelsea Tickets'
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const filteredSuggestions = suggestions.filter(suggestion =>
    suggestion.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top Header */}
      <div className="bg-green-600 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="text-sm">
              ⚽ Trusted Ticket Marketplace | Secure Booking Guarantee
            </div>
            <div className="flex items-center space-x-4">
              <LanguageSelector />
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">⚽</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-800">TicketsFootball</h1>
              <p className="text-sm text-gray-600">Your Premier Ticket Marketplace</p>
            </div>
          </Link>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl mx-8 relative" ref={searchRef}>
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder={t('search.placeholder')}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setShowSuggestions(true)}
              />
            </div>
            
            {/* Search Suggestions */}
            {showSuggestions && (searchQuery || true) && (
              <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-lg shadow-lg mt-1 max-h-64 overflow-y-auto z-50">
                {filteredSuggestions.map((suggestion, index) => (
                  <div
                    key={index}
                    className="px-4 py-3 hover:bg-gray-50 cursor-pointer transition-colors border-b border-gray-100 last:border-b-0"
                    onClick={() => {
                      setSearchQuery(suggestion);
                      setShowSuggestions(false);
                    }}
                  >
                    <div className="flex items-center space-x-3">
                      <Search className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-700">{suggestion}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Navigation Links */}
          <div className="hidden lg:flex items-center space-x-6">
            <Link to="/about" className="text-gray-700 hover:text-green-600 transition-colors">
              {t('nav.about')}
            </Link>
            <Link to="/privacy" className="text-gray-700 hover:text-green-600 transition-colors">
              {t('nav.privacy')}
            </Link>
            <Link to="/terms" className="text-gray-700 hover:text-green-600 transition-colors">
              {t('nav.terms')}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mega Menu */}
      <MegaMenu />

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col space-y-4">
              <Link to="/about" className="text-gray-700 hover:text-green-600 transition-colors">
                {t('nav.about')}
              </Link>
              <Link to="/privacy" className="text-gray-700 hover:text-green-600 transition-colors">
                {t('nav.privacy')}
              </Link>
              <Link to="/terms" className="text-gray-700 hover:text-green-600 transition-colors">
                {t('nav.terms')}
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;