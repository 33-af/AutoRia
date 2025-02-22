import Image from 'next/image'
import React from 'react'
import Button from './Button'
import headerLogo from '../public/logo.svg'
import searchIcon from '../public/search-normal.svg'
import filterIcon from '../public/filter.svg'

const Header = () => {
    return (
        <header className="bg-white py-10">
            <div className="containerWrapper">
                <div className="flex items-center justify-between  ">
                    <Image src={headerLogo} width={148} height={44} alt='header-logo' />
                    <div className="flex items-center w-492">
                        <div className='flex items-center relative w-full'>
                            <Image src={searchIcon} width={24} height={24} alt='search-icon' className='z-20 block absolute top-[25%] left-5' />
                            <input className='block z-10 relative border-2 border-solid border-gray-200 rounded-[40px] py-2.5 pl-14 pr-3
                    focus:border-gray-400 outline-none mr-5 w-full'
                                type="text" placeholder='Search something here' />
                            <Image src={filterIcon} width={24} height={24} alt='filter icon' className='block z-30 absolute right-8 top-[25%]' />
                        </div>

                        <Button text='Search' type="submit" />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
