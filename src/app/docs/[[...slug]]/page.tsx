import React from 'react'

function docs({params}:{params:{slug:string[]}}) {

    if (params.slug?.length  === 1)  {
        return <h2>Viewing docs for the featuring {params.slug[0]}</h2>

        
    }else if (params.slug?.length === 2){
        return <h3>viewing the param feature :{params.slug[0]} and concept :{params.slug[1]}</h3>
        
    }else if(params.slug?.length === 3){
        return(
            <h3>Viewing the first:{params.slug[0]} and second :{params.slug[1]} and last :{params.slug[2]}</h3>
        )

    }
  return (



    
    <div>docs</div>
  )
}

export default docs