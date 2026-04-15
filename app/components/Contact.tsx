"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-16 bg-parchment">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-ink mb-4">CONTACT US</h2>
          <div className="flex items-center justify-center space-x-4">
            <span className="text-2xl text-gold">✦</span>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold to-transparent"></div>
            <span className="text-2xl text-gold">✦</span>
          </div>
        </div>

        <div className="text-center mb-8 space-y-2">
          <p className="text-lg">
            <a href="tel:9088504558" className="text-imperial hover:text-gold">(908) 850-4558</a>
            {" / "}
            <a href="tel:9088506062" className="text-imperial hover:text-gold">(908) 850-6062</a>
          </p>
          <p className="text-lg">
            <span className="text-xl">✉️</span>{" "}
            <a href="mailto:info@szechuanroyale.com" className="text-imperial hover:text-gold">info@szechuanroyale.com</a>
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-ink rounded-lg p-8 border-2 border-gold space-y-6">
          <div>
            <label htmlFor="name" className="block text-gold text-sm font-medium mb-2">Name</label>
            <input
              type="text"
              id="name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-ink border border-gold rounded-lg px-4 py-3 text-white placeholder-stone focus:outline-none focus:border-bright-gold"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gold text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              id="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full bg-ink border border-gold rounded-lg px-4 py-3 text-white placeholder-stone focus:outline-none focus:border-bright-gold"
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-gold text-sm font-medium mb-2">Message / Party Size</label>
            <textarea
              id="message"
              required
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full bg-ink border border-gold rounded-lg px-4 py-3 text-white placeholder-stone focus:outline-none focus:border-bright-gold resize-none"
              placeholder="Your message or reservation details"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gold text-ink py-3 rounded-lg font-bold hover:bg-bright-gold transition-all duration-200 transform hover:scale-105"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}