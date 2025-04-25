import {motion} from "framer-motion";
import { Calendar, Clock, MapPin, Users, ArrowRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

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


export const FeaturedEventCard: React.FC<EventCardProps> = ({ event }) => (
    <motion.div 
      className="bg-card border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all"
      whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
        <div className="h-full">
          <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
        </div>
        <div className="p-6 flex flex-col">
          <div className="mb-4">
            <span className="bg-primary text-white text-xs font-medium px-2 py-1 rounded">{event.type}</span>
          </div>
          <h2 className="text-2xl font-bold mb-3">{event.title}</h2>
          <p className="text-muted-foreground mb-6">{event.description}</p>
          <div className="flex items-center text-sm text-muted-foreground mb-2">
            <Calendar size={16} className="mr-2" />
            <span>{event.date}</span>
          </div>
          <div className="flex items-center text-sm text-muted-foreground mb-2">
            <Clock size={16} className="mr-2" />
            <span>{event.time}</span>
          </div>
          <div className="flex items-center text-sm text-muted-foreground mb-4">
            <MapPin size={16} className="mr-2" />
            <span>{event.location}</span>
          </div>
          <div className="flex items-center text-sm mb-6">
            <Users size={16} className="mr-2" />
            <span>{event.attendees} attendees</span>
          </div>
          <div className="mt-auto flex space-x-3">
            <Link 
              to={`/events/${event.id}`} 
              className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-md text-sm font-medium flex items-center"
            >
              View Details <ArrowRight size={16} className="ml-2" />
            </Link>
            <a 
              href="#" 
              className="border border-border hover:bg-secondary px-4 py-2 rounded-md text-sm font-medium flex items-center"
            >
              Register <ExternalLink size={16} className="ml-2" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
  