import React, { useState } from 'react';
import { Search, TrendingUp, Calendar, MapPin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const HeroSection: React.FC = () => {
  const { t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');

  const featuredCompetitions = [
    {
      title: 'FIFA World Cup 2026',
      image: 'https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=800',
      dates: 'June 11 - July 19, 2026',
      venues: 'USA, Canada, Mexico',
      href: '/world-cup-2026-tickets'
    },
    {
      title: 'UEFA Euro 2028',
      image: 'https://images.pexels.com/photos/1884574/pexels-photo-1884574.jpeg?auto=compress&cs=tinysrgb&w=800',
      dates: 'June 9 - July 9, 2028',
      venues: 'UK & Ireland',
      href: '/euro-2028-tickets'
    },
    {
      title: 'Champions League Final',
      image: 'https://images.pexels.com/photos/1884574/pexels-photo-1884574.jpeg?auto=compress&cs=tinysrgb&w=800',
      dates: 'May 31, 2025',
      venues: 'Munich, Germany',
      href: '/champions-league-final-tickets'
    }
  ];

  const hotFixtures = [
    { fixture: 'El Clasico', date: 'December 23, 2024', venue: 'Santiago Bernabeu' },
    { fixture: 'Manchester United vs Liverpool', date: 'January 5, 2025', venue: 'Old Trafford' },
    { fixture: 'Arsenal vs Chelsea', date: 'January 15, 2025', venue: 'Emirates Stadium' }
  ];

  return (
    <div className="relative bg-gradient-to-br from-green-900 via-green-800 to-blue-900 text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M30%2030c0-11.046-8.954-20-20-20s-20%208.954-20%2020%208.954%2020%2020%2020%2020-8.954%2020-20z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="relative container mx-auto px-4 py-16">
        {/* Hero Content */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            {t('hero.title')}
          </h1>
          <p className="text-xl md:text-2xl text-green-100 mb-8 max-w-3xl mx-auto">
            {t('hero.subtitle')}
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
              <input
                type="text"
                placeholder={t('search.placeholder')}
                className="w-full pl-14 pr-4 py-4 text-lg rounded-xl border-0 bg-white bg-opacity-90 text-gray-900 placeholder-gray-500 focus:ring-4 focus:ring-green-500 focus:bg-white transition-all"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors">
                Search
              </button>
            </div>
          </div>
        </div>

        {/* Featured Competitions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {featuredCompetitions.map((competition, index) => (
            <div key={index} className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 hover:bg-opacity-20 transition-all cursor-pointer">
              <div className="aspect-video bg-cover bg-center rounded-lg mb-4" style={{ backgroundImage: `url(${competition.image})` }}></div>
              <h3 className="text-xl font-bold mb-2">{competition.title}</h3>
              <div className="flex items-center text-green-200 mb-2">
                <Calendar className="w-4 h-4 mr-2" />
                <span className="text-sm">{competition.dates}</span>
              </div>
              <div className="flex items-center text-green-200">
                <MapPin className="w-4 h-4 mr-2" />
                <span className="text-sm">{competition.venues}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Hot Fixtures */}
        <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6">
          <div className="flex items-center mb-4">
            <TrendingUp className="w-6 h-6 text-orange-400 mr-2" />
            <h3 className="text-xl font-bold">Hot Fixtures This Week</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {hotFixtures.map((fixture, index) => (
              <div key={index} className="bg-white bg-opacity-10 rounded-lg p-4 hover:bg-opacity-20 transition-all cursor-pointer">
                <h4 className="font-semibold text-lg mb-2">{fixture.fixture}</h4>
                <div className="flex items-center text-green-200 mb-1">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span className="text-sm">{fixture.date}</span>
                </div>
                <div className="flex items-center text-green-200">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span className="text-sm">{fixture.venue}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;