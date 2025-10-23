import React from 'react';
import { motion } from 'framer-motion';
import { CalendarIcon, ClockIcon, MapPinIcon } from '@heroicons/react/24/outline';

const Events = () => {
  const upcomingEvents = [
    {
      title: "Weekly Code Challenge",
      date: "Every Friday",
      time: "7:00 PM - 9:00 PM",
      location: "Discord Voice Channel",
      type: "Competition",
      description: "Solve algorithmic challenges and compete with fellow clan members."
    },
    {
      title: "React Workshop Series",
      date: "Nov 15, 2024",
      time: "2:00 PM - 5:00 PM",
      location: "Tech Hub Room 301",
      type: "Workshop",
      description: "Deep dive into advanced React patterns and best practices."
    },
    {
      title: "Hackathon: AI for Good",
      date: "Dec 2-3, 2024",
      time: "48 Hours",
      location: "Innovation Center",
      type: "Hackathon",
      description: "Build AI solutions that make a positive impact on society."
    }
  ];

  const pastEvents = [
    {
      title: "LUMINA Coding Bootcamp",
      date: "Oct 2024",
      participants: 45,
      description: "Intensive 3-day coding bootcamp covering full-stack development."
    },
    {
      title: "Algorithm Mastery Workshop",
      date: "Sep 2024",
      participants: 32,
      description: "Advanced data structures and algorithm optimization techniques."
    },
    {
      title: "Open Source Contribution Drive",
      date: "Aug 2024",
      participants: 28,
      description: "Collaborative effort to contribute to major open source projects."
    }
  ];

  const getEventTypeColor = (type) => {
    switch (type) {
      case 'Competition': return 'border-neon-blue text-neon-blue';
      case 'Workshop': return 'border-neon-green text-neon-green';
      case 'Hackathon': return 'border-hot-pink text-hot-pink';
      default: return 'border-gray-400 text-gray-400';
    }
  };

  return (
    <section id="events" className="py-20 bg-gradient-to-b from-cyber-gray to-dark-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          Events & Workshops
        </motion.h2>

        {/* Upcoming Events */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-cyber font-bold text-neon-blue mb-8 text-center"
          >
            Upcoming Events
          </motion.h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="card-cyber p-6 rounded-xl hover:border-neon-blue/60 transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-xl font-cyber font-bold text-white">{event.title}</h4>
                  <span className={`px-3 py-1 border rounded-full text-xs font-semibold ${getEventTypeColor(event.type)}`}>
                    {event.type}
                  </span>
                </div>
                
                <div className="space-y-3 mb-4">
                  <div className="flex items-center text-gray-300">
                    <CalendarIcon className="w-5 h-5 mr-2 text-neon-blue" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <ClockIcon className="w-5 h-5 mr-2 text-neon-blue" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <MapPinIcon className="w-5 h-5 mr-2 text-neon-blue" />
                    <span>{event.location}</span>
                  </div>
                </div>
                
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {event.description}
                </p>
                
                <button className="w-full py-2 border border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-dark-charcoal transition-all duration-300 rounded font-semibold">
                  Register Now
                </button>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Past Events */}
        <div>
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-cyber font-bold text-hot-pink mb-8 text-center"
          >
            Past Events Highlights
          </motion.h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {pastEvents.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="card-cyber p-6 rounded-xl border-hot-pink/30"
              >
                <h4 className="text-lg font-cyber font-bold text-hot-pink mb-2">{event.title}</h4>
                <p className="text-gray-400 text-sm mb-2">{event.date}</p>
                <p className="text-neon-green text-sm font-semibold mb-3">
                  {event.participants} Participants
                </p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {event.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;