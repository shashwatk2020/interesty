
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const FACupFinalTicketsPage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Helmet>
        <title>FA Cup Final Tickets | The Magic of the Cup</title>
        <meta name="description" content="Buy official tickets for the FA Cup Final at Wembley Stadium. Experience the tradition and passion of the world's oldest and most famous domestic cup competition." />
        <meta name="keywords" content="fa cup final tickets, wembley fa cup final tickets, buy fa cup final tickets, official fa cup final tickets" />
        <link rel="canonical" href="https://www.ticketsfootball.com/fa-cup-final-tickets" />
      </Helmet>

      <div className="container mx-auto px-4 py-12">
        {/* Breadcrumbs */}
        <div className="text-sm text-gray-600 mb-6">
          <Link to="/" className="hover:text-green-600">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/fa-cup-tickets" className="hover:text-green-600">FA Cup Tickets</Link>
          <span className="mx-2">/</span>
          <span className="font-semibold">FA Cup Final Tickets</span>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-lg shadow-xl p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">FA Cup Final Tickets</h1>
          <p className="text-lg text-gray-700 mb-6">
            The FA Cup Final is a cornerstone of the English football calendar. Held at the iconic Wembley Stadium, it's a day of high drama, giant-killings, and unforgettable moments.          </p>

          {/* Call to Action */}
          <div className="bg-red-100 border-l-4 border-red-500 text-red-800 p-6 rounded-lg mb-8">
            <h2 className="text-2xl font-semibold mb-2">Be Part of the Wembley Magic!</h2>
            <p className="mb-4">The FA Cup Final is an experience like no other. Secure your tickets now to witness a piece of footballing history.</p>
            <a href="#ticket-listings" className="bg-red-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-red-700 transition-colors flex items-center w-max">
              View Ticket Listings <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>

          {/* Why Choose Us */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Your Trusted Source for FA Cup Tickets</h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-red-500 font-bold mr-3">✔</span>
                <div>
                  <h4 className="font-semibold">Wembley Specialists</h4>
                  <p>We have extensive experience in sourcing the best tickets for events at Wembley Stadium.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 font-bold mr-3">✔</span>
                <div>
                  <h4 className="font-semibold">Club and Neutral Sections</h4>
                  <p>Whether you're supporting a specific team or just want to soak in the atmosphere, we have tickets for you.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 font-bold mr-3">✔</span>
                <div>
                  <h4 className="font-semibold">Guaranteed Authenticity</h4>
                  <p>All our FA Cup Final tickets are 100% authentic and backed by our satisfaction guarantee.</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Ticket Listings Placeholder */}
          <div id="ticket-listings" className="border-t pt-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Available Tickets for the FA Cup Final</h3>
            <div className="text-center text-gray-500 border-2 border-dashed rounded-lg p-12">
              <p className="mb-2">Ticket listings are not yet available.</p>
              <p>Please check back as the competition progresses for a full list of available tickets.</p>
            </div>
          </div>

          {/* Related Links */}
          <div className="mt-12 border-t pt-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Explore More FA Cup Tickets</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link to="/fa-cup-semi-final-tickets" className="text-red-600 hover:underline">FA Cup Semi-Final Tickets</Link>
              <Link to="/fa-cup-quarter-final-tickets" className="text-red-600 hover:underline">FA Cup Quarter-Final Tickets</Link>
              <Link to="/fa-cup-tickets" className="text-red-600 hover:underline">All FA Cup Tickets</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FACupFinalTicketsPage;
