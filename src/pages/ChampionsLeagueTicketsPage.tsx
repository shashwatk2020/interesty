import React from 'react';
import { Trophy, Calendar, MapPin, Users, Star, Shield, Crown } from 'lucide-react';

const ChampionsLeagueTicketsPage: React.FC = () => {
  const partnerLinks = [
    { name: 'Viagogo', url: '#', price: 'From €165', rating: '4.8/5', features: ['Instant Download', '100% Guarantee', 'Mobile Tickets'] },
    { name: 'StubHub', url: '#', price: 'From €148', rating: '4.7/5', features: ['FanProtect Guarantee', 'Last Minute Tickets', 'Price Alert'] },
    { name: 'Ticketmaster', url: '#', price: 'From €182', rating: '4.9/5', features: ['Official Partner', 'Verified Tickets', 'Customer Support'] },
    { name: 'LiveFootball', url: '#', price: 'From €159', rating: '4.6/5', features: ['Best Price Guarantee', 'Secure Payment', 'Expert Support'] }
  ];

  const topFixtures = [
    { match: 'Real Madrid vs Manchester City', date: 'March 12, 2025', venue: 'Santiago Bernabeu', price: 'From €285' },
    { match: 'Bayern Munich vs PSG', date: 'March 19, 2025', venue: 'Allianz Arena', price: 'From €245' },
    { match: 'Barcelona vs Liverpool', date: 'April 9, 2025', venue: 'Camp Nou', price: 'From €265' },
    { match: 'Champions League Final', date: 'May 31, 2025', venue: 'Munich', price: 'From €400' }
  ];

  const eliteClubs = [
    'Real Madrid', 'Barcelona', 'Bayern Munich', 'Manchester City', 'Liverpool', 'PSG',
    'AC Milan', 'Inter Milan', 'Juventus', 'Chelsea', 'Arsenal', 'Atletico Madrid'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Affiliate Section Top */}
      <div className="bg-blue-600 text-white py-3">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center space-x-8 text-sm">
            <span>🏆 UEFA Champions League Tickets</span>
            <span>⭐ Europe's Premier Competition</span>
            <span>🎫 Official Partner Tickets</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Trophy className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Champions League Tickets</h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Experience Europe's most prestigious club competition with authentic Champions League tickets
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full">32 Teams</span>
              <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full">125 Matches</span>
              <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full">Elite Clubs</span>
              <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full">Sep - May</span>
            </div>
          </div>
        </div>
      </div>

      {/* Partner Comparison Section */}
      <div className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Compare Champions League Ticket Prices</h2>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Champions League Tickets: Your Gateway to European Football Excellence</h2>
            
            <p className="text-lg text-gray-700 mb-6">
              Champions League tickets provide access to the most prestigious club competition in world football. The UEFA Champions League brings together Europe's elite clubs in a tournament that showcases the highest level of football talent, tactical innovation, and sporting drama. From the group stage battles to the iconic final, Champions League tickets offer unforgettable experiences at legendary stadiums across Europe, featuring the world's best players competing for club football's ultimate prize.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">The Pinnacle of Club Football</h3>
            <p className="text-gray-700 mb-6">
              The Champions League represents the absolute pinnacle of European club football, making Champions League tickets among the most coveted in world sport. Since its inception in 1955 as the European Cup, this competition has evolved into a global phenomenon that captivates billions of viewers worldwide. The tournament's unique format, combining group stage drama with knockout intensity, creates an unparalleled sporting spectacle that justifies the premium placed on Champions League tickets.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Elite Clubs and Legendary Venues</h3>
            <p className="text-gray-700 mb-4">
              Champions League tickets grant access to matches featuring Europe's most successful and storied clubs:
            </p>
            <div className="bg-blue-50 rounded-lg p-6 mb-6">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {eliteClubs.map((club, index) => (
                  <div key={index} className="flex items-center">
                    <Crown className="w-4 h-4 text-blue-600 mr-2" />
                    <span className="text-gray-700 text-sm">{club}</span>
                  </div>
                ))}
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Tournament Format and Structure</h3>
            <p className="text-gray-700 mb-4">
              The Champions League's format creates multiple opportunities to secure Champions League tickets throughout the season:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li><strong>Group Stage:</strong> 32 teams divided into 8 groups, playing home and away (96 matches)</li>
              <li><strong>Round of 16:</strong> Knockout phase begins with two-legged ties (16 matches)</li>
              <li><strong>Quarter-Finals:</strong> Elite eight compete for semi-final spots (8 matches)</li>
              <li><strong>Semi-Finals:</strong> Final four battle for the ultimate prize (4 matches)</li>
              <li><strong>Final:</strong> Single match at a neutral venue crowning European champions (1 match)</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Iconic Champions League Nights</h3>
            <p className="text-gray-700 mb-4">
              Champions League tickets provide access to some of football's most memorable moments:
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

            <h3 className="text-2xl font-bold text-gray-900 mb-4">The Champions League Final Experience</h3>
            <p className="text-gray-700 mb-6">
              Champions League Final tickets represent the ultimate football experience, combining sporting excellence with spectacular entertainment. The final, held at a different European city each year, transforms the host venue into the center of the football universe. The pre-match ceremony, featuring world-class entertainment and the iconic Champions League anthem, creates an atmosphere unmatched in club football. Champions League Final tickets are among the most sought-after in world sport, offering access to witness history in the making.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Legendary Stadiums and Atmospheres</h3>
            <p className="text-gray-700 mb-6">
              Champions League tickets provide access to Europe's most iconic football venues, each with its own unique atmosphere and history. From the intimidating Yellow Wall at Borussia Dortmund's Signal Iduna Park to the passionate support at Liverpool's Anfield, every Champions League venue offers a distinct experience. The Santiago Bernabeu's royal atmosphere, Camp Nou's cathedral-like grandeur, and San Siro's historic significance all contribute to making Champions League tickets so valuable to football enthusiasts worldwide.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Star Players and Tactical Masterclasses</h3>
            <p className="text-gray-700 mb-6">
              Champions League tickets offer the opportunity to witness the world's best players and managers competing at the highest level. From Kylian Mbappé's pace and skill to Erling Haaland's goal-scoring prowess, the Champions League showcases football's brightest stars. Tactical battles between elite managers like Pep Guardiola, Carlo Ancelotti, and Jürgen Klopp create fascinating subplots that make Champions League tickets valuable for both casual fans and tactical enthusiasts.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ticket Categories and Pricing Structure</h3>
            <p className="text-gray-700 mb-4">
              Champions League ticket prices vary significantly based on the match importance, teams involved, and venue:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li><strong>Group Stage Matches:</strong> Entry-level Champions League experience (€50-€150)</li>
              <li><strong>Round of 16:</strong> Knockout intensity begins (€80-€250)</li>
              <li><strong>Quarter-Finals:</strong> Elite eight competition (€120-€350)</li>
              <li><strong>Semi-Finals:</strong> Final four drama (€150-€500)</li>
              <li><strong>Final:</strong> Ultimate Champions League experience (€200-€2000+)</li>
              <li><strong>VIP Packages:</strong> Premium hospitality with dining and exclusive access (€500-€5000+)</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">How to Secure Champions League Tickets</h3>
            <p className="text-gray-700 mb-4">
              Obtaining Champions League tickets requires strategic planning and knowledge of various purchasing channels:
            </p>
            <ol className="list-decimal pl-6 mb-6 text-gray-700">
              <li><strong>Club Allocations:</strong> Each participating club receives tickets for their supporters</li>
              <li><strong>UEFA Official Sales:</strong> Limited public sales through UEFA's official channels</li>
              <li><strong>Authorized Resellers:</strong> Trusted platforms offering guaranteed authentic tickets</li>
              <li><strong>Hospitality Packages:</strong> Premium experiences with guaranteed availability</li>
              <li><strong>Local Partnerships:</strong> Official partners in host cities for specific matches</li>
            </ol>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">The Economic Impact of Champions League</h3>
            <p className="text-gray-700 mb-6">
              The Champions League generates enormous economic value for participating clubs, host cities, and the broader football ecosystem. Champions League tickets contribute to this economic engine, with the tournament distributing hundreds of millions of euros in prize money and commercial revenue. The global television audience of over 400 million viewers for the final alone demonstrates the competition's massive reach and the premium value placed on Champions League tickets.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Travel and Accommodation Planning</h3>
            <p className="text-gray-700 mb-6">
              Securing Champions League tickets is just the beginning of planning your European football adventure. Popular destinations like Madrid, Barcelona, Munich, and London see accommodation prices surge during Champions League matches, making early booking essential. Many fans combine Champions League tickets with city breaks, exploring Europe's cultural capitals while experiencing world-class football. Consider transportation between airports and stadiums, local customs, and language barriers when planning your Champions League experience.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">The Future of Champions League</h3>
            <p className="text-gray-700 mb-6">
              UEFA continues to evolve the Champions League format to maintain its status as the world's premier club competition. Recent format changes and future proposals aim to increase the number of matches while preserving the competition's prestige and excitement. These developments ensure that Champions League tickets will remain among the most valuable in world football, providing access to an ever-improving spectacle that combines sporting excellence with commercial innovation.
            </p>
          </article>
        </div>
      </div>

      {/* Bottom Affiliate Section */}
      <div className="bg-blue-600 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold mb-2">Ready to Experience Champions League Magic?</h3>
            <p className="text-blue-100">Secure your Champions League tickets and witness European football at its finest</p>
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

export default ChampionsLeagueTicketsPage;