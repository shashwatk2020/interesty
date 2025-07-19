
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const ConferenceLeagueTicketsPage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Helmet>
        <title>UEFA Europa Conference League Tickets | Europe's New Frontier</title>
        <meta name="description" content="Buy official UEFA Europa Conference League tickets for all matches. Experience the excitement of Europe's newest club competition." />
        <meta name="keywords" content="conference league tickets, europa conference league tickets, uefa conference league tickets, buy conference league tickets" />
        <link rel="canonical" href="https://www.ticketsfootball.com/conference-league-tickets" />
      </Helmet>

      <div className="container mx-auto px-4 py-12">
        {/* Breadcrumbs */}
        <div className="text-sm text-gray-600 mb-6">
          <Link to="/" className="hover:text-green-600">Home</Link>
          <span className="mx-2">/</span>
          <span className="font-semibold">UEFA Europa Conference League Tickets</span>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-lg shadow-xl p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">UEFA Europa Conference League Tickets</h1>
          <p className="text-lg text-gray-700 mb-6">
            The UEFA Europa Conference League offers a new stage for clubs across Europe to compete for continental glory. Experience the excitement of emerging talents and passionate fanbases in this dynamic competition.          </p>

          {/* Call to Action */}
          <div className="bg-purple-100 border-l-4 border-purple-500 text-purple-800 p-6 rounded-lg mb-8">
            <h2 className="text-2xl font-semibold mb-2">Secure Your Conference League Tickets!</h2>
            <p className="mb-4">Don't miss out on the excitement. Find your tickets for upcoming Europa Conference League matches and witness the action live.</p>
            <a href="#ticket-listings" className="bg-purple-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-purple-600 transition-colors flex items-center w-max">
              View Ticket Listings <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>

          {/* Why Choose Us */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Your Trusted Source for European Football Tickets</h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-purple-500 font-bold mr-3">✔</span>
                <div>
                  <h4 className="font-semibold">Wide Selection</h4>
                  <p>We offer a comprehensive selection of tickets for all Europa Conference League matches.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 font-bold mr-3">✔</span>
                <div>
                  <h4 className="font-semibold">Authenticity Guaranteed</h4>
                  <p>All tickets are sourced from trusted suppliers and are 100% authentic.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 font-bold mr-3">✔</span>
                <div>
                  <h4 className="font-semibold">Secure Transactions</h4>
                  <p>Our platform ensures a safe and secure purchasing experience.</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Ticket Listings Placeholder */}
          <div id="ticket-listings" className="border-t pt-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Available Tickets for UEFA Europa Conference League Matches</h3>
            <div className="text-center text-gray-500 border-2 border-dashed rounded-lg p-12">
              <p className="mb-2">Ticket listings are not yet available.</p>
              <p>Please check back closer to match dates for a full list of available tickets.</p>
            </div>
          </div>

          {/* Related Links */}
          <div className="mt-12 border-t pt-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Explore More European Football</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link to="/champions-league-tickets" className="text-purple-600 hover:underline">Champions League Tickets</Link>
              <Link to="/europa-league-tickets" className="text-purple-600 hover:underline">Europa League Tickets</Link>
              <Link to="/conference-league-final-tickets" className="text-purple-600 hover:underline">Conference League Final Tickets</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConferenceLeagueTicketsPage;
