"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Play, CheckCircle2, X } from "lucide-react";
import { WHY_CHOOSE_US_DATA } from "@/data/whyChooseUs";

export default function WhyChooseUs() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8 overflow-hidden text-slate-800">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <p className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-slate-500 uppercase">
            {WHY_CHOOSE_US_DATA.subtitle}
          </p>
          <h2 className="mt-2 text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
            {WHY_CHOOSE_US_DATA.titleMain}{" "}
            <span className="block sm:inline text-blue-600">
              {WHY_CHOOSE_US_DATA.titleHighlight}
            </span>
          </h2>
        </div>

      
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
    
          <div className="lg:col-span-5 flex justify-center relative">
            <div className="relative w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] lg:w-[400px] lg:h-[400px]">
       
              <div className="absolute -inset-4 sm:-inset-6 rounded-full border-2 border-slate-200/80 pointer-events-none" />

          
              <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src={WHY_CHOOSE_US_DATA.image}
                  alt="Dental Patient Care"
                  fill
                  className="object-cover"
                  priority
                />

              
                <button
                  onClick={() => setIsVideoOpen(true)}
                  aria-label="Play video"
                  className="absolute inset-0 m-auto w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/40 backdrop-blur-md flex items-center justify-center border border-white/60 text-white hover:scale-110 hover:bg-white/60 transition-all duration-300 shadow-xl group"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/80 flex items-center justify-center text-blue-600 group-hover:bg-white">
                    <Play className="fill-blue-600 ml-1" size={24} />
                  </div>
                </button>
              </div>

       
              <div className="absolute -bottom-6 -left-6 sm:-bottom-8 sm:-left-8 text-blue-600 pointer-events-none">
                <svg
                  className="w-16 h-16 sm:w-20 sm:h-20"
                  viewBox="0 0 100 100"
                  fill="currentColor"
                >
                  <path d="M50 0 C50 25 75 50 100 50 C75 50 50 75 50 100 C50 75 25 50 0 50 C25 50 50 25 50 0 Z" />
                </svg>
              </div>
              <div className="absolute -bottom-10 left-8 sm:-bottom-12 sm:left-10 text-blue-500 pointer-events-none">
                <svg
                  className="w-8 h-8 sm:w-10 sm:h-10"
                  viewBox="0 0 100 100"
                  fill="currentColor"
                >
                  <path d="M50 0 C50 25 75 50 100 50 C75 50 50 75 50 100 C50 75 25 50 0 50 C25 50 50 25 50 0 Z" />
                </svg>
              </div>

        
              <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 w-20 h-20 text-blue-600/80 pointer-events-none rotate-12">
                <svg viewBox="0 0 100 100" fill="currentColor">
                  <circle cx="20" cy="20" r="4" />
                  <circle cx="40" cy="15" r="4" />
                  <circle cx="60" cy="10" r="4" />
                  <circle cx="35" cy="40" r="4" />
                  <circle cx="55" cy="35" r="4" />
                  <circle cx="75" cy="30" r="4" />
                  <circle cx="50" cy="60" r="4" />
                  <circle cx="70" cy="55" r="4" />
                </svg>
              </div>
            </div>
          </div>

         
          <div className="lg:col-span-7 space-y-8">
            <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
              {WHY_CHOOSE_US_DATA.description}
            </p>

         
            <div className="grid grid-cols-3 gap-2 sm:gap-6 pt-4 pb-6 border-y border-slate-100">
              {WHY_CHOOSE_US_DATA.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className={`${
                    idx !== WHY_CHOOSE_US_DATA.stats.length - 1
                      ? "border-r border-slate-100 pr-2 sm:pr-4"
                      : ""
                  }`}
                >
                  <p className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs sm:text-sm font-medium text-slate-500">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

           
            <ul className="space-y-3">
              {WHY_CHOOSE_US_DATA.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="text-blue-600 shrink-0" size={22} />
                  <span className="text-sm sm:text-base font-semibold text-slate-700">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

         
            <div className="pt-2">
              <Link
                href={WHY_CHOOSE_US_DATA.buttonHref}
                className="inline-block bg-blue-600 text-white text-sm sm:text-base font-bold px-8 py-3.5 rounded-full hover:bg-blue-700 transition shadow-lg shadow-blue-500/20 active:scale-95"
              >
                {WHY_CHOOSE_US_DATA.buttonText}
              </Link>
            </div>
          </div>
        </div>
      </div>

  
      {isVideoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="relative w-full max-w-3xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl">
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-4 right-4 z-10 text-white bg-black/50 p-2 rounded-full hover:bg-black/80 transition"
              aria-label="Close video"
            >
              <X size={20} />
            </button>
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
              title="Dental Clinic Introduction"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
}