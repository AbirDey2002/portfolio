import React from "react";
import { PiInstagramLogo } from "react-icons/pi";
import { FaBlogger } from "react-icons/fa";
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; 2023 Abir Dey. All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> built with
        React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS,
        Framer Motion, React Email & Resend, Netlify hosting.
      </p>
      <div className="flex justify-center">
        <a
          className="font-sm bg-white p-2 mt-1 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1] hover:scale-[1.1] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://www.instagram.com/honestly.abir"
        >
          <PiInstagramLogo />
        </a>{" "}
        <a
          className="font-sm bg-white p-2 mt-1 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1] hover:scale-[1.1] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://abir-blog.netlify.app"
        >
          <FaBlogger />
        </a>

      </div>
    </footer>
  );
}
