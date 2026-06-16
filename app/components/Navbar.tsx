"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header>
      <nav className="topbar" aria-label="Main navigation">
        <Link href="/" className="topbar-left" aria-label="Aqua Shakti Industries - Home" onClick={closeMenu}>
          <img
            src="/logo.png?v=2"
            alt="Aqua Shakti Industries Logo"
            className="topbar-logo"
            width={44}
            height={44}
            loading="eager"
          />
          <div className="topbar-brand">
            AQUASHAKTI
            <span>INDUSTRIES PRIVATE LIMITED</span>
          </div>
        </Link>

        {/* Hamburger Icon */}
        <button 
          className={`hamburger ${isOpen ? 'active' : ''}`} 
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        <ul className={`topbar-nav ${isOpen ? 'open' : ''}`} role="menubar">
          <li role="none"><Link href="/" role="menuitem" onClick={closeMenu}>Home</Link></li>
          <li role="none"><Link href="/about" role="menuitem" onClick={closeMenu}>About</Link></li>
          <li role="none"><Link href="/products" role="menuitem" onClick={closeMenu}>Products</Link></li>
          <li role="none"><Link href="/chemicals" role="menuitem" onClick={closeMenu}>Chemicals</Link></li>
          <li role="none"><Link href="/contact" role="menuitem" onClick={closeMenu}>Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}
