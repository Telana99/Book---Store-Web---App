import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';


//react icons
import {FaBarsStaggered, FaBlog, FaXmark} from "react-icons/fa6"

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);//isMenuOpen is a boolean state variable used to track whether the menu is open or closed, 
    const [isSticky, setIsSticky] = useState(false);//isSticky is another boolean state variable used to track whether the navbar is in a sticky state.
    // isSticky state means that the navbar sticks to the top of the viewport when the user scrolls down the page.

    //toggle menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);//This is a function that toggles the isMenuOpen state variable. It flips its value from true to false and vice versa.
    }

    useEffect(()=> {
        const handleScroll = () => {
            if(window.scrollY > 100){
                setIsSticky(false);
            }//This hook is used for handling side effects in function components.
            //When the user scrolls, it calls the handleScroll function, which checks if the scrollY value of the window is greater than 100 pixels. If it is, it sets isSticky to false
            else{
                setIsSticky(false);
            }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
        window.addEventListener('scroll', handleScroll);
    }
},[])

    // navItems here

    const navItems =[
        {link: "Home", path:"/"},
        {link: "About", path:"/about"},
        {link: "Shop", path:"/shop"},
        {link: "Sell Your Book", path:"/admin/dashboard"},
        {link: "Blog", path:"/blog"},
    ]


  return (
   <header className='w-full bg-transparent fixed top-0 left-0 right-0 transition-all ease-in duration-300'>
    <nav className={`py-4 lg:px-24 px-4 ${isSticky ? "sticky top-0 left-0 right-0 bg-blue-300" : ""}`}> 
      <div className='flex justify-between items-center text-base gap-8'>
        {/* logo */}
        <Link to="/" className='text-2xl font-bold text-blue-700 flex items-center gap-2'><FaBlog 
        className='inline-block' />Books</Link>

        {/* nav items for large device */}

        <ul className= 'md:flex space-x-12 hidden'>
            {
               navItems.map(({link,  path}) => <Link key = {path} to={path} className ='block text-base
                text-black uppercase cursor-pointer hover:text-blue-700'>{link}</Link>) 
            }
        </ul>

        {/* btn for lg devices */}
        <div className='space-x-12 hidden lg:flex items-center' >
            <button><FaBarsStaggered className='w-5 hover:text-blue-700'/></button>
        </div>

       

        {/*menu btn for the  mobile devices*/} 
        <div className='md:hidden'>
            <button onClick={toggleMenu} className='text-black focus:outline-none'>
                {
                    isMenuOpen? <FaXmark className='h-5 w-5 text-black'/> : <FaBarsStaggered/>
                }
            </button>

        </div>

    
      </div>  
      {/* navitems for sm devices*/}
      <div className={`space-y-4 px-4 mt-16 py-7 bg-blue-700 ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`} >
        {
            navItems.map(({link,  path}) => <Link key = {path} to={path} className ='block text-base
             text-white uppercase cursor-pointer'>{link}</Link>) 
 
        }
      
      </div>
    </nav>
   </header>
  )
}

export default Navbar