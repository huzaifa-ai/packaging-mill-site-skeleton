'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center h-16">
     

          <div className="hidden md:flex space-x-8">
            <Link
              href="/"
              className="text-[#374151] hover:text-[#1E3A8A] font-medium transition-colors"
            >
              Home
            </Link>
            <Link
              href="/manufacturing"
              className="text-[#374151] hover:text-[#1E3A8A] font-medium transition-colors"
            >
              Manufacturing
            </Link>
            <Link
              href="/products"
              className="text-[#374151] hover:text-[#1E3A8A] font-medium transition-colors"
            >
              Products
            </Link>

            <Link
              href="/sustainability"
              className="text-[#374151] hover:text-[#1E3A8A] font-medium transition-colors"
            >
              Sustainability
            </Link>

            <Link
              href="/certifications"
              className="text-[#374151] hover:text-[#1E3A8A] font-medium transition-colors"
            >
              Certifications
            </Link>
            <Link
              href="/Industries"
              className="text-[#374151] hover:text-[#1E3A8A] font-medium transition-colors"
            >
              Industries
            </Link>
            <Link
              href="/contact"
              className="text-[#374151] hover:text-[#1E3A8A] font-medium transition-colors"
            >
              Contact
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-[#374151] hover:text-[#1E3A8A]"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 pt-2 pb-4 space-y-2">
            <Link
              href="/"
              className="block py-2 text-[#374151] hover:text-[#1E3A8A] font-medium"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/manufacturing"
              className="block py-2 text-[#374151] hover:text-[#1E3A8A] font-medium"
              onClick={() => setIsOpen(false)}
            >
              Manufacturing
            </Link>
            <a
              href="#contact"
              className="block py-2 text-[#374151] hover:text-[#1E3A8A] font-medium"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
