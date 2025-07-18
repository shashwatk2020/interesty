import React from 'react';
import { MapPin, Calendar, Users, Star, Shield, Camera, Navigation } from 'lucide-react';

const EtihadStadiumTicketsPage: React.FC = () => {
  const partnerLinks = [
    { name: 'Viagogo', url: '#', price: 'From £95', rating: '4.8/5', features: ['Stadium Tours', 'Match Tickets', 'VIP Experience'] },
    { name: 'StubHub', url: '#', price: 'From £88', rating: '4.7/5', features: ['Event Tickets', 'Secure Booking', 'Mobile Entry'] },
    { name: 'Ticketmaster', url: '#', price: 'From £102', rating: '4.9/5', features: ['Official Partner', 'Premium Seats', 'Hospitality'] },
    { name: 'LiveFootball', url: '#', price: 'From £92', rating: '4.6/5', features: ['Best Prices', 'Expert Support', 'Group Bookings'] }
  ];

  const upcomingEvents = [
    { event: 'Manchester City vs Liverpool', date: 'February 8, 2025', type: 'Premier League', price: 'From £145' },
    { event: 'Manchester City vs PSG', date: 'March 5, 2025', type: 'Champions League', price: 'From £165' },
    { event: 'Stadium Tour & Museum', date: 'Daily Tours', type: 'Experience', price: 'From £25' },
    { event: 'Concert Event', date: 'Summer 2025', type: 'Music', price: 'From £75' }
  ];

  const facilities = [
    'Premium Hospitality Suites',
    'Tunnel Club Experience',
    'City Store Megastore',
    'Museum & Stadium Tours',
    'Family-Friendly Facilities',
    'Disabled Access Throughout',
    'Premium Dining Options',
    'VIP Parking Available'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Affiliate Section Top */}
      <div className="bg-blue-600 text-white py-3">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center space-x-8 text-sm">
            <span>🏟️ Etihad Stadium - Home of Manchester City</span>
            <span>🎫 Official Stadium Tours & Events</span>
            <span>⭐ World-Class Facilities</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-sky-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <MapPin className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Etihad Stadium Tickets</h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Experience Manchester's Premier Football Venue - Home of the Champions
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full">55,017 Capacity</span>
              <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full">Opened 2003</span>
              <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full">East Manchester</span>
              <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full">Multi-Purpose Venue</span>
            </div>
          </div>
        </div>
      </div>

      {/* Partner Comparison Section */}
      <div className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Compare Etihad Stadium Ticket Prices</h2>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Etihad Stadium Tickets: Your Gateway to Manchester's Premier Venue</h2>
            
            <p className="text-lg text-gray-700 mb-6">
              Etihad Stadium tickets provide access to one of the most impressive football venues in the world and the proud home of Manchester City. Located in the heart of East Manchester, the Etihad Stadium has become synonymous with footballing excellence, hosting Premier League champions, Champions League nights, and world-class entertainment events. Whether you're seeking Etihad tickets for Manchester City matches, stadium tours, or special events, this state-of-the-art venue offers an unparalleled experience that combines sporting heritage with modern luxury.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">The Etihad Stadium: Architectural Marvel</h3>
            <p className="text-gray-700 mb-6">
              The Etihad Stadium stands as a testament to modern stadium design, originally built for the 2002 Commonwealth Games before becoming Manchester City's home in 2003. With its distinctive bowl design and impressive 55,017 capacity, the stadium offers exceptional sightlines from every seat, ensuring that Etihad Stadium tickets provide an optimal viewing experience regardless of location. The venue's architecture seamlessly blends functionality with aesthetics, creating an atmosphere that enhances every event held within its walls.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">World-Class Facilities and Amenities</h3>
            <p className="text-gray-700 mb-4">
              The Etihad Stadium boasts world-class facilities that set it apart from other venues:
            </p>
            <div className="bg-blue-50 rounded-lg p-6 mb-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {facilities.map((facility, index) => (
                  <div key={index} className="flex items-center">
                    <Star className="w-5 h-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">{facility}</span>
                  </div>
                ))}
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Manchester City: The Home Team</h3>
            <p className="text-gray-700 mb-6">
              The Etihad Stadium has witnessed Manchester City's transformation from underdogs to global superstars. Under Pep Guardiola's management, the Citizens have turned their home ground into a fortress where beautiful football meets incredible success. Etihad Stadium tickets for Manchester City matches offer the opportunity to witness some of the finest football ever played, with the team's possession-based style perfectly suited to the stadium's intimate atmosphere and excellent acoustics.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Stadium Tours and Museum Experience</h3>
            <p className="text-gray-700 mb-6">
              Beyond match days, Etihad Stadium tickets include access to comprehensive stadium tours that take visitors behind the scenes of this magnificent venue. The tour includes visits to the players' tunnel, dressing rooms, press conference room, and the pitch-side dugouts. The Manchester City Museum, located within the stadium, showcases the club's rich history through interactive exhibits, memorabilia, and multimedia presentations that bring the City story to life.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Upcoming Events at the Etihad</h3>
            <p className="text-gray-700 mb-4">
              The Etihad Stadium hosts a diverse range of events throughout the year:
            </p>
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              {upcomingEvents.map((event, index) => (
                <div key={index} className="flex justify-between items-center py-3 border-b border-gray-200 last:border-b-0">
                  <div>
                    <h4 className="font-semibold text-gray-900">{event.event}</h4>
                    <p className="text-sm text-gray-600">{event.date} • {event.type}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-blue-600">{event.price}</p>
                  </div>
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Premium Hospitality Options</h3>
            <p className="text-gray-700 mb-6">
              The Etihad Stadium offers various premium hospitality packages that elevate the matchday experience. From the exclusive Tunnel Club, where guests can watch players emerge from the tunnel, to the sophisticated hospitality suites with panoramic views, these premium Etihad tickets provide luxury amenities including gourmet dining, complimentary beverages, and VIP parking. The Joe Mercer Lounge and other hospitality areas offer the perfect setting for corporate entertainment or special celebrations.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Seating Areas and Atmosphere</h3>
            <p className="text-gray-700 mb-4">
              The Etihad Stadium is divided into four main stands, each offering a unique perspective and atmosphere:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li><strong>South Stand:</strong> The heart of City's vocal support, creating the most intense atmosphere</li>
              <li><strong>Colin Bell Stand:</strong> Named after the City legend, offering premium seating and facilities</li>
              <li><strong>East Stand:</strong> Family-friendly sections with excellent views of the action</li>
              <li><strong>North Stand:</strong> Traditional football atmosphere with passionate supporters</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Getting to the Etihad Stadium</h3>
            <p className="text-gray-700 mb-6">
              Located in East Manchester, the Etihad Stadium is easily accessible by various transportation methods. The venue is served by the Etihad Campus tram stop on the Metrolink system, providing direct connections from Manchester city center and surrounding areas. For those driving, extensive parking facilities are available, though advance booking is recommended for major events. The stadium's location within the Etihad Campus also provides easy access to other facilities and amenities.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Matchday Experience</h3>
            <p className="text-gray-700 mb-6">
              The Etihad Stadium matchday experience begins long before kickoff, with the surrounding area coming alive with pre-match activities. The City Square fan zone provides entertainment, food, and beverages, while the stadium's numerous bars and restaurants offer dining options to suit every taste and budget. The walk through the concourses, with their displays of City history and achievements, builds anticipation for the main event.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Accessibility and Inclusive Design</h3>
            <p className="text-gray-700 mb-6">
              The Etihad Stadium was designed with accessibility in mind, ensuring that all supporters can enjoy events regardless of mobility requirements. The venue features wheelchair-accessible seating areas throughout the stadium, accessible toilets, and dedicated parking spaces. Audio commentary systems are available for visually impaired supporters, while hearing loops assist those with hearing difficulties. The stadium's commitment to inclusivity ensures that Etihad Stadium tickets are accessible to all fans.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Sustainability and Environmental Initiatives</h3>
            <p className="text-gray-700 mb-6">
              Manchester City and the Etihad Stadium are committed to environmental sustainability, implementing various green initiatives throughout the venue. From renewable energy sources to waste reduction programs, the stadium operates with environmental responsibility in mind. The venue's sustainability efforts extend to transportation, encouraging public transport use and providing electric vehicle charging points for those who drive to events.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Corporate and Private Events</h3>
            <p className="text-gray-700 mb-6">
              Beyond football matches, the Etihad Stadium serves as a premier venue for corporate events, conferences, and private celebrations. The stadium's flexible spaces can accommodate everything from intimate meetings to large-scale conferences, with state-of-the-art audio-visual equipment and professional catering services. The unique setting of a Premier League stadium adds prestige to any corporate event, making Etihad Stadium tickets for private events highly sought after.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">The Etihad Campus</h3>
            <p className="text-gray-700 mb-6">
              The Etihad Stadium sits at the heart of the impressive Etihad Campus, a comprehensive sports and entertainment complex that includes the City Football Academy, training facilities, and the Manchester Regional Arena. This integrated approach creates a unique environment where elite sport, community engagement, and commercial activities converge. Visitors with Etihad Stadium tickets can explore the broader campus, which showcases Manchester City's commitment to excellence at every level.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ticket Categories and Pricing</h3>
            <p className="text-gray-700 mb-4">
              Etihad Stadium tickets are available across various price points and categories:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li><strong>Standard Admission:</strong> General seating with excellent views (£30-£80)</li>
              <li><strong>Premium Seats:</strong> Enhanced comfort and amenities (£80-£150)</li>
              <li><strong>Hospitality Packages:</strong> All-inclusive luxury experience (£200-£500)</li>
              <li><strong>Stadium Tours:</strong> Behind-the-scenes access and museum entry (£25-£40)</li>
              <li><strong>Special Events:</strong> Concerts and entertainment (£50-£200)</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Booking Your Etihad Stadium Experience</h3>
            <p className="text-gray-700 mb-6">
              Securing Etihad Stadium tickets requires advance planning, especially for high-demand matches and events. Official channels include Manchester City's website for match tickets and stadium tours, while authorized resellers provide additional options for sold-out events. For the best experience, consider booking hospitality packages that include premium seating, dining, and exclusive access to areas not available to general admission ticket holders.
            </p>
          </article>
        </div>
      </div>

      {/* Bottom Affiliate Section */}
      <div className="bg-blue-600 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold mb-2">Ready to Experience the Etihad Stadium?</h3>
            <p className="text-blue-100">Book your tickets now for Manchester's premier sporting venue</p>
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

export default EtihadStadiumTicketsPage;