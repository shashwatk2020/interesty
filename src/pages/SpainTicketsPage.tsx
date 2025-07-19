
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const SpainTicketsPage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Helmet>
        <title>Spain National Football Team Tickets | See La Roja Live!</title>
        <meta name="description" content="Buy official Spain national football team tickets for upcoming matches, including World Cup, Euro, and friendly games. Witness the tiki-taka magic of La Roja." />
        <meta name="keywords" content="spain tickets, spain national team tickets, la roja tickets, spanish football tickets, euro qualifiers spain tickets" />
        <link rel="canonical" href="https://www.ticketsfootball.com/spain-tickets" />
      </Helmet>

      <div className="container mx-auto px-4 py-12">
        {/* Breadcrumbs */}
        <div className="text-sm text-gray-600 mb-6">
          <Link to="/" className="hover:text-green-600">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/world-cup-tickets" className="hover:text-green-600">World Cup Tickets</Link>
          <span className="mx-2">/</span>
          <span className="font-semibold">Spain Tickets</span>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-lg shadow-xl p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Spain National Football Team Tickets</h1>
          <p className="text-lg text-gray-700 mb-6">
            Experience the elegant and dominant style of Spanish football. La Roja, known for their intricate passing and technical brilliance, are always a joy to watch.          </p>

          {/* Call to Action */}
          <div className="bg-red-100 border-l-4 border-red-500 text-red-800 p-6 rounded-lg mb-8">
            <h2 className="text-2xl font-semibold mb-2">Secure Your Spain Match Tickets!</h2>
            <p className="mb-4">Tickets for Spain's matches are always in high demand. Don't miss your chance to see the former World and European champions in action.</p>
            <a href="#ticket-listings" className="bg-red-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-red-700 transition-colors flex items-center w-max">
              View Ticket Listings <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>

          {/* Why Choose Us */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Your Trusted Source for Spain Tickets</h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-red-500 font-bold mr-3">✔</span>
                <div>
                  <h4 className="font-semibold">Wide Selection</h4>
                  <p>We offer a comprehensive selection of tickets for all Spain national team matches.</p>
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
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Available Tickets for Spain Matches</h3>
            <div className="text-center text-gray-500 border-2 border-dashed rounded-lg p-12">
              <p className="mb-2">Ticket listings are not yet available.</p>
              <p>Please check back closer to match dates for a full list of available tickets.</p>
            </div>
          </div>

          {/* Related Links */}
          <div className="mt-12 border-t pt-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Explore More Football Tickets</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link to="/world-cup-tickets" className="text-red-600 hover:underline">World Cup Tickets</Link>
              <Link to="/euro-2028-tickets" className="text-red-600 hover:underline">Euro 2028 Tickets</Link>
              <Link to="/spain-vs-germany-tickets" className="text-red-600 hover:underline">Spain vs Germany Tickets</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpainTicketsPage;
