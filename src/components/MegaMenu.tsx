import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

const MegaMenu: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const menuItems = [
    {
      title: 'World Cup Tickets',
      href: '/world-cup-tickets',
      columns: [
        {
          title: 'Major Teams',
          links: [
            { title: 'Argentina Tickets', href: '/argentina-tickets' },
            { title: 'France Tickets', href: '/france-tickets' },
            { title: 'Brazil Tickets', href: '/brazil-tickets' },
            { title: 'England Tickets', href: '/england-tickets' },
            { title: 'Spain Tickets', href: '/spain-tickets' },
            { title: 'Germany Tickets', href: '/germany-tickets' },
            { title: 'Portugal Tickets', href: '/portugal-tickets' },
            { title: 'Netherlands Tickets', href: '/netherlands-tickets' },
          ]
        },
        {
          title: 'More Teams',
          links: [
            { title: 'Italy Tickets', href: '/italy-tickets' },
            { title: 'Croatia Tickets', href: '/croatia-tickets' },
            { title: 'Morocco Tickets', href: '/morocco-tickets' },
            { title: 'Japan Tickets', href: '/japan-tickets' },
            { title: 'Mexico Tickets', href: '/mexico-tickets' },
            { title: 'USA Tickets', href: '/usa-tickets' },
            { title: 'Canada Tickets', href: '/canada-tickets' },
            { title: 'Belgium Tickets', href: '/belgium-tickets' },
          ]
        },
        {
          title: 'Major Fixtures',
          links: [
            { title: 'World Cup Final Tickets', href: '/world-cup-final-tickets', featured: true },
            { title: 'World Cup Semi Final Tickets', href: '/world-cup-semi-final-tickets' },
            { title: 'World Cup Quarter Final Tickets', href: '/world-cup-quarter-final-tickets' },
            { title: 'World Cup Round of 16 Tickets', href: '/world-cup-round-16-tickets' },
            { title: 'World Cup Group Stage Tickets', href: '/world-cup-group-stage-tickets' },
            { title: 'Argentina vs Brazil Tickets', href: '/argentina-vs-brazil-tickets' },
            { title: 'France vs England Tickets', href: '/france-vs-england-tickets' },
            { title: 'Spain vs Germany Tickets', href: '/spain-vs-germany-tickets' },
          ]
        },
        {
          title: 'Special Events',
          links: [
            { title: 'World Cup Opening Ceremony Tickets', href: '/world-cup-opening-ceremony-tickets' },
            { title: 'World Cup Closing Ceremony Tickets', href: '/world-cup-closing-ceremony-tickets' },
            { title: 'World Cup Package Deal Tickets', href: '/world-cup-package-deal-tickets' },
            { title: 'World Cup VIP Experience Tickets', href: '/world-cup-vip-experience-tickets' },
            { title: 'World Cup Hospitality Tickets', href: '/world-cup-hospitality-tickets' },
            { title: 'World Cup Premium Tickets', href: '/world-cup-premium-tickets' },
          ]
        }
      ]
    },
    {
      title: 'Premier League Tickets',
      href: '/premier-league-tickets',
      columns: [
        {
          title: 'Top 6 Teams',
          links: [
            { title: 'Manchester United Tickets', href: '/manchester-united-tickets' },
            { title: 'Liverpool Tickets', href: '/liverpool-tickets' },
            { title: 'Chelsea Tickets', href: '/chelsea-tickets' },
            { title: 'Arsenal Tickets', href: '/arsenal-tickets' },
            { title: 'Manchester City Tickets', href: '/manchester-city-tickets' },
            { title: 'Tottenham Tickets', href: '/tottenham-tickets' },
          ]
        },
        {
          title: 'Other Teams',
          links: [
            { title: 'Newcastle United Tickets', href: '/newcastle-united-tickets' },
            { title: 'West Ham Tickets', href: '/west-ham-tickets' },
            { title: 'Aston Villa Tickets', href: '/aston-villa-tickets' },
            { title: 'Brighton Tickets', href: '/brighton-tickets' },
            { title: 'Crystal Palace Tickets', href: '/crystal-palace-tickets' },
            { title: 'Everton Tickets', href: '/everton-tickets' },
            { title: 'Fulham Tickets', href: '/fulham-tickets' },
            { title: 'Brentford Tickets', href: '/brentford-tickets' },
          ]
        },
        {
          title: 'Major Fixtures',
          links: [
            { title: 'Manchester United vs Liverpool Tickets', href: '/manchester-united-vs-liverpool-tickets' },
            { title: 'Arsenal vs Chelsea Tickets', href: '/arsenal-vs-chelsea-tickets' },
            { title: 'Manchester City vs Liverpool Tickets', href: '/manchester-city-vs-liverpool-tickets' },
            { title: 'Arsenal vs Tottenham Tickets', href: '/arsenal-vs-tottenham-tickets' },
            { title: 'Manchester United vs Manchester City Tickets', href: '/manchester-united-vs-manchester-city-tickets' },
            { title: 'Chelsea vs Arsenal Tickets', href: '/chelsea-vs-arsenal-tickets' },
            { title: 'Liverpool vs Chelsea Tickets', href: '/liverpool-vs-chelsea-tickets' },
            { title: 'Tottenham vs Chelsea Tickets', href: '/tottenham-vs-chelsea-tickets' },
          ]
        },
        {
          title: 'Special Events',
          links: [
            { title: 'Premier League Season Opener Tickets', href: '/premier-league-season-opener-tickets' },
            { title: 'Premier League Final Day Tickets', href: '/premier-league-final-day-tickets' },
            { title: 'Premier League Christmas Fixture Tickets', href: '/premier-league-christmas-fixture-tickets' },
            { title: 'Premier League Boxing Day Tickets', href: '/premier-league-boxing-day-tickets' },
            { title: 'Premier League New Year Fixture Tickets', href: '/premier-league-new-year-fixture-tickets' },
          ]
        }
      ]
    },
    {
      title: 'Champions League Tickets',
      href: '/champions-league-tickets',
      columns: [
        {
          title: 'Elite Teams',
          links: [
            { title: 'Real Madrid Tickets', href: '/real-madrid-tickets' },
            { title: 'Barcelona Tickets', href: '/barcelona-tickets' },
            { title: 'Bayern Munich Tickets', href: '/bayern-munich-tickets' },
            { title: 'PSG Tickets', href: '/psg-tickets' },
            { title: 'AC Milan Tickets', href: '/ac-milan-tickets' },
            { title: 'Inter Milan Tickets', href: '/inter-milan-tickets' },
            { title: 'Manchester City Tickets', href: '/manchester-city-tickets' },
            { title: 'Liverpool Tickets', href: '/liverpool-tickets' },
          ]
        },
        {
          title: 'Other Teams',
          links: [
            { title: 'Juventus Tickets', href: '/juventus-tickets' },
            { title: 'Atletico Madrid Tickets', href: '/atletico-madrid-tickets' },
            { title: 'Borussia Dortmund Tickets', href: '/borussia-dortmund-tickets' },
            { title: 'Napoli Tickets', href: '/napoli-tickets' },
            { title: 'Porto Tickets', href: '/porto-tickets' },
            { title: 'Benfica Tickets', href: '/benfica-tickets' },
            { title: 'Arsenal Tickets', href: '/arsenal-tickets' },
            { title: 'Chelsea Tickets', href: '/chelsea-tickets' },
          ]
        },
        {
          title: 'Tournament Rounds',
          links: [
            { title: 'Champions League Round of 16 Tickets', href: '/champions-league-round-16-tickets' },
            { title: 'Champions League Quarter Final Tickets', href: '/champions-league-quarter-final-tickets' },
            { title: 'Champions League Semi Final Tickets', href: '/champions-league-semi-final-tickets' },
            { title: 'Champions League Group Stage Tickets', href: '/champions-league-group-stage-tickets' },
            { title: 'Real Madrid vs Barcelona Tickets', href: '/real-madrid-vs-barcelona-tickets' },
            { title: 'Bayern Munich vs PSG Tickets', href: '/bayern-munich-vs-psg-tickets' },
            { title: 'Manchester City vs Real Madrid Tickets', href: '/manchester-city-vs-real-madrid-tickets' },
          ]
        },
        {
          title: 'Final Tickets',
          links: [
            { title: 'Champions League Final Tickets', href: '/champions-league-final-tickets', featured: true },
            { title: 'Champions League Final VIP Tickets', href: '/champions-league-final-vip-tickets' },
            { title: 'Champions League Final Hospitality Tickets', href: '/champions-league-final-hospitality-tickets' },
            { title: 'Champions League Final Premium Tickets', href: '/champions-league-final-premium-tickets' },
            { title: 'Champions League Final Corporate Tickets', href: '/champions-league-final-corporate-tickets' },
          ]
        }
      ]
    },
    {
      title: 'Europa League Tickets',
      href: '/europa-league-tickets',
      columns: [
        {
          title: 'Top Teams',
          links: [
            { title: 'AS Roma Tickets', href: '/as-roma-tickets' },
            { title: 'Sevilla Tickets', href: '/sevilla-tickets' },
            { title: 'Eintracht Frankfurt Tickets', href: '/eintracht-frankfurt-tickets' },
            { title: 'West Ham Tickets', href: '/west-ham-tickets' },
            { title: 'Olympiakos Tickets', href: '/olympiakos-tickets' },
            { title: 'Ajax Tickets', href: '/ajax-tickets' },
            { title: 'Feyenoord Tickets', href: '/feyenoord-tickets' },
            { title: 'Rangers Tickets', href: '/rangers-tickets' },
          ]
        },
        {
          title: 'Other Teams',
          links: [
            { title: 'Real Sociedad Tickets', href: '/real-sociedad-tickets' },
            { title: 'Atalanta Tickets', href: '/atalanta-tickets' },
            { title: 'Villarreal Tickets', href: '/villarreal-tickets' },
            { title: 'Bayer Leverkusen Tickets', href: '/bayer-leverkusen-tickets' },
            { title: 'Brighton Tickets', href: '/brighton-tickets' },
            { title: 'Union Berlin Tickets', href: '/union-berlin-tickets' },
            { title: 'Sporting CP Tickets', href: '/sporting-cp-tickets' },
            { title: 'Marseille Tickets', href: '/marseille-tickets' },
          ]
        },
        {
          title: 'Tournament Rounds',
          links: [
            { title: 'Europa League Group Stage Tickets', href: '/europa-league-group-stage-tickets' },
            { title: 'Europa League Round of 16 Tickets', href: '/europa-league-round-16-tickets' },
            { title: 'Europa League Quarter Final Tickets', href: '/europa-league-quarter-final-tickets' },
            { title: 'Europa League Semi Final Tickets', href: '/europa-league-semi-final-tickets' },
            { title: 'AS Roma vs Sevilla Tickets', href: '/as-roma-vs-sevilla-tickets' },
            { title: 'West Ham vs Ajax Tickets', href: '/west-ham-vs-ajax-tickets' },
            { title: 'Eintracht Frankfurt vs Rangers Tickets', href: '/eintracht-frankfurt-vs-rangers-tickets' },
          ]
        },
        {
          title: 'Final Tickets',
          links: [
            { title: 'Europa League Final Tickets', href: '/europa-league-final-tickets', featured: true },
            { title: 'Europa League Final VIP Tickets', href: '/europa-league-final-vip-tickets' },
            { title: 'Europa League Final Hospitality Tickets', href: '/europa-league-final-hospitality-tickets' },
            { title: 'Europa League Final Premium Tickets', href: '/europa-league-final-premium-tickets' },
          ]
        }
      ]
    },
    {
      title: 'La Liga Tickets',
      href: '/la-liga-tickets',
      columns: [
        {
          title: 'Top Teams',
          links: [
            { title: 'Real Madrid Tickets', href: '/real-madrid-tickets' },
            { title: 'Barcelona Tickets', href: '/barcelona-tickets' },
            { title: 'Atletico Madrid Tickets', href: '/atletico-madrid-tickets' },
            { title: 'Sevilla Tickets', href: '/sevilla-tickets' },
            { title: 'Valencia Tickets', href: '/valencia-tickets' },
            { title: 'Real Sociedad Tickets', href: '/real-sociedad-tickets' },
            { title: 'Athletic Bilbao Tickets', href: '/athletic-bilbao-tickets' },
            { title: 'Villarreal Tickets', href: '/villarreal-tickets' },
          ]
        },
        {
          title: 'Other Teams',
          links: [
            { title: 'Real Betis Tickets', href: '/real-betis-tickets' },
            { title: 'Osasuna Tickets', href: '/osasuna-tickets' },
            { title: 'Girona Tickets', href: '/girona-tickets' },
            { title: 'Las Palmas Tickets', href: '/las-palmas-tickets' },
            { title: 'Celta Vigo Tickets', href: '/celta-vigo-tickets' },
            { title: 'Rayo Vallecano Tickets', href: '/rayo-vallecano-tickets' },
            { title: 'Getafe Tickets', href: '/getafe-tickets' },
            { title: 'Alaves Tickets', href: '/alaves-tickets' },
          ]
        },
        {
          title: 'Major Fixtures',
          links: [
            { title: 'Real Madrid vs Barcelona Tickets', href: '/real-madrid-vs-barcelona-tickets', featured: true },
            { title: 'Real Madrid vs Atletico Madrid Tickets', href: '/real-madrid-vs-atletico-madrid-tickets' },
            { title: 'Barcelona vs Atletico Madrid Tickets', href: '/barcelona-vs-atletico-madrid-tickets' },
            { title: 'Sevilla vs Real Betis Tickets', href: '/sevilla-vs-real-betis-tickets' },
            { title: 'Athletic Bilbao vs Real Sociedad Tickets', href: '/athletic-bilbao-vs-real-sociedad-tickets' },
            { title: 'Valencia vs Villarreal Tickets', href: '/valencia-vs-villarreal-tickets' },
          ]
        },
        {
          title: 'Special Events',
          links: [
            { title: 'La Liga Season Opener Tickets', href: '/la-liga-season-opener-tickets' },
            { title: 'La Liga Final Day Tickets', href: '/la-liga-final-day-tickets' },
            { title: 'La Liga Christmas Fixture Tickets', href: '/la-liga-christmas-fixture-tickets' },
            { title: 'La Liga New Year Fixture Tickets', href: '/la-liga-new-year-fixture-tickets' },
          ]
        }
      ]
    },
    {
      title: 'Others',
      href: '/other-competitions',
      columns: [
        {
          title: 'Major Competitions',
          links: [
            { title: 'Euro 2028 Tickets', href: '/euro-2028-tickets' },
            { title: 'MLS Tickets', href: '/mls-tickets' },
            { title: 'Saudi Pro League Tickets', href: '/saudi-pro-league-tickets' },
            { title: 'Bundesliga Tickets', href: '/bundesliga-tickets' },
            { title: 'Serie A Tickets', href: '/serie-a-tickets' },
            { title: 'Ligue 1 Tickets', href: '/ligue-1-tickets' },
            { title: 'Nations League Tickets', href: '/nations-league-tickets' },
            { title: 'Copa America Tickets', href: '/copa-america-tickets' },
          ]
        },
        {
          title: 'Domestic Cups',
          links: [
            { title: 'FA Cup Tickets', href: '/fa-cup-tickets' },
            { title: 'Copa del Rey Tickets', href: '/copa-del-rey-tickets' },
            { title: 'DFB Pokal Tickets', href: '/dfb-pokal-tickets' },
            { title: 'Coppa Italia Tickets', href: '/coppa-italia-tickets' },
            { title: 'Coupe de France Tickets', href: '/coupe-de-france-tickets' },
            { title: 'FA Cup Final Tickets', href: '/fa-cup-final-tickets' },
            { title: 'Copa del Rey Final Tickets', href: '/copa-del-rey-final-tickets' },
            { title: 'DFB Pokal Final Tickets', href: '/dfb-pokal-final-tickets' },
          ]
        },
        {
          title: 'International & Others',
          links: [
            { title: 'World Cup Qualifiers Tickets', href: '/world-cup-qualifiers-tickets' },
            { title: 'Euro Qualifiers Tickets', href: '/euro-qualifiers-tickets' },
            { title: 'International Friendlies Tickets', href: '/international-friendlies-tickets' },
            { title: 'Conference League Tickets', href: '/conference-league-tickets' },
            { title: 'Conference League Final Tickets', href: '/conference-league-final-tickets' },
            { title: 'Super Cup Tickets', href: '/super-cup-tickets' },
            { title: 'Club World Cup Tickets', href: '/club-world-cup-tickets' },
            { title: 'Women\'s Champions League Tickets', href: '/womens-champions-league-tickets' },
          ]
        },
        {
          title: 'Venues',
          links: [
            { title: 'Camp Nou Tickets', href: '/camp-nou-tickets' },
            { title: 'Santiago Bernabeu Tickets', href: '/santiago-bernabeu-tickets' },
            { title: 'Old Trafford Tickets', href: '/old-trafford-tickets' },
            { title: 'Anfield Tickets', href: '/anfield-tickets' },
            { title: 'Wembley Stadium Tickets', href: '/wembley-stadium-tickets' },
            { title: 'Allianz Arena Tickets', href: '/allianz-arena-tickets' },
            { title: 'San Siro Tickets', href: '/san-siro-tickets' },
            { title: 'MetLife Stadium Tickets', href: '/metlife-stadium-tickets' },
          ]
        }
      ]
    }
  ];

  return (
    <div className="bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-center">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="relative group"
              onMouseEnter={() => setActiveMenu(item.title)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <Link
                to={item.href}
                className="flex items-center px-3 py-4 text-sm font-medium hover:text-green-400 transition-colors"
              >
                {item.title}
                <ChevronDown className="ml-1 w-4 h-4" />
              </Link>

              {/* Mega Menu Dropdown - Fixed positioning below menu bar */}
              {activeMenu === item.title && (
                <div className="fixed left-1/2 transform -translate-x-1/2 top-40 w-screen max-w-6xl bg-white text-gray-900 shadow-2xl border-t-4 border-green-600 z-40">
                  <div className="px-6 py-6">
                    <div className="grid grid-cols-4 gap-6">
                      {item.columns.map((column, columnIndex) => (
                        <div key={columnIndex}>
                          <h3 className="font-bold text-gray-800 mb-3 text-sm uppercase tracking-wide">
                            {column.title}
                          </h3>
                          <ul className="space-y-1">
                            {column.links.map((link, linkIndex) => (
                              <li key={linkIndex}>
                                <Link
                                  to={link.href}
                                  className={`block text-sm hover:text-green-600 transition-colors py-1 ${
                                    link.featured ? 'font-semibold text-green-600' : ''
                                  }`}
                                >
                                  {link.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default MegaMenu;