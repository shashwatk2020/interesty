
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const ACMilanTicketsPage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Helmet>
        <title>AC Milan Tickets | See The Rossoneri at San Siro!</title>
        <meta name="description" content="Buy official AC Milan tickets for Serie A, Champions League, Coppa Italia matches. Experience the legendary San Siro." />
        <meta name="keywords" content="ac milan tickets, rossoneri tickets, san siro tickets, serie a ac milan tickets, champions league ac milan tickets" />
        <link rel="canonical" href="https://www.ticketsfootball.com/ac-milan-tickets" />
      </Helmet>

      <div className="container mx-auto px-4 py-12">
        {/* Breadcrumbs */}
        <div className="text-sm text-gray-600 mb-6">
          <Link to="/" className="hover:text-green-600">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/serie-a-tickets" className="hover:text-green-600">Serie A Tickets</Link>
          <span className="mx-2">/</span>
          <span className="font-semibold">AC Milan Tickets</span>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-lg shadow-xl p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">AC Milan Tickets</h1>
          <p className="text-lg text-gray-700 mb-6">
            Experience the rich history and passionate support of AC Milan at the iconic San Siro stadium. The Rossoneri are one of Italy's most successful clubs, with a global fanbase and a legacy of champions.          </p>

          {/* Call to Action */}
          <div className="bg-red-100 border-l-4 border-red-500 text-red-800 p-6 rounded-lg mb-8">
            <h2 className="text-2xl font-semibold mb-2">Secure Your Rossoneri Tickets!</h2>
            <p className="mb-4">Tickets for AC Milan matches are always in high demand. Don't miss your chance to be part of the action at San Siro.</p>
            <a href="#ticket-listings" className="bg-red-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-red-700 transition-colors flex items-center w-max">
              View Ticket Listings <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>

          {/* Why Choose Us */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Your Trusted Source for AC Milan Tickets</h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-red-500 font-bold mr-3">✔</span>
                <div>
                  <h4 className="font-semibold">Wide Selection</h4>
                  <p>We offer a comprehensive selection of tickets for all AC Milan home and away matches.</p>
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
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Available Tickets for AC Milan Matches</h3>
            <div className="text-center text-gray-500 border-2 border-dashed rounded-lg p-12">
              <p className="mb-2">Ticket listings are not yet available.</p>
              <p>Please check back closer to match dates for a full list of available tickets.</p>
            </div>
          </div>

          {/* Related Links */}
          <div className="mt-12 border-t pt-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Explore More Italian Football Tickets</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link to="/serie-a-tickets" className="text-red-600 hover:underline">Serie A Tickets</Link>
              <Link to="/champions-league-tickets" className="text-red-600 hover:underline">Champions League Tickets</Link>
              <Link to="/inter-milan-tickets" className="text-red-600 hover:underline">Inter Milan Tickets</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ACMilanTicketsPage;
