import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";

function Signup() {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <div className="flex h-screen items-center justify-center">
      <div className=" p-5 rounded-md w-[600px] ">
        <div className="modal-box ">
          <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
            {/* if there is a button in form, it will close the modal */}
            <Link
              to={"/"}
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </Link>
         
          <h3 className="font-bold text-lg">Signup!</h3>
          <div className=" mt-4 space-y-3 ">
            <span>Name :</span>
            <br />
            <input
            {...register("text", { required: true })}
              type="text"
              placeholder="Enter your full name"
              className="w-full px-4 border rounded-md  outline-none h-8"
            ></input><br/>
            {errors.text && <span className=" text-red-500 text-sm">This field is required</span>}
            <br />
            <span>Email :</span>
            <br />
            <input
            {...register("email", { required: true })}
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 border rounded-md  outline-none h-8"
            ></input><br/>
            {errors.email && <span className=" text-red-500 text-sm">This field is required</span>}
            <br />
            <span>Password :</span>
            <br />
            <input
            {...register("password", { required: true })}
              type="password"
              placeholder="Enter your password "
              className="w-full px-3 border rounded-md h-8  outline-none "
            ></input><br/>
            {errors.password && <span className=" text-red-500 text-sm">This field is required</span>}
          </div>
          <div className=" flex justify-around mt-4 ">
            <button className=" bg-pink-500 text-white rounded-md px-5 py-3 ">
              Signup
            </button>
            <p>
              Have an Account ?{" "}
              <button
                onClick={() =>
                  document.getElementById("my_modal_3").showModal()
                }
                className=" text-blue-500 underline cursor-pointer"
              >
                Login
              </button>
              <Login />
            </p>
          </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
