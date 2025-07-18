import React from 'react';
import { Shield, Calendar, MapPin, Users, Star, Trophy, Crown } from 'lucide-react';

const ManchesterCityTicketsPage: React.FC = () => {
  const partnerLinks = [
    { name: 'Viagogo', url: '#', price: 'From £95', rating: '4.8/5', features: ['Instant Download', '100% Guarantee', 'Mobile Tickets'] },
    { name: 'StubHub', url: '#', price: 'From £88', rating: '4.7/5', features: ['FanProtect Guarantee', 'Last Minute Tickets', 'Price Alert'] },
    { name: 'Ticketmaster', url: '#', price: 'From £102', rating: '4.9/5', features: ['Official Partner', 'Verified Tickets', 'Customer Support'] },
    { name: 'LiveFootball', url: '#', price: 'From £92', rating: '4.6/5', features: ['Best Price Guarantee', 'Secure Payment', 'Expert Support'] }
  ];

  const upcomingFixtures = [
    { match: 'Manchester City vs Liverpool', date: 'February 8, 2025', venue: 'Etihad Stadium', price: 'From £145' },
    { match: 'Manchester City vs Arsenal', date: 'March 15, 2025', venue: 'Etihad Stadium', price: 'From £135' },
    { match: 'Manchester City vs Chelsea', date: 'April 12, 2025', venue: 'Etihad Stadium', price: 'From £125' },
    { match: 'Manchester City vs Tottenham', date: 'January 10, 2025', venue: 'Etihad Stadium', price: 'From £105' }
  ];

  const achievements = [
    '7x Premier League Champions',
    '7x FA Cup Winners',
    '8x League Cup Winners',
    '1x Champions League Winners',
    '1x UEFA Cup Winners Cup',
    '6x Community Shield Winners'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Affiliate Section Top */}
      <div className="bg-sky-600 text-white py-3">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center space-x-8 text-sm">
            <span>💙 Official Manchester City Tickets</span>
            <span>🏆 Premier League Champions</span>
            <span>🎫 Etihad Stadium Experience</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-sky-900 via-sky-800 to-blue-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Shield className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Manchester City Tickets</h1>
            <p className="text-xl md:text-2xl text-sky-100 mb-8">
              Experience the Citizens at the Etihad Stadium - Home of Champions
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full">Etihad Stadium</span>
              <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full">55,017 Capacity</span>
              <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full">Premier League</span>
              <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full">Champions League</span>
            </div>
          </div>
        </div>
      </div>

      {/* Partner Comparison Section */}
      <div className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Compare Manchester City Ticket Prices</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnerLinks.map((partner, index) => (
              <div key={index} className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-sky-500 transition-all">
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{partner.name}</h3>
                  <div className="text-2xl font-bold text-sky-600 my-2">{partner.price}</div>
                  <div className="text-yellow-500">★★★★★ {partner.rating}</div>
                </div>
                <ul className="space-y-2 mb-6">
                  {partner.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <Shield className="w-4 h-4 text-sky-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={partner.url}
                  className="block w-full bg-sky-600 text-white text-center py-3 rounded-lg hover:bg-sky-700 transition-colors font-semibold"
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
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Manchester City Tickets: Your Gateway to Premier League Excellence</h2>
            
            <p className="text-lg text-gray-700 mb-6">
              Manchester City tickets provide access to one of the most successful football clubs in modern history. Under the guidance of Pep Guardiola, the Citizens have transformed into a global powerhouse, playing breathtaking football at the state-of-the-art Etihad Stadium. Whether you're seeking Manchester City tickets for Premier League matches, Champions League nights, or domestic cup competitions, every visit to the Etihad promises world-class football and an unforgettable atmosphere.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">The Etihad Stadium: A Modern Football Cathedral</h3>
            <p className="text-gray-700 mb-6">
              The Etihad Stadium stands as one of the finest football venues in the world, offering Manchester City ticket holders an exceptional matchday experience. With a capacity of 55,017, the stadium combines cutting-edge technology with passionate support to create an atmosphere that rivals any ground in Europe. The venue's design ensures excellent sightlines from every seat, while the proximity to the pitch creates an intimate connection between fans and players that makes Etihad tickets so coveted.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Pep Guardiola's Tactical Masterclass</h3>
            <p className="text-gray-700 mb-6">
              Manchester City tickets offer the opportunity to witness Pep Guardiola's revolutionary football philosophy in action. The Spanish maestro has transformed City into a team that plays the beautiful game with precision, creativity, and relentless intensity. From tiki-taka passing sequences to devastating counter-attacks, every Manchester City match showcases tactical innovation that has influenced football worldwide. Guardiola's City doesn't just win matches; they redefine how football should be played.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Star Players and World-Class Squad</h3>
            <p className="text-gray-700 mb-4">
              Manchester City's squad represents the pinnacle of modern football talent, featuring world-class players in every position:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li><strong>Erling Haaland:</strong> The Norwegian goal machine breaking records with every appearance</li>
              <li><strong>Kevin De Bruyne:</strong> The Belgian maestro orchestrating City's attacking play</li>
              <li><strong>Rodri:</strong> The Spanish anchor providing defensive stability and distribution</li>
              <li><strong>Phil Foden:</strong> The local hero representing the future of English football</li>
              <li><strong>Jack Grealish:</strong> The creative winger bringing flair and unpredictability</li>
              <li><strong>Ruben Dias:</strong> The Portuguese defender marshalling one of Europe's best defenses</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Manchester City's Trophy Cabinet</h3>
            <p className="text-gray-700 mb-4">
              Manchester City's recent success has been nothing short of extraordinary, making City tickets increasingly valuable:
            </p>
            <div className="bg-sky-50 rounded-lg p-6 mb-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center">
                    <Trophy className="w-5 h-5 text-sky-600 mr-3" />
                    <span className="text-gray-700">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Premier League Dominance</h3>
            <p className="text-gray-700 mb-6">
              Manchester City's Premier League campaigns have redefined excellence in English football. The club's ability to maintain consistently high standards throughout the grueling 38-game season has made them the benchmark for success. City tickets for Premier League matches offer the chance to witness record-breaking performances, from the famous 100-point season to their recent treble-winning campaign. The team's relentless pursuit of perfection makes every home fixture a potential masterclass in football.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Champions League Nights at the Etihad</h3>
            <p className="text-gray-700 mb-6">
              European nights at the Etihad Stadium represent the pinnacle of club football, making Champions League Manchester City tickets among the most sought-after in world football. The atmosphere on these occasions is electric, with the famous "Blue Moon" echoing around the stadium as City take on Europe's elite. The club's 2023 Champions League triumph marked the completion of their treble and established them as the continent's premier force.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Fixtures and Rivalries</h3>
            <p className="text-gray-700 mb-4">
              Manchester City tickets are particularly in demand for these marquee fixtures:
            </p>
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              {upcomingFixtures.map((fixture, index) => (
                <div key={index} className="flex justify-between items-center py-3 border-b border-gray-200 last:border-b-0">
                  <div>
                    <h4 className="font-semibold text-gray-900">{fixture.match}</h4>
                    <p className="text-sm text-gray-600">{fixture.date} • {fixture.venue}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-sky-600">{fixture.price}</p>
                  </div>
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">The Manchester Derby</h3>
            <p className="text-gray-700 mb-6">
              The Manchester Derby represents one of the most intense rivalries in world football, making Manchester City vs Manchester United tickets the most coveted in the city. These fixtures showcase not just local pride but also the highest level of Premier League football. The Etihad's atmosphere reaches fever pitch during derby matches, with both sets of fans creating an electric environment that epitomizes English football passion.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ticket Categories and Seating Options</h3>
            <p className="text-gray-700 mb-4">
              The Etihad Stadium offers various seating options to suit different preferences and budgets:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li><strong>South Stand:</strong> The heart of City's support, creating the best atmosphere</li>
              <li><strong>Colin Bell Stand:</strong> Premium seating with excellent views and facilities</li>
              <li><strong>East Stand:</strong> Family-friendly sections with great sightlines</li>
              <li><strong>North Stand:</strong> Traditional football atmosphere with passionate fans</li>
              <li><strong>Hospitality Suites:</strong> Premium experience with dining and exclusive access</li>
              <li><strong>Tunnel Club:</strong> Unique behind-the-scenes access and premium amenities</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Matchday Experience</h3>
            <p className="text-gray-700 mb-6">
              The Manchester City matchday experience extends far beyond the 90 minutes on the pitch. The Etihad Campus offers numerous pre-match activities, including the City Store, stadium tours, and various dining options. The surrounding area comes alive on matchdays, with fans gathering in local pubs and the fan zone to build excitement before kickoff. The walk to the stadium through the blue-clad crowds creates an atmosphere that makes Manchester City tickets so special.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">City's Academy and Youth Development</h3>
            <p className="text-gray-700 mb-6">
              Manchester City's commitment to youth development has created one of the world's finest academies, producing talents like Phil Foden who have become integral to the first team. The club's investment in young players ensures a sustainable future while maintaining the connection between the team and the local community. Watching academy graduates flourish at the Etihad adds an extra dimension to the Manchester City ticket experience.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">How to Secure Manchester City Tickets</h3>
            <p className="text-gray-700 mb-4">
              Given Manchester City's success and popularity, securing tickets requires planning and knowledge of the various channels:
            </p>
            <ol className="list-decimal pl-6 mb-6 text-gray-700">
              <li><strong>Cityzens Membership:</strong> Official membership provides priority access to tickets</li>
              <li><strong>Season Cards:</strong> The most reliable way to guarantee seats for all home matches</li>
              <li><strong>General Sale:</strong> Limited tickets available for less popular fixtures</li>
              <li><strong>Authorized Resellers:</strong> Trusted platforms offering guaranteed authentic tickets</li>
              <li><strong>Hospitality Packages:</strong> Premium options with guaranteed availability and enhanced experience</li>
            </ol>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">The Future of Manchester City</h3>
            <p className="text-gray-700 mb-6">
              Under the ownership of the City Football Group and the management of Pep Guardiola, Manchester City continues to set new standards in world football. The club's commitment to excellence, both on and off the pitch, ensures that Manchester City tickets will remain among the most coveted in football. With ongoing investments in facilities, players, and community programs, the future looks incredibly bright for the Citizens and their supporters.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Visiting Manchester</h3>
            <p className="text-gray-700 mb-6">
              Manchester offers much more than just football, making it an ideal destination for supporters traveling to watch City. The city's rich industrial heritage, vibrant music scene, and excellent dining options provide the perfect backdrop for a football weekend. From the historic city center to the modern MediaCity, Manchester combines tradition with innovation, much like the football club that bears its name.
            </p>
          </article>
        </div>
      </div>

      {/* Bottom Affiliate Section */}
      <div className="bg-sky-600 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold mb-2">Ready to Experience the Etihad Stadium?</h3>
            <p className="text-sky-100">Secure your Manchester City tickets and witness football excellence</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {partnerLinks.map((partner, index) => (
              <a
                key={index}
                href={partner.url}
                className="bg-white bg-opacity-10 rounded-lg p-4 text-center hover:bg-opacity-20 transition-all"
              >
                <div className="font-bold text-lg">{partner.name}</div>
                <div className="text-sky-200">{partner.price}</div>
                <div className="text-sm text-sky-100 mt-2">View Tickets →</div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManchesterCityTicketsPage;