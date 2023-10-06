import React from "react";
import ContactCard from "./ContactCard";
import { phonesvg, emailsvg } from "./ContactIcons";

const ContactDetails = () => {
  return (
    <>
      <ContactCard
        title="Phone"
        firstVal="+91 7618234725"
        contactsvg={phonesvg}
      />
      <ContactCard
        title="Email"
        firstVal="faizansiddiquirmr@gmail.com"
        contactsvg={emailsvg}
      />
    </>
  );
};

export default ContactDetails;
