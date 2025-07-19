
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const ChampionsLeagueFinalCorporateTicketsPage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Helmet>
        <title>Champions League Final Corporate Tickets | Business & Football</title>
        <meta name="description" content="Secure Champions League Final corporate tickets for unparalleled networking and entertainment opportunities. Impress clients and partners at the UCL Final." />
        <meta name="keywords" content="champions league final corporate tickets, ucl final corporate hospitality, business football tickets, corporate entertainment champions league" />
        <link rel="canonical" href="https://www.ticketsfootball.com/champions-league-final-corporate-tickets" />
      </Helmet>

      <div className="container mx-auto px-4 py-12">
        {/* Breadcrumbs */}
        <div className="text-sm text-gray-600 mb-6">
          <Link to="/" className="hover:text-green-600">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/champions-league-tickets" className="hover:text-green-600">Champions League Tickets</Link>
          <span className="mx-2">/</span>
          <span className="font-semibold">Champions League Final Corporate Tickets</span>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-lg shadow-xl p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Champions League Final Corporate Tickets</h1>
          <p className="text-lg text-gray-700 mb-6">
            The UEFA Champions League Final is the perfect setting for high-level corporate entertainment. Our corporate ticket packages offer exclusive access, premium hospitality, and unparalleled networking opportunities, ensuring a memorable experience for your clients and partners.          </p>

          {/* Call to Action */}
          <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-800 p-6 rounded-lg mb-8">
            <h2 className="text-2xl font-semibold mb-2">Host Your Guests at the UCL Final!</h2>
            <p className="mb-4">Impress your most valued clients and partners with an unforgettable corporate experience at the Champions League Final. Contact us for bespoke packages.</p>
            <a href="#corporate-listings" className="bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors flex items-center w-max">
              Inquire About Corporate Packages <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>

          {/* Why Choose Us */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Benefits of Champions League Final Corporate Tickets</h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-500 font-bold mr-3">✔</span>
                <div>
                  <h4 className="font-semibold">Exclusive Access</h4>
                  <p>Access to private suites, executive boxes, or premium hospitality areas.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 font-bold mr-3">✔</span>
                <div>
                  <h4 className="font-semibold">Gourmet Dining & Open Bar</h4>
                  <p>Enjoy exquisite catering and complimentary beverages throughout the event.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 font-bold mr-3">✔</span>
                <div>
                  <h4 className="font-semibold">Networking Opportunities</h4>
                  <p>A prestigious environment to build relationships and entertain key stakeholders.</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Corporate Listings Placeholder */}
          <div id="corporate-listings" className="border-t pt-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Available Champions League Final Corporate Packages</h3>
            <div className="text-center text-gray-500 border-2 border-dashed rounded-lg p-12">
              <p className="mb-2">Corporate package listings are not yet available.</p>
              <p>Please contact us directly for tailored corporate hospitality solutions.</p>
            </div>
          </div>

          {/* Related Links */}
          <div className="mt-12 border-t pt-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Explore More Champions League Options</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link to="/champions-league-tickets" className="text-blue-600 hover:underline">Champions League Match Tickets</Link>
              <Link to="/champions-league-final-vip-tickets" className="text-blue-600 hover:underline">Champions League Final VIP Experience</Link>
              <Link to="/champions-league-final-hospitality-tickets" className="text-blue-600 hover:underline">Champions League Final Hospitality</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChampionsLeagueFinalCorporateTicketsPage;
