
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const DFBPokalFinalTicketsPage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Helmet>
        <title>DFB-Pokal Final Tickets | German Football's Grand Finale</title>
        <meta name="description" content="Buy official tickets for the DFB-Pokal Final at the Olympiastadion in Berlin. Experience the passion and excitement of Germany's premier cup competition." />
        <meta name="keywords" content="dfb-pokal final tickets, german cup final tickets, buy dfb-pokal final tickets, official dfb-pokal final tickets" />
        <link rel="canonical" href="https://www.ticketsfootball.com/dfb-pokal-final-tickets" />
      </Helmet>

      <div className="container mx-auto px-4 py-12">
        {/* Breadcrumbs */}
        <div className="text-sm text-gray-600 mb-6">
          <Link to="/" className="hover:text-green-600">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/dfb-pokal-tickets" className="hover:text-green-600">DFB-Pokal Tickets</Link>
          <span className="mx-2">/</span>
          <span className="font-semibold">DFB-Pokal Final Tickets</span>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-lg shadow-xl p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">DFB-Pokal Final Tickets</h1>
          <p className="text-lg text-gray-700 mb-6">
            The DFB-Pokal Final is the highlight of the German football season. Held in the historic Olympiastadion in Berlin, it's a must-see event for any fan of German football.          </p>

          {/* Call to Action */}
          <div className="bg-black text-white p-6 rounded-lg mb-8">
            <h2 className="text-2xl font-semibold mb-2">Experience the Berlin Final!</h2>
            <p className="mb-4">The DFB-Pokal Final is renowned for its incredible atmosphere. Secure your tickets now to be part of this amazing spectacle.</p>
            <a href="#ticket-listings" className="bg-yellow-500 text-black font-bold py-3 px-6 rounded-lg hover:bg-yellow-600 transition-colors flex items-center w-max">
              View Ticket Listings <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>

          {/* Why Choose Us */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Your Source for German Football Tickets</h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-yellow-500 font-bold mr-3">✔</span>
                <div>
                  <h4 className="font-semibold">Authentic Tickets</h4>
                  <p>We provide access to authentic tickets from trusted and verified sellers.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 font-bold mr-3">✔</span>
                <div>
                  <h4 className="font-semibold">Secure Transactions</h4>
                  <p>Our platform uses the latest security measures to ensure your transaction is safe and secure.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 font-bold mr-3">✔</span>
                <div>
                  <h4 className="font-semibold">On-Time Delivery</h4>
                  <p>We guarantee that you will receive your tickets in time for the match.</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Ticket Listings Placeholder */}
          <div id="ticket-listings" className="border-t pt-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Available Tickets for the DFB-Pokal Final</h3>
            <div className="text-center text-gray-500 border-2 border-dashed rounded-lg p-12">
              <p className="mb-2">Ticket listings are not yet available.</p>
              <p>Please check back as the competition progresses for a full list of available tickets.</p>
            </div>
          </div>

          {/* Related Links */}
          <div className="mt-12 border-t pt-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Explore More DFB-Pokal Tickets</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link to="/dfb-pokal-semi-final-tickets" className="text-yellow-600 hover:underline">DFB-Pokal Semi-Final Tickets</Link>
              <Link to="/dfb-pokal-quarter-final-tickets" className="text-yellow-600 hover:underline">DFB-Pokal Quarter-Final Tickets</Link>
              <Link to="/dfb-pokal-tickets" className="text-yellow-600 hover:underline">All DFB-Pokal Tickets</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DFBPokalFinalTicketsPage;
