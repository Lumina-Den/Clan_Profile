import React from 'react';
import { motion } from 'framer-motion';
import { CalendarIcon, ClockIcon, MapPinIcon, UserGroupIcon } from '@heroicons/react/24/outline';

const Events = () => {
  const upcomingEvents = [
    {
      title: "Weekly Code Challenge",
      date: "Every Friday",
      time: "7:00 PM - 9:00 PM",
      location: "Discord Voice Channel",
      type: "Competition",
      description: "Solve algorithmic challenges and compete with fellow clan members.",
      participants: "15-20",
      difficulty: "All Levels"
    },
    {
      title: "React Workshop Series",
      date: "Nov 15, 2024",
      time: "2:00 PM - 5:00 PM",
      location: "Tech Hub Room 301",
      type: "Workshop",
      description: "Deep dive into advanced React patterns and best practices.",
      participants: "25",
      difficulty: "Intermediate"
    },
    {
      title: "Hackathon: AI for Good",
      date: "Dec 2-3, 2024",
      time: "48 Hours",
      location: "Innovation Center",
      type: "Hackathon",
      description: "Build AI solutions that make a positive impact on society.",
      participants: "50+",
      difficulty: "All Levels"
    },
    {
      title: "System Design Masterclass",
      date: "Nov 22, 2024",
      time: "1:00 PM - 4:00 PM",
      location: "Virtual + In-Person",
      type: "Workshop",
      description: "Learn to design scalable systems from industry experts.",
      participants: "30",
      difficulty: "Advanced"
    },
    {
      title: "Open Source Contribution Day",
      date: "Nov 30, 2024",
      time: "10:00 AM - 6:00 PM",
      location: "LUMINA HQ",
      type: "Community",
      description: "Contribute to major open source projects as a team.",
      participants: "20",
      difficulty: "All Levels"
    },
    {
      title: "Mobile Development Sprint",
      date: "Dec 8, 2024",
      time: "9:00 AM - 5:00 PM",
      location: "Tech Campus",
      type: "Workshop",
      description: "Build cross-platform mobile apps with React Native.",
      participants: "18",
      difficulty: "Intermediate"
    }
  ];

  const pastEvents = [
    {
      title: "LUMINA Coding Bootcamp",
      date: "Oct 2024",
      participants: 45,
      description: "Intensive 3-day coding bootcamp covering full-stack development.",
      highlights: ["5 projects built", "100% completion rate", "3 job offers"]
    },
    {
      title: "Algorithm Mastery Workshop",
      date: "Sep 2024",
      participants: 32,
      description: "Advanced data structures and algorithm optimization techniques.",
      highlights: ["15 algorithms covered", "Live coding sessions", "Performance improvements"]
    },
    {
      title: "Open Source Contribution Drive",
      date: "Aug 2024",
      participants: 28,
      description: "Collaborative effort to contribute to major open source projects.",
      highlights: ["50+ PRs merged", "10 projects contributed", "Community recognition"]
    },
    {
      title: "Summer Hackathon 2024",
      date: "Jul 2024",
      participants: 60,
      description: "48-hour hackathon focused on sustainable technology solutions.",
      highlights: ["12 teams", "3 winning projects", "$5000 in prizes"]
    }
  ];

  const getEventTypeColor = (type) => {
    switch (type) {
      case 'Competition': return 'border-neon-blue text-neon-blue bg-neon-blue/10';
      case 'Workshop': return 'border-neon-green text-neon-green bg-neon-green/10';
      case 'Hackathon': return 'border-hot-pink text-hot-pink bg-hot-pink/10';
      case 'Community': return 'border-purple-400 text-purple-400 bg-purple-400/10';
      default: return 'border-gray-400 text-gray-400 bg-gray-400/10';
    }
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Beginner': return 'text-neon-green';
      case 'Intermediate': return 'text-neon-blue';
      case 'Advanced': return 'text-hot-pink';
      case 'All Levels': return 'text-purple-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-cyber-gray to-dark-charcoal pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          Events & Workshops
        </motion.h1>

        {/* Upcoming Events */}
        <div className="mb-20">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl font-cyber font-bold text-neon-blue mb-12 text-center"
          >
            Upcoming Events
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-cyber p-6 rounded-xl hover:border-neon-blue/60 transition-all duration-300 group"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-cyber font-bold text-white group-hover:text-neon-blue transition-colors duration-300">
                    {event.title}
                  </h3>
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
                  <div className="flex items-center text-gray-300">
                    <UserGroupIcon className="w-5 h-5 mr-2 text-neon-blue" />
                    <span>{event.participants} participants</span>
                  </div>
                </div>

                <div className="mb-4">
                  <span className={`text-sm font-semibold ${getDifficultyColor(event.difficulty)}`}>
                    {event.difficulty}
                  </span>
                </div>
                
                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  {event.description}
                </p>
                
                <button className="w-full py-3 border border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-dark-charcoal transition-all duration-300 rounded font-semibold">
                  Register Now
                </button>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Past Events */}
        <div>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-4xl font-cyber font-bold text-hot-pink mb-12 text-center"
          >
            Past Events Highlights
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {pastEvents.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="card-cyber p-8 rounded-xl border-hot-pink/30 hover:border-hot-pink/60 transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-cyber font-bold text-hot-pink mb-2">{event.title}</h3>
                    <p className="text-gray-400 text-sm">{event.date}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-cyber font-bold text-neon-green">{event.participants}</div>
                    <div className="text-xs text-gray-400">Participants</div>
                  </div>
                </div>
                
                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  {event.description}
                </p>

                <div>
                  <h4 className="text-sm font-semibold text-neon-blue mb-3">Event Highlights:</h4>
                  <ul className="space-y-2">
                    {event.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-sm text-gray-300 flex items-center">
                        <span className="w-2 h-2 bg-neon-green rounded-full mr-3"></span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Event Calendar CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-20 card-cyber p-12 rounded-xl border-neon-green/30"
        >
          <h3 className="text-3xl font-cyber font-bold text-neon-green mb-4">
            Never Miss an Event
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Subscribe to our calendar and get notified about upcoming workshops, competitions, and community events.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-neon px-8 py-4 text-lg font-semibold">
              Subscribe to Calendar
            </button>
            <button className="px-8 py-4 text-lg font-semibold border-2 border-hot-pink text-hot-pink hover:bg-hot-pink hover:text-dark-charcoal transition-all duration-300">
              Join Discord
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Events;