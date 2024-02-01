import React from 'react'
// import { useRouter } from 'next/router'

export default function Review({params}:{

  params:{reviewid:string,
  produtid: string}
})


 {
  
 
  
  return (
    <div>
      Reviews No:{params.reviewid} of the product No:{params.produtid}
    </div>
  )
}
