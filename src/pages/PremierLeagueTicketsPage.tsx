import React from 'react';
import { Crown, Calendar, MapPin, Users, Star, Shield, Trophy } from 'lucide-react';

const PremierLeagueTicketsPage: React.FC = () => {
  const partnerLinks = [
    { name: 'Viagogo', url: '#', price: 'From £85', rating: '4.8/5', features: ['Instant Download', '100% Guarantee', 'Mobile Tickets'] },
    { name: 'StubHub', url: '#', price: 'From £78', rating: '4.7/5', features: ['FanProtect Guarantee', 'Last Minute Tickets', 'Price Alert'] },
    { name: 'Ticketmaster', url: '#', price: 'From £92', rating: '4.9/5', features: ['Official Partner', 'Verified Tickets', 'Customer Support'] },
    { name: 'LiveFootball', url: '#', price: 'From £82', rating: '4.6/5', features: ['Best Price Guarantee', 'Secure Payment', 'Expert Support'] }
  ];

  const topFixtures = [
    { match: 'Manchester United vs Liverpool', date: 'January 5, 2025', venue: 'Old Trafford', price: 'From £125' },
    { match: 'Arsenal vs Chelsea', date: 'January 15, 2025', venue: 'Emirates Stadium', price: 'From £110' },
    { match: 'Manchester City vs Tottenham', date: 'January 10, 2025', venue: 'Etihad Stadium', price: 'From £105' },
    { match: 'Liverpool vs Arsenal', date: 'February 2, 2025', venue: 'Anfield', price: 'From £115' }
  ];

  const teams = [
    'Manchester United', 'Liverpool', 'Chelsea', 'Arsenal', 'Manchester City', 'Tottenham',
    'Newcastle United', 'West Ham', 'Aston Villa', 'Brighton', 'Crystal Palace', 'Everton'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Affiliate Section Top */}
      <div className="bg-purple-600 text-white py-3">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center space-x-8 text-sm">
            <span>⚽ Premier League Tickets from Official Partners</span>
            <span>🎫 Guaranteed Authentic Tickets</span>
            <span>💂‍♂️ England's Top Flight Football</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-purple-900 via-purple-800 to-blue-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Crown className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Premier League Tickets</h1>
            <p className="text-xl md:text-2xl text-purple-100 mb-8">
              Experience the world's most exciting football league with authentic Premier League tickets
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full">20 Teams</span>
              <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full">380 Matches</span>
              <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full">38 Gameweeks</span>
              <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full">Aug - May</span>
            </div>
          </div>
        </div>
      </div>

      {/* Partner Comparison Section */}
      <div className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Compare Premier League Ticket Prices</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnerLinks.map((partner, index) => (
              <div key={index} className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-purple-500 transition-all">
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{partner.name}</h3>
                  <div className="text-2xl font-bold text-purple-600 my-2">{partner.price}</div>
                  <div className="text-yellow-500">★★★★★ {partner.rating}</div>
                </div>
                <ul className="space-y-2 mb-6">
                  {partner.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <Shield className="w-4 h-4 text-purple-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={partner.url}
                  className="block w-full bg-purple-600 text-white text-center py-3 rounded-lg hover:bg-purple-700 transition-colors font-semibold"
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
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Premier League Tickets: Your Ultimate Guide to England's Elite Football</h2>
            
            <p className="text-lg text-gray-700 mb-6">
              The Premier League stands as the pinnacle of English football and arguably the most competitive league in the world. With Premier League tickets, you gain access to witness the beautiful game at its finest, featuring world-class players, legendary stadiums, and an atmosphere that's second to none. From Manchester United tickets to Liverpool tickets, Arsenal tickets to Chelsea tickets, every match promises drama, skill, and unforgettable moments that define football history.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Premier League Tickets Are So Special</h3>
            <p className="text-gray-700 mb-6">
              Premier League tickets offer more than just a football match – they provide entry to a cultural phenomenon that captivates billions worldwide. The league's unique combination of tactical sophistication, individual brilliance, and passionate fan culture creates an atmosphere unmatched in world football. Whether you're seeking Manchester City tickets to see Pep Guardiola's tactical masterclass or Tottenham tickets to experience the new stadium's incredible atmosphere, each Premier League venue offers its own distinct character and history.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">The Big Six: England's Football Powerhouses</h3>
            <p className="text-gray-700 mb-4">
              The Premier League's "Big Six" clubs represent the cream of English football, each with their own rich history and global following:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li><strong>Manchester United:</strong> The Red Devils at Old Trafford, with a legacy of success under Sir Alex Ferguson</li>
              <li><strong>Liverpool:</strong> The Reds at Anfield, famous for "You'll Never Walk Alone" and European glory</li>
              <li><strong>Arsenal:</strong> The Gunners at Emirates Stadium, known for beautiful football and passionate support</li>
              <li><strong>Chelsea:</strong> The Blues at Stamford Bridge, with recent success and star-studded squads</li>
              <li><strong>Manchester City:</strong> The Citizens at Etihad Stadium, the modern powerhouse with world-class facilities</li>
              <li><strong>Tottenham:</strong> Spurs at their stunning new stadium, combining tradition with cutting-edge technology</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Premier League Stadiums: Cathedrals of Football</h3>
            <p className="text-gray-700 mb-4">
              Each Premier League stadium tells its own story and offers a unique matchday experience:
            </p>
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Historic Venues:</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Old Trafford - "Theatre of Dreams" (74,310 capacity)</li>
                    <li>• Anfield - Home of the Kop (53,394 capacity)</li>
                    <li>• Stamford Bridge - West London fortress (40,341 capacity)</li>
                    <li>• Goodison Park - Everton's traditional home (39,414 capacity)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Modern Marvels:</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Tottenham Hotspur Stadium - Architectural masterpiece (62,850 capacity)</li>
                    <li>• Emirates Stadium - Arsenal's modern home (60,260 capacity)</li>
                    <li>• Etihad Stadium - Manchester City's fortress (55,017 capacity)</li>
                    <li>• London Stadium - West Ham's Olympic legacy (66,000 capacity)</li>
                  </ul>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Season Structure and Key Fixtures</h3>
            <p className="text-gray-700 mb-4">
              The Premier League season runs from August to May, featuring 380 matches across 38 gameweeks. Each team plays every other team twice - once at home and once away. Key periods include:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li><strong>Opening Weekend:</strong> The season's exciting start with renewed hope for all clubs</li>
              <li><strong>Christmas Period:</strong> Festive fixtures with matches on Boxing Day and New Year's Day</li>
              <li><strong>Title Run-in:</strong> The final weeks where championships are won and lost</li>
              <li><strong>Relegation Battle:</strong> Bottom teams fighting to stay in the Premier League</li>
              <li><strong>European Qualification:</strong> Top-four race for Champions League spots</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Top Premier League Fixtures to Watch</h3>
            <p className="text-gray-700 mb-4">
              Certain Premier League fixtures are considered must-see events that define the season:
            </p>
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              {topFixtures.map((fixture, index) => (
                <div key={index} className="flex justify-between items-center py-3 border-b border-gray-200 last:border-b-0">
                  <div>
                    <h4 className="font-semibold text-gray-900">{fixture.match}</h4>
                    <p className="text-sm text-gray-600">{fixture.date} • {fixture.venue}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-purple-600">{fixture.price}</p>
                  </div>
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Classic Derby Matches</h3>
            <p className="text-gray-700 mb-4">
              Premier League derbies represent the most intense and passionate fixtures in English football:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li><strong>Manchester Derby:</strong> Manchester United vs Manchester City - Cross-city rivalry</li>
              <li><strong>Merseyside Derby:</strong> Liverpool vs Everton - The friendly derby</li>
              <li><strong>North London Derby:</strong> Arsenal vs Tottenham - Historic north London rivalry</li>
              <li><strong>West London Derby:</strong> Chelsea vs Fulham - Local bragging rights</li>
              <li><strong>El Clasico Inglés:</strong> Liverpool vs Manchester United - England's biggest rivalry</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ticket Categories and Pricing</h3>
            <p className="text-gray-700 mb-4">
              Premier League ticket prices vary significantly based on the match importance, teams involved, and seating location:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li><strong>Category A Matches:</strong> Big six clashes and derbies (£80-£200+)</li>
              <li><strong>Category B Matches:</strong> Mid-table encounters (£50-£120)</li>
              <li><strong>Category C Matches:</strong> Lower-profile fixtures (£30-£80)</li>
              <li><strong>Season Tickets:</strong> Best value for regular attendees (£500-£2000+)</li>
              <li><strong>Hospitality Packages:</strong> Premium experience with dining (£200-£500+)</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">How to Buy Premier League Tickets</h3>
            <p className="text-gray-700 mb-4">
              Securing Premier League tickets requires planning and knowledge of the various purchasing channels:
            </p>
            <ol className="list-decimal pl-6 mb-6 text-gray-700">
              <li><strong>Club Membership:</strong> Join official club membership schemes for priority access</li>
              <li><strong>Season Tickets:</strong> The most reliable way to guarantee seats, though waiting lists are long</li>
              <li><strong>General Sale:</strong> Limited tickets released to the public, usually for less popular fixtures</li>
              <li><strong>Authorized Resellers:</strong> Trusted platforms like Viagogo, StubHub, and Ticketmaster</li>
              <li><strong>Hospitality Packages:</strong> Premium options with guaranteed availability</li>
            </ol>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Matchday Experience</h3>
            <p className="text-gray-700 mb-6">
              Attending a Premier League match is about more than just the 90 minutes on the pitch. The matchday experience begins hours before kickoff with pre-match atmosphere in local pubs, fan chants echoing through the streets, and the electric atmosphere as you approach the stadium. Each club has its own traditions, from Liverpool's "You'll Never Walk Alone" to Manchester United's "Stretford End" atmosphere.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">International Appeal</h3>
            <p className="text-gray-700 mb-6">
              The Premier League's global reach means that Premier League tickets are sought after by fans from every continent. The league's broadcast to over 200 countries creates a truly international atmosphere at matches, with supporters traveling from around the world to experience English football culture firsthand. This international appeal also means that popular fixtures sell out quickly, making early booking essential.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Tips for First-Time Visitors</h3>
            <p className="text-gray-700 mb-6">
              If you're attending your first Premier League match, arrive early to soak in the atmosphere, familiarize yourself with the stadium layout, and perhaps visit the club museum or megastore. Dress warmly during winter months as English weather can be unpredictable, and remember that alcohol is not sold during matches in English stadiums, though it's available before and after the game.
            </p>
          </article>
        </div>
      </div>

      {/* Bottom Affiliate Section */}
      <div className="bg-purple-600 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold mb-2">Ready to Experience Premier League Football?</h3>
            <p className="text-purple-100">Compare prices and secure your Premier League tickets today</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {partnerLinks.map((partner, index) => (
              <a
                key={index}
                href={partner.url}
                className="bg-white bg-opacity-10 rounded-lg p-4 text-center hover:bg-opacity-20 transition-all"
              >
                <div className="font-bold text-lg">{partner.name}</div>
                <div className="text-purple-200">{partner.price}</div>
                <div className="text-sm text-purple-100 mt-2">View Tickets →</div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PremierLeagueTicketsPage;