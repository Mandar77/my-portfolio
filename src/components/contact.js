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
    <section id="contact" className="py-12 bg-white">
      <h2 className="text-3xl font-bold text-center mb-8">Contact Me</h2>
      <div className="max-w-3xl mx-auto flex flex-col md:flex-row gap-8 px-4">
        <form
          className="flex-1 bg-gray-50 rounded-lg shadow p-6 flex flex-col gap-4"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="border rounded p-2"
            value={form.name}
            onChange={handleChange}
            aria-label="Your Name"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="border rounded p-2"
            value={form.email}
            onChange={handleChange}
            aria-label="Your Email"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            className="border rounded p-2"
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
          <h3 className="text-lg font-semibold mb-2">Connect with me</h3>
          <div className="flex gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="text-3xl text-gray-600 hover:text-blue-700 transition-colors"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
