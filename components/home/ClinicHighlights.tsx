



"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { CASE_STORIES_DATA } from "@/data/caseStories";

export default function CaseStoriesSection() {
  return (
    <section className="bg-[#0b1b36] py-16 px-4 sm:px-6 lg:px-8 text-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* HEADER AREA */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          {/* Header Text: Comes from Left */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-slate-400 uppercase">
              {CASE_STORIES_DATA.subtitle}
            </p>
            <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
              {CASE_STORIES_DATA.titleMain}{" "}
              <span className="block sm:inline text-blue-500">
                {CASE_STORIES_DATA.titleHighlight}
              </span>
            </h2>
          </motion.div>

          {/* Button: Comes from Right */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Link
              href={CASE_STORIES_DATA.buttonHref}
              className="inline-flex items-center gap-2 bg-blue-600 text-white font-bold text-sm sm:text-base px-6 py-3.5 rounded-full hover:bg-blue-700 transition shadow-lg shadow-blue-500/20 active:scale-95 shrink-0"
            >
              {CASE_STORIES_DATA.buttonText}
            </Link>
          </motion.div>
        </div>

        {/* STORIES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CASE_STORIES_DATA.stories.map((story, index) => {
            // Alternate entry direction: Even indices (0, 2...) from Left (-60), Odd indices (1, 3...) from Right (60)
            const isEven = index % 2 === 0;
            const xOffset = isEven ? -60 : 60;

            return (
              <motion.div
                key={story.id}
                initial={{ opacity: 0, x: xOffset }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                  delay: index * 0.1, // Staggered entry delay
                }}
                className="group relative rounded-3xl overflow-hidden h-[380px] sm:h-[440px] shadow-2xl border border-slate-800 transition-all duration-300 hover:border-slate-700"
              >
                <Image
                  src={story.image}
                  alt={story.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-90 group-hover:brightness-100"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                <Link
                  href={story.slug}
                  aria-label={story.title}
                  className="absolute bottom-6 right-6 z-20 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-xl group-hover:bg-blue-500 group-hover:scale-110 transition-all duration-300"
                >
                  <ArrowUpRight size={26} />
                </Link>

                <div className="absolute bottom-0 left-0 right-16 z-10 p-6 sm:p-8 space-y-4">
                  <h3 className="text-xl sm:text-2xl font-bold leading-snug text-white drop-shadow-sm">
                    {story.title}
                  </h3>

                  <div className="flex flex-wrap items-center gap-2 pt-1">
                    <span className="text-xs font-semibold px-3.5 py-1.5 rounded-full border border-white/30 bg-black/20 backdrop-blur-md text-white">
                      {story.year}
                    </span>

                    {story.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-xs font-semibold px-3.5 py-1.5 rounded-full border border-white/30 bg-black/20 backdrop-blur-md text-white"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}