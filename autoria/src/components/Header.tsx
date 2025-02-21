import Image from 'next/image'
import React from 'react'
import Button from './Button'
import headerLogo from '../public/logo.svg'
import searchIcon from '../public/searchIcon.svg'
import filterIcon from '../public/file.svg'

const Header = () => {
    return (
        <header className="bg-white  containerWrapper py-10">
            <div className="flex items-center justify-between  ">
                <Image src={headerLogo} width={148 }  height={44 }  alt='header-logo' />
                <div className="flex items-center">
                    <input type="text"  placeholder='Search something here'/>
                    <Image src={searchIcon} width={24} height={24} alt='search-icon'/>
                    <Image src={filterIcon} width={24} height={24} alt='filter icon'/>
                    <Button text='Search' type="submit"/>
                </div>
            </div>
        </header>
    )
}

export default Header
