import React from 'react'
import { FaWhatsapp, FaFacebookF, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <div className='md:mt-0.001  bg-gray-800 text-white p-4 md:justify-end flex md:gap-2 '>
     <div className='md:mr-120'>@ 2025 Om Patil . All Time Reversed </div>
  <a
          href="https://wa.me/+917666736579" 
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-500 hover:text-green-400 text-2xl"
        >
          <FaWhatsapp />
        </a>

       
        <a
          href="https://www.facebook.com/share/16omBy9UPV/" 
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-400 text-2xl"
        >
          <FaFacebookF />
        </a>
        
        <a
          href="https://github.com/Ompatil2007/Internship_batch2025" 
          target="_blank"
          rel="noopener noreferrer"
          className="text-black-500 hover:text-grey-400 text-2xl"
        >
          <FaGithub />
        </a>
        
        <a
          href="https://www.instagram.com/its_ommiiiii_?igsh=MXVpdTl4MmNvMTlvag==" 
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-500 hover:text-pink-400 text-2xl"
        >
          <FaInstagram />
        </a>

        <a
          href="https://www.linkedin.com/feed/" 
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-400 text-2xl"
        >
          <FaLinkedin />
        </a>
        
    </div>
  )
}

export default Footer