import React from 'react'
import { Link } from 'react-router-dom'
import {ToastContainer,toast} from 'react-toastify'
const Register = () => {
  return (
    <div className='container'>
        <h2>Register Account</h2>
        <form >
            <div>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" placeholder='Email' />

            </div>
             <div>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" placeholder='Password' />

            </div>
            <button type='submit'>Submit</button>
            <span>Already have an Account? 
                <Link to='/login'>Login</Link> </span>
        </form>
        <ToastContainer/>
    </div>
  )
} 

export default Register