import React from 'react';
import { Flag, Calendar, MapPin, Users, Star, Trophy, Globe } from 'lucide-react';

const ArgentinaBrazilTicketsPage: React.FC = () => {
  const partnerLinks = [
    { name: 'Viagogo', url: '#', price: 'From $299', rating: '4.8/5', features: ['Instant Download', '100% Guarantee', 'Mobile Tickets'] },
    { name: 'StubHub', url: '#', price: 'From $275', rating: '4.7/5', features: ['FanProtect Guarantee', 'Last Minute Tickets', 'Price Alert'] },
    { name: 'Ticketmaster', url: '#', price: 'From $320', rating: '4.9/5', features: ['Official Partner', 'Verified Tickets', 'Customer Support'] },
    { name: 'LiveFootball', url: '#', price: 'From $289', rating: '4.6/5', features: ['Best Price Guarantee', 'Secure Payment', 'Expert Support'] }
  ];

  const upcomingMatches = [
    { match: 'Argentina vs Brazil', date: 'March 26, 2025', venue: 'Estadio Monumental', competition: 'World Cup Qualifiers', price: 'From $450' },
    { match: 'Brazil vs Argentina', date: 'September 10, 2025', venue: 'Maracanã Stadium', competition: 'World Cup Qualifiers', price: 'From $425' },
    { match: 'Argentina vs Brazil', date: 'July 14, 2026', venue: 'MetLife Stadium', competition: 'World Cup 2026', price: 'From $800' },
    { match: 'Copa America Final', date: 'July 2025', venue: 'TBD', competition: 'Copa America', price: 'From $600' }
  ];

  const historicMoments = [
    '1950 World Cup Final - Brazil 2-1 Uruguay (Maracanã)',
    '1986 World Cup QF - Argentina 2-1 England (Maradona)',
    '2005 Confederations Cup Final - Brazil 4-1 Argentina',
    '2021 Copa America Final - Argentina 1-0 Brazil',
    '2022 World Cup Final - Argentina 4-2 France (Penalties)'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Affiliate Section Top */}
      <div className="bg-gradient-to-r from-blue-600 to-yellow-500 text-white py-3">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center space-x-8 text-sm">
            <span>🇦🇷🇧🇷 Argentina vs Brazil - El Superclásico</span>
            <span>⚽ South America's Greatest Rivalry</span>
            <span>🏆 World Cup & Copa America Tickets</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-yellow-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center items-center space-x-4 mb-6">
              <span className="text-6xl">🇦🇷</span>
              <span className="text-4xl">⚔️</span>
              <span className="text-6xl">🇧🇷</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Argentina vs Brazil Tickets</h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Experience the greatest rivalry in South American football - El Superclásico de las Américas
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full">Messi vs Neymar</span>
              <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full">World Champions</span>
              <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full">Historic Rivalry</span>
              <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full">Copa America</span>
            </div>
          </div>
        </div>
      </div>

      {/* Partner Comparison Section */}
      <div className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Compare Argentina vs Brazil Ticket Prices</h2>
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
                      <Trophy className="w-4 h-4 text-blue-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={partner.url}
                  className="block w-full bg-gradient-to-r from-blue-600 to-yellow-500 text-white text-center py-3 rounded-lg hover:from-blue-700 hover:to-yellow-600 transition-colors font-semibold"
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
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Argentina vs Brazil Tickets: The Ultimate South American Football Experience</h2>
            
            <p className="text-lg text-gray-700 mb-6">
              Argentina vs Brazil tickets represent access to the most passionate and intense rivalry in South American football. Known as "El Superclásico de las Américas," this fixture transcends sport to become a cultural phenomenon that captivates millions across the globe. Whether it's World Cup qualifiers, Copa America matches, or international friendlies, Argentina vs Brazil tickets guarantee an unforgettable experience featuring the world's most talented players, incredible atmospheres, and football at its absolute finest.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">The Greatest Rivalry in Football</h3>
            <p className="text-gray-700 mb-6">
              The Argentina vs Brazil rivalry represents more than just football - it's a clash of cultures, philosophies, and national pride that has defined South American football for over a century. These neighboring giants have produced some of football's greatest moments, from Pelé's brilliance to Maradona's magic, and now featuring modern superstars like Lionel Messi and Neymar. Argentina vs Brazil tickets provide access to witness this historic rivalry continue to evolve, with each match adding new chapters to an already legendary story.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Lionel Messi vs Neymar: Modern Icons</h3>
            <p className="text-gray-700 mb-6">
              The current era of Argentina vs Brazil matches is defined by the presence of two of football's greatest talents. Lionel Messi, fresh from his World Cup triumph and widely regarded as the GOAT, continues to mesmerize audiences with his incredible skill and leadership for Argentina. On the Brazilian side, Neymar Jr. represents the samba style and flair that has made Brazilian football legendary worldwide. Argentina vs Brazil tickets offer the rare opportunity to witness these two superstars compete at the highest level of international football.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Historic Moments and Legendary Encounters</h3>
            <p className="text-gray-700 mb-4">
              The Argentina vs Brazil rivalry has produced countless memorable moments throughout football history:
            </p>
            <div className="bg-gradient-to-r from-blue-50 to-yellow-50 rounded-lg p-6 mb-6">
              <ul className="space-y-3">
                {historicMoments.map((moment, index) => (
                  <li key={index} className="flex items-center">
                    <Trophy className="w-5 h-5 text-yellow-600 mr-3" />
                    <span className="text-gray-700">{moment}</span>
                  </li>
                ))}
              </ul>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Upcoming Argentina vs Brazil Fixtures</h3>
            <p className="text-gray-700 mb-4">
              The rivalry continues with several highly anticipated matches scheduled:
            </p>
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              {upcomingMatches.map((match, index) => (
                <div key={index} className="flex justify-between items-center py-3 border-b border-gray-200 last:border-b-0">
                  <div>
                    <h4 className="font-semibold text-gray-900">{match.match}</h4>
                    <p className="text-sm text-gray-600">{match.date} • {match.venue}</p>
                    <p className="text-sm text-blue-600">{match.competition}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-blue-600">{match.price}</p>
                  </div>
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">World Cup 2026: The Ultimate Stage</h3>
            <p className="text-gray-700 mb-6">
              The 2026 FIFA World Cup in the United States, Canada, and Mexico promises to provide the ultimate stage for Argentina vs Brazil encounters. With both nations expected to be among the tournament favorites, the possibility of these rivals meeting in the knockout stages creates unprecedented excitement. Argentina vs Brazil tickets for World Cup 2026 matches represent the pinnacle of international football, combining the sport's biggest tournament with its greatest rivalry.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Copa America: Continental Supremacy</h3>
            <p className="text-gray-700 mb-6">
              The Copa America provides the most regular opportunity to witness Argentina vs Brazil clashes, with both nations consistently reaching the tournament's latter stages. The 2021 Copa America final, where Argentina defeated Brazil 1-0 at the Maracanã, showcased the intensity and quality that makes these fixtures so special. Future Copa America tournaments will undoubtedly feature more Argentina vs Brazil encounters, making Copa America tickets highly coveted among football fans worldwide.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Iconic Venues and Atmospheres</h3>
            <p className="text-gray-700 mb-4">
              Argentina vs Brazil matches are held at some of South America's most legendary stadiums:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li><strong>Maracanã Stadium (Rio de Janeiro):</strong> Brazil's temple of football with 78,838 capacity</li>
              <li><strong>Estadio Monumental (Buenos Aires):</strong> Argentina's fortress with passionate River Plate atmosphere</li>
              <li><strong>Arena Corinthians (São Paulo):</strong> Modern Brazilian venue with incredible acoustics</li>
              <li><strong>La Bombonera (Buenos Aires):</strong> Boca Juniors' iconic stadium when hosting national team</li>
              <li><strong>Estádio Nacional (Brasília):</strong> Brazil's capital venue for major international matches</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Tactical Battles and Playing Styles</h3>
            <p className="text-gray-700 mb-6">
              Argentina vs Brazil matches showcase contrasting football philosophies that have evolved over decades. Argentina's approach often emphasizes tactical discipline, individual brilliance, and passionate intensity, epitomized by players like Messi, Di María, and their strong defensive structure. Brazil's style traditionally features technical skill, creativity, and the famous "jogo bonito" (beautiful game), with players like Neymar, Vinícius Jr., and Casemiro representing different aspects of Brazilian football excellence.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">World Cup Qualifiers: High Stakes Football</h3>
            <p className="text-gray-700 mb-6">
              South American World Cup qualifiers featuring Argentina vs Brazil represent some of the highest-stakes football outside of major tournaments. The CONMEBOL qualification process is notoriously difficult, with only the top teams securing automatic World Cup spots. These qualifier matches often determine World Cup participation, making Argentina vs Brazil tickets for these fixtures incredibly valuable as they combine rivalry intensity with qualification pressure.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Star Players Beyond Messi and Neymar</h3>
            <p className="text-gray-700 mb-4">
              While Messi and Neymar capture headlines, both squads feature world-class talent throughout:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Argentina Stars:</h4>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• Emiliano Martínez - World Cup winning goalkeeper</li>
                  <li>• Ángel Di María - Veteran winger with crucial goals</li>
                  <li>• Lautaro Martínez - Clinical striker and goal scorer</li>
                  <li>• Rodrigo De Paul - Dynamic midfielder and work horse</li>
                  <li>• Cristian Romero - Solid defender and leader</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Brazil Stars:</h4>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• Alisson Becker - Liverpool's world-class goalkeeper</li>
                  <li>• Vinícius Jr. - Real Madrid's explosive winger</li>
                  <li>• Casemiro - Defensive midfielder and captain</li>
                  <li>• Bruno Guimarães - Newcastle's creative midfielder</li>
                  <li>• Marquinhos - PSG defender and defensive leader</li>
                </ul>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Cultural Impact and Fan Experience</h3>
            <p className="text-gray-700 mb-6">
              Argentina vs Brazil matches transcend sport to become cultural events that unite and divide nations. The passionate fan bases create atmospheres that are unmatched in international football, with elaborate choreographies, non-stop singing, and emotional displays that reflect the deep cultural significance of this rivalry. Argentina vs Brazil tickets provide access to this cultural phenomenon, where football becomes a celebration of national identity and regional pride.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">International Venues and Global Appeal</h3>
            <p className="text-gray-700 mb-6">
              While traditionally played in South America, Argentina vs Brazil matches increasingly take place at international venues, bringing this incredible rivalry to global audiences. Matches in the United States, Europe, and Asia allow international fans to experience this rivalry firsthand, often in state-of-the-art stadiums with world-class facilities. These international fixtures make Argentina vs Brazil tickets accessible to fans worldwide who might not otherwise travel to South America.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ticket Categories and Pricing</h3>
            <p className="text-gray-700 mb-4">
              Argentina vs Brazil ticket prices vary significantly based on the match importance and venue:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li><strong>World Cup Matches:</strong> Premium pricing for the ultimate stage ($500-$2000+)</li>
              <li><strong>Copa America:</strong> Continental championship pricing ($200-$800)</li>
              <li><strong>World Cup Qualifiers:</strong> High-stakes qualification matches ($150-$600)</li>
              <li><strong>International Friendlies:</strong> More accessible pricing for exhibition matches ($75-$300)</li>
              <li><strong>VIP Packages:</strong> Premium experience with hospitality ($400-$1500+)</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">How to Secure Argentina vs Brazil Tickets</h3>
            <p className="text-gray-700 mb-4">
              Given the popularity of this fixture, securing tickets requires planning and multiple strategies:
            </p>
            <ol className="list-decimal pl-6 mb-6 text-gray-700">
              <li><strong>Official Federation Sales:</strong> Monitor AFA and CBF websites for official releases</li>
              <li><strong>Tournament Organizers:</strong> FIFA, CONMEBOL, and other official tournament channels</li>
              <li><strong>Authorized Resellers:</strong> Trusted platforms with guaranteed authentic tickets</li>
              <li><strong>Hospitality Packages:</strong> Premium options with guaranteed availability</li>
              <li><strong>Local Ticket Offices:</strong> Venue-specific sales for matches in specific cities</li>
            </ol>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Travel and Accommodation</h3>
            <p className="text-gray-700 mb-6">
              Planning for Argentina vs Brazil matches involves more than just securing tickets. Accommodation in host cities fills up quickly, especially for major tournaments, making early booking essential. Many fans opt for package deals that include flights, hotels, and match tickets. Consider the local culture, language, and customs when traveling to South American venues, and always check visa requirements and health recommendations for international travel.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">The Future of the Rivalry</h3>
            <p className="text-gray-700 mb-6">
              As Messi and Neymar enter the latter stages of their careers, the Argentina vs Brazil rivalry continues to evolve with new generations of talent emerging from both nations. Young stars like Julián Álvarez for Argentina and Endrick for Brazil represent the future of this historic rivalry. Argentina vs Brazil tickets will continue to be among the most sought-after in international football, as this rivalry shows no signs of diminishing in intensity or global appeal.
            </p>
          </article>
        </div>
      </div>

      {/* Bottom Affiliate Section */}
      <div className="bg-gradient-to-r from-blue-600 to-yellow-500 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold mb-2">Ready to Experience El Superclásico?</h3>
            <p className="text-blue-100">Secure your Argentina vs Brazil tickets for the ultimate football rivalry</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {partnerLinks.map((partner, index) => (
              <a
                key={index}
                href={partner.url}
                className="bg-white bg-opacity-10 rounded-lg p-4 text-center hover:bg-opacity-20 transition-all"
              >
                <div className="font-bold text-lg">{partner.name}</div>
                <div className="text-yellow-200">{partner.price}</div>
                <div className="text-sm text-blue-100 mt-2">View Tickets →</div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArgentinaBrazilTicketsPage;