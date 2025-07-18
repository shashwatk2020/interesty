import React from 'react';
import { Trophy, Calendar, MapPin, Users, Star, Globe, Shield, CreditCard } from 'lucide-react';

const WorldCupTicketsPage: React.FC = () => {
  const partnerLinks = [
    { name: 'Viagogo', url: '#', price: 'From $299', rating: '4.8/5', features: ['Instant Download', '100% Guarantee', 'Mobile Tickets'] },
    { name: 'StubHub', url: '#', price: 'From $275', rating: '4.7/5', features: ['FanProtect Guarantee', 'Last Minute Tickets', 'Price Alert'] },
    { name: 'Ticketmaster', url: '#', price: 'From $320', rating: '4.9/5', features: ['Official Partner', 'Verified Tickets', 'Customer Support'] },
    { name: 'LiveFootball', url: '#', price: 'From $289', rating: '4.6/5', features: ['Best Price Guarantee', 'Secure Payment', 'Expert Support'] }
  ];

  const upcomingMatches = [
    { match: 'Argentina vs Brazil', date: 'July 15, 2026', venue: 'MetLife Stadium', price: 'From $450' },
    { match: 'France vs England', date: 'July 12, 2026', venue: 'Rose Bowl', price: 'From $380' },
    { match: 'Spain vs Germany', date: 'July 18, 2026', venue: 'AT&T Stadium', price: 'From $420' },
    { match: 'World Cup Final', date: 'July 19, 2026', venue: 'MetLife Stadium', price: 'From $800' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Affiliate Section Top */}
      <div className="bg-green-600 text-white py-3">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center space-x-8 text-sm">
            <span>🎫 Compare World Cup Tickets from trusted partners</span>
            <span>💰 Best Price Guarantee</span>
            <span>🔒 100% Secure Booking</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-green-900 via-green-800 to-blue-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Trophy className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">FIFA World Cup 2026 Tickets</h1>
            <p className="text-xl md:text-2xl text-green-100 mb-8">
              Secure your World Cup tickets for the biggest football tournament in history
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full">48 Teams</span>
              <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full">104 Matches</span>
              <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full">16 Cities</span>
              <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full">USA, Canada, Mexico</span>
            </div>
          </div>
        </div>
      </div>

      {/* Partner Comparison Section */}
      <div className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Compare World Cup Ticket Prices</h2>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-6">FIFA World Cup 2026 Tickets: Your Complete Guide</h2>
            
            <p className="text-lg text-gray-700 mb-6">
              The FIFA World Cup 2026 promises to be the most spectacular football tournament in history, featuring 48 teams across the United States, Canada, and Mexico. As the first World Cup to be hosted by three nations, this tournament will showcase the beautiful game on an unprecedented scale. Whether you're looking for World Cup tickets to see your national team or want to witness football history at the World Cup Final, securing your tickets early is essential.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Buy World Cup 2026 Tickets?</h3>
            <p className="text-gray-700 mb-6">
              World Cup tickets are among the most sought-after sporting event tickets globally. The 2026 tournament will feature expanded format with 48 teams, meaning more matches, more excitement, and more opportunities to see the world's best players compete. From group stage matches to the World Cup Final tickets, every game promises unforgettable moments that will be talked about for generations.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Tournament Format and Schedule</h3>
            <p className="text-gray-700 mb-4">
              The World Cup 2026 will run from June 11 to July 19, 2026, featuring 104 matches across 16 host cities. The tournament will begin with a 48-team group stage, followed by a knockout phase leading to the World Cup Final at MetLife Stadium in New York/New Jersey. Key matches include:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>Opening ceremony and first match</li>
              <li>Group stage matches featuring all 48 qualified teams</li>
              <li>Round of 32 knockout matches</li>
              <li>Quarter-finals and semi-finals</li>
              <li>Third-place playoff</li>
              <li>World Cup Final - the ultimate football spectacle</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Host Cities and Venues</h3>
            <p className="text-gray-700 mb-4">
              World Cup 2026 tickets will be available for matches across 16 incredible venues:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <h4 className="font-semibold text-gray-900">United States:</h4>
                <ul className="text-gray-700 text-sm">
                  <li>• MetLife Stadium (New York/New Jersey)</li>
                  <li>• AT&T Stadium (Dallas)</li>
                  <li>• Mercedes-Benz Stadium (Atlanta)</li>
                  <li>• Hard Rock Stadium (Miami)</li>
                  <li>• Lincoln Financial Field (Philadelphia)</li>
                  <li>• Lumen Field (Seattle)</li>
                  <li>• SoFi Stadium (Los Angeles)</li>
                  <li>• Levi's Stadium (San Francisco Bay Area)</li>
                  <li>• Arrowhead Stadium (Kansas City)</li>
                  <li>• NRG Stadium (Houston)</li>
                  <li>• Gillette Stadium (Boston)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Canada & Mexico:</h4>
                <ul className="text-gray-700 text-sm">
                  <li>• BC Place (Vancouver)</li>
                  <li>• BMO Field (Toronto)</li>
                  <li>• Estadio Azteca (Mexico City)</li>
                  <li>• Estadio BBVA (Monterrey)</li>
                  <li>• Estadio Akron (Guadalajara)</li>
                </ul>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ticket Categories and Pricing</h3>
            <p className="text-gray-700 mb-4">
              World Cup tickets are available in various categories to suit different budgets and preferences:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li><strong>Category 1:</strong> Premium seats with the best views (From $200-$800)</li>
              <li><strong>Category 2:</strong> Excellent seats with great sightlines (From $150-$600)</li>
              <li><strong>Category 3:</strong> Good seats at affordable prices (From $100-$400)</li>
              <li><strong>Category 4:</strong> Budget-friendly options for local residents (From $50-$200)</li>
              <li><strong>Accessibility:</strong> Special seating for fans with disabilities</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">How to Buy World Cup Tickets</h3>
            <p className="text-gray-700 mb-4">
              Purchasing World Cup 2026 tickets requires careful planning and timing. Here's your step-by-step guide:
            </p>
            <ol className="list-decimal pl-6 mb-6 text-gray-700">
              <li><strong>Official FIFA Sales:</strong> Register for FIFA's official ticket sales phases</li>
              <li><strong>Authorized Resellers:</strong> Use trusted partners like Viagogo, StubHub, and Ticketmaster</li>
              <li><strong>Hospitality Packages:</strong> Consider premium packages with accommodation and transfers</li>
              <li><strong>Last-Minute Options:</strong> Monitor resale markets closer to match dates</li>
            </ol>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Top Matches to Watch</h3>
            <p className="text-gray-700 mb-4">
              While every World Cup match is special, certain fixtures are expected to be particularly in demand:
            </p>
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              {upcomingMatches.map((match, index) => (
                <div key={index} className="flex justify-between items-center py-3 border-b border-gray-200 last:border-b-0">
                  <div>
                    <h4 className="font-semibold text-gray-900">{match.match}</h4>
                    <p className="text-sm text-gray-600">{match.date} • {match.venue}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-green-600">{match.price}</p>
                  </div>
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Travel and Accommodation</h3>
            <p className="text-gray-700 mb-6">
              Planning your World Cup experience goes beyond just securing tickets. Consider booking accommodation early, as hotels in host cities will be in high demand. Many fans opt for hospitality packages that include tickets, accommodation, and transfers. Major cities like New York, Los Angeles, and Mexico City offer excellent tourist attractions to enhance your World Cup journey.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ticket Security and Authenticity</h3>
            <p className="text-gray-700 mb-6">
              When purchasing World Cup tickets, always use authorized sellers to ensure authenticity. Legitimate tickets will have security features and can be verified through official channels. Avoid purchasing from unofficial sources or individuals, as counterfeit tickets are common for major events. Our partner platforms offer buyer protection and guarantee authentic tickets.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Mobile Tickets and Entry Requirements</h3>
            <p className="text-gray-700 mb-6">
              Most World Cup 2026 tickets will be delivered as mobile tickets through official apps. Ensure your smartphone is charged and has the necessary apps installed. You'll also need valid identification matching your ticket purchase, and some venues may have specific entry requirements or prohibited items lists.
            </p>
          </article>
        </div>
      </div>

      {/* Bottom Affiliate Section */}
      <div className="bg-green-600 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold mb-2">Ready to Secure Your World Cup Tickets?</h3>
            <p className="text-green-100">Compare prices from our trusted partners and book with confidence</p>
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

export default WorldCupTicketsPage;