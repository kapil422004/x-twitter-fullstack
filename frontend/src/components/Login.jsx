import React, { useState } from "react";
import assets from "../assets/assets.js";

const Login = () => {

  const [isLogin, setIsLogin] = useState(true)

  const loginSingupHandler = () => {
    setIsLogin(!isLogin)
  }

  return (
    <div>
      <div className=" flex w-screen h-screen justify-center items-center ">
        <div className="felx items-center justify-evenly ">
          <img className="ml-5" width='400px' src={assets.x_logo} alt="" />
        </div>

        <div>
          <h1 className="mb-2 text-3xl font-bold">Join today. </h1>
          <form className="flex flex-col">

            {
              !isLogin && <>
               <input type="text" placeholder="Name" className="outline-blue-500 border border-gray-800 px-3 py-2 rounded-full my-1 "/>
            <input type="text" placeholder="Username" className="outline-blue-500 border border-gray-800 px-3 py-2 rounded-full my-1 "/>
              </>
            }

   

            <input type="email" placeholder="Email" className="outline-blue-500 border border-gray-800 px-3 py-2 rounded-full my-1 "/>
            <input type="password" placeholder="Password" className="outline-blue-500 border border-gray-800 px-3 py-2 rounded-full my-1 "/>
            <button className="bg-[#1D9BF0] border-none py-2 rounded-full text-lg text-white my-3">{ !isLogin ? "Sing up" : "Login"}</button>
            <h1> {!isLogin ? "Already have an account?" : "Don't have a account?" }<span className="font-semibold cursor-pointer text-blue-600 underline" onClick={loginSingupHandler}>{!isLogin ? " Login here!" : " Register Now!"}</span></h1>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Login;
