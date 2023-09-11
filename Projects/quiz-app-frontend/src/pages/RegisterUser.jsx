/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";

import UserRegister from "../components/UserRegister";
import Styles from "../../styles/RegisterUser.module.css";

const RegisterUser = () => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userConfirmPassword, setUserConfirmPassword] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);
  const [regitrationsDetails, setRegitrationsDetails] = useState("");

  const userData = {
    name: userName,
    email: userEmail,
    password: userPassword,
    confirm_password: userConfirmPassword,
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setIsRegistered(false);
    const data = await fetch("http://localhost:3000/auth/", {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await data.json();
    setRegitrationsDetails(result);
    setIsRegistered(true);
  };

  if (isRegistered) {
    return (
      <div className="w-1/3 mt-12 bg-[#365314] p-12 rounded-lg">
        {regitrationsDetails.status === "success" ? (
          <p
            className={`${Styles.registerSuccesfull} text-[#4ADE80] px-12 py-3 text-2xl`}
          >
            {regitrationsDetails.message} ✔{" "}
          </p>
        ) : (
          <p
            className={`${Styles.registerSuccesfull} text-[#B91C1C] px-12 py-3 text-2xl`}
          >
            {`${regitrationsDetails.data[0].msg} !`}{" "}
          </p>
        )}
        <form
          onSubmit={submitHandler}
          className="flex flex-col gap-12 text-white"
        >
          <UserRegister
            onSubmitData={submitHandler}
            userName={setUserName}
            userEmail={setUserEmail}
            userPassword={setUserPassword}
            userConfirmPassword={setUserConfirmPassword}
          />
        </form>
      </div>
    );
  }
  return (
    <div className="w-1/3 mt-12 bg-[#365314] p-12 rounded-lg">
      <form
        onSubmit={submitHandler}
        className="flex flex-col gap-12 text-white"
      >
        <UserRegister
          onSubmitData={submitHandler}
          userName={setUserName}
          userEmail={setUserEmail}
          userPassword={setUserPassword}
          userConfirmPassword={setUserConfirmPassword}
        />
      </form>
    </div>
  );
};

export default RegisterUser;
