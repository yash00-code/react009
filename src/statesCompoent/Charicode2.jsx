import React, { useState } from 'react'

export default function ChariCode() {
    let[count,setdata]=useState(0)
 const increament=()=>{
    setdata(++count)
   console.log(count);
   
 }
 const decreament=()=>{
    setdata(--count)
   console.log(count);
   
 }
 const reset=()=>{
   setdata(count=0)
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