import { useRef } from "react";

const RegisterUser = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const password = passwordRef.current.value;
    const email = emailRef.current.value;
    const confirm_password = confirmPasswordRef.current.value;
    const userDetails = {
        name,
        email,
        password,
        confirm_password
    }

    fetch('http://localhost:3000/auth/',{
        method:"POST",
        body:JSON.stringify(userDetails),
        headers: {
            "Content-Type": "application/json",
          },
    }).then(result => result.json()).then((res => console.log(res))).catch(err=>console.log(err))

    console.log(userDetails)
  };
  return (
    <div className="w-1/3 mt-12 bg-[#365314] p-12">
      <form onSubmit={submitHandler} className="flex flex-col gap-12 text-white">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" ref={nameRef} placeholder="Enter your name" className="py-2 text-black"/>
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="email">Email</label>
          <input type="text" id="email" ref={emailRef} placeholder="Enter your email" className="py-2 text-black"/>
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="password">Password</label>
          <input type="text" id="password" ref={passwordRef} placeholder="Enter password" className="py-2 text-black"/>
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input type="text" id="confirmPassword" ref={confirmPasswordRef} placeholder="Confirm your password" className="py-2 text-black"/>
        </div>
        <button className="bg-[#78350F] py-3">Register</button>
      </form>
    </div>
  );
};

export default RegisterUser;
