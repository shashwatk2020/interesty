
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const WomensChampionsLeagueTicketsPage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Helmet>
        <title>UEFA Women's Champions League Tickets | Elite Women's Football</title>
        <meta name="description" content="Buy official UEFA Women's Champions League tickets for all matches, including the final. Witness the best women's club teams in Europe compete for glory." />
        <meta name="keywords" content="womens champions league tickets, uefa womens champions league tickets, women football tickets, buy womens champions league tickets" />
        <link rel="canonical" href="https://www.ticketsfootball.com/womens-champions-league-tickets" />
      </Helmet>

      <div className="container mx-auto px-4 py-12">
        {/* Breadcrumbs */}
        <div className="text-sm text-gray-600 mb-6">
          <Link to="/" className="hover:text-green-600">Home</Link>
          <span className="mx-2">/</span>
          <span className="font-semibold">UEFA Women's Champions League Tickets</span>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-lg shadow-xl p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">UEFA Women's Champions League Tickets</h1>
          <p className="text-lg text-gray-700 mb-6">
            Experience the growing excitement and world-class talent of the UEFA Women's Champions League. Witness the best women's club teams in Europe battle for the most prestigious trophy in women's club football.          </p>

          {/* Call to Action */}
          <div className="bg-pink-100 border-l-4 border-pink-500 text-pink-800 p-6 rounded-lg mb-8">
            <h2 className="text-2xl font-semibold mb-2">Secure Your Women's CL Tickets!</h2>
            <p className="mb-4">Don't miss out on the action. Find your tickets for upcoming UEFA Women's Champions League matches and support the growth of women's football.</p>
            <a href="#ticket-listings" className="bg-pink-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-pink-600 transition-colors flex items-center w-max">
              View Ticket Listings <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>

          {/* Why Choose Us */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Your Trusted Source for Women's Football Tickets</h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-pink-500 font-bold mr-3">✔</span>
                <div>
                  <h4 className="font-semibold">Wide Selection</h4>
                  <p>We offer a comprehensive selection of tickets for all UEFA Women's Champions League matches.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-pink-500 font-bold mr-3">✔</span>
                <div>
                  <h4 className="font-semibold">Authenticity Guaranteed</h4>
                  <p>All tickets are sourced from trusted suppliers and are 100% authentic.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-pink-500 font-bold mr-3">✔</span>
                <div>
                  <h4 className="font-semibold">Secure Transactions</h4>
                  <p>Our platform ensures a safe and secure purchasing experience.</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Ticket Listings Placeholder */}
          <div id="ticket-listings" className="border-t pt-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Available Tickets for UEFA Women's Champions League</h3>
            <div className="text-center text-gray-500 border-2 border-dashed rounded-lg p-12">
              <p className="mb-2">Ticket listings are not yet available.</p>
              <p>Please check back closer to match dates for a full list of available tickets.</p>
            </div>
          </div>

          {/* Related Links */}
          <div className="mt-12 border-t pt-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Explore More Women's Football</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link to="/womens-world-cup-tickets" className="text-pink-600 hover:underline">Women's World Cup Tickets</Link>
              <Link to="/womens-euro-tickets" className="text-pink-600 hover:underline">Women's Euro Tickets</Link>
              <Link to="/nwsl-tickets" className="text-pink-600 hover:underline">NWSL Tickets</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WomensChampionsLeagueTicketsPage;
