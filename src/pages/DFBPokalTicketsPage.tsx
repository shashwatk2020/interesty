
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const DFBPokalTicketsPage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Helmet>
        <title>DFB-Pokal Tickets | Germany's Premier Cup Competition</title>
        <meta name="description" content="Buy official DFB-Pokal tickets for all rounds, from the early stages to the final in Berlin. Experience the excitement of German football's knockout cup." />
        <meta name="keywords" content="dfb-pokal tickets, german cup tickets, buy dfb-pokal tickets, official dfb-pokal tickets, dfb-pokal final tickets" />
        <link rel="canonical" href="https://www.ticketsfootball.com/dfb-pokal-tickets" />
      </Helmet>

      <div className="container mx-auto px-4 py-12">
        {/* Breadcrumbs */}
        <div className="text-sm text-gray-600 mb-6">
          <Link to="/" className="hover:text-green-600">Home</Link>
          <span className="mx-2">/</span>
          <span className="font-semibold">DFB-Pokal Tickets</span>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-lg shadow-xl p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">DFB-Pokal Tickets</h1>
          <p className="text-lg text-gray-700 mb-6">
            Experience the excitement and drama of the DFB-Pokal, Germany's national knockout cup competition. From thrilling upsets to high-stakes encounters, every match is a must-see.          </p>

          {/* Call to Action */}
          <div className="bg-black text-white p-6 rounded-lg mb-8">
            <h2 className="text-2xl font-semibold mb-2">Secure Your DFB-Pokal Experience!</h2>
            <p className="mb-4">Don't miss out on the excitement. Find your tickets for upcoming DFB-Pokal matches and witness the action live.</p>
            <a href="#ticket-listings" className="bg-yellow-500 text-black font-bold py-3 px-6 rounded-lg hover:bg-yellow-600 transition-colors flex items-center w-max">
              View Ticket Listings <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>

          {/* Why Choose Us */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Your Trusted Source for German Football Tickets</h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-yellow-500 font-bold mr-3">✔</span>
                <div>
                  <h4 className="font-semibold">Wide Selection</h4>
                  <p>We offer a comprehensive selection of tickets for all DFB-Pokal rounds, including matches involving Bayern Munich and Borussia Dortmund.</p>
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
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Available Tickets for DFB-Pokal Matches</h3>
            <div className="text-center text-gray-500 border-2 border-dashed rounded-lg p-12">
              <p className="mb-2">Ticket listings are not yet available.</p>
              <p>Please check back closer to match dates for a full list of available tickets.</p>
            </div>
          </div>

          {/* Related Links */}
          <div className="mt-12 border-t pt-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Explore More German Football</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link to="/bundesliga-tickets" className="text-yellow-600 hover:underline">Bundesliga Tickets</Link>
              <Link to="/dfb-pokal-final-tickets" className="text-yellow-600 hover:underline">DFB-Pokal Final Tickets</Link>
              <Link to="/bayern-munich-tickets" className="text-yellow-600 hover:underline">Bayern Munich Tickets</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DFBPokalTicketsPage;
