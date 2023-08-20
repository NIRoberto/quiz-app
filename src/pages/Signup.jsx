import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {};

  return (
    <div className="flex justify-center h-screen items-center  border">
      <form
        className="bg-white w-2/3 md:w-3/12 p-6 rounded shadow-md"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="text-2xl font-semibold mb-4">Signup</h2>
        <div className="mb-4">
          <label className="label">Email</label>
          <input
            type="email"
            className={`w-full p-2 input bg-white border border-gray-200 rounded ${
              errors.email ? "border-red-500" : "border"
            }`}
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="label">Password</label>
          <input
            type="password"
            className={` w-full p-2 input bg-white border border-gray-200 rounded  ${
              errors.password ? "border-red-500" : "border"
            }`}
            {...register("password", { required: "Password is required" })}
          />
          {errors.password && (
            <p className="text-red-500 text-xs mt-1">
              {errors.password.message}
            </p>
          )}
        </div>
        <button
          type="submit"
          className="w-full btn outline-none border-none bg-yellow-500 text-white p-2 rounded hover:bg-yellow-600"
        >
          Signup
        </button>
        <p className="mt-4 text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-yellow-500">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
