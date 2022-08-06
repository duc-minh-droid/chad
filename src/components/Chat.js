import React, {useState, useEffect, useRef } from 'react'
import SignOut from './SignOut'
import { db} from '../fb'
import { collection, query, orderBy, limit, onSnapshot } from "firebase/firestore";
import SendMessage from './SendMessage';
import Message from './Message';

function Chat() {
  const scroll = useRef()
  const [mes, setMes] = useState([])
  const mesRef = collection(db, 'mes')

  useEffect(()=>{
    const q = query(mesRef, orderBy("timestamp","asc"), limit(50))
    const unsub = onSnapshot(q, (snapshot)=>{
      setMes(snapshot.docs.map(doc=>({...doc.data(), id: doc.id})))
    })
    return unsub
  },[])
  
  return (
    <div>
      <SignOut />
      <div className="m-3 rounded-lg flex flex-col gap-2">
        {mes.map(e=>{
          return(<div key={e.uid}><Message data={e}/></div>)
        })}
      </div>
      <SendMessage scroll={scroll} />
      <div ref={scroll}></div>
    </div>
  )
}

export default Chat