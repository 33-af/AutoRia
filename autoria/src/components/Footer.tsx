import React from 'react'
import Image from 'next/image'
import logo from '../public/logo.svg'

const Footer = () => {
  return (
    <footer className='containerWrapper pb-16'>
      <div className='flex items-start justify-between'>
        <div>
          <Image src={logo} alt="" />
          <span className='block text-gray-500 mt-4'>
            Our vision is to provide convenience <br />
            and help increase your sales business. <br />
          </span>
        </div>

        <div className='flex items-start gap-16'>
          <div className='flex flex-col gap-6'>
            <div className='font-semibold text-xl mb-3'>About</div>

            <a className='block text-gray-500' href='' >How it works</a>
            <a className='block text-gray-500' href='' >Featured</a>
            <a className='block text-gray-500' href='' >Partnership</a>
            <a className='block text-gray-500' href='' >Bussiness Relation</a>
          </div>

          <div className='flex flex-col gap-6'>
            <div className='font-semibold text-xl mb-3'>Community</div>

            <a className='block text-gray-500' href=''>Events</a>
            <a className='block text-gray-500' href=''>Blog</a>
            <a className='block text-gray-500' href=''>Podcast</a>
            <a className='block text-gray-500' href=''>Invite a friend</a>
          </div>

          <div className='flex flex-col gap-6'>
            <div className='font-semibold text-xl mb-3'>Socials</div>

            <a className='block text-gray-500' href=''>Discord</a>
            <a className='block text-gray-500' href=''>Instagram</a>
            <a className='block text-gray-500' href=''>Twitter</a>
            <a className='block text-gray-500' href=''>Facebook</a>
          </div>
        </div>
      </div>

      <div className='flex items-center justify-between mt-10 pt-10 border-t border-solid border-gray-400'>
        <div>©2022 MORENT. All rights reserved</div>
        <div className='flex items-center gap-[60px]'>
          <a href=''>Privacy & Policy</a>
          <a href=''>Terms & Condition</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
