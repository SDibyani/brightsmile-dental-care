"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Star, Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(2);

  useEffect(() => {
    const updateCardsPerPage = () => {
      if (window.innerWidth < 1024) {
        setCardsPerPage(1); 
      } else {
        setCardsPerPage(2); 
      }
    };

  
    updateCardsPerPage();

    window.addEventListener("resize", updateCardsPerPage);
    return () => window.removeEventListener("resize", updateCardsPerPage);
  }, []);

 
  const totalPages = Math.ceil(testimonials.length / cardsPerPage);


  const startIndex = activeIndex * cardsPerPage;
  const currentTestimonials = testimonials.slice(
    startIndex,
    startIndex + cardsPerPage
  );

  const handleDotClick = (pageIndex: number) => {
    setActiveIndex(pageIndex);
  };

  return (
    <section className="bg-[#0b1b36] py-16 px-4 sm:px-6 lg:px-8 text-white">
      <div className="max-w-6xl mx-auto text-center">
      
        <p className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-slate-300 uppercase">
          TESTIMONIALS
        </p>

     
        <h2 className="mt-2 text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
          What Our <span className="text-blue-600">Patients Have to Say</span>
        </h2>

       
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 text-left min-h-[380px]">
          {currentTestimonials.map((item) => (
            <div
              key={item.id}
              className="relative bg-white text-slate-900 rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col justify-between overflow-hidden transition-all duration-500 ease-in-out"
            >
    
              <Quote
                size={120}
                className="absolute right-4 bottom-12 text-slate-100 opacity-60 pointer-events-none rotate-180"
              />

              <div>
             
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className="fill-amber-400 text-amber-400"
                    />
                  ))}
                  <span className="ml-2 font-bold text-slate-800 text-base">
                    {item.rating.toFixed(1)}
                  </span>
                </div>

             
                <h3 className="mt-4 text-lg sm:text-xl font-bold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-3 text-slate-500 text-sm sm:text-base leading-relaxed relative z-10">
                  {item.review}
                </p>
              </div>

           
              <div className="mt-8 flex items-center gap-4 relative z-10">
                <div className="relative h-14 w-14 overflow-hidden rounded-full border-2 border-slate-100 shrink-0">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-base sm:text-lg">
                    {item.name}
                  </h4>
                  <p className="text-sm text-slate-400">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

       
        <div className="mt-10 flex justify-center items-center gap-2">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              aria-label={`Go to page ${index + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                activeIndex === index
                  ? "w-8 bg-blue-600"
                  : "w-6 bg-slate-100 hover:bg-slate-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}