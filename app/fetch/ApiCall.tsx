"use client"
import React from 'react'
import { handler } from './action';

interface fetch{
    children:React.ReactNode;
    name:string

}

const ApiCall:React.FC<fetch> = ({children,name}) => {

    

  return (
    <div>
        <button onClick={()=>handler(name)}> {children} </button>
      
    </div>
  )
}

export default ApiCall
