
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const WestHamTicketsPage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Helmet>
        <title>West Ham United Tickets | See The Hammers at London Stadium!</title>
        <meta name="description" content="Buy official West Ham United tickets for Premier League, Europa League, FA Cup, and League Cup matches. Experience the atmosphere at London Stadium." />
        <meta name="keywords" content="west ham tickets, hammers tickets, london stadium tickets, premier league west ham tickets, europa league west ham tickets" />
        <link rel="canonical" href="https://www.ticketsfootball.com/west-ham-tickets" />
      </Helmet>

      <div className="container mx-auto px-4 py-12">
        {/* Breadcrumbs */}
        <div className="text-sm text-gray-600 mb-6">
          <Link to="/" className="hover:text-green-600">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/premier-league-tickets" className="hover:text-green-600">Premier League Tickets</Link>
          <span className="mx-2">/</span>
          <span className="font-semibold">West Ham Tickets</span>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-lg shadow-xl p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">West Ham United Tickets</h1>
          <p className="text-lg text-gray-700 mb-6">
            Experience the passionate support and exciting football of West Ham United at London Stadium. The Hammers are a club with a rich history and a loyal fanbase, always creating a fantastic atmosphere.          </p>

          {/* Call to Action */}
          <div className="bg-claret-100 border-l-4 border-claret-500 text-claret-800 p-6 rounded-lg mb-8">
            <h2 className="text-2xl font-semibold mb-2">Secure Your Hammers Tickets!</h2>
            <p className="mb-4">Tickets for West Ham United matches are always in high demand. Don't miss your chance to be part of the action at London Stadium.</p>
            <a href="#ticket-listings" className="bg-claret-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-claret-700 transition-colors flex items-center w-max">
              View Ticket Listings <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>

          {/* Why Choose Us */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Your Trusted Source for West Ham Tickets</h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-claret-500 font-bold mr-3">✔</span>
                <div>
                  <h4 className="font-semibold">Wide Selection</h4>
                  <p>We offer a comprehensive selection of tickets for all West Ham United home and away matches.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-claret-500 font-bold mr-3">✔</span>
                <div>
                  <h4 className="font-semibold">Authenticity Guaranteed</h4>
                  <p>All tickets are sourced from trusted suppliers and are 100% authentic.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-claret-500 font-bold mr-3">✔</span>
                <div>
                  <h4 className="font-semibold">Secure Transactions</h4>
                  <p>Our platform ensures a safe and secure purchasing experience.</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Ticket Listings Placeholder */}
          <div id="ticket-listings" className="border-t pt-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Available Tickets for West Ham United Matches</h3>
            <div className="text-center text-gray-500 border-2 border-dashed rounded-lg p-12">
              <p className="mb-2">Ticket listings are not yet available.</p>
              <p>Please check back closer to match dates for a full list of available tickets.</p>
            </div>
          </div>

          {/* Related Links */}
          <div className="mt-12 border-t pt-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Explore More Premier League Tickets</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link to="/premier-league-tickets" className="text-claret-600 hover:underline">Premier League Tickets</Link>
              <Link to="/europa-league-tickets" className="text-claret-600 hover:underline">Europa League Tickets</Link>
              <Link to="/west-ham-vs-tottenham-tickets" className="text-claret-600 hover:underline">West Ham vs Tottenham Tickets</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WestHamTicketsPage;
