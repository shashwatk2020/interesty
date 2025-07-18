import React from 'react';
import { Flag, Calendar, MapPin, Users } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const NationalTeamsSection: React.FC = () => {
  const { t } = useLanguage();

  const nationalTeams = [
    {
      name: 'Argentina National Team Tickets',
      flag: '🇦🇷',
      image: 'https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=400',
      ranking: 1,
      nextMatch: 'vs Brazil',
      matchDate: 'March 26, 2025',
      venue: 'Buenos Aires',
      competition: 'World Cup Qualifiers',
      href: '/argentina-tickets'
    },
    {
      name: 'France National Team Tickets',
      flag: '🇫🇷',
      image: 'https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=400',
      ranking: 2,
      nextMatch: 'vs Italy',
      matchDate: 'March 23, 2025',
      venue: 'Paris',
      competition: 'Nations League',
      href: '/france-tickets'
    },
    {
      name: 'Brazil National Team Tickets',
      flag: '🇧🇷',
      image: 'https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=400',
      ranking: 3,
      nextMatch: 'vs Argentina',
      matchDate: 'March 26, 2025',
      venue: 'Rio de Janeiro',
      competition: 'World Cup Qualifiers',
      href: '/brazil-tickets'
    },
    {
      name: 'England National Team Tickets',
      flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
      image: 'https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=400',
      ranking: 4,
      nextMatch: 'vs Germany',
      matchDate: 'March 25, 2025',
      venue: 'London',
      competition: 'International Friendly',
      href: '/england-tickets'
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('sections.national')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Support your national team in upcoming international fixtures
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {nationalTeams.map((team, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-1">
              <div className="relative aspect-video bg-cover bg-center" style={{ backgroundImage: `url(${team.image})` }}>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                <div className="absolute top-3 left-3 bg-white bg-opacity-90 px-2 py-1 rounded-full">
                  <div className="flex items-center space-x-2">
                    <span className="text-xl">{team.flag}</span>
                    <span className="text-sm font-medium text-gray-700">FIFA #{team.ranking}</span>
                  </div>
                </div>
                <div className="absolute bottom-3 left-3 text-white">
                  <h3 className="text-xl font-bold">
                    <a href={team.href} className="hover:text-green-200 transition-colors">
                      {team.name}
                    </a>
                  </h3>
                </div>
              </div>
              
              <div className="p-4">
                <div className="bg-blue-50 rounded-lg p-3 mb-3">
                  <div className="flex items-center text-blue-800 text-sm mb-2">
                    <Flag className="w-3 h-3 mr-2" />
                    <span className="font-medium">Next International Match</span>
                  </div>
                  <div className="text-gray-700">
                    <div className="font-semibold text-base mb-1">{team.nextMatch}</div>
                    <div className="space-y-1">
                      <div className="flex items-center text-sm">
                        <Calendar className="w-3 h-3 mr-2" />
                        <span>{team.matchDate}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <MapPin className="w-3 h-3 mr-2" />
                        <span>{team.venue}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Users className="w-3 h-3 mr-2" />
                        <span>{team.competition}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <a
                  href={team.href}
                  className="block w-full bg-blue-600 text-white text-center py-2 px-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-sm"
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

export default NationalTeamsSection;