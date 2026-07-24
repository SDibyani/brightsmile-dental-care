"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import { CONTACT_DATA, ContactInfo } from "@/data/contact";

const ContactIcon = ({ type }: { type: ContactInfo["type"] }) => {
  switch (type) {
    case "phone":
      return <Phone size={20} className="text-blue-600" />;
    case "email":
      return <Mail size={20} className="text-blue-600" />;
    case "location":
    default:
      return <MapPin size={20} className="text-blue-600" />;
  }
};

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for getting in touch! We will respond shortly.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-4xl w-full bg-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl space-y-8">
        
        {/* Title */}
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-800 text-center tracking-tight">
          {CONTACT_DATA.title}
        </h1>

        {/* Main Grid: Left Map Image & Right Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Left Column: Interactive Map Placeholder */}
          <div className="relative min-h-[260px] sm:min-h-[320px] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 group">
            <Image
              src={CONTACT_DATA.mapImage}
              alt="Clinic Location Map"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            {/* Soft Ambient Overlay */}
            <div className="absolute inset-0 bg-blue-900/10" />

            {/* Blue Map Marker Pin 1 (Center Active) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
              <div className="bg-blue-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-md shadow-md mb-1">
                Am Markt, St.
              </div>
              <div className="relative flex items-center justify-center">
                <span className="animate-ping absolute inline-flex h-6 w-6 rounded-full bg-blue-400 opacity-75" />
                <div className="w-5 h-5 rounded-full bg-blue-600 border-2 border-white shadow-lg flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-white" />
                </div>
              </div>
            </div>

            {/* Blue Map Marker Pin 2 (Top Left) */}
            <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2">
              <div className="w-4 h-4 rounded-full bg-blue-600 border-2 border-white shadow-md" />
            </div>

            {/* Blue Map Marker Pin 3 (Right) */}
            <div className="absolute top-1/3 right-1/4 -translate-x-1/2 -translate-y-1/2">
              <div className="w-4 h-4 rounded-full bg-blue-600 border-2 border-white shadow-md" />
            </div>

            {/* Blue Map Marker Pin 4 (Bottom Right) */}
            <div className="absolute bottom-1/4 right-1/3 -translate-x-1/2 -translate-y-1/2">
              <div className="w-4 h-4 rounded-full bg-blue-600 border-2 border-white shadow-md" />
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <form onSubmit={handleSubmit} className="flex flex-col justify-between space-y-4">
            <div className="space-y-4">
              {/* Name Field */}
              <div>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full rounded-xl bg-slate-50 border border-transparent px-4 py-3.5 text-sm text-slate-800 placeholder-slate-400 outline-none focus:border-blue-600 focus:bg-white transition"
                />
              </div>

              {/* Email Field */}
              <div>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Email address"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-xl bg-slate-50 border border-transparent px-4 py-3.5 text-sm text-slate-800 placeholder-slate-400 outline-none focus:border-blue-600 focus:bg-white transition"
                />
              </div>

              {/* Message Field */}
              <div>
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full rounded-xl bg-slate-50 border border-transparent px-4 py-3.5 text-sm text-slate-800 placeholder-slate-400 outline-none focus:border-blue-600 focus:bg-white transition resize-none"
                />
              </div>
            </div>

            {/* Blue Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 rounded-2xl transition shadow-md shadow-blue-500/20 active:scale-[0.98]"
            >
              Send now
            </button>
          </form>
        </div>

        {/* Bottom Contact Details Footer */}
        <div className="pt-4 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center sm:text-left">
          {CONTACT_DATA.infoItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className="flex items-center justify-center sm:justify-start gap-3 p-2 rounded-xl hover:bg-slate-50 transition group"
            >
              <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <ContactIcon type={item.type} />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-800">{item.title}</p>
                <p className="text-xs text-slate-400 group-hover:text-blue-600 transition">
                  {item.value}
                </p>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}