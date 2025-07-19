
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const SantiagoBernabeuTicketsPage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Helmet>
        <title>Santiago Bernabéu Tickets | Experience Real Madrid's Home!</title>
        <meta name="description" content="Buy official tickets for matches and tours at Santiago Bernabéu, the legendary home of Real Madrid. Immerse yourself in football history." />
        <meta name="keywords" content="santiago bernabeu tickets, real madrid stadium tickets, real madrid stadium tour, bernabeu experience, buy bernabeu tickets" />
        <link rel="canonical" href="https://www.ticketsfootball.com/santiago-bernabeu-tickets" />
      </Helmet>

      <div className="container mx-auto px-4 py-12">
        {/* Breadcrumbs */}
        <div className="text-sm text-gray-600 mb-6">
          <Link to="/" className="hover:text-green-600">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/venue-tickets" className="hover:text-green-600">Venue Tickets</Link>
          <span className="mx-2">/</span>
          <span className="font-semibold">Santiago Bernabéu Tickets</span>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-lg shadow-xl p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Santiago Bernabéu Tickets</h1>
          <p className="text-lg text-gray-700 mb-6">
            Step into the legendary Santiago Bernabéu, the iconic home of Real Madrid. Whether you're attending a thrilling match or taking a historical stadium tour, the Bernabéu offers an unforgettable experience for every football fan.          </p>

          {/* Call to Action */}
          <div className="bg-white-100 border-l-4 border-white-500 text-white-800 p-6 rounded-lg mb-8">
            <h2 className="text-2xl font-semibold mb-2">Secure Your Bernabéu Experience!</h2>
            <p className="mb-4">Tickets for Santiago Bernabéu matches and tours are always in high demand. Don't miss your chance to visit this footballing cathedral.</p>
            <a href="#ticket-listings" className="bg-white-600 text-black font-bold py-3 px-6 rounded-lg hover:bg-white-700 transition-colors flex items-center w-max">
              View Tickets & Tours <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>

          {/* Why Choose Us */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Your Trusted Source for Santiago Bernabéu Tickets</h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-white-500 font-bold mr-3">✔</span>
                <div>
                  <h4 className="font-semibold">Official Tickets & Tours</h4>
                  <p>We provide access to official match tickets and stadium tour experiences.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-white-500 font-bold mr-3">✔</span>
                <div>
                  <h4 className="font-semibold">Authenticity Guaranteed</h4>
                  <p>All tickets are sourced from trusted suppliers and are 100% authentic.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-white-500 font-bold mr-3">✔</span>
                <div>
                  <h4 className="font-semibold">Secure Transactions</h4>
                  <p>Our platform ensures a safe and secure purchasing experience.</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Ticket Listings Placeholder */}
          <div id="ticket-listings" className="border-t pt-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Available Tickets for Santiago Bernabéu</h3>
            <div className="text-center text-gray-500 border-2 border-dashed rounded-lg p-12">
              <p className="mb-2">Ticket listings are not yet available.</p>
              <p>Please check back closer to event dates for a full list of available tickets.</p>
            </div>
          </div>

          {/* Related Links */}
          <div className="mt-12 border-t pt-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Explore More Spanish Venues & Teams</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link to="/real-madrid-tickets" className="text-white-600 hover:underline">Real Madrid Tickets</Link>
              <Link to="/camp-nou-tickets" className="text-white-600 hover:underline">Camp Nou Tickets</Link>
              <Link to="/la-liga-tickets" className="text-white-600 hover:underline">La Liga Tickets</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SantiagoBernabeuTicketsPage;
