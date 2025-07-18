import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, HelpCircle, Shield } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    category: 'general',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('Thank you for your message! We\'ll get back to you within 24 hours.');
    setFormData({ name: '', email: '', subject: '', category: 'general', message: '' });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-green-900 via-green-800 to-blue-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Mail className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl md:text-2xl text-green-100 mb-4">
              We're here to help with all your football ticket needs
            </p>
            <p className="text-green-200">Get in touch and we'll respond within 24 hours</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Contact Methods */}
          <section className="mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <Mail className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Support</h3>
                <p className="text-gray-600 mb-3">Get help via email</p>
                <a href="mailto:support@ticketsfootball.net" className="text-green-600 hover:text-green-700 font-medium">
                  support@ticketsfootball.net
                </a>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <Phone className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone Support</h3>
                <p className="text-gray-600 mb-3">Speak to our team</p>
                <a href="tel:+1-800-TICKETS" className="text-blue-600 hover:text-blue-700 font-medium">
                  +1-800-TICKETS
                </a>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <MessageCircle className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Live Chat</h3>
                <p className="text-gray-600 mb-3">Chat with us now</p>
                <button className="text-purple-600 hover:text-purple-700 font-medium">
                  Start Chat
                </button>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <HelpCircle className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Help Center</h3>
                <p className="text-gray-600 mb-3">Find quick answers</p>
                <a href="/help" className="text-orange-600 hover:text-orange-700 font-medium">
                  Browse FAQs
                </a>
              </div>
            </div>
          </section>

          {/* Contact Form and Info */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Category
                    </label>
                    <select
                      value={formData.category}
                      onChange={(e) => handleInputChange('category', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    >
                      <option value="general">General Inquiry</option>
                      <option value="booking">Booking Support</option>
                      <option value="technical">Technical Issue</option>
                      <option value="refund">Refund Request</option>
                      <option value="partnership">Partnership</option>
                      <option value="feedback">Feedback</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => handleInputChange('subject', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Brief description of your inquiry"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Please provide as much detail as possible..."
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-colors font-semibold flex items-center justify-center"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              {/* Office Hours */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center mb-4">
                  <Clock className="w-6 h-6 text-green-600 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900">Office Hours</h3>
                </div>
                <div className="space-y-2 text-gray-600">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                  <div className="text-sm text-gray-500 mt-3">
                    * All times in GMT/UTC
                  </div>
                </div>
              </div>

              {/* Response Times */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center mb-4">
                  <Shield className="w-6 h-6 text-blue-600 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900">Response Times</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                    <div>
                      <div className="font-medium text-gray-900">Email Support</div>
                      <div className="text-sm text-gray-600">Within 24 hours</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                    <div>
                      <div className="font-medium text-gray-900">Live Chat</div>
                      <div className="text-sm text-gray-600">Instant response</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
                    <div>
                      <div className="font-medium text-gray-900">Phone Support</div>
                      <div className="text-sm text-gray-600">Immediate assistance</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                <div className="flex items-center mb-3">
                  <Phone className="w-6 h-6 text-red-600 mr-3" />
                  <h3 className="text-lg font-semibold text-red-900">Emergency Support</h3>
                </div>
                <p className="text-red-800 text-sm mb-3">
                  For urgent issues on match day or within 24 hours of an event:
                </p>
                <a href="tel:+1-800-URGENT" className="text-red-600 hover:text-red-700 font-semibold">
                  +1-800-URGENT
                </a>
                <p className="text-red-600 text-xs mt-2">Available 24/7 during event periods</p>
              </div>

              {/* Location */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center mb-4">
                  <MapPin className="w-6 h-6 text-green-600 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900">Our Location</h3>
                </div>
                <div className="text-gray-600">
                  <p className="mb-2">TicketsFootball.net</p>
                  <p className="mb-2">123 Football Street</p>
                  <p className="mb-2">London, UK EC1A 1BB</p>
                  <p className="text-sm text-gray-500 mt-3">
                    * Office visits by appointment only
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;