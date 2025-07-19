
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const MarseilleTicketsPage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Helmet>
        <title>Olympique de Marseille Tickets | See Les Phocéens at Orange Vélodrome!</title>
        <meta name="description" content="Buy official Olympique de Marseille tickets for Ligue 1, Champions League, Europa League, and Coupe de France matches. Experience the passionate atmosphere at Orange Vélodrome." />
        <meta name="keywords" content="marseille tickets, olympique marseille tickets, les phoceens tickets, orange velodrome tickets, ligue 1 marseille tickets, europa league marseille tickets" />
        <link rel="canonical" href="https://www.ticketsfootball.com/marseille-tickets" />
      </Helmet>

      <div className="container mx-auto px-4 py-12">
        {/* Breadcrumbs */}
        <div className="text-sm text-gray-600 mb-6">
          <Link to="/" className="hover:text-green-600">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/ligue-1-tickets" className="hover:text-green-600">Ligue 1 Tickets</Link>
          <span className="mx-2">/</span>
          <span className="font-semibold">Marseille Tickets</span>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-lg shadow-xl p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Olympique de Marseille Tickets</h1>
          <p className="text-lg text-gray-700 mb-6">
            Experience the electric atmosphere and passionate support of Olympique de Marseille at the Orange Vélodrome. Les Phocéens are one of France's most historic and successful clubs, with a dedicated fanbase and a strong presence in European competitions.          </p>

          {/* Call to Action */}
          <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-800 p-6 rounded-lg mb-8">
            <h2 className="text-2xl font-semibold mb-2">Secure Your Marseille Tickets!</h2>
            <p className="mb-4">Tickets for Olympique de Marseille matches are always in high demand. Don't miss your chance to be part of the action at Orange Vélodrome.</p>
            <a href="#ticket-listings" className="bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors flex items-center w-max">
              View Ticket Listings <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>

          {/* Why Choose Us */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Your Trusted Source for Marseille Tickets</h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-500 font-bold mr-3">✔</span>
                <div>
                  <h4 className="font-semibold">Wide Selection</h4>
                  <p>We offer a comprehensive selection of tickets for all Olympique de Marseille home and away matches.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 font-bold mr-3">✔</span>
                <div>
                  <h4 className="font-semibold">Authenticity Guaranteed</h4>
                  <p>All tickets are sourced from trusted suppliers and are 100% authentic.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 font-bold mr-3">✔</span>
                <div>
                  <h4 className="font-semibold">Secure Transactions</h4>
                  <p>Our platform ensures a safe and secure purchasing experience.</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Ticket Listings Placeholder */}
          <div id="ticket-listings" className="border-t pt-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Available Tickets for Olympique de Marseille Matches</h3>
            <div className="text-center text-gray-500 border-2 border-dashed rounded-lg p-12">
              <p className="mb-2">Ticket listings are not yet available.</p>
              <p>Please check back closer to match dates for a full list of available tickets.</p>
            </div>
          </div>

          {/* Related Links */}
          <div className="mt-12 border-t pt-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Explore More French Football Tickets</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link to="/ligue-1-tickets" className="text-blue-600 hover:underline">Ligue 1 Tickets</Link>
              <Link to="/champions-league-tickets" className="text-blue-600 hover:underline">Champions League Tickets</Link>
              <Link to="/coupe-de-france-tickets" className="text-blue-600 hover:underline">Coupe de France Tickets</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarseilleTicketsPage;
