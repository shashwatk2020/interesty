import React from 'react';
import { MapPin, Users, Calendar, Star } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const VenuesSection: React.FC = () => {
  const { t } = useLanguage();

  const venues = [
    {
      name: 'Camp Nou Tickets',
      city: 'Barcelona, Spain',
      capacity: '99,354',
      homeTeam: 'FC Barcelona',
      image: 'https://images.pexels.com/photos/1884574/pexels-photo-1884574.jpeg?auto=compress&cs=tinysrgb&w=600',
      nextEvent: 'Real Madrid vs Barcelona',
      eventDate: 'December 23, 2024',
      isIconic: true,
      href: '/camp-nou-tickets'
    },
    {
      name: 'Santiago Bernabeu Tickets',
      city: 'Madrid, Spain',
      capacity: '81,044',
      homeTeam: 'Real Madrid',
      image: 'https://images.pexels.com/photos/1884574/pexels-photo-1884574.jpeg?auto=compress&cs=tinysrgb&w=600',
      nextEvent: 'Real Madrid vs Barcelona',
      eventDate: 'December 23, 2024',
      isIconic: true,
      href: '/santiago-bernabeu-tickets'
    },
    {
      name: 'Old Trafford Tickets',
      city: 'Manchester, England',
      capacity: '74,310',
      homeTeam: 'Manchester United',
      image: 'https://images.pexels.com/photos/1884574/pexels-photo-1884574.jpeg?auto=compress&cs=tinysrgb&w=600',
      nextEvent: 'Manchester United vs Liverpool',
      eventDate: 'January 5, 2025',
      isIconic: true,
      href: '/old-trafford-tickets'
    },
    {
      name: 'Wembley Stadium Tickets',
      city: 'London, England',
      capacity: '90,000',
      homeTeam: 'England National Team',
      image: 'https://images.pexels.com/photos/1884574/pexels-photo-1884574.jpeg?auto=compress&cs=tinysrgb&w=600',
      nextEvent: 'FA Cup Final',
      eventDate: 'May 24, 2025',
      isIconic: true,
      href: '/wembley-stadium-tickets'
    },
    {
      name: 'Allianz Arena Tickets',
      city: 'Munich, Germany',
      capacity: '75,000',
      homeTeam: 'Bayern Munich',
      image: 'https://images.pexels.com/photos/1884574/pexels-photo-1884574.jpeg?auto=compress&cs=tinysrgb&w=600',
      nextEvent: 'Champions League Final',
      eventDate: 'May 31, 2025',
      isIconic: true,
      href: '/allianz-arena-tickets'
    },
    {
      name: 'San Siro Tickets',
      city: 'Milan, Italy',
      capacity: '75,923',
      homeTeam: 'AC Milan / Inter Milan',
      image: 'https://images.pexels.com/photos/1884574/pexels-photo-1884574.jpeg?auto=compress&cs=tinysrgb&w=600',
      nextEvent: 'AC Milan vs Inter Milan',
      eventDate: 'February 23, 2025',
      isIconic: true,
      href: '/san-siro-tickets'
    },
    {
      name: 'Anfield Tickets',
      city: 'Liverpool, England',
      capacity: '53,394',
      homeTeam: 'Liverpool FC',
      image: 'https://images.pexels.com/photos/1884574/pexels-photo-1884574.jpeg?auto=compress&cs=tinysrgb&w=600',
      nextEvent: 'Liverpool vs Manchester United',
      eventDate: 'January 5, 2025',
      isIconic: true,
      href: '/anfield-tickets'
    },
    {
      name: 'MetLife Stadium Tickets',
      city: 'New York, USA',
      capacity: '82,500',
      homeTeam: 'World Cup 2026',
      image: 'https://images.pexels.com/photos/1884574/pexels-photo-1884574.jpeg?auto=compress&cs=tinysrgb&w=600',
      nextEvent: 'World Cup Final',
      eventDate: 'July 19, 2026',
      isIconic: true,
      href: '/metlife-stadium-tickets'
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('sections.venues')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience football's greatest moments at the world's most iconic stadiums
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {venues.map((venue, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-1">
              <div className="relative">
                <div className="aspect-video bg-cover bg-center" style={{ backgroundImage: `url(${venue.image})` }}>
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                  {venue.isIconic && (
                    <div className="absolute top-3 right-3 bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center">
                      <Star className="w-3 h-3 mr-1 fill-current" />
                      Iconic
                    </div>
                  )}
                  <div className="absolute bottom-3 left-3 text-white">
                    <h3 className="text-lg font-bold mb-1">
                      <a href={venue.href} className="hover:text-green-200 transition-colors">
                        {venue.name}
                      </a>
                    </h3>
                    <p className="text-green-200 text-sm">{venue.city}</p>
                  </div>
                </div>
              </div>
              
              <div className="p-4">
                <div className="space-y-2 mb-3">
                  <div className="flex items-center text-gray-600 text-sm">
                    <Users className="w-3 h-3 mr-2" />
                    <span>{venue.capacity} capacity</span>
                  </div>
                  <div className="flex items-center text-gray-600 text-sm">
                    <MapPin className="w-3 h-3 mr-2" />
                    <span>{venue.homeTeam}</span>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-lg p-2 mb-3">
                  <div className="flex items-center text-blue-800 text-sm mb-1">
                    <Calendar className="w-3 h-3 mr-2" />
                    <span className="font-medium">Next Major Event</span>
                  </div>
                  <div className="text-gray-700">
                    <div className="font-medium text-sm">{venue.nextEvent}</div>
                    <div className="text-sm text-gray-600">{venue.eventDate}</div>
                  </div>
                </div>
                
                <a
                  href={venue.href}
                  className="block w-full bg-blue-600 text-white text-center py-2 px-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-sm"
                >
                  View Events
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VenuesSection;