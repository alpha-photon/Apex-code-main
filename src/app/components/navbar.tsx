'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Blogs', path: '/blogs' },
  ]

  const serviceItems = [
    { title: "Custom Software Development",  href: "/services/custom-software" },
    { title: "Mobile App Development", href: "/services/mobile-apps" },
    { title: "Web Development",  href: "/services/web-development" },
    { title: "Cloud Solutions", href: "/services/cloud-solutions" },
    { title: "Enterprise Software Solutions", href: "/services/enterprise-software" },
    { title: "Software Architecture Consulting",  href: "/services/software-architecture" },
    { title: "DevOps Services", href: "/services/devops" },
    { title: "Software Testing and Quality Assurances", href: "/services/software-testing" },
    { title: "Project Management Consulting", href: "/services/project-management" },
    { title: "Third Party Vendor Integration", href: "/services/vendor-integration" },
    { title: "Maintenance and Support Services", href: "/services/maintenance-support" },
    { title: "Technology Assessment and Advisory", href: "/services/tech-assessment" },
    { title: "Legacy System Modernization", href: "/services/legacy-modernization" },
    { title: "E-commerce Solutions", href: "/services/ecommerce-solutions" }
  ]

  return (
    <nav className={`fixed w-full z-50 top-0 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      {/*Background effect */}
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.jpg"
                alt="Company Logo"
                width={150}
                height={40}
                className="object-contain"
              />
            </Link>
          </div>

          {/* Main Nav for Desktop */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {/* Home Link */}
              <NavLink href="/" isScrolled={isScrolled}>
                Home
              </NavLink>

              {/* Services Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className={`px-3 py-2 rounded-md text-sm font-medium ${isScrolled ? 'text-gray-800 hover:bg-gray-200' : 'text-gray-800 hover:bg-white/30'} hover:text-gray-900 transition-colors underline-offset-8 duration-300 flex items-center`}>
                    Services
                  </button>
                </DropdownMenuTrigger>

                <DropdownMenuContent className="bg-white border border-gray-200 rounded-md shadow-lg mt-2 grid grid-cols-2 gap-2 p-4 w-[600px]">
                  {serviceItems.map((item) => (
                    <DropdownMenuItem asChild key={item.title}>
                      <Link href={item.href} className="w-full text-gray-800 hover:bg-gray-100 p-2 rounded">
                        {item.title}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Remaining Links */}
              {navItems.slice(1).map((item) => (
                <NavLink key={item.name} href={item.path} isScrolled={isScrolled}>
                  {item.name}
                </NavLink>
              ))}
            </div>
          </div>

          {/* Hamburger for Mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md ${isScrolled ? 'text-gray-800 hover:bg-gray-200' : 'text-gray-800 hover:bg-white/30'} hover:text-gray-900 transition-colors duration-300`}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white shadow-lg"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {/* Home Link */}
              <NavLink href="/" isScrolled={true} mobile>
                Home
              </NavLink>

              {/* Services Dropdown for Mobile */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="w-full flex justify-between items-center px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-gray-200 hover:text-gray-900 transition-colors duration-300">
                    Services
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-white border border-gray-200 rounded-md shadow-lg mt-2 w-full">
                  {serviceItems.map((item) => (
                    <DropdownMenuItem asChild key={item.title}>
                      <Link href={item.href} className="w-full text-gray-800 hover:bg-gray-100 p-2">
                        {item.title}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Remaining Links */}
              {navItems.slice(1).map((item) => (
                <NavLink key={item.name} href={item.path} isScrolled={true} mobile>
                  {item.name}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

interface NavLinkProps {
  href: string
  children: React.ReactNode
  isScrolled: boolean
  mobile?: boolean
}

function NavLink({ href, children, isScrolled, mobile = false }: NavLinkProps) {
  return (
    <Link
      href={href}
      className={`${mobile ? 'block' : 'inline-block'} px-3 py-2 rounded-md text-sm font-medium ${
        isScrolled ? 'text-gray-800 hover:bg-gray-200' : 'text-gray-800 hover:bg-white/30'
      } hover:text-gray-900 transition-colors underline-offset-8 duration-300`}
    >
      {children}
    </Link>
  )
}