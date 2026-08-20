"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    // Reset any opened dropdown when closing/opening main menu
    if (isOpen) {
      setOpenDropdown(null);
    }
  };

  const closeMenu = () => {
    setIsOpen(false);
    setOpenDropdown(null);
  };

  const handleLinkClick = (link: { name: string; href: string; dropdown?: { name: string; href: string }[] }, e: React.MouseEvent) => {
    if (link.dropdown && typeof window !== "undefined" && window.innerWidth <= 900) {
      e.preventDefault();
      setOpenDropdown((prev) => (prev === link.name ? null : link.name));
    } else {
      closeMenu();
    }
  };

  const navLinks = [
    { name: "HOME", href: "/" },
    { name: "ABOUT", href: "/about" },
    {
      name: "PRODUCTS",
      href: "/products",
      dropdown: [
        { name: "Industrial RO Plants", href: "/products?tab=ro" },
        { name: "STP & ETP Wastewater", href: "/products?tab=wastewater" },
        { name: "Softeners & DM Plants", href: "/products?tab=softener" },
        { name: "Domestic & Commercial RO", href: "/products?tab=domestic" },
        { name: "Components & Spare Parts", href: "/products?tab=spares" },
        { name: "Water Treatment Chemicals", href: "/chemicals" },
      ],
    },
    { name: "BLOGS", href: "/blogs" },
    { name: "CONTACT", href: "/contact" },
  ];

  return (
    <header className={`site-header ${isScrolled ? "is-scrolled" : ""}`}>
      <nav className="topbar" aria-label="Main navigation">
        {/* Left: Brand Logo & Title */}
        <Link href="/" className="topbar-left" aria-label="Aqua Shakti Industries - Home" onClick={closeMenu}>
          <img
            src="/logo.png?v=20"
            alt="Aqua Shakti Industries Logo"
            className="topbar-logo"
            width={48}
            height={48}
            loading="eager"
          />
          <div className="topbar-brand">
            AQUASHAKTI
            <span className="watercolor-text">INDUSTRIES PRIVATE LIMITED</span>
          </div>
        </Link>

        {/* Right Group: Right-Aligned Navigation Links & Contact Info */}
        <div className="topbar-right-group">
          <ul className={`topbar-nav ${isOpen ? "open" : ""}`} role="menubar">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.dropdown && link.dropdown.some((sub) => pathname === sub.href));
              const hasDropdown = !!link.dropdown;
              const isDropdownOpen = openDropdown === link.name;

              return (
                <li key={link.name} className={hasDropdown ? "has-dropdown" : ""} role="none">
                  <Link
                    href={link.href}
                    role="menuitem"
                    className={`nav-link ${isActive ? "active" : ""}`}
                    onClick={(e) => handleLinkClick(link, e)}
                  >
                    {link.name}
                    {hasDropdown && (
                      <svg className={`dropdown-arrow ${isDropdownOpen ? "is-open" : ""}`} width="9" height="5" viewBox="0 0 10 6" fill="none" stroke="currentColor">
                        <path d="M1 1L5 5L9 1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                    {/* Animated Vertical Water Dripping Stream Effect */}
                    <span className="water-drip-stream" aria-hidden="true">
                      <span className="drip-drop drip-1">
                        <svg width="10" height="12" viewBox="0 0 24 24" fill="#1a5fb4">
                          <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
                        </svg>
                      </span>
                      <span className="drip-drop drip-2">
                        <svg width="8" height="10" viewBox="0 0 24 24" fill="#0284c7">
                          <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
                        </svg>
                      </span>
                      <span className="drip-drop drip-3">
                        <svg width="6" height="8" viewBox="0 0 24 24" fill="#38bdf8">
                          <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
                        </svg>
                      </span>
                      <span className="drip-splash" />
                    </span>
                  </Link>

                  {hasDropdown && (
                    <ul className={`dropdown-menu ${isDropdownOpen ? "mobile-open" : ""}`}>
                      {link.dropdown.map((sub) => (
                        <li key={sub.name}>
                          <Link href={sub.href} onClick={closeMenu}>
                            {sub.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>

          {/* Contact Information Block */}
          <div className="topbar-contact-block">
            <a href="mailto:info@aquashaktiipl.com" className="contact-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              info@aquashaktiipl.com
            </a>
            <div className="contact-phones">
              <a href="tel:+916356008844" className="contact-item">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                +91-6356008844
              </a>
            </div>
          </div>
        </div>

        {/* Hamburger Icon for Mobile */}
        <button
          className={`hamburger ${isOpen ? "active" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </nav>
    </header>
  );
}
