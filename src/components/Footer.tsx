import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  const footerSections = [
    {
      title: t('footer.competitions'),
      links: [
        { title: 'World Cup Tickets', href: '/world-cup-tickets' },
        { title: 'Premier League Tickets', href: '/premier-league-tickets' },
        { title: 'Champions League Tickets', href: '/champions-league-tickets' },
        { title: 'Europa League Tickets', href: '/europa-league-tickets' },
        { title: 'La Liga Tickets', href: '/la-liga-tickets' },
        { title: 'Bundesliga Tickets', href: '/bundesliga-tickets' },
        { title: 'Serie A Tickets', href: '/serie-a-tickets' },
        { title: 'Ligue 1 Tickets', href: '/ligue-1-tickets' },
        { title: 'MLS Tickets', href: '/mls-tickets' },
        { title: 'Saudi Pro League Tickets', href: '/saudi-pro-league-tickets' },
        { title: 'FA Cup Tickets', href: '/fa-cup-tickets' },
        { title: 'Copa del Rey Tickets', href: '/copa-del-rey-tickets' },
        { title: 'Euro 2028 Tickets', href: '/euro-2028-tickets' },
        { title: 'Nations League Tickets', href: '/nations-league-tickets' },
        { title: 'Copa America Tickets', href: '/copa-america-tickets' },
      ]
    },
    {
      title: t('footer.teams'),
      links: [
        { title: 'Manchester United Tickets', href: '/manchester-united-tickets' },
        { title: 'Liverpool Tickets', href: '/liverpool-tickets' },
        { title: 'Chelsea Tickets', href: '/chelsea-tickets' },
        { title: 'Arsenal Tickets', href: '/arsenal-tickets' },
        { title: 'Manchester City Tickets', href: '/manchester-city-tickets' },
        { title: 'Tottenham Tickets', href: '/tottenham-tickets' },
        { title: 'Real Madrid Tickets', href: '/real-madrid-tickets' },
        { title: 'Barcelona Tickets', href: '/barcelona-tickets' },
        { title: 'Bayern Munich Tickets', href: '/bayern-munich-tickets' },
        { title: 'PSG Tickets', href: '/psg-tickets' },
        { title: 'AC Milan Tickets', href: '/ac-milan-tickets' },
        { title: 'Juventus Tickets', href: '/juventus-tickets' },
        { title: 'Inter Milan Tickets', href: '/inter-milan-tickets' },
        { title: 'Atletico Madrid Tickets', href: '/atletico-madrid-tickets' },
        { title: 'Borussia Dortmund Tickets', href: '/borussia-dortmund-tickets' },
        { title: 'Ajax Tickets', href: '/ajax-tickets' },
        { title: 'Sevilla Tickets', href: '/sevilla-tickets' },
        { title: 'AS Roma Tickets', href: '/as-roma-tickets' },
        { title: 'Napoli Tickets', href: '/napoli-tickets' },
        { title: 'West Ham Tickets', href: '/west-ham-tickets' },
      ]
    },
    {
      title: t('footer.fixtures'),
      links: [
        { title: 'Real Madrid vs Barcelona Tickets', href: '/real-madrid-vs-barcelona-tickets' },
        { title: 'Manchester United vs Liverpool Tickets', href: '/manchester-united-vs-liverpool-tickets' },
        { title: 'Arsenal vs Chelsea Tickets', href: '/arsenal-vs-chelsea-tickets' },
        { title: 'Manchester United vs Manchester City Tickets', href: '/manchester-united-vs-manchester-city-tickets' },
        { title: 'Arsenal vs Tottenham Tickets', href: '/arsenal-vs-tottenham-tickets' },
        { title: 'World Cup Final Tickets', href: '/world-cup-final-tickets' },
        { title: 'Champions League Final Tickets', href: '/champions-league-final-tickets' },
        { title: 'Europa League Final Tickets', href: '/europa-league-final-tickets' },
        { title: 'FA Cup Final Tickets', href: '/fa-cup-final-tickets' },
        { title: 'Copa del Rey Final Tickets', href: '/copa-del-rey-final-tickets' },
        { title: 'Real Madrid vs Atletico Madrid Tickets', href: '/real-madrid-vs-atletico-madrid-tickets' },
        { title: 'Sevilla vs Real Betis Tickets', href: '/sevilla-vs-real-betis-tickets' },
        { title: 'Bayern Munich vs Borussia Dortmund Tickets', href: '/bayern-munich-vs-borussia-dortmund-tickets' },
        { title: 'PSG vs Marseille Tickets', href: '/psg-vs-marseille-tickets' },
        { title: 'AC Milan vs Inter Milan Tickets', href: '/ac-milan-vs-inter-milan-tickets' },
      ]
    },
    {
      title: t('footer.venues'),
      links: [
        { title: 'Old Trafford Tickets', href: '/old-trafford-tickets' },
        { title: 'Anfield Tickets', href: '/anfield-tickets' },
        { title: 'Camp Nou Tickets', href: '/camp-nou-tickets' },
        { title: 'Santiago Bernabeu Tickets', href: '/santiago-bernabeu-tickets' },
        { title: 'Allianz Arena Tickets', href: '/allianz-arena-tickets' },
        { title: 'San Siro Tickets', href: '/san-siro-tickets' },
        { title: 'Emirates Stadium Tickets', href: '/emirates-stadium-tickets' },
        { title: 'Stamford Bridge Tickets', href: '/stamford-bridge-tickets' },
        { title: 'Etihad Stadium Tickets', href: '/etihad-stadium-tickets' },
        { title: 'Wembley Stadium Tickets', href: '/wembley-stadium-tickets' },
      ]
    }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-bold text-lg mb-3 text-green-400">{section.title}</h3>
              <ul className="space-y-1">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      to={link.href}
                      className="text-gray-300 hover:text-white transition-colors text-sm"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 mt-6 pt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Company Info */}
            <div>
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-8 h-8 bg-gradient-to-br from-green-600 to-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">⚽</span>
                </div>
                <h3 className="text-xl font-bold">TicketsFootball</h3>
              </div>
              <p className="text-gray-400 text-sm">
                Your premier destination for authentic football tickets from trusted partners worldwide.
              </p>
            </div>

            {/* Partners */}
            <div>
              <h3 className="font-bold text-lg mb-3 text-green-400">Our Partners</h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-gray-800 rounded-lg p-2 text-center">
                  <span className="text-sm font-medium">Viagogo</span>
                </div>
                <div className="bg-gray-800 rounded-lg p-2 text-center">
                  <span className="text-sm font-medium">StubHub</span>
                </div>
                <div className="bg-gray-800 rounded-lg p-2 text-center">
                  <span className="text-sm font-medium">Ticketmaster</span>
                </div>
                <div className="bg-gray-800 rounded-lg p-2 text-center">
                  <span className="text-sm font-medium">LiveFootball</span>
                </div>
              </div>
            </div>

            {/* Contact & Legal */}
            <div>
              <h3 className="font-bold text-lg mb-3 text-green-400">Legal & Support</h3>
              <ul className="space-y-1">
                <li>
                  <Link to="/privacy" className="text-gray-300 hover:text-white transition-colors text-sm">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="text-gray-300 hover:text-white transition-colors text-sm">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-gray-300 hover:text-white transition-colors text-sm">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link to="/help" className="text-gray-300 hover:text-white transition-colors text-sm">
                    Help Center
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-6 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 TicketsFootball.net. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;