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
                    href="/contact">Fale Conosco</Link>
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
                  description: "Mais que um CHAT, um sistema de gestão de atendimento para sua empresa!",
                  image: "/images/karoochat.gif",
                },
                {
                  id: 2,
                  name: "Karoo Bot",
                  description: "Crie BOTs para agilizar o atendimento aos seus clientes!",
                  image: "/images/karoobotdemo.png",
                },
                {
                  id: 3,
                  name: "Karoo KB",
                  description: "O Cérebro da sua IA, fornecendo respostas precisas e alinhadas tanto para sua equipe interna, quanto para seus clientes externos.",
                  image: "/images/karookbdemo.png",
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  name: "Maria Silva",
                  company: "Tech Solutions",
                  quote:
                    "Os produtos da Cirrus transformaram completamente nossos processos internos. Recomendo fortemente!",
                },
                {
                  name: "João Oliveira",
                  company: "Inovação Digital",
                  quote: "Estamos usando o Cirrus Pro há 2 anos e a diferença na produtividade é impressionante.",
                },
              ].map((testimonial, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-semibold text-gray-800">{testimonial.name}</p>
                    <p className="text-gray-500">{testimonial.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-sky-600 py-16 px-4 sm:px-6 lg:px-8 text-white">
          <div className="container mx-auto max-w-6xl text-center">
            <h2 className="text-3xl font-bold mb-6">Pronto para transformar seu negócio?</h2>
            <p className="text-lg mb-8 max-w-3xl mx-auto text-sky-100">
              Entre em contato conosco hoje mesmo e descubra como nossos produtos podem ajudar sua empresa a crescer.
            </p>
            <Button asChild size="lg" className="bg-white text-sky-600 hover:bg-sky-100">
              <Link href="/contact">Fale com um especialista</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}