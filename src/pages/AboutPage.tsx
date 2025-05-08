import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Globe, Users, BookOpen, Award, CloudRain } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-neutral-background min-h-screen pt-20 pb-16">
      <div className="container-custom py-8">
        <Link 
          to="/" 
          className="flex items-center text-primary hover:text-primary-600 transition-colors mb-6"
        >
          <ArrowLeft size={18} className="mr-2" />
          Back to Home
        </Link>
        
        {/* Hero Section */}
        <div className="bg-primary-500 text-white rounded-xl shadow-soft overflow-hidden mb-12">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 md:p-12">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">About Climate Change 101</h1>
              <p className="text-primary-100 text-lg leading-relaxed">
                Our mission is to make climate science accessible to everyone through 
                interactive education. We believe that understanding climate change is 
                the first step toward creating a sustainable future.
              </p>
            </div>
            
            <div className="bg-primary-600 p-8 md:p-12 flex items-center justify-center">
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-accent/30 rounded-full blur-xl"></div>
                <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-secondary/30 rounded-full blur-xl"></div>
                <CloudRain size={180} className="text-white/90 relative z-10" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Content sections - 2/3 width */}
          <div className="md:col-span-2 space-y-8">
            {/* Our Approach */}
            <div className="bg-white rounded-xl shadow-soft p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <Globe size={24} className="text-primary mr-3" />
                Our Approach to Climate Education
              </h2>
              
              <div className="space-y-4">
                <p>
                  Climate Change 101 takes a unique approach to climate education by combining scientific 
                  accuracy with engaging, accessible content. We focus on breaking down complex concepts 
                  into digestible modules that anyone can understand.
                </p>
                
                <p>
                  Each module is carefully designed to:
                </p>
                
                <ul className="list-disc pl-6 space-y-2">
                  <li>Explain climate science in simple, jargon-free language</li>
                  <li>Visualize key concepts through animations and illustrations</li>
                  <li>Connect abstract ideas to real-world impacts</li>
                  <li>Provide up-to-date data from trusted scientific sources</li>
                  <li>Test understanding through interactive quizzes</li>
                </ul>
                
                <p>
                  By making climate education more accessible, we aim to empower individuals 
                  with the knowledge they need to understand climate issues and engage in informed 
                  conversations about our planet's future.
                </p>
              </div>
            </div>
            
            {/* Our Content */}
            <div className="bg-white rounded-xl shadow-soft p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <BookOpen size={24} className="text-secondary mr-3" />
                Educational Content
              </h2>
              
              <div className="space-y-6">
                <p>
                  Our curriculum covers the full spectrum of climate science, from basic concepts to 
                  complex systems. We combine authoritative scientific information with engaging presentation 
                  to make learning both educational and enjoyable.
                </p>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="border border-gray-100 rounded-lg p-4 hover:shadow-soft transition-shadow">
                    <h3 className="font-semibold text-lg mb-2">The Basics</h3>
                    <ul className="space-y-1 text-gray-600">
                      <li>• The Greenhouse Effect</li>
                      <li>• Carbon Cycle</li>
                      <li>• Global Energy Balance</li>
                      <li>• Climate vs. Weather</li>
                    </ul>
                  </div>
                  
                  <div className="border border-gray-100 rounded-lg p-4 hover:shadow-soft transition-shadow">
                    <h3 className="font-semibold text-lg mb-2">Climate Systems</h3>
                    <ul className="space-y-1 text-gray-600">
                      <li>• Ocean Circulation</li>
                      <li>• Atmospheric Science</li>
                      <li>• Ice and Cryosphere</li>
                      <li>• Biosphere Interactions</li>
                    </ul>
                  </div>
                  
                  <div className="border border-gray-100 rounded-lg p-4 hover:shadow-soft transition-shadow">
                    <h3 className="font-semibold text-lg mb-2">Impacts & Evidence</h3>
                    <ul className="space-y-1 text-gray-600">
                      <li>• Rising Temperatures</li>
                      <li>• Sea Level Rise</li>
                      <li>• Extreme Weather</li>
                      <li>• Biodiversity Loss</li>
                    </ul>
                  </div>
                  
                  <div className="border border-gray-100 rounded-lg p-4 hover:shadow-soft transition-shadow">
                    <h3 className="font-semibold text-lg mb-2">Solutions</h3>
                    <ul className="space-y-1 text-gray-600">
                      <li>• Renewable Energy</li>
                      <li>• Carbon Capture</li>
                      <li>• Policy Approaches</li>
                      <li>• Individual Actions</li>
                    </ul>
                  </div>
                </div>
                
                <p className="text-center pt-2">
                  <Link 
                    to="/#modules" 
                    className="text-primary hover:text-primary-600 font-medium flex items-center justify-center"
                  >
                    View All Available Modules
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </Link>
                </p>
              </div>
            </div>
            
            {/* Our Data Sources */}
            <div className="bg-white rounded-xl shadow-soft p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <Award size={24} className="text-accent mr-3" />
                Our Data Sources
              </h2>
              
              <div className="space-y-4">
                <p>
                  We're committed to providing accurate, up-to-date information from the most 
                  reputable scientific sources. All climate data displayed on Climate Change 101 
                  comes from established research organizations and is regularly updated.
                </p>
                
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold mb-4">Primary Data Sources:</h3>
                  
                  <div className="grid sm:grid-cols-2 gap-y-4">
                    <div className="flex items-start">
                      <div className="bg-white p-2 rounded shadow-sm mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                          <circle cx="12" cy="12" r="10"></circle>
                          <line x1="2" y1="12" x2="22" y2="12"></line>
                          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium">NASA</h4>
                        <p className="text-sm text-gray-600">Global temperature data, satellite imagery</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-white p-2 rounded shadow-sm mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                          <path d="M21.5 2h-19A2.5 2.5 0 0 0 0 4.5v15A2.5 2.5 0 0 0 2.5 22h19a2.5 2.5 0 0 0 2.5-2.5v-15A2.5 2.5 0 0 0 21.5 2zM8 20H3V10h5v10zm6 0H9v-7h5v7zm7 0h-5v-5h5v5zm0-7H9V3h12v10z"></path>
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium">NOAA</h4>
                        <p className="text-sm text-gray-600">Atmospheric CO₂, ocean data</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-white p-2 rounded shadow-sm mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                          <path d="M3 15v4c0 1.1.9 2 2 2h4M17 21h4c1.1 0 2-.9 2-2v-4M21 3h-4c-1.1 0-2 .9-2 2v4M3 9V5c0-1.1.9-2 2-2h4"></path>
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium">IPCC</h4>
                        <p className="text-sm text-gray-600">Assessment reports, projections</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-white p-2 rounded shadow-sm mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium">World Meteorological Organization</h4>
                        <p className="text-sm text-gray-600">Climate reports, weather data</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <p>
                  Our content is reviewed by climate scientists and educators to ensure accuracy 
                  and educational value. We strive to present information that reflects the scientific 
                  consensus while acknowledging areas of ongoing research.
                </p>
              </div>
            </div>
          </div>
          
          {/* Sidebar - 1/3 width */}
          <div className="space-y-8">
            {/* Team */}
            <div className="bg-white rounded-xl shadow-soft p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <Users size={20} className="text-primary mr-2" />
                Our Team
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-16 h-16 rounded-full bg-gray-100 flex-shrink-0 mr-4">
                    <img 
                      src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg" 
                      alt="Dr. James Wilson" 
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Dr. James Wilson</h3>
                    <p className="text-gray-600 text-sm">Climate Scientist, Content Director</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-16 h-16 rounded-full bg-gray-100 flex-shrink-0 mr-4">
                    <img 
                      src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg" 
                      alt="Dr. Sarah Chen" 
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Dr. Sarah Chen</h3>
                    <p className="text-gray-600 text-sm">Environmental Educator, Curriculum Design</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-16 h-16 rounded-full bg-gray-100 flex-shrink-0 mr-4">
                    <img 
                      src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg" 
                      alt="Alex Rivera" 
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Alex Rivera</h3>
                    <p className="text-gray-600 text-sm">Digital Learning Specialist</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-16 h-16 rounded-full bg-gray-100 flex-shrink-0 mr-4">
                    <img 
                      src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg" 
                      alt="Maya Johnson" 
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Maya Johnson</h3>
                    <p className="text-gray-600 text-sm">Data Visualization Expert</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact */}
            <div className="bg-white rounded-xl shadow-soft p-6">
              <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
              
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea 
                    id="message" 
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="btn-primary w-full"
                >
                  Send Message
                </button>
              </form>
            </div>
            
            {/* FAQ */}
            <div className="bg-gray-50 rounded-xl shadow-soft p-6">
              <h2 className="text-xl font-semibold mb-4">Frequently Asked Questions</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-primary">Is all content free to access?</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Yes, all educational content on Climate Change 101 is completely free. Our mission is to make climate education accessible to everyone.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-medium text-primary">How often is the content updated?</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    We update our modules and data quarterly, and whenever significant new research or climate data becomes available.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-medium text-primary">Can I use this content in my classroom?</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Absolutely! We encourage educators to use our content. Please contact us for additional teaching resources.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-medium text-primary">How can I contribute?</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    We welcome feedback, content suggestions, and collaborations. Please reach out via our contact form.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;