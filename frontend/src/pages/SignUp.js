import React, { useState } from 'react'
import loginIcons from '../assest/signin.gif'
import { VscEye } from "react-icons/vsc";
import { VscEyeClosed } from "react-icons/vsc";
import { Link } from 'react-router-dom';

const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [data, setData] = useState({
        email: "",
        password: "",
        name: "",
        confirmPassword: "",
        profilePic: ""
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
    <section id='signup'>
      <div className='mx-auto container p-4'>

          <div className='bg-white p-5 w-full max-w-md mx-auto'>
              <div className='w-20 h-20 mx-auto relative overflow-hidden rounded-full'>
                <div>
                  <img src={loginIcons} alt='login icons'/>
                </div>
                <div className='text-xs bg-opacity-80 bg-slate-200 pb-4 pt-2 cursor-pointer text-center absolute bottom-0 w-full'>
                  Upload Photo
                </div> 
              </div>

              <form className='pt-6 flex-col gap-2' onSubmit={handleSubmit}>
                <div className='grid'>
                    <label>Name : </label>
                    <div className='bg-slate-100 p-2'>
                      <input 
                        type='text' 
                        placeholder='enter your name'
                        name='name'
                        value={data.name}
                        onChange={handleOnChange}
                        className='w-full h-full outline-none bg-transparent'/>
                    </div>  
                  </div>
                  
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
                </div>

                <div>
                  <label>Confirm Password : </label>
                  <div className='bg-slate-100 p-2 flex'>
                    <input 
                      type={showConfirmPassword ? "text" : "password"} 
                      placeholder='enter confirm password'
                      value={data.confirmPassword}
                      name='confirmPassword'
                      onChange={handleOnChange}
                      className='w-full h-full outline-none bg-transparent'/>
                    <div className='cursor-pointer text-xl' onClick={()=>setShowConfirmPassword((preve)=>!preve)}>
                      <span>
                        {
                          showConfirmPassword ? (
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
                </div>

                <button className='bg-red-600 text-white px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-110 transition-all mx-auto block mt-6'>Sign Up</button>
              </form>

              <p className='my-5'>Already have an account ? <Link to ={"/login"} className='text-red-600 hover:text-red-700 hover:underline'>Login</Link></p>
            
          </div>

      </div>-
    </section>
  )
}

export default SignUp