
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const WorldCupPackageDealTicketsPage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Helmet>
        <title>World Cup Package Deal Tickets | Your Ultimate World Cup Experience</title>
        <meta name="description" content="Explore World Cup package deals including match tickets, accommodation, and travel. Plan your complete World Cup experience with our curated packages." />
        <meta name="keywords" content="world cup package tickets, world cup travel packages, world cup hospitality packages, world cup tour packages, buy world cup packages" />
        <link rel="canonical" href="https://www.ticketsfootball.com/world-cup-package-deal-tickets" />
      </Helmet>

      <div className="container mx-auto px-4 py-12">
        {/* Breadcrumbs */}
        <div className="text-sm text-gray-600 mb-6">
          <Link to="/" className="hover:text-green-600">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/world-cup-tickets" className="hover:text-green-600">World Cup Tickets</Link>
          <span className="mx-2">/</span>
          <span className="font-semibold">World Cup Package Deal Tickets</span>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-lg shadow-xl p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">World Cup Package Deal Tickets</h1>
          <p className="text-lg text-gray-700 mb-6">
            Make your World Cup dream a reality with our comprehensive package deals. These packages often include match tickets, accommodation, and sometimes even travel arrangements, offering a hassle-free way to experience the tournament.          </p>

          {/* Call to Action */}
          <div className="bg-green-100 border-l-4 border-green-500 text-green-800 p-6 rounded-lg mb-8">
            <h2 className="text-2xl font-semibold mb-2">Plan Your World Cup Journey!</h2>
            <p className="mb-4">Our World Cup package deals are designed to provide you with the ultimate football experience. Browse our options and secure your unforgettable trip.</p>
            <a href="#package-listings" className="bg-green-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-700 transition-colors flex items-center w-max">
              View Package Listings <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>

          {/* Why Choose Us */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Why Book World Cup Packages With Us?</h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-500 font-bold mr-3">✔</span>
                <div>
                  <h4 className="font-semibold">Tailored Experiences</h4>
                  <p>From group stage adventures to knockout round thrills, find packages that suit your preferences.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 font-bold mr-3">✔</span>
                <div>
                  <h4 className="font-semibold">Official & Verified</h4>
                  <p>We partner with official providers to ensure the authenticity and reliability of all package components.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 font-bold mr-3">✔</span>
                <div>
                  <h4 className="font-semibold">Comprehensive Support</h4>
                  <p>Our team is available to assist you with all aspects of your World Cup travel and experience.</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Package Listings Placeholder */}
          <div id="package-listings" className="border-t pt-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Available World Cup Package Deals</h3>
            <div className="text-center text-gray-500 border-2 border-dashed rounded-lg p-12">
              <p className="mb-2">Package listings are not yet available.</p>
              <p>Please check back closer to the event date for a full list of available packages.</p>
            </div>
          </div>

          {/* Related Links */}
          <div className="mt-12 border-t pt-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Explore More World Cup Options</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link to="/world-cup-tickets" className="text-green-600 hover:underline">World Cup Match Tickets</Link>
              <Link to="/world-cup-vip-experience-tickets" className="text-green-600 hover:underline">World Cup VIP Experience</Link>
              <Link to="/world-cup-hospitality-tickets" className="text-green-600 hover:underline">World Cup Hospitality</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorldCupPackageDealTicketsPage;
