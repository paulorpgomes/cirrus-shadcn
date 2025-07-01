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
    {
      name: "Henrique Maciel",
      role: "Tech Lead",
      bio: "henrique.dsn.cir",
      image: "/images/henriquedsn.png",
    },
    {
      name: "Alex Cruz",
      role: "Técnico de Qualidade",
      bio: "alex.dsn.cir",
      image: "/images/alexdsn.png",
    },
    {
      name: "Arthur Pereira",
      role: "Técnico de Implantação",
      bio: "arthur.sup.cir",
      image: "/images/arthursup.png",
    },
    {
      name: "Alexandro Gutierrez",
      role: "Técnico de Qualidade",
      bio: "alexandro.dsn.cir",
      image: "/images/alexandrodsn.png",
    },
    {
      name: "Breno Bragança",
      role: "Programador",
      bio: "breno.dsn.cir",
      image: "/images/brenodsn.png",
    },
    {
      name: "Bruno Silva",
      role: "Programador",
      bio: "bruno.dsn.cir",
      image: "/images/brunodsn.png",
    },
    {
      name: "Charles Correa",
      role: "Programador",
      bio: "charles.dsn.cir",
      image: "/images/charlesdsn.png",
    },
    {
      name: "Daniel Santos",
      role: "Programador",
      bio: "daniel.dsn.cir",
      image: "/images/danieldsn.png",
    },
    {
      name: "David Siqueira",
      role: "Programador",
      bio: "david.dsn.cir",
      image: "/images/daviddsn.png",
    },
    {
      name: "Délio Júnior",
      role: "Programador",
      bio: "delio.dsn.cir",
      image: "/images/deliodsn.png",
    },
    {
      name: "Eduardo Esplinio",
      role: "Técnico de Qualidade",
      bio: "edu.dsn.cir",
      image: "/images/edudsn.png",
    },
    {
      name: "Eduardo Damazio",
      role: "Técnico de Suporte Cirrus",
      bio: "edudamazio.sup.cir",
      image: "/images/edudamaziosup.png",
    },
    {
      name: "Everardo Pereira",
      role: "Técnico de Qualidade",
      bio: "everardo.dsn.cir",
      image: "/images/everardodsn.png",
    },
    {
      name: "Guilherme Gomes",
      role: "Técnico de Qualidade",
      bio: "falcao.dsn.cir",
      image: "/images/falcaodsn.png",
    },
    {
      name: "Gabriel Rodrigues",
      role: "Técnico de Suporte Cirrus",
      bio: "gabriel.sup.cir",
      image: "/images/gabrielsup.png",
    },
    {
      name: "Gustavo Xavier",
      role: "Técnico de Implantação J.A",
      bio: "gustavo.sup.cir",
      image: "/images/gustavosup.png",
    },
    {
      name: "Gustavo Marcelino",
      role: "Programador",
      bio: "gustavoc.dsn.cir",
      image: "/images/gustavocdsn.png",
    },
    {
      name: "Haryon Cruz",
      role: "Supervisor de Suporte Cirrus",
      bio: "haryon.sup.cir",
      image: "/images/haryonsup.png",
    },
    {
      name: "João Sá",
      role: "Técnico de Implantação",
      bio: "joao.sup.cir",
      image: "/images/joaosup.png",
    },
    {
      name: "Julia Souza",
      role: "Técnico de Implantação J.A",
      bio: "julia.sup.cir",
      image: "/images/juliasup.png",
    },
    {
      name: "Kathleen Fonseca",
      role: "Técnico de Qualidade",
      bio: "kath.dsn.cir",
      image: "/images/kathdsn.png",
    },
    {
      name: "Luana Xavier",
      role: "Técnico de Implantação",
      bio: "luana.sup.cir",
      image: "/images/luanasup.png",
    },
    {
      name: "Gabriel Silva",
      role: "Programador",
      bio: "maia.dsn.cir",
      image: "/images/maiadsn.png",
    },
    {
      name: "Marcos Rodrigues",
      role: "Técnico de Suporte Cirrus",
      bio: "marcos.sup.cir",
      image: "/images/marcossup.png",
    },
    {
      name: "Maria Mafra",
      role: "Técnico de Implantação J.A",
      bio: "duda.sup.cir",
      image: "/images/dudasup.png",
    },
    {
      name: "Matheus Cardoso",
      role: "Programador",
      bio: "mcardoso.dsn.cir",
      image: "/images/mcardosodsn.png",
    },
    {
      name: "Diego Migon",
      role: "Técnico de Qualidade",
      bio: "migon.dsn.cir",
      image: "/images/migondsn.png",
    },
    {
      name: "Miguel Nolasco",
      role: "Técnico de Implantação",
      bio: "miguel.sup.cir",
      image: "/images/miguelsup.png",
    },
    {
      name: "Millena Pacheco",
      role: "Técnico de Implantação J.A",
      bio: "millena.sup.cir",
      image: "/images/millenasup.png",
    },
    {
      name: "Paulo Ricardo",
      role: "Técnico de Suporte Cirrus",
      bio: "paulo.sup.cir",
      image: "/images/paulosup.png",
    },
    {
      name: "Renan Amaral",
      role: "Técnico de Qualidade",
      bio: "renan.dsn.cir",
      image: "/images/renandsn.png",
    },
    {
      name: "Thainá Ramos",
      role: "Técnico de Qualidade",
      bio: "thaina.dsn.cir",
      image: "/images/thainadsn.png",
    },
    {
      name: "Thiago Castro",
      role: "Programador",
      bio: "thiago.dsn.cir",
      image: "/images/thiagodsn.png",
    },
    {
      name: "Victor Monteiro",
      role: "Vendedor Karoo",
      bio: "victor.dsn.cir",
      image: "/images/victordsn.png",
    },
    {
      name: "Victor Siqueira",
      role: "Programador",
      bio: "victorhugo.dsn.cir",
      image: "/images/victorhugodsn.png",
    },


  ]

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1">
        {/* Header */}
        <section className="bg-gradient-to-r from-[rgb(48,78,157)] to-[rgb(49,114,158)] py-16 px-4 sm:px-6 lg:px-8 text-white">
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
                    rápida, leve e moderna? Foi com essa ideia na cabeça que nasceu o Cirrus, um time dentro da
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
                Conheça as pessoas talentosas que fazem o Cirrus acontecer todos os dias.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
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
                  <div className="p-1 text-center">
                    <h3 className="text-xl font-semibold mb-1 text-gray-800">{member.name}</h3>
                    <p className="text-sky-600 mb-3">{member.role}</p>
                    <p className="text-gray-600">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>



        {/* CTA Section */}
        <section className="bg-gradient-to-r from-[rgb(48,78,157)] to-[rgb(49,114,158)]  py-16 px-4 sm:px-6 lg:px-8 text-white">
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
