import React from 'react'
import Banners from '../components/Banners'


const Home = () => {
  return (
   <div className='px-4 lg:px-24 bg-teal-100 flex items-center'>
    <div className='flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40'>
      {/*left side*/}
      <div className='md:w-1/2 space-y-8 h-full' >
        <h2 className='text-5xl font-bold leading-snug text-black'>Buy and Sell Your book <span
        className='text-blue-700'> for the Best Prices</span></h2>
        <p className='md:w-4/5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, veniam! Labore soluta, 
          sequi, voluptate natus ipsam, suscipit eaque inventore nesciunt aperiam dolor dicta numquam.
           Nam a reprehenderit odio non possimus!</p>
        <div>
          <input type="search" name="search" id="search" placeholder='Search a Book' 
          className='py-2 px-2 rounded-s-sm outline-none'/>
          <button className='bg-blue-700 px-6 py-2 text-white font-medium 
          hover:bg-green-700 transition-qll ease-in duration-200'> Search</button>
        </div>
        
      </div>

       {/*Right side*/}
       <div>Right Side</div>
    </div>

   
   </div>
  )
}
 
export default Home
