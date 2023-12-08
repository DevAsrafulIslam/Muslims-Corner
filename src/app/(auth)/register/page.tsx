import Link from "next/link";
import React from "react";

const RegisterPage = () => {
  return (
    <div className="hero min-h-screen ]">
      <div className="hero-content flex-col max-w-lg w-full ">
        <div className="text-center ">
          <h1 className="text-5xl pb-5 font-bold  text-[#00000098]">
            Please Sign Up
          </h1>
        </div>
        <div className="card shrink-0 w-full max-w-sm">
          <form className="card-body backdrop-blur-lg rounded-md bg-[#2265ad]/30">
            <div className="form-control">
              <label className="label">
                <span className="label-text ">Name</span>
              </label>
              <input
                type="name"
                placeholder="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input  input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text ">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn hover:bg-[#32bdf4d8] bg-[#00abf0]">
                Sign Up
              </button>
            </div>
            <p className="text-center">
              Already have an Account{" "}
              <Link
                href="/login"
                className="hover:underline text-[#051be8e5]  hover:text-[#00000098]"
              >
                Login
              </Link>
            </p>
          </form>
        </div>
        <button className="text-white hover:text-[#00000098] bg-[#00abf0] text-2xl px-8 py-3 rounded-lg">
          <Link href="/">Go Home</Link>
        </button>
      </div>
    </div>
  );
};

export default RegisterPage;
