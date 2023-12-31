'use client'

import useHandleResize from '../components/useHandleResize'
import React, { useState } from 'react';
import Link from 'next/link';


function Navbar() {
  const [dropdown, setDropdown] = useState(false);
  const [isMobile, setIsMobile] = useState(false); // This is where setIsMobile is defined
  const [showMobile, setShowMobile] = useState(false);

  useHandleResize(setIsMobile);

  const toggleHamburger = () => {
    setDropdown(false); // Close the dropdown when toggling the hamburger
    setShowMobile(!showMobile);
  };

  const handleDropdownClick = (e) => {
    e.stopPropagation();
    setDropdown(!dropdown);
  };

  const handleNavLinkClick = (route) => {
    navigate(route);
    setDropdown(false);
    setShowMobile(false);
  };

  return (
    <div className="navbar mb-20 mt-10">
      {typeof window !== 'undefined' && isMobile && (
        <div className={`hamburger-icon ${showMobile && !dropdown ? 'open' : ''}`} onClick={toggleHamburger}>
          <div className="line" />
          <div className="line" />
          <div className="line" />
        </div>
      )}
      {(showMobile || !isMobile || dropdown) && (
        <ul className={`nav ${dropdown ? 'open' : ''}`}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact Us</Link></li>
          <li><Link href="/Events">Events</Link></li>
         
          <li>
            <Link href="/menu">Menu</Link>
          </li>
          <li>
            <Link href="/Books">Books</Link>
          </li>
          <li>
            <Link href="/Store">Store</Link>
          </li>
        </ul>
      )}
    </div>
  )
}

export default Navbar;
