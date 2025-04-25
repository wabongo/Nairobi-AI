import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, MapPin, Users, ArrowLeft, Share2, ExternalLink, MessageCircle, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Skeleton } from '@/components/layouts/Skeleton';

// Import the event data (you can later replace this with an API call)
import { EVENTS_DATA } from './EventsPage';

// Additional speaker data for the event details page
const SPEAKERS = [
  {
    id: 1,
    name: 'Dr. Sarah Mwangi',
    role: 'AI Research Lead, Microsoft Africa',
    bio: 'Dr. Mwangi leads AI research initiatives across Africa, focusing on applications in healthcare and agriculture.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=256&q=80'
  },
  {
    id: 2,
    name: 'Prof. James Omondi',
    role: 'Professor of Computer Science, University of Nairobi',
    bio: 'An expert in machine learning and computational linguistics with over 15 years of research experience.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=256&q=80'
  },
  {
    id: 3,
    name: 'Amina Ibrahim',
    role: 'Founder & CEO, AI Solutions Africa',
    bio: 'Pioneer in developing AI solutions for local businesses across East Africa.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=256&q=80'
  }
];

// Sample attendees for the event
const ATTENDEES = Array(12).fill(0).map((_, i) => ({
  id: i + 1,
  name: `Attendee ${i + 1}`,
  image: `https://randomuser.me/api/portraits/${i % 2 === 0 ? 'women' : 'men'}/${i + 1}.jpg`
}));

// Sample agenda for the event
const AGENDA = [
  {
    time: '08:00 - 09:00',
    title: 'Registration & Breakfast',
    description: 'Check-in and enjoy a continental breakfast while networking with other attendees.'
  },
  {
    time: '09:00 - 10:30',
    title: 'Keynote: The Future of AI in Africa',
    description: 'Dr. Sarah Mwangi discusses the evolving landscape of AI in Africa and opportunities for innovation.',
    speaker: 'Dr. Sarah Mwangi'
  },
  {
    time: '10:45 - 12:00',
    title: 'Panel: Ethical AI Development',
    description: 'Industry experts discuss the ethical considerations in AI development and deployment in African contexts.',
    speaker: 'Prof. James Omondi, Amina Ibrahim'
  },
  {
    time: '12:00 - 13:30',
    title: 'Lunch Break & Networking',
    description: 'Enjoy lunch and connect with speakers and fellow attendees.'
  },
  {
    time: '13:30 - 15:00',
    title: 'Workshop: Hands-on with LLMs',
    description: 'Interactive session on working with Large Language Models for local applications.',
    speaker: 'Prof. James Omondi'
  },
  {
    time: '15:15 - 16:30',
    title: 'Startup Showcase',
    description: 'Local AI startups present their innovative solutions and business models.',
    speaker: 'Amina Ibrahim (Moderator)'
  },
  {
    time: '16:30 - 17:00',
    title: 'Closing Remarks & Next Steps',
    description: 'Summary of key takeaways and information about upcoming community events.'
  }
];

const EventDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const [event, setEvent] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    // Simulate fetching event data
    const eventId = parseInt(id || '0');
    const foundEvent = EVENTS_DATA.find((e: any) => e.id === eventId);
    
    // Add a small delay to simulate loading
    setTimeout(() => {
      setEvent(foundEvent);
      setLoading(false);
    }, 500);
  }, [id]);

  if (loading) {
    return (
      <div className="responsive-container mt-24 flex flex-col space-y-8 min-h-[80vh] px-4">
        {/* Back button skeleton */}
        <div>
          <Skeleton variant="text" width="120px" />
        </div>
        
        {/* Hero section skeleton */}
        <div className="relative rounded-2xl overflow-hidden">
          <div className="h-80 md:h-96 w-full">
            <Skeleton height="100%" width="100%" />
            
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
              <Skeleton variant="text" width="120px" className="mb-4" />
              <Skeleton variant="text" width="70%" height="40px" className="mb-4" />
              
              <div className="flex flex-wrap gap-6 mt-4">
                <Skeleton variant="text" width="120px" />
                <Skeleton variant="text" width="120px" />
                <Skeleton variant="text" width="120px" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Action buttons skeleton */}
        <div className="flex flex-wrap gap-4 justify-between items-center">
          <div className="flex gap-3">
            <Skeleton variant="rectangular" width="150px" height="48px" className="rounded-full" />
            <Skeleton variant="rectangular" width="120px" height="48px" className="rounded-full" />
          </div>
          
          <Skeleton variant="text" width="100px" />
        </div>
        
        {/* Tabs skeleton */}
        <div className="border-b border-gray-200 mb-8">
          <div className="flex space-x-8">
            <Skeleton variant="text" width="100px" height="30px" />
            <Skeleton variant="text" width="100px" height="30px" />
            <Skeleton variant="text" width="100px" height="30px" />
          </div>
        </div>
        
        {/* Content skeleton */}
        <div className="space-y-6">
          <Skeleton variant="text" width="100%" height="100px" />
          <Skeleton variant="text" width="100%" height="200px" />
        </div>
      </div>
    );
  }

  if (!event) {
    return (
      <div className="responsive-container mt-24 text-center min-h-[50vh] flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-4">Event Not Found</h1>
        <p className="text-gray-600 mb-8">The event you're looking for doesn't exist or has been removed.</p>
        <Link 
          to="/events" 
          className="inline-flex items-center bg-primary text-white px-6 py-3 rounded-full hover:bg-primary/90 transition-all duration-200"
        >
          <ArrowLeft className="mr-2 h-5 w-5" />
          Back to Events
        </Link>
      </div>
    );
  }

  return (
    <main className="responsive-container mt-16">
      <div className="space-y-8 mt-20 mb-20">
        {/* Back Button */}
        <div>
          <Link 
            to="/events" 
            className="inline-flex items-center text-gray-600 hover:text-primary transition-colors"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back to Events
          </Link>
        </div>

        {/* Hero Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative rounded-2xl overflow-hidden"
        >
          <div className="h-80 md:h-96 w-full relative">
            <img 
              src={event.image} 
              alt={event.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 text-white">
              <div className="inline-block bg-primary px-4 py-1.5 rounded-full text-sm font-medium mb-4 shadow-lg">
                {event.type}
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{event.title}</h1>
              
              <div className="flex flex-wrap gap-6 mt-4">
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2 text-primary-light" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-primary-light" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-2 text-primary-light" />
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-5 h-5 mr-2 text-primary-light" />
                  <span>{event.attendees} attendees</span>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 justify-between items-center">
          <div className="flex gap-3">
            <button className="bg-primary text-white px-6 py-3 rounded-full hover:bg-primary/90 transition-colors shadow-sm hover:shadow font-medium">
              Register Now
            </button>
            <button className="bg-white border border-gray-200 text-gray-700 px-6 py-3 rounded-full hover:bg-gray-50 transition-colors shadow-sm hover:shadow flex items-center">
              <Share2 className="w-5 h-5 mr-2" />
              Share
            </button>
          </div>
          
          <div className="flex items-center text-gray-600">
            <a href="#" className="flex items-center hover:text-primary transition-colors">
              <ExternalLink className="w-5 h-5 mr-1" />
              Website
            </a>
          </div>
        </div>

        {/* Tabs Navigation */}
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8">
            <button
              onClick={() => setActiveTab('overview')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'overview'
                  ? 'border-primary text-primary'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('agenda')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'agenda'
                  ? 'border-primary text-primary'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Agenda
            </button>
            <button
              onClick={() => setActiveTab('speakers')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'speakers'
                  ? 'border-primary text-primary'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Speakers
            </button>
            <button
              onClick={() => setActiveTab('attendees')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'attendees'
                  ? 'border-primary text-primary'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Attendees
            </button>
            <button
              onClick={() => setActiveTab('discussion')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'discussion'
                  ? 'border-primary text-primary'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Discussion
            </button>
          </nav>
        </div>

        {/* Tab Content */}
        <div className="mt-8">
          {activeTab === 'overview' && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-bold mb-4">About This Event</h2>
                <div className="prose max-w-none text-gray-700">
                  <p className="mb-4">
                    {event.description}
                  </p>
                  <p className="mb-4">
                    Join us for the biggest AI event in East Africa, featuring keynotes from industry leaders, 
                    interactive workshops, and unparalleled networking opportunities. This three-day conference 
                    will bring together researchers, practitioners, and enthusiasts from across the continent to 
                    explore the latest advances in artificial intelligence and their applications in African contexts.
                  </p>
                  <p>
                    Whether you're a seasoned AI professional or just beginning your journey in the field, 
                    the Annual Nairobi AI Conference offers valuable insights, hands-on learning experiences, 
                    and connections that will help you advance your knowledge and career.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">What You'll Learn</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Latest advancements in large language models and their applications",
                    "Ethical considerations in AI development for African contexts",
                    "Practical techniques for building and deploying AI solutions",
                    "Strategies for addressing data challenges in emerging markets",
                    "Opportunities for AI entrepreneurship in East Africa",
                    "Best practices for responsible AI implementation"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                        <svg className="h-4 w-4 text-primary" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="ml-3 text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Event Details</h2>
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                  <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                    <div>
                      <dt className="text-sm font-medium text-gray-500">Date</dt>
                      <dd className="mt-1 text-gray-900">{event.date}</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-gray-500">Time</dt>
                      <dd className="mt-1 text-gray-900">{event.time}</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-gray-500">Location</dt>
                      <dd className="mt-1 text-gray-900">{event.location}</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-gray-500">Event Type</dt>
                      <dd className="mt-1 text-gray-900">{event.type}</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-gray-500">Organizer</dt>
                      <dd className="mt-1 text-gray-900">Nairobi AI Community</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-gray-500">Language</dt>
                      <dd className="mt-1 text-gray-900">English</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'agenda' && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-2xl font-bold mb-6">Event Agenda</h2>
              <div className="space-y-6">
                {AGENDA.map((item, index) => (
                  <div 
                    key={index}
                    className="relative pl-8 pb-8 border-l border-gray-200 last:border-0 last:pb-0"
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-0 top-0 -translate-x-1/2 h-4 w-4 rounded-full bg-primary border-4 border-white"></div>
                    
                    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm ml-4">
                      <div className="text-sm font-medium text-primary mb-2">{item.time}</div>
                      <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                      <p className="text-gray-600 mb-2">{item.description}</p>
                      {item.speaker && (
                        <div className="text-sm text-gray-500">
                          <span className="font-medium">Speaker:</span> {item.speaker}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'speakers' && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-2xl font-bold mb-6">Event Speakers</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {SPEAKERS.map(speaker => (
                  <div key={speaker.id} className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="aspect-w-16 aspect-h-9 bg-gray-100">
                      <img 
                        src={speaker.image} 
                        alt={speaker.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-1">{speaker.name}</h3>
                      <p className="text-primary text-sm font-medium mb-3">{speaker.role}</p>
                      <p className="text-gray-600 text-sm">{speaker.bio}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'attendees' && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Attendees ({ATTENDEES.length})</h2>
                <p className="text-gray-500">Showing {ATTENDEES.length} of {event.attendees} attendees</p>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {ATTENDEES.map(attendee => (
                  <div key={attendee.id} className="text-center">
                    <div className="h-16 w-16 md:h-20 md:w-20 mx-auto rounded-full overflow-hidden border-2 border-white shadow-md">
                      <img 
                        src={attendee.image} 
                        alt={attendee.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="mt-2 text-sm font-medium truncate">{attendee.name}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 text-center">
                <button className="text-primary font-medium hover:underline">
                  View All Attendees
                </button>
              </div>
            </motion.div>
          )}

          {activeTab === 'discussion' && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-bold mb-6">Discussion</h2>
              
              <div className="bg-white rounded-xl border border-gray-100 p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="h-10 w-10 rounded-full bg-gray-200"></div>
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="relative">
                      <textarea
                        rows={3}
                        className="block w-full rounded-lg border border-gray-200 py-3 px-4 shadow-sm focus:border-primary focus:ring-primary"
                        placeholder="Ask a question or start a discussion..."
                      />
                    </div>
                    <div className="mt-3 flex justify-between">
                      <div className="flex items-center space-x-5">
                        <button type="button" className="text-gray-500 hover:text-gray-900">
                          <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M8 4a3 3 0 00-3 3v4a3 3 0 003 3h4a3 3 0 003-3V7a3 3 0 00-3-3H8z" clipRule="evenodd" />
                            <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 01-1.581.814l-4.419-4.419A1 1 0 0110 15h-4a2 2 0 01-2-2V4z" clipRule="evenodd" />
                          </svg>
                        </button>
                        <button type="button" className="text-gray-500 hover:text-gray-900">
                          <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z" clipRule="evenodd" />
                            <path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z" />
                          </svg>
                        </button>
                      </div>
                      <button
                        type="submit"
                        className="inline-flex items-center rounded-full border border-transparent bg-primary px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                      >
                        Post
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="text-center py-8">
                <MessageCircle className="h-12 w-12 mx-auto text-gray-300 mb-4" />
                <h3 className="text-lg font-medium text-gray-900">No discussions yet</h3>
                <p className="mt-1 text-sm text-gray-500">Be the first to start a discussion about this event.</p>
              </div>
            </motion.div>
          )}
        </div>

        {/* Related Events */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-6">You Might Also Like</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {EVENTS_DATA.filter((e: any) => e.id !== event.id).slice(0, 3).map((relatedEvent: any) => (
              <div key={relatedEvent.id} className="bg-white border border-gray-100 rounded-xl overflow-hidden transition-all hover:shadow-md flex flex-col h-full">
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={relatedEvent.image} 
                    alt={relatedEvent.title}
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                    {relatedEvent.type}
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-lg font-bold mb-2">{relatedEvent.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{relatedEvent.description}</p>
                  
                  <div className="mt-auto">
                    <Link 
                      to={`/events/${relatedEvent.id}`}
                      className="inline-flex items-center text-primary font-medium hover:underline"
                    >
                      View Details
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default EventDetailsPage;
