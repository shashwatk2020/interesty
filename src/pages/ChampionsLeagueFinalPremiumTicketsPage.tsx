
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const ChampionsLeagueFinalPremiumTicketsPage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Helmet>
        <title>Champions League Final Premium Tickets | Enhanced Matchday Access</title>
        <meta name="description" content="Secure Champions League Final premium tickets for an enhanced matchday experience. Enjoy better seating and exclusive amenities at the UCL Final." />
        <meta name="keywords" content="champions league final premium tickets, ucl final best seats, champions league final enhanced experience" />
        <link rel="canonical" href="https://www.ticketsfootball.com/champions-league-final-premium-tickets" />
      </Helmet>

      <div className="container mx-auto px-4 py-12">
        {/* Breadcrumbs */}
        <div className="text-sm text-gray-600 mb-6">
          <Link to="/" className="hover:text-green-600">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/champions-league-tickets" className="hover:text-green-600">Champions League Tickets</Link>
          <span className="mx-2">/</span>
          <span className="font-semibold">Champions League Final Premium Tickets</span>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-lg shadow-xl p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Champions League Final Premium Tickets</h1>
          <p className="text-lg text-gray-700 mb-6">
            Upgrade your UEFA Champions League Final experience with our premium tickets. These tickets offer enhanced seating locations and access to exclusive areas within the stadium, providing a more comfortable and enjoyable matchday.          </p>

          {/* Call to Action */}
          <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-800 p-6 rounded-lg mb-8">
            <h2 className="text-2xl font-semibold mb-2">Elevate Your Matchday!</h2>
            <p className="mb-4">Premium tickets offer a fantastic way to enjoy the Champions League Final with added comfort and better views. Secure yours today.</p>
            <a href="#premium-listings" className="bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors flex items-center w-max">
              View Premium Tickets <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>

          {/* Why Choose Us */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Why Choose Our Champions League Final Premium Tickets?</h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-500 font-bold mr-3">✔</span>
                <div>
                  <h4 className="font-semibold">Better Views</h4>
                  <p>Enjoy excellent sightlines from prime seating areas, often centrally located.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 font-bold mr-3">✔</span>
                <div>
                  <h4 className="font-semibold">Comfort & Convenience</h4>
                  <p>Access to comfortable seating and sometimes dedicated entry points and concessions.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 font-bold mr-3">✔</span>
                <div>
                  <h4 className="font-semibold">Authenticity Guaranteed</h4>
                  <p>All tickets are sourced from trusted suppliers and are 100% authentic.</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Premium Listings Placeholder */}
          <div id="premium-listings" className="border-t pt-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Available Champions League Final Premium Tickets</h3>
            <div className="text-center text-gray-500 border-2 border-dashed rounded-lg p-12">
              <p className="mb-2">Premium ticket listings are not yet available.</p>
              <p>Please check back closer to the event date for a full list of available options.</p>
            </div>
          </div>

          {/* Related Links */}
          <div className="mt-12 border-t pt-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Explore More Champions League Options</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link to="/champions-league-tickets" className="text-blue-600 hover:underline">Champions League Match Tickets</Link>
              <Link to="/champions-league-final-vip-tickets" className="text-blue-600 hover:underline">Champions League Final VIP Experience</Link>
              <Link to="/champions-league-final-hospitality-tickets" className="text-blue-600 hover:underline">Champions League Final Hospitality</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChampionsLeagueFinalPremiumTicketsPage;
