import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function AboutPage() {
  // Dados simulados da equipe
  const teamMembers = [
    {
      name: "Fernando Pimentel",
      role: "Superintendente",
      bio: "fernando.si",
      image: "/images/fernandosi.png",
    },
    {
      name: "Patricia Sendon",
      role: "Tech Lead",
      bio: "patricia.dsn.cir",
      image: "/images/patriciadsn.png",
    },
    {
      name: "Henrique Dias",
      role: "Tech Lead",
      bio: "dias.dsn.cir",
      image: "/images/diasdsn.png",
    },
    {
      name: "Erick Leão",
      role: "Tech Lead",
      bio: "erick.dsn.cir",
      image: "/images/erickdsn.png",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1">
        {/* Header */}
        <section className="bg-gradient-to-r from-sky-500 to-blue-600 py-16 px-4 sm:px-6 lg:px-8 text-white">
          <div className="container mx-auto max-w-6xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Sobre o Cirrus</h1>
            <p className="text-lg text-sky-100 max-w-3xl">
              Conheça nossa história, nossa missão e as pessoas que fazem o Cirrus acontecer.
            </p>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-gray-800">Nossa História</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    Você já parou pra pensar em como seria mais fácil se empresas e clientes se entendessem de forma
                    rápida, leve e moderna? F oi com essa ideia na cabeça que nasceu o Cirrus, um time dentro da
                    Alterdata com uma missão bem clara: criar soluções digitais em nuvem que realmente fazem a diferença
                    no dia a dia das empresas.
                  </p>
                  <p>
                    A gente começou pequeno, mas com um baita sonho: transformar o atendimento digital no Brasil. E foi
                    assim que criamos o Karoo Chat, uma plataforma de atendimento online que ajuda empresas a se
                    conectarem com seus clientes de um jeito mais humano e eficiente. Depois veio o Karoo Bot, pra
                    automatizar tudo aquilo que pode ser feito sem complicação — e deixar o atendimento ainda mais
                    rápido.
                  </p>
                  <p>
                    Nosso time é formado por pessoas apaixonadas por tecnologia, inovação e boas ideias. A gente curte
                    trabalhar junto, sem muita burocracia, com liberdade pra criar e melhorar o tempo todo. O Cirrus é
                    isso: um espaço onde a criatividade e a tecnologia andam lado a lado.
                  </p>
                </div>
              </div>
              <div className="order-first lg:order-last">
                <img src="/images/cirrusgeral.jpg" alt="Escritório da Cirrus" className="rounded-lg shadow-lg w-full" />
              </div>
            </div>
          </div>
        </section>

        {/* Mission and Values */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Nossa Missão e Valores</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Somos guiados por princípios claros que definem quem somos e como trabalhamos.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Missão",
                  description:
                    "Capacitar empresas com tecnologia inovadora que simplifica processos e impulsiona o crescimento.",
                },
                {
                  title: "Visão",
                  description:
                    "Ser reconhecida globalmente como líder em soluções tecnológicas que transformam a maneira como as empresas operam.",
                },
                {
                  title: "Valores",
                  description:
                    "Inovação, Excelência, Integridade, Colaboração e Foco no Cliente são os pilares que sustentam todas as nossas ações.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:bg-sky-50"
                >
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="py-16 px-4 sm:px-6 lg:px-8 bg-white" aria-labelledby="team-heading">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 id="team-heading" className="text-3xl font-bold mb-6 text-gray-800">
                Nossa Equipe
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Conheça as pessoas talentosas que fazem a Cirrus acontecer todos os dias.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-semibold mb-1 text-gray-800">{member.name}</h3>
                    <p className="text-sky-600 mb-3">{member.role}</p>
                    <p className="text-gray-600">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Careers Section */}
        <section id="careers" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-gray-800">Carreiras no Cirrus</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    Estamos sempre em busca de talentos excepcionais para se juntar à nossa equipe. Na Cirrus,
                    oferecemos um ambiente de trabalho dinâmico e colaborativo, onde você terá a oportunidade de
                    trabalhar com tecnologias de ponta e fazer a diferença para nossos clientes.
                  </p>
                  <p>
                    Valorizamos a diversidade, a criatividade e o espírito empreendedor. Se você é apaixonado por
                    tecnologia e quer fazer parte de uma empresa em crescimento, confira nossas vagas abertas.
                  </p>
                </div>
                <div className="mt-8">
                  <Button asChild size="lg">
                    <Link href="https://alterdata.gupy.io/">
                      Ver vagas abertas <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
              <div>
                <img
                  src="/images/LogoCirrus.png"
                  alt="Equipe Cirrus"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-sky-600 py-16 px-4 sm:px-6 lg:px-8 text-white">
          <div className="container mx-auto max-w-6xl text-center">
            <h2 className="text-3xl font-bold mb-6">Vamos trabalhar juntos</h2>
            <p className="text-lg mb-8 max-w-3xl mx-auto text-sky-100">
              Estamos prontos para ajudar sua empresa a alcançar todo o seu potencial com nossas soluções inovadoras.
            </p>
            <Button asChild size="lg" className="bg-white text-sky-600 hover:bg-sky-100">
              <Link href="/contact">Entre em contato</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
