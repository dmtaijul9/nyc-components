import React from "react";

const signup = () => {
  return (
    <div className="min-h-screen text-black bg-gray-100  py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-md w-full sm:mx-auto">
        <div className="absolute inset-0 bg-[#518581] shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-16">
          <div className="max-w-md mx-auto">
            <div className="text-black text-center">
              <h1 className="text-2xl font-semibold ">Sign Up </h1>
            </div>
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <div className="relative">
                  <input
                    autocomplete="off"
                    id="name"
                    name="name"
                    type="text"
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600 focus:placeholder:text-gray-400"
                    placeholder="Jane Smith"
                  />
                  <label
                    for="name"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-[#518581] peer-focus:text-sm"
                  >
                    Name
                  </label>
                </div>
                <div className="relative">
                  <input
                    autocomplete="off"
                    id="email"
                    name="email"
                    type="text"
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                    placeholder="Email address"
                  />
                  <label
                    for="email"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-[#518581] peer-focus:text-sm"
                  >
                    Email Address
                  </label>
                </div>
                <div className="relative">
                  <input
                    autocomplete="off"
                    id="password"
                    name="password"
                    type="password"
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                    placeholder="Password"
                  />
                  <label
                    for="password"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-[#518581] peer-focus:text-sm"
                  >
                    Password
                  </label>
                </div>
                <div className="relative">
                  <input
                    autocomplete="off"
                    id="confirm_password"
                    name="confirm-password"
                    type="password"
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                    placeholder="Confirm Password"
                  />
                  <label
                    for="confirm_password"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-[#518581] peer-focus:text-sm"
                  >
                    Confirm Password
                  </label>
                </div>
                <div className="relative">
                  <button className="bg-[#518581] mt-3 w-full text-white rounded-md px-2 py-1">
                    Register
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full flex justify-center  text-xs">
            <a href="" className="">
              Already have an account? Login
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default signup;
