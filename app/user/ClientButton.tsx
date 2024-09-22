'use client'
import React from 'react'

interface props{
    children:React.ReactNode;
    name:string
}

const ClientButton:React.FC<props> = ({children,name}) => {
  return (
    <div>
        <button onClick={()=>alert(name)}>

        {children}
        </button>
      
    </div>
  )
}

export default ClientButton
