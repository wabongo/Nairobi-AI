import React, { useState, ChangeEvent } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Clock, Users, ExternalLink, ArrowRight, Search } from 'lucide-react';
import { motion } from 'framer-motion';
import { EventCard } from '@/components/layouts/events/EventCard';
import { FeaturedEventCard } from '@/components/layouts/events/FeaturedEventCard';

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

// Type definitions
interface Event {
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

interface EventCardProps {
  event: Event;
}


// Main EventsPage Component
const EventsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('All Types');
  const [useSearch] = useState(false);
  
  const filteredEvents = EVENTS_DATA.filter(event => {
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
  const featuredEvent = [...EVENTS_DATA].sort((a, b) => b.attendees - a.attendees)[0];

  return (
    <main className="responsive-container mt-16">
      <div className="space-y-8 mt-20">
        {/* Hero Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative rounded-2xl overflow-hidden"
        >
          <div className="p-8">
            <p>Our events are crafted to engage and foster meaningful connections. Discover what's ahead!</p>
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
        <FeaturedEventCard event={featuredEvent} />

        {/* Event Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event, index) => (
            <EventCard key={index} event={event} />
          ))}
        </div>
      </div>
    </main>
  );
};
export default EventsPage;