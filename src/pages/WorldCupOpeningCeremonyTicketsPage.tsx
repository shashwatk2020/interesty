
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const WorldCupOpeningCeremonyTicketsPage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Helmet>
        <title>World Cup Opening Ceremony Tickets | Witness the Grand Kick-off!</title>
        <meta name="description" content="Buy official tickets for the FIFA World Cup Opening Ceremony. Be part of the spectacular start to the biggest football tournament on the planet." />
        <meta name="keywords" content="world cup opening ceremony tickets, fifa world cup opening tickets, world cup kick-off tickets, buy world cup opening ceremony tickets" />
        <link rel="canonical" href="https://www.ticketsfootball.com/world-cup-opening-ceremony-tickets" />
      </Helmet>

      <div className="container mx-auto px-4 py-12">
        {/* Breadcrumbs */}
        <div className="text-sm text-gray-600 mb-6">
          <Link to="/" className="hover:text-green-600">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/world-cup-tickets" className="hover:text-green-600">World Cup Tickets</Link>
          <span className="mx-2">/</span>
          <span className="font-semibold">World Cup Opening Ceremony Tickets</span>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-lg shadow-xl p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">World Cup Opening Ceremony Tickets</h1>
          <p className="text-lg text-gray-700 mb-6">
            The FIFA World Cup Opening Ceremony is a dazzling spectacle of culture, music, and celebration, marking the official start of the world's most anticipated football tournament. It's an event that sets the stage for a month of thrilling action.          </p>

          {/* Call to Action */}
          <div className="bg-green-100 border-l-4 border-green-500 text-green-800 p-6 rounded-lg mb-8">
            <h2 className="text-2xl font-semibold mb-2">Be There for the Grand Opening!</h2>
            <p className="mb-4">Tickets for the World Cup Opening Ceremony are a unique opportunity to witness the start of a global phenomenon. Secure your place at this unforgettable event.</p>
            <a href="#ticket-listings" className="bg-green-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-700 transition-colors flex items-center w-max">
              View Ticket Listings <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>

          {/* Why Choose Us */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Your Trusted Source for World Cup Event Tickets</h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-500 font-bold mr-3">✔</span>
                <div>
                  <h4 className="font-semibold">Exclusive Access</h4>
                  <p>We provide access to tickets for all major World Cup events, including the opening and closing ceremonies.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 font-bold mr-3">✔</span>
                <div>
                  <h4 className="font-semibold">Authenticity Guaranteed</h4>
                  <p>All tickets are sourced from trusted suppliers and are 100% authentic.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 font-bold mr-3">✔</span>
                <div>
                  <h4 className="font-semibold">Secure Transactions</h4>
                  <p>Our platform ensures a safe and secure purchasing experience.</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Ticket Listings Placeholder */}
          <div id="ticket-listings" className="border-t pt-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Available Tickets for World Cup Opening Ceremony</h3>
            <div className="text-center text-gray-500 border-2 border-dashed rounded-lg p-12">
              <p className="mb-2">Ticket listings are not yet available.</p>
              <p>Please check back closer to the event date for a full list of available tickets.</p>
            </div>
          </div>

          {/* Related Links */}
          <div className="mt-12 border-t pt-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Explore More World Cup Events</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link to="/world-cup-tickets" className="text-green-600 hover:underline">World Cup Tickets</Link>
              <Link to="/world-cup-final-tickets" className="text-green-600 hover:underline">World Cup Final Tickets</Link>
              <Link to="/world-cup-closing-ceremony-tickets" className="text-green-600 hover:underline">World Cup Closing Ceremony Tickets</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorldCupOpeningCeremonyTicketsPage;
