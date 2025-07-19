
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const LaLigaSeasonOpenerTicketsPage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Helmet>
        <title>La Liga Season Opener Tickets | Kick-off the New Spanish Season!</title>
        <meta name="description" content="Buy official La Liga Season Opener tickets. Be there for the exciting start of the new Spanish football season. Secure your seats for the first matches." />
        <meta name="keywords" content="la liga season opener tickets, la liga opening day tickets, spanish football season start tickets, buy la liga opener tickets" />
        <link rel="canonical" href="https://www.ticketsfootball.com/la-liga-season-opener-tickets" />
      </Helmet>

      <div className="container mx-auto px-4 py-12">
        {/* Breadcrumbs */}
        <div className="text-sm text-gray-600 mb-6">
          <Link to="/" className="hover:text-green-600">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/la-liga-tickets" className="hover:text-green-600">La Liga Tickets</Link>
          <span className="mx-2">/</span>
          <span className="font-semibold">La Liga Season Opener Tickets</span>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-lg shadow-xl p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">La Liga Season Opener Tickets</h1>
          <p className="text-lg text-gray-700 mb-6">
            The La Liga Season Opener is the highly anticipated kick-off to the new Spanish football campaign. Witness the excitement as teams begin their quest for glory, with new signings, fresh hopes, and passionate fans.          </p>

          {/* Call to Action */}
          <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-800 p-6 rounded-lg mb-8">
            <h2 className="text-2xl font-semibold mb-2">Be There for the First Whistle!</h2>
            <p className="mb-4">Tickets for the La Liga Season Opener are always in high demand. Secure your place to witness the start of another thrilling season.</p>
            <a href="#ticket-listings" className="bg-yellow-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-yellow-600 transition-colors flex items-center w-max">
              View Ticket Listings <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>

          {/* Why Choose Us */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Your Trusted Source for La Liga Tickets</h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-yellow-500 font-bold mr-3">✔</span>
                <div>
                  <h4 className="font-semibold">Wide Selection</h4>
                  <p>We offer a comprehensive selection of tickets for all La Liga opening weekend matches.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 font-bold mr-3">✔</span>
                <div>
                  <h4 className="font-semibold">Authenticity Guaranteed</h4>
                  <p>All tickets are sourced from trusted suppliers and are 100% authentic.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 font-bold mr-3">✔</span>
                <div>
                  <h4 className="font-semibold">Secure Transactions</h4>
                  <p>Our platform ensures a safe and secure purchasing experience.</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Ticket Listings Placeholder */}
          <div id="ticket-listings" className="border-t pt-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Available Tickets for La Liga Season Opener</h3>
            <div className="text-center text-gray-500 border-2 border-dashed rounded-lg p-12">
              <p className="mb-2">Ticket listings are not yet available.</p>
              <p>Please check back closer to the event date for a full list of available tickets.</p>
            </div>
          </div>

          {/* Related Links */}
          <div className="mt-12 border-t pt-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Explore More La Liga Events</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link to="/la-liga-tickets" className="text-yellow-600 hover:underline">La Liga Tickets</Link>
              <Link to="/la-liga-final-day-tickets" className="text-yellow-600 hover:underline">La Liga Final Day Tickets</Link>
              <Link to="/el-clasico-tickets" className="text-yellow-600 hover:underline">El Clásico Tickets</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaLigaSeasonOpenerTicketsPage;
