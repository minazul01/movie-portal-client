import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Register = () => {


    const [error, setError] = useState(null);


  const handleClick = (e) => {
    e.preventDefault();

    setError("");

    const event = e.target;
    const userName = event.name.value;
    const image = event.image.value;
    const email = event.email.value;
    const password = event.password.value;
    const conPassword = event.conPassword.value;

    // password and confirm password validation
    if (password !== conPassword) {
      toast.error,
        setError("password and confirm password did not match !", {
          position: "top-center",
        });
      return;
    }
    // password speacial chearcter and at least 1 upper case and at least 6 character and at least 1 number
    if (password.length < 6) {
      toast.error, setError("Password must be at least 6 characters long");
      return;
    }

    if (!/[A-Z]/.test(password)) {
      toast.error("Password must contain at least one uppercase letter");
      return;
    }

    if (!/[0-9]/.test(password)) {
      toast.error("Password must contain at least one number");
      return;
    }

    if (!/[!@#$%^&*]/.test(password)) {
      toast.error("Password must contain at least one special character");
      return;
    }

    // If all valid
    toast.success("Congratulation! You are Registering...");

  
  };
  return (
    <div>
      <form action="" onSubmit={handleClick}>
        <h1 className="text-4xl font-bold text-center my-10">
          Please Registe Now!
        </h1>
        <div>
          <div className="hero min-h-screen my-10">
            <div className="text-center lg:text-left"></div>
            <div className="  shadow-2xl">
              <div className="p-10 bg-gray-300 rounded-lg w-full">
                <fieldset className="fieldset">
                  <legend className="fieldset-legend text-base font-medium text-gray-500">
                    User name?
                  </legend>
                  <input
                    type="text"
                    name="name"
                    className="input w-[250px] md:w-[750px] h-10 md:h-[60px] text-lg px-4 rounded-2xl"
                    placeholder="name"
                  />
                  <legend className="fieldset-legend text-base font-medium text-gray-500">
                    Image
                  </legend>
                  <input
                    type="text"
                    name="image"
                    className="input w-[250px] md:w-[750px] h-10 md:h-[60px] text-lg px-4 rounded-2xl"
                    placeholder="image"
                  />
                  <label className="label text-base font-medium text-gray-500">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="input w-[250px] md:w-[750px] h-10 md:h-[60px] text-lg px-4 rounded-2xl"
                    placeholder="email"
                  />
                  <label className="label text-base font-medium text-gray-500">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    className="input w-[250px] md:w-[750px] h-10 md:h-[60px] text-lg px-4 rounded-2xl"
                    placeholder="password"
                  />
                  <label className="label text-base font-medium text-gray-500">
                    Password
                  </label>
                  <input
                    type="password"
                    name="conPassword"
                    className="input w-[250px] md:w-[750px] h-10 md:h-[60px] text-lg px-4 rounded-2xl"
                    placeholder="conPassword"
                  />
                  {error && <p className="text-red-400 text-xs">{error}</p>}
                  <button className="btn btn-neutral mt-4 hover:bg-gray-50">
                    Register Now
                  </button>
                  <p className="text-base font-normal text-center">or</p>
                  <Link to="/login" className="text-center">
                    <button className="text-xl font-medium hover:underline cursor-pointer">
                      Login
                    </button>
                  </Link>
                </fieldset>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
