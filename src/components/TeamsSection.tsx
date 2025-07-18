import React from 'react';
import { Star, MapPin, Users, Calendar } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const TeamsSection: React.FC = () => {
  const { t } = useLanguage();

  const teams = [
    {
      name: 'Manchester United Tickets',
      logo: 'https://images.pexels.com/photos/1884574/pexels-photo-1884574.jpeg?auto=compress&cs=tinysrgb&w=200',
      stadium: 'Old Trafford',
      capacity: '74,310',
      nextMatch: 'vs Liverpool',
      matchDate: 'Jan 5, 2025',
      league: 'Premier League',
      href: '/manchester-united-tickets'
    },
    {
      name: 'Real Madrid Tickets',
      logo: 'https://images.pexels.com/photos/1884574/pexels-photo-1884574.jpeg?auto=compress&cs=tinysrgb&w=200',
      stadium: 'Santiago Bernabeu',
      capacity: '81,044',
      nextMatch: 'vs Barcelona',
      matchDate: 'Dec 23, 2024',
      league: 'La Liga',
      href: '/real-madrid-tickets'
    },
    {
      name: 'Barcelona Tickets',
      logo: 'https://images.pexels.com/photos/1884574/pexels-photo-1884574.jpeg?auto=compress&cs=tinysrgb&w=200',
      stadium: 'Camp Nou',
      capacity: '99,354',
      nextMatch: 'vs Real Madrid',
      matchDate: 'Dec 23, 2024',
      league: 'La Liga',
      href: '/barcelona-tickets'
    },
    {
      name: 'Liverpool Tickets',
      logo: 'https://images.pexels.com/photos/1884574/pexels-photo-1884574.jpeg?auto=compress&cs=tinysrgb&w=200',
      stadium: 'Anfield',
      capacity: '53,394',
      nextMatch: 'vs Manchester United',
      matchDate: 'Jan 5, 2025',
      league: 'Premier League',
      href: '/liverpool-tickets'
    },
    {
      name: 'Bayern Munich Tickets',
      logo: 'https://images.pexels.com/photos/1884574/pexels-photo-1884574.jpeg?auto=compress&cs=tinysrgb&w=200',
      stadium: 'Allianz Arena',
      capacity: '75,000',
      nextMatch: 'vs Borussia Dortmund',
      matchDate: 'Dec 30, 2024',
      league: 'Bundesliga',
      href: '/bayern-munich-tickets'
    },
    {
      name: 'Chelsea Tickets',
      logo: 'https://images.pexels.com/photos/1884574/pexels-photo-1884574.jpeg?auto=compress&cs=tinysrgb&w=200',
      stadium: 'Stamford Bridge',
      capacity: '40,341',
      nextMatch: 'vs Arsenal',
      matchDate: 'Jan 15, 2025',
      league: 'Premier League',
      href: '/chelsea-tickets'
    },
    {
      name: 'Arsenal Tickets',
      logo: 'https://images.pexels.com/photos/1884574/pexels-photo-1884574.jpeg?auto=compress&cs=tinysrgb&w=200',
      stadium: 'Emirates Stadium',
      capacity: '60,260',
      nextMatch: 'vs Chelsea',
      matchDate: 'Jan 15, 2025',
      league: 'Premier League',
      href: '/arsenal-tickets'
    },
    {
      name: 'PSG Tickets',
      logo: 'https://images.pexels.com/photos/1884574/pexels-photo-1884574.jpeg?auto=compress&cs=tinysrgb&w=200',
      stadium: 'Parc des Princes',
      capacity: '47,929',
      nextMatch: 'vs Marseille',
      matchDate: 'Jan 12, 2025',
      league: 'Ligue 1',
      href: '/psg-tickets'
    },
    {
      name: 'AC Milan Tickets',
      logo: 'https://images.pexels.com/photos/1884574/pexels-photo-1884574.jpeg?auto=compress&cs=tinysrgb&w=200',
      stadium: 'San Siro',
      capacity: '75,923',
      nextMatch: 'vs Inter Milan',
      matchDate: 'Jan 8, 2025',
      league: 'Serie A',
      href: '/ac-milan-tickets'
    },
    {
      name: 'Manchester City Tickets',
      logo: 'https://images.pexels.com/photos/1884574/pexels-photo-1884574.jpeg?auto=compress&cs=tinysrgb&w=200',
      stadium: 'Etihad Stadium',
      capacity: '55,017',
      nextMatch: 'vs Tottenham',
      matchDate: 'Jan 10, 2025',
      league: 'Premier League',
      href: '/manchester-city-tickets'
    },
    {
      name: 'Juventus Tickets',
      logo: 'https://images.pexels.com/photos/1884574/pexels-photo-1884574.jpeg?auto=compress&cs=tinysrgb&w=200',
      stadium: 'Allianz Stadium',
      capacity: '41,507',
      nextMatch: 'vs Napoli',
      matchDate: 'Jan 18, 2025',
      league: 'Serie A',
      href: '/juventus-tickets'
    },
    {
      name: 'Tottenham Tickets',
      logo: 'https://images.pexels.com/photos/1884574/pexels-photo-1884574.jpeg?auto=compress&cs=tinysrgb&w=200',
      stadium: 'Tottenham Hotspur Stadium',
      capacity: '62,850',
      nextMatch: 'vs Manchester City',
      matchDate: 'Jan 10, 2025',
      league: 'Premier League',
      href: '/tottenham-tickets'
    }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('sections.teams')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get tickets for the world's most prestigious football clubs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {teams.map((team, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-1">
              <div className="relative">
                <div className="aspect-video bg-gradient-to-br from-green-600 to-blue-600 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                    <div className="w-12 h-12 bg-cover bg-center rounded-full" style={{ backgroundImage: `url(${team.logo})` }}></div>
                  </div>
                </div>
                <div className="absolute top-3 right-3">
                  <div className="bg-white bg-opacity-90 px-2 py-1 rounded-full text-xs font-medium text-gray-700">
                    {team.league}
                  </div>
                </div>
              </div>
              
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  <a href={team.href} className="hover:text-green-600 transition-colors">
                    {team.name}
                  </a>
                </h3>
                
                <div className="space-y-1 mb-3">
                  <div className="flex items-center text-gray-500 text-sm">
                    <MapPin className="w-3 h-3 mr-2" />
                    <span>{team.stadium}</span>
                  </div>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Users className="w-3 h-3 mr-2" />
                    <span>{team.capacity} capacity</span>
                  </div>
                </div>

                <div className="bg-green-50 rounded-lg p-2 mb-3">
                  <div className="flex items-center text-green-800 text-sm mb-1">
                    <Star className="w-3 h-3 mr-2" />
                    <span className="font-medium">Next Match</span>
                  </div>
                  <div className="text-gray-700 text-sm">
                    <div className="font-medium">{team.nextMatch}</div>
                    <div className="flex items-center mt-1">
                      <Calendar className="w-3 h-3 mr-1" />
                      <span>{team.matchDate}</span>
                    </div>
                  </div>
                </div>
                
                <a
                  href={team.href}
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

export default TeamsSection;