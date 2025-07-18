import React from 'react';
import { Trophy, Users, Calendar, MapPin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const CompetitionsSection: React.FC = () => {
  const { t } = useLanguage();

  const competitions = [
    {
      title: 'FIFA World Cup 2026 Tickets',
      image: 'https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'The biggest football tournament in the world featuring 48 teams across USA, Canada, and Mexico.',
      teams: 48,
      matches: 104,
      venues: 16,
      href: '/world-cup-2026-tickets'
    },
    {
      title: 'UEFA Champions League Tickets',
      image: 'https://images.pexels.com/photos/1884574/pexels-photo-1884574.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Europe\'s premier club competition featuring the best teams from across the continent.',
      teams: 32,
      matches: 125,
      venues: 'Multiple',
      href: '/champions-league-tickets'
    },
    {
      title: 'Premier League Tickets',
      image: 'https://images.pexels.com/photos/1884574/pexels-photo-1884574.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'England\'s top flight featuring 20 of the world\'s most prestigious football clubs.',
      teams: 20,
      matches: 380,
      venues: 20,
      href: '/premier-league-tickets'
    },
    {
      title: 'La Liga Tickets',
      image: 'https://images.pexels.com/photos/1884574/pexels-photo-1884574.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Spain\'s elite league featuring Real Madrid, Barcelona, and other top European clubs.',
      teams: 20,
      matches: 380,
      venues: 20,
      href: '/la-liga-tickets'
    },
    {
      title: 'UEFA Euro 2028 Tickets',
      image: 'https://images.pexels.com/photos/1884574/pexels-photo-1884574.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'The European Championship across England, Scotland, Wales, Northern Ireland, and Republic of Ireland.',
      teams: 24,
      matches: 51,
      venues: 10,
      href: '/euro-2028-tickets'
    },
    {
      title: 'Bundesliga Tickets',
      image: 'https://images.pexels.com/photos/1884574/pexels-photo-1884574.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Germany\'s top division known for its passionate fans and competitive football.',
      teams: 18,
      matches: 306,
      venues: 18,
      href: '/bundesliga-tickets'
    },
    {
      title: 'Serie A Tickets',
      image: 'https://images.pexels.com/photos/1884574/pexels-photo-1884574.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Italy\'s premier league featuring historic clubs like AC Milan, Inter Milan, and Juventus.',
      teams: 20,
      matches: 380,
      venues: 20,
      href: '/serie-a-tickets'
    },
    {
      title: 'UEFA Europa League Tickets',
      image: 'https://images.pexels.com/photos/1884574/pexels-photo-1884574.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Europe\'s second-tier competition offering exciting knockout football.',
      teams: 32,
      matches: 205,
      venues: 'Multiple',
      href: '/europa-league-tickets'
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('sections.competitions')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover tickets for the world's most prestigious football competitions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {competitions.map((competition, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-1">
              <div className="aspect-video bg-cover bg-center" style={{ backgroundImage: `url(${competition.image})` }}>
                <div className="w-full h-full bg-gradient-to-t from-black via-transparent to-transparent flex items-end p-4">
                  <div className="text-white">
                    <Trophy className="w-6 h-6 mb-2" />
                  </div>
                </div>
              </div>
              
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  <a href={competition.href} className="hover:text-green-600 transition-colors">
                    {competition.title}
                  </a>
                </h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-3">{competition.description}</p>
                
                <div className="space-y-1 mb-4">
                  <div className="flex items-center text-gray-500 text-sm">
                    <Users className="w-3 h-3 mr-2" />
                    <span>{competition.teams} Teams</span>
                  </div>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar className="w-3 h-3 mr-2" />
                    <span>{competition.matches} Matches</span>
                  </div>
                  <div className="flex items-center text-gray-500 text-sm">
                    <MapPin className="w-3 h-3 mr-2" />
                    <span>{competition.venues} Venues</span>
                  </div>
                </div>
                
                <a
                  href={competition.href}
                  className="block w-full bg-green-600 text-white text-center py-2 px-3 rounded-lg hover:bg-green-700 transition-colors font-semibold text-sm"
                >
                  View Tickets
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompetitionsSection;