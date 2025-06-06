"use client"
import { useState } from "react"
import { MapPin, Phone, Clock, ChevronDown, MessageCircle, Monitor } from "lucide-react"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const businessHours = [
    { day: "Segunda a Sexta", hours: "8h às 18h", available: true },
    { day: "Sábado e Domingo", hours: "Fechado", available: false },
    { day: "Feriados Nacionais", hours: "Fechado", available: false },
  ]

  const faqs = [
    {
      question: "Quanto tempo dura a implantação?",
      answer:
        "O tempo estimado para a implantação é de aproximadamente 3 horas, podendo variar conforme as condições específicas do processo. Em alguns casos, pode ser concluída mais rapidamente, enquanto em outros pode demandar um período maior. Se precisar de mais detalhes sobre o processo, estamos à disposição!",
    },
    {
      question: "Vocês oferecem treinamento para nossa equipe?",
      answer:
        "Sim, oferecemos treinamento completo para todos os nossos produtos. Dependendo do plano escolhido, o treinamento pode ser online ou presencial. Também disponibilizamos documentação detalhada e vídeos tutoriais.",
    },
    {
      question: "É possível integrar os produtos com outros sistemas?",
      answer:
        "Absolutamente. Nossos produtos foram projetados para se integrar facilmente com uma ampla variedade de sistemas e plataformas. Oferecemos APIs robustas e conectores pré-construídos para as integrações mais comuns.",
    },
    {
      question: "Qual o suporte oferecido após a implementação?",
      answer:
        "Todos os nossos planos incluem suporte técnico. O nível de suporte varia de acordo com o plano escolhido, desde suporte por email até suporte prioritário 24/7. Nosso objetivo é garantir que você obtenha o máximo valor dos nossos produtos.",
    },
    {
      question: "Vocês oferecem período de teste gratuito?",
      answer:
        "Sim, oferecemos um período de teste gratuito de 30 dias para a maioria dos nossos produtos. Durante este período, você terá acesso completo às funcionalidades e suporte da nossa equipe para ajudar na configuração inicial.",
    },
    {
      question: "Como funciona o processo de migração de dados?",
      answer:
        "Nossa equipe especializada cuida de todo o processo de migração de dados. Realizamos uma análise prévia dos seus dados atuais, criamos um plano de migração personalizado e executamos a transferência com o mínimo de interrupção possível para suas operações.",
    },
  ]

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1">
        {/* Header */}
        <section className="bg-gradient-to-r from-[rgb(48,78,157)] to-[rgb(49,114,158)] py-16 px-4 sm:px-6 lg:px-8 text-white">
          <div className="container mx-auto max-w-6xl">
            <h1 className="text-4xl font-bold mb-4">Entre em Contato</h1>
            <p className="text-lg text-sky-100 max-w-3xl">
              Estamos aqui para responder suas perguntas e ajudar você a encontrar a solução ideal para o seu negócio.
            </p>
          </div>
        </section>

        {/* Contact Information Cards */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">Informações de Contato</h2>
            <div className="flex justify-center">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full">
                {/* WhatsApp Card */}
                <div className="bg-white rounded-lg shadow-md p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="bg-green-100 text-green-600 p-4 rounded-full">
                      <MessageCircle className="h-8 w-8" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-gray-800">WhatsApp</h3>
                      <p className="font-medium text-gray-700 mb-1">+55 (21) 97919-2800</p>
                      <p className="text-sm text-gray-500">Atendimento rápido</p>
                    </div>
                    <Button asChild className="bg-green-500 hover:bg-green-600 text-white mt-2">
                      <a href="https://wa.me/5521979192800" target="_blank" rel="noopener noreferrer" className="flex items-center">
                        <MessageCircle className="mr-2 h-4 w-4" />
                        Iniciar conversa
                      </a>
                    </Button>
                  </div>
                </div>

                {/* Widget Card */}
                <div className="bg-white rounded-lg shadow-md p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="bg-blue-100 text-blue-600 p-4 rounded-full">
                      <Monitor className="h-8 w-8" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-gray-800">Widget</h3>
                      <p className="font-medium text-gray-700 mb-1">Acesso direto</p>
                      <p className="text-sm text-gray-500">Interface personalizada</p>
                    </div>
                    <Button asChild className="bg-blue-500 hover:bg-blue-600 text-white mt-2">
                      <a href="https://widget.karoo.com.br/c/469" target="_blank" rel="noopener noreferrer" className="flex items-center">
                        <Monitor className="mr-2 h-4 w-4" />
                        Acessar Widget
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Business Hours and Location */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Business Hours */}
              <div>
                <div className="flex items-center mb-6">
                  <Clock className="h-6 w-6 text-sky-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-800">Horário de Atendimento</h2>
                </div>
                <div className="bg-gray-50 rounded-lg shadow-md p-6">
                  <div className="space-y-4">
                    {businessHours.map((schedule, index) => (
                      <div key={index}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium text-gray-700">{schedule.day}</span>
                          <div className="flex items-center">
                            <span
                              className={`mr-2 ${schedule.available ? "text-gray-700 font-medium" : "text-gray-500"}`}
                            >
                              {schedule.hours}
                            </span>
                            <span
                              className={`px-2 py-1 text-xs rounded-full ${
                                schedule.available ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                              }`}
                            >
                              {schedule.available ? "Aberto" : "Fechado"}
                            </span>
                          </div>
                        </div>
                        {index < businessHours.length - 1 && <hr className="mt-3 border-gray-200" />}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Location */}
              <div>
                <div className="flex items-center mb-6">
                  <MapPin className="h-6 w-6 text-sky-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-800">Nossa Localização</h2>
                </div>
                <div className="bg-gray-50 rounded-lg shadow-md p-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2">Endereço Completo</h3>
                      <p className="text-gray-600">
                        Rua Prefeito Sebastião Teixeira, 323 - Centro
                        <br />
                        Teresópolis, Rio de Janeiro - RJ
                        <br />
                        CEP: 	25953-200
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Google Maps Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="container mx-auto max-w-6xl">
            <div className="flex items-center justify-center mb-8">
              <MapPin className="h-6 w-6 text-sky-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-800">Como Chegar</h2>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-96 w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.2962645394147!2d-42.96352941373491!3d-22.413672911956304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDI0JzQ5LjIiUyA0MsKwNTcnNDguNyJX!5e0!3m2!1spt-BR!2sbr!4v1640000000000!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização da Cirrus"
                  className="w-full h-full"
                />
              </div>
              <div className="p-6 bg-white">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div className="flex flex-col items-center">
                    <div className="bg-blue-100 p-3 rounded-full mb-3">
                      <MapPin className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="font-semibold text-gray-800 mb-1">Endereço</h3>
                    <p className="text-sm text-gray-600">Rua Prefeito Sebastião Teixeira, 323</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="bg-green-100 p-3 rounded-full mb-3">
                      <MessageCircle className="h-6 w-6 text-green-600" />
                    </div>
                    <h3 className="font-semibold text-gray-800 mb-1">WhatsApp</h3>
                    <p className="text-sm text-gray-600">(21) 97919-2800</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="bg-purple-100 p-3 rounded-full mb-3">
                      <Clock className="h-6 w-6 text-purple-600" />
                    </div>
                    <h3 className="font-semibold text-gray-800 mb-1">Horário</h3>
                    <p className="text-sm text-gray-600">Seg-Sex: 8h às 18h</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">Perguntas Frequentes</h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleFaq(index)}
                    className={`w-full p-6 text-left transition-all duration-300 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-inset ${
                      openFaq === index ? "bg-sky-50" : "bg-white"
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-gray-800">{faq.question}</span>
                      <ChevronDown
                        className={`h-5 w-5 text-sky-600 transition-transform duration-300 ${
                          openFaq === index ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                  </button>
                  {openFaq === index && (
                    <div className="p-6 bg-gray-50 border-t border-gray-200">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-[rgb(48,78,157)] to-[rgb(49,114,158)] py-16 px-4 sm:px-6 lg:px-8 text-white">
          <div className="container mx-auto max-w-6xl text-center">
            <h2 className="text-3xl font-bold mb-6">Pronto para começar?</h2>
            <p className="text-lg mb-8 max-w-3xl mx-auto text-sky-100">
              Nossa equipe está pronta para ajudar você a encontrar a solução perfeita para o seu negócio. Entre em
              contato conosco hoje mesmo!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-sky-600 hover:bg-sky-100 transition-all duration-300 hover:-translate-y-1"
              >

              </Button>
              <Button
                asChild
                size="lg"
                className="bg-green-500 text-white hover:bg-green-600 transition-all duration-300 hover:-translate-y-1"
              >
                <a href="https://wa.me/5521979192800" className="flex items-center">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
