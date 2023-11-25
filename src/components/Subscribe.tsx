import React, { useState } from "react";
import Button from "./Button";

const Subscribe = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    const formData = new FormData();
    formData.append("Email", email);

    fetch(form.action, {
      method: form.method,
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          // Clear form data from cache on successful submission
          localStorage.removeItem("formData");
          setEmail("");
          alert("Form submitted successfully!");
        } else {
          // Error, do something
          alert("An error occurred. Please try again later.");
        }
      })
      .catch((error) => {
        console.log(error);
        alert("An error occurred. Please try again later.");
      });
  };

  return (
    <form
      onSubmit={handleSubmit}
      action="https://formsubmit.co/ajax/info@linkiswap.com"
      method="POST"
    >
      <div className="flex w-full gap-4 items-top justify-left max-sm:flex-wrap max-sm:flex-col max-sm:items-center max-sm:space-y-4">
        <div className="space-y-2.5">
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            placeholder="Enter your email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="relative text-black placeholder:text-gray-400 text-base font-normal w-full max-w-[360px] px-3.5 py-2.5 bg-white rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <p className="text-gray-400 text-sm font-normal leading-[21px] tracking-tight">
            <span>We care about your data in our </span>
            <span className="underline">Privacy Policy</span>
          </p>
        </div>
        <div className="max-w-[115px]">
          <Button text="Subscribe" option="submit" />
        </div>
      </div>
    </form>
  );
};

export default Subscribe;
