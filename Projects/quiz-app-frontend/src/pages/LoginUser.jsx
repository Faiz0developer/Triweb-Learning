import { useRef } from "react";

const LoginUser = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    const password = passwordRef.current.value;
    const email = emailRef.current.value;
    const loginDetals = {
      email,
      password,
    };
    fetch('http://localhost:3000/auth/login',{
        method:"POST",
        body:JSON.stringify(loginDetals),
        headers:{
            "Content-Type":"application/json",
        }
    }).then(response => response.json()).then(result=> console.log(result)).catch(err=> console.log(err))
  };

  return (
    <div className="w-1/3 mt-12 bg-[#365314] p-12">
      <form onSubmit={submitHandler} className="flex flex-col gap-12 text-white gap-10">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            ref={emailRef}
            placeholder="Enter your email"
            className="py-2 text-black"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="password">Password</label>
          <input
            type="text"
            id="password"
            ref={passwordRef}
            placeholder="Enter password"
            className="py-2 text-black"
          />
        </div>
        <button className="bg-[#78350F] py-3">Login</button>
      </form>
    </div>
  );
};

export default LoginUser;
