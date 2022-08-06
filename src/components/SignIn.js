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
        <div id="ghost-bubble" class="chat-bubble"></div>
        <button onClick={signInWithGoogle} className='signIn'>Sign in with google</button>
        <div class="ghost">
          <div class="ghost-face">
            <div class="ghost-eyes">
              <div class="ghost-eyes-l"></div>
              <div class="ghost-eyes-r"></div>
            </div>
            <div class="ghost-mouth"></div>
          </div>
          <div class="ghost-torso"></div>
          <div class="ghost-hands">
            <div class="ghost-hands-l"></div>
            <div class="ghost-hands-r"></div>
          </div>
          <div class="ghost-legs"></div>
        </div>
      </div>
    </div>
  )
}

export default SignIn