import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Register = () => {
  return (
    <div className="container h-[100vh] w-full grid md:flex ">
      <Button className="mt-4">
        <Link href="/">Go Home</Link>
      </Button>
      <div className=" w-full  flex items-center justify-center">
        <div className=" flex flex-wrap space-y-4 md:w-1/2 border p-8">
          <h1 className="text-center text-3xl my-4">Login Now</h1>
          <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="Password" />
          <Button className="mt-4">Lon in</Button>
        </div>
      </div>
    </div>
  );
};

export default Register;
