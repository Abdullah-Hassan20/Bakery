"use client";
import { Instagram, Facebook ,Phone} from 'lucide-react';
import Link from 'next/link';

function Footer() {
  return (
    <footer className="sticky bottom-0 border-t w-screen bg-gradient-to-t from-pink-400 to-pink-900 text-white py-1 px-4 sm:px-10 flex justify-between items-center gap-3">
      
      {/* Left: Branding + Contact Info */}
      <div className="flex flex-col sm:items-start items-center gap-1">
        <span className="text-sm sm:text-base font-medium max-sm:hidden">@ Nafees Cake House. All rights reserved.</span>
        <span className="text-md flex gap-2"><Phone/>+92 320 2797500</span> {/* Replace with your real contact */}
      </div>

      {/* Right: Social Media */}
      <div className="flex flex-col items-center sm:items-end gap-2">
        <h2 className="font-bold text-xl">Reach us</h2>
        <div className="flex gap-4 items-center justify-center">
          <Link
            href="https://www.instagram.com/nafees_cakeshouse"
            target="_blank"
            aria-label="Instagram"
          >
            <Instagram className="w-6 h-6 hover:text-pink-500 transition-colors" />
          </Link>
          <Link
            href="https://www.facebook.com/p/Nafees-Cake-House-100063778793458/"
            target="_blank"
            aria-label="Facebook"
          >
            <Facebook className="w-6 h-6 hover:text-blue-500 transition-colors" />
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

