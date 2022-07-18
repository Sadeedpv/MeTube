import Head from 'next/head'
import { useState, useEffect } from 'react'
import Body from '../components/Body'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import { BsYoutube } from 'react-icons/bs'
import axios from 'axios'


export default function Home({data}) {
  // Global state for Sidebar
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => setIsOpen(!isOpen);

  const [Mounted, setMounted] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setMounted(true);
    }, 2000)
  }, [])

  return (
    <div>
      {/* Header tags goes here */}
      <Head>
        <title>MeTube</title>
        <meta name="description" content="No more YouTube, it's time for MeTube!" />
        <meta name="author" content='Sadeed pv' />
        <meta name='keywords' content='Youtube clone, Youtube 2.0' />
      </Head>
    {/* Contents */}
    <main>
      <div className={Mounted?'block':'hidden'}>
        <Header toggleSidebar={toggleSidebar} />
        <div className='grid grid-cols-7 mt-20'>
          <Sidebar isOpen={isOpen}/>
          <Body data={data} /> 
        </div>     
      </div>
      <div className={Mounted? 'hidden': 'grid place-items-center min-h-screen text-red-500'}>
        <BsYoutube size={115} />
      </div>
    </main>
    </div>
  )
}


export async function getServerSideProps(context){
  const query = context.query.query;
  if (query){
    const options = {
      method: 'GET',
      url: 'https://youtube-search-and-download.p.rapidapi.com/search',
      params: {
        query: query,
        hl: 'en',
        type: 'v'
      },
      headers: {
        'X-RapidAPI-Key': process.env.NEXT_APP_API_KEY,
        'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
      }
      };
      const response = await axios.request(options);

      return {
        props: {
          data: response.data.contents
        }
      }
  }else{
    const options = {
    method: 'GET',
    url: 'https://youtube-search-and-download.p.rapidapi.com/trending',
    params: { hl: 'en'},
    headers: {
      'X-RapidAPI-Key': process.env.NEXT_APP_API_KEY,
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
    };
    const response = await axios.request(options);

    return {
      props: {
        data: response.data.contents
      }
    }

  }
}
