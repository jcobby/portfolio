"use client";

import React from "react";
import SectionHeading from "./sectionheading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "../actions/sendEmail";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useState } from 'react';





export default function Contact() {
  const { ref } = useSectionInView("Contact");
  const [Clicked, setClicked] = useState(false);

  const handleEmail = (e) => {
e.preventDefault()
emailFormik.handleSubmit()
console.log(emailFormik.errors)

setClicked(true)
setTimeout(() => {
        setClicked(false);
      }, 5000);


  }
// use useformik

  const emailFormik = useFormik({
    initialValues: {
      senderEmail: "",
      message: "",
    },
    validationSchema: Yup.object({
      senderEmail: Yup.string().email("Invalid email address").required("Required"),
      message: Yup.string().required("Required"),
    }),
    onSubmit: async (values) => {
// alert values
      alert(JSON.stringify(values, null, 2));
      // set timer to change value of clicked
      const { data, error, senderEmail, message } = await sendEmail(values)
console.log('helloosdfads')
      console.log("Data:", data);
      console.log("Error:", error);
      console.log("send:", senderEmail);
      console.log("mess:", message);
    }
  })


  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact me</SectionHeading>

      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:example@gmail.com">
          example@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <form
        className="mt-10 flex flex-col dark:text-black"
      >
        <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
          // onBlur={emailFormik.handleBlur}
          onChange={emailFormik.handleChange}
          value={emailFormik.values.senderEmail}
        />
         {
                  Clicked &&        emailFormik.errors.senderEmail ? (
                            <div className="text-red-500 text-xs italic">
                              {emailFormik.errors.senderEmail}
                            </div>
                          ) : null}
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
          // onBlur={emailFormik.handleBlur}
          onChange={emailFormik.handleChange}
          value={emailFormik.values.message}
          type='text'
        />
         {
                     Clicked &&        emailFormik.errors.message ? (
                            <div className="text-red-500 text-xs italic">
                              {emailFormik.errors.message}
                            </div>
                          ) : null}
        <button className="py-5 px-7 bg-orange-600 hover:bg-red-300"
        onClick={handleEmail}>
          Submit
          </button>
      </form>
    </motion.section>
  );
}