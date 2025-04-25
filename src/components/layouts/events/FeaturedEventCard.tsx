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
      className="overflow-hidden transition-all bg-transparent"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
        <div className="min-h-[70vh]">
          <img src={event.image} alt={event.title} className="w-full h-full object-cover rounded-2xl" />
        </div>
        <div className="p-6 flex flex-col bg-transparent">
          <div className="mb-4">
            <span className="bg-green-700 text-white text-xs font-medium px-2 py-1 rounded-full">{event.type}</span>
          </div>
          <h2 className="text-2xl font-bold mb-3">{event.title}</h2>
          <p className="text-gray-700 mb-6">{event.description}</p>
          <div className="flex items-center text-sm text-gray-500 mb-2">
            <Calendar size={16} className="mr-2" />
            <span>{event.date}</span>
          </div>
          <div className="flex items-center text-sm text-gray-500 mb-2">
            <Clock size={16} className="mr-2" />
            <span>{event.time}</span>
          </div>
          <div className="flex items-center text-sm text-gray-500 mb-4">
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
              className="bg-white hover:scale-95 ease-in-out duration-300 transition-all border text-black px-4 py-2 rounded-md text-sm font-medium flex items-center"
            >
              View Details <ArrowRight size={16} className="ml-2" />
            </Link>
            <a 
              href="#" 
              className="border border-border hover:bg-gray-800 text-white bg-black px-4 py-2 rounded-md text-sm font-medium flex items-center"
            >
              Register <ExternalLink size={16} className="ml-2" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
  