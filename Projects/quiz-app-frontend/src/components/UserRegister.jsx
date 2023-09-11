/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
// import { memo, useEffect, useMemo, useState } from "react";

const UserRegister = (props) => {
    // const [userName,setUserName] = useState('')
    // const [userEmail,setUserEmail] = useState('')
    // const [userPassword,setUserPassword] = useState('')
    // const [userConfirmPassword,setUserConfirmPassword] = useState('')
    // const userData = {
    //        name:props.userName,
    //        email:props.userEmail,
    //        password:props.userPassword,
    //        confirm_password:props.userConfirmPassword
    //    }
    
    
    // useEffect(() => {
    // const submitHandler= () => {
        
    //     props.onSubmitData(userData)
    // }
    //     submitHandler()
    // },[])
    return (
    //   <div className="w-1/3 mt-12 bg-[#365314] p-12 rounded-lg">
    //     <form
    //       onSubmit={submitHandler}
    //       className="flex flex-col gap-12 text-white"
    //     >
    <>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              onChange={(e)=> props.userName(e.target.value)}
            //   value={userName}
              placeholder="Enter your name"
              className="py-2 text-black"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              onChange={(e)=> props.userEmail(e.target.value)}
            //   value={userEmail}
              placeholder="Enter your email"
              className="py-2 text-black"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="password">Password</label>
            <input
              type="text"
              id="password"
              onChange={(e)=> props.userPassword(e.target.value)}
            //   value={userPassword}
              placeholder="Enter password"
              className="py-2 text-black"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="text"
              id="confirmPassword"
              onChange={(e)=> props.userConfirmPassword(e.target.value)}
            //   value={userConfirmPassword}
              placeholder="Confirm your password"
              className="py-2 text-black"
            />
          </div>
          <button className="bg-[#78350F] border-[#78350F] rounded-lg py-3">
            Register
          </button>
    </>
    //     </form>
    //   </div>
    );
}

export default UserRegister