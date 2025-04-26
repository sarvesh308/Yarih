import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import emailjs from 'emailjs-com';

const ContactSection = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    phone: '',
    message: '',
  });

  const subjects = [
    'Mathematics',
    'Physics',
    'Chemistry',
    'Biology',
    'English',
    'Computer Science',
    'History',
    'Geography',
    'Economics',
    'Business Studies',
    'Accountancy',
    'Tamil',
    'Hindi',
    'French',
    'Construction Services',
    'Web Development',
    'Other',
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send(
        'service_jyucn7l', // Replace with your EmailJS Service ID
        'template_ynq4y8v', // Replace with your EmailJS Template ID
        {
          name: formState.name,
          email: formState.email,
          subject: formState.subject,
          phone: formState.phone,
          message: formState.message,
        },
        'rV8tNVEjE2aR-zYrv' // Replace with your EmailJS User ID
      )
      .then(
        (result) => {
          alert('Thank you for your message! We will get back to you soon.');
          setFormState({
            name: '',
            email: '',
            subject: '',
            phone: '',
            message: '',
          });
        },
        (error) => {
          console.error('Error sending message:', error);
          alert('Failed to send your message. Please try again later.');
        }
      );
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom">
        <h2 className="section-title text-center opacity-0 animate-fade-in">
          Reach Us
        </h2>
        <p
          className="section-subtitle text-center max-w-3xl mx-auto opacity-0 animate-fade-in"
          style={{ animationDelay: '0.2s' }}
        >
          Have questions or ready to start your journey with us? Contact us today for personalized service.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          {/* Contact Form */}
          <div className="opacity-0 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
              <h3 className="font-playfair text-2xl font-bold mb-6 text-charcoal-dark">
                Send Us a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formState.phone}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="+91 99999 99999"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    required
                    className="form-input"
                  >
                    <option value="">Select a subject</option>
                    {subjects.map((subject) => (
                      <option key={subject} value={subject}>
                        {subject}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="form-input"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                <button type="submit" className="btn-primary w-full justify-center">
                  <Send size={16} />
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info & Map */}
          <div className="opacity-0 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <div className="bg-gray-50 rounded-xl p-6 md:p-8 h-full">
              <h3 className="font-playfair text-2xl font-bold mb-6 text-charcoal-dark">
                Contact Information
              </h3>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-royal/10 rounded-full text-royal">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-charcoal-dark mb-1">Our Location</h4>
                    <p className="text-gray-600">
                      Tambaram, Chennai<br />
                      Tamil Nadu, 600059
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-royal/10 rounded-full text-royal">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-charcoal-dark mb-1">Phone Number</h4>
                    <p className="text-gray-600">
                      <a href="tel:+919952636921">+91 99526 36921</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-royal/10 rounded-full text-royal">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-charcoal-dark mb-1">Email Address</h4>
                    <p className="text-gray-600">
                      <a href="mailto:yarihgroup@gmail.com">yarihgroup@gmail.com</a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Google Map Embed */}
              <div className="rounded-lg overflow-hidden h-64 border border-gray-200">
                <iframe
                  title="Yarih Group Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.8794531222566!2d80.1150281!3d12.922537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525f1e5f0e3c07%3A0xf680f1d607f2f0ab!2sTambaram%2C%20Chennai%2C%20Tamil%20Nadu%20600059!5e0!3m2!1sen!2sin!4v1650000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;