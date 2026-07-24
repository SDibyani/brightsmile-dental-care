"use client";

import React from "react";
import { Calendar, Clock, Phone, CheckCircle2, X } from "lucide-react";
import { useBookingForm } from "@/hooks/useBookingForm";
import { ALL_TIME_SLOTS, APPOINTMENT_TYPES, DENTISTS } from "@/data/bookingData";

export default function BookingSection() {
  const {
    formData,
    todayStr,
    bookedSlots,
    isTimePickerOpen,
    submittedBooking,
    setIsTimePickerOpen,
    handleChange,
    handleDateChange,
    selectTimeSlot,
    handleSubmit,
    closeConfirmation,
  } = useBookingForm();

  return (
    <section className="bg-[#f8f9fc] py-16 px-4 sm:px-6 lg:px-8 text-slate-800">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs sm:text-sm font-semibold tracking-[0.2em] text-slate-500 uppercase">
          BOOK AN APPOINTMENT
        </p>

        <div className="mt-2 flex flex-col lg:flex-row justify-between items-start gap-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
            Effortless Online Booking <br />
            <span className="text-blue-600">for Your Dental Visit</span>
          </h2>
          <p className="max-w-md text-slate-500 text-sm sm:text-base leading-relaxed">
            Choose your preferred date, select a convenient time slot, and schedule your appointment with our expert team.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <form onSubmit={handleSubmit} className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-5">
          
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Your Name *</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Ex. John Doe"
                className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-sm outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition"
              />
            </div>

      
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Phone Number *</label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter Phone Number"
                className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-sm outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition"
              />
            </div>

           
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Type of Appointment *</label>
              <select
                name="appointmentType"
                value={formData.appointmentType}
                onChange={handleChange}
                className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-sm outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition"
              >
                {APPOINTMENT_TYPES.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

     
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Preferred Dentist *</label>
              <select
                name="dentist"
                value={formData.dentist}
                onChange={handleChange}
                className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-sm outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition"
              >
                {DENTISTS.map((doc) => (
                  <option key={doc} value={doc}>
                    {doc}
                  </option>
                ))}
              </select>
            </div>

           
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Preferred Date *</label>
              <div className="relative">
                <input
                  type="date"
                  name="date"
                  min={todayStr}
                  required
                  value={formData.date}
                  onChange={handleDateChange}
                  className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-sm outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition pr-10"
                />
                <Calendar className="absolute right-3.5 top-3.5 text-slate-400 pointer-events-none" size={18} />
              </div>
            </div>

           
            <div className="relative">
              <label className="block text-sm font-bold text-slate-700 mb-2">Preferred Time *</label>
              <button
                type="button"
                disabled={!formData.date}
                onClick={() => setIsTimePickerOpen(!isTimePickerOpen)}
                className={`w-full text-left rounded-2xl border bg-white px-4 py-3.5 text-sm outline-none transition flex items-center justify-between ${
                  !formData.date
                    ? "opacity-50 cursor-not-allowed border-slate-200 text-slate-400"
                    : "border-slate-200 text-slate-800 hover:border-blue-600"
                }`}
              >
                <span>
                  {formData.time
                    ? formData.time
                    : formData.date
                    ? "Select Time Slot"
                    : "Select Date First"}
                </span>
                <Clock size={18} className="text-slate-400" />
              </button>

              {isTimePickerOpen && formData.date && (
                <div className="absolute left-0 top-full mt-2 w-full z-30 bg-white rounded-2xl shadow-2xl border border-slate-100 p-4 max-h-60 overflow-y-auto">
                  <p className="text-xs font-semibold text-slate-400 mb-2">
                    Available Slots for {formData.date}:
                  </p>
                  <div className="grid grid-cols-3 gap-2">
                    {ALL_TIME_SLOTS.map((slot) => {
                      const isBooked = bookedSlots.includes(slot);
                      const isSelected = formData.time === slot;

                      return (
                        <button
                          key={slot}
                          type="button"
                          disabled={isBooked}
                          onClick={() => selectTimeSlot(slot)}
                          className={`py-2 px-1 text-xs rounded-xl font-medium transition ${
                            isBooked
                              ? "bg-slate-100 text-slate-300 line-through cursor-not-allowed"
                              : isSelected
                              ? "bg-blue-600 text-white font-bold"
                              : "bg-blue-50 text-blue-700 hover:bg-blue-600 hover:text-white"
                          }`}
                        >
                          {slot}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

           
            <div className="sm:col-span-2">
              <label className="block text-sm font-bold text-slate-700 mb-2">Special Requests or Notes *</label>
              <textarea
                name="notes"
                rows={4}
                required
                value={formData.notes}
                onChange={handleChange}
                placeholder="Enter here.."
                className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-sm outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition resize-none"
              ></textarea>
            </div>

            <div className="sm:col-span-2 pt-2">
              <button
                type="submit"
                className="bg-blue-600 text-white font-bold px-8 py-4 rounded-full hover:bg-blue-700 transition shadow-lg shadow-blue-500/20 active:scale-95"
              >
                Book an Appointment
              </button>
            </div>
          </form>

          <div className="space-y-6">
            <div className="bg-blue-600 text-white rounded-3xl p-6 sm:p-8 shadow-xl">
              <h3 className="text-xl font-bold mb-6">Clinic Hours</h3>
              <div className="space-y-4 text-sm font-medium">
                <div className="flex justify-between items-center border-b border-blue-500/40 pb-3">
                  <span className="text-blue-100">Monday to Friday</span>
                  <span>09:00 - 22:00</span>
                </div>
                <div className="flex justify-between items-center border-b border-blue-500/40 pb-3">
                  <span className="text-blue-100">Saturday</span>
                  <span>11:00 - 20:00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-blue-100">Sunday</span>
                  <span className="bg-blue-700 px-3 py-1 rounded-md text-xs font-semibold">Closed</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 shadow-md border border-slate-100 flex items-center gap-4">
              <div className="h-12 w-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                <Phone size={22} />
              </div>
              <div>
                <p className="text-xs text-slate-400 font-medium">Your Smile, Our Priority</p>
                <h4 className="text-lg font-bold text-slate-900">24/7 Emergency</h4>
                <p className="text-sm font-bold text-blue-600">+91 98765 43210</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    
      {submittedBooking && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl relative">
            <button onClick={closeConfirmation} className="absolute right-5 top-5 text-slate-400 hover:text-slate-600">
              <X size={20} />
            </button>

            <div className="flex items-center gap-3 text-emerald-600 mb-4">
              <CheckCircle2 size={32} />
              <h3 className="text-2xl font-bold text-slate-900">Appointment Confirmed!</h3>
            </div>

            <p className="text-slate-500 text-sm mb-6">
              Thank you, <strong className="text-slate-800">{submittedBooking.name}</strong>. Your appointment has been scheduled.
            </p>

            <div className="bg-slate-50 rounded-2xl p-4 space-y-3 text-sm text-slate-700 border border-slate-100 mb-6">
              <div className="flex justify-between">
                <span className="text-slate-400">Date:</span>
                <span className="font-semibold text-slate-900">{submittedBooking.date}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Time:</span>
                <span className="font-semibold text-slate-900">{submittedBooking.time}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Service:</span>
                <span className="font-semibold text-slate-900">{submittedBooking.appointmentType}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Dentist:</span>
                <span className="font-semibold text-slate-900">{submittedBooking.dentist}</span>
              </div>
            </div>

            <button
              onClick={closeConfirmation}
              className="w-full bg-blue-600 text-white font-bold py-3.5 rounded-2xl hover:bg-blue-700 transition"
            >
              Done
            </button>
          </div>
        </div>
      )}
    </section>
  );
}