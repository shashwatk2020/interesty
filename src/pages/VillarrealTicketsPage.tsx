
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const VillarrealTicketsPage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Helmet>
        <title>Villarreal CF Tickets | See El Submarino Amarillo at Estadio de la Cerámica!</title>
        <meta name="description" content="Buy official Villarreal CF tickets for La Liga, Europa League, and Copa del Rey matches. Experience the passion of El Submarino Amarillo." />
        <meta name="keywords" content="villarreal tickets, submarino amarillo tickets, estadio de la ceramica tickets, la liga villarreal tickets, europa league villarreal tickets" />
        <link rel="canonical" href="https://www.ticketsfootball.com/villarreal-tickets" />
      </Helmet>

      <div className="container mx-auto px-4 py-12">
        {/* Breadcrumbs */}
        <div className="text-sm text-gray-600 mb-6">
          <Link to="/" className="hover:text-green-600">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/la-liga-tickets" className="hover:text-green-600">La Liga Tickets</Link>
          <span className="mx-2">/</span>
          <span className="font-semibold">Villarreal Tickets</span>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-lg shadow-xl p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Villarreal CF Tickets</h1>
          <p className="text-lg text-gray-700 mb-6">
            Experience the exciting and technical football of Villarreal CF at the Estadio de la Cerámica. El Submarino Amarillo are known for their attractive style of play and strong performances in European competitions.          </p>

          {/* Call to Action */}
          <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-800 p-6 rounded-lg mb-8">
            <h2 className="text-2xl font-semibold mb-2">Secure Your Villarreal Tickets!</h2>
            <p className="mb-4">Tickets for Villarreal matches are always in high demand. Don't miss your chance to be part of the action at Estadio de la Cerámica.</p>
            <a href="#ticket-listings" className="bg-yellow-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-yellow-600 transition-colors flex items-center w-max">
              View Ticket Listings <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>

          {/* Why Choose Us */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Your Trusted Source for Villarreal Tickets</h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-yellow-500 font-bold mr-3">✔</span>
                <div>
                  <h4 className="font-semibold">Wide Selection</h4>
                  <p>We offer a comprehensive selection of tickets for all Villarreal CF home and away matches.</p>
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
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Available Tickets for Villarreal CF Matches</h3>
            <div className="text-center text-gray-500 border-2 border-dashed rounded-lg p-12">
              <p className="mb-2">Ticket listings are not yet available.</p>
              <p>Please check back closer to match dates for a full list of available tickets.</p>
            </div>
          </div>

          {/* Related Links */}
          <div className="mt-12 border-t pt-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Explore More Spanish Football Tickets</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link to="/la-liga-tickets" className="text-yellow-600 hover:underline">La Liga Tickets</Link>
              <Link to="/europa-league-tickets" className="text-yellow-600 hover:underline">Europa League Tickets</Link>
              <Link to="/valencia-tickets" className="text-yellow-600 hover:underline">Valencia Tickets</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VillarrealTicketsPage;
