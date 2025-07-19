import React from 'react';
import { Trophy, Calendar, MapPin, Users, Star, Shield, Crown } from 'lucide-react';

const Euro2028TicketsPage: React.FC = () => {
  const partnerLinks = [
    { name: 'Viagogo', url: '#', price: 'From £185', rating: '4.8/5', features: ['Instant Download', '100% Guarantee', 'Mobile Tickets'] },
    { name: 'StubHub', url: '#', price: 'From £168', rating: '4.7/5', features: ['FanProtect Guarantee', 'Last Minute Tickets', 'Price Alert'] },
    { name: 'Ticketmaster', url: '#', price: 'From £202', rating: '4.9/5', features: ['Official Partner', 'Verified Tickets', 'Customer Support'] },
    { name: 'LiveFootball', url: '#', price: 'From £179', rating: '4.6/5', features: ['Best Price Guarantee', 'Secure Payment', 'Expert Support'] }
  ];

  const topFixtures = [
    { match: 'England vs Germany', date: 'June 14, 2028', venue: 'Wembley Stadium', price: 'From £285' },
    { match: 'France vs Spain', date: 'June 18, 2028', venue: 'Tottenham Hotspur Stadium', price: 'From £245' },
    { match: 'Netherlands vs Italy', date: 'June 22, 2028', venue: 'Etihad Stadium', price: 'From £225' },
    { match: 'Euro 2028 Final', date: 'July 14, 2028', venue: 'Wembley Stadium', price: 'From £450' }
  ];

  const hostVenues = [
    'Wembley Stadium (London)', 'Old Trafford (Manchester)', 'Tottenham Hotspur Stadium (London)',
    'Etihad Stadium (Manchester)', 'Villa Park (Birmingham)', 'St. James\' Park (Newcastle)',
    'Aviva Stadium (Dublin)', 'Casement Park (Belfast)', 'Hampden Park (Glasgow)', 'Principality Stadium (Cardiff)'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Affiliate Section Top */}
      <div className="bg-blue-600 text-white py-3">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center space-x-8 text-sm">
            <span>🏆 UEFA Euro 2028 Tickets - UK & Ireland</span>
            <span>🎫 Official Tournament Tickets</span>
            <span>🇬🇧🇮🇪 Home Nations Championship</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-green-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Trophy className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">UEFA Euro 2028 Tickets</h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Experience the European Championship across England, Scotland, Wales, Northern Ireland & Republic of Ireland
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full">24 Teams</span>
              <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full">51 Matches</span>
              <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full">10 Venues</span>
              <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full">5 Countries</span>
            </div>
          </div>
        </div>
      </div>

      {/* Partner Comparison Section */}
      <div className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Compare Euro 2028 Ticket Prices</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnerLinks.map((partner, index) => (
              <div key={index} className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-blue-500 transition-all">
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{partner.name}</h3>
                  <div className="text-2xl font-bold text-blue-600 my-2">{partner.price}</div>
                  <div className="text-yellow-500">★★★★★ {partner.rating}</div>
                </div>
                <ul className="space-y-2 mb-6">
                  {partner.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <Shield className="w-4 h-4 text-blue-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={partner.url}
                  className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                >
                  View Tickets
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <article className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">UEFA Euro 2028 Tickets: Your Guide to the Home Nations Championship</h2>
            
            <p className="text-lg text-gray-700 mb-6">
              UEFA Euro 2028 tickets provide access to one of the most anticipated European Championships in history, as the tournament returns to the British Isles for the first time since Euro 1996. Hosted jointly by England, Scotland, Wales, Northern Ireland, and the Republic of Ireland, Euro 2028 tickets offer the unique opportunity to experience European football's premier tournament across some of the world's most iconic stadiums. From Wembley's grandeur to the passionate atmospheres of Celtic Park and the Aviva Stadium, Euro 2028 tickets guarantee unforgettable experiences.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">The Home Nations Unite for Euro 2028</h3>
            <p className="text-gray-700 mb-6">
              Euro 2028 tickets represent access to a truly historic tournament, marking the first time five nations have jointly hosted the European Championship. This unprecedented collaboration between England, Scotland, Wales, Northern Ireland, and the Republic of Ireland creates a unique tournament atmosphere that celebrates the rich football heritage of the British Isles. Euro 2028 tickets will allow fans to experience the diverse football cultures across these nations, from the traditional English game to the passionate Celtic support.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Iconic Venues Across Five Nations</h3>
            <p className="text-gray-700 mb-4">
              Euro 2028 tickets provide access to matches across ten world-class venues:
            </p>
            <div className="bg-blue-50 rounded-lg p-6 mb-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {hostVenues.map((venue, index) => (
                  <div key={index} className="flex items-center">
                    <MapPin className="w-4 h-4 text-blue-600 mr-2" />
                    <span className="text-gray-700 text-sm">{venue}</span>
                  </div>
                ))}
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Tournament Format and Structure</h3>
            <p className="text-gray-700 mb-4">
              Euro 2028 tickets cover a comprehensive tournament featuring 24 teams competing across multiple stages:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li><strong>Group Stage:</strong> 24 teams divided into 6 groups, playing 36 matches</li>
              <li><strong>Round of 16:</strong> Knockout phase begins with 8 matches</li>
              <li><strong>Quarter-Finals:</strong> Elite eight compete in 4 matches</li>
              <li><strong>Semi-Finals:</strong> Final four battle in 2 matches</li>
              <li><strong>Final:</strong> Championship match at Wembley Stadium</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Euro 2028 Fixtures</h3>
            <p className="text-gray-700 mb-4">
              Euro 2028 tickets provide access to compelling matchups throughout the tournament:
            </p>
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              {topFixtures.map((fixture, index) => (
                <div key={index} className="flex justify-between items-center py-3 border-b border-gray-200 last:border-b-0">
                  <div>
                    <h4 className="font-semibold text-gray-900">{fixture.match}</h4>
                    <p className="text-sm text-gray-600">{fixture.date} • {fixture.venue}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-blue-600">{fixture.price}</p>
                  </div>
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">England's Home Advantage</h3>
            <p className="text-gray-700 mb-6">
              Euro 2028 tickets offer the opportunity to see England compete on home soil for the first time since Euro 1996. With matches at Wembley, Old Trafford, and other iconic English venues, England's Euro 2028 tickets are expected to be among the most sought-after. The Three Lions' recent success, including their World Cup semi-final and Euro 2020 final appearances, has created unprecedented excitement for their home tournament campaign.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Celtic Nations and Football Passion</h3>
            <p className="text-gray-700 mb-6">
              Euro 2028 tickets provide access to the passionate football cultures of Scotland, Wales, Northern Ireland, and the Republic of Ireland. Each nation brings its unique atmosphere and traditions to the tournament, from Scotland's Tartan Army to Wales' passionate support that carried them to Euro 2016 success. The inclusion of venues like Hampden Park, Principality Stadium, and the Aviva Stadium ensures that Euro 2028 tickets offer diverse and authentic football experiences.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Wembley Stadium: The Tournament Centerpiece</h3>
            <p className="text-gray-700 mb-6">
              Euro 2028 Final tickets at Wembley Stadium represent the ultimate European football experience. As the tournament's flagship venue, Wembley will host the opening match, semi-finals, and final, making Wembley Euro 2028 tickets the most prestigious in the tournament. The stadium's recent renovations and its status as the "Home of Football" ensure that Euro 2028 Final tickets provide an unparalleled sporting experience.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">European Football's Elite Teams</h3>
            <p className="text-gray-700 mb-6">
              Euro 2028 tickets provide access to matches featuring Europe's finest national teams. From defending champions Italy to perennial contenders like France, Spain, and Germany, the tournament showcases the continent's best talent. The presence of emerging nations and traditional powerhouses ensures that Euro 2028 tickets offer compelling matchups throughout the tournament, with every match carrying significance for European football supremacy.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ticket Categories and Pricing Structure</h3>
            <p className="text-gray-700 mb-4">
              Euro 2028 ticket prices vary based on match importance, venue, and seating category:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li><strong>Group Stage Matches:</strong> Entry-level tournament experience (£50-£150)</li>
              <li><strong>Round of 16:</strong> Knockout intensity begins (£80-£250)</li>
              <li><strong>Quarter-Finals:</strong> Elite eight competition (£120-£350)</li>
              <li><strong>Semi-Finals:</strong> Final four drama at Wembley (£200-£600)</li>
              <li><strong>Final:</strong> Championship match experience (£250-£1200+)</li>
              <li><strong>Hospitality Packages:</strong> Premium experience with dining (£500-£3000+)</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">How to Secure Euro 2028 Tickets</h3>
            <p className="text-gray-700 mb-4">
              Obtaining Euro 2028 tickets requires strategic planning across multiple channels:
            </p>
            <ol className="list-decimal pl-6 mb-6 text-gray-700">
              <li><strong>UEFA Official Sales:</strong> Primary ticket releases through UEFA's official platform</li>
              <li><strong>National Association Allocations:</strong> Tickets through home nation football associations</li>
              <li><strong>Authorized Resellers:</strong> Trusted platforms offering guaranteed authentic tickets</li>
              <li><strong>Hospitality Packages:</strong> Premium experiences with guaranteed availability</li>
              <li><strong>Local Partnerships:</strong> Official partners in host cities and regions</li>
            </ol>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Travel and Accommodation Planning</h3>
            <p className="text-gray-700 mb-6">
              Euro 2028 tickets require comprehensive travel planning across five nations. The tournament's unique multi-country format allows fans to experience different cultures and cities within a relatively compact geographical area. London, Manchester, Birmingham, Dublin, and other host cities offer excellent tourist attractions, making Euro 2028 tickets valuable for combining football with cultural exploration. Early accommodation booking is essential, as hotels across all host cities will experience unprecedented demand.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Cultural Impact and Legacy</h3>
            <p className="text-gray-700 mb-6">
              Euro 2028 tickets provide access to a tournament that will leave a lasting legacy across the British Isles. The championship's emphasis on unity, diversity, and football excellence aligns with the region's rich sporting heritage. The tournament's impact extends beyond football, promoting tourism, cultural exchange, and international cooperation. Euro 2028 tickets represent participation in a historic sporting event that will be remembered for generations.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Technology and Innovation</h3>
            <p className="text-gray-700 mb-6">
              Euro 2028 tickets will incorporate cutting-edge technology to enhance the fan experience. From digital ticketing systems to augmented reality features, the tournament promises to set new standards for major sporting events. Mobile Euro 2028 tickets will provide seamless entry, while innovative stadium technologies will create immersive experiences that complement the on-field action.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Sustainability and Environmental Responsibility</h3>
            <p className="text-gray-700 mb-6">
              Euro 2028 tickets support a tournament committed to environmental sustainability and social responsibility. The championship's green initiatives include carbon-neutral operations, sustainable transportation options, and community engagement programs. By purchasing Euro 2028 tickets, fans contribute to a tournament that prioritizes environmental stewardship while delivering world-class football entertainment.
            </p>
          </article>
        </div>
      </div>

      {/* Bottom Affiliate Section */}
      <div className="bg-blue-600 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold mb-2">Ready to Experience Euro 2028?</h3>
            <p className="text-blue-100">Secure your Euro 2028 tickets for the ultimate European Championship experience</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {partnerLinks.map((partner, index) => (
              <a
                key={index}
                href={partner.url}
                className="bg-white bg-opacity-10 rounded-lg p-4 text-center hover:bg-opacity-20 transition-all"
              >
                <div className="font-bold text-lg">{partner.name}</div>
                <div className="text-blue-200">{partner.price}</div>
                <div className="text-sm text-blue-100 mt-2">View Tickets →</div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Euro2028TicketsPage;