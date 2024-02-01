import React from 'react'

function produtList({params}:{
    params:{produtid:String}
}) {
  return (

    <div className='h-[100vh] w-[100%] flex justify-center content-center'>
    <div className=' h-[100%]font-bold flex items-center justify-center'>PAGE NO:{params.produtid}</div>
    </div>
  )
}

export default produtList