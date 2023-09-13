/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */

const UserRegister = (props) => {
  return (
    <>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          onChange={(e) => props.userName(e.target.value)}
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
          onChange={(e) => props.userEmail(e.target.value)}
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
          onChange={(e) => props.userPassword(e.target.value)}
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
          onChange={(e) => props.userConfirmPassword(e.target.value)}
          //   value={userConfirmPassword}
          placeholder="Confirm your password"
          className="py-2 text-black"
        />
      </div>
      <button className="bg-[#78350F] border-[#78350F] rounded-lg py-3">
        Register
      </button>
    </>
  );
};

export default UserRegister;
