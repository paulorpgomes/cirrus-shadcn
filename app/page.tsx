"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, CheckCircle } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import AdvancedImageCarousel from "./advanced-image-carousel"

// Defina os backgrounds para cada slide
const backgrounds = [
  /*"from-sky-300 to-blue-600",

  "from-orange-500 to-red-600",
  "from-purple-500 to-purple-600",
  "from-green-500 to-teal-600", */
  "from-[rgb(48,78,157)] to-[rgb(49,114,158)]",
  "from-[rgb(255,69,0)] to-[rgb(79,139,145)]",
  "from-[rgb(82,69,150)] to-[rgb(66,62,87)]",
  "from-[rgb(6,168,130)] to-[rgb(66,62,87)]",
  "from-[rgb(48,78,157)] to-[rgb(49,114,158)]",
  "from-[rgb(82,69,150)] to-[rgb(66,62,87)]",
]

export default function Home() {
  const [currentBackground, setCurrentBackground] = useState(backgrounds[0])

  const handleSlideChange = (index: number) => {
    setCurrentBackground(backgrounds[index] || backgrounds[0])
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section com background dinâmico */}
        <section 
          className={`bg-gradient-to-r ${currentBackground} py-20 px-4 sm:px-6 lg:px-8 text-white transition-colors duration-1000`}
        >
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-6xl font-ubuntu mb-6">Cirrus</h1>
                <p className="text-lg mb-8 text-sky-100">
                  Aproveite o melhor de nosso suporte.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    asChild
                    size="lg"
                    className="bg-white text-blue-600 hover:bg-sky-100 transition-transform hover:translate-x-1"
                  >
                    <Link href="/products">
                      Ver Produtos{" "}
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-white text-blue hover:bg-white/10">
                    <Link className="bg-white text-blue-600 hover:bg-sky-100 transition-transform hover:translate-x-"
                    href="https://widget.karoo.com.br/c/469" target="_blank" rel="noopener noreferrer">Fale Conosco</Link>
                  </Button>
                </div>
              </div>
              <div className="hidden md:block w-[600px] h-[400px]">
                <AdvancedImageCarousel
                  images={[
                    "/images/karoobot.png",
                    "/images/karoochat.png",
                    "/images/karooia.png",
                    "/images/karookb.png",
                    "/images/backup.png",
                    "/images/bunker.png"
                  ]}
                  alt="Cirrus Produtos"
                  className="rounded-lg shadow-none"
                  interval={3800}
                  showControls={false}
                  showIndicators={false}
                  pauseOnHover={true}
                  onSlideChange={handleSlideChange}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Por que escolher nossos produtos?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Qualidade Superior",
                  description:
                    "Nossos produtos são fabricados com os melhores materiais e passam por rigorosos controles de qualidade.",
                },
                {
                  title: "Inovação Constante",
                  description:
                    "Estamos sempre atualizando nossos produtos com as mais recentes tecnologias do mercado.",
                },
                {
                  title: "Suporte Especializado",
                  description: "Nossa equipe de suporte está disponível para ajudar você a qualquer momento.",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="bg-sky-50 p-6 rounded-lg transition-all duration-300 hover:shadow-md hover:bg-sky-100"
                >
                  <CheckCircle className="h-10 w-10 text-sky-500 mb-4" />
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Products Preview */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="container mx-auto max-w-6xl">
            <div className="flex justify-between items-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800">Nossos Produtos</h2>
              <Button asChild variant="outline">
                <Link href="/products">
                  Ver Todos <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  id: 1,
                  name: "Karoo Chat",
                  description: "Mais que um Chat, um sistema de gestão de atendimento para sua empresa!",
                  //image: "/images/karoochat.gif", 
                  image: "/images/iconteste.png",
                },
                {
                  id: 2,
                  name: "Karoo Bot",
                  description: "Crie BOTs para agilizar o atendimento aos seus clientes!",
                  // image: "/images/karoobotdemo.png",
                  image: "/images/botteste.png",
                },
                {
                  id: 3,
                  name: "Karoo KB",
                  description: "O conhecimento da sua empresa sempre disponível e atualizado!",
                  // image: "/images/karookbdemo.png",
                  image: "/images/kbteste.png",
                },
              ].map((product) => (
                <Link
                  href={`/products/${product.id}`}
                  key={product.id}
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">{product.name}</h3>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    <span className="text-sky-600 font-medium flex items-center">
                      Saiba mais <ArrowRight className="ml-1 h-4 w-4" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">O que nossos clientes dizem</h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Veja os depoimentos reais de empresas que transformaram seus negócios com nossas soluções
            </p>

           {/* Opção 1: Vídeos com thumbnail clicável que abre o YouTube */}
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              {/* Vídeo 1 */}
              <div className="bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="relative group cursor-pointer">
                  <img
                    src="/images/pedrothumb.jpg"
                    alt="Depoimento Pedro Braga"
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center group-hover:bg-opacity-50 transition-all duration-300">
                    <div className="bg-red-600 rounded-full p-4 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                  <a
                    href="https://www.youtube.com/watch?v=tMR0MTUHGsM"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0"
                  >
                    <span className="sr-only">Assistir depoimento de Pedro Braga</span>
                  </a>
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-4">
                    <img
                      src="/images/riodasflores2.png"
                      alt="Maria Silva"
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-semibold text-gray-800">Pedro Braga</h3>
                      <p className="text-gray-500 text-sm">Contabilidade Rio das Flores</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mt-4 italic">
                    "Com apenas um clique no meu sistema, posso enviar imediatamente um documento para o meu cliente."
                  </p>
                  <a
                    href="https://www.youtube.com/watch?v=tMR0MTUHGsM"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center mt-4 text-red-600 hover:text-red-700 font-medium"
                  >
                    Assistir no YouTube
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-1M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Vídeo 2 */}
              <div className="bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="relative group cursor-pointer">
                  <img
                    src="/images/monicathumb.jpg"
                    alt="Depoimento João Oliveira"
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center group-hover:bg-opacity-50 transition-all duration-300">
                    <div className="bg-red-600 rounded-full p-4 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                  <a
                    href="https://www.youtube.com/watch?v=_5lOan2014Q"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0"
                  >
                    <span className="sr-only">Assistir depoimento de Mônica Porto</span>
                  </a>
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-4">
                    <img
                      src="/images/neocont.jpg"
                      alt="João Oliveira"
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-semibold text-gray-800">Mônica Porto</h3>
                      <p className="text-gray-500 text-sm">NeoCont</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mt-4 italic">
                    "Consigo aumentar significativamente minha produtividade no escritório, pois, com pouca interação humana, é possível atender automaticamente às solicitações dos clientes. Esse é um dos meus produtos favoritos da Alterdata."
                  </p>
                  <a
                    href="https://www.youtube.com/watch?v=_5lOan2014Q"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center mt-4 text-red-600 hover:text-red-700 font-medium"
                  >
                    Assistir no YouTube
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-1M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-[rgb(48,78,157)] to-[rgb(49,114,158)] py-16 px-4 sm:px-6 lg:px-8 text-white">
          <div className="container mx-auto max-w-6xl text-center">
            <h2 className="text-3xl font-bold mb-6">Pronto para transformar seu negócio?</h2>
            <p className="text-lg mb-8 max-w-3xl mx-auto text-sky-100">
              Entre em contato conosco hoje mesmo e descubra como nossos produtos podem ajudar sua empresa a crescer.
            </p>
            <Button asChild size="lg" className="bg-white text-sky-600 hover:bg-sky-100">
              <Link href="https://widget.karoo.com.br/c/136" target="_blank" rel="noopener noreferrer">Fale com um especialista</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}