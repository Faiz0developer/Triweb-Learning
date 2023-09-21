import React from "react";
import ContactCard from "./ContactCard";
import { phonesvg, emailsvg, addresssvg } from "./ContactIcons";

const ContactDetails = () => {
  return (
    <>
      <ContactCard
        title="Phone"
        firstVal="+91 8755855465"
        secondVal="+91 7618234725"
        contactsvg={phonesvg}
      />
      <ContactCard
        title="Email"
        firstVal="faizansiddiquirmr@gmail.com"
        secondVal="faizansiddiquirnr@gmail.com"
        contactsvg={emailsvg}
      />
      <ContactCard
        title="Address"
        firstVal="Indra Colony, Ramnagar, "
        secondVal="Nainital, India"
        contactsvg={addresssvg}
      />
    </>
  );
};

export default ContactDetails;
