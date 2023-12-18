"use client"

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";


function About() {

  const { ref } = useSectionInView("Home");
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
console.log('heyo this is ref ' + ref)

  return (
    <section className="max-w-[50rem] text-center"
    ref={ref}
    id="home"
    >
      <div className="flex mt-[10rem] justify-center items-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <Image
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=368&h=368&q=100"
              alt="heloo"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-24 w-24 rounded-full border-[0.35rem] object-cover border-white shadow-xl"
            />
          </motion.div>
          <motion.span className="absolute bottom-0 right-0 text-4xl"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", duration: 0.7, stiffness: 125, delay: 0.1  }}
          >👋</motion.span>
        </div>
      </div>

      <motion.h1 className="text-4xl pb-4 pt-4 px-4 font-medium !leading-[1.5]"
      initial={{ opacity: 0, y: 100}}
      animate={{ opacity: 1, y: 0}}>
        <span className="font-bold">Hello, I'm Ricardo.</span> I'm a{" "}
        <span className="font-bold">full-stack developer</span> with{" "}
        <span className="font-bold">8 years</span> of experience. I enjoy
        building <span className="italic">sites & apps</span>. My focus is{" "}
        <span className="underline">React (Next.js)</span>.
      </motion.h1>
      <motion.div className="flex gap-2 px-4 flex-col sm:flex-row items-center justify-center text-lg font-medium"
      initial={{ opacity: 0, y: 100}}
      animate={{ opacity: 1, y: 0}}
      transition={{ delay: 0.1}}
      >
        <Link
          href={"i am coming"}
          className="group text-white py-3 flex items-center bg-gray-900 gap-2 rounded-full hover:scale-110 focus:scale-110 hover:bg-gray-950 transition px-7 outline-none active:scale-105"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>
        <a
          href={"i am coming"}
          className="group text-gray-900 py-3 flex items-center bg-white border border-black/10 rounded-full hover:scale-110 focus:scale-110 hover:bg-white transition px-7"
        >
          Download CV
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>
        <a
          href={"i am coming"}
          className="group text-gray-900 p-4 flex border border-black/10 items-center bg-white rounded-full hover:scale-110 focus:scale-110 hover:bg-white transition "
        >
          <BsLinkedin />
        </a>
        <a
          href={"i am coming"}
          className=" text-gray-900 py-4 flex items-center bg-white rounded-full text-[1.35rem] border border-black/10 hover:scale-110 focus:scale-110 hover:bg-white transition px-4"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}

export default About;
