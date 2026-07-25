import { useState, useEffect } from "react";

export interface Booking {
  id: string;
  name: string;
  phone: string;
  appointmentType: string;
  dentist: string;
  date: string;
  time: string;
  notes: string;
}

export function useBookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    appointmentType: "Teeth Cleaning",
    dentist: "Dr. David Brown",
    date: "",
    time: "",
    notes: "",
  });

  const [bookedSlots, setBookedSlots] = useState<string[]>([]);
  const [isTimePickerOpen, setIsTimePickerOpen] = useState(false);
  const [submittedBooking, setSubmittedBooking] = useState<Booking | null>(null);

  const todayStr = new Date().toISOString().split("T")[0];

  
  useEffect(() => {
    if (!formData.date) {
      setBookedSlots([]);
      return;
    }
    const savedBookings = localStorage.getItem("brightsmile_bookings");
    if (savedBookings) {
      try {
        const parsed: Booking[] = JSON.parse(savedBookings);
        const slotsForDate = parsed
          .filter((b) => b.date === formData.date)
          .map((b) => b.time);
        setBookedSlots(slotsForDate);
      } catch (err) {
        console.error("Failed to load local bookings", err);
      }
    }
  }, [formData.date]);





const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
) => {
  const { name, value } = e.target;

  
  if (name === "name") {
    const lettersOnly = value.replace(/[^a-zA-Z\s'-]/g, "");
    setFormData((prev) => ({ ...prev, [name]: lettersOnly }));
    return;
  }

 
  if (name === "phone") {
    const digitsOnly = value.replace(/\D/g, "");
    setFormData((prev) => ({ ...prev, [name]: digitsOnly }));
    return;
  }

 
  setFormData((prev) => ({ ...prev, [name]: value }));
};




  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedDate = e.target.value;
    setFormData((prev) => ({ ...prev, date: selectedDate, time: "" }));
  };

  const selectTimeSlot = (slot: string) => {
    setFormData((prev) => ({ ...prev, time: slot }));
    setIsTimePickerOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.date || !formData.time) {
      alert("Please select both a date and an available time slot.");
      return;
    }

    const newBooking: Booking = {
      id: Date.now().toString(),
      ...formData,
    };

    const existing = localStorage.getItem("brightsmile_bookings");
    const bookingsList: Booking[] = existing ? JSON.parse(existing) : [];
    const updatedList = [...bookingsList, newBooking];
    localStorage.setItem("brightsmile_bookings", JSON.stringify(updatedList));

    setSubmittedBooking(newBooking);
  };

  const closeConfirmation = () => {
    setSubmittedBooking(null);
    setFormData({
      name: "",
      phone: "",
      appointmentType: "Teeth Cleaning",
      dentist: "Dr. David Brown",
      date: "",
      time: "",
      notes: "",
    });
  };

  return {
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
  };
}