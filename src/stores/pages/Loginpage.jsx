import React from 'react'

function Loginpage() {
  return (
      <>
          <div className='fullloginpage'>
              <div className='sublogin'>
                  <div>
                      <h1 style={{color:'white'}}>Welcome Back!</h1>
                  </div>
                  <div>
                      <p style={{color:'white'}}>To keep connected with us please login with your personal info</p>
                  </div>
                  <div className='signupbtn'>
                      <button>SignUp</button>
                  </div>
              </div>
              <div className='formlogin'>
                  <div className='signinheading'>
                      <h1 style={{ color:'rgba(255, 75, 43, 1)'}}>SignIn</h1>
                  </div>
                  <div className='login'>
                      <form>
                  <div className='emailinput'>
                      <input type='text' placeholder='Email'/>
                  </div>
                  <div className='passinput'>
                      <input type='password' placeholder='Password'/>
                  </div>
                  <div className='signinbtn'>
                      <button>SignIn</button>
                          </div>
                      </form>
                </div>
              </div>
      </div>
      </>
  )
}

export default Loginpage
