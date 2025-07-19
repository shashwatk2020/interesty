
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const EuropaLeagueFinalHospitalityTicketsPage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Helmet>
        <title>Europa League Final Hospitality Tickets | Premium Matchday Experience</title>
        <meta name="description" content="Secure Europa League Final hospitality tickets for an elevated matchday experience. Enjoy premium seating, fine dining, and exclusive access at the UEL Final." />
        <meta name="keywords" content="europa league final hospitality tickets, uel final hospitality, europa league final corporate hospitality, europa league final premium tickets" />
        <link rel="canonical" href="https://www.ticketsfootball.com/europa-league-final-hospitality-tickets" />
      </Helmet>

      <div className="container mx-auto px-4 py-12">
        {/* Breadcrumbs */}
        <div className="text-sm text-gray-600 mb-6">
          <Link to="/" className="hover:text-green-600">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/europa-league-tickets" className="hover:text-green-600">Europa League Tickets</Link>
          <span className="mx-2">/</span>
          <span className="font-semibold">Europa League Final Hospitality Tickets</span>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-lg shadow-xl p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Europa League Final Hospitality Tickets</h1>
          <p className="text-lg text-gray-700 mb-6">
            Enhance your UEFA Europa League Final experience with our exclusive hospitality tickets. Enjoy the match from the best seats in the house, coupled with premium services, gourmet food, and a luxurious atmosphere. Perfect for corporate entertainment or a special treat.          </p>

          {/* Call to Action */}
          <div className="bg-orange-100 border-l-4 border-orange-500 text-orange-800 p-6 rounded-lg mb-8">
            <h2 className="text-2xl font-semibold mb-2">Experience the UEL Final in Style!</h2>
            <p className="mb-4">Our hospitality packages offer an unparalleled matchday experience. Secure your premium tickets and enjoy the pinnacle of European club football with comfort and class.</p>
            <a href="#hospitality-listings" className="bg-orange-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-orange-600 transition-colors flex items-center w-max">
              View Hospitality Packages <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>

          {/* Why Choose Us */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Why Choose Our Europa League Final Hospitality?</h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-orange-500 font-bold mr-3">✔</span>
                <div>
                  <h4 className="font-semibold">Prime Locations</h4>
                  <p>Access to the best seats and private suites with excellent views of the pitch.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 font-bold mr-3">✔</span>
                <div>
                  <h4 className="font-semibold">Gourmet Catering</h4>
                  <p>Enjoy exquisite food and beverage options, from pre-match buffets to post-match receptions.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 font-bold mr-3">✔</span>
                <div>
                  <h4 className="font-semibold">Networking Opportunities</h4>
                  <p>Ideal for corporate clients looking to entertain guests in a prestigious environment.</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Hospitality Listings Placeholder */}
          <div id="hospitality-listings" className="border-t pt-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Available Europa League Final Hospitality Packages</h3>
            <div className="text-center text-gray-500 border-2 border-dashed rounded-lg p-12">
              <p className="mb-2">Hospitality package listings are not yet available.</p>
              <p>Please check back closer to the event date for a full list of available options.</p>
            </div>
          </div>

          {/* Related Links */}
          <div className="mt-12 border-t pt-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Explore More Europa League Options</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link to="/europa-league-tickets" className="text-orange-600 hover:underline">Europa League Match Tickets</Link>
              <Link to="/europa-league-final-vip-tickets" className="text-orange-600 hover:underline">Europa League Final VIP Experience</Link>
              <Link to="/europa-league-final-premium-tickets" className="text-orange-600 hover:underline">Europa League Final Premium Tickets</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EuropaLeagueFinalHospitalityTicketsPage;
