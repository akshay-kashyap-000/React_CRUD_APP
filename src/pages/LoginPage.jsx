import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { Link, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

const LoginPage = () => {
    let [formData, setFormData] = useState({ email: "", password: "" })

    const handleChange = (e) => {
        let { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        let user = {
            id: Date.now(),
            ...formData
        }

        if (user.email.trim() === "" && user.password.trim() === "") {
            toast('Enter credentials', {
                icon: '😒',
            });
            return;
        }

        let allSignUpUsers = JSON.parse(localStorage.getItem("users")) || []
        let authUser = allSignUpUsers.find(ele => {
            return ele.email === user.email && ele.password === user.password
        })
        if (authUser) {
            //$ toast message
            toast.success('Logged in Successfully !')

            //$ navigate to home
            navigate("/")

            //$ store Date.now() in session storage for conditional rendering 
            sessionStorage.setItem("accessToken", Date.now())
        } else {
            toast.error("User does not exist")
        }
        console.log(authUser);


        setFormData({ email: "", password: "" })

    }

    return (
        <div className='flex flex-col items-center'>
            <Navbar />
            <section className='border rounded w-1/4 shadow-2xl  mt-10 h-[50vh] flex flex-col items-center gap-2'>
                <h1 className='font-semibold text-2xl my-8'>Login Page</h1>
                <form onSubmit={handleSubmit} className='flex flex-col text-lg justify-center w-full gap-8 px-20'>
                    <input type="text" name='email' id='email' placeholder='enter email' className='border border-gray-500  rounded p-3 mb-3 ' value={formData.email} onChange={handleChange} />
                    <input type="password" name='password' id='password' placeholder='enter password' className='border border-gray-500 rounded p-3  mb-3 ' value={formData.password} onChange={handleChange} />
                    <p className='text-center font-semibold'>Not have an account? <Link to='/signup' className='text-blue-700 underline'>signup</Link></p>
                    <button className='cursor-pointer py-2 rounded bg-blue-600 text-white hover:bg-blue-800'>Signup</button>
                </form>
            </section>
        </div>
    )
}

export default LoginPage