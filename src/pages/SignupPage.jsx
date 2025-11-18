import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import toast from 'react-hot-toast'

const SignupPage = () => {
    let [formData, setFormData] = useState({ username: "", email: "", password: "" })

    const handleChange = (e) => {
        let { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let user = {
            id: Date.now(),
            ...formData
        }

        if (user.email.trim() === "" && user.username.trim() === "" && user.password.trim() === "") {
            toast('Enter credentials', {
            icon: '😒',
        });
        return;
        }

        let allUsers = JSON.parse(localStorage.getItem("users")) || []

        let existingUser = allUsers.find((ele) => ele.email === user.email)

        if (existingUser) toast.error("User already exists");

        allUsers.push(user)
        console.log(user);


        localStorage.setItem("users", JSON.stringify(allUsers))

        setFormData({ username: "", email: "", password: "" })
    }



    return (
        <div className='flex flex-col items-center'>
            <Navbar />
            <section className='border rounded w-1/4 shadow-lg  mt-10 h-[60vh] flex flex-col items-center gap-2'>
                <h1 className='font-semibold text-2xl my-8'>Signup Page</h1>
                <form onSubmit={handleSubmit} className='flex flex-col  justify-center w-full gap-8 px-20'>
                    <input type="text" name='username' id='username' placeholder='enter username' className='border border-gray-500  rounded p-3  mb-3 ' value={formData.username} onChange={handleChange} />
                    <input type="text" name='email' id='email' placeholder='enter email' className='border border-gray-500 rounded p-3  mb-3 ' value={formData.email} onChange={handleChange} />
                    <input type="password" name='password' id='password' placeholder='enter password' className='border border-gray-500 rounded p-3  mb-3 ' value={formData.password} onChange={handleChange} />
                    <p className='text-center font-semibold'>Already have an account? <Link to='/login' className='text-blue-700 underline'>login</Link></p>
                    <button className='cursor-pointer py-2 rounded bg-blue-600 text-white hover:bg-blue-800'>Signup</button>
                </form>
            </section>
        </div>
    )
}

export default SignupPage