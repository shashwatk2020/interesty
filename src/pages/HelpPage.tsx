import React, { useState } from 'react';
import { Search, ChevronDown, ChevronRight, HelpCircle, Book, MessageCircle, Phone, Mail } from 'lucide-react';

const HelpPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedCategory, setExpandedCategory] = useState<string | null>('booking');

  const faqCategories = [
    {
      id: 'booking',
      title: 'Booking & Purchasing',
      icon: '🎫',
      questions: [
        {
          question: 'How do I buy tickets on TicketsFootball.net?',
          answer: 'TicketsFootball.net is a comparison platform. When you find tickets you want, you\'ll be redirected to our trusted partner sites (like Viagogo, StubHub, or Ticketmaster) to complete your purchase. We help you compare prices and find the best deals.'
        },
        {
          question: 'Are the tickets authentic and guaranteed?',
          answer: 'Yes! We only work with verified and trusted ticket partners who guarantee authentic tickets. Each partner has their own buyer protection policies. If you receive invalid tickets, you\'ll be refunded or provided with replacement tickets.'
        },
        {
          question: 'Can I get a refund if I change my mind?',
          answer: 'Refund policies vary by partner and ticket type. Generally, most tickets are non-refundable unless the event is cancelled. Some partners offer refund protection for an additional fee. Check the specific terms on the partner site before purchasing.'
        },
        {
          question: 'Why do prices change on your website?',
          answer: 'Ticket prices are dynamic and controlled by our partner sellers. Prices can change based on demand, availability, time until the event, and market conditions. We recommend booking quickly when you find a good price.'
        },
        {
          question: 'What payment methods are accepted?',
          answer: 'Payment methods depend on the partner site you\'re purchasing from. Most accept major credit cards (Visa, Mastercard, American Express), PayPal, and some accept bank transfers or digital wallets like Apple Pay and Google Pay.'
        }
      ]
    },
    {
      id: 'delivery',
      title: 'Ticket Delivery',
      icon: '📧',
      questions: [
        {
          question: 'How will I receive my tickets?',
          answer: 'Most tickets are delivered electronically via email as PDF files or mobile tickets. Some may be available for collection at the venue or delivered by courier. The delivery method will be clearly stated before you purchase.'
        },
        {
          question: 'When will I receive my tickets?',
          answer: 'Delivery times vary by partner and event. Electronic tickets are usually delivered within 24-48 hours. For high-demand events, tickets might be delivered closer to the event date. You\'ll receive confirmation and tracking information from the seller.'
        },
        {
          question: 'What if I don\'t receive my tickets?',
          answer: 'If you haven\'t received your tickets within the promised timeframe, contact the seller directly using the contact information in your confirmation email. All our partners have customer service teams to help resolve delivery issues.'
        },
        {
          question: 'Can I change the delivery address?',
          answer: 'This depends on the seller\'s policy and how close you are to the event. Contact the seller as soon as possible if you need to change delivery details. Electronic delivery to email addresses can usually be updated more easily than physical delivery.'
        }
      ]
    },
    {
      id: 'events',
      title: 'Events & Matches',
      icon: '⚽',
      questions: [
        {
          question: 'What happens if a match is cancelled or postponed?',
          answer: 'If an event is officially cancelled, most sellers will provide a full refund. For postponed events, tickets are usually valid for the new date. Refund and exchange policies vary by seller, so check their specific terms.'
        },
        {
          question: 'Can I sell my tickets if I can\'t attend?',
          answer: 'This depends on the ticket terms and the seller\'s policy. Some tickets are transferable, while others are not. Check your ticket terms or contact the original seller for guidance on reselling or transferring tickets.'
        },
        {
          question: 'What should I bring to the stadium?',
          answer: 'Bring your tickets (printed or on mobile), valid photo ID, and check the stadium\'s specific entry requirements. Some venues have restrictions on bags, food, drinks, or other items. Check the venue\'s website for their specific policies.'
        },
        {
          question: 'Are there age restrictions for matches?',
          answer: 'Age restrictions vary by venue and event. Most football matches welcome all ages, but some sections might have age restrictions. Children often need tickets regardless of age. Check the specific event and venue requirements when booking.'
        }
      ]
    },
    {
      id: 'account',
      title: 'Account & Technical',
      icon: '👤',
      questions: [
        {
          question: 'Do I need to create an account to buy tickets?',
          answer: 'You don\'t need an account on TicketsFootball.net to browse and compare tickets. However, you\'ll need to create an account with the partner seller when you make a purchase. This helps with order tracking and customer service.'
        },
        {
          question: 'Is my personal information secure?',
          answer: 'Yes, we take data security seriously. We use SSL encryption and follow industry best practices. When you purchase tickets, your payment information is processed securely by our trusted partners, not stored on our servers.'
        },
        {
          question: 'Why can\'t I find tickets for a specific match?',
          answer: 'Tickets might not be available yet, could be sold out, or the match might not be in our partner networks. We add new events regularly. You can contact us to request specific matches, and we\'ll try to source them through our partners.'
        },
        {
          question: 'The website is not working properly. What should I do?',
          answer: 'Try refreshing the page, clearing your browser cache, or using a different browser. If problems persist, contact our technical support team with details about the issue, your browser, and device type.'
        }
      ]
    },
    {
      id: 'pricing',
      title: 'Pricing & Fees',
      icon: '💰',
      questions: [
        {
          question: 'Why are ticket prices higher than face value?',
          answer: 'Many tickets on our platform are from the secondary market, where prices are set by supply and demand. Popular matches often sell out quickly, leading to higher resale prices. We also show official tickets when available at face value.'
        },
        {
          question: 'Are there additional fees when I buy tickets?',
          answer: 'Fees vary by seller and are clearly displayed before you complete your purchase. Common fees include booking fees, delivery charges, and payment processing fees. The total price including all fees is shown before you pay.'
        },
        {
          question: 'Can I get cheaper tickets closer to the event?',
          answer: 'Sometimes prices drop closer to the event if demand is lower than expected, but for popular matches, prices often increase as the date approaches. We recommend booking early for the best selection and potentially better prices.'
        },
        {
          question: 'Do you offer group discounts?',
          answer: 'Group discounts depend on the seller and event. Some partners offer discounts for large group bookings. Contact our customer service team for assistance with group bookings of 10+ tickets.'
        }
      ]
    }
  ];

  const filteredCategories = faqCategories.map(category => ({
    ...category,
    questions: category.questions.filter(
      q => 
        q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        q.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-green-900 via-green-800 to-blue-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <HelpCircle className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Help Center</h1>
            <p className="text-xl md:text-2xl text-green-100 mb-8">
              Find answers to frequently asked questions
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
                <input
                  type="text"
                  placeholder="Search for help topics..."
                  className="w-full pl-14 pr-4 py-4 text-lg rounded-xl border-0 bg-white bg-opacity-90 text-gray-900 placeholder-gray-500 focus:ring-4 focus:ring-green-500 focus:bg-white transition-all"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Quick Contact Options */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Need More Help?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <a href="/contact" className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                <Mail className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Support</h3>
                <p className="text-gray-600 text-sm">Get detailed help via email</p>
                <p className="text-green-600 font-medium mt-2">24-hour response</p>
              </a>
              
              <a href="tel:+1-800-TICKETS" className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                <Phone className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone Support</h3>
                <p className="text-gray-600 text-sm">Speak directly with our team</p>
                <p className="text-blue-600 font-medium mt-2">Mon-Fri 9AM-6PM</p>
              </a>
              
              <button className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                <MessageCircle className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Live Chat</h3>
                <p className="text-gray-600 text-sm">Chat with us in real-time</p>
                <p className="text-purple-600 font-medium mt-2">Available now</p>
              </button>
            </div>
          </section>

          {/* FAQ Categories */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
            
            {filteredCategories.length === 0 ? (
              <div className="bg-white rounded-xl shadow-lg p-8 text-center">
                <Search className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No results found</h3>
                <p className="text-gray-600">Try searching with different keywords or browse our categories below.</p>
              </div>
            ) : (
              <div className="space-y-4">
                {filteredCategories.map((category) => (
                  <div key={category.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
                    <button
                      onClick={() => setExpandedCategory(expandedCategory === category.id ? null : category.id)}
                      className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-center">
                        <span className="text-2xl mr-3">{category.icon}</span>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">{category.title}</h3>
                          <p className="text-sm text-gray-600">{category.questions.length} questions</p>
                        </div>
                      </div>
                      {expandedCategory === category.id ? (
                        <ChevronDown className="w-5 h-5 text-gray-400" />
                      ) : (
                        <ChevronRight className="w-5 h-5 text-gray-400" />
                      )}
                    </button>
                    
                    {expandedCategory === category.id && (
                      <div className="border-t border-gray-200">
                        {category.questions.map((faq, index) => (
                          <div key={index} className="px-6 py-4 border-b border-gray-100 last:border-b-0">
                            <h4 className="font-medium text-gray-900 mb-2">{faq.question}</h4>
                            <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </section>

          {/* Additional Resources */}
          <section className="mt-12">
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-8 text-center">
              <Book className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Still Need Help?</h2>
              <p className="text-gray-600 mb-6">
                Our customer support team is ready to assist you with any questions not covered in our FAQ.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold"
                >
                  Contact Support
                </a>
                <a
                  href="/about"
                  className="bg-white text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors font-semibold border border-gray-300"
                >
                  Learn About Us
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default HelpPage;