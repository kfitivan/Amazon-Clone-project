import React from 'react'
import "./signupstyles.css"

function Signup() {
  return (
    <div className="form-container">
    <h1>Send a message to us!</h1>
    <form>
      <input placeholder="First-Name" />
      <input placeholder="Last-Name" />
      <input placeholder="Email" />
      <input placeholder="User-Name" />
      <input placeholder="Password" />
      <input placeholder="Re-EnterPassword" />
      <button>Register</button>
    </form>
  </div>    
  )
}

export default Signup
