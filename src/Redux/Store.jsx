import { configureStore } from '@reduxjs/toolkit'

import  cartSlice  from './CartSlice'
import globalSlice from  './GlobalSlice';

 const store = configureStore({
  reducer: {
   cart:cartSlice,
   global:globalSlice,
  },
})


export default store;