
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const ChampionsLeagueFinalTicketsPage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Helmet>
        <title>Champions League Final Tickets | The Pinnacle of Club Football</title>
        <meta name="description" content="Buy official tickets for the UEFA Champions League Final. Witness the two best teams in Europe battle for the most prestigious trophy in club football." />
        <meta name="keywords" content="champions league final tickets, uefa champions league final tickets, buy champions league final tickets, official champions league final tickets" />
        <link rel="canonical" href="https://www.ticketsfootball.com/champions-league-final-tickets" />
      </Helmet>

      <div className="container mx-auto px-4 py-12">
        {/* Breadcrumbs */}
        <div className="text-sm text-gray-600 mb-6">
          <Link to="/" className="hover:text-green-600">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/champions-league-tickets" className="hover:text-green-600">Champions League Tickets</Link>
          <span className="mx-2">/</span>
          <span className="font-semibold">Champions League Final Tickets</span>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-lg shadow-xl p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Champions League Final Tickets</h1>
          <p className="text-lg text-gray-700 mb-6">
            The UEFA Champions League Final is the most anticipated event in club football. It's a showcase of the best talent, tactics, and passion in Europe.          </p>

          {/* Call to Action */}
          <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-800 p-6 rounded-lg mb-8">
            <h2 className="text-2xl font-semibold mb-2">Book Your Place at the Final!</h2>
            <p className="mb-4">Tickets for the Champions League Final are among the most sought-after in all of sports. Secure your tickets now to be part of history.</p>
            <a href="#ticket-listings" className="bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors flex items-center w-max">
              View Ticket Listings <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>

          {/* Why Choose Us */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">The Premier Destination for Football Tickets</h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-500 font-bold mr-3">✔</span>
                <div>
                  <h4 className="font-semibold">Official and Resale Marketplace</h4>
                  <p>We offer a safe and secure platform for both official and resale tickets, giving you more options.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 font-bold mr-3">✔</span>
                <div>
                  <h4 className="font-semibold">Real-Time Inventory</h4>
                  <p>Our ticket inventory is updated in real-time, so you always see the most current availability.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 font-bold mr-3">✔</span>
                <div>
                  <h4 className="font-semibold">Global Customer Support</h4>
                  <p>Our multilingual customer support team is ready to assist you at every step.</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Ticket Listings Placeholder */}
          <div id="ticket-listings" className="border-t pt-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Available Tickets for the Champions League Final</h3>
            <div className="text-center text-gray-500 border-2 border-dashed rounded-lg p-12">
              <p className="mb-2">Ticket listings are not yet available.</p>
              <p>Please check back as the tournament progresses for a full list of available tickets.</p>
            </div>
          </div>

          {/* Related Links */}
          <div className="mt-12 border-t pt-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Explore More Champions League Tickets</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link to="/champions-league-semi-final-tickets" className="text-blue-600 hover:underline">Champions League Semi-Final Tickets</Link>
              <Link to="/champions-league-quarter-final-tickets" className="text-blue-600 hover:underline">Champions League Quarter-Final Tickets</Link>
              <Link to="/champions-league-group-stage-tickets" className="text-blue-600 hover:underline">Champions League Group Stage Tickets</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChampionsLeagueFinalTicketsPage;
