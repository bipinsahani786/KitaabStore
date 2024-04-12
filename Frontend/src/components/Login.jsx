import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from 'react-hot-toast';
function Login() {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const onSubmit = async (data) =>{
    const userInfo = {
   
    email:data.email,
    password:data.password,
  }
  await axios.post("http://localhost:5000/user/login" , userInfo)
  .then((res) =>{
    console.log(res.data)
    if(res.data){
      toast.success('logged in successfull');
      document.getElementById("my_modal_3").close()
      setTimeout(() => {
        window.location.reload()

      }, 2000)
    }
    localStorage.setItem("Users" , JSON.stringify(res.data.user));
  }).catch((err) => {
    if(err.response){
      console.log(err);
      
      toast.error("error" + err.response.data.message);
      setTimeout(() => {

      }, 3000)
    }
  });
}
  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box dark:bg-slate-900 dark:text-white ">
          <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
            {/* if there is a button in form, it will close the modal */}
            <Link
              to={"/"}
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById("my_modal_3").close()}
            >
              ✕
            </Link>

            <h3 className="font-bold text-lg">Login!</h3>
            <div className=" mt-4 space-y-3 ">
              <span>Email :</span>
              <br />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full dark:text-black px-4 border rounded-md  outline-none h-8"
                {...register("email", { required: true })}
              ></input>
              <br />
              {errors.email && (
                <span className=" text-red-500 text-sm">
                  This field is required
                </span>
              )}
              <br />
              <span>Password :</span>
              <br />
              <input
                {...register("password", { required: true })}
                type="password"
                placeholder="Enter your password "
                className="w-full px-3 border rounded-md h-8 dark:text-black outline-none "
              ></input>
              <br />
              {errors.password && (
                <span className=" text-red-500 text-sm">
                  This field is required
                </span>
              )}
            </div>
            <div className=" flex justify-around mt-4 ">
              <button className=" bg-pink-500 text-white rounded-md px-5 py-3 ">
                Login
              </button>
              <p>
                Not registered ?{" "}
                <Link
                  to={"/signup"}
                  className=" text-blue-500 underline cursor-pointer"
                >
                  Signup
                </Link>
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
