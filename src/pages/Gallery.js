import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { XMarkIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const galleryItems = [
    {
      id: 1,
      title: "Hackathon Victory Celebration",
      description: "Team LUMINA celebrating our first place win at TechCrunch Disrupt 2024",
      category: "Events",
      date: "Oct 2024",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
    },
    {
      id: 2,
      title: "Weekly Code Review Session",
      description: "Intensive code review and mentorship session with senior developers",
      category: "Workshops",
      date: "Oct 2024",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&h=400&fit=crop"
    },
    {
      id: 3,
      title: "Advanced Algorithm Workshop",
      description: "Deep dive into complex data structures and optimization techniques",
      category: "Workshops",
      date: "Sep 2024",
      image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=600&h=400&fit=crop"
    },
    {
      id: 4,
      title: "Annual Team Building Retreat",
      description: "Strategic planning and team bonding at our annual retreat",
      category: "Events",
      date: "Sep 2024",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=400&fit=crop"
    },
    {
      id: 5,
      title: "Open Source Contribution Sprint",
      description: "Collaborative effort contributing to major open source projects",
      category: "Projects",
      date: "Aug 2024",
      image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=600&h=400&fit=crop"
    },
    {
      id: 6,
      title: "Competitive Programming Championship",
      description: "Intense coding competition with participants from top universities",
      category: "Events",
      date: "Aug 2024",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=400&fit=crop"
    },
    {
      id: 7,
      title: "React Native Mobile Workshop",
      description: "Hands-on workshop building cross-platform mobile applications",
      category: "Workshops",
      date: "Jul 2024",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop"
    },
    {
      id: 8,
      title: "AI/ML Project Showcase",
      description: "Presenting innovative machine learning solutions and demos",
      category: "Projects",
      date: "Jul 2024",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop"
    },
    {
      id: 9,
      title: "Summer Coding Bootcamp",
      description: "Intensive 3-week bootcamp for new members and skill development",
      category: "Workshops",
      date: "Jun 2024",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop"
    },
    {
      id: 10,
      title: "Industry Networking Event",
      description: "Connecting with tech industry leaders and potential mentors",
      category: "Events",
      date: "Jun 2024",
      image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=600&h=400&fit=crop"
    },
    {
      id: 11,
      title: "Web Development Project Demo",
      description: "Showcasing our latest full-stack web applications and innovations",
      category: "Projects",
      date: "May 2024",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop"
    },
    {
      id: 12,
      title: "Cybersecurity Workshop Series",
      description: "Learning ethical hacking and security best practices",
      category: "Workshops",
      date: "May 2024",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop"
    }
  ];

  const categories = ["All", "Events", "Workshops", "Projects"];

  const filteredItems = galleryItems.filter(item => {
    const matchesCategory = activeCategory === "All" || item.category === activeCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-dark-charcoal to-cyber-gray pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          Gallery
        </motion.h1>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-md mx-auto mb-8"
        >
          <div className="relative">
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search gallery..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-cyber-gray border border-neon-blue/30 rounded-lg text-white placeholder-gray-400 focus:border-neon-blue focus:outline-none transition-colors duration-300"
            />
          </div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center mb-12"
        >
          <div className="flex flex-wrap justify-center gap-4 bg-cyber-gray p-2 rounded-full border border-neon-blue/30">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-neon-blue text-dark-charcoal'
                    : 'text-neon-blue hover:bg-neon-blue/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Results Count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mb-8"
        >
          <p className="text-gray-400">
            Showing {filteredItems.length} of {galleryItems.length} images
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-20">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="group cursor-pointer"
              onClick={() => setSelectedImage(item)}
            >
              <div className="relative overflow-hidden rounded-xl card-cyber">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-charcoal/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-lg font-cyber font-bold text-neon-blue mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-300 mb-2 overflow-hidden" style={{
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical'
                    }}>
                      {item.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="inline-block px-3 py-1 bg-hot-pink/20 border border-hot-pink rounded-full text-xs text-hot-pink">
                        {item.category}
                      </span>
                      <span className="text-xs text-gray-400">
                        {item.date}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* No Results */}
        {filteredItems.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center py-20"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-cyber font-bold text-gray-400 mb-2">No images found</h3>
            <p className="text-gray-500">Try adjusting your search or filter criteria</p>
          </motion.div>
        )}

        {/* Modal */}
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-5xl max-h-full bg-cyber-gray rounded-xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white hover:text-neon-blue transition-colors duration-300 z-10 bg-dark-charcoal/80 rounded-full p-2"
              >
                <XMarkIcon className="w-6 h-6" />
              </button>
              
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-2/3">
                  <img
                    src={selectedImage.image}
                    alt={selectedImage.title}
                    className="w-full h-auto max-h-[70vh] object-cover"
                  />
                </div>
                
                <div className="lg:w-1/3 p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-hot-pink/20 border border-hot-pink rounded-full text-sm text-hot-pink">
                      {selectedImage.category}
                    </span>
                    <span className="text-sm text-gray-400">
                      {selectedImage.date}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-cyber font-bold text-neon-blue mb-4">
                    {selectedImage.title}
                  </h3>
                  
                  <p className="text-gray-300 leading-relaxed">
                    {selectedImage.description}
                  </p>
                  
                  <div className="mt-8 pt-6 border-t border-neon-blue/20">
                    <button
                      onClick={() => setSelectedImage(null)}
                      className="w-full py-3 border border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-dark-charcoal transition-all duration-300 rounded font-semibold"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Upload CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center card-cyber p-12 rounded-xl border-neon-green/30"
        >
          <h3 className="text-3xl font-cyber font-bold text-neon-green mb-4">
            Share Your Moments
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Have photos from our events? Share them with the community and help us build our visual story.
          </p>
          <button className="btn-neon px-8 py-4 text-lg font-semibold">
            Submit Photos
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Gallery;