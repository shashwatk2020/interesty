
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const EuropaLeagueFinalVIPTicketsPage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Helmet>
        <title>Europa League Final VIP Tickets | The Ultimate UEL Experience</title>
        <meta name="description" content="Indulge in the ultimate Europa League Final VIP experience with premium tickets, exclusive hospitality, and unparalleled access. Elevate your matchday." />
        <meta name="keywords" content="europa league final vip tickets, uel final luxury tickets, europa league final premium hospitality, europa league final corporate hospitality" />
        <link rel="canonical" href="https://www.ticketsfootball.com/europa-league-final-vip-tickets" />
      </Helmet>

      <div className="container mx-auto px-4 py-12">
        {/* Breadcrumbs */}
        <div className="text-sm text-gray-600 mb-6">
          <Link to="/" className="hover:text-green-600">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/europa-league-tickets" className="hover:text-green-600">Europa League Tickets</Link>
          <span className="mx-2">/</span>
          <span className="font-semibold">Europa League Final VIP Tickets</span>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-lg shadow-xl p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Europa League Final VIP Tickets</h1>
          <p className="text-lg text-gray-700 mb-6">
            Elevate your UEFA Europa League Final experience to an unparalleled level of luxury and exclusivity with our VIP tickets. Enjoy premium seating, gourmet dining, and access to exclusive lounges, making your matchday truly unforgettable.          </p>

          {/* Call to Action */}
          <div className="bg-orange-100 border-l-4 border-orange-500 text-orange-800 p-6 rounded-lg mb-8">
            <h2 className="text-2xl font-semibold mb-2">Indulge in the Ultimate UEL Luxury!</h2>
            <p className="mb-4">Our VIP packages offer the best way to experience the Europa League Final. Secure your premium tickets and enjoy the pinnacle of European club football in style.</p>
            <a href="#vip-listings" className="bg-orange-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-orange-600 transition-colors flex items-center w-max">
              View VIP Packages <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>

          {/* Why Choose Us */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Why Choose Our Europa League Final VIP Packages?</h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-orange-500 font-bold mr-3">✔</span>
                <div>
                  <h4 className="font-semibold">Premium Seating</h4>
                  <p>Enjoy the best views of the pitch from prime locations within the stadium.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 font-bold mr-3">✔</span>
                <div>
                  <h4 className="font-semibold">Exclusive Hospitality</h4>
                  <p>Access to luxurious lounges with complimentary food and beverages before, during, and after the match.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 font-bold mr-3">✔</span>
                <div>
                  <h4 className="font-semibold">Unforgettable Memories</h4>
                  <p>Create lasting memories with a truly exceptional Europa League Final experience.</p>
                </div>
              </li>
            </ul>
          </div>

          {/* VIP Listings Placeholder */}
          <div id="vip-listings" className="border-t pt-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Available Europa League Final VIP Experiences</h3>
            <div className="text-center text-gray-500 border-2 border-dashed rounded-lg p-12">
              <p className="mb-2">VIP package listings are not yet available.</p>
              <p>Please check back closer to the event date for a full list of available VIP options.</p>
            </div>
          </div>

          {/* Related Links */}
          <div className="mt-12 border-t pt-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Explore More Europa League Options</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link to="/europa-league-tickets" className="text-orange-600 hover:underline">Europa League Match Tickets</Link>
              <Link to="/europa-league-final-hospitality-tickets" className="text-orange-600 hover:underline">Europa League Final Hospitality</Link>
              <Link to="/europa-league-final-premium-tickets" className="text-orange-600 hover:underline">Europa League Final Premium Tickets</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EuropaLeagueFinalVIPTicketsPage;
