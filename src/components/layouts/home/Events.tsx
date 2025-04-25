import { Calendar, MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState, useEffect } from 'react';
import { Skeleton } from "../Skeleton";

// Featured event data
const featuredEvent = {
  id: 3,
  title: "Annual Nairobi AI Conference",
  description:
    "The biggest AI event in East Africa, featuring keynotes, workshops, and networking opportunities with industry leaders.",
  date: "April 5-7, 2025",
  time: "8:00 AM - 6:00 PM",
  location: "KICC, Nairobi",
  type: "Conference",
  attendees: 500,
  image:
    "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80",
};

const Events = () => {
  const [loading, setLoading] = useState(true);
  const [eventData, setEventData] = useState<typeof featuredEvent | null>(null);

  useEffect(() => {
    // Simulate API call to fetch event data
    const fetchData = async () => {
      try {
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        // Set the data
        setEventData(featuredEvent);
      } catch (error) {
        console.error('Error fetching event data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  return (
    <section className="flex flex-col py-16 px-6 md:px-20 my-8 bg-[#f8f9fa]">
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 text-gray-900 border rounded-2xl p-4 tracking-wide inline-block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            events
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl font-light text-gray-700 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Connect with the Nairobi AI community through our curated workshops,
            conferences, and meetups.
          </motion.p>
        </div>

        {/* Featured Event Card */}
        {loading ? (
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-8">
            {/* Loading skeleton for image */}
            <div className="lg:col-span-3 h-64 lg:h-[400px] overflow-hidden rounded-2xl">
              <Skeleton height="100%" width="100%" />
            </div>
            
            {/* Loading skeleton for content */}
            <div className="lg:col-span-2 flex flex-col justify-between p-6 space-y-4">
              <div>
                <Skeleton variant="text" width="30%" className="mb-4" />
                <Skeleton variant="text" width="80%" height="32px" className="mb-3" />
                <Skeleton variant="text" width="100%" height="80px" className="mb-6" />
                
                <div className="grid grid-cols-1 gap-4 mb-6">
                  <Skeleton variant="text" width="60%" />
                  <Skeleton variant="text" width="70%" />
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-4 pt-4 border-t border-gray-100">
                <Skeleton variant="text" width="40%" />
                <Skeleton variant="rectangular" width="120px" height="40px" className="rounded-full" />
              </div>
            </div>
          </div>
        ) : (
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-8 bg-transparent"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Event Image - Takes up 2 columns on large screens */}
            <div className="lg:col-span-3 h-64 lg:h-auto overflow-hidden rounded-2xl">
              <img
                src={eventData?.image || featuredEvent.image}
                alt={eventData?.title || featuredEvent.title}
                className="w-full h-full object-cover transition-transform duration-500"
              />
            </div>

            {/* Event Details - Takes up 3 columns on large screens */}
            <div className="lg:col-span-2 flex flex-col justify-between p-6 ">
              <div>
                <div className="inline-block bg-green-900/20 text-green-700 px-4 py-1 rounded-full text-sm font-medium mb-4">
                  {eventData?.type || featuredEvent.type}
                </div>

                <h3 className="text-2xl md:text-3xl font-bold mb-3 text-gray-900">
                  {eventData?.title || featuredEvent.title}
                </h3>

                <p className="text-gray-700 mb-6">{eventData?.description || featuredEvent.description}</p>

                <div className="grid grid-cols-1 gap-4 mb-6">
                  <div className="flex items-center">
                    <Calendar className="w-5 h-5 mr-2 text-red-500" />
                    <span>{eventData?.date || featuredEvent.date}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 mr-2 text-red-500" />
                    <span>{eventData?.location || featuredEvent.location}</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-4 pt-4 border-t border-gray-100">
                <Link
                  to={`/events/${eventData?.id || featuredEvent.id}`}
                  className="inline-flex items-center text-primary font-medium hover:underline"
                >
                  View Event Details
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>

                <Link
                  to="/events"
                  className="inline-flex items-center justify-center bg-black text-white font-medium py-2 px-6 rounded-full hover:bg-primary/90 transition-colors duration-200"
                >
                  Register Now
                </Link>
              </div>
            </div>
          </motion.div>
        )}

        {/* CTA Button */}
        <motion.div
          className="text-center mt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Link
            to="/events"
            className="inline-flex items-center border border-black text-black font-semibold py-2 px-6 rounded-full text-lg shadow hover:bg-gray-100 transition-all duration-200 hover:scale-105"
          >
            Explore More
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Events;
