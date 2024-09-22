'use client'
import React from 'react'

const page = async() => {
    const rawUuser=await fetch('https://jsonplaceholder.typicode.com/users')
    const user=await rawUuser.json()
   
    interface User{
        name:string;
        id:string
    }
    
  return (
    <ul>
        {user && user.map((e:User)=>{
            return <li className='flex' key={e.id}> {e.id} - {e.name}   
            
               <button onClick={()=>alert("")}>Click me </button>
            
             </li>
        })}
      
    </ul>
  )
}

export default page
