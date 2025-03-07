"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function page() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const emailRegex = /[a-zA-Z0-9.@#$%^&*_]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2}/;
  const [emailAddress, setEmailAddress] = useState({
    value: "",
    error: "",
  });

  const [password, setPassword] = useState({
    value: "",
    error: "",
  });

  const [confirmPassword, setConfirmPassword] = useState({
    value: "",
    error: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!emailAddress.value) {
      setEmailAddress({
        value: "",
        error: "Can't be empty",
      });
    }

    if (emailAddress.value && !emailRegex.test(emailAddress.value)) {
      setEmailAddress({
        value: emailAddress.value,
        error: "Invalid email address",
      });
    }
    if (!password.value) {
      setPassword({
        value: "",
        error: "Can't be empty",
      });
    }

    if (!confirmPassword.value) {
      setConfirmPassword({
        value: "",
        error: "Can't be empty",
      });
    }

    if (confirmPassword.value && confirmPassword.value !== password.value) {
      setConfirmPasswordVisible(true);
      setConfirmPassword({
        value: confirmPassword.value,
        error: "Password does not match",
      });
    }

    if (password.value && password.value.length < 8) {
      setPasswordVisible(true);
      setPassword({
        value: password.value,
        error: "Password must be At least 8 characters",
      });
    }

    if (confirmPassword.value && confirmPassword.value.length < 8) {
      setConfirmPasswordVisible(true);
      setConfirmPassword({
        value: confirmPassword.value,
        error: "Password must be At least 8 characters",
      });
    }
  };
  return (
    <div>
      <div>
        <h1 className="font-bold text-2xl text-blackPrimary mb-1">
          Create account
        </h1>
        <p className="font-extralight text-blackSecondary text-[.85rem]">
          Let’s get you started sharing your links!
        </p>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="my-4">
            <label htmlFor="email" className="label">
              Email Address
            </label>
            <div className="relative">
              <Image
                src="/assets/images/icon-email.svg"
                width={20}
                height={20}
                alt="Email"
                className="absolute top-4 left-3"
              />
              <input
                type="text"
                name="email"
                placeholder="e.g. harry@hogwarts.com"
                value={emailAddress.value}
                onChange={(e) => {
                  setEmailAddress({ value: e.target.value, error: "" });
                }}
                className={`${emailAddress.error && "has-error"}`}
              />
              {emailAddress.error && (
                <p className="text-redPrimary absolute top-4 right-2 text-[.75rem]">
                  {emailAddress.error}
                </p>
              )}
            </div>
          </div>
          <div className="my-4">
            <label htmlFor="password" className="label">
              Create Password
            </label>
            <div className="relative">
              <Image
                src="/assets/images/icon-password.svg"
                width={20}
                height={20}
                alt="Email"
                className="absolute top-4 left-3"
              />
              <input
                type={passwordVisible ? "text" : "password"}
                name="password"
                value={password.value}
                onChange={(e) => {
                  setPassword({ value: e.target.value, error: "" });
                }}
                placeholder="e.g. At least 8 characters"
                className={`${password.error && "has-error"}`}
              />
              {!password.error && (
                <p
                  className="absolute top-[1.1rem] right-2 cursor-pointer"
                  onClick={() => setPasswordVisible(!passwordVisible)}
                >
                  {passwordVisible ? (
                    <FaEye className="text-blackSecondary" />
                  ) : (
                    <FaEyeSlash className="text-blackSecondary" />
                  )}
                </p>
              )}
              {password.error && (
                <p className="text-redPrimary absolute top-4 right-2 text-[.75rem]">
                  {password.error}
                </p>
              )}
            </div>
          </div>
          <div className="my-4">
            <label htmlFor="password" className="label">
              Confirm Password
            </label>
            <div className="relative">
              <Image
                src="/assets/images/icon-password.svg"
                width={20}
                height={20}
                alt="Email"
                className="absolute top-4 left-3"
              />
              <input
                type={confirmPasswordVisible ? "text" : "password"}
                name="password"
                value={confirmPassword.value}
                onChange={(e) => {
                  setConfirmPassword({ value: e.target.value, error: "" });
                }}
                placeholder="e.g. At least 8 characters"
                className={`${confirmPassword.error && "has-error"}`}
              />
              {!confirmPassword.error && (
                <p
                  className="absolute top-[1.1rem] right-2 cursor-pointer"
                  onClick={() =>
                    setConfirmPasswordVisible(!confirmPasswordVisible)
                  }
                >
                  {confirmPasswordVisible ? (
                    <FaEye className="text-blackSecondary" />
                  ) : (
                    <FaEyeSlash className="text-blackSecondary" />
                  )}
                </p>
              )}
              {confirmPassword.error && (
                <p className="text-redPrimary absolute top-4 right-2 text-[.75rem]">
                  {confirmPassword.error}
                </p>
              )}
            </div>
          </div>
          <button type="submit">Create new account</button>
        </form>
        <p className="mt-4 text-[.85rem] text-center">
          Alredy have an account?{" "}
          <Link href="/sign-in" className="text-purplePrimary">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default page;
