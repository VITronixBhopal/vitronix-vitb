import React from 'react'
import { FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa'
import { SectionWrapper } from '../hoc'

const Footer = () => {
  return (
    <footer className='footer'>
    <div class="bg-transparent socialIcons">
        <a href="https://www.instagram.com/vitronix_vitb?igsh=czNzYTgzaGdiejJ0" className="icon instagram" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://chat.whatsapp.com/DvnZp6zlxjyEdXdJa8zGpY" className="icon whatsapp" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp />
        </a>
        <a href="https://www.linkedin.com/company/the-vitronix-club/mycompany/" className="icon linkedin" target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn />
        </a>
    </div>
    <div className="footerBottom bg-inherit">
        <p>Copyright &copy;2024 | Designed by | <span class="designer">VITronix Club</span> </p>
        <p>VIT Bhopal</p>
    </div>
    </footer>
  )
}

export default Footer