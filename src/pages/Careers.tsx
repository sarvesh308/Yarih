import React from 'react';
const Careers = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800">Join Our Team</h1>
          <p className="mt-4 text-lg text-gray-600">
            Be part of a dynamic and innovative team that’s shaping the future. Explore exciting career opportunities with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Job Card 1 */}
          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow">
            <h2 className="text-2xl font-semibold text-gray-800">Frontend Developer</h2>
            <p className="mt-4 text-gray-600">
              Build stunning user interfaces and collaborate with our design team to create seamless experiences.
            </p>
            <ul className="mt-4 text-gray-600">
              <li>• Proficiency in React and TypeScript</li>
              <li>• Experience with Tailwind CSS</li>
              <li>• Strong problem-solving skills</li>
            </ul>
            <button className="mt-6 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
              Apply Now
            </button>
          </div>

          {/* Job Card 2 */}
          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow">
            <h2 className="text-2xl font-semibold text-gray-800">Backend Developer</h2>
            <p className="mt-4 text-gray-600">
              Develop robust APIs and scalable backend systems to power our applications.
            </p>
            <ul className="mt-4 text-gray-600">
              <li>• Proficiency in Node.js and Express</li>
              <li>• Experience with databases (SQL/NoSQL)</li>
              <li>• Knowledge of cloud platforms</li>
            </ul>
            <button className="mt-6 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
              Apply Now
            </button>
          </div>

          {/* Job Card 3 */}
          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow">
            <h2 className="text-2xl font-semibold text-gray-800">UI/UX Designer</h2>
            <p className="mt-4 text-gray-600">
              Design intuitive and visually appealing interfaces that enhance user experiences.
            </p>
            <ul className="mt-4 text-gray-600">
              <li>• Proficiency in Figma or Adobe XD</li>
              <li>• Strong understanding of design principles</li>
              <li>• Ability to create wireframes and prototypes</li>
            </ul>
            <button className="mt-6 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
              Apply Now
            </button>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-gray-800">Why Work With Us?</h2>
          <p className="mt-4 text-lg text-gray-600">
            We value creativity, collaboration, and growth. Join us to work on exciting projects and make a real impact.
          </p>
          <div className="mt-8 flex justify-center gap-6">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800">Flexible Work Environment</h3>
              <p className="mt-2 text-gray-600">Enjoy the freedom to work remotely or in our modern office spaces.</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800">Growth Opportunities</h3>
              <p className="mt-2 text-gray-600">We invest in your professional development and career growth.</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800">Inclusive Culture</h3>
              <p className="mt-2 text-gray-600">Be part of a diverse and inclusive team that values your voice.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Careers;