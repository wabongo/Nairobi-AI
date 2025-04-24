import React, { useState, ChangeEvent } from 'react';
import { Calendar, MapPin, Clock, Filter, Search, Users, ExternalLink } from 'lucide-react';

// Sample event data
const EVENTS_DATA = [
  {
    id: 1,
    title: 'Introduction to Large Language Models',
    description: 'Learn about the fundamentals of LLMs, their architecture, capabilities, and limitations in this hands-on workshop.',
    date: 'March 15, 2025',
    time: '9:00 AM - 5:00 PM',
    location: 'iHub, Nairobi',
    type: 'Workshop',
    attendees: 45,
    image: 'https://images.unsplash.com/photo-1591453089816-0fbb971b454c?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 2,
    title: 'AI for Sustainable Agriculture',
    description: 'Discover how AI is transforming agriculture across Africa with real-world case studies and expert insights.',
    date: 'March 22, 2025',
    time: '2:00 PM - 4:00 PM',
    location: 'Virtual',
    type: 'Webinar',
    attendees: 120,
    image: 'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 3,
    title: 'Annual Nairobi AI Conference',
    description: 'The biggest AI event in East Africa, featuring keynotes, workshops, and networking opportunities with industry leaders.',
    date: 'April 5-7, 2025',
    time: '8:00 AM - 6:00 PM',
    location: 'KICC, Nairobi',
    type: 'Conference',
    attendees: 500,
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 4,
    title: 'Machine Learning Study Group',
    description: 'Join our bi-weekly study group focusing on practical machine learning implementation and problem-solving.',
    date: 'March 18, 2025',
    time: '6:00 PM - 8:00 PM',
    location: 'Nairobi Garage, Kilimani',
    type: 'Meetup',
    attendees: 25,
    image: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 5,
    title: 'Computer Vision Hackathon',
    description: 'A 48-hour hackathon focused on developing computer vision solutions for healthcare challenges in Africa.',
    date: 'March 29-31, 2025',
    time: 'All day',
    location: 'The Foundry, Westlands',
    type: 'Hackathon',
    attendees: 75,
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 6,
    title: 'AI Ethics & Governance Panel',
    description: 'Join industry experts and policymakers for a discussion on ethical AI development and regulatory frameworks in Africa.',
    date: 'April 12, 2025',
    time: '3:00 PM - 5:00 PM',
    location: 'University of Nairobi',
    type: 'Panel Discussion',
    attendees: 85,
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80'
  }
];

const EVENT_TYPES = ['All Types', 'Workshop', 'Webinar', 'Conference', 'Meetup', 'Hackathon', 'Panel Discussion'];

const EventsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('All Types');
  
  const filteredEvents = EVENTS_DATA.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          event.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === 'All Types' || event.type === selectedType;
    return matchesSearch && matchesType;
  });

  return (
    <main className="responsive-container mt-16">
      <div className="space-y-8 mt-20">
        {/* Hero Section */}
        <section className="bg-primary/5 rounded-lg p-8 mb-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Nairobi AI Events</h1>
            <p className="text-muted-foreground">
              Discover workshops, conferences, meetups, and more from the Nairobi AI community.
            </p>
          </div>
        </section>

        {/* Filters */}
        <section className="mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-muted-foreground" />
              </div>
              <input
                type="text"
                placeholder="Search events..."
                className="pl-10 w-full bg-background border border-border rounded-md py-2 px-4 focus:outline-none focus:ring-1 focus:ring-primary"
                value={searchTerm}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="relative w-full md:w-64 flex-shrink-0">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Filter className="h-5 w-5 text-muted-foreground" />
              </div>
              <select
                className="pl-10 w-full bg-background border border-border rounded-md py-2 px-4 focus:outline-none focus:ring-1 focus:ring-primary appearance-none"
                value={selectedType}
                onChange={(e: ChangeEvent<HTMLSelectElement>) => setSelectedType(e.target.value)}
              >
                {EVENT_TYPES.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>
          </div>
          
          {filteredEvents.length === 0 && (
            <div className="text-center p-12 border border-dashed border-border rounded-lg mt-8">
              <p className="text-muted-foreground">No events found matching your criteria. Try adjusting your filters.</p>
            </div>
          )}
        </section>

        {/* Featured Event */}
        {filteredEvents.length > 0 && filteredEvents[0] && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Featured Event</h2>
            <div className="rounded-xl overflow-hidden border border-border bg-card">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="h-48 md:h-auto overflow-hidden relative">
                  <img 
                    src={filteredEvents[0].image} 
                    alt={filteredEvents[0].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                    {filteredEvents[0].type}
                  </div>
                </div>
                <div className="p-6 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold mb-2">{filteredEvents[0].title}</h3>
                    <p className="text-muted-foreground mb-4">{filteredEvents[0].description}</p>
                    
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <Calendar className="w-4 h-4 mr-2 text-primary" />
                        <span>{filteredEvents[0].date}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Clock className="w-4 h-4 mr-2 text-primary" />
                        <span>{filteredEvents[0].time}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <MapPin className="w-4 h-4 mr-2 text-primary" />
                        <span>{filteredEvents[0].location}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Users className="w-4 h-4 mr-2 text-primary" />
                        <span>{filteredEvents[0].attendees} attendees</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <button className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 transition-colors">
                      Register Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Events Grid */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.slice(1).map(event => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </section>

        {/* Create Event CTA */}
        <section className="mt-12 bg-card rounded-lg p-8 border border-border">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold">Host Your AI Event</h2>
              <p className="mt-2 text-muted-foreground">
                Share your knowledge and connect with the community by hosting your own AI event.
              </p>
            </div>
            <button className="bg-primary text-white px-6 py-3 rounded-md hover:bg-primary/90 transition-colors whitespace-nowrap self-start">
              Create Event
            </button>
          </div>
        </section>
      </div>
    </main>
  );
};

interface EventCardProps {
  event: typeof EVENTS_DATA[0];
}

const EventCard: React.FC<EventCardProps> = ({ event }) => (
  <div className="bg-card border border-border rounded-xl overflow-hidden transition-all hover:shadow-md flex flex-col h-full">
    <div className="h-48 overflow-hidden relative">
      <img 
        src={event.image} 
        alt={event.title}
        className="w-full h-full object-cover"
      />
      <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
        {event.type}
      </div>
    </div>
    <div className="p-6 flex-1 flex flex-col">
      <h3 className="text-lg font-bold mb-2">{event.title}</h3>
      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{event.description}</p>
      
      <div className="space-y-1.5 mt-auto">
        <div className="flex items-center text-sm">
          <Calendar className="w-4 h-4 mr-2 text-primary" />
          <span>{event.date}</span>
        </div>
        <div className="flex items-center text-sm">
          <MapPin className="w-4 h-4 mr-2 text-primary" />
          <span>{event.location}</span>
        </div>
        <div className="flex items-center text-sm">
          <Users className="w-4 h-4 mr-2 text-primary" />
          <span>{event.attendees} attendees</span>
        </div>
      </div>
      
      <div className="mt-4 pt-4 border-t border-border flex justify-between items-center">
        <span className="text-primary font-medium text-sm">View Details</span>
        <ExternalLink className="w-4 h-4 text-primary" />
      </div>
    </div>
  </div>
);

export default EventsPage;
