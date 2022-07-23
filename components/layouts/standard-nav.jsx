import { useState } from "react"
import Link from 'next/link'

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="bg-white p-4 lg:px-32 lg:py-8 flex justify-between items-center w-full shadow">
      <header>
        <picture>
          <source srcSet="https://media.nicholson-insurance.com/objects/icons/nicholson-logo-draft?w=480" media="(min-width: 1024px)" />
          <source srcSet="https://media.nicholson-insurance.com/objects/icons/nicholson-logo-draft?w=320" media="(min-width: 768px)" />
          <img 
            src="https://media.nicholson-insurance.com/objects/icons/nicholson-logo-draft?w=232" 
            alt="Nichlson logo" 
            width="116" 
            height="27"
            className="w-[117px] md:w-[160px] lg:w-60 h-auto"  
          />
        </picture>
      </header>
      <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden">
        <img src="/img/menu.svg" width="28" height="28" alt="Menu" />
      </button>
      <ul className={`absolute h-screen lg:h-auto top-0 left-0 w-4/5 lg:w-fit bg-white lg:bg-inherit p-4 flex-col lg:flex-row lg:gap-6 text-xl gap-2 ${menuOpen ? 'flex shadow' : 'hidden lg:static lg:flex '}`}>
        <li>
        <picture>
          <source srcSet="https://media.nicholson-insurance.com/objects/icons/nicholson-logo-draft?w=320" media="(min-width: 768px)" />
          <img 
            src="https://media.nicholson-insurance.com/objects/icons/nicholson-logo-draft?w=232" 
            alt="Nichlson logo" 
            width="116" 
            height="27"
            className="w-[117px] md:w-[160px] lg:hidden h-auto mb-8"  
          />
        </picture>
        </li>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <details className="cursor-pointer list-none relative">
            <summary className="list-none">About</summary>
            <ul className="flex flex-col pl-4 p-2 gap-2 lg:absolute lg:top-24 lg:left-0 lg:w-36 lg:bg-white lg:border lg:p-4 lg:rounded">
              <li>
                <Link href="/about-us">About us</Link>
              </li>
              <li>
                <Link href="/company-directory">Our Team</Link>
              </li>
            </ul>
          </details>
        </li>
        <li>
          <details>
            <summary className="list-none">Services</summary>
          </details>
        </li>
        <li>
          <details>
            <summary className="list-none">Resources</summary>
          </details>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
        <li>
          <Link href="/blog">Contact</Link>
        </li>
      </ul>
    </nav>
  )
}