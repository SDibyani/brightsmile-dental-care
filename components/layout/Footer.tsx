
import Link from "next/link";
import {
  FaFacebookSquare,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { Clock3, Mail, MapPin, Phone } from "lucide-react";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About Us", href: "/about" },
  { name: "Book Visit", href: "/booking" },
  { name: "Contact", href: "/contact" },
];

const socials = [
  { icon: <FaFacebookSquare />, alt: "Facebook", href: "#" },
  { icon: <FaTwitter />, alt: "Twitter", href: "#" },
  { icon: <FaInstagram />, alt: "Instagram", href: "#" },
  { icon: <FaLinkedin />, alt: "LinkedIn", href: "#" },
];

export default function Footer() {
  return (
    <footer className="mt-20 bg-[#13294B] text-white">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo */}
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-600 text-3xl">
                🦷
              </div>

              <div>
                <h2 className="text-2xl font-bold">BrightSmile</h2>
                <p className="text-sm text-slate-300">Dental Care</p>
              </div>
            </Link>

            <p className="mt-6 leading-7 text-slate-300">
              Providing modern dental treatments with compassionate care and
              advanced technology to keep your smile healthy and confident.
            </p>



            <div className="mt-8 flex items-center gap-4">
  <Link
    href="#"
    className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 hover:bg-blue-600 hover:scale-110"
  >
    <FaFacebookSquare size={20} />
  </Link>

  <Link
    href="#"
    className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 hover:bg-sky-500 hover:scale-110"
  >
    <FaTwitter size={20} />
  </Link>

  <Link
    href="#"
    className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 hover:bg-pink-500 hover:scale-110"
  >
    <FaInstagram size={20} />
  </Link>

  <Link
    href="#"
    className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 hover:bg-blue-700 hover:scale-110"
  >
    <FaLinkedin size={20} />
  </Link>

  <Link
    href="#"
    className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 hover:bg-red-600 hover:scale-110"
  >
    <FaYoutube size={20} />
  </Link>
</div>
</div>



          {/* Contact */}
          <div>
            <h3 className="mb-6 text-xl font-semibold">Contact Info</h3>

            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <Phone
                  className="mt-1 text-blue-400"
                  size={18}
                />
                <span className="text-slate-300">
                  +91 98765 43210
                </span>
              </div>

              <div className="flex items-start gap-3">
                <Mail
                  className="mt-1 text-blue-400"
                  size={18}
                />
                <span className="text-slate-300">
                  info@brightsmile.com
                </span>
              </div>

              <div className="flex items-start gap-3">
                <MapPin
                  className="mt-1 text-blue-400"
                  size={18}
                />

                <span className="text-slate-300">
                  123 Smile Avenue
                  <br />
                  Bhubaneswar, Odisha
                  <br />
                  India
                </span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h3 className="mb-6 text-xl font-semibold">Clinic Hours</h3>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Clock3
                  className="mt-1 text-blue-400"
                  size={18}
                />

                <div className="space-y-3 text-slate-300">
                  <div className="flex justify-between gap-8">
                    <span>Monday - Friday</span>
                    <span>09:00 - 18:00</span>
                  </div>

                  <div className="flex justify-between gap-8">
                    <span>Saturday</span>
                    <span>09:00 - 14:00</span>
                  </div>

                  <div className="flex justify-between gap-8">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}

        <div className="mt-14 border-t border-white/10 pt-6">
          <div className="flex flex-col items-center justify-between gap-4 text-center text-sm text-slate-400 md:flex-row">
            <p>
              © {new Date().getFullYear()} BrightSmile Dental Care. All Rights
              Reserved.
            </p>

            <div className="flex gap-6">
              <Link
                href="#"
                className="hover:text-white"
              >
                Terms & Conditions
              </Link>

              <Link
                href="#"
                className="hover:text-white"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}