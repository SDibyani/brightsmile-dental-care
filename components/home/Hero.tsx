







"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Calendar,
  Play,
  Star,
  Sparkles,
  Shield,
  UserCheck,
  Smile,
  X,
} from "lucide-react";
import { HERO_DATA, HeroFeature } from "@/data/hero";

const FeatureIcon = ({ type }: { type: HeroFeature["iconType"] }) => {
  switch (type) {
    case "tech":
      return <Sparkles className="text-blue-600" size={28} />;
    case "comfort":
      return <Shield className="text-blue-600" size={28} />;
    case "expert":
      return <UserCheck className="text-blue-600" size={28} />;
    case "personalized":
    default:
      return <Smile className="text-blue-600" size={28} />;
  }
};

export default function HeroSection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section className="relative bg-[#f8faff] py-8 sm:py-12 lg:py-16 overflow-hidden text-slate-800">
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center relative z-10">
        
        {/* LEFT COLUMN: Text slides in from Left */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-6 space-y-6 sm:space-y-8"
        >
          <p className="text-xs sm:text-sm font-extrabold tracking-[0.2em] text-blue-600 uppercase">
            {HERO_DATA.tagline}
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.1] tracking-tight">
            {HERO_DATA.titleMain} <br />
            <span className="text-blue-600">{HERO_DATA.titleHighlight}</span>
          </h1>

          <p className="text-slate-500 text-base sm:text-lg max-w-lg leading-relaxed">
            {HERO_DATA.description}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">


            {/* FLOATING BUTTONS CONTAINER */}
<motion.div 
  className="flex flex-wrap items-center gap-4 pt-2"
  animate={{ y: [0, -8, 0] }}
  transition={{
    duration: 3,
    repeat: Infinity,
    repeatType: "loop",
    ease: "easeInOut"
  }}
>
  <Link
    href="/booking"
    className="inline-flex items-center gap-2 bg-blue-600 text-white text-sm font-bold px-7 py-4 rounded-full hover:bg-blue-700 transition shadow-xl shadow-blue-600/30 hover:shadow-blue-600/50 hover:-translate-y-1 active:scale-95"
  >
    <Calendar size={18} />
    BOOK APPOINTMENT
  </Link>

  <button
    onClick={() => setIsVideoOpen(true)}
    className="inline-flex items-center gap-2.5 bg-white text-blue-600 text-sm font-bold px-6 py-3.5 rounded-full border border-blue-200 hover:bg-blue-50 transition shadow-md hover:shadow-lg hover:-translate-y-1 active:scale-95"
  >
    <div className="w-6 h-6 rounded-full border border-blue-600 flex items-center justify-center">
      <Play size={12} className="fill-blue-600 ml-0.5" />
    </div>
    WATCH VIDEO
  </button>
</motion.div>



{/* 
            <button
              onClick={() => setIsVideoOpen(true)}
              className="inline-flex items-center gap-2.5 bg-white text-blue-600 text-sm font-bold px-6 py-3.5 rounded-full border border-blue-200 hover:bg-blue-50 transition shadow-sm active:scale-95"
            >
              <div className="w-6 h-6 rounded-full border border-blue-600 flex items-center justify-center">
                <Play size={12} className="fill-blue-600 ml-0.5" />
              </div>
              WATCH VIDEO
            </button> */}

          </div>

          <div className="flex items-center gap-4 pt-4">
            <div className="flex -space-x-3">
              {HERO_DATA.avatars.map((img, i) => (
                <div key={i} className="relative w-10 h-10 rounded-full border-2 border-white overflow-hidden shadow-sm">
                  <Image src={img} alt="Patient" fill className="object-cover" />
                </div>
              ))}
            </div>

            <div>
              <p className="text-xs font-bold text-slate-500">{HERO_DATA.reviewCount}</p>
              <div className="flex items-center gap-1 mt-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="text-blue-600 fill-blue-600" />
                ))}
                <span className="text-xs font-extrabold text-slate-800 ml-1">
                  {HERO_DATA.rating}
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* RIGHT COLUMN: Image slides in from Right */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className="lg:col-span-6 relative"
        >
          <div className="relative w-full h-[320px] sm:h-[420px] lg:h-[480px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
            <Image
              src={HERO_DATA.heroImage}
              alt="Futuristic Dental Clinic Equipment"
              fill
              priority
              fetchPriority="high"
              loading="eager"
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 to-transparent pointer-events-none" />
          </div>
        </motion.div>
      </div>

      {/* Feature Cards Fade Up */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
        className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16 relative z-20"
      >
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-100 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {HERO_DATA.features.map((feature) => (
            <div key={feature.id} className="flex flex-col items-start text-left space-y-2">
              <div className="p-2.5 rounded-2xl bg-blue-50 mb-1">
                <FeatureIcon type={feature.iconType} />
              </div>
              <h3 className="text-base font-bold text-slate-900">{feature.title}</h3>
              <p className="text-xs text-slate-500 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Video Modal */}
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
              title="Clinic Intro Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
}