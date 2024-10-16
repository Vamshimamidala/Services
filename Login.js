 import React, { useState } from 'react'
 
 const Login = () => {
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("")
   return (
     <div>
       <section>
        <div className='container'>
          <div className='row'>
            <div className='col-md-4'>
              <form>
                <div className='mb-3'>
                  <input
                  type='text'
                  placeholder='Enter User name'
                  className='form-control'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className='mb-3'>
                  <input
                  type='password'
                  placeholder='Enter your password'
                   className='form-control'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className='mb-3'>
                  <input
                  type='submit'
                  className='btn btn-dark'
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
       </section>
     </div>
   )
 }
 
 export default Login
 