
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const WorldCupHospitalityTicketsPage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Helmet>
        <title>World Cup Hospitality Tickets | Premium Matchday Experience</title>
        <meta name="description" content="Secure World Cup hospitality tickets for an elevated matchday experience. Enjoy premium seating, fine dining, and exclusive access at the FIFA World Cup." />
        <meta name="keywords" content="world cup hospitality tickets, fifa world cup hospitality, world cup corporate hospitality, world cup premium tickets" />
        <link rel="canonical" href="https://www.ticketsfootball.com/world-cup-hospitality-tickets" />
      </Helmet>

      <div className="container mx-auto px-4 py-12">
        {/* Breadcrumbs */}
        <div className="text-sm text-gray-600 mb-6">
          <Link to="/" className="hover:text-green-600">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/world-cup-tickets" className="hover:text-green-600">World Cup Tickets</Link>
          <span className="mx-2">/</span>
          <span className="font-semibold">World Cup Hospitality Tickets</span>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-lg shadow-xl p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">World Cup Hospitality Tickets</h1>
          <p className="text-lg text-gray-700 mb-6">
            Enhance your FIFA World Cup experience with our exclusive hospitality tickets. Enjoy the matches from the best seats in the house, coupled with premium services, gourmet food, and a luxurious atmosphere. Perfect for corporate entertainment or a special treat.          </p>

          {/* Call to Action */}
          <div className="bg-green-100 border-l-4 border-green-500 text-green-800 p-6 rounded-lg mb-8">
            <h2 className="text-2xl font-semibold mb-2">Experience the World Cup in Style!</h2>
            <p className="mb-4">Our hospitality packages offer an unparalleled matchday experience. Secure your premium tickets and enjoy the tournament with comfort and class.</p>
            <a href="#hospitality-listings" className="bg-green-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-700 transition-colors flex items-center w-max">
              View Hospitality Packages <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>

          {/* Why Choose Us */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Why Choose Our World Cup Hospitality?</h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-500 font-bold mr-3">✔</span>
                <div>
                  <h4 className="font-semibold">Prime Locations</h4>
                  <p>Access to the best seats and private suites with excellent views of the pitch.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 font-bold mr-3">✔</span>
                <div>
                  <h4 className="font-semibold">Gourmet Catering</h4>
                  <p>Enjoy exquisite food and beverage options, from pre-match buffets to post-match receptions.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 font-bold mr-3">✔</span>
                <div>
                  <h4 className="font-semibold">Networking Opportunities</h4>
                  <p>Ideal for corporate clients looking to entertain guests in a prestigious environment.</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Hospitality Listings Placeholder */}
          <div id="hospitality-listings" className="border-t pt-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Available World Cup Hospitality Packages</h3>
            <div className="text-center text-gray-500 border-2 border-dashed rounded-lg p-12">
              <p className="mb-2">Hospitality package listings are not yet available.</p>
              <p>Please check back closer to the event date for a full list of available options.</p>
            </div>
          </div>

          {/* Related Links */}
          <div className="mt-12 border-t pt-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Explore More World Cup Options</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link to="/world-cup-tickets" className="text-green-600 hover:underline">World Cup Match Tickets</Link>
              <Link to="/world-cup-package-deal-tickets" className="text-green-600 hover:underline">World Cup Package Deals</Link>
              <Link to="/world-cup-vip-experience-tickets" className="text-green-600 hover:underline">World Cup VIP Experience</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorldCupHospitalityTicketsPage;
