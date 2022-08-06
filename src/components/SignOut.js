import React from 'react'
import {auth} from '../fb'

function SignOut() {
  return (
    <div className="w-full text-center text-4xl text-slate-400 h-16 border-b-slate-300 border-b py-3 flex justify-around">
      Group chat cho acc clone 
        <button onClick={()=>auth.signOut()}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-full px-3 "
        >Sign Out</button>
    </div>
  )
}

export default SignOut