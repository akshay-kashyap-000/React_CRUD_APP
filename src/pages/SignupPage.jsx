import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

const SignupPage = () => {
    let [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
    })

    const handleChange = (e) => {
        let { name, value } = e.target

        setFormData({ ...formData, [name]: value })

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(formData);
        let user = {
            id: Date.now(),
            username: formData.username,
            email: formData.email,
            password: formData.password
        }
        console.log(user);

        let allUsers = JSON.parse(localStorage.getItem("users")) || []

        allUsers.push(user)

        localStorage.setItem("users", JSON.stringify(allUsers))

        setFormData({
            username: "",
            email: "",
            password: ""
        })
    }



    return (
        <div className='flex flex-col items-center'> 
            <Navbar />
            <div className='border rounded w-1/3 shadow-2xl mt-10 h-120 flex flex-col items-center gap-2'>
            <h1 className='font-semibold text-2xl my-8'>Signup Page</h1>
            <form onSubmit={handleSubmit} className='flex flex-col justify-center w-full gap-8 px-20'>
                <input type="text" name='username' id='username' placeholder='enter username' className='border  h-8 ' value={formData.username} onChange={handleChange} />
                <input  type="text" name='email' id='email' placeholder='enter email' className='border w-full h-8 ' value={formData.email} onChange={handleChange} />
                <input type="password" name='password' id='password' placeholder='enter password' className='border w-full h-8 ' value={formData.password} onChange={handleChange} />
                <p>Already have an account? <Link to='/login'>login</Link></p>
                <button className='border rounded bg-blue-700 text-white font-bold text-2xl'>Signup</button>
            </form>
            </div>
        </div>
    )
}

export default SignupPage