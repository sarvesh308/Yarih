import React, { useState } from "react";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import emailjs from "emailjs-com";

const ContactSection = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    category: "",
    subject: "",
    message: "",
  });

  const categories: { [key: string]: string[] } = {
    "Construction & Home Services": [
      "Painting & Wall Finishing",
      "Electrical Works & Maintenance",
      "Plumbing & Sanitary Services",
      "Renovation & Remodeling",
      "Interior Design & Decoration",
      "Carpentry & Woodwork",
      "Flooring & Tiling",
      "False Ceiling & POP Work",
    ],
    "Digital & Technical": [
      "Web Design & Development",
      "Software & App Development",
      "Digital Marketing & Branding",
      "Graphic Design & Logo Creation",
    ],
    "Education & Wellness": [
      "Academic Tutoring",
      "Online & Home Tuitions",
      "Wellness & Fitness Programs",
      "Yoga & Meditation Classes",
      "Martial Arts & Self-Defense",
      "Career Guidance & Job Placement",
    ],
    Miscellaneous: [
      "Event & Stage Decoration",
      "Landscaping & Gardening",
      "Maintenance & Repairs",
      "Other",
    ],
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    if (name === "category") {
      setFormState({ ...formState, category: value, subject: "" });
    } else {
      setFormState({ ...formState, [name]: value });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    emailjs
      .send(
        "service_jyucn7l",
        "template_ynq4y8v",
        {
          name: formState.name,
          email: formState.email,
          category: formState.category,
          subject: formState.subject,
          phone: formState.phone,
          message: formState.message,
        },
        "rV8tNVEjE2aR-zYrv"
      )
      .then(
        () => {
          alert("Thank you for your message! We’ll get back to you soon.");
          setFormState({
            name: "",
            email: "",
            phone: "",
            category: "",
            subject: "",
            message: "",
          });
        },
        (error) => {
          console.error("Error sending message:", error);
          alert("Failed to send message. Please try again later.");
        }
      );
  };

  return (
    <section
      id="contact"
      className="relative py-28 bg-gradient-to-b from-[#f5faff] via-[#edf6ff] to-[#e6f0ff]"
    >
      {/* Subtle floating glows */}
      <div className="absolute top-[-15rem] left-[-20rem] w-[50rem] h-[50rem] bg-gradient-to-tr from-[#b6e3ff] to-transparent rounded-full blur-[180px] opacity-30 animate-float-slow"></div>
      <div className="absolute bottom-[-12rem] right-[-15rem] w-[40rem] h-[40rem] bg-gradient-to-bl from-[#c0e8ff]/80 to-transparent rounded-full blur-[160px] opacity-40 animate-float"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-playfair font-extrabold text-center leading-tight relative">
  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#0c4f82] via-[#1593d0] to-[#4dd0ff] drop-shadow-[0_0_25px_rgba(21,147,208,0.3)] animate-fade-in">
    Reach Us  
  </span>
  {/* Decorative underline / accent */}
  <span className="absolute left-1/2 bottom-[-16px] -translate-x-1/2 w-48 h-[4px] bg-gradient-to-r from-transparent via-[#328df5] to-transparent rounded-full shadow-[0_0_15px_rgba(200,155,0,0.5)] animate-pulse"></span>
</h2>

          <p className="text-gray-700 max-w-3xl mx-auto mt-4 text-lg">
            Have questions or ready to start your project? Connect with us for
            a premium experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* --- Form --- */}
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-10 shadow-lg border border-[#e1ecf9]">
            <h3 className="text-2xl font-semibold text-[#05263f] mb-6 font-playfair">
              Send Us a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>
              <input
                type="tel"
                name="phone"
                placeholder="+91 99999 99999"
                value={formState.phone}
                onChange={handleChange}
                required
                className="form-input"
              />
              <select
                name="category"
                value={formState.category}
                onChange={handleChange}
                required
                className="form-input"
              >
                <option value="">Select Category</option>
                {Object.keys(categories).map((cat) => (
                  <option key={cat}>{cat}</option>
                ))}
              </select>
              {formState.category && (
                <select
                  name="subject"
                  value={formState.subject}
                  onChange={handleChange}
                  required
                  className="form-input"
                >
                  <option value="">Select Subject</option>
                  {categories[formState.category].map((sub) => (
                    <option key={sub}>{sub}</option>
                  ))}
                </select>
              )}
              <textarea
                name="message"
                placeholder="Your Message"
                rows={4}
                value={formState.message}
                onChange={handleChange}
                required
                className="form-input"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#0c4f82] to-[#1593d0] text-white py-3 rounded-full font-semibold flex items-center justify-center gap-2 hover:scale-105 transition-transform"
              >
                <Send size={16} /> Send Message
              </button>
            </form>
          </div>

          {/* --- Info + Map --- */}
          <div className="flex flex-col gap-6">
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-lg border border-[#e1ecf9] flex flex-col gap-5">
              <h3 className="text-2xl font-playfair font-semibold text-[#05263f]">
                Contact Information
              </h3>
              <p className="flex items-center gap-3 text-gray-700">
                <MapPin className="text-[#0c4f82]" size={18} />
                160, Roja Thottam 1st Street, Irumbuliyur, East Tambaram,
                Chennai – 600059
              </p>
              <p className="flex items-center gap-3 text-gray-700">
                <Phone className="text-[#0c4f82]" size={18} /> +91 99526 36921
              </p>
              <p className="flex items-center gap-3 text-gray-700">
                <Mail className="text-[#0c4f82]" size={18} /> yarihgroup@gmail.com
              </p>
            </div>

            <div className="h-full rounded-3xl overflow-hidden border border-[#e1ecf9] shadow-lg">
              <iframe
                title="Yarih Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.896382958078!2d80.12710677436718!3d12.91774031707971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525fdfb5ac8c45%3A0xb7f498e6a9eb6b4!2sIrumbuliyur%2C%20East%20Tambaram%2C%20Chennai%2C%20Tamil%20Nadu%20600059!5e0!3m2!1sen!2sin!4v1707052763643!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
