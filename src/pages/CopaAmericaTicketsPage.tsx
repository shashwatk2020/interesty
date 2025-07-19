
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CopaAmericaTicketsPage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Helmet>
        <title>Copa América Tickets | South America's Premier Football Tournament</title>
        <meta name="description" content="Buy official Copa América tickets for all matches. Experience the passion, skill, and drama of South America's most prestigious international football competition." />
        <meta name="keywords" content="copa america tickets, conmebol copa america tickets, south america football tickets, buy copa america tickets, argentina tickets, brazil tickets" />
        <link rel="canonical" href="https://www.ticketsfootball.com/copa-america-tickets" />
      </Helmet>

      <div className="container mx-auto px-4 py-12">
        {/* Breadcrumbs */}
        <div className="text-sm text-gray-600 mb-6">
          <Link to="/" className="hover:text-green-600">Home</Link>
          <span className="mx-2">/</span>
          <span className="font-semibold">Copa América Tickets</span>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-lg shadow-xl p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Copa América Tickets</h1>
          <p className="text-lg text-gray-700 mb-6">
            Immerse yourself in the vibrant and passionate world of South American football with Copa América tickets. Witness the flair, skill, and intense rivalries as the continent's best battle for supremacy.          </p>

          {/* Call to Action */}
          <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-800 p-6 rounded-lg mb-8">
            <h2 className="text-2xl font-semibold mb-2">Secure Your Copa América Experience!</h2>
            <p className="mb-4">Don't miss out on the excitement. Find your tickets for upcoming Copa América matches and witness the action live.</p>
            <a href="#ticket-listings" className="bg-yellow-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-yellow-600 transition-colors flex items-center w-max">
              View Ticket Listings <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>

          {/* Why Choose Us */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Your Trusted Source for Copa América Tickets</h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-yellow-500 font-bold mr-3">✔</span>
                <div>
                  <h4 className="font-semibold">Wide Selection</h4>
                  <p>We offer a comprehensive selection of tickets for all Copa América matches, including group stages and knockout rounds.</p>
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
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Available Tickets for Copa América Matches</h3>
            <div className="text-center text-gray-500 border-2 border-dashed rounded-lg p-12">
              <p className="mb-2">Ticket listings are not yet available.</p>
              <p>Please check back closer to match dates for a full list of available tickets.</p>
            </div>
          </div>

          {/* Related Links */}
          <div className="mt-12 border-t pt-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Explore More International Football</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link to="/world-cup-qualifiers-tickets" className="text-yellow-600 hover:underline">World Cup Qualifiers Tickets</Link>
              <Link to="/argentina-tickets" className="text-yellow-600 hover:underline">Argentina Tickets</Link>
              <Link to="/brazil-tickets" className="text-yellow-600 hover:underline">Brazil Tickets</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CopaAmericaTicketsPage;
