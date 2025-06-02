"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const routes = [
    { name: "Início", path: "/" },
    { name: "Produtos", path: "/products" },
    { name: "Sobre", path: "/about" },
    { name: "Contato", path: "/contact" },
    { name: "Comercial", path: "/comercial" },
  ]

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
  <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between items-center h-16">
      <div className="flex items-center">
        <Link href="/" className="flex items-center">
          <img 
            src="/images/LogoCirrus.png" 
            alt="Cirrus Logo" 
            className="h-14 w-auto" 
          />
        </Link>
      </div>
      
      {/* Resto do código do cabeçalho */}

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {routes.map((route) => (
              <Link
                key={route.path}
                href={route.path}
                className={cn(
                  "text-gray-600 hover:text-sky-600 transition-all duration-300 px-3 py-2 text-sm font-medium relative group",
                  pathname === route.path && "text-sky-600 font-semibold",
                )}
              >
                <span>{route.name}</span>
                <span
                  className={cn(
                    "absolute bottom-0 left-0 w-0 h-0.5 bg-sky-600 transition-all duration-300 group-hover:w-full",
                    pathname === route.path && "w-full",
                  )}
                ></span>
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button asChild variant="outline">
              <Link href="/contact">Fale Conosco</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-sky-600 focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden bg-white border-t border-gray-200 overflow-hidden transition-all duration-300 ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="container mx-auto px-4 py-3 space-y-1">
          {routes.map((route) => (
            <Link
              key={route.path}
              href={route.path}
              className={cn(
                "block px-3 py-2 text-base font-medium text-gray-600 hover:text-sky-600 hover:bg-gray-50 rounded-md",
                pathname === route.path && "text-sky-600 font-semibold",
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              {route.name}
            </Link>
          ))}
          <div className="pt-4">
            <Button asChild className="w-full" variant="outline">
              <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                Fale Conosco
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
