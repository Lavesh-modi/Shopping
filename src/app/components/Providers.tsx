"use client"

import { SessionProvider } from "next-auth/react"
import { ReactNode } from "react";
// import { Store } from "@reduxjs/toolkit";
import store from "../../Redux/Store"
 import { Provider } from "react-redux";


interface Props{
    children:ReactNode
}

const Providers = (props:Props) =>{

    return  <SessionProvider>
        <Provider store={store}    >{props.children} </Provider></SessionProvider>
}

export default Providers;