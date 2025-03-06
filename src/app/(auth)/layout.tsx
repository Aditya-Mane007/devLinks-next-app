import React from "react";
import "@/app/globals.css";
import Image from "next/image";

function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-[1440px] mx-auto w-screen h-screen flex justify-center items-center">
      <div className="w-full sm:w-[60%] md:w-[50%] lg:w-[45%] xl:w-[30%]">
        <div className="mb-8">
          <Image
            src="/assets/images/logo-devlinks-large.svg"
            width={100}
            height={100}
            alt="DevLinks"
            className="md:mx-auto ml-7 w-[10rem]"
          />
        </div>
        <div className="bg-whitePrimary p-8 rounded-lg">{children}</div>
      </div>
    </div>
  );
}

export default AuthLayout;
