
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const EuropaLeagueFinalTicketsPage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Helmet>
        <title>Europa League Final Tickets | A Night of European Glory</title>
        <meta name="description" content="Book your tickets for the UEFA Europa League Final. Experience the excitement as two of Europe's top teams compete for the coveted trophy." />
        <meta name="keywords" content="europa league final tickets, uefa europa league final tickets, buy europa league final tickets, official europa league final tickets" />
        <link rel="canonical" href="https://www.ticketsfootball.com/europa-league-final-tickets" />
      </Helmet>

      <div className="container mx-auto px-4 py-12">
        {/* Breadcrumbs */}
        <div className="text-sm text-gray-600 mb-6">
          <Link to="/" className="hover:text-green-600">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/europa-league-tickets" className="hover:text-green-600">Europa League Tickets</Link>
          <span className="mx-2">/</span>
          <span className="font-semibold">Europa League Final Tickets</span>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-lg shadow-xl p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Europa League Final Tickets</h1>
          <p className="text-lg text-gray-700 mb-6">
            The UEFA Europa League Final is a showcase of some of Europe's most historic and passionate clubs. It's a chance to see rising stars and established veterans battle for a major European honor.          </p>

          {/* Call to Action */}
          <div className="bg-orange-100 border-l-4 border-orange-500 text-orange-800 p-6 rounded-lg mb-8">
            <h2 className="text-2xl font-semibold mb-2">Get Your Europa League Final Tickets!</h2>
            <p className="mb-4">The Europa League Final is always a memorable occasion. Secure your tickets now to be part of the incredible atmosphere.</p>
            <a href="#ticket-listings" className="bg-orange-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-orange-600 transition-colors flex items-center w-max">
              View Ticket Listings <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>

          {/* Why Choose Us */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">The Smart Choice for Football Tickets</h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-orange-500 font-bold mr-3">✔</span>
                <div>
                  <h4 className="font-semibold">Great Value</h4>
                  <p>The Europa League Final offers a chance to see a major European final at a more accessible price point.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 font-bold mr-3">✔</span>
                <div>
                  <h4 className="font-semibold">Passionate Fans</h4>
                  <p>Experience an electric atmosphere created by some of the most dedicated fans in football.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 font-bold mr-3">✔</span>
                <div>
                  <h4 className="font-semibold">Secure Booking</h4>
                  <p>Our secure platform and dedicated customer service ensure a smooth and safe transaction.</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Ticket Listings Placeholder */}
          <div id="ticket-listings" className="border-t pt-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Available Tickets for the Europa League Final</h3>
            <div className="text-center text-gray-500 border-2 border-dashed rounded-lg p-12">
              <p className="mb-2">Ticket listings are not yet available.</p>
              <p>Please check back as the tournament progresses for a full list of available tickets.</p>
            </div>
          </div>

          {/* Related Links */}
          <div className="mt-12 border-t pt-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Explore More Europa League Tickets</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link to="/europa-league-semi-final-tickets" className="text-orange-500 hover:underline">Europa League Semi-Final Tickets</Link>
              <Link to="/europa-league-quarter-final-tickets" className="text-orange-500 hover:underline">Europa League Quarter-Final Tickets</Link>
              <Link to="/europa-league-group-stage-tickets" className="text-orange-500 hover:underline">Europa League Group Stage Tickets</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EuropaLeagueFinalTicketsPage;
