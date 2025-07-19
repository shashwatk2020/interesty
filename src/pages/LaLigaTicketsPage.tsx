import React from 'react';
import { Crown, Calendar, MapPin, Users, Star, Shield, Trophy } from 'lucide-react';

const LaLigaTicketsPage: React.FC = () => {
  const partnerLinks = [
    { name: 'Viagogo', url: '#', price: 'From €125', rating: '4.8/5', features: ['Instant Download', '100% Guarantee', 'Mobile Tickets'] },
    { name: 'StubHub', url: '#', price: 'From €118', rating: '4.7/5', features: ['FanProtect Guarantee', 'Last Minute Tickets', 'Price Alert'] },
    { name: 'Ticketmaster', url: '#', price: 'From €135', rating: '4.9/5', features: ['Official Partner', 'Verified Tickets', 'Customer Support'] },
    { name: 'LiveFootball', url: '#', price: 'From €122', rating: '4.6/5', features: ['Best Price Guarantee', 'Secure Payment', 'Expert Support'] }
  ];

  const topFixtures = [
    { match: 'Real Madrid vs Barcelona', date: 'December 23, 2024', venue: 'Santiago Bernabeu', price: 'From €285' },
    { match: 'Atletico Madrid vs Real Madrid', date: 'February 9, 2025', venue: 'Metropolitano', price: 'From €195' },
    { match: 'Barcelona vs Atletico Madrid', date: 'March 16, 2025', venue: 'Camp Nou', price: 'From €165' },
    { match: 'Sevilla vs Real Betis', date: 'April 6, 2025', venue: 'Ramon Sanchez Pizjuan', price: 'From €85' }
  ];

  const laLigaClubs = [
    'Real Madrid', 'Barcelona', 'Atletico Madrid', 'Sevilla', 'Real Sociedad', 'Athletic Bilbao',
    'Valencia', 'Villarreal', 'Real Betis', 'Osasuna', 'Girona', 'Las Palmas'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Affiliate Section Top */}
      <div className="bg-red-600 text-white py-3">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center space-x-8 text-sm">
            <span>🇪🇸 La Liga Tickets - Spain's Premier League</span>
            <span>⚽ El Clasico & Madrid Derby</span>
            <span>🏆 Real Madrid vs Barcelona</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-red-900 via-red-800 to-yellow-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Crown className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">La Liga Tickets</h1>
            <p className="text-xl md:text-2xl text-red-100 mb-8">
              Experience Spain's elite football league with authentic La Liga tickets
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full">20 Teams</span>
              <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full">380 Matches</span>
              <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full">El Clasico</span>
              <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full">Aug - May</span>
            </div>
          </div>
        </div>
      </div>

      {/* Partner Comparison Section */}
      <div className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Compare La Liga Ticket Prices</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnerLinks.map((partner, index) => (
              <div key={index} className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-red-500 transition-all">
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{partner.name}</h3>
                  <div className="text-2xl font-bold text-red-600 my-2">{partner.price}</div>
                  <div className="text-yellow-500">★★★★★ {partner.rating}</div>
                </div>
                <ul className="space-y-2 mb-6">
                  {partner.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <Shield className="w-4 h-4 text-red-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={partner.url}
                  className="block w-full bg-red-600 text-white text-center py-3 rounded-lg hover:bg-red-700 transition-colors font-semibold"
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
            <h2 className="text-3xl font-bold text-gray-900 mb-6">La Liga Tickets: Your Gateway to Spanish Football Excellence</h2>
            
            <p className="text-lg text-gray-700 mb-6">
              La Liga tickets provide access to one of the world's most prestigious and technically gifted football leagues. Spain's top division, officially known as Primera División, showcases the beautiful game at its finest, featuring legendary clubs like Real Madrid and Barcelona, world-class players, and tactical sophistication that has influenced football globally. La Liga tickets offer the opportunity to witness El Clasico, experience passionate Spanish football culture, and see some of the most skillful players in world football.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">The Pinnacle of Spanish Football</h3>
            <p className="text-gray-700 mb-6">
              La Liga represents the highest level of Spanish football and consistently ranks among the world's top leagues. La Liga tickets grant access to a competition that has produced more UEFA Champions League winners than any other domestic league in recent decades. The league's emphasis on technical skill, tactical intelligence, and attacking football creates an entertaining spectacle that makes La Liga tickets highly sought after by football purists and casual fans alike.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Legendary Clubs and Historic Rivalries</h3>
            <p className="text-gray-700 mb-4">
              La Liga tickets feature access to matches involving Spain's most successful and storied clubs:
            </p>
            <div className="bg-red-50 rounded-lg p-6 mb-6">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {laLigaClubs.map((club, index) => (
                  <div key={index} className="flex items-center">
                    <Crown className="w-4 h-4 text-red-600 mr-2" />
                    <span className="text-gray-700 text-sm">{club}</span>
                  </div>
                ))}
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">El Clasico: The Greatest Rivalry</h3>
            <p className="text-gray-700 mb-6">
              El Clasico tickets represent the ultimate La Liga experience, featuring the historic rivalry between Real Madrid and Barcelona. This fixture transcends sport to become a cultural and political statement, with global audiences exceeding 500 million viewers. El Clasico tickets are among the most coveted in world football, offering access to matches that often determine La Liga titles and feature the world's best players competing at the highest level.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Key La Liga Fixtures and Derbies</h3>
            <p className="text-gray-700 mb-4">
              La Liga tickets provide access to numerous compelling fixtures throughout the season:
            </p>
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              {topFixtures.map((fixture, index) => (
                <div key={index} className="flex justify-between items-center py-3 border-b border-gray-200 last:border-b-0">
                  <div>
                    <h4 className="font-semibold text-gray-900">{fixture.match}</h4>
                    <p className="text-sm text-gray-600">{fixture.date} • {fixture.venue}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-red-600">{fixture.price}</p>
                  </div>
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Iconic Stadiums and Passionate Atmospheres</h3>
            <p className="text-gray-700 mb-6">
              La Liga tickets provide access to some of football's most iconic venues. The Santiago Bernabeu's royal atmosphere, Camp Nou's cathedral-like grandeur, and the Metropolitano's modern intensity each offer unique experiences. Spanish football culture emphasizes technical appreciation and passionate support, creating atmospheres that enhance the value of La Liga tickets. The diversity of venues, from historic stadiums to modern arenas, ensures that every La Liga ticket offers a distinct experience.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">World-Class Players and Technical Excellence</h3>
            <p className="text-gray-700 mb-6">
              La Liga tickets offer opportunities to witness some of football's greatest talents. The league has historically attracted and developed world-class players, from Lionel Messi and Cristiano Ronaldo to current stars like Karim Benzema, Luka Modric, and emerging talents. La Liga's emphasis on technical skill and tactical sophistication creates an environment where players can showcase their abilities at the highest level, making La Liga tickets valuable for appreciating football artistry.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Tactical Innovation and Playing Styles</h3>
            <p className="text-gray-700 mb-6">
              La Liga tickets provide access to matches featuring diverse tactical approaches and playing styles. From Real Madrid's counter-attacking brilliance to Barcelona's possession-based philosophy, La Liga showcases various football methodologies. The league's influence on global football tactics, including the development of tiki-taka and high-pressing systems, makes La Liga tickets valuable for students of the game and tactical enthusiasts.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ticket Categories and Pricing Structure</h3>
            <p className="text-gray-700 mb-4">
              La Liga ticket prices vary significantly based on the match importance and teams involved:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li><strong>El Clasico:</strong> Premium pricing for the ultimate rivalry (€200-€800+)</li>
              <li><strong>Madrid Derby:</strong> High-demand local rivalry (€100-€400)</li>
              <li><strong>Big Club Matches:</strong> Real Madrid, Barcelona, Atletico fixtures (€80-€300)</li>
              <li><strong>Mid-Table Encounters:</strong> Competitive matches at reasonable prices (€40-€120)</li>
              <li><strong>Lower-Profile Fixtures:</strong> Accessible entry to La Liga (€25-€80)</li>
              <li><strong>VIP Experiences:</strong> Premium hospitality with exclusive access (€300-€1500+)</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">How to Secure La Liga Tickets</h3>
            <p className="text-gray-700 mb-4">
              Obtaining La Liga tickets requires understanding various purchasing channels:
            </p>
            <ol className="list-decimal pl-6 mb-6 text-gray-700">
              <li><strong>Club Official Sales:</strong> Direct from Real Madrid, Barcelona, and other clubs</li>
              <li><strong>Season Tickets:</strong> Best value for regular attendance at specific clubs</li>
              <li><strong>General Public Sales:</strong> Limited availability for popular matches</li>
              <li><strong>Authorized Resellers:</strong> Trusted platforms with guaranteed authentic tickets</li>
              <li><strong>Hospitality Packages:</strong> Premium experiences with guaranteed availability</li>
            </ol>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Spanish Football Culture and Traditions</h3>
            <p className="text-gray-700 mb-6">
              La Liga tickets provide access to rich Spanish football culture that extends beyond the matches themselves. The tradition of late kickoffs, passionate supporter groups, and technical appreciation creates a unique atmosphere. Spanish football's emphasis on youth development and technical training is evident in La Liga matches, where even smaller clubs display impressive technical ability and tactical awareness.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">International Appeal and Global Reach</h3>
            <p className="text-gray-700 mb-6">
              La Liga's global popularity makes La Liga tickets attractive to international visitors. The league's broadcast reach extends to over 180 countries, creating a truly international fanbase. Many tourists combine La Liga tickets with Spanish cultural experiences, exploring cities like Madrid, Barcelona, and Seville while attending world-class football matches. This international appeal ensures strong demand for La Liga tickets from visitors worldwide.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Youth Development and Future Stars</h3>
            <p className="text-gray-700 mb-6">
              La Liga tickets offer opportunities to witness emerging talents from Spain's renowned youth academies. La Masia (Barcelona) and Real Madrid's academy have produced numerous world-class players, and La Liga matches often feature young talents making their mark. The league's commitment to developing Spanish and international youth ensures that La Liga tickets provide access to future stars before they achieve global recognition.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Economic Impact and Commercial Success</h3>
            <p className="text-gray-700 mb-6">
              La Liga's commercial success and economic impact extend beyond Spain's borders. The league's global marketing efforts and strategic partnerships have increased the value and demand for La Liga tickets. Revenue from broadcasting, sponsorship, and matchday income supports the high quality of football that makes La Liga tickets worthwhile investments for football fans seeking premium entertainment.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">The Future of La Liga</h3>
            <p className="text-gray-700 mb-6">
              La Liga continues to evolve and innovate to maintain its position among the world's elite football leagues. Technological innovations, improved stadium experiences, and strategic global expansion ensure that La Liga tickets will remain valuable and sought-after. The league's commitment to maintaining competitive balance while preserving its technical and tactical excellence guarantees that future La Liga tickets will continue to offer world-class football experiences.
            </p>
          </article>
        </div>
      </div>

      {/* Bottom Affiliate Section */}
      <div className="bg-red-600 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold mb-2">Ready to Experience La Liga Magic?</h3>
            <p className="text-red-100">Secure your La Liga tickets and witness Spanish football excellence</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {partnerLinks.map((partner, index) => (
              <a
                key={index}
                href={partner.url}
                className="bg-white bg-opacity-10 rounded-lg p-4 text-center hover:bg-opacity-20 transition-all"
              >
                <div className="font-bold text-lg">{partner.name}</div>
                <div className="text-red-200">{partner.price}</div>
                <div className="text-sm text-red-100 mt-2">View Tickets →</div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaLigaTicketsPage;