import Link from "next/link"
import { Facebook, Instagram, Linkedin, Music } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Cirrus</h3>
            <p className="mb-4 text-sm">
              Fornecendo soluções inovadoras para empresas de todos os tamanhos.
            </p>
            <div className="flex space-x-4">
            <a
              href="https://facebook.com/karoochat"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-125"
            >
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </a>
            <a
              href="https://open.spotify.com/show/3PztqbHEzs96S2Yyo15t5b?si=378f3c9b22504a45"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-125"
            >
              <Music className="h-5 w-5" />
              <span className="sr-only">Spotify</span>
            </a>
            <a
              href="https://instagram.com/karoochat"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-125"
            >
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </a>
            <a
              href="https://www.linkedin.com/company/karoo-chat"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-125"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </div>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Produtos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/products/1"
                  className="hover:text-white transition-all duration-300 hover:translate-x-1 inline-block"
                >
                   Karoo Chat
                </Link>
              </li>
              <li>
                <Link
                  href="/products/2"
                  className="hover:text-white transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  Karoo Bot
                </Link>
              </li>
              <li>
                <Link
                  href="/products/3"
                  className="hover:text-white transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  Karoo KB
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="hover:text-white transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  Ver todos
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Empresa</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/about"
                  className="hover:text-white transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  Sobre nós
                </Link>
              </li>
              <li>
                <Link
                  href="/about#team"
                  className="hover:text-white transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  Nossa equipe
                </Link>
              </li>
              <li>
                <Link
                  href="/about#careers"
                  className="hover:text-white transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  Carreiras
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-white transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Suporte</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="https://ajuda.alterdata.com.br/karoo"
                  className="hover:text-white transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  Central de ajuda
                </Link>
              </li>
              <li>
                <Link
                  href="/support/faq"
                  className="hover:text-white transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/support/documentation"
                  className="hover:text-white transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  Documentação
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-white transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  Fale conosco
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} Alterdata Software - Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
