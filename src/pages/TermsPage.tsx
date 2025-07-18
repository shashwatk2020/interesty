import React from 'react';
import { FileText, Scale, AlertTriangle, CheckCircle, XCircle, Info } from 'lucide-react';

const TermsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-green-900 via-green-800 to-blue-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Scale className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Terms & Conditions</h1>
            <p className="text-xl md:text-2xl text-green-100 mb-4">
              Please read these terms carefully before using our services
            </p>
            <p className="text-green-200">Last updated: December 2024</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <section className="mb-12">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Agreement to Terms</h2>
              <p className="text-gray-600 mb-4">
                These Terms and Conditions ("Terms") govern your use of TicketsFootball.net and our services. 
                By accessing or using our website, you agree to be bound by these Terms. If you disagree with 
                any part of these terms, then you may not access our service.
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                <div className="flex items-center">
                  <Info className="w-5 h-5 text-blue-600 mr-2" />
                  <p className="text-blue-800 font-medium">
                    By using our service, you acknowledge that you have read, understood, and agree to these Terms.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Service Description */}
          <section className="mb-12">
            <div className="flex items-center mb-6">
              <FileText className="w-8 h-8 text-green-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Our Services</h2>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8">
              <p className="text-gray-600 mb-6">
                TicketsFootball.net operates as a ticket comparison and marketplace platform that connects users 
                with authorized ticket sellers and resellers for football matches and events worldwide.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">What We Provide</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                      Ticket comparison services
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                      Connection to verified sellers
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                      Match and venue information
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                      Customer support services
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">What We Don't Provide</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li className="flex items-center">
                      <XCircle className="w-4 h-4 text-red-600 mr-2" />
                      Direct ticket sales (we're a marketplace)
                    </li>
                    <li className="flex items-center">
                      <XCircle className="w-4 h-4 text-red-600 mr-2" />
                      Guarantee of ticket availability
                    </li>
                    <li className="flex items-center">
                      <XCircle className="w-4 h-4 text-red-600 mr-2" />
                      Control over third-party pricing
                    </li>
                    <li className="flex items-center">
                      <XCircle className="w-4 h-4 text-red-600 mr-2" />
                      Refunds for cancelled events
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* User Responsibilities */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">User Responsibilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Account Usage</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Provide accurate and complete information</li>
                  <li>• Maintain the security of your account</li>
                  <li>• Use the service for lawful purposes only</li>
                  <li>• Respect intellectual property rights</li>
                  <li>• Not engage in fraudulent activities</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Prohibited Activities</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Automated data collection (scraping)</li>
                  <li>• Attempting to hack or disrupt services</li>
                  <li>• Creating false or misleading listings</li>
                  <li>• Violating any applicable laws</li>
                  <li>• Impersonating others or entities</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Ticket Purchases */}
          <section className="mb-12">
            <div className="flex items-center mb-6">
              <AlertTriangle className="w-8 h-8 text-orange-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Ticket Purchase Terms</h2>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded mb-6">
                <div className="flex items-center">
                  <AlertTriangle className="w-5 h-5 text-orange-600 mr-2" />
                  <p className="text-orange-800 font-medium">
                    Important: All ticket purchases are made directly with our partner sellers, not with TicketsFootball.net
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Purchase Process</h3>
                  <ol className="text-gray-600 space-y-2">
                    <li>1. Browse and compare ticket options</li>
                    <li>2. Select your preferred seller</li>
                    <li>3. Complete purchase on seller's platform</li>
                    <li>4. Receive confirmation from seller</li>
                    <li>5. Contact seller for any issues</li>
                  </ol>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Important Notes</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Prices may change without notice</li>
                    <li>• Availability is not guaranteed</li>
                    <li>• Each seller has their own terms</li>
                    <li>• Refund policies vary by seller</li>
                    <li>• We facilitate connections only</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Liability and Disclaimers */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Liability and Disclaimers</h2>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Service Disclaimer</h3>
                  <p className="text-gray-600 mb-4">
                    Our service is provided "as is" without warranties of any kind. We do not guarantee 
                    the accuracy, completeness, or reliability of any information on our platform.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Limitation of Liability</h3>
                  <p className="text-gray-600 mb-4">
                    We shall not be liable for any indirect, incidental, special, or consequential damages 
                    arising from your use of our service or any ticket purchases.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Third-Party Sellers</h3>
                  <p className="text-gray-600 mb-4">
                    We are not responsible for the actions, products, or services of third-party sellers. 
                    Any disputes should be resolved directly with the seller.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Force Majeure</h3>
                  <p className="text-gray-600 mb-4">
                    We are not liable for any failure to perform due to circumstances beyond our reasonable 
                    control, including natural disasters or event cancellations.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Intellectual Property */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Intellectual Property</h2>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <p className="text-gray-600 mb-6">
                All content on TicketsFootball.net, including text, graphics, logos, images, and software, 
                is our property or licensed to us and is protected by copyright and other intellectual property laws.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Your Rights</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Personal, non-commercial use</li>
                    <li>• View and browse content</li>
                    <li>• Share links to our pages</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Restrictions</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• No copying or redistribution</li>
                    <li>• No commercial use without permission</li>
                    <li>• No modification of our content</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Termination */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Termination</h2>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <p className="text-gray-600 mb-4">
                We may terminate or suspend your access to our service immediately, without prior notice, 
                for any reason, including breach of these Terms.
              </p>
              <p className="text-gray-600">
                Upon termination, your right to use the service will cease immediately. All provisions of 
                these Terms that should survive termination shall survive, including ownership provisions, 
                warranty disclaimers, and limitations of liability.
              </p>
            </div>
          </section>

          {/* Changes to Terms */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Changes to Terms</h2>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <p className="text-gray-600 mb-4">
                We reserve the right to modify these Terms at any time. We will notify users of any material 
                changes by posting the new Terms on this page and updating the "Last updated" date.
              </p>
              <p className="text-gray-600">
                Your continued use of the service after any changes constitutes acceptance of the new Terms. 
                If you do not agree to the modified Terms, you must stop using our service.
              </p>
            </div>
          </section>

          {/* Contact */}
          <section>
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <Scale className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Questions About These Terms?</h2>
              <p className="text-gray-600 mb-6">
                If you have any questions about these Terms and Conditions, please contact us.
              </p>
              <a
                href="/contact"
                className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold"
              >
                Contact Us
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;