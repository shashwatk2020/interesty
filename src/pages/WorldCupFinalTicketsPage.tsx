
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const WorldCupFinalTicketsPage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Helmet>
        <title>World Cup Final Tickets | Secure Your Seat at the Biggest Match!</title>
        <meta name="description" content="Find and buy official World Cup Final tickets. Experience the thrill of the final match and witness history in the making. Secure, verified, and guaranteed tickets." />
        <meta name="keywords" content="world cup final tickets, 2026 world cup final tickets, buy world cup final tickets, official world cup final tickets, world cup final match tickets" />
        <link rel="canonical" href="https://www.ticketsfootball.com/world-cup-final-tickets" />
      </Helmet>

      <div className="container mx-auto px-4 py-12">
        {/* Breadcrumbs */}
        <div className="text-sm text-gray-600 mb-6">
          <Link to="/" className="hover:text-green-600">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/world-cup-tickets" className="hover:text-green-600">World Cup Tickets</Link>
          <span className="mx-2">/</span>
          <span className="font-semibold">World Cup Final Tickets</span>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-lg shadow-xl p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">World Cup Final Tickets</h1>
          <p className="text-lg text-gray-700 mb-6">
            The World Cup Final is more than just a football match; it's a global spectacle that captivates billions. This is your chance to be part of the electric atmosphere and witness the crowning of a new world champion. Don't miss out on this once-in-a-lifetime experience!
          </p>

          {/* Call to Action */}
          <div className="bg-green-100 border-l-4 border-green-500 text-green-800 p-6 rounded-lg mb-8">
            <h2 className="text-2xl font-semibold mb-2">Secure Your Tickets Now!</h2>
            <p className="mb-4">Tickets for the World Cup Final are in extremely high demand. Browse our available inventory and secure your seat today to avoid disappointment.</p>
            <a href="#ticket-listings" className="bg-green-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-700 transition-colors flex items-center w-max">
              View Ticket Listings <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>

          {/* Why Choose Us */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Why Buy World Cup Final Tickets From Us?</h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-500 font-bold mr-3">✔</span>
                <div>
                  <h4 className="font-semibold">100% Authenticity Guarantee</h4>
                  <p>We only work with trusted and verified sellers to ensure every ticket is authentic.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 font-bold mr-3">✔</span>
                <div>
                  <h4 className="font-semibold">Secure and Safe Transactions</h4>
                  <p>Our platform uses industry-leading security to protect your personal and payment information.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 font-bold mr-3">✔</span>
                <div>
                  <h4 className="font-semibold">On-Time Delivery</h4>
                  <p>We guarantee that you will receive your tickets in time for the match, either electronically or via secure courier.</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Ticket Listings Placeholder */}
          <div id="ticket-listings" className="border-t pt-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Available Tickets for the World Cup Final</h3>
            <div className="text-center text-gray-500 border-2 border-dashed rounded-lg p-12">
              <p className="mb-2">Ticket listings are not yet available.</p>
              <p>Please check back closer to the event date for a full list of available tickets.</p>
            </div>
          </div>

          {/* Related Links */}
          <div className="mt-12 border-t pt-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Explore More World Cup Tickets</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link to="/world-cup-semi-final-tickets" className="text-green-600 hover:underline">World Cup Semi Final Tickets</Link>
              <Link to="/world-cup-quarter-final-tickets" className="text-green-600 hover:underline">World Cup Quarter Final Tickets</Link>
              <Link to="/world-cup-group-stage-tickets" className="text-green-600 hover:underline">World Cup Group Stage Tickets</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorldCupFinalTicketsPage;
