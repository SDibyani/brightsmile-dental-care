"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle2,
  Rocket,
  Eye,
  Play,
  X,
  Calendar,
  Users,
  ClipboardList,
  Cross,
} from "lucide-react";
import {
  ABOUT_HERO_DATA,
  SERVICES_TICKER_DATA,
  VISION_MISSION_DATA,
  ABOUT_VIDEO_DATA,
  HOW_IT_WORKS_DATA,
  HowItWorksStep,
} from "@/data/about";

// Custom Dental Tooth Icon for Ticker
const ToothIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg
    className={className}
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

const StepIcon = ({ type }: { type: HowItWorksStep["iconType"] }) => {
  switch (type) {
    case "calendar":
      return <Calendar className="w-6 h-6 text-white" />;
    case "users":
      return <Users className="w-6 h-6 text-white" />;
    case "clipboard":
      return <ClipboardList className="w-6 h-6 text-white" />;
    case "firstaid":
      return <Cross className="w-6 h-6 text-white" />;
    default:
      return <Calendar className="w-6 h-6 text-white" />;
  }
};

export default function AboutSection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <div className="bg-slate-50 overflow-hidden">
      {/* 1. Hero / Intro Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Shaped Image Montage */}
          <div className="relative flex justify-center items-center">
            {/* Background Decorative Sparkles */}
            <div className="absolute -top-6 left-10 text-blue-500 animate-pulse">
              <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0L15.09 8.91L24 12L15.09 15.09L12 24L8.91 15.09L0 12L8.91 8.91L12 0Z" />
              </svg>
            </div>
            <div className="absolute top-1/2 -left-4 text-blue-400">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0L15.09 8.91L24 12L15.09 15.09L12 24L8.91 15.09L0 12L8.91 8.91L12 0Z" />
              </svg>
            </div>

            {/* Custom Organic Shaped Container */}
            <div className="relative w-full max-w-[480px] h-[380px] sm:h-[460px]">
              {/* Main Shaped Image */}
              <div
                className="w-full h-full relative overflow-hidden shadow-xl"
                style={{
                  borderRadius: "50% 50% 40% 60% / 60% 40% 60% 40%",
                }}
              >
                <Image
                  src={ABOUT_HERO_DATA.images.mainDoctor}
                  alt="Doctor"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Inset Tooth-Shaped Secondary Image */}
              <div
                className="absolute bottom-2 left-0 w-40 sm:w-52 h-40 sm:h-52 overflow-hidden border-4 border-white shadow-2xl"
                style={{
                  borderRadius: "40% 60% 50% 50% / 50% 50% 60% 40%",
                }}
              >
                <Image
                  src={ABOUT_HERO_DATA.images.patientCare}
                  alt="Patient Treatment"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Circular Rotating Badge */}
              <div className="absolute -bottom-4 right-4 sm:right-8 w-24 h-24 sm:w-28 sm:h-28 bg-[#0a1b3a] rounded-full p-2 flex items-center justify-center shadow-2xl">
                <div className="relative w-full h-full flex items-center justify-center">
                  <svg
                    className="w-full h-full animate-spin-slow text-white fill-current"
                    viewBox="0 0 100 100"
                  >
                    <path
                      id="circlePath"
                      d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
                      fill="none"
                    />
                    <text className="text-[10px] uppercase font-bold tracking-[2px] fill-white">
                      <textPath href="#circlePath">
                        • CONTACT • CONTACT • CONTACT
                      </textPath>
                    </text>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white">
                      ↗
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Content */}
          <div className="space-y-6">
            <span className="text-sm font-bold text-slate-500 uppercase tracking-widest">
              {ABOUT_HERO_DATA.subtitle}
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-blue-600 leading-tight">
              {ABOUT_HERO_DATA.title}
            </h1>

            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              {ABOUT_HERO_DATA.description}
            </p>

            {/* Check Bullet Points */}
            <div className="space-y-3 pt-2">
              {ABOUT_HERO_DATA.bullets.map((bullet, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                  <span className="text-slate-700 font-medium text-sm sm:text-base">
                    {bullet}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Link
                href="/booking"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3.5 rounded-xl shadow-lg shadow-blue-500/25 transition active:scale-95"
              >
                {ABOUT_HERO_DATA.buttonText}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Services Blue Ticker Bar */}
      <section className="bg-blue-600 text-white py-5 overflow-hidden">
        <div className="flex items-center justify-around gap-8 flex-wrap max-w-7xl mx-auto px-4">
          {SERVICES_TICKER_DATA.map((service, index) => (
            <React.Fragment key={service.id}>
              <div className="flex items-center gap-3 font-semibold text-lg sm:text-xl whitespace-nowrap">
                <span>{service.title}</span>
              </div>
              {index < SERVICES_TICKER_DATA.length - 1 && (
                <ToothIcon className="w-6 h-6 text-white/80 hidden sm:block" />
              )}
            </React.Fragment>
          ))}
        </div>
      </section>

      {/* 3. Vision & Mission Cards */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {VISION_MISSION_DATA.map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 relative overflow-hidden group hover:shadow-md transition"
            >
              {/* Background Watermark Icon */}
              <div className="absolute right-4 bottom-4 opacity-5 group-hover:opacity-10 transition">
                {card.type === "vision" ? (
                  <Rocket className="w-32 h-32 text-slate-800" />
                ) : (
                  <Eye className="w-32 h-32 text-slate-800" />
                )}
              </div>

              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center shrink-0 shadow-md">
                  {card.type === "vision" ? (
                    <Rocket className="w-6 h-6 text-white" />
                  ) : (
                    <Eye className="w-6 h-6 text-white" />
                  )}
                </div>
                <h3 className="text-xl font-bold text-slate-800">{card.title}</h3>
              </div>

              <p className="text-slate-500 text-sm leading-relaxed relative z-10">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Team Video Banner + Integrated Stats Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="relative">
          {/* Main Video Box */}
          <div className="relative h-[320px] sm:h-[450px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src={ABOUT_VIDEO_DATA.thumbnail}
              alt="Medical Team"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-slate-900/20" />

            {/* Play Button */}
            <button
              onClick={() => setIsVideoOpen(true)}
              aria-label="Play video"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center text-blue-600 hover:scale-110 hover:bg-white transition shadow-2xl group"
            >
              <Play className="w-8 h-8 fill-current ml-1" />
            </button>
          </div>

          {/* Floating Stats Bar at Bottom */}
          <div className="mt-6 md:mt-0 md:absolute md:-bottom-12 md:left-1/2 md:-translate-x-1/2 w-full md:w-[90%] bg-blue-600 rounded-2xl shadow-xl p-6 text-white">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 divide-y md:divide-y-0 md:divide-x divide-blue-500/50">
              {ABOUT_VIDEO_DATA.stats.map((stat, idx) => (
                <div
                  key={stat.id}
                  className={`flex flex-col items-center text-center ${
                    idx > 0 ? "pt-4 md:pt-0" : ""
                  }`}
                >
                  <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold">
                    {stat.value}
                  </span>
                  <span className="text-xs sm:text-sm text-blue-100 font-medium mt-1">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden">
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
            >
              <X size={32} />
            </button>
            <iframe
              src={ABOUT_VIDEO_DATA.videoUrl}
              className="w-full h-full"
              allow="autoplay"
              allowFullScreen
            />
          </div>
        </div>
      )}

      {/* 5. How It Works Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pt-28">
        <div className="text-center space-y-3 mb-16">
          <p className="text-xs sm:text-sm font-bold text-slate-500 uppercase tracking-widest">
            {HOW_IT_WORKS_DATA.subtitle}
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-800">
            {HOW_IT_WORKS_DATA.titlePrefix}
            <span className="text-blue-600">{HOW_IT_WORKS_DATA.titleHighlight}</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {HOW_IT_WORKS_DATA.steps.map((step, idx) => (
            <div
              key={step.stepNumber}
              className="flex flex-col items-center text-center relative group"
            >
              {/* Connector Line between icons for desktop */}
              {idx < HOW_IT_WORKS_DATA.steps.length - 1 && (
                <div className="hidden lg:block absolute top-7 left-[60%] w-[80%] h-[2px] bg-slate-300" />
              )}

              {/* Icon Container with Badge */}
              <div className="relative mb-6">
                <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                  <StepIcon type={step.iconType} />
                </div>
                <span className="absolute -top-1 -right-2 bg-slate-900 text-white text-[11px] font-bold px-2 py-0.5 rounded-full border-2 border-white">
                  {step.stepNumber}
                </span>
              </div>

              <h4 className="text-base font-bold text-slate-800 mb-2">
                {step.title}
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed max-w-[220px]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}