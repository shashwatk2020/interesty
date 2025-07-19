
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const ManchesterUnitedVsManchesterCityTicketsPage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Helmet>
        <title>Manchester United vs Manchester City Tickets | The Manchester Derby!</title>
        <meta name="description" content="Buy official tickets for Manchester United vs Manchester City matches. Witness the fierce Manchester derby live. Secure your seats for this epic clash." />
        <meta name="keywords" content="manchester united vs manchester city tickets, manchester derby tickets, man utd man city football, buy man utd man city tickets, premier league derby tickets" />
        <link rel="canonical" href="https://www.ticketsfootball.com/manchester-united-vs-manchester-city-tickets" />
      </Helmet>

      <div className="container mx-auto px-4 py-12">
        {/* Breadcrumbs */}
        <div className="text-sm text-gray-600 mb-6">
          <Link to="/" className="hover:text-green-600">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/premier-league-tickets" className="hover:text-green-600">Premier League Tickets</Link>
          <span className="mx-2">/</span>
          <span className="font-semibold">Manchester United vs Manchester City Tickets</span>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-lg shadow-xl p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Manchester United vs Manchester City Tickets</h1>
          <p className="text-lg text-gray-700 mb-6">
            The Manchester Derby is a clash of titans, pitting two of the Premier League's most successful and passionate clubs against each other. Witness the battle for city bragging rights and crucial league points.          </p>

          {/* Call to Action */}
          <div className="bg-red-100 border-l-4 border-red-500 text-red-800 p-6 rounded-lg mb-8">
            <h2 className="text-2xl font-semibold mb-2">Secure Your Derby Tickets!</h2>
            <p className="mb-4">Matches between Manchester United and Manchester City are always sell-outs. Don't miss your chance to experience this legendary rivalry live.</p>
            <a href="#ticket-listings" className="bg-red-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-red-700 transition-colors flex items-center w-max">
              View Ticket Listings <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>

          {/* Why Choose Us */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Your Trusted Source for Premier League Derby Tickets</h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-red-500 font-bold mr-3">✔</span>
                <div>
                  <h4 className="font-semibold">High-Demand Access</h4>
                  <p>We specialize in securing tickets for the most sought-after Premier League fixtures.</p>
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
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Available Tickets for Manchester United vs Manchester City</h3>
            <div className="text-center text-gray-500 border-2 border-dashed rounded-lg p-12">
              <p className="mb-2">Ticket listings are not yet available.</p>
              <p>Please check back closer to match dates for a full list of available tickets.</p>
            </div>
          </div>

          {/* Related Links */}
          <div className="mt-12 border-t pt-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Explore More Premier League Tickets</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link to="/premier-league-tickets" className="text-red-600 hover:underline">Premier League Tickets</Link>
              <Link to="/manchester-united-tickets" className="text-red-600 hover:underline">Manchester United Tickets</Link>
              <Link to="/manchester-city-tickets" className="text-red-600 hover:underline">Manchester City Tickets</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManchesterUnitedVsManchesterCityTicketsPage;
