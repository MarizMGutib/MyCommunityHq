"use client"
import React, { useState } from 'react';

const Landing = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const openLoginModal = () => {
    setShowLoginModal(true);
  };

  const closeLoginModal = () => {
    setShowLoginModal(false);
  };

  const openSignUpModal = () => {
    setShowSignUpModal(true);
  };

  const closeSignUpModal = () => {
    setShowSignUpModal(false);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const closeModal = () => {
    closeLoginModal();
    closeSignUpModal();
  };

  return (
    <div className="bg-gradient-to-t from-white to-blue-400 h-screen flex flex-col relative">
      <div className='w-32 h-4'>
        <img src="/option_2.png" alt="logo" />
      </div>
      <div className="flex">
        <div className="pl-40">
          <div className="font-Kaushan_Script italic text-4xl text-[#1B0EB4] font-semibold mb-2 pt-[15rem]">
            <p className='pl-20 text-[6rem]'>Welcome to</p>
          </div>
          <div className="font-Kaushan_Script italic text-4xl text-[#1B0EB4] font-semibold mb-4">
            <p className='pl-10 text-[6rem] pt-14'> MyCommunityHQ</p>
          </div>
          <div className="font-Poppins text-[#1B0EB4] font-light tracking-widest">
            <p className='text-[1.6rem] pt-8 '> Unleash Your Potential, Let's Transform the Community</p>
          </div>
        </div>
        <div className="pl-40 ">
          <img src="/img1_landing.png" alt="image" className="w-[90rem] h-[50rem]" />
        </div>
        <div className='flex pr-20'>
          <button className='bg-white w-[9rem] h-10 rounded-full pr-20' onClick={openSignUpModal}>Sign Up</button>
        </div>
        <div className='absolute pl-[110rem]'>
          <button className='bg-[#854df4] h-10 w-[6rem] rounded-full text-white' onClick={openLoginModal}>Login</button>
        </div>
      </div>
      
      {showSignUpModal && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Sign up for an Account</h2>
           
<div className="bg-grey-lighter min-h-screen flex flex-col">
            <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                    <h1 className="mb-8 text-3xl text-center">Sign up</h1>
                    <input 
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="fullname"
                        placeholder="Full Name" />

                    <input 
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="email"
                        placeholder="Email" />

                    <input 
                        type="password"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="password"
                        placeholder="Password" />
                    <input 
                        type="password"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="confirm_password"
                        placeholder="Confirm Password" />

                    <button
                        type="submit"
                        className="w-full text-center py-3 rounded bg-green text-white hover:bg-green-dark focus:outline-none my-1"
                    >Create Account</button>

                    <div className="text-center text-sm text-grey-dark mt-4">
                        By signing up, you agree to the 
                        <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                            Terms of Service
                        </a> and 
                        <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                            Privacy Policy
                        </a>
                    </div>
                </div>

                <div className="text-grey-dark mt-6">
                    Already have an account? 
                    <a className="no-underline border-b border-blue text-blue" href="../login/">
                        Log in
                    </a>.
                </div>
            </div>
        </div>
            <button className="bg-[#854df4] text-white rounded-full px-4 py-2 mt-4" onClick={closeModal}>Back</button>
          </div>
        </div>
      )}

      {showLoginModal && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Log in to your Account</h2>
           
            <p>Welcome back! Select method to log in</p>
            <div className='flex space-x-4 pt-12'>
              <div>
                <img src="/google.png" alt="Google" className='w-16 absolute pt-[0.2rem] pl-4'/>
                <button className='border w-40 h-14 rounded-full pl-8'>Google</button>
              </div>
              <div>
              <img src="/fb.png" alt="Facebook" className='w-[3.4rem] absolute pt-[0.6rem] pl-4'/>
                <button className='border w-40 h-14 rounded-full pl-10'>Facebook</button>
              </div>
            </div>
            <div className="flex items-center space-x-120 pt-6">
              <div className="border-t flex-grow w-[1rem]"></div>
              <div className="px-4 font-bold">or</div>
              <div className="border-t flex-grow  w-[1rem]"></div>
            </div>
            <div className="w-full max-w-xs">
              <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                  <label className="block text-gray-300 text-normal font-Poppins mb-2" htmlFor="username">
                    Email or Username
                  </label>
                  <input className="shadow appearance-none border rounded-full border-indigo-900 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Last Name, First Name" />
                </div>
                <div className="mb-6">
                  <label className="block text-gray-300 text-normal font-Poppins mb-2" htmlFor="password">
                    Password
                  </label>
                  <div className="relative">
                    <input 
                      className="shadow appearance-none border border-indigo-900 rounded-full w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
                      id="password" 
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter Password" 
                    />
                    <img 
                      src="/visible.png" 
                      alt="eye" 
                      className="absolute right-2 top-2 cursor-pointer pt-2"
                      onClick={togglePasswordVisibility} 
                    />
                  </div>
                </div>
                <div>
                  <div className="flex items-center">
                    <input id="link-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label htmlFor="link-checkbox" className="ms-2 text-sm text-gray-900 dark:text-gray-300">Remember me</label>
                    <button className='dark:text-gray-300 text-sm pl-4'>Forgot Password?</button>
                  </div>
                </div>
                </form>
                <div className='flex items-center justify-center pt-8 '>
                  <button className='bg-[#854df4] h-8 w-80 text-white rounded-full'>Log in</button>
                </div>
            <button className="bg-[#854df4] text-white rounded-full px-4 py-2 mt-4" onClick={closeModal}>Back</button>
          </div>
        </div>
        </div>
      )}
    </div>
  );
};

export default Landing;

