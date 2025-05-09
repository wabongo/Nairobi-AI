import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Users, ArrowRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

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
  

export const EventCard: React.FC<EventCardProps> = ({ event }) => (
    <motion.div 
      className="overflow-hidden transition-all hover:shadow-md flex flex-col h-full"
    >
      <div className="relative">
        <img src={event.image} alt={event.title} className="w-full h-80 object-cover rounded-xl" />
        <div className="absolute top-3 left-3 bg-green-700 text-white text-xs font-medium px-2 py-1 rounded-full">{event.type}</div>
      </div>
      <div className="p-4 flex-grow flex flex-col">
        <h3 className="text-lg font-semibold mb-1">{event.title}</h3>
        <p className="text-muted-foreground text-sm mb-2 flex-grow">{event.description.split(' ').slice(0, 10).join(' ')}...</p>
        <div className="flex items-center text-xs text-muted-foreground mb-2">
          <Calendar size={14} className="mr-1" />
          <span>{event.date}</span>
        </div>
        {/* <div className="flex items-center text-xs text-muted-foreground mb-2">
          <Clock size={14} className="mr-1" />
          <span>{event.time}</span>
        </div> */}
        <div className="flex items-center text-xs text-muted-foreground mb-3">
          <MapPin size={14} className="mr-1" />
          <span>{event.location}</span>
        </div>
        <div className="flex items-center justify-between mt-auto pt-3">
          <div className="flex items-center text-xs">
            <Users size={14} className="mr-1" />
            <span>{event.attendees} attendees</span>
          </div>
          <Link to={`/events/${event.id}`} className="text-primary text-xs font-medium flex items-center hover:underline">
            View Details <ArrowRight size={14} className="ml-1" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
  