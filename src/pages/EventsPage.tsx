import React, { useState, ChangeEvent, useEffect } from 'react';
import { Search } from 'lucide-react';
import { motion } from 'framer-motion';
import { EventCard } from '@/components/layouts/events/EventCard';
import { FeaturedEventCard } from '@/components/layouts/events/FeaturedEventCard';
import { EventCardSkeleton } from '@/components/layouts/events/EventCardSkeleton';

// Sample event data
export const EVENTS_DATA = [
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

// Type definitions for the events data
export interface Event {
  id: number;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  type: string;
  attendees: number;
  image: string;
}


// Main EventsPage Component
const EventsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('All Types');
  const [useSearch] = useState(false);
  const [loading, setLoading] = useState(true);
  const [events, setEvents] = useState<typeof EVENTS_DATA>([]);
  
  // Use events state instead of directly using EVENTS_DATA
  const filteredEvents = events.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          event.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === 'All Types' || event.type === selectedType;
    return matchesSearch && matchesType;
  });
  
  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };
  
  const handleTypeChange = (type: string) => {
    setSelectedType(type);
  };
  
  // Featured event is the first event with the most attendees
  const featuredEvent = events.length > 0 ? [...events].sort((a, b) => b.attendees - a.attendees)[0] : null;
  
  useEffect(() => {
    // Simulate API call to fetch events data
    const fetchEvents = async () => {
      try {
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 1500));
        // Set the data
        setEvents(EVENTS_DATA);
      } catch (error) {
        console.error('Error fetching events:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  return (
    <main className="responsive-container mt-16">
      <div className="space-y-8 mt-20 mb-20">
        {/* Hero Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden bg-transparent"
        >
          <div className="pt-8 pb-3 text-center">
            <p className="text-2xl">Our events are crafted to engage and foster meaningful connections. <br/> Discover what's ahead!</p>
          </div>
        </motion.section>

        {/* Search and Filter */}
        {/* update when we have more data */}
        {useSearch && <div className="flex flex-wrap gap-4 justify-between items-center">
          <div className="relative">
            <input 
              type="search" 
              value={searchTerm} 
              onChange={handleSearchChange} 
              placeholder="Search events" 
              className="bg-card border border-border rounded-full py-2 pl-10 pr-4 text-sm text-muted-foreground"
            />
            <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
          </div>
          <div className="flex items-center">
            <select 
              value={selectedType} 
              onChange={(e) => handleTypeChange(e.target.value)} 
              className="bg-card border border-border rounded-full py-2 pl-4 pr-10 text-sm text-muted-foreground"
            >
              {EVENT_TYPES.map((type, index) => (
                <option key={index} value={type}>{type}</option>
              ))}
            </select>
          </div>
        </div>}

        {/* Featured Event */}
        {loading ? (
          <div className="mb-8">
            <div className="rounded-2xl overflow-hidden bg-white">
              <div className="h-64 w-full">
                <div className="animate-pulse bg-gray-200 h-full w-full"></div>
              </div>
              <div className="p-6 space-y-4">
                <div className="animate-pulse bg-gray-200 h-6 w-1/4 rounded"></div>
                <div className="animate-pulse bg-gray-200 h-8 w-3/4 rounded"></div>
                <div className="animate-pulse bg-gray-200 h-20 w-full rounded"></div>
                <div className="flex justify-between">
                  <div className="animate-pulse bg-gray-200 h-6 w-1/3 rounded"></div>
                  <div className="animate-pulse bg-gray-200 h-10 w-1/4 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          featuredEvent && <FeaturedEventCard event={featuredEvent} />
        )}

        {/* Event Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading ? (
            // Display skeleton cards while loading
            Array(6).fill(0).map((_, index) => (
              <EventCardSkeleton key={index} />
            ))
          ) : (
            filteredEvents.map((event, index) => (
              <EventCard key={index} event={event} />
            ))
          )}
        </div>
      </div>
    </main>
  );
};
export default EventsPage;