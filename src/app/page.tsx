import Image from 'next/image'
import React from 'react'

function Home() {
  const width = 1920;
  // const height = (width/1920) * 1200;  
  
  return (
    <>
    <div className=' w-[100vw]   overflow-x-hidden flex justify-center items-center'>
      <Image
        src="/online_shopping_2.jpg"
        alt="Picture of the author"
        width={width}
        height={0}
        style={{ objectFit:'cover',height: '100vh' }}/>
    {/* <div className='h-[100%]  flex justify-center  items-center'>Welcome to the Home!</div> for the center the div   */}
    </div>
    </>
  )
}

export default Home