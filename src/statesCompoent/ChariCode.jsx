import React, { useState } from 'react'

export default function ChariCode() {
  let count=useState(0)
 const increament=()=>{
    
    count[1](count[0]++ )
   console.log(count);
   
 }
 const decreament=()=>{
   
   count[1](count[0]--)
   console.log(count);
   
 }
 const reset=()=>{
  count[1](count=0)
  console.log(count);
  
 }
  return (
    <div>
      <h1>ChariCode :{count}</h1>
      <button onClick={increament}>Increament</button>
      <button onClick={decreament}>Decreament</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}
