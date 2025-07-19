
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const BayerLeverkusenTicketsPage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Helmet>
        <title>Bayer 04 Leverkusen Tickets | See Die Werkself at BayArena!</title>
        <meta name="description" content="Buy official Bayer 04 Leverkusen tickets for Bundesliga, Europa League, and DFB-Pokal matches. Experience the exciting football at BayArena." />
        <meta name="keywords" content="bayer leverkusen tickets, die werkself tickets, bayarena tickets, bundesliga leverkusen tickets, europa league leverkusen tickets" />
        <link rel="canonical" href="https://www.ticketsfootball.com/bayer-leverkusen-tickets" />
      </Helmet>

      <div className="container mx-auto px-4 py-12">
        {/* Breadcrumbs */}
        <div className="text-sm text-gray-600 mb-6">
          <Link to="/" className="hover:text-green-600">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/bundesliga-tickets" className="hover:text-green-600">Bundesliga Tickets</Link>
          <span className="mx-2">/</span>
          <span className="font-semibold">Bayer Leverkusen Tickets</span>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-lg shadow-xl p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Bayer 04 Leverkusen Tickets</h1>
          <p className="text-lg text-gray-700 mb-6">
            Experience the exciting and attacking football of Bayer 04 Leverkusen at the BayArena. Die Werkself are known for their dynamic play and their ability to challenge for top honors in Germany and Europe.          </p>

          {/* Call to Action */}
          <div className="bg-red-100 border-l-4 border-red-500 text-red-800 p-6 rounded-lg mb-8">
            <h2 className="text-2xl font-semibold mb-2">Secure Your Leverkusen Tickets!</h2>
            <p className="mb-4">Tickets for Bayer Leverkusen matches are always in high demand. Don't miss your chance to be part of the action at BayArena.</p>
            <a href="#ticket-listings" className="bg-red-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-red-700 transition-colors flex items-center w-max">
              View Ticket Listings <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>

          {/* Why Choose Us */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Your Trusted Source for Leverkusen Tickets</h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-red-500 font-bold mr-3">✔</span>
                <div>
                  <h4 className="font-semibold">Wide Selection</h4>
                  <p>We offer a comprehensive selection of tickets for all Bayer 04 Leverkusen home and away matches.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 font-bold mr-3">✔</span>
                <div>
                  <h4 className="font-semibold">Authenticity Guaranteed</h4>
                  <p>All tickets are sourced from trusted suppliers and are 100% authentic.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 font-bold mr-3">✔</span>
                <div>
                  <h4 className="font-semibold">Secure Transactions</h4>
                  <p>Our platform ensures a safe and secure purchasing experience.</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Ticket Listings Placeholder */}
          <div id="ticket-listings" className="border-t pt-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Available Tickets for Bayer 04 Leverkusen Matches</h3>
            <div className="text-center text-gray-500 border-2 border-dashed rounded-lg p-12">
              <p className="mb-2">Ticket listings are not yet available.</p>
              <p>Please check back closer to match dates for a full list of available tickets.</p>
            </div>
          </div>

          {/* Related Links */}
          <div className="mt-12 border-t pt-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Explore More German Football Tickets</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link to="/bundesliga-tickets" className="text-red-600 hover:underline">Bundesliga Tickets</Link>
              <Link to="/europa-league-tickets" className="text-red-600 hover:underline">Europa League Tickets</Link>
              <Link to="/dfb-pokal-tickets" className="text-red-600 hover:underline">DFB-Pokal Tickets</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BayerLeverkusenTicketsPage;
