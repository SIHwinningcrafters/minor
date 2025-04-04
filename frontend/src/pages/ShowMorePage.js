import React, { useState } from 'react';
import { motion } from 'framer-motion';
import grihaprevesh from "../assets/GreihPravesh.png";
import pp1 from "../assets/pooja pandit1.png";
import pp2 from "../assets/pooja pandit3.png";
import pp3 from "../assets/pooja pandit4.jpg";
import pp4 from "../assets/pooja pandit5.jpg";
import pp5 from "../assets/pooja pandit 6.jpg";
import pp6 from "../assets/pooja pandit 7.jpg";

const ShowMorePage = () => {
  // State for price range slider
  const [priceRange, setPriceRange] = useState([1000, 8000]);

  // Sample pandit data with enhanced information
  const pandits = [
    {
      id: 1,
      name: 'Pandit Ramesh Sharma',
      experience: '12+ years of experience',
      rating: '4.9',
      image: pp1,
      price: 2500,
      specialization: 'Vedic Griha Pravesh',
      description: 'Expert in traditional Vedic housewarming ceremonies with specialization in Vastu alignment. Known for his precise mantra chanting and detailed explanations of rituals.',
      languages: 'Hindi, English, Sanskrit',
      ceremonies: '400+ Griha Pravesh performed'
    },
    {
      id: 2,
      name: 'Pandit Suresh Kumar',
      experience: '15+ years of experience',
      rating: '5.0',
      image: pp2,
      price: 3500,
      specialization: 'Maha Griha Pravesh',
      description: 'Renowned for performing elaborate Griha Pravesh ceremonies with full Vedic protocols. Provides personalized guidance based on family horoscopes.',
      languages: 'Hindi, Sanskrit',
      ceremonies: '500+ pujas performed'
    },
    {
      id: 3,
      name: 'Pandit Anil Verma',
      experience: '18+ years of experience',
      rating: '4.9',
      image: pp3,
      price: 4500,
      specialization: 'Vastu Specialist',
      description: 'Vastu expert with deep knowledge of directional energies. Conducts combined Griha Pravesh and Vastu Shanti pujas for optimal home harmony.',
      languages: 'Hindi, English, Marathi',
      ceremonies: '600+ home blessings'
    },
    {
      id: 4,
      name: 'Pandit Rajesh Singh',
      experience: '20+ years of experience',
      rating: '5.0',
      image: pp4,
      price: 6000,
      specialization: 'Royal Griha Pravesh',
      description: 'Descendant of a traditional priest family specializing in royal-style housewarming ceremonies. Known for creating powerful spiritual vibrations.',
      languages: 'Hindi, English, Sanskrit',
      ceremonies: '800+ pujas performed'
    },
    {
      id: 5,
      name: 'Pandit Mohan Lal',
      experience: '10+ years of experience',
      rating: '4.7',
      image: pp5,
      price: 2000,
      specialization: 'Basic Ceremonies',
      description: 'Specializes in simple yet effective Griha Pravesh pujas for modern homes. Provides clear guidance for first-time homeowners.',
      languages: 'Hindi, English',
      ceremonies: '300+ pujas performed'
    },
    {
      id: 6,
      name: 'Pandit Vijay Kumar',
      experience: '14+ years of experience',
      rating: '4.8',
      image: pp6,
      price: 4000,
      specialization: 'Navagraha Alignment',
      description: 'Expert in Griha Pravesh ceremonies with special focus on Navagraha Shanti. Ensures planetary blessings for the new home.',
      languages: 'Hindi, Tamil, Sanskrit',
      ceremonies: '450+ pujas performed'
    },
  ];

  // Filter pandits based on price range
  const filteredPandits = pandits.filter(
    (pandit) => pandit.price >= priceRange[0] && pandit.price <= priceRange[1]
  );

  // Function to handle "Add to Cart"
  const handleAddToCart = (item) => {
    alert(`Added to cart: ${item.item} (${item.quantity})`);
  };

  // Function to scroll to a section
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="p-6 bg-gradient-to-b from-orange-50 to-amber-100 min-h-screen">
      {/* Top Navigation Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="sticky top-0 bg-white/80 backdrop-blur-md shadow-md z-50"
      >
        <div className="container mx-auto max-w-6xl px-6 py-4 flex justify-center space-x-8">
          <button
            onClick={() => scrollToSection('introduction')}
            className="text-orange-800 hover:text-orange-600 font-medium transition duration-300"
          >
            Introduction
          </button>
          <button
            onClick={() => scrollToSection('pandits')}
            className="text-orange-800 hover:text-orange-600 font-medium transition duration-300"
          >
            Pandits
          </button>
          <button
            onClick={() => scrollToSection('benefits')}
            className="text-orange-800 hover:text-orange-600 font-medium transition duration-300"
          >
            Benefits
          </button>
          <button
            onClick={() => scrollToSection('essential-items')}
            className="text-orange-800 hover:text-orange-600 font-medium transition duration-300"
          >
            Puja Items
          </button>
        </div>
      </motion.div>

      {/* Introduction Section */}
      <motion.div
        id="introduction"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-col md:flex-row gap-8 mb-16 mt-8"
      >
        {/* Left Side: Image */}
        <div className="md:w-1/2">
          <img 
            src={grihaprevesh} 
            alt="Griha Pravesh" 
            className="w-full h-auto rounded-xl shadow-lg object-cover"
          />
        </div>

        {/* Right Side: Description */}
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold text-orange-800 mb-4">
            Griha Pravesh Pooja
          </h2>
          <p className="text-gray-700 mb-6 text-lg">
            Griha Pravesh Pooja is a sacred Hindu ceremony performed when entering a new home for the first time. It is conducted to purify the space, seek blessings from Vastu Purush (the deity of directions), and ensure prosperity, happiness, and protection for the inhabitants.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-xl font-bold text-orange-800 mb-2">Duration</h3>
              <p className="text-gray-700">3-4 hours</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-xl font-bold text-orange-800 mb-2">Price Range</h3>
              <p className="text-gray-700">₹ 1,000 - ₹ 8,000</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-xl font-bold text-orange-800 mb-2">Best Muhurat</h3>
              <p className="text-gray-700">Early morning or late afternoon</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-xl font-bold text-orange-800 mb-2">Importance</h3>
              <p className="text-gray-700">Ensures positive energy flow</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Price Range Slider */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mb-16 bg-white p-6 rounded-xl shadow-lg"
      >
        <h2 className="text-2xl font-bold text-orange-800 mb-6">Filter by Price</h2>
        <div className="px-4">
          <input
            type="range"
            min="1000"
            max="8000"
            value={priceRange[0]}
            onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
            className="w-full h-2 bg-orange-200 rounded-lg appearance-none cursor-pointer"
          />
          <div className="flex justify-between text-gray-700 mt-2">
            <span>₹ {priceRange[0]}</span>
            <span>₹ {priceRange[1]}</span>
          </div>
        </div>
      </motion.div>

      {/* Pandit Profiles */}
      <motion.div
        id="pandits"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mb-16"
      >
        <h2 className="text-3xl font-bold text-orange-800 mb-8 text-center">Available Priests</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPandits.map((pandit) => (
            <motion.div
              key={pandit.id}
              whileHover={{ scale: 1.03 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:shadow-xl"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={pandit.image}
                  alt={pandit.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-xl font-bold text-white">{pandit.name}</h3>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="ml-1 text-white">{pandit.rating} (50+ bookings)</span>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="inline-block bg-orange-100 text-orange-800 text-xs px-3 py-1 rounded-full font-semibold mb-2">
                      {pandit.specialization}
                    </span>
                    <p className="text-gray-600 text-sm">{pandit.experience}</p>
                  </div>
                  <span className="text-xl font-bold text-orange-800">₹{pandit.price}</span>
                </div>
                
                <p className="text-gray-700 text-sm mb-4">
                  {pandit.description}
                </p>
                
                <div className="mb-4">
                  <p className="text-gray-600 text-sm"><span className="font-semibold">Languages:</span> {pandit.languages}</p>
                  <p className="text-gray-600 text-sm"><span className="font-semibold">Ceremonies:</span> {pandit.ceremonies}</p>
                </div>
                
                <div className="flex space-x-3">
                  <button className="flex-1 bg-orange-600 hover:bg-orange-700 text-white py-2 px-4 rounded-lg transition duration-300 text-sm font-medium">
                    Book Now
                  </button>
                  <button className="flex-1 border border-orange-600 text-orange-600 hover:bg-orange-50 py-2 px-4 rounded-lg transition duration-300 text-sm font-medium">
                    View Profile
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Benefits of Griha Pravesh Pooja */}
      <motion.div
        id="benefits"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="mb-16 bg-white rounded-xl shadow-lg p-8"
      >
        <h2 className="text-3xl font-bold text-orange-800 mb-6 text-center">
          Benefits of Griha Pravesh Pooja
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: '🏠',
              title: 'Positive Energy',
              description: 'Brings positive energy and removes negative vibrations from the new home'
            },
            {
              icon: '👨‍👩‍👧‍👦',
              title: 'Family Harmony',
              description: 'Ensures prosperity, happiness, and good health for the family members'
            },
            {
              icon: '🛡️',
              title: 'Protection',
              description: 'Protects the home from evil spirits and negative influences'
            },
            {
              icon: '🧭',
              title: 'Vastu Alignment',
              description: 'Aligns the home with Vastu principles for harmonious living'
            },
            {
              icon: '🌌',
              title: 'Planetary Blessings',
              description: 'Invokes blessings from the nine planets (Navagrahas) for overall well-being'
            },
            {
              icon: '💰',
              title: 'Financial Stability',
              description: 'Ensures financial stability and growth for the household'
            }
          ].map((benefit, index) => (
            <div key={index} className="bg-orange-50 p-6 rounded-lg hover:bg-orange-100 transition duration-300">
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold text-orange-800 mb-2">{benefit.title}</h3>
              <p className="text-gray-700">{benefit.description}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Essential Items Table */}
      <motion.div
        id="essential-items"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="mb-16"
      >
        <h2 className="text-3xl font-bold text-orange-800 mb-8 text-center">
          Essential Puja Items
        </h2>
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-orange-800 text-white">
                <tr>
                  <th className="py-4 px-6 text-left">Item</th>
                  <th className="py-4 px-6 text-left">Quantity</th>
                  <th className="py-4 px-6 text-left">Purpose</th>
                  <th className="py-4 px-6 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {[
                  { 
                    item: 'Kalash (Copper Pot)', 
                    quantity: '1 piece', 
                    purpose: 'Sacred vessel for invoking deities' 
                  },
                  { 
                    item: 'Coconut', 
                    quantity: '5 pieces', 
                    purpose: 'Symbol of completeness and prosperity' 
                  },
                  { 
                    item: 'Mango Leaves', 
                    quantity: '25-30 leaves', 
                    purpose: 'Decoration and purification' 
                  },
                  { 
                    item: 'Red Cloth', 
                    quantity: '1.5 meters', 
                    purpose: 'Covering the kalash and altar' 
                  },
                  { 
                    item: 'Rice', 
                    quantity: '1 kg', 
                    purpose: 'For offerings and rituals' 
                  },
                  { 
                    item: 'Turmeric Powder', 
                    quantity: '100 grams', 
                    purpose: 'Sacred substance for purification' 
                  },
                  { 
                    item: 'Kumkum', 
                    quantity: '50 grams', 
                    purpose: 'Applying tilak and decorations' 
                  },
                  { 
                    item: 'Sandalwood Paste', 
                    quantity: '50 grams', 
                    purpose: 'Sacred offering and tilak' 
                  },
                  { 
                    item: 'Incense Sticks', 
                    quantity: '1 pack', 
                    purpose: 'Creating sacred atmosphere' 
                  },
                  { 
                    item: 'Camphor', 
                    quantity: '50 grams', 
                    purpose: 'For aarti ceremony' 
                  },
                ].map((item, index) => (
                  <tr key={index} className="hover:bg-orange-50 transition duration-200">
                    <td className="py-4 px-6">{item.item}</td>
                    <td className="py-4 px-6">{item.quantity}</td>
                    <td className="py-4 px-6 text-sm text-gray-600">{item.purpose}</td>
                    <td className="py-4 px-6 text-right">
                      <button
                        onClick={() => handleAddToCart(item)}
                        className="bg-orange-600 hover:bg-orange-700 text-white py-1 px-4 rounded-md text-sm transition duration-300"
                      >
                        Add to Cart
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </motion.div>

      {/* Vastu Tips Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.2 }}
        className="mb-16 bg-gradient-to-r from-orange-800 to-amber-800 rounded-xl shadow-lg p-8 text-white"
      >
        <h3 className="text-3xl font-bold mb-6 text-center">Vastu Tips for New Home</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-2xl font-bold mb-4 text-yellow-300">Do's</h4>
            <ul className="space-y-3">
              {[
                'Enter the house first with your right foot',
                'Keep the northeast corner clean and clutter-free',
                'Place the kitchen in the southeast direction',
                'Have the master bedroom in the southwest',
                'Place idols or pictures of deities in the northeast',
                'Use light colors in the northeast direction',
                'Keep the center of the house (Brahmasthan) empty'
              ].map((tip, index) => (
                <li key={index} className="flex items-start">
                  <svg className="w-5 h-5 text-green-300 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  {tip}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-2xl font-bold mb-4 text-yellow-300">Don'ts</h4>
            <ul className="space-y-3">
              {[
                'Avoid placing mirrors opposite the bed',
                'Don\'t keep broken items in the house',
                'Avoid having toilets in the northeast corner',
                'Don\'t place heavy furniture in the center',
                'Avoid dark colors in the northeast direction',
                'Don\'t sleep with your head to the north',
                'Avoid keeping thorny plants inside'
              ].map((tip, index) => (
                <li key={index} className="flex items-start">
                  <svg className="w-5 h-5 text-red-300 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                  {tip}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>

      {/* Back to Top Arrow */}
      <motion.button
        onClick={() => scrollToSection('introduction')}
        whileHover={{ scale: 1.1 }}
        className="fixed bottom-8 right-8 bg-orange-600 hover:bg-orange-700 text-white p-4 rounded-full shadow-xl transition duration-300 z-50"
        aria-label="Back to top"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </motion.button>
    </div>
  );
};

export default ShowMorePage;