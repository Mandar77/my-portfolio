import React, { useState } from "react";
import { FaLinkedin, FaInstagram, FaXTwitter, FaEnvelope } from "react-icons/fa6";

const socialLinks = [
  {
    name: "Email",
    icon: <FaEnvelope />,
    url: "mailto:ambulkar.m@northeastern.edu",
    label: "Email",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedin />,
    url: "https://www.linkedin.com/in/mandarambulkar/",
    label: "LinkedIn",
  },
  {
    name: "Instagram",
    icon: <FaInstagram />,
    url: "https://www.instagram.com/_mandarr__/",
    label: "Instagram",
  },
  {
    name: "X",
    icon: <FaXTwitter />,
    url: "https://x.com/_mandarr_",
    label: "X (Twitter)",
  },
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    // Integrate with EmailJS, Formspree, or similar for production
    alert("Message sent!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-12">
      <div className="glass-card max-w-3xl mx-auto p-8">
        <h2 className="text-3xl font-bold text-center mb-8 text-white">Contact Me</h2>
        <div className="flex flex-col md:flex-row gap-8 px-4">
          <form
            className="flex-1 flex flex-col gap-4"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="border rounded p-2 bg-white bg-opacity-20 text-white placeholder-gray-300"
              value={form.name}
              onChange={handleChange}
              aria-label="Your Name"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="border rounded p-2 bg-white bg-opacity-20 text-white placeholder-gray-300"
              value={form.email}
              onChange={handleChange}
              aria-label="Your Email"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              required
              className="border rounded p-2 bg-white bg-opacity-20 text-white placeholder-gray-300"
              value={form.message}
              onChange={handleChange}
              aria-label="Your Message"
              rows={4}
            />
            <button
              type="submit"
              className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors"
            >
              Send
            </button>
          </form>
          <div className="flex-1 flex flex-col items-center justify-center gap-4">
            <h3 className="text-lg font-semibold mb-2 text-white">Connect with me</h3>
            <div className="flex gap-6">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="text-3xl text-gray-300 hover:text-white transition-colors"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
