import React, { useState } from 'react'
import loginIcons from '../assest/signin.gif'
import { VscEye } from "react-icons/vsc";
import { VscEyeClosed } from "react-icons/vsc";
import { Link } from 'react-router-dom';

export const Login = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [data, setData] = useState({
      email: "",
      password: ""
    })

    const handleOnChange = (e) => {
      const {name, value} = e.target

      setData((preve)=> {
        return{
          ...preve,
          [name] : value
        }
      })
    }

    const handleSubmit = (e) => {
      e.preventDefault()

    }

    console.log("data login",data)

  return (
    <section id='login'>
      <div className='mx-auto container p-4'>

          <div className='bg-white p-5 w-full max-w-md mx-auto'>
              <div className='w-20 h-20 mx-auto'>
                <img src={loginIcons} alt='login icons'/>
              </div>

              <form className='pt-6 flex-col gap-2' onSubmit={handleSubmit}>
                <div className='grid'>
                  <label>Email : </label>
                  <div className='bg-slate-100 p-2'>
                    <input 
                      type='email' 
                      placeholder='enter email'
                      name='email'
                      value={data.email}
                      onChange={handleOnChange}
                      className='w-full h-full outline-none bg-transparent'/>
                  </div>  
                </div>

                <div>
                  <label>Password : </label>
                  <div className='bg-slate-100 p-2 flex'>
                    <input 
                      type={showPassword ? "text" : "password"} 
                      placeholder='enter password'
                      value={data.password}
                      name='password'
                      onChange={handleOnChange}
                      className='w-full h-full outline-none bg-transparent'/>
                    <div className='cursor-pointer text-xl' onClick={()=>setShowPassword((preve)=>!preve)}>
                      <span>
                        {
                          showPassword ? (
                            <VscEyeClosed/>
                          )
                          :
                          (
                            <VscEye/>
                          )
                        }
                      </span>
                    </div>
                  </div>
                  <Link to={'/forgot-password'} className='block w-fit ml-auto hover:underline hover:text-red-600'>
                        Forgot password ?
                  </Link>
                </div>

                <button className='bg-red-600 text-white px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-110 transition-all mx-auto block mt-6'>Login</button>
              </form>

              <p className='my-5'>don't have account ? <Link to ={"/sign-up"} className='text-red-600 hover:text-red-700 hover:underline'>Sign Up</Link></p>
            
          </div>

      </div>-
    </section>
  )
}

export default Login