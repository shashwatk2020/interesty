
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const WorldCupQuarterFinalTicketsPage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Helmet>
        <title>World Cup Quarter-Final Tickets | Eight Teams, One Dream</title>
        <meta name="description" content="Secure your tickets for the World Cup Quarter-Finals. Witness the final eight teams battle it out for a place in the semi-finals. High-stakes, high-drama football." />
        <meta name="keywords" content="world cup quarter-final tickets, 2026 world cup quarter-final tickets, buy world cup quarter-final tickets, official world cup quarter-final tickets" />
        <link rel="canonical" href="https://www.ticketsfootball.com/world-cup-quarter-final-tickets" />
      </Helmet>

      <div className="container mx-auto px-4 py-12">
        {/* Breadcrumbs */}
        <div className="text-sm text-gray-600 mb-6">
          <Link to="/" className="hover:text-green-600">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/world-cup-tickets" className="hover:text-green-600">World Cup Tickets</Link>
          <span className="mx-2">/</span>
          <span className="font-semibold">World Cup Quarter-Final Tickets</span>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-lg shadow-xl p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">World Cup Quarter-Final Tickets</h1>
          <p className="text-lg text-gray-700 mb-6">
            The quarter-finals are where the World Cup truly heats up. The eight remaining teams face off in knockout matches where any mistake could mean the end of their tournament. Expect intense, end-to-end action.          </p>

          {/* Call to Action */}
          <div className="bg-green-100 border-l-4 border-green-500 text-green-800 p-6 rounded-lg mb-8">
            <h2 className="text-2xl font-semibold mb-2">Book Your Quarter-Final Tickets!</h2>
            <p className="mb-4">Don't miss your chance to see the world's best footballing nations compete for glory. Quarter-final tickets are highly sought after, so book now!</p>
            <a href="#ticket-listings" className="bg-green-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-700 transition-colors flex items-center w-max">
              View Ticket Listings <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>

          {/* Why Choose Us */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Your Trusted Ticket Source</h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-500 font-bold mr-3">✔</span>
                <div>
                  <h4 className="font-semibold">Global Inventory</h4>
                  <p>We provide access to a vast inventory of World Cup tickets from sellers around the world.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 font-bold mr-3">✔</span>
                <div>
                  <h4 className="font-semibold">Transparent Pricing</h4>
                  <p>The price you see is the price you pay. No hidden fees or last-minute surprises.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 font-bold mr-3">✔</span>
                <div>
                  <h4 className="font-semibold">24/7 Customer Service</h4>
                  <p>Our team is available around the clock to help you with your booking.</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Ticket Listings Placeholder */}
          <div id="ticket-listings" className="border-t pt-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Available Tickets for the World Cup Quarter-Finals</h3>
            <div className="text-center text-gray-500 border-2 border-dashed rounded-lg p-12">
              <p className="mb-2">Ticket listings are not yet available.</p>
              <p>Please check back closer to the event date for a full list of available tickets.</p>
            </div>
          </div>

          {/* Related Links */}
          <div className="mt-12 border-t pt-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Continue Your World Cup Journey</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link to="/world-cup-semi-final-tickets" className="text-green-600 hover:underline">World Cup Semi-Final Tickets</Link>
              <Link to="/world-cup-round-16-tickets" className="text-green-600 hover:underline">World Cup Round of 16 Tickets</Link>
              <Link to="/world-cup-group-stage-tickets" className="text-green-600 hover:underline">World Cup Group Stage Tickets</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorldCupQuarterFinalTicketsPage;
