
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const WorldCupRoundOf16TicketsPage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Helmet>
        <title>World Cup Round of 16 Tickets | The Knockout Stage Begins</title>
        <meta name="description" content="Get your tickets for the World Cup Round of 16. The knockout stages are here, and every match is a must-win. Experience the tension and excitement live." />
        <meta name="keywords" content="world cup round of 16 tickets, 2026 world cup round of 16 tickets, buy world cup round of 16 tickets, official world cup round of 16 tickets" />
        <link rel="canonical" href="https://www.ticketsfootball.com/world-cup-round-of-16-tickets" />
      </Helmet>

      <div className="container mx-auto px-4 py-12">
        {/* Breadcrumbs */}
        <div className="text-sm text-gray-600 mb-6">
          <Link to="/" className="hover:text-green-600">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/world-cup-tickets" className="hover:text-green-600">World Cup Tickets</Link>
          <span className="mx-2">/</span>
          <span className="font-semibold">World Cup Round of 16 Tickets</span>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-lg shadow-xl p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">World Cup Round of 16 Tickets</h1>
          <p className="text-lg text-gray-700 mb-6">
            The Round of 16 marks the start of the knockout phase of the World Cup. It's do or die for the 16 remaining teams. One loss, and they're on the next flight home.          </p>

          {/* Call to Action */}
          <div className="bg-green-100 border-l-4 border-green-500 text-green-800 p-6 rounded-lg mb-8">
            <h2 className="text-2xl font-semibold mb-2">Be There for the Knockouts!</h2>
            <p className="mb-4">The Round of 16 delivers some of the most memorable moments in World Cup history. Secure your tickets now to be part of the action.</p>
            <a href="#ticket-listings" className="bg-green-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-700 transition-colors flex items-center w-max">
              View Ticket Listings <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>

          {/* Why Choose Us */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">The Best Place for Tickets</h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-500 font-bold mr-3">✔</span>
                <div>
                  <h4 className="font-semibold">Wide Selection</h4>
                  <p>Choose from a wide selection of tickets to fit your budget and preferences.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 font-bold mr-3">✔</span>
                <div>
                  <h4 className="font-semibold">Easy to Use</h4>
                  <p>Our user-friendly platform makes it easy to find and purchase your tickets in minutes.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 font-bold mr-3">✔</span>
                <div>
                  <h4 className="font-semibold">Mobile Tickets</h4>
                  <p>Receive your tickets directly on your mobile device for convenient access to the stadium.</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Ticket Listings Placeholder */}
          <div id="ticket-listings" className="border-t pt-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Available Tickets for the World Cup Round of 16</h3>
            <div className="text-center text-gray-500 border-2 border-dashed rounded-lg p-12">
              <p className="mb-2">Ticket listings are not yet available.</p>
              <p>Please check back closer to the event date for a full list of available tickets.</p>
            </div>
          </div>

          {/* Related Links */}
          <div className="mt-12 border-t pt-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Plan Your World Cup Adventure</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link to="/world-cup-quarter-final-tickets" className="text-green-600 hover:underline">World Cup Quarter-Final Tickets</Link>
              <Link to="/world-cup-group-stage-tickets" className="text-green-600 hover:underline">World Cup Group Stage Tickets</Link>
              <Link to="/world-cup-final-tickets" className="text-green-600 hover:underline">World Cup Final Tickets</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorldCupRoundOf16TicketsPage;
