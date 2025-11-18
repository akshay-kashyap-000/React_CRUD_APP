import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

const LoginPage = () => {
    let [loginData, setLoginData] = useState({
        email: "",
        password: ""
    })
    const handleChange = (e) => {
        let {name, value} = e.target

        setLoginData({ ...loginData, [name]: value })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(loginData);

    }
    return (
            <div className='flex flex-col items-center '>
                <Navbar />
                <div className='border rounded shadow-2xl w-1/3 h-100 flex flex-col items-center gap-2 mt-10'>
                    <h1 className='font-semibold text-2xl my-8'>Login Page</h1>
                    <form onSubmit={handleSubmit} className='flex flex-col justify-center w-full gap-8 px-20'>
                        <input type="text" name='email' id='email' placeholder='enter email' className='border w-full h-8 ' value={loginData.email} onChange={handleChange} />
                        <input type="password" name='password' id='password' placeholder='enter password' className='border w-full h-8 ' value={loginData.password} onChange={handleChange} />
                        <p>Not have an account? <Link to='/signup'>Signup</Link></p>
                        <button className='border rounded bg-blue-700 text-white font-bold text-2xl'>Login</button>
                    </form>
                </div>
            </div>
    )
}

export default LoginPage