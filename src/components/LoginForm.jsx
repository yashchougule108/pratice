import React from 'react'
import '../app.css'

const LoginForm = () => {
  return (
    <div className='form'>
      <div>
        <h1 className='headings'>Hello! Welcome to Political Insights</h1>
        <h3 className='desc'>Sign up to get great analysis of all political aspects.</h3>
      </div>
      <div className='form'>
        <input className='inputbox' type="text" placeholder='Username' />
        <br />
        <input className='inputboxpass' type="password" placeholder='Password' />
        <br />
        <button className='btn'>SIGN IN</button>
      </div>
      
    </div>
  )
}

export default LoginForm
