import React from "react";
import ContactCard from "./ContactCard";
import { phonesvg, emailsvg } from "./ContactIcons";

const ContactDetails = () => {
  return (
    <div className="min-[800px]:w-1/2">
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
    </div>
  );
};

export default ContactDetails;
