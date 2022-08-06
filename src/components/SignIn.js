import React from 'react'
import {auth} from '../fb'
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

function SignIn() {
    function signInWithGoogle() {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth,provider)
    }

  return (
    <div>
      <div id="container">
        <div id="ghost-bubble" className="chat-bubble"></div>
        <button onClick={signInWithGoogle} className='signIn'>Sign in with google</button>
        <div className="ghost">
          <div className="ghost-face">
            <div className="ghost-eyes">
              <div className="ghost-eyes-l"></div>
              <div className="ghost-eyes-r"></div>
            </div>
            <div className="ghost-mouth"></div>
          </div>
          <div className="ghost-torso"></div>
          <div className="ghost-hands">
            <div className="ghost-hands-l"></div>
            <div className="ghost-hands-r"></div>
          </div>
          <div className="ghost-legs"></div>
        </div>
      </div>
    </div>
  )
}

export default SignIn