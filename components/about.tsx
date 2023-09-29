"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">I am a B. tech candidate pursuing <span className="font-medium">Computer Science and Engineering at Vellore Institute of Technology
        , Bhopal, India</span> specializing on Web-development, Artificial Intelligence and Machine Learning.
        My work focuses falls under the genre of public service meaning anyone and everyone can
        use my projects to avail any kind of service or to retrieve bare information. These include 
        AI integrated as well as full stack web applications that work with the latest frameworks as well as try
         to merge the field of AI and software development to achieve the best of both worlds. 
      </p>
      
      <p className="mb-3">
        
        After graduating with a degree in{" "}
        <span className="font-medium">Computer Science</span>, I want to continue my
        passion for programming. I learned{" "}
        <span className="font-medium">full-stack web development</span> as well 
        as sharpening my skills at the <span className="font-medium">machine learning front</span>{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core skills 
        are{" "}<span className="font-medium">
        Java, Python, React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with TypeScript and C++. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, competitive coding, community contributions and playing with my dog. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">C++ and sytems software design and development</span>. I'm also
        learning how to play the guitar.
      </p>
    </motion.section>
  );
}
