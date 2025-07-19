
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const ASRomaVsSevillaTicketsPage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Helmet>
        <title>AS Roma vs Sevilla Tickets | Europa League Showdown</title>
        <meta name="description" content="Buy official tickets for AS Roma vs Sevilla matches. Witness the clash of two Europa League powerhouses live. Secure your seats for this exciting encounter." />
        <meta name="keywords" content="as roma vs sevilla tickets, roma sevilla football, buy roma sevilla tickets, europa league rivalry tickets" />
        <link rel="canonical" href="https://www.ticketsfootball.com/as-roma-vs-sevilla-tickets" />
      </Helmet>

      <div className="container mx-auto px-4 py-12">
        {/* Breadcrumbs */}
        <div className="text-sm text-gray-600 mb-6">
          <Link to="/" className="hover:text-green-600">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/europa-league-tickets" className="hover:text-green-600">Europa League Tickets</Link>
          <span className="mx-2">/</span>
          <span className="font-semibold">AS Roma vs Sevilla Tickets</span>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-lg shadow-xl p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">AS Roma vs Sevilla Tickets</h1>
          <p className="text-lg text-gray-700 mb-6">
            Matches between AS Roma and Sevilla are often high-stakes encounters in the Europa League, featuring passionate fanbases and a battle for European supremacy.          </p>

          {/* Call to Action */}
          <div className="bg-orange-100 border-l-4 border-orange-500 text-orange-800 p-6 rounded-lg mb-8">
            <h2 className="text-2xl font-semibold mb-2">Secure Your European Clash Tickets!</h2>
            <p className="mb-4">Don't miss your chance to experience this exciting European fixture live. Tickets are always in high demand for this clash.</p>
            <a href="#ticket-listings" className="bg-orange-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-orange-600 transition-colors flex items-center w-max">
              View Ticket Listings <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>

          {/* Why Choose Us */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Your Trusted Source for Europa League Tickets</h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-orange-500 font-bold mr-3">✔</span>
                <div>
                  <h4 className="font-semibold">High-Demand Access</h4>
                  <p>We specialize in securing tickets for the most sought-after Europa League fixtures.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 font-bold mr-3">✔</span>
                <div>
                  <h4 className="font-semibold">Authenticity Guaranteed</h4>
                  <p>All tickets are sourced from trusted suppliers and are 100% authentic.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 font-bold mr-3">✔</span>
                <div>
                  <h4 className="font-semibold">Secure Transactions</h4>
                  <p>Our platform ensures a safe and secure purchasing experience.</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Ticket Listings Placeholder */}
          <div id="ticket-listings" className="border-t pt-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Available Tickets for AS Roma vs Sevilla</h3>
            <div className="text-center text-gray-500 border-2 border-dashed rounded-lg p-12">
              <p className="mb-2">Ticket listings are not yet available.</p>
              <p>Please check back closer to match dates for a full list of available tickets.</p>
            </div>
          </div>

          {/* Related Links */}
          <div className="mt-12 border-t pt-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Explore More Europa League Tickets</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link to="/europa-league-tickets" className="text-orange-600 hover:underline">Europa League Tickets</Link>
              <Link to="/as-roma-tickets" className="text-orange-600 hover:underline">AS Roma Tickets</Link>
              <Link to="/sevilla-tickets" className="text-orange-600 hover:underline">Sevilla Tickets</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ASRomaVsSevillaTicketsPage;
