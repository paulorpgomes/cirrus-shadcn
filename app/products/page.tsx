import Link from "next/link"
import { ArrowRight } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function ProductsPage() {
  // Dados simulados dos produtos
  const products = [
    {
      id: 1,
      name: "Karoo Chat",
      description:
        "Atendimento online com qualidade. Aventure-se pela nossa ferramenta e forneça um atendimento ágil, eficiente.",
      image: "images/chaticon.png",
      features: [
        "100% Web",
        "Dashboard dos atendimentos",
        "Integrações personalizadas",
        "Segurança de nível empresarial",
      ],
    },
    {
      id: 2,
      name: "Karoo Bot",
      description:
        "Crie fluxos personalizados, integre o BOT ao WhatsApp e ofereça sempre o mais moderno aos seus clientes!",
      image: "images/boticon.png",
      features: ["Funcionalidades essenciais", "Fácil de usar", "Suporte por email", "Atualizações regulares"],
    },
    {
      id: 3,
      name: "Karoo KB",
      description:
        "Solução baseada em nuvem para equipes remotas. O Cirrus Cloud permite que suas equipes trabalhem de qualquer lugar com acesso total aos recursos.",
      image: "/placeholder.svg?height=300&width=500",
      features: [
        "Acesso em qualquer dispositivo",
        "Colaboração em tempo real",
        "Backup automático",
        "Sincronização offline",
      ],
    },
    {
      id: 4,
      name: "Karoo IA",
      description:
        "Solução completa para grandes corporações com necessidades específicas. Inclui implementação personalizada e treinamento da equipe.",
      image: "/placeholder.svg?height=300&width=500",
      features: [
        "Implementação personalizada",
        "Treinamento da equipe",
        "API completa",
        "Conformidade com regulamentações",
      ],
    },
    {
      id: 5,
      name: "Backup",
      description:
        "Ferramenta de análise de dados avançada que transforma seus dados em insights acionáveis para tomada de decisões.",
      image: "/placeholder.svg?height=300&width=500",
      features: [
        "Dashboards personalizáveis",
        "Relatórios automatizados",
        "Previsões baseadas em IA",
        "Exportação de dados",
      ],
    },
    {
      id: 6,
      name: "Bunker",
      description:
        "Aplicativo móvel que permite acesso às principais funcionalidades do Cirrus em qualquer lugar, a qualquer momento.",
      image: "/placeholder.svg?height=300&width=500",
      features: ["Disponível para iOS e Android", "Notificações em tempo real", "Modo offline", "Interface intuitiva"],
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1">
        {/* Header */}
        <section
          className="bg-gradient-to-r from-sky-500 to-blue-600 py-16 px-4 sm:px-6 lg:px-8 text-white"
          aria-labelledby="products-heading"
        >
          <div className="container mx-auto max-w-6xl">
            <h1 id="products-heading" className="text-3xl md:text-4xl font-bold mb-4">
              Nossos Produtos
            </h1>
            <p className="text-lg text-sky-100 max-w-3xl">
              Descubra nossa linha completa de produtos projetados para atender às necessidades específicas do seu
              negócio.
            </p>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <Link
                  href={`/products/${product.id}`}
                  key={product.id}
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
                >
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h2 className="text-xl font-semibold mb-2 text-gray-800">{product.name}</h2>
                    <p className="text-gray-600 mb-4 line-clamp-3">{product.description}</p>
                    <ul className="mb-4 space-y-1">
                      {product.features.slice(0, 2).map((feature, index) => (
                        <li key={index} className="text-gray-600 text-sm flex items-start">
                          <span className="text-sky-500 mr-2">•</span> {feature}
                        </li>
                      ))}
                      {product.features.length > 2 && (
                        <li className="text-gray-600 text-sm">
                          <span className="text-sky-500 mr-2">•</span> E mais...
                        </li>
                      )}
                    </ul>
                    <span className="text-sky-600 font-medium flex items-center">
                      Ver detalhes{" "}
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-white py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-200">
          <div className="container mx-auto max-w-6xl text-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Não encontrou o que procura?</h2>
            <p className="text-lg mb-8 max-w-3xl mx-auto text-gray-600">
              Entre em contato com nossa equipe para discutir soluções personalizadas para o seu negócio.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-sky-600 hover:bg-sky-700"
            >
              Fale com um especialista
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
