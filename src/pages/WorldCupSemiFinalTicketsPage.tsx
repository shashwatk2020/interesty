
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const WorldCupSemiFinalTicketsPage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Helmet>
        <title>World Cup Semi-Final Tickets | Witness the Drama Unfold</title>
        <meta name="description" content="Book your tickets for the World Cup Semi-Finals. Be there to experience the tension and excitement as teams battle for a place in the final." />
        <meta name="keywords" content="world cup semi-final tickets, 2026 world cup semi-final tickets, buy world cup semi-final tickets, official world cup semi-final tickets" />
        <link rel="canonical" href="https://www.ticketsfootball.com/world-cup-semi-final-tickets" />
      </Helmet>

      <div className="container mx-auto px-4 py-12">
        {/* Breadcrumbs */}
        <div className="text-sm text-gray-600 mb-6">
          <Link to="/" className="hover:text-green-600">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/world-cup-tickets" className="hover:text-green-600">World Cup Tickets</Link>
          <span className="mx-2">/</span>
          <span className="font-semibold">World Cup Semi-Final Tickets</span>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-lg shadow-xl p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">World Cup Semi-Final Tickets</h1>
          <p className="text-lg text-gray-700 mb-6">
            The World Cup Semi-Finals are where legends are made. The four best teams in the world compete for a coveted spot in the final. The drama, passion, and skill on display are second to none.          </p>

          {/* Call to Action */}
          <div className="bg-green-100 border-l-4 border-green-500 text-green-800 p-6 rounded-lg mb-8">
            <h2 className="text-2xl font-semibold mb-2">Get Your Semi-Final Tickets!</h2>
            <p className="mb-4">Tickets for the semi-finals sell out fast. Secure your spot to witness the penultimate stage of the world's greatest tournament.</p>
            <a href="#ticket-listings" className="bg-green-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-700 transition-colors flex items-center w-max">
              View Ticket Listings <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>

          {/* Why Choose Us */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Why Buy From Us?</h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-500 font-bold mr-3">✔</span>
                <div>
                  <h4 className="font-semibold">Verified Sellers</h4>
                  <p>We connect you with a network of trusted ticket sellers for a safe and secure purchase.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 font-bold mr-3">✔</span>
                <div>
                  <h4 className="font-semibold">Competitive Pricing</h4>
                  <p>We offer competitive prices on all our World Cup tickets, including the semi-finals.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 font-bold mr-3">✔</span>
                <div>
                  <h4 className="font-semibold">Dedicated Customer Support</h4>
                  <p>Our customer support team is here to assist you with any questions or concerns.</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Ticket Listings Placeholder */}
          <div id="ticket-listings" className="border-t pt-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Available Tickets for the World Cup Semi-Finals</h3>
            <div className="text-center text-gray-500 border-2 border-dashed rounded-lg p-12">
              <p className="mb-2">Ticket listings are not yet available.</p>
              <p>Please check back closer to the event date for a full list of available tickets.</p>
            </div>
          </div>

          {/* Related Links */}
          <div className="mt-12 border-t pt-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Other Knockout Stage Tickets</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link to="/world-cup-final-tickets" className="text-green-600 hover:underline">World Cup Final Tickets</Link>
              <Link to="/world-cup-quarter-final-tickets" className="text-green-600 hover:underline">World Cup Quarter-Final Tickets</Link>
              <Link to="/world-cup-round-16-tickets" className="text-green-600 hover:underline">World Cup Round of 16 Tickets</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorldCupSemiFinalTicketsPage;
