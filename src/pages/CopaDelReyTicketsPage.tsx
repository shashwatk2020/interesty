
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CopaDelReyTicketsPage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Helmet>
        <title>Copa del Rey Tickets | Spain's Royal Cup Competition</title>
        <meta name="description" content="Buy official Copa del Rey tickets for all rounds, from the early stages to the final. Experience the passion and drama of Spanish football's premier domestic cup." />
        <meta name="keywords" content="copa del rey tickets, spanish cup tickets, buy copa del rey tickets, official copa del rey tickets, copa del rey final tickets" />
        <link rel="canonical" href="https://www.ticketsfootball.com/copa-del-rey-tickets" />
      </Helmet>

      <div className="container mx-auto px-4 py-12">
        {/* Breadcrumbs */}
        <div className="text-sm text-gray-600 mb-6">
          <Link to="/" className="hover:text-green-600">Home</Link>
          <span className="mx-2">/</span>
          <span className="font-semibold">Copa del Rey Tickets</span>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-lg shadow-xl p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Copa del Rey Tickets</h1>
          <p className="text-lg text-gray-700 mb-6">
            Experience the passion and tradition of the Copa del Rey, Spain's oldest and most prestigious domestic cup competition. From thrilling upsets to El Clásico encounters, every match is a spectacle.          </p>

          {/* Call to Action */}
          <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-800 p-6 rounded-lg mb-8">
            <h2 className="text-2xl font-semibold mb-2">Secure Your Copa del Rey Experience!</h2>
            <p className="mb-4">Don't miss out on the excitement. Find your tickets for upcoming Copa del Rey matches and witness the action live.</p>
            <a href="#ticket-listings" className="bg-yellow-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-yellow-600 transition-colors flex items-center w-max">
              View Ticket Listings <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>

          {/* Why Choose Us */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Your Trusted Source for Spanish Football Tickets</h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-yellow-500 font-bold mr-3">✔</span>
                <div>
                  <h4 className="font-semibold">Wide Selection</h4>
                  <p>We offer a comprehensive selection of tickets for all Copa del Rey rounds, including matches involving Real Madrid, Barcelona, and Atlético Madrid.</p>
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
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Available Tickets for Copa del Rey Matches</h3>
            <div className="text-center text-gray-500 border-2 border-dashed rounded-lg p-12">
              <p className="mb-2">Ticket listings are not yet available.</p>
              <p>Please check back closer to match dates for a full list of available tickets.</p>
            </div>
          </div>

          {/* Related Links */}
          <div className="mt-12 border-t pt-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Explore More Spanish Football</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link to="/la-liga-tickets" className="text-yellow-600 hover:underline">La Liga Tickets</Link>
              <Link to="/copa-del-rey-final-tickets" className="text-yellow-600 hover:underline">Copa del Rey Final Tickets</Link>
              <Link to="/real-madrid-vs-barcelona-tickets" className="text-yellow-600 hover:underline">El Clásico Tickets</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CopaDelReyTicketsPage;
