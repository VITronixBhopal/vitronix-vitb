import React,{ useEffect,useState} from 'react';
import {Link} from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo,menu,close } from '../assets';

const Navbar = () => {
  const [active,setActive]=useState('')
  const [toggle,setToggle]=useState(false)
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 150) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`
      px-2 xs:w-full max-w-full xxs:w-[350px] xxs:w-[320px] flex items-center py-2 fixed top-0 z-10 ${scrolled ? 'bg-tertiary' : 'bg-transparent'}`}>
      <div className="w-full flex flex-row justify-between items-center max-w-8xl mx-2">
        <Link to="/" 
        className="flex justify-self-end items-center gap-2"
        onClick={()=>{
          setActive("");
          window.scrollTo(0,0);
        }}
        >
          <img src={logo} alt="logo" className="w-auto md:h-auto xxs:h-12 object-contain" />
        </Link>
        <ul className='list-none hidden sm:flex md:px-[8px] px-[4px] font-rollbox flex-row lg:gap-10'>
          {navLinks.map((link)=>(
            <li
            key={link.id}
            className={`${
              active===link.title ? "navbar-item":"navbar-link"
            } hover:text-white cursor-pointer `}
            onClick={()=> setActive(link.title)}
            >
              <a href={`#${link.id}`} className="font-montserrat text-[14px] lg:text-[18px]">{link.title}</a>
            </li>
          ))}

        </ul>
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img src={toggle? close:menu} alt="menu" className="w-[28px] h-[28px] object-contain cursor-pointer" onClick={()=> setToggle(!toggle)}/>
          <div className={`${!toggle ? 'hidden':'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
          <ul className='list-none flex justify-end items-start flex-col gap-4'>
            {navLinks.map((link)=>(
              <li
              key={link.id}
              className={`${
                active===link.title ? "navbar-item":"navbar-link"
              } hover:text-white font-medium cursor-pointer text-[16px]`}

              onClick={()=> {
                setToggle(!toggle);
                setActive(link.title);
              }}
              >
                <a href={`#${link.id}`} className="font-montserrat">{link.title} </a>
              </li>
            ))}

          </ul>
          </div>
        </div>
      </div>

    </nav>
  )
}

export default Navbar
