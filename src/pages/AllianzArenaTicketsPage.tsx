
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const AllianzArenaTicketsPage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Helmet>
        <title>Allianz Arena Tickets | Experience Bayern Munich's Home!</title>
        <meta name="description" content="Buy official tickets for matches and tours at Allianz Arena, the modern home of Bayern Munich. Immerse yourself in German football culture." />
        <meta name="keywords" content="allianz arena tickets, bayern munich stadium tickets, bayern munich stadium tour, allianz arena experience, buy allianz arena tickets" />
        <link rel="canonical" href="https://www.ticketsfootball.com/allianz-arena-tickets" />
      </Helmet>

      <div className="container mx-auto px-4 py-12">
        {/* Breadcrumbs */}
        <div className="text-sm text-gray-600 mb-6">
          <Link to="/" className="hover:text-green-600">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/venue-tickets" className="hover:text-green-600">Venue Tickets</Link>
          <span className="mx-2">/</span>
          <span className="font-semibold">Allianz Arena Tickets</span>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-lg shadow-xl p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Allianz Arena Tickets</h1>
          <p className="text-lg text-gray-700 mb-6">
            Step into the futuristic Allianz Arena, the impressive home of FC Bayern Munich. Whether you're attending a thrilling Bundesliga match or taking a stadium tour, Allianz Arena offers an unforgettable experience for every football fan.          </p>

          {/* Call to Action */}
          <div className="bg-red-100 border-l-4 border-red-500 text-red-800 p-6 rounded-lg mb-8">
            <h2 className="text-2xl font-semibold mb-2">Secure Your Allianz Arena Experience!</h2>
            <p className="mb-4">Tickets for Allianz Arena matches and tours are always in high demand. Don't miss your chance to visit this modern footballing marvel.</p>
            <a href="#ticket-listings" className="bg-red-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-red-700 transition-colors flex items-center w-max">
              View Tickets & Tours <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>

          {/* Why Choose Us */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Your Trusted Source for Allianz Arena Tickets</h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-red-500 font-bold mr-3">✔</span>
                <div>
                  <h4 className="font-semibold">Official Tickets & Tours</h4>
                  <p>We provide access to official match tickets and stadium tour experiences.</p>
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
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Available Tickets for Allianz Arena</h3>
            <div className="text-center text-gray-500 border-2 border-dashed rounded-lg p-12">
              <p className="mb-2">Ticket listings are not yet available.</p>
              <p>Please check back closer to event dates for a full list of available tickets.</p>
            </div>
          </div>

          {/* Related Links */}
          <div className="mt-12 border-t pt-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Explore More German Venues & Teams</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link to="/bayern-munich-tickets" className="text-red-600 hover:underline">Bayern Munich Tickets</Link>
              <Link to="/signal-iduna-park-tickets" className="text-red-600 hover:underline">Signal Iduna Park Tickets</Link>
              <Link to="/bundesliga-tickets" className="text-red-600 hover:underline">Bundesliga Tickets</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllianzArenaTicketsPage;
