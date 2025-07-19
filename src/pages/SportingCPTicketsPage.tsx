
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const SportingCPTicketsPage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Helmet>
        <title>Sporting CP Tickets | See Leões at Estádio José Alvalade!</title>
        <meta name="description" content="Buy official Sporting CP tickets for Primeira Liga, Europa League, and Taça de Portugal matches. Experience the passion at Estádio José Alvalade." />
        <meta name="keywords" content="sporting cp tickets, sporting lisbon tickets, leoes tickets, estadio jose alvalade tickets, primeira liga sporting tickets, europa league sporting tickets" />
        <link rel="canonical" href="https://www.ticketsfootball.com/sporting-cp-tickets" />
      </Helmet>

      <div className="container mx-auto px-4 py-12">
        {/* Breadcrumbs */}
        <div className="text-sm text-gray-600 mb-6">
          <Link to="/" className="hover:text-green-600">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/primeira-liga-tickets" className="hover:text-green-600">Primeira Liga Tickets</Link>
          <span className="mx-2">/</span>
          <span className="font-semibold">Sporting CP Tickets</span>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-lg shadow-xl p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Sporting CP Tickets</h1>
          <p className="text-lg text-gray-700 mb-6">
            Experience the passionate support and rich history of Sporting CP at the Estádio José Alvalade. Leões are one of Portugal's most successful clubs, with a dedicated fanbase and a strong presence in European competitions.          </p>

          {/* Call to Action */}
          <div className="bg-green-100 border-l-4 border-green-500 text-green-800 p-6 rounded-lg mb-8">
            <h2 className="text-2xl font-semibold mb-2">Secure Your Sporting Tickets!</h2>
            <p className="mb-4">Tickets for Sporting CP matches are always in high demand. Don't miss your chance to be part of the action at Estádio José Alvalade.</p>
            <a href="#ticket-listings" className="bg-green-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-700 transition-colors flex items-center w-max">
              View Ticket Listings <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>

          {/* Why Choose Us */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Your Trusted Source for Sporting CP Tickets</h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-500 font-bold mr-3">✔</span>
                <div>
                  <h4 className="font-semibold">Wide Selection</h4>
                  <p>We offer a comprehensive selection of tickets for all Sporting CP home and away matches.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 font-bold mr-3">✔</span>
                <div>
                  <h4 className="font-semibold">Authenticity Guaranteed</h4>
                  <p>All tickets are sourced from trusted suppliers and are 100% authentic.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 font-bold mr-3">✔</span>
                <div>
                  <h4 className="font-semibold">Secure Transactions</h4>
                  <p>Our platform ensures a safe and secure purchasing experience.</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Ticket Listings Placeholder */}
          <div id="ticket-listings" className="border-t pt-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Available Tickets for Sporting CP Matches</h3>
            <div className="text-center text-gray-500 border-2 border-dashed rounded-lg p-12">
              <p className="mb-2">Ticket listings are not yet available.</p>
              <p>Please check back closer to match dates for a full list of available tickets.</p>
            </div>
          </div>

          {/* Related Links */}
          <div className="mt-12 border-t pt-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Explore More Portuguese Football Tickets</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link to="/primeira-liga-tickets" className="text-green-600 hover:underline">Primeira Liga Tickets</Link>
              <Link to="/europa-league-tickets" className="text-green-600 hover:underline">Europa League Tickets</Link>
              <Link to="/porto-tickets" className="text-green-600 hover:underline">FC Porto Tickets</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SportingCPTicketsPage;
