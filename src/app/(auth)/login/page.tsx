import Link from "next/link";
import React from "react";

const LoginPage = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col max-w-lg w-full ">
        <div className="text-center ">
          <h1 className="text-5xl font-bold pb-5 text-[#00abf0]">Login now!</h1>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
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
                Login
              </button>
            </div>
            <p className="text-center">
              Don't have any Account{" "}
              <Link
                href="/register"
                className="hover:underline hover:text-[#051be8e5] text-[#32bdf4d8]"
              >
                Sign Up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
