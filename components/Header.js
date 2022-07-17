import {BsSearch, BsCameraVideo, BsBell, BsMicFill, BsYoutube} from 'react-icons/bs';
import Avatar from 'react-avatar';
import ReactTooltip from 'react-tooltip';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

function Header({ toggleSidebar}) {

    const [InputValue, setInputValue] = useState('');
    const [notification, setnotification] = useState(2);

    const router = useRouter();

    useEffect(() =>{
        // Set a random no
        setnotification(Math.floor(Math.random() * 10));
    }, [])

  return (
    <div className='flex items-center justify-between border-b-2 fixed top-0 left-0 right-0 z-20 bg-white'>
        {/* tailwind css hamburger menu */}
        <div className='flex cursor-pointer justify-between h-[1.2rem] w-[1.5rem] flex-col ml-2 group md:ml-7'
        onClick={() =>{
            toggleSidebar();
        }}
        >
            <div className='border-r-1 h-[2px] bg-gray-700 group-hover:bg-gray-500'></div>
            <div className='border-r-1 h-[2px] bg-gray-700 group-hover:bg-gray-500'></div>
            <div className='border-r-1 h-[2px] bg-gray-700 group-hover:bg-gray-500'></div>
        </div>
        {/* Header / Youtubelogo */}
        <div className='flex items-center justify-center relative ml-1 pt-1 hover:text-gray-800'>
            <BsYoutube className='text-4xl text-red-600 pr-1'/>
            <Link href="/" ><h2 className='text-2xl text-black-600 font-bold tracking-tighter'>MeTube</h2></Link>
            <span className='absolute -right-2 -top-0.5 pl-4 opacity-50 text-[15px]'>IN</span>
        </div>
        {/* Query field */}
        <div className='flex items-center justify-center focus:outline-none focus:bg-gray-300'>
            <div className='flex items-center justify-center bg-gray-200 rounded-lg mr-2 my-2'>
                <input type='text' placeholder='Search'
                className='bg-gray-200 rounded-lg px-4 py-2 w-20 text-gray-800 md:w-[20em] focus:outline-none lg:w-[35em]'
                value={InputValue}
                onChange={(e) =>{
                    setInputValue(e.target.value)
                }}
                onKeyDown={(e) =>{
                    if (e.key === 'Enter'){
                        router.push(`/?query=${InputValue.toLowerCase()}`);
                    }
                }}

                />
                <BsSearch className='mr-3' />
            </div>
                <BsMicFill className='text-2xl mr-3 hidden md:block' />                
        </div>
        {/* Avatar */}
        <div className='flex items-center justify-between'>
            <BsCameraVideo className='hidden md:block text-3xl mr-7'  data-tip='Add a new Video' />
            <div className='relative mr-3 md:mr-7'>
                <BsBell className='text-2xl md:text-3xl' data-tip="Notifications"/>
                <span className='absolute -top-3 -right-1 w-4 h-4 text-center flex items-center justify-center rounded-full bg-red-600 p-3 text-[12px] text-white '>{notification}</span>
            </div>
            <div className='mr-5 md:mr-7 ' data-tip='Your account'><Avatar name='Sadeed' size={35} round={true}/></div>
        </div>
        <ReactTooltip backgroundColor='#403e3f' isCapture/>
    </div>
  )
}

export default Header