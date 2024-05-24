import React from 'react';
import Link from 'next/link';
const Footer = () => {
  return (
    <div className='bg-[#008CC4] w-[2763px] h-[300px] mt-[40rem]'>
      <div className='flex gap-60 font-Poppins text-l pt-14  '>
            <div className='pl-[8rem] space-y-4 '>
              <div className='text-white'>Program</div>
              <Link href="/events" passHref>
              <div className='hover:text-[#1B0EB4] pt-4'>Events</div>
              </Link>
              <Link href="/job_posting" passHref>
              <div className='hover:text-[#1B0EB4] pt-4'>Job Posting</div>
              </Link>
              <Link href="/opportunity_listing" passHref>
              <div className='hover:text-[#1B0EB4] pt-4'>Opportunity Listing</div>
              </Link>
  </div>
        <div className='space-y-4'>
              <div className='text-white'>Service</div>
              <Link href="/volunteer" passHref>
              <div className='hover:text-[#1B0EB4] pt-4'>Volunteer</div>
              </Link>
              <Link href="/scholarship" passHref>
              <div className='hover:text-[#1B0EB4] pt-4'>Scholarship</div>
              </Link>
              <Link href="/membership" passHref>
              <div className='hover:text-[#1B0EB4] pt-4'>Membership</div>
              </Link>
   </div>
        <div className='space-y-4 pb-6'>
              <div className='text-white'>Contact</div>
              <Link href="/home" passHref>
              <div className='hover:text-[#1B0EB4] pt-4'>Home</div>
              </Link>
              <Link href="/about_us" passHref>
              <div className='hover:text-[#1B0EB4] pt-4'>About Us</div>
              </Link>
              <Link href="/contact" passHref>
              <div className='hover:text-[#1B0EB4] pt-4'>Contact</div>
              </Link>
  </div>
        <div className='pr-40'>
        <div className="join">
        <input className="input input-bordered join-item p-2 rounded w-[30rem] " placeholder="Email Address"/>
         <button className="btn join-item rounded-lg bg-[#4DCCFF] hover:blue-500 text-white p-2 ">Join Now</button>
</div>
             
          <div className='flex gap-60 pr-20'>
            <div className='pt-4'>
              <p>CALL US</p>
              <p>09*********</p>
            </div>
            <div className='pt-4'>
              <p>EMAIL US</p>
              <p>mycommunityhq@gmail.com</p>
            </div>
        </div>
        </div>
      </div>
      <div className='border-t w-[120rem] pt-4 flex'>
        <div className='mb-10 pl-6'>
          © Copyright 2024, All Rights Reserved.
        </div>
      </div>
    </div>
  );
}

export default Footer;
