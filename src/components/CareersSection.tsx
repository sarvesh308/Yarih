import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router

const jobOpenings = [
  {
    title: 'Academic Tutor - All Subjects',
    location: 'Remote',
    type: 'Part-time',
    category: 'Tutoring',
    description: 'Provide expert tutoring in advanced mathematics for high school and college students.',
  },
  {
    title: 'Frontend Developer Intern',
    location: 'Remote',
    type: 'Internship',
    category: 'Web Development',
    description: 'Assist in building responsive and elegant user interfaces for our web applications using React.',
  },
  {
    title: 'Backend Developer Intern',
    location: 'Remote',
    type: 'Internship',
    category: 'Web Development',
    description: 'Support the development of scalable backend systems and APIs for our applications.',
  },
  {
    title: 'Full-stack Developer',
    location: 'Remote',
    type: 'Full-time',
    category: 'Web Development',
    description: 'Develop and maintain full-stack web applications with a focus on performance and scalability.',
  },
];

// Job categories for filter
const categories = ['All', 'Tutoring', 'Web Development'];

const CareersSection = () => {
  const [activeFilter, setActiveFilter] = React.useState('All');
  const [filteredJobs, setFilteredJobs] = React.useState(jobOpenings);

  // Filter jobs based on selected category
  React.useEffect(() => {
    if (activeFilter === 'All') {
      setFilteredJobs(jobOpenings);
    } else {
      setFilteredJobs(jobOpenings.filter(job => job.category === activeFilter));
    }
  }, [activeFilter]);

  return (
    <section id="careers" className="bg-gradient-to-b from-white to-gray-50 section-padding">
      <div className="container-custom">
        <h2 className="section-title text-center opacity-0 animate-fade-in">
          Join Our Team
        </h2>
        <p className="section-subtitle text-center max-w-3xl mx-auto opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Be part of a dynamic team committed to excellence across diverse fields.
          Explore opportunities to grow and make an impact.
        </p>
        
        {/* Filter Categories */}
        <div className="flex flex-wrap justify-center gap-2 mb-8 opacity-0 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 rounded-full transition-all duration-300 ${
                activeFilter === category 
                  ? 'bg-royal text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Job Listings */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredJobs.map((job, index) => (
            <div 
              key={`${job.title}-${index}`}
              className="service-card opacity-0 animate-fade-in"
              style={{ animationDelay: `${0.4 + index * 0.1}s` }}
            >
              <div className="p-6">
                <span className="inline-block px-3 py-1 rounded-full bg-royal/10 text-royal text-sm font-medium mb-3">
                  {job.category}
                </span>
                <h3 className="font-playfair text-xl font-bold mb-2 text-charcoal-dark">
                  {job.title}
                </h3>
                <div className="flex flex-wrap gap-3 mb-3">
                  <span className="text-sm text-gray-500">📍 {job.location}</span>
                  <span className="text-sm text-gray-500">⏱️ {job.type}</span>
                </div>
                <p className="text-gray-600 mb-6">
                  {job.description}
                </p>
                <Link 
                  to="/contact" // Navigate to the "Reach Us" or "Contact" page
                  className="text-royal font-medium hover:text-royal-light transition-colors flex items-center"
                >
                  Apply Now
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareersSection;