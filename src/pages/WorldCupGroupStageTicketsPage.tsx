
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const WorldCupGroupStageTicketsPage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Helmet>
        <title>World Cup Group Stage Tickets | The Journey Begins Here</title>
        <meta name="description" content="Buy tickets for the World Cup Group Stage. See your favorite teams and players as they begin their quest for the World Cup trophy. A variety of matches and venues available." />
        <meta name="keywords" content="world cup group stage tickets, 2026 world cup group stage tickets, buy world cup group stage tickets, official world cup group stage tickets" />
        <link rel="canonical" href="https://www.ticketsfootball.com/world-cup-group-stage-tickets" />
      </Helmet>

      <div className="container mx-auto px-4 py-12">
        {/* Breadcrumbs */}
        <div className="text-sm text-gray-600 mb-6">
          <Link to="/" className="hover:text-green-600">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/world-cup-tickets" className="hover:text-green-600">World Cup Tickets</Link>
          <span className="mx-2">/</span>
          <span className="font-semibold">World Cup Group Stage Tickets</span>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-lg shadow-xl p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">World Cup Group Stage Tickets</h1>
          <p className="text-lg text-gray-700 mb-6">
            The World Cup Group Stage is where the 32 qualified nations begin their journey. With 48 matches to choose from, you can see a wide variety of teams and playing styles.          </p>

          {/* Call to Action */}
          <div className="bg-green-100 border-l-4 border-green-500 text-green-800 p-6 rounded-lg mb-8">
            <h2 className="text-2xl font-semibold mb-2">Experience the Group Stage!</h2>
            <p className="mb-4">The group stage offers a fantastic opportunity to see multiple matches and soak in the international atmosphere of the World Cup. </p>
            <a href="#ticket-listings" className="bg-green-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-700 transition-colors flex items-center w-max">
              View Ticket Listings <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>

          {/* Why Choose Us */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Your Gateway to the World Cup</h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-500 font-bold mr-3">✔</span>
                <div>
                  <h4 className="font-semibold">Multiple Matches</h4>
                  <p>Follow your team through the group stage or mix and match to see a variety of nations.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 font-bold mr-3">✔</span>
                <div>
                  <h4 className="font-semibold">Great Availability</h4>
                  <p>The group stage has the best availability of tickets, making it easier to get the seats you want.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 font-bold mr-3">✔</span>
                <div>
                  <h4 className="font-semibold">Plan Your Trip</h4>
                  <p>With the schedule known in advance, you can plan your trip and book your tickets with confidence.</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Ticket Listings Placeholder */}
          <div id="ticket-listings" className="border-t pt-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Available Tickets for the World Cup Group Stage</h3>
            <div className="text-center text-gray-500 border-2 border-dashed rounded-lg p-12">
              <p className="mb-2">Ticket listings are not yet available.</p>
              <p>Please check back closer to the event date for a full list of available tickets.</p>
            </div>
          </div>

          {/* Related Links */}
          <div className="mt-12 border-t pt-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Ready for the Knockouts?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link to="/world-cup-round-of-16-tickets" className="text-green-600 hover:underline">World Cup Round of 16 Tickets</Link>
              <Link to="/world-cup-quarter-final-tickets" className="text-green-600 hover:underline">World Cup Quarter-Final Tickets</Link>
              <Link to="/world-cup-final-tickets" className="text-green-600 hover:underline">World Cup Final Tickets</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorldCupGroupStageTicketsPage;
