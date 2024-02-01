"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from 'next/navigation'
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "@/Redux/CartSlice";
import { data } from "@/Redux/GlobalSlice";

function Product() {
  const router = useRouter()

  const dispatch = useDispatch();
  const product = useSelector((state) => state?.global?.value);
  const addProduct = useSelector((state) => state?.cart?.value);
  console.log(product, "product redux");
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      console.log(response.data, "response data");
      dispatch(data(response.data));
    
    });
  }, []);

function handleCart(produtData){
 dispatch(add(produtData))
}

// function handlePush(){
//   console.log("button click ")
//   router.push("/cart")
// }
  
  return (
    <div className="h-[100vh] w-[100vw]">
      <button  onClick={() => router.push('/cart')}  className="bg-blue500">CART:{addProduct.length}</button>
  
      <div className="flex justify-center content-center">
        <div className="grid grid-cols-4 gap-4">
          {product.map((produtData) => {
            return (
              <div
                key={produtData.id}
                className="relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md"
              >
                <a
                  className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"
                  href="#"
                >
                  <img
                    className="object-cover"
                    src={
                      produtData.image ||
                      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                    }
                    alt="product image"
                  />
                  <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
                    39% OFF
                  </span>
                </a>
                <div className="mt-4 px-5 pb-5">
                  <a href="#">
                    <h5 className="text-xl tracking-tight text-slate-900">
                      {produtData.title}
                    </h5>
                  </a>
                  <div className="mt-2 mb-5 flex items-center justify-between">
                    <p>
                      <span className="text-3xl font-bold text-slate-900">
                        ${produtData.price}
                      </span>
                      {/* <span className="text-sm text-slate-900 line-through">$699</span> */}
                    </p>
                    <div className="flex items-center">
                      {/* ... (rest of the rating stars) */}
                      <span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">
                        5.0
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
                    <button onClick={()=>{handleCart(produtData)} }>
                    
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}


export default Product;