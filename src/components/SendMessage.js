import {useState} from 'react'
import {db, auth} from '../fb'
import { addDoc, collection, serverTimestamp} from "firebase/firestore";

function SendMessage({scroll}) {
    const [msg, setMsg] = useState('')
    
    async function sendMessage(e) {
        e.preventDefault()
        if (msg) {
            const {uid, photoURL, displayName} = auth.currentUser
            const mesRef = collection(db, 'mes')
            await addDoc(mesRef, {
                text: msg,
                photoURL,
                uid,
                name: displayName,
                timestamp: serverTimestamp()
            })
        }
        setMsg('')
        scroll.current.scrollIntoView({behavior: 'smooth'})
    }
    
  return (
    <form onSubmit={sendMessage} className="flex justify-center">
        <input value={msg} onChange={(e)=>setMsg(e.target.value)} type='text' placeholder='Message...'
        className='bg-[#F5F5F5] rounded-full px-4 py-3 outline-none w-11/12'/>
    </form>
  )
}

export default SendMessage