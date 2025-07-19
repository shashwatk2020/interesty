
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const EuroQualifiersTicketsPage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Helmet>
        <title>Euro Qualifiers Tickets | The Road to the European Championship</title>
        <meta name="description" content="Buy official Euro Qualifiers tickets for matches across Europe. Witness nations battle for a spot in the prestigious UEFA European Championship." />
        <meta name="keywords" content="euro qualifiers tickets, uefa euro qualifiers tickets, international football qualifiers tickets, buy euro qualifiers tickets" />
        <link rel="canonical" href="https://www.ticketsfootball.com/euro-qualifiers-tickets" />
      </Helmet>

      <div className="container mx-auto px-4 py-12">
        {/* Breadcrumbs */}
        <div className="text-sm text-gray-600 mb-6">
          <Link to="/" className="hover:text-green-600">Home</Link>
          <span className="mx-2">/</span>
          <span className="font-semibold">Euro Qualifiers Tickets</span>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-lg shadow-xl p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Euro Qualifiers Tickets</h1>
          <p className="text-lg text-gray-700 mb-6">
            The road to the UEFA European Championship is a thrilling journey, filled with intense matches and national pride. Witness your national team, or any team, battle it out in the Euro Qualifiers.          </p>

          {/* Call to Action */}
          <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-800 p-6 rounded-lg mb-8">
            <h2 className="text-2xl font-semibold mb-2">Secure Your Qualifiers Tickets!</h2>
            <p className="mb-4">Don't miss out on the excitement. Find your tickets for upcoming Euro Qualifiers matches and support your team on the road to the European Championship.</p>
            <a href="#ticket-listings" className="bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors flex items-center w-max">
              View Ticket Listings <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>

          {/* Why Choose Us */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Your Trusted Source for International Football Tickets</h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-500 font-bold mr-3">✔</span>
                <div>
                  <h4 className="font-semibold">Wide Selection</h4>
                  <p>We offer a comprehensive selection of tickets for Euro Qualifiers across all groups.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 font-bold mr-3">✔</span>
                <div>
                  <h4 className="font-semibold">Authenticity Guaranteed</h4>
                  <p>All tickets are sourced from trusted suppliers and are 100% authentic.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 font-bold mr-3">✔</span>
                <div>
                  <h4 className="font-semibold">Secure Transactions</h4>
                  <p>Our platform ensures a safe and secure purchasing experience.</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Ticket Listings Placeholder */}
          <div id="ticket-listings" className="border-t pt-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Available Tickets for Euro Qualifiers</h3>
            <div className="text-center text-gray-500 border-2 border-dashed rounded-lg p-12">
              <p className="mb-2">Ticket listings are not yet available.</p>
              <p>Please check back closer to match dates for a full list of available tickets.</p>
            </div>
          </div>

          {/* Related Links */}
          <div className="mt-12 border-t pt-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Explore More International Football</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link to="/euro-2028-tickets" className="text-blue-600 hover:underline">Euro 2028 Tickets</Link>
              <Link to="/world-cup-qualifiers-tickets" className="text-blue-600 hover:underline">World Cup Qualifiers Tickets</Link>
              <Link to="/nations-league-tickets" className="text-blue-600 hover:underline">Nations League Tickets</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EuroQualifiersTicketsPage;
