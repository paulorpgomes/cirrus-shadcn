"use client"

import type React from "react"

import { useState } from "react"
import { Mail, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    interest: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, interest: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulação de envio do formulário
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        interest: "",
        message: "",
      })
    }, 1500)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1">
        {/* Header */}
        <section className="bg-gradient-to-r from-sky-500 to-blue-600 py-16 px-4 sm:px-6 lg:px-8 text-white">
          <div className="container mx-auto max-w-6xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Entre em Contato</h1>
            <p className="text-lg text-sky-100 max-w-3xl">
              Estamos aqui para responder suas perguntas e ajudar você a encontrar a solução ideal para o seu negócio.
            </p>
          </div>
        </section>

        {/* Contact Form and Info */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Envie uma mensagem</h2>

                {isSubmitted ? (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                    <h3 className="text-xl font-semibold text-green-700 mb-2">Mensagem enviada com sucesso!</h3>
                    <p className="text-green-600 mb-4">
                      Obrigado por entrar em contato. Nossa equipe responderá em breve.
                    </p>
                    <Button onClick={() => setIsSubmitted(false)} variant="outline" className="mt-2">
                      Enviar outra mensagem
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6" aria-label="Formulário de contato">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Nome completo *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Seu nome"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="seu.email@exemplo.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                          Telefone
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="(00) 00000-0000"
                        />
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                          Empresa
                        </label>
                        <Input
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Nome da sua empresa"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-1">
                        Interesse *
                      </label>
                      <Select value={formData.interest} onValueChange={handleSelectChange} required>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione uma opção" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="cirrus-pro">Cirrus Pro</SelectItem>
                          <SelectItem value="cirrus-lite">Cirrus Lite</SelectItem>
                          <SelectItem value="cirrus-cloud">Cirrus Cloud</SelectItem>
                          <SelectItem value="cirrus-enterprise">Cirrus Enterprise</SelectItem>
                          <SelectItem value="cirrus-analytics">Cirrus Analytics</SelectItem>
                          <SelectItem value="cirrus-mobile">Cirrus Mobile</SelectItem>
                          <SelectItem value="outro">Outro</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Mensagem *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder="Como podemos ajudar você?"
                        rows={5}
                      />
                    </div>

                    <Button
                      type="submit"
                      className={`w-full transition-all duration-300 ${
                        isSubmitting ? "bg-sky-400 cursor-wait" : "bg-sky-600 hover:bg-sky-700 hover:scale-[1.02]"
                      }`}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center">
                          <svg
                            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Enviando...
                        </span>
                      ) : (
                        "Enviar mensagem"
                      )}
                    </Button>
                  </form>
                )}
              </div>

              {/* Contact Info */}
              <div>
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Informações de contato</h2>

                <div className="bg-gray-50 rounded-lg p-6 mb-8">
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <MapPin className="h-6 w-6 text-sky-600 mr-4 mt-1" />
                      <div>
                        <h3 className="font-semibold text-gray-800 mb-1">Endereço</h3>
                        <p className="text-gray-600">
                          Av. Paulista, 1000
                          <br />
                          Bela Vista, São Paulo - SP
                          <br />
                          CEP: 01310-100
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Phone className="h-6 w-6 text-sky-600 mr-4 mt-1" />
                      <div>
                        <h3 className="font-semibold text-gray-800 mb-1">Telefone</h3>
                        <p className="text-gray-600">
                          +55 (11) 3000-0000
                          <br />
                          Segunda a Sexta, 9h às 18h
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Mail className="h-6 w-6 text-sky-600 mr-4 mt-1" />
                      <div>
                        <h3 className="font-semibold text-gray-800 mb-1">Email</h3>
                        <p className="text-gray-600">
                          contato@cirrus.com.br
                          <br />
                          suporte@cirrus.com.br
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">Horário de atendimento</h3>
                  <div className="space-y-2 text-gray-600">
                    <p>
                      <span className="font-medium">Segunda a Sexta:</span> 9h às 18h
                    </p>
                    <p>
                      <span className="font-medium">Sábado:</span> 9h às 13h (apenas suporte)
                    </p>
                    <p>
                      <span className="font-medium">Domingo e Feriados:</span> Fechado
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Nossa localização</h2>
            <div className="bg-gray-200 rounded-lg overflow-hidden h-96">
              {/* Aqui você pode integrar um mapa real como Google Maps */}
              <div className="w-full h-full flex items-center justify-center bg-gray-300">
                <p className="text-gray-600 font-medium">Mapa será carregado aqui</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-2xl font-bold mb-8 text-gray-800">Perguntas frequentes</h2>

            <div className="space-y-6">
              {[
                {
                  question: "Quanto tempo leva para implementar os produtos Cirrus?",
                  answer:
                    "O tempo de implementação varia de acordo com o produto e as necessidades específicas da sua empresa. O Cirrus Lite pode ser implementado em poucos dias, enquanto soluções mais complexas como o Cirrus Enterprise podem levar algumas semanas. Nossa equipe trabalha para garantir uma transição suave e eficiente.",
                },
                {
                  question: "Vocês oferecem treinamento para nossa equipe?",
                  answer:
                    "Sim, oferecemos treinamento completo para todos os nossos produtos. Dependendo do plano escolhido, o treinamento pode ser online ou presencial. Também disponibilizamos documentação detalhada e vídeos tutoriais.",
                },
                {
                  question: "É possível integrar os produtos Cirrus com outros sistemas?",
                  answer:
                    "Absolutamente. Nossos produtos foram projetados para se integrar facilmente com uma ampla variedade de sistemas e plataformas. Oferecemos APIs robustas e conectores pré-construídos para as integrações mais comuns.",
                },
                {
                  question: "Qual o suporte oferecido após a implementação?",
                  answer:
                    "Todos os nossos planos incluem suporte técnico. O nível de suporte varia de acordo com o plano escolhido, desde suporte por email até suporte prioritário 24/7. Nosso objetivo é garantir que você obtenha o máximo valor dos nossos produtos.",
                },
              ].map((faq, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-lg p-6 transition-all duration-300 hover:shadow-md hover:bg-sky-50"
                >
                  <h3 className="text-lg font-semibold mb-3 text-gray-800">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
