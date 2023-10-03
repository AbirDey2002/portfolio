import React from "react";
import { PiCertificateDuotone } from "react-icons/pi";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import dalleImg from "@/public/dalle.png";
import rmtdevImg from "@/public/projectportfolio.png";
import wordanalyticsImg from "@/public/ethereumtransfer.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated Higher Secondary",
    location: "Green Valley High, Vadodara, India",
    description:
      "I graduated 10 and 10+2 with a percentage score of 94.2 and 84.8 respectively. Wanted to pursue CS and immediately got a position at VIT",
    icon: React.createElement(PiCertificateDuotone),
    date: "2020",
  },
  {
    title: "CSE, specialization in AI and ML",
    location: "VIT Bhopal, Bhopal, India",
    description:
      "Currently pursuing Computer Science and Engineering, senior year at VIT Bhopal, learnt a lot of languages and technologies, participated in a lot of co-curricular events and am still having a great experience learning",
    icon: React.createElement(LuGraduationCap),
    date: "2020 - present",
  },
  {
    title: "Machine Learning Intern",
    location: "TeachNook India, India",
    description:
      "Developed a handwriting recognition model to extract image information into written text. Used GAN and dynamic convolution layers to reconstructing the image using the intermediate layer vectors and multi-dimensional feature tensors and classified the reconstructed images into the correct classes",
    icon: React.createElement(CgWorkAlt),
    date: "2022 (September - November)",
  },
  {
    title: "Software Developer and ML engineer",
    location: "Bhopal, India",
    description:
      "I'm a full-stack developer. My stack includes React, Next.js, TypeScript, Tailwind and MongoDB. I also excel at Java and Python as well as learning C++ for system software positions granting my profile extra flexibility. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "AI Image Generation integrated MERN stack",
    description:
      "I worked as a full-stack developer on this project for 4 months. Uses techologies such as DALL-E and cloudinary",
    tags: ["React", "Cloudinary", "MongoDB", "Tailwind", "OpenAI", "MERN"],
    imageUrl: dalleImg,
  },
  {
    title: "Project Portfolio Manager",
    description:
      "Full stack portfolio management website. I was the back-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "GraphQL"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Skrypto Hub",
    description:
      "A crypto-currency Full Stack application with Ethereum wallet-to-wallet transfer route and other features such as subscriptions, giphy, etc",
    tags: ["React", "Firebase", "Solidity", "Tailwind", "Goerli"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "Java",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Firebase",
  "GraphQL",
  "Express",
  "Python",
  "PyTorch",
  "Framer Motion",
] as const;
