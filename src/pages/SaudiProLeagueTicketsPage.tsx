import React from 'react';
import { Crown, Calendar, MapPin, Users, Star, Shield, Trophy } from 'lucide-react';

const SaudiProLeagueTicketsPage: React.FC = () => {
  const partnerLinks = [
    { name: 'Viagogo', url: '#', price: 'From $85', rating: '4.8/5', features: ['Instant Download', '100% Guarantee', 'Mobile Tickets'] },
    { name: 'StubHub', url: '#', price: 'From $78', rating: '4.7/5', features: ['FanProtect Guarantee', 'Last Minute Tickets', 'Price Alert'] },
    { name: 'Ticketmaster', url: '#', price: 'From $92', rating: '4.9/5', features: ['Official Partner', 'Verified Tickets', 'Customer Support'] },
    { name: 'LiveFootball', url: '#', price: 'From $82', rating: '4.6/5', features: ['Best Price Guarantee', 'Secure Payment', 'Expert Support'] }
  ];

  const topFixtures = [
    { match: 'Al Hilal vs Al Nassr', date: 'February 14, 2025', venue: 'King Fahd Stadium', price: 'From $185' },
    { match: 'Al Ittihad vs Al Ahli', date: 'March 8, 2025', venue: 'King Abdullah Sports City', price: 'From $145' },
    { match: 'Al Nassr vs Al Ittihad', date: 'April 12, 2025', venue: 'Mrsool Park', price: 'From $165' },
    { match: 'Saudi Pro League Final', date: 'May 25, 2025', venue: 'TBD', price: 'From $225' }
  ];

  const saudiClubs = [
    'Al Hilal', 'Al Nassr', 'Al Ittihad', 'Al Ahli', 'Al Shabab', 'Al Ettifaq',
    'Al Taawoun', 'Al Fayha', 'Al Raed', 'Al Fateh', 'Damac FC', 'Al Riyadh'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Affiliate Section Top */}
      <div className="bg-green-600 text-white py-3">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center space-x-8 text-sm">
            <span>🇸🇦 Saudi Pro League Tickets</span>
            <span>⭐ Cristiano Ronaldo & World Stars</span>
            <span>🏆 Middle East's Premier League</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-green-900 via-green-800 to-gold-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Crown className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Saudi Pro League Tickets</h1>
            <p className="text-xl md:text-2xl text-green-100 mb-8">
              Experience the Middle East's premier football league featuring global superstars and world-class competition
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full">18 Teams</span>
              <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full">306 Matches</span>
              <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full">Cristiano Ronaldo</span>
              <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full">Aug - May</span>
            </div>
          </div>
        </div>
      </div>

      {/* Partner Comparison Section */}
      <div className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Compare Saudi Pro League Ticket Prices</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnerLinks.map((partner, index) => (
              <div key={index} className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-green-500 transition-all">
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{partner.name}</h3>
                  <div className="text-2xl font-bold text-green-600 my-2">{partner.price}</div>
                  <div className="text-yellow-500">★★★★★ {partner.rating}</div>
                </div>
                <ul className="space-y-2 mb-6">
                  {partner.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <Shield className="w-4 h-4 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={partner.url}
                  className="block w-full bg-green-600 text-white text-center py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold"
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
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Saudi Pro League Tickets: Your Gateway to Middle Eastern Football Excellence</h2>
            
            <p className="text-lg text-gray-700 mb-6">
              Saudi Pro League tickets provide access to the Middle East's most prestigious football competition, featuring global superstars and rapidly evolving football excellence. The Saudi Professional League has transformed into a world-class destination for elite players, with Saudi Pro League tickets offering the opportunity to witness legends like Cristiano Ronaldo, Karim Benzema, and N'Golo Kanté competing at the highest level. From Al Nassr tickets featuring CR7 to Al Hilal tickets showcasing tactical brilliance, Saudi Pro League tickets guarantee world-class football entertainment.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">The Saudi Football Revolution</h3>
            <p className="text-gray-700 mb-6">
              Saudi Pro League tickets represent access to a football revolution that has captured global attention. Saudi Arabia's ambitious Vision 2030 program has transformed the domestic league into a destination for world-class talent, making Saudi Pro League tickets increasingly valuable. The league's strategic investments in infrastructure, player acquisitions, and fan experience have elevated Saudi football to unprecedented heights, with Saudi Pro League tickets providing access to this remarkable transformation.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Cristiano Ronaldo and the Al Nassr Phenomenon</h3>
            <p className="text-gray-700 mb-6">
              Al Nassr tickets have become the most sought-after Saudi Pro League tickets following Cristiano Ronaldo's historic arrival in 2023. The Portuguese superstar's presence has revolutionized Saudi football, with CR7's performances continuing to break records and attract global audiences. Al Nassr tickets provide the opportunity to witness one of football's greatest players competing in the Saudi Pro League, bringing his legendary goal-scoring ability and winning mentality to Middle Eastern football.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Elite Clubs and Global Stars</h3>
            <p className="text-gray-700 mb-4">
              Saudi Pro League tickets feature access to matches involving the kingdom's most successful clubs:
            </p>
            <div className="bg-green-50 rounded-lg p-6 mb-6">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {saudiClubs.map((club, index) => (
                  <div key={index} className="flex items-center">
                    <Crown className="w-4 h-4 text-green-600 mr-2" />
                    <span className="text-gray-700 text-sm">{club}</span>
                  </div>
                ))}
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">World-Class Player Acquisitions</h3>
            <p className="text-gray-700 mb-6">
              Saudi Pro League tickets offer opportunities to witness an unprecedented collection of global football talent. Beyond Cristiano Ronaldo, the league has attracted players like Karim Benzema to Al Ittihad, N'Golo Kanté to Al Ittihad, and numerous other world-class performers. These strategic acquisitions have made Saudi Pro League tickets valuable for witnessing elite football talent competing in a rapidly developing league environment.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Saudi Pro League Rivalries</h3>
            <p className="text-gray-700 mb-4">
              Saudi Pro League tickets provide access to intense rivalries and marquee matchups:
            </p>
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              {topFixtures.map((fixture, index) => (
                <div key={index} className="flex justify-between items-center py-3 border-b border-gray-200 last:border-b-0">
                  <div>
                    <h4 className="font-semibold text-gray-900">{fixture.match}</h4>
                    <p className="text-sm text-gray-600">{fixture.date} • {fixture.venue}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-green-600">{fixture.price}</p>
                  </div>
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">State-of-the-Art Stadiums and Facilities</h3>
            <p className="text-gray-700 mb-6">
              Saudi Pro League tickets provide access to world-class stadiums that showcase Saudi Arabia's commitment to football excellence. Venues like King Fahd Stadium, King Abdullah Sports City, and Mrsool Park offer cutting-edge facilities, climate-controlled environments, and premium amenities that enhance the value of Saudi Pro League tickets. The kingdom's investment in stadium infrastructure ensures that every Saudi Pro League ticket provides a comfortable and memorable experience.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Cultural Experience and Saudi Hospitality</h3>
            <p className="text-gray-700 mb-6">
              Saudi Pro League tickets offer more than just football – they provide access to rich Saudi culture and legendary hospitality. The kingdom's opening to international tourism has made Saudi Pro League tickets accessible to global fans, who can experience traditional Saudi culture alongside world-class football. The combination of modern football excellence and authentic cultural experiences makes Saudi Pro League tickets unique in the global football landscape.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Al Hilal: Asian Champions and Domestic Powerhouse</h3>
            <p className="text-gray-700 mb-6">
              Al Hilal tickets provide access to matches featuring one of Asia's most successful clubs. With multiple AFC Champions League titles and domestic dominance, Al Hilal represents Saudi football excellence at its finest. Al Hilal tickets offer the opportunity to witness tactical sophistication and competitive intensity that has made the club a powerhouse in both Saudi and Asian football competitions.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Youth Development and Local Talent</h3>
            <p className="text-gray-700 mb-6">
              Saudi Pro League tickets support a league committed to developing local talent alongside international stars. The kingdom's investment in youth academies and development programs ensures that Saudi players continue to improve and compete at the highest levels. Saudi Pro League tickets provide access to matches where emerging Saudi talent learns from world-class international players, creating a unique development environment.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ticket Categories and Pricing Structure</h3>
            <p className="text-gray-700 mb-4">
              Saudi Pro League ticket prices offer excellent value for world-class football entertainment:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li><strong>Regular Season Matches:</strong> Accessible pricing for quality football ($30-$100)</li>
              <li><strong>Star Player Matches:</strong> Premium pricing for Ronaldo and other stars ($80-$200)</li>
              <li><strong>Derby Matches:</strong> Intense local rivalries ($60-$150)</li>
              <li><strong>Championship Matches:</strong> Title-deciding fixtures ($100-$300)</li>
              <li><strong>AFC Champions League:</strong> Continental competition ($50-$180)</li>
              <li><strong>VIP Experiences:</strong> Premium hospitality packages ($200-$800+)</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">How to Secure Saudi Pro League Tickets</h3>
            <p className="text-gray-700 mb-4">
              Obtaining Saudi Pro League tickets involves several reliable channels:
            </p>
            <ol className="list-decimal pl-6 mb-6 text-gray-700">
              <li><strong>Club Official Sales:</strong> Direct from Saudi Pro League teams</li>
              <li><strong>Saudi Football Federation:</strong> Official league ticket platform</li>
              <li><strong>Authorized International Resellers:</strong> Trusted global platforms</li>
              <li><strong>Tourism Packages:</strong> Combined travel and ticket experiences</li>
              <li><strong>Local Ticket Offices:</strong> Venue-specific sales in Saudi Arabia</li>
            </ol>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">International Appeal and Global Reach</h3>
            <p className="text-gray-700 mb-6">
              Saudi Pro League tickets have gained international appeal due to the league's high-profile signings and improved quality. The presence of global superstars has attracted worldwide attention, making Saudi Pro League tickets valuable for international football fans seeking unique experiences. The league's growing broadcast reach and social media presence ensure that Saudi Pro League tickets provide access to globally relevant football entertainment.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Travel and Tourism Integration</h3>
            <p className="text-gray-700 mb-6">
              Saudi Pro League tickets can be combined with tourism experiences as Saudi Arabia opens to international visitors. The kingdom's rich history, stunning landscapes, and modern cities provide excellent backdrops for football tourism. Many international fans combine Saudi Pro League tickets with visits to historical sites, luxury resorts, and cultural attractions, creating comprehensive travel experiences that extend beyond football.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Technology and Innovation</h3>
            <p className="text-gray-700 mb-6">
              Saudi Pro League tickets provide access to technologically advanced football experiences. The league's embrace of digital innovation, from mobile ticketing to enhanced stadium technology, ensures that Saudi Pro League tickets offer cutting-edge entertainment. The kingdom's investment in sports technology and fan engagement creates unique experiences that set new standards for football entertainment in the region.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">The Future of Saudi Football</h3>
            <p className="text-gray-700 mb-6">
              Saudi Pro League tickets represent investment in the future of Middle Eastern football. The kingdom's long-term vision for football development, combined with continued investment in infrastructure and talent, ensures that Saudi Pro League tickets will become increasingly valuable. As Saudi Arabia prepares to potentially host major international tournaments, the domestic league serves as a foundation for the country's football ambitions.
            </p>
          </article>
        </div>
      </div>

      {/* Bottom Affiliate Section */}
      <div className="bg-green-600 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold mb-2">Ready to Experience Saudi Pro League?</h3>
            <p className="text-green-100">Secure your Saudi Pro League tickets and witness Middle Eastern football excellence</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {partnerLinks.map((partner, index) => (
              <a
                key={index}
                href={partner.url}
                className="bg-white bg-opacity-10 rounded-lg p-4 text-center hover:bg-opacity-20 transition-all"
              >
                <div className="font-bold text-lg">{partner.name}</div>
                <div className="text-green-200">{partner.price}</div>
                <div className="text-sm text-green-100 mt-2">View Tickets →</div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaudiProLeagueTicketsPage;