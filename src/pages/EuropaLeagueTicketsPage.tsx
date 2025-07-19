import React from 'react';
import { Trophy, Calendar, MapPin, Users, Star, Shield, Award } from 'lucide-react';

const EuropaLeagueTicketsPage: React.FC = () => {
  const partnerLinks = [
    { name: 'Viagogo', url: '#', price: 'From €85', rating: '4.8/5', features: ['Instant Download', '100% Guarantee', 'Mobile Tickets'] },
    { name: 'StubHub', url: '#', price: 'From €78', rating: '4.7/5', features: ['FanProtect Guarantee', 'Last Minute Tickets', 'Price Alert'] },
    { name: 'Ticketmaster', url: '#', price: 'From €92', rating: '4.9/5', features: ['Official Partner', 'Verified Tickets', 'Customer Support'] },
    { name: 'LiveFootball', url: '#', price: 'From €82', rating: '4.6/5', features: ['Best Price Guarantee', 'Secure Payment', 'Expert Support'] }
  ];

  const topFixtures = [
    { match: 'AS Roma vs Sevilla', date: 'March 14, 2025', venue: 'Stadio Olimpico', price: 'From €125' },
    { match: 'West Ham vs Ajax', date: 'March 21, 2025', venue: 'London Stadium', price: 'From €95' },
    { match: 'Eintracht Frankfurt vs Rangers', date: 'April 11, 2025', venue: 'Deutsche Bank Park', price: 'From €105' },
    { match: 'Europa League Final', date: 'May 21, 2025', venue: 'Bilbao', price: 'From €180' }
  ];

  const competingClubs = [
    'AS Roma', 'Sevilla', 'West Ham United', 'Ajax', 'Eintracht Frankfurt', 'Rangers',
    'Real Sociedad', 'Atalanta', 'Villarreal', 'Bayer Leverkusen', 'Brighton', 'Union Berlin'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Affiliate Section Top */}
      <div className="bg-orange-600 text-white py-3">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center space-x-8 text-sm">
            <span>🏆 UEFA Europa League Tickets</span>
            <span>⚽ Europe's Second-Tier Excellence</span>
            <span>🎫 Authentic Partner Tickets</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-orange-900 via-orange-800 to-red-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Award className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Europa League Tickets</h1>
            <p className="text-xl md:text-2xl text-orange-100 mb-8">
              Experience Europe's exciting second-tier competition with authentic Europa League tickets
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full">32 Teams</span>
              <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full">205 Matches</span>
              <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full">Knockout Drama</span>
              <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full">Sep - May</span>
            </div>
          </div>
        </div>
      </div>

      {/* Partner Comparison Section */}
      <div className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Compare Europa League Ticket Prices</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnerLinks.map((partner, index) => (
              <div key={index} className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-orange-500 transition-all">
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{partner.name}</h3>
                  <div className="text-2xl font-bold text-orange-600 my-2">{partner.price}</div>
                  <div className="text-yellow-500">★★★★★ {partner.rating}</div>
                </div>
                <ul className="space-y-2 mb-6">
                  {partner.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <Shield className="w-4 h-4 text-orange-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={partner.url}
                  className="block w-full bg-orange-600 text-white text-center py-3 rounded-lg hover:bg-orange-700 transition-colors font-semibold"
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
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Europa League Tickets: Your Gateway to European Football Excellence</h2>
            
            <p className="text-lg text-gray-700 mb-6">
              Europa League tickets provide access to one of Europe's most exciting and competitive football tournaments. The UEFA Europa League, often considered the continent's second-tier competition, delivers thrilling knockout football, passionate atmospheres, and opportunities for clubs to achieve European glory. With Europa League tickets, fans can witness emerging talents, tactical innovations, and dramatic matches that often surpass the entertainment value of more prestigious competitions.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">The Excitement of Europe's Second Tier</h3>
            <p className="text-gray-700 mb-6">
              The Europa League offers a unique blend of established European clubs and ambitious teams seeking continental success. Europa League tickets grant access to matches featuring clubs with rich histories alongside emerging forces in European football. The competition's format, with its extensive group stage and knockout rounds, creates numerous opportunities for upsets, breakthrough performances, and memorable moments that make Europa League tickets valuable for any football enthusiast.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Competing Clubs and Rising Stars</h3>
            <p className="text-gray-700 mb-4">
              Europa League tickets feature access to matches with diverse and competitive clubs:
            </p>
            <div className="bg-orange-50 rounded-lg p-6 mb-6">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {competingClubs.map((club, index) => (
                  <div key={index} className="flex items-center">
                    <Trophy className="w-4 h-4 text-orange-600 mr-2" />
                    <span className="text-gray-700 text-sm">{club}</span>
                  </div>
                ))}
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Tournament Structure and Format</h3>
            <p className="text-gray-700 mb-4">
              The Europa League's comprehensive format provides multiple opportunities to secure Europa League tickets:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li><strong>Group Stage:</strong> 32 teams in 8 groups, playing home and away (96 matches)</li>
              <li><strong>Knockout Round Playoffs:</strong> Additional teams from Champions League join (16 matches)</li>
              <li><strong>Round of 16:</strong> Knockout phase intensifies (16 matches)</li>
              <li><strong>Quarter-Finals:</strong> Elite eight compete for semi-final spots (8 matches)</li>
              <li><strong>Semi-Finals:</strong> Final four battle for the ultimate prize (4 matches)</li>
              <li><strong>Final:</strong> Single match at a neutral venue (1 match)</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Europa League Fixtures</h3>
            <p className="text-gray-700 mb-4">
              Europa League tickets provide access to compelling matchups throughout the tournament:
            </p>
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              {topFixtures.map((fixture, index) => (
                <div key={index} className="flex justify-between items-center py-3 border-b border-gray-200 last:border-b-0">
                  <div>
                    <h4 className="font-semibold text-gray-900">{fixture.match}</h4>
                    <p className="text-sm text-gray-600">{fixture.date} • {fixture.venue}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-orange-600">{fixture.price}</p>
                  </div>
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">The Europa League Final Experience</h3>
            <p className="text-gray-700 mb-6">
              Europa League Final tickets offer access to a spectacular conclusion to the European season. The final, held at a different European venue each year, combines high-quality football with excellent value compared to Champions League Final tickets. The atmosphere at Europa League Finals often surpasses expectations, with passionate supporters creating memorable experiences that justify the investment in Europa League Final tickets.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Passionate Atmospheres and Unique Venues</h3>
            <p className="text-gray-700 mb-6">
              Europa League tickets provide access to some of Europe's most atmospheric football venues. From the intimidating Stadio Olimpico in Rome to the passionate support at Ibrox Stadium in Glasgow, Europa League venues offer distinct experiences that often create more intimate and intense atmospheres than larger Champions League stadiums. The diversity of venues and supporter cultures makes Europa League tickets appealing to fans seeking authentic European football experiences.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Emerging Talents and Tactical Innovation</h3>
            <p className="text-gray-700 mb-6">
              Europa League tickets offer opportunities to witness emerging talents and innovative tactical approaches. Many future stars make their mark in the Europa League before moving to Champions League clubs, making Europa League tickets valuable for scouts and fans interested in discovering new talent. Managers often use the Europa League to experiment with formations and strategies, creating tactically interesting matches that provide excellent value for Europa League ticket holders.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ticket Pricing and Value Proposition</h3>
            <p className="text-gray-700 mb-4">
              Europa League tickets offer excellent value compared to other European competitions:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li><strong>Group Stage Matches:</strong> Affordable entry to European football (€30-€80)</li>
              <li><strong>Knockout Playoffs:</strong> Increased intensity at reasonable prices (€40-€100)</li>
              <li><strong>Round of 16:</strong> Quality knockout football (€50-€120)</li>
              <li><strong>Quarter-Finals:</strong> Elite competition value (€60-€150)</li>
              <li><strong>Semi-Finals:</strong> High-stakes drama (€70-€200)</li>
              <li><strong>Final:</strong> European final experience (€80-€400)</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">How to Purchase Europa League Tickets</h3>
            <p className="text-gray-700 mb-4">
              Securing Europa League tickets involves several reliable channels:
            </p>
            <ol className="list-decimal pl-6 mb-6 text-gray-700">
              <li><strong>Club Official Sales:</strong> Direct from participating clubs for their matches</li>
              <li><strong>UEFA Official Channels:</strong> Limited public sales through UEFA platforms</li>
              <li><strong>Authorized Resellers:</strong> Trusted platforms with guaranteed authentic tickets</li>
              <li><strong>Local Box Offices:</strong> Venue-specific sales for matches in your area</li>
              <li><strong>Hospitality Packages:</strong> Premium experiences with added value</li>
            </ol>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">The Path to Champions League Qualification</h3>
            <p className="text-gray-700 mb-6">
              Europa League tickets provide access to matches with significant implications for Champions League qualification. The Europa League winner automatically qualifies for the following season's Champions League, adding extra motivation and intensity to the competition. This pathway to Champions League qualification makes Europa League tickets particularly valuable for supporters of clubs seeking to reach Europe's elite competition.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Travel and Cultural Experiences</h3>
            <p className="text-gray-700 mb-6">
              Europa League tickets often provide opportunities to visit diverse European destinations at more affordable prices than Champions League travel. The competition's reach extends to cities and countries less frequently visited by major tournaments, offering unique cultural experiences alongside quality football. Many fans use Europa League tickets as opportunities to explore new destinations while supporting their teams in European competition.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Historical Significance and Tradition</h3>
            <p className="text-gray-700 mb-6">
              The Europa League, evolved from the UEFA Cup, carries significant historical weight in European football. Europa League tickets provide access to a competition that has crowned legendary clubs and created memorable moments throughout its history. Clubs like Sevilla, with their record Europa League success, have built their modern identity around this competition, making Europa League tickets valuable for witnessing ongoing football history.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">The Future of Europa League</h3>
            <p className="text-gray-700 mb-6">
              UEFA continues to enhance the Europa League's profile and competitiveness, ensuring that Europa League tickets remain attractive to football fans worldwide. Recent format changes and increased prize money have elevated the competition's status, while maintaining its accessibility and exciting nature. These developments ensure that Europa League tickets will continue to offer excellent value and memorable experiences for European football enthusiasts.
            </p>
          </article>
        </div>
      </div>

      {/* Bottom Affiliate Section */}
      <div className="bg-orange-600 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold mb-2">Ready to Experience Europa League Excitement?</h3>
            <p className="text-orange-100">Secure your Europa League tickets and witness European football drama</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {partnerLinks.map((partner, index) => (
              <a
                key={index}
                href={partner.url}
                className="bg-white bg-opacity-10 rounded-lg p-4 text-center hover:bg-opacity-20 transition-all"
              >
                <div className="font-bold text-lg">{partner.name}</div>
                <div className="text-orange-200">{partner.price}</div>
                <div className="text-sm text-orange-100 mt-2">View Tickets →</div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EuropaLeagueTicketsPage;