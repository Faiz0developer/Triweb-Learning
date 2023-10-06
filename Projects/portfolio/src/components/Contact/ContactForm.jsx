import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const [formFields, setFormFields] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const inputChangeHandler = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setFormFields({ ...formFields, [name]: value });
  };

  const submitDataHandler = async (e) => {
    e.preventDefault();
    if (
      formFields.name === "" ||
      formFields.email === "" ||
      formFields.subject === "" ||
      formFields.message === ""
    ) {
      toast.error("Please provide all information!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {
      await fetch(
        "https://contact-form-eb305-default-rtdb.asia-southeast1.firebasedatabase.app/user.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formFields),
        }
      );

      setFormFields({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      toast.success("Message sent successfully!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  return (
    <div className="mt-14">
      <h1 className="text-[#d97706] text-4xl">Get In Touch</h1>
      <form
        className="form flex flex-col gap-8 mt-6"
        onSubmit={submitDataHandler}
      >
        <input
          className="input"
          type="text"
          placeholder="Your Name"
          onChange={inputChangeHandler}
          name="name"
          value={formFields.name}
        />

        <input
          className="input"
          type="email"
          placeholder="Your Email"
          onChange={inputChangeHandler}
          name="email"
          value={formFields.email}
        />

        <input
          className="input"
          type="text"
          placeholder="Your Subject"
          onChange={inputChangeHandler}
          name="subject"
          value={formFields.subject}
        />

        <textarea
          className="input"
          name="message"
          cols="30"
          rows="6"
          placeholder="Message"
          onChange={inputChangeHandler}
          value={formFields.message}
        />
        {/* <input
          type="textarea"
          placeholder="Message"
          onChange={inputChangeHandler}
          name="message"
          value={formFields.message}
        /> */}

        <button>Send Message</button>
      </form>

      <ToastContainer
        theme="dark"
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default ContactForm;
