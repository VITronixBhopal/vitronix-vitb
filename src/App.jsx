import {BrowserRouter} from 'react-router-dom';
import {About, Feedbacks,Teams,Hero,Navbar, Events,StarsCanvas} from './components';
import { useState,useEffect } from 'react';
import Footer from './components/Footer';


const App=() => {
  const [isMobile,setIsMobile]=useState(false);
  useEffect(()=>{
    const mediaQuery=window.matchMedia('(max-width:768px)');
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange=(event) =>{setIsMobile(event.matches);
    }
    mediaQuery.addEventListener('change',handleMediaQueryChange)

    return ()=>{
      mediaQuery.removeEventListener('change',handleMediaQueryChange)
    }
  },[])
  return (
    <BrowserRouter basename='/vitronix-vitb/'>
    <div className='relative z-0 bg-tertiary'>
      <div className= {`bg-cover bg-center bg-gradient-to-t from-black/100 to-transparent ${isMobile ? ' bg-hero-mobile bg-fixed' : 'bg-hero-pattern bg-fixed'}`}>
        <Navbar/>
        <Hero/> 
        <About />
        <Events />
        <Teams />
      </div>
      
      <div className='relative z-0'>
        <Feedbacks/>
        <StarsCanvas/>
        <Footer/>
      </div>
      
    </div>
    </BrowserRouter>
  )
}

export default App
