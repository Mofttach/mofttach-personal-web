import React from "react";
import { logos } from "../Details";
import { contactDetails } from "../Details";

function Contact() {
  const { email } = contactDetails;
  return (
    <main className="container mx-auto max-width section">
      <img className="h-20 mx-auto mb-10" src={logos.logo} alt="logo" />
      <h1 className="text-center text-2xl md:text-3xl lg:text-4xl text-dark-heading dark:text-light-heading font-semibold">
        For any questions please drop a mail
      </h1>
      <h3 className="text-center text-2xl md:text-2xl lg:text-3xl text-gradient font-semibold md:font-bold pt-5 md:pt-10 md:pb-6">
        <a href={`mailto:${email}`}>{email}</a>
      </h3>
    </main>
  );
}

export default Contact;
