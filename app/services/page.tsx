"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  Smile,
  Activity,
  ShieldAlert,
  Scissors,
  Wrench,
} from "lucide-react";
import {
  SERVICES_PAGE_HEADER,
  SERVICES_LIST,
  ServiceItem,
} from "@/data/services";

// Custom tooth SVG icon for classic dental services
const ToothIcon = () => (
  <svg
    className="w-6 h-6 text-white"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 2C8.5 2 6 4.5 6 8c0 3.5 1.5 8 2.5 11 1 3 2.5 3 3.5 3s1.5-1.5 2-3c.5 1.5 1 3 2 3s2.5 0 3.5-3c1-3 2.5-7.5 2.5-11 0-3.5-2.5-6-6-6z" />
  </svg>
);

const ServiceBadgeIcon = ({ type }: { type: ServiceItem["iconType"] }) => {
  switch (type) {
    case "sparkles":
      return <Sparkles className="w-6 h-6 text-white" />;
    case "makeover":
      return <Smile className="w-6 h-6 text-white" />;
    case "surgery":
      return <Activity className="w-6 h-6 text-white" />;
    case "repair":
      return <Wrench className="w-6 h-6 text-white" />;
    case "extraction":
    case "wisdom":
      return <Scissors className="w-6 h-6 text-white" />;
    case "implant":
    case "braces":
    case "tooth":
    default:
      return <ToothIcon />;
  }
};

export default function ServicesSection() {
  return (
    <section className="bg-slate-50 min-h-screen py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      {/* Page Header */}
      <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16 space-y-2">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-blue-600 tracking-tight">
          {SERVICES_PAGE_HEADER.title}
        </h1>
        <p className="text-2xl sm:text-3xl font-extrabold text-slate-800">
          {SERVICES_PAGE_HEADER.subtitle}
        </p>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
        {SERVICES_LIST.map((service) => (
          <div
            key={service.id}
            className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-100 transition-all duration-300 flex flex-col group"
          >
            {/* Top Image Container with Floating Badge */}
            <div className="relative h-56 w-full overflow-hidden bg-slate-100">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Floating Blue Circle Badge */}
              <div className="absolute -bottom-6 left-6 w-14 h-14 rounded-full bg-blue-600 border-4 border-white flex items-center justify-center shadow-lg group-hover:bg-blue-700 transition-colors">
                <ServiceBadgeIcon type={service.iconType} />
              </div>
            </div>

            {/* Content Body */}
            <div className="pt-10 pb-8 px-6 sm:px-8 flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <h3 className="text-xl font-extrabold text-slate-800 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed line-clamp-3">
                  {service.description}
                </p>
              </div>

              {/* Action Link */}
              <div className="pt-2">
                <Link
                  href="/booking"
                  className="inline-flex items-center text-sm font-bold text-blue-600 hover:text-blue-800 transition gap-1.5 group/link"
                >
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}