import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

interface Event {
  id: number;
  name: string;
  date: string;
  url: string;
}

const TicketmasterTickets: React.FC<{ entityName: string; entityType: 'team' | 'venue' | 'competition' }> = ({ entityName, entityType }) => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      const username = 'frankchiberi@gmail.com';
      const secret = 'mZ194e5skfEAnVM';
      const action = 'list_events';
      const timestamp = Math.floor(Date.now() / 1000);
      const hash = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(`${username}-${action}-${timestamp}-${secret}`))
        .then(buffer => {
          return Array.from(new Uint8Array(buffer))
            .map(b => b.toString(16).padStart(2, '0'))
            .join('');
        });

      const queryParams = new URLSearchParams({
        action,
        ts: timestamp.toString(),
        u: username,
        s: hash,
        [entityType === 'team' ? 'home_team_name' : entityType === 'venue' ? 'venue_name' : 'event_name']: entityName,
      });

      try {
        const response = await fetch(`https://www.footballticketnet.com/api?${queryParams.toString()}`);
        const data = await response.json();
        setEvents(data.events || []);
      } catch (error) {
        console.error('Error fetching events:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, [entityName, entityType]);

  if (loading) {
    return (
      <div className="text-center text-gray-500 border-2 border-dashed rounded-lg p-12">
        <p>Loading tickets...</p>
      </div>
    );
  }

  if (events.length === 0) {
    return (
      <div className="text-center text-gray-500 border-2 border-dashed rounded-lg p-12">
        <p className="mb-2">No tickets available for {entityName} at the moment.</p>
        <p>Please check back closer to match dates for a full list of available tickets.</p>
      </div>
    );
  }

  return (
    <div id="ticket-listings" className="border-t pt-8">
      <h3 className="text-2xl font-bold text-gray-800 mb-6">Available Tickets for {entityName} Matches</h3>
      <div className="space-y-4">
        {events.map(event => (
          <div key={event.id} className="bg-white rounded-lg shadow-md p-4 flex justify-between items-center">
            <div>
              <h4 className="text-lg font-semibold">{event.name}</h4>
              <p className="text-gray-600">{new Date(event.date).toLocaleDateString()}</p>
            </div>
            <a href={event.url} target="_blank" rel="noopener noreferrer" className="bg-green-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-700 transition-colors flex items-center">
              Buy Tickets <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TicketmasterTickets;
