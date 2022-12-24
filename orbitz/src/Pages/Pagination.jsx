import React from 'react'

const Pagination = ({current,total,onChange}) => {
  
  
    const prev = <button disabled={current==1} onClick={() => onChange(current-1)} >Prev </button>
  const Next = <button onClick={() => onChange(current+1)} > Next</button>
  const pages = new Array(total).fill(0).map((a,i)=>{
  return   <button onClick={()=> onChange(i+1)}
    disabled={current===(i+1)}
     >{i+1}</button>
  })
  
    return (
    <div>
   {prev}
   {pages}
   {Next}
    </div>


  )
}

export default Pagination