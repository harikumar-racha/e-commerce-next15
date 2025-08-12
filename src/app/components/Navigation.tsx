import Link from 'next/link';
import React from 'react'

const Navigation = () => {
  return (
    <nav className='fixed top-0 left-0 right-0 bg-[#003d5d] shadow-md py-4'>
      <div className="max-w-7xl mx-auto px-4">
        <div className='flex justify-between items-center'>
          <Link href="/" className='flex items-center'>
            <div className='flex items-center'>
              <div className='w-9 h-9 bg-[#edae49] text-[#003d5d] rounded-full flex items-center justify-center font-bold text-xl mr-2'>SB</div>
              <span className='text-xl font-bold tracking-tight text-white'>
                Store<span className='text-[#edae49]'>Brand</span>
              </span>
            </div>
          </Link>
          <div className='hidden md:block flex-grow max-w-lg mx-8'>
            <form className='group relative'>
              <input type='text' placeholder='Search for products...' className='w-full bg-white/10 border border-white/20 rounded-full py-2 pl-4 pr-10 text-white placeholder:text-white/60 focus:outline-none focus:right-2 focus:ring-[#edae49] focus:border-transparent transition-all' />
              <button type='submit' className='absolute right-1 top-1/2 -translate-y-1/2 text-white/70 p-1.5 hover:text-white rounded-full transition-colors cursor-pointer'>
                <i className='bx bx-search text-xl'></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation;
