import React from 'react';
import { Star, Calendar, MapPin, Users, Trophy, Shield, Flag } from 'lucide-react';

const MLSTicketsPage: React.FC = () => {
  const partnerLinks = [
    { name: 'Viagogo', url: '#', price: 'From $65', rating: '4.8/5', features: ['Instant Download', '100% Guarantee', 'Mobile Tickets'] },
    { name: 'StubHub', url: '#', price: 'From $58', rating: '4.7/5', features: ['FanProtect Guarantee', 'Last Minute Tickets', 'Price Alert'] },
    { name: 'Ticketmaster', url: '#', price: 'From $72', rating: '4.9/5', features: ['Official Partner', 'Verified Tickets', 'Customer Support'] },
    { name: 'LiveFootball', url: '#', price: 'From $62', rating: '4.6/5', features: ['Best Price Guarantee', 'Secure Payment', 'Expert Support'] }
  ];

  const topFixtures = [
    { match: 'LAFC vs LA Galaxy', date: 'March 15, 2025', venue: 'BMO Stadium', price: 'From $125' },
    { match: 'Inter Miami vs Atlanta United', date: 'March 22, 2025', venue: 'DRV PNK Stadium', price: 'From $145' },
    { match: 'Seattle Sounders vs Portland Timbers', date: 'April 5, 2025', venue: 'Lumen Field', price: 'From $95' },
    { match: 'MLS Cup Final', date: 'December 7, 2025', venue: 'TBD', price: 'From $200' }
  ];

  const mlsClubs = [
    'Inter Miami CF', 'LAFC', 'LA Galaxy', 'Atlanta United', 'Seattle Sounders', 'Portland Timbers',
    'New York City FC', 'New York Red Bulls', 'Toronto FC', 'Montreal Impact', 'Vancouver Whitecaps', 'Chicago Fire'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Affiliate Section Top */}
      <div className="bg-green-600 text-white py-3">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center space-x-8 text-sm">
            <span>🇺🇸 MLS Tickets - Major League Soccer</span>
            <span>⚽ America's Premier Soccer League</span>
            <span>🏆 MLS Cup & Playoffs</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-green-900 via-green-800 to-blue-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Star className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">MLS Tickets</h1>
            <p className="text-xl md:text-2xl text-green-100 mb-8">
              Experience Major League Soccer with authentic MLS tickets to America's premier soccer league
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full">29 Teams</span>
              <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full">34 Games</span>
              <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full">MLS Cup</span>
              <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full">Feb - Dec</span>
            </div>
          </div>
        </div>
      </div>

      {/* Partner Comparison Section */}
      <div className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Compare MLS Ticket Prices</h2>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-6">MLS Tickets: Your Gateway to American Soccer Excellence</h2>
            
            <p className="text-lg text-gray-700 mb-6">
              MLS tickets provide access to Major League Soccer, North America's premier professional soccer league that has rapidly evolved into one of the world's most exciting and competitive football competitions. With MLS tickets, fans can witness the beautiful game's growth in America, featuring international superstars, emerging American talent, and passionate supporter cultures that rival any league globally. From Inter Miami tickets featuring Lionel Messi to LAFC tickets showcasing tactical innovation, MLS tickets offer world-class soccer entertainment.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">The Rise of American Soccer</h3>
            <p className="text-gray-700 mb-6">
              MLS tickets represent access to a league that has transformed American soccer from a niche sport to a mainstream entertainment phenomenon. Major League Soccer's strategic growth, international player acquisitions, and state-of-the-art stadiums have elevated the league's profile globally. MLS tickets now provide access to matches featuring world-renowned players like Lionel Messi, Lorenzo Insigne, and Sebastian Giovinco, alongside the best American and Canadian talent developing within the league's innovative structure.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Lionel Messi and the Inter Miami Revolution</h3>
            <p className="text-gray-700 mb-6">
              Inter Miami tickets have become the most sought-after MLS tickets following Lionel Messi's historic arrival in 2023. The Argentine superstar's presence has transformed not only Inter Miami but the entire league, with Messi's MLS debut creating unprecedented global attention. Inter Miami CF tickets now provide the opportunity to witness the greatest player of all time competing in American soccer, bringing his magical skills and winning mentality to Major League Soccer's passionate fanbase.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Major League Soccer's Elite Clubs</h3>
            <p className="text-gray-700 mb-4">
              MLS tickets feature access to matches involving the league's most successful and popular clubs:
            </p>
            <div className="bg-green-50 rounded-lg p-6 mb-6">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {mlsClubs.map((club, index) => (
                  <div key={index} className="flex items-center">
                    <Star className="w-4 h-4 text-green-600 mr-2" />
                    <span className="text-gray-700 text-sm">{club}</span>
                  </div>
                ))}
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">MLS Season Structure and Playoffs</h3>
            <p className="text-gray-700 mb-4">
              MLS tickets cover a comprehensive season featuring regular season and playoff action:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li><strong>Regular Season:</strong> 34 matches per team from February to October</li>
              <li><strong>MLS Cup Playoffs:</strong> Single-elimination knockout tournament</li>
              <li><strong>Conference Championships:</strong> Eastern and Western Conference finals</li>
              <li><strong>MLS Cup Final:</strong> Championship match between conference winners</li>
              <li><strong>Leagues Cup:</strong> Tournament featuring MLS and Liga MX clubs</li>
              <li><strong>US Open Cup:</strong> Domestic cup competition with lower division teams</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Key MLS Rivalries and Fixtures</h3>
            <p className="text-gray-700 mb-4">
              MLS tickets provide access to compelling rivalries and marquee matchups:
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

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Iconic MLS Stadiums and Atmospheres</h3>
            <p className="text-gray-700 mb-6">
              MLS tickets provide access to some of North America's most impressive soccer-specific stadiums. From the intimate atmosphere of Providence Park in Portland to the modern luxury of BMO Stadium in Los Angeles, MLS venues offer unique experiences that showcase American soccer culture. The league's emphasis on supporter groups and fan engagement creates atmospheres that rival European football, making MLS tickets valuable for experiencing authentic soccer passion in America.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">International Stars and American Talent</h3>
            <p className="text-gray-700 mb-6">
              MLS tickets offer opportunities to witness both established international stars and emerging American talent. The league's Designated Player rule allows clubs to sign world-class players like Messi, while the development of American players like Christian Pulisic, Weston McKennie, and Tyler Adams demonstrates MLS's role in elevating American soccer. MLS tickets provide access to matches where international experience meets American ambition and innovation.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">MLS Cup: America's Soccer Championship</h3>
            <p className="text-gray-700 mb-6">
              MLS Cup tickets represent the pinnacle of American soccer, featuring the league's championship match between the Eastern and Western Conference winners. The MLS Cup's single-match format creates intense drama and excitement, with the host venue determined by regular season performance. MLS Cup tickets provide access to a championship experience that combines American sports entertainment with global soccer excellence, creating memories that last a lifetime.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Supporter Culture and Fan Experience</h3>
            <p className="text-gray-700 mb-6">
              MLS tickets provide access to vibrant supporter cultures that have developed unique American soccer traditions. From the Timbers Army in Portland to Atlanta United's passionate fanbase, MLS supporter groups create atmospheres that enhance the value of MLS tickets. The league's emphasis on family-friendly entertainment, combined with passionate soccer support, creates a unique environment that appeals to both hardcore soccer fans and casual sports enthusiasts.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ticket Pricing and Accessibility</h3>
            <p className="text-gray-700 mb-4">
              MLS tickets offer excellent value compared to other major American sports leagues:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li><strong>Regular Season Matches:</strong> Affordable family entertainment ($25-$80)</li>
              <li><strong>Rivalry Games:</strong> Premium matchups with enhanced atmosphere ($40-$150)</li>
              <li><strong>Playoff Matches:</strong> High-stakes knockout soccer ($60-$200)</li>
              <li><strong>MLS Cup Final:</strong> Championship experience ($100-$500+)</li>
              <li><strong>Season Tickets:</strong> Best value for regular attendance ($400-$2000+)</li>
              <li><strong>Premium Experiences:</strong> VIP packages with hospitality ($200-$1000+)</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">How to Purchase MLS Tickets</h3>
            <p className="text-gray-700 mb-4">
              Securing MLS tickets involves several reliable channels:
            </p>
            <ol className="list-decimal pl-6 mb-6 text-gray-700">
              <li><strong>Club Official Sales:</strong> Direct from MLS teams for their home matches</li>
              <li><strong>MLS Official Platform:</strong> League-wide ticket sales and packages</li>
              <li><strong>Season Ticket Memberships:</strong> Best value and guaranteed seats</li>
              <li><strong>Authorized Resellers:</strong> Trusted platforms with verified authentic tickets</li>
              <li><strong>Single-Match Sales:</strong> Individual game tickets through various channels</li>
            </ol>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Youth Development and Soccer Growth</h3>
            <p className="text-gray-700 mb-6">
              MLS tickets support a league committed to developing American soccer talent through comprehensive youth academies and development programs. The league's investment in youth development has produced numerous national team players and created pathways for young Americans to pursue professional soccer careers. MLS tickets provide access to matches where future stars develop their skills while contributing to the growth of soccer in America.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Technology and Innovation in MLS</h3>
            <p className="text-gray-700 mb-6">
              MLS tickets provide access to a league that embraces technological innovation to enhance the fan experience. From advanced analytics and video assistant referees to mobile ticketing and stadium technology, MLS continues to innovate in ways that improve both the game and fan engagement. The league's commitment to technology ensures that MLS tickets provide access to cutting-edge soccer entertainment that sets global standards.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">The Future of American Soccer</h3>
            <p className="text-gray-700 mb-6">
              MLS tickets represent investment in the future of American soccer, as the league continues to expand, attract international talent, and develop domestic players. With the 2026 World Cup coming to North America and MLS's continued growth, the league's profile and quality will only increase. MLS tickets provide access to a league that is shaping the future of soccer in America while contributing to the sport's global development and popularity.
            </p>
          </article>
        </div>
      </div>

      {/* Bottom Affiliate Section */}
      <div className="bg-green-600 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold mb-2">Ready to Experience MLS Soccer?</h3>
            <p className="text-green-100">Secure your MLS tickets and witness American soccer excellence</p>
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

export default MLSTicketsPage;