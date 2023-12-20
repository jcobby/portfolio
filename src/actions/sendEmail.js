"use server";

import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";

const resend = new Resend(process.env.RESEND_API_KEY);
// console.log(process.env.RESEND_API_KEY);
export const sendEmail = async (formData) => {
    console.log('sendEmail function called'); // Add this line

  const senderEmail = formData.senderEmail;
  const message = formData.message;
console.log('batman')
  // simple server-side validation
  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }
  console.log(senderEmail)

  let data;
  try {
    data = await resend.emails.send({
      from: "MY PORTFOLIO SITE <onboarding@resend.dev>",
      to: "justicecobbinah19@gmail.com",
      subject: "Message from PORTFOLIO contact form",
      reply_to: senderEmail,
      react: React.createElement(ContactFormEmail, {
        message: message,
        senderEmail: senderEmail,
      }),
    });
  } catch (error) {
    console.log(error)

    return {
      error: getErrorMessage(error),
    };
  }
  console.log(data)

  return {
    data,
    senderEmail,
    message,
  };
};

