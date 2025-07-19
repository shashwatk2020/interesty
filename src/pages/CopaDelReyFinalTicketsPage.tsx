
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CopaDelReyFinalTicketsPage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Helmet>
        <title>Copa del Rey Final Tickets | Spanish Football's Royal Showcase</title>
        <meta name="description" content="Get your tickets for the Copa del Rey Final. Witness the passion and drama of Spain's premier domestic cup competition as two teams battle for the royal trophy." />
        <meta name="keywords" content="copa del rey final tickets, spanish cup final tickets, buy copa del rey final tickets, official copa del rey final tickets" />
        <link rel="canonical" href="https://www.ticketsfootball.com/copa-del-rey-final-tickets" />
      </Helmet>

      <div className="container mx-auto px-4 py-12">
        {/* Breadcrumbs */}
        <div className="text-sm text-gray-600 mb-6">
          <Link to="/" className="hover:text-green-600">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/copa-del-rey-tickets" className="hover:text-green-600">Copa del Rey Tickets</Link>
          <span className="mx-2">/</span>
          <span className="font-semibold">Copa del Rey Final Tickets</span>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-lg shadow-xl p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Copa del Rey Final Tickets</h1>
          <p className="text-lg text-gray-700 mb-6">
            The Copa del Rey Final is one of the most prestigious events in Spanish football. It's a competition steeped in history, known for its passionate fans and dramatic matches.          </p>

          {/* Call to Action */}
          <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-800 p-6 rounded-lg mb-8">
            <h2 className="text-2xl font-semibold mb-2">Experience the Passion of the Copa!</h2>
            <p className="mb-4">The Copa del Rey Final is a must-see for any fan of Spanish football. Secure your tickets now to be part of this special occasion.</p>
            <a href="#ticket-listings" className="bg-yellow-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-yellow-600 transition-colors flex items-center w-max">
              View Ticket Listings <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>

          {/* Why Choose Us */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Your Gateway to Spanish Football</h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-yellow-500 font-bold mr-3">✔</span>
                <div>
                  <h4 className="font-semibold">Access to the Best Seats</h4>
                  <p>We provide access to a wide range of tickets, from standard seating to premium hospitality packages.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 font-bold mr-3">✔</span>
                <div>
                  <h4 className="font-semibold">Safe and Secure Platform</h4>
                  <p>Our platform is designed to provide you with a safe and secure ticket buying experience.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 font-bold mr-3">✔</span>
                <div>
                  <h4 className="font-semibold">Expert Support</h4>
                  <p>Our team of football ticket experts is here to help you find the perfect tickets for the Copa del Rey Final.</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Ticket Listings Placeholder */}
          <div id="ticket-listings" className="border-t pt-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Available Tickets for the Copa del Rey Final</h3>
            <div className="text-center text-gray-500 border-2 border-dashed rounded-lg p-12">
              <p className="mb-2">Ticket listings are not yet available.</p>
              <p>Please check back as the competition progresses for a full list of available tickets.</p>
            </div>
          </div>

          {/* Related Links */}
          <div className="mt-12 border-t pt-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Explore More Copa del Rey Tickets</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link to="/copa-del-rey-semi-final-tickets" className="text-yellow-600 hover:underline">Copa del Rey Semi-Final Tickets</Link>
              <Link to="/copa-del-rey-quarter-final-tickets" className="text-yellow-600 hover:underline">Copa del Rey Quarter-Final Tickets</Link>
              <Link to="/copa-del-rey-tickets" className="text-yellow-600 hover:underline">All Copa del Rey Tickets</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CopaDelReyFinalTicketsPage;
