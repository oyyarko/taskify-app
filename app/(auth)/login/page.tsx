"use client";

import React, { useState } from "react";
import Text from "@/ui/Input/Text";
import { Button } from "@/ui/Button/button";
import { SignIn, SignUp } from "@clerk/nextjs";

const Login = () => {
  const [isLoginScreen, setIsLoginScreen] = useState(true); // 1:login
  const [file, setFile] = useState<File | null>();
  const [inputValues, setInputValues] = useState({
    name: null,
    email: null,
    password: null,
  });

  const handleSetSelectedFilter = (e: any, key: string) => {
    setInputValues((prev) => ({
      ...prev,
      [key]: e,
    }));
  };

  const handleSubmit = async (event: any) => {
    try {
      event.preventDefault();
      const formData = new FormData();
      if (file) {
        formData.append("file", file);
        formData.append("fileName", file.name);
      }
      // const  response = await
    } catch (err) {
      console.log("err :>> ", err);
    }
  };

  console.log("inputValues :>> ", file);

  return isLoginScreen ? <SignIn path="/sign-in"/> : <SignUp path="/sign-up"/>;
  // <div className="bg-white shadow-xl dark:shadow-slate-900 dark:bg-slate-800 text-black dark:text-white  rounded-3xl min-w-sm min-w-md w-96">
  //   <div className="font-semibold text-4xl px-10 py-5 w-full text-center rounded-tr-3xl rounded-tl-3xl text-black dark:text-amber-400 dark:bg-slate-900 bg-amber-400 p-3">
  //     {isLoginScreen ? "Login" : "Signup"}
  //   </div>
  //   <div className="p-6 pb-8 space-y-4">
  //     <Text
  //       name="name"
  //       label="Name"
  //       placeholder="Name"
  //       onChange={(e) => handleSetSelectedFilter(e.target.value, "name")}
  //     />
  //     <Text
  //       name="email"
  //       label="Email"
  //       placeholder="Email"
  //       onChange={(e) => handleSetSelectedFilter(e.target.value, "email")}
  //     />
  //     <Text
  //       name="password"
  //       label="Password"
  //       type="password"
  //       placeholder="Password"
  //       onChange={(e) => handleSetSelectedFilter(e.target.value, "password")}
  //     />
  //     {!isLoginScreen ? (
  //       <div>
  //         <Text
  //           name="profile"
  //           label="Profile Picture"
  //           type="file"
  //           placeholder="Upload Profile picture"
  //           className=" file:mr-5 file:py-1 file:px-3 file:border-[1px] file:!rounded-lg
  //                       file:text-xs file:font-medium
  //                       file:bg-amber-400 file:text-stone-700
  //                       hover:file:cursor-pointer hover:file:bg-amber-50
  //                       hover:file:text-amber-400"
  //           onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
  //             if (event.target.files !== null) {
  //               setFile(event && event?.target?.files[0]);
  //             }
  //           }}
  //         />
  //       </div>
  //     ) : null}
  //     <Button className="justify-center w-full">
  //       {isLoginScreen ? "Login" : "Signup"}
  //     </Button>
  //     {!isLoginScreen ? (
  //       <p className="text-center">
  //         Already have an account,{" "}
  //         <span
  //           className="underline text-amber-400 cursor-pointer"
  //           onClick={() => setIsLoginScreen(!isLoginScreen)}
  //         >
  //           Login now
  //         </span>
  //       </p>
  //     ) : (
  //       <p className="text-center">
  //         Do not have account,{" "}
  //         <span
  //           className="underline text-amber-400 cursor-pointer"
  //           onClick={() => setIsLoginScreen(!isLoginScreen)}
  //         >
  //           Signup now
  //         </span>
  //       </p>
  //     )}
  //   </div>
  // </div>
};

export default Login;
