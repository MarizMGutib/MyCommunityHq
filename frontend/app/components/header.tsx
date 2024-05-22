import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <main>
      <div className="flex flex-wrap items-center ">
        <div className="flex items-center">
          <Image
            className="w-[180px] h-[100px] pl-6"
            src="/option 2.png"
            width={250} 
            height={100}
            alt="mllogo"
          />
        </div>
        <div className="w-full sm:w-auto  tracking-wide">
          <ul className="flex flex-wrap gap-14 sm:gap-20 font-Poppins py-10 sm:truncate tracking-wide sm:text-base pl-20">
            <li>
              <Link className='hover:text-[#1B0EB4] text-xl' href="/">Home</Link>
            </li>
            <li>
              <Link className='hover:text-[#1B0EB4] text-xl' href="/events">Events</Link>
            </li>
            <li>
              <Link className='hover:text-[#1B0EB4] text-xl' href="/resources">Resources</Link>
            </li>
            <li>
              <Link className='hover:text-[#1B0EB4] text-xl' href="/job_posting">Job Posting</Link>
            </li>
            <li>
              <Link className='hover:text-[#1B0EB4] text-xl' href="/about_us">About Us</Link>
            </li>
          </ul>
        </div>
        <div className="flex-grow flex pl-[40rem] text-xl">
          <Link className='hover:text-[#1B0EB4] py-[.2rem] font-Poppins tracking-wide ' href="/login">Profile</Link>
        </div>
      </div>
    </main>
  );
}

export default Navbar;
