import React from 'react';
import { Users, Globe, Shield, Award, Heart, Target } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-green-900 via-green-800 to-blue-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">About TicketsFootball</h1>
            <p className="text-xl md:text-2xl text-green-100 mb-8">
              Your trusted marketplace for authentic football tickets worldwide
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Our Story */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <div className="prose prose-lg text-gray-600">
              <p className="mb-6">
                Founded with a passion for football and a commitment to connecting fans with their favorite teams, 
                TicketsFootball.net has become the premier destination for authentic football tickets worldwide. 
                We understand that football is more than just a game – it's a passion that brings people together 
                from all corners of the globe.
              </p>
              <p className="mb-6">
                Since our inception, we've helped millions of fans secure tickets to the world's most prestigious 
                football matches, from the FIFA World Cup and UEFA European Championship to domestic league games 
                and cup finals. Our platform connects you with trusted ticket partners, ensuring you get authentic 
                tickets at competitive prices.
              </p>
            </div>
          </section>

          {/* Our Mission */}
          <section className="mb-12">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <Target className="w-8 h-8 text-green-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-600 mb-6">
                To make football accessible to everyone by providing a secure, transparent, and user-friendly 
                platform where fans can find and purchase authentic tickets to their favorite matches with confidence.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <Shield className="w-12 h-12 text-green-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Security First</h3>
                  <p className="text-gray-600 text-sm">100% authentic tickets with buyer protection guarantee</p>
                </div>
                <div className="text-center">
                  <Globe className="w-12 h-12 text-green-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Global Reach</h3>
                  <p className="text-gray-600 text-sm">Access to matches worldwide from trusted partners</p>
                </div>
                <div className="text-center">
                  <Heart className="w-12 h-12 text-green-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Fan-Focused</h3>
                  <p className="text-gray-600 text-sm">Built by football fans, for football fans</p>
                </div>
              </div>
            </div>
          </section>

          {/* What We Offer */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What We Offer</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <Award className="w-8 h-8 text-green-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Premium Competitions</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• FIFA World Cup tickets</li>
                  <li>• UEFA European Championship</li>
                  <li>• Champions League matches</li>
                  <li>• Premier League games</li>
                  <li>• La Liga fixtures</li>
                  <li>• And many more...</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <Users className="w-8 h-8 text-green-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Trusted Partners</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Viagogo marketplace</li>
                  <li>• StubHub platform</li>
                  <li>• Ticketmaster official</li>
                  <li>• LiveFootball tickets</li>
                  <li>• Verified resellers</li>
                  <li>• Official club partners</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Our Values */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Values</h2>
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Transparency</h3>
                  <p className="text-gray-600 mb-4">
                    We believe in complete transparency in pricing, fees, and ticket authenticity. 
                    No hidden costs, no surprises.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Reliability</h3>
                  <p className="text-gray-600 mb-4">
                    Our platform is built on trust. We work only with verified partners and 
                    provide comprehensive buyer protection.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Innovation</h3>
                  <p className="text-gray-600 mb-4">
                    We continuously improve our platform with the latest technology to enhance 
                    your ticket buying experience.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Community</h3>
                  <p className="text-gray-600 mb-4">
                    We're part of the global football community, connecting fans and creating 
                    unforgettable experiences.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Contact CTA */}
          <section className="text-center">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Experience Football?</h2>
              <p className="text-gray-600 mb-6">
                Join millions of fans who trust TicketsFootball.net for their match day experiences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold"
                >
                  Contact Us
                </a>
                <a
                  href="/help"
                  className="bg-gray-100 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors font-semibold"
                >
                  Help Center
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;