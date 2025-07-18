import React from 'react';
import { Clock, MapPin, Users, Star, Calendar } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const FixturesSection: React.FC = () => {
  const { t } = useLanguage();

  const fixtures = [
    {
      title: 'Real Madrid vs Barcelona Tickets',
      homeTeam: 'Real Madrid',
      awayTeam: 'Barcelona',
      date: 'December 23, 2024',
      time: '20:00 CET',
      venue: 'Santiago Bernabeu',
      competition: 'La Liga',
      isHot: true,
      ticketPrice: 'From €150',
      href: '/real-madrid-vs-barcelona-tickets'
    },
    {
      title: 'Champions League Final Tickets',
      homeTeam: 'TBD',
      awayTeam: 'TBD',
      date: 'May 31, 2025',
      time: '21:00 CET',
      venue: 'Munich',
      competition: 'UEFA Champions League',
      isHot: true,
      ticketPrice: 'From €200',
      href: '/champions-league-final-tickets'
    },
    {
      title: 'Manchester United vs Liverpool Tickets',
      homeTeam: 'Manchester United',
      awayTeam: 'Liverpool',
      date: 'January 5, 2025',
      time: '16:30 GMT',
      venue: 'Old Trafford',
      competition: 'Premier League',
      isHot: true,
      ticketPrice: 'From £85',
      href: '/manchester-united-vs-liverpool-tickets'
    },
    {
      title: 'Arsenal vs Chelsea Tickets',
      homeTeam: 'Arsenal',
      awayTeam: 'Chelsea',
      date: 'January 15, 2025',
      time: '20:00 GMT',
      venue: 'Emirates Stadium',
      competition: 'Premier League',
      isHot: false,
      ticketPrice: 'From £70',
      href: '/arsenal-vs-chelsea-tickets'
    },
    {
      title: 'Bayern Munich vs Borussia Dortmund Tickets',
      homeTeam: 'Bayern Munich',
      awayTeam: 'Borussia Dortmund',
      date: 'December 30, 2024',
      time: '18:30 CET',
      venue: 'Allianz Arena',
      competition: 'Bundesliga',
      isHot: true,
      ticketPrice: 'From €60',
      href: '/bayern-munich-vs-borussia-dortmund-tickets'
    },
    {
      title: 'PSG vs Marseille Tickets',
      homeTeam: 'Paris Saint-Germain',
      awayTeam: 'Olympique Marseille',
      date: 'January 12, 2025',
      time: '21:00 CET',
      venue: 'Parc des Princes',
      competition: 'Ligue 1',
      isHot: false,
      ticketPrice: 'From €45',
      href: '/psg-vs-marseille-tickets'
    },
    {
      title: 'AC Milan vs Inter Milan Tickets',
      homeTeam: 'AC Milan',
      awayTeam: 'Inter Milan',
      date: 'January 8, 2025',
      time: '20:45 CET',
      venue: 'San Siro',
      competition: 'Serie A',
      isHot: true,
      ticketPrice: 'From €55',
      href: '/ac-milan-vs-inter-milan-tickets'
    },
    {
      title: 'Manchester City vs Tottenham Tickets',
      homeTeam: 'Manchester City',
      awayTeam: 'Tottenham',
      date: 'January 10, 2025',
      time: '17:30 GMT',
      venue: 'Etihad Stadium',
      competition: 'Premier League',
      isHot: false,
      ticketPrice: 'From £75',
      href: '/manchester-city-vs-tottenham-tickets'
    },
    {
      title: 'Atletico Madrid vs Sevilla Tickets',
      homeTeam: 'Atletico Madrid',
      awayTeam: 'Sevilla',
      date: 'January 20, 2025',
      time: '21:00 CET',
      venue: 'Metropolitano Stadium',
      competition: 'La Liga',
      isHot: false,
      ticketPrice: 'From €40',
      href: '/atletico-madrid-vs-sevilla-tickets'
    },
    {
      title: 'Juventus vs Napoli Tickets',
      homeTeam: 'Juventus',
      awayTeam: 'Napoli',
      date: 'January 18, 2025',
      time: '20:45 CET',
      venue: 'Allianz Stadium',
      competition: 'Serie A',
      isHot: false,
      ticketPrice: 'From €50',
      href: '/juventus-vs-napoli-tickets'
    },
    {
      title: 'World Cup Final Tickets',
      homeTeam: 'TBD',
      awayTeam: 'TBD',
      date: 'July 19, 2026',
      time: '15:00 EST',
      venue: 'MetLife Stadium',
      competition: 'FIFA World Cup',
      isHot: true,
      ticketPrice: 'From $200',
      href: '/world-cup-final-tickets'
    },
    {
      title: 'Europa League Final Tickets',
      homeTeam: 'TBD',
      awayTeam: 'TBD',
      date: 'May 21, 2025',
      time: '21:00 CET',
      venue: 'Bilbao',
      competition: 'UEFA Europa League',
      isHot: true,
      ticketPrice: 'From €80',
      href: '/europa-league-final-tickets'
    },
    {
      title: 'FA Cup Final Tickets',
      homeTeam: 'TBD',
      awayTeam: 'TBD',
      date: 'May 24, 2025',
      time: '15:00 GMT',
      venue: 'Wembley Stadium',
      competition: 'FA Cup',
      isHot: true,
      ticketPrice: 'From £60',
      href: '/fa-cup-final-tickets'
    },
    {
      title: 'Copa del Rey Final Tickets',
      homeTeam: 'TBD',
      awayTeam: 'TBD',
      date: 'May 17, 2025',
      time: '21:30 CET',
      venue: 'Seville',
      competition: 'Copa del Rey',
      isHot: false,
      ticketPrice: 'From €35',
      href: '/copa-del-rey-final-tickets'
    },
    {
      title: 'DFB Pokal Final Tickets',
      homeTeam: 'TBD',
      awayTeam: 'TBD',
      date: 'May 24, 2025',
      time: '20:00 CET',
      venue: 'Olympiastadion Berlin',
      competition: 'DFB Pokal',
      isHot: false,
      ticketPrice: 'From €40',
      href: '/dfb-pokal-final-tickets'
    },
    {
      title: 'Arsenal vs Tottenham Tickets',
      homeTeam: 'Arsenal',
      awayTeam: 'Tottenham',
      date: 'February 2, 2025',
      time: '16:30 GMT',
      venue: 'Emirates Stadium',
      competition: 'Premier League',
      isHot: true,
      ticketPrice: 'From £90',
      href: '/arsenal-vs-tottenham-tickets'
    },
    {
      title: 'Manchester United vs Manchester City Tickets',
      homeTeam: 'Manchester United',
      awayTeam: 'Manchester City',
      date: 'February 12, 2025',
      time: '17:30 GMT',
      venue: 'Old Trafford',
      competition: 'Premier League',
      isHot: true,
      ticketPrice: 'From £95',
      href: '/manchester-united-vs-manchester-city-tickets'
    },
    {
      title: 'Real Madrid vs Atletico Madrid Tickets',
      homeTeam: 'Real Madrid',
      awayTeam: 'Atletico Madrid',
      date: 'February 9, 2025',
      time: '21:00 CET',
      venue: 'Santiago Bernabeu',
      competition: 'La Liga',
      isHot: true,
      ticketPrice: 'From €80',
      href: '/real-madrid-vs-atletico-madrid-tickets'
    },
    {
      title: 'Inter Milan vs AC Milan Tickets',
      homeTeam: 'Inter Milan',
      awayTeam: 'AC Milan',
      date: 'February 23, 2025',
      time: '20:45 CET',
      venue: 'San Siro',
      competition: 'Serie A',
      isHot: true,
      ticketPrice: 'From €65',
      href: '/inter-milan-vs-ac-milan-tickets'
    },
    {
      title: 'Marseille vs PSG Tickets',
      homeTeam: 'Olympique Marseille',
      awayTeam: 'Paris Saint-Germain',
      date: 'March 16, 2025',
      time: '21:00 CET',
      venue: 'Orange Velodrome',
      competition: 'Ligue 1',
      isHot: false,
      ticketPrice: 'From €50',
      href: '/marseille-vs-psg-tickets'
    }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('sections.fixtures')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't miss the biggest matches in world football
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {fixtures.map((fixture, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-1">
              <div className="relative">
                <div className="bg-gradient-to-br from-green-600 to-blue-600 p-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white text-xs font-medium bg-white bg-opacity-20 px-2 py-1 rounded">
                      {fixture.competition}
                    </span>
                    {fixture.isHot && (
                      <div className="flex items-center text-orange-300">
                        <Star className="w-3 h-3 mr-1 fill-current" />
                        <span className="text-xs font-medium">HOT</span>
                      </div>
                    )}
                  </div>
                  <h3 className="text-white font-bold text-base mb-1">
                    <a href={fixture.href} className="hover:text-green-200 transition-colors">
                      {fixture.title}
                    </a>
                  </h3>
                  <div className="text-white text-sm">
                    <div className="mb-1">{fixture.homeTeam} vs {fixture.awayTeam}</div>
                  </div>
                </div>
              </div>
              
              <div className="p-4">
                <div className="space-y-2 mb-3">
                  <div className="flex items-center text-gray-600 text-sm">
                    <Calendar className="w-3 h-3 mr-2" />
                    <span>{fixture.date}</span>
                  </div>
                  <div className="flex items-center text-gray-600 text-sm">
                    <Clock className="w-3 h-3 mr-2" />
                    <span>{fixture.time}</span>
                  </div>
                  <div className="flex items-center text-gray-600 text-sm">
                    <MapPin className="w-3 h-3 mr-2" />
                    <span>{fixture.venue}</span>
                  </div>
                </div>

                <div className="bg-green-50 rounded-lg p-2 mb-3">
                  <div className="flex items-center justify-between">
                    <span className="text-green-800 text-sm font-medium">Tickets Available</span>
                    <span className="text-green-700 font-semibold text-sm">{fixture.ticketPrice}</span>
                  </div>
                </div>
                
                <a
                  href={fixture.href}
                  className="block w-full bg-green-600 text-white text-center py-2 px-3 rounded-lg hover:bg-green-700 transition-colors font-semibold text-sm"
                >
                  Buy Tickets
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FixturesSection;