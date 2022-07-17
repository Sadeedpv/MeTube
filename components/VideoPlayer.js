import React, { useEffect, useState } from 'react'
import {BsDot, BsThreeDots} from 'react-icons/bs'
import ReactPlayer from 'react-player/lazy'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function VideoPlayer({data}) {
  const [loading, setloading] = useState(false)
  useEffect(() =>{
    setTimeout(() => {
      setloading(true)
    }, 2000)
  }, [])
  return (
    <div className='flex flex-wrap gap-5 items-center justify-center my-10'>
      {data && data.map((item, index) => {
        return (      
          <div className='flex flex-col items-center ml-10 md:ml-0' key={index}>

          <div className='relative '>
            {loading ? (
              <>
                <ReactPlayer url={`https://www.youtube.com/watch?v=${item? item.video.videoId: 'Ux_LFXpOrd4'}`} light  height={220} width={380}/>
                <span className='absolute bottom-2 right-3 bg-black text-white p-0.5'>{item.video.lengthText}</span>  
              </>
            ) : <Skeleton height={220} width={380} />}
            {/* <img src={item.video.thumbnails[2].url} height={380} width={380} alt='Thumbnail'  className='object-cover'/> */}
            {/* Lazy load the YouTube player */}   
          </div>

          <div className='flex mt-4 ml-1'>
            <img src='/youtube.jpg' alt='channel-logo' className='rounded-full mr-3 w-10 h-10 object-cover'/>

            <div>
              <div className='flex justify-between w-80 mb-1'>
                <div><h2 className='text-xl font-bold'>{item? item.video.title.length > 45? `${item.video.title.slice(0,45)}...`:item.video.title:<Skeleton />}</h2></div>
                <div className='rounded-full h-10 w-10 text-center flex items-center justify-center transition-all hover:bg-gray-100'><BsThreeDots size={20} className='rotate-90'/></div>
              </div>
              <div className='opacity-60 font-semibold'>
                {loading? item.video.channelName: <Skeleton />}
              </div>
              <div className='flex opacity-60 font-semibold'>
                <p className='flex items-center justify-center text-center'>{loading ? item.video.viewCountText : <Skeleton />} {' '} {loading? <BsDot />: <Skeleton />}</p>
                <p>{loading? item.video.publishedTimeText: <Skeleton />}</p>
              </div>
            </div>

          </div>

        </div>
        )
      })}

    </div>
  )
}


export default VideoPlayer
