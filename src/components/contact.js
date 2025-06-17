import React, { useState } from 'react';
const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = e => {
    e.preventDefault();
    // Integrate with Formspree, EmailJS, or similar for production
    alert('Message sent!');
  };
  return (
    <section className="py-12 bg-gray-50" id="contact">
      <div className="container mx-auto px-4 max-w-lg">
        <h2 className="text-3xl font-bold mb-8 text-center">Contact Me</h2>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Your Name" required className="border rounded p-2" value={form.name} onChange={handleChange} />
          <input type="email" name="email" placeholder="Your Email" required className="border rounded p-2" value={form.email} onChange={handleChange} />
          <textarea name="message" placeholder="Your Message" required className="border rounded p-2" value={form.message} onChange={handleChange} />
          <button type="submit" className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Send</button>
        </form>
        <div className="flex justify-center gap-6 mt-6">
          <a href="mailto:your@email.com" aria-label="Email"><i className="fas fa-envelope"></i></a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><i className="fab fa-github"></i></a>
        </div>
      </div>
    </section>
  );
};
export default Contact;
