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
      // console.log(response.data, "response data");
      // console.log("🚀 ~ axios.get ~ respons̥e:", response.data)
      // console.table(response.data,"data in the table")
      dispatch(data(response.data));
    
    });
      
  }, []);

function handleCart(produtData){
 dispatch(add(produtData))
}


  
  return (
    <div className=" mt-8 relative ">
      <div className="absolute my-px" style={{ top:'50px', right:'15px'}}>
      {/* <svg xmlns="http://www.w3.org/2000/svg" id="cart" x="0" y="0" version="1.1" viewBox="0 0 52 52" xml:space="preserve"><path d="m43.51 32.165 6.44-19.17a1 1 0 0 0-.14-.9.986.986 0 0 0-.81-.41H12.74l-1.29-5.21c-.47-1.66-2-2.82-3.72-2.82H3c-.55 0-1 .44-1 1 0 .55.45 1 1 1h4.73c.83 0 1.57.56 1.78 1.33l7.99 32.18a4.696 4.696 0 0 0-3.32 4.49c0 2.58 2.1 4.69 4.69 4.69 2.58 0 4.68-2.11 4.68-4.69 0-1-.31-1.93-.84-2.69h15.88c-.54.76-.85 1.69-.85 2.69 0 2.58 2.1 4.69 4.68 4.69 2.59 0 4.69-2.11 4.69-4.69 0-2.59-2.1-4.69-4.69-4.69-.04 0-.09 0-.13.01-.02-.01-.04-.01-.06-.01H19.51l-1.52-6.11h24.57c.43 0 .81-.28.95-.69z"></path> */}
      <button  onClick={() => router.push('/cart')}  className="bg-blue500">CART:{addProduct.length}</button>
      {/* </svg> */}
      </div>




  
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
                    <h5 className="text-xl tracking-tight text-slate-900 truncate">
                      {produtData.title}
                    </h5>
                  </a>
                  <div className="mt-2 mb-5 flex items-center justify-between">
                    <p>
                      <span className="text-3xl font-bold text-slate-900">
                        ${produtData.price}
                      </span>
                    
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