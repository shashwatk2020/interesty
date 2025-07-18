import React from 'react';
import { Shield, Eye, Lock, Database, Globe, Mail } from 'lucide-react';

const PrivacyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-green-900 via-green-800 to-blue-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Shield className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Privacy Policy</h1>
            <p className="text-xl md:text-2xl text-green-100 mb-4">
              Your privacy and data security are our top priorities
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
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
              <p className="text-gray-600 mb-4">
                At TicketsFootball.net, we are committed to protecting your privacy and ensuring the security 
                of your personal information. This Privacy Policy explains how we collect, use, disclose, and 
                safeguard your information when you visit our website and use our services.
              </p>
              <p className="text-gray-600">
                By using our website, you consent to the data practices described in this policy. If you do not 
                agree with the practices described in this policy, please do not use our website.
              </p>
            </div>
          </section>

          {/* Information We Collect */}
          <section className="mb-12">
            <div className="flex items-center mb-6">
              <Database className="w-8 h-8 text-green-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Information We Collect</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Personal Information</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Name and contact information</li>
                  <li>• Email address and phone number</li>
                  <li>• Billing and shipping addresses</li>
                  <li>• Payment information (processed securely)</li>
                  <li>• Account credentials</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Usage Information</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Website usage and navigation patterns</li>
                  <li>• Search queries and preferences</li>
                  <li>• Device and browser information</li>
                  <li>• IP address and location data</li>
                  <li>• Cookies and tracking technologies</li>
                </ul>
              </div>
            </div>
          </section>

          {/* How We Use Information */}
          <section className="mb-12">
            <div className="flex items-center mb-6">
              <Eye className="w-8 h-8 text-green-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">How We Use Your Information</h2>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Service Provision</h3>
                  <ul className="text-gray-600 space-y-2 mb-6">
                    <li>• Process ticket purchases and bookings</li>
                    <li>• Provide customer support</li>
                    <li>• Send booking confirmations and updates</li>
                    <li>• Manage your account and preferences</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Communication</h3>
                  <ul className="text-gray-600 space-y-2 mb-6">
                    <li>• Send promotional offers and newsletters</li>
                    <li>• Notify about new matches and events</li>
                    <li>• Provide important service updates</li>
                    <li>• Respond to inquiries and feedback</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Improvement</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Analyze website usage and performance</li>
                    <li>• Improve our services and user experience</li>
                    <li>• Develop new features and functionality</li>
                    <li>• Conduct market research and analytics</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Legal Compliance</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Comply with legal obligations</li>
                    <li>• Prevent fraud and security threats</li>
                    <li>• Enforce our terms and conditions</li>
                    <li>• Protect our rights and interests</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Data Security */}
          <section className="mb-12">
            <div className="flex items-center mb-6">
              <Lock className="w-8 h-8 text-green-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Data Security</h2>
            </div>
            
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-8">
              <p className="text-gray-600 mb-6">
                We implement appropriate technical and organizational security measures to protect your personal 
                information against unauthorized access, alteration, disclosure, or destruction.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-white rounded-lg p-4 shadow-md">
                    <Shield className="w-8 h-8 text-green-600 mx-auto mb-2" />
                    <h3 className="font-semibold text-gray-900 mb-2">SSL Encryption</h3>
                    <p className="text-gray-600 text-sm">All data transmission is encrypted using SSL technology</p>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-white rounded-lg p-4 shadow-md">
                    <Database className="w-8 h-8 text-green-600 mx-auto mb-2" />
                    <h3 className="font-semibold text-gray-900 mb-2">Secure Storage</h3>
                    <p className="text-gray-600 text-sm">Data stored in secure, access-controlled environments</p>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-white rounded-lg p-4 shadow-md">
                    <Eye className="w-8 h-8 text-green-600 mx-auto mb-2" />
                    <h3 className="font-semibold text-gray-900 mb-2">Access Control</h3>
                    <p className="text-gray-600 text-sm">Strict access controls and regular security audits</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Your Rights */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Privacy Rights</h2>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <p className="text-gray-600 mb-6">
                Depending on your location, you may have the following rights regarding your personal information:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Access & Portability</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Request access to your personal data</li>
                    <li>• Receive a copy of your data</li>
                    <li>• Transfer data to another service</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Control & Deletion</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Correct inaccurate information</li>
                    <li>• Delete your personal data</li>
                    <li>• Restrict processing of your data</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Cookies */}
          <section className="mb-12">
            <div className="flex items-center mb-6">
              <Globe className="w-8 h-8 text-green-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Cookies and Tracking</h2>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <p className="text-gray-600 mb-4">
                We use cookies and similar tracking technologies to enhance your browsing experience, 
                analyze website traffic, and personalize content.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Essential Cookies</h3>
                  <p className="text-gray-600 text-sm">Required for website functionality</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Analytics Cookies</h3>
                  <p className="text-gray-600 text-sm">Help us understand website usage</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Marketing Cookies</h3>
                  <p className="text-gray-600 text-sm">Used for personalized advertising</p>
                </div>
              </div>
            </div>
          </section>

          {/* Contact */}
          <section>
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <Mail className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Questions About Privacy?</h2>
              <p className="text-gray-600 mb-6">
                If you have any questions about this Privacy Policy or our data practices, 
                please don't hesitate to contact us.
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

export default PrivacyPage;