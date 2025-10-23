import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { XMarkIcon } from '@heroicons/react/24/outline';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryItems = [
    {
      id: 1,
      title: "Hackathon Victory",
      description: "Team LUMINA celebrating our first place win at TechCrunch Disrupt",
      category: "Events",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&h=300&fit=crop"
    },
    {
      id: 2,
      title: "Code Review Session",
      description: "Weekly code review and mentorship session in progress",
      category: "Workshops",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=500&h=300&fit=crop"
    },
    {
      id: 3,
      title: "Algorithm Workshop",
      description: "Deep dive into advanced data structures and algorithms",
      category: "Workshops",
      image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=500&h=300&fit=crop"
    },
    {
      id: 4,
      title: "Team Building",
      description: "Annual team retreat and planning session",
      category: "Events",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=500&h=300&fit=crop"
    },
    {
      id: 5,
      title: "Open Source Contribution",
      description: "Contributing to major open source projects together",
      category: "Projects",
      image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=500&h=300&fit=crop"
    },
    {
      id: 6,
      title: "Coding Competition",
      description: "Intense coding competition with prizes and recognition",
      category: "Events",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=500&h=300&fit=crop"
    }
  ];

  const categories = ["All", "Events", "Workshops", "Projects"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = activeCategory === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-dark-charcoal to-cyber-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          Gallery
        </motion.h2>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-12"
        >
          <div className="flex space-x-4 bg-cyber-gray p-2 rounded-full border border-neon-blue/30">
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

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => setSelectedImage(item)}
            >
              <div className="relative overflow-hidden rounded-xl card-cyber">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-charcoal/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-lg font-cyber font-bold text-neon-blue mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-300">
                      {item.description}
                    </p>
                    <span className="inline-block mt-2 px-3 py-1 bg-hot-pink/20 border border-hot-pink rounded-full text-xs text-hot-pink">
                      {item.category}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-4xl max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white hover:text-neon-blue transition-colors duration-300 z-10"
              >
                <XMarkIcon className="w-8 h-8" />
              </button>
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-auto rounded-xl"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-dark-charcoal to-transparent p-6 rounded-b-xl">
                <h3 className="text-2xl font-cyber font-bold text-neon-blue mb-2">
                  {selectedImage.title}
                </h3>
                <p className="text-gray-300">
                  {selectedImage.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Gallery;