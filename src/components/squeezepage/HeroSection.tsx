"use client";

import Image from "next/image";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

type FormInputs = {
  email: string;
};

const HeroSection: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    console.log(data);
    toast.error("Failed to send a copy!!");

    // toast.success("A copy has been sent to you !!!");
    reset();
  };

  return (
    <div className="container box-border h-screen max-h-[800px] mx-auto px-12 py-12 flex flex-col md:flex-row gap-8 items-center max-w-[1280px] ">
      {/* Left column */}
      <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8 flex flex-col gap-3">
        <p className="text-[1.5rem] text-gray-500">New</p>
        <div className="w-[4rem] my-3 bg-gray-500 h-[0.10rem]"></div>
        <h1 className="text-5xl font-bold mb-4">Why build from Scratch?</h1>
        <p className="text-lg mb-6">
          Streamline your processes with HNG boilerplate built for{" "}
          <span className="text-orange-500">efficiency</span> and{" "}
          <span className="text-orange-500">optimal productivity</span>.
        </p>
        <p className="text-sm text-gray-600 mb-2">
          Enter your Email to get Free Templates
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className="mb-4">
          <input
            type="email"
            placeholder="Enter email address"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
            className={`w-full outline-none px-4 py-2 border ${
              errors.email ? "border-red-500" : "border-gray-300"
            } rounded mb-2`}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mb-2">{errors.email.message}</p>
          )}
          <button
            type="submit"
            className="w-[250px] px-4 py-4 bg-orange-500 text-white text-xl rounded-lg mt-3 hover:bg-orange-600 transition duration-300"
          >
            Get Your Free Copy
          </button>
        </form>
      </div>

      {/* Right column */}
      <div className="md:w-1/2">
        <div className="relative w-full aspect-square">
          <Image
            src="/squeezepage/image.png"
            alt="Woman using laptop"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
      </div>
      <Toaster position="bottom-center" />
    </div>
  );
};

export default HeroSection;
