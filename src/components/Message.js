import {auth} from '../fb'
import React from 'react'

function Message({data}) {
  return (
    <div className={`flex items-center gap-4 text-xl p-2  ${data.uid === auth.currentUser.uid ? 'justify-start flex-row-reverse':''}`}>
        <img src={data.photoURL} alt='' className='rounded-full w-16'/>
        {/* {data.name} */}
        <div className={`bg-[#F5F5F5] rounded-full px-4 py-3 ${data.uid === auth.currentUser.uid ? 'bg-[#0084FF] text-slate-200':''}`}>
            {data.text}
        </div>
    </div>
    )
}

export default Message