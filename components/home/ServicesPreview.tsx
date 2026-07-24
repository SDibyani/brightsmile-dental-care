"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, Smile, ShieldCheck } from "lucide-react";
import { SERVICES_DATA, Service } from "@/data/services";


const ServiceBadgeIcon = ({ iconType }: { iconType: Service["iconType"] }) => {
  switch (iconType) {
    case "sparkles":
      return <Sparkles className="text-white" size={28} />;
    case "implant":
      return <ShieldCheck className="text-white" size={28} />;
    case "tooth":
    default:
      return <Smile className="text-white" size={28} />;
  }
};

export default function ServicesSection() {
  return (
    <section className="bg-[#f8f9fc] py-16 px-4 sm:px-6 lg:px-8 text-slate-800">
      <div className="max-w-6xl mx-auto">
       
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-slate-500 uppercase">
              OUR SERVICES
            </p>
            <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
              <span className="text-blue-600">A Wide Range of Services</span> <br />
              for Your Best Smile
            </h2>
          </div>

          <div>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-blue-600 text-white font-bold text-sm sm:text-base px-6 py-3.5 rounded-full hover:bg-blue-700 transition shadow-md hover:shadow-lg active:scale-95 shrink-0"
            >
              Explore All Services
            </Link>
          </div>
        </div>

     
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-100 hover:shadow-2xl transition-all duration-300 flex flex-col group"
            >
              
              <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />

         
                <div className="absolute -bottom-6 left-8 z-10">
                  <div className="w-16 h-16 rounded-full bg-blue-600 border-4 border-white flex items-center justify-center shadow-md">
                    <ServiceBadgeIcon iconType={service.iconType} />
                  </div>
                </div>
              </div>

       
              <div className="p-8 pt-10 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

             
                <div>
                  <Link
                    href={service.slug}
                    className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700 transition group-hover:translate-x-1 duration-200"
                  >
                    Learn more
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}