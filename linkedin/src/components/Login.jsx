import React from "react";

const Login = () => {
  return (
    <div>
      <nav className="w-full grid grid-cols-3 mt-6 ">
        <a href="/index.html">
          <img
            className="w-[150px] object-contain ml-[10px]"
            src="/images/login-logo.svg"
            alt="logoLinkedIn"
          />
        </a>
        <div className=" font-semibold  col-span-2 flex justify-center items-center gap-[40px] ">
          <a href="/" className="opacity-40">
            Join now
          </a>
          <a
            href="/"
            className=" rounded-[15px] border-[2px] border-blue-500 py-[3px] px-[14px] text-blue-500  "
          >
            sign in
          </a>
        </div>
      </nav>

      <section>
        <div>
          <h1>welcome to your professional community</h1>
          <a href="/" className="flex gap-1 border-[3px]">
            <img src="/images/google.svg" alt="googleBTN" /> Sign in With Google
          </a>
        </div>
      </section>
    </div>
  );
};

export default Login;
