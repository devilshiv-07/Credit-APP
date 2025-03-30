import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {

  const navigate = useNavigate();

  return (
    <section className='w-screen h-[100vh] bg-[#0a512f] flex justify-center items-center'>
        <div className='flex flex-col justify-center items-center mt-[-10vh]'>
            <h1 className='text-6xl font-bold tracking-tight text-[#e9f7dc]'>Choose Your Profile</h1>
            <div className='flex gap-20 mt-16 text-[#0a512f] font-semibold text-2xl'>
                <button onClick={() => navigate("/user")} className='border-2 border-[#0a512f] px-10 py-2 rounded-full bg-[#e9f7dc] shadow-md shadow-[#e9f7dc]'>User</button>
                <button onClick={() => navigate("/admin")} className='border-2 border-[#0a512f] px-10 py-2 rounded-full bg-[#e9f7dc] shadow-md shadow-[#e9f7dc]'>Admin</button>
                <button onClick={() => navigate('/verifier')} className='border-2 border-[#0a512f] px-10 py-2 rounded-full bg-[#e9f7dc] shadow-md shadow-[#e9f7dc]'>Verifier</button>
            </div>
        </div>
    </section>
  )
}

export default Home
