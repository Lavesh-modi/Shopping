"use client";

import React from "react";
import { useRouter } from "next/navigation";

export default function OrderProduct() {
  const router = useRouter();

  const handleclick = () => {
    console.log("clicked the button ");
    router.push("/");
  };
  return (
    <div className="h-[100vh] w-[100vw] flex content-center justify-center ">
      <div className="h-[100%] w-[100%] flex-col flex items-center justify-center">
        <h2>Order Placed </h2>
        <button className="danger" onClick={handleclick}>
          Buy Now
        </button>
      </div>
    </div>
  );
}
