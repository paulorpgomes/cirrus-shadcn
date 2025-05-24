import Link from "next/link"
import { ArrowLeft, Check, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

// Dados simulados dos produtos
const productsData = [
  {
    id: 1,
    name: "Karoo Chat",
    description:
      "O Karoo Chat é uma solução robusta para empresas que buscam melhorar a eficiência e a qualidade do atendimento ao cliente, com funcionalidades que atendem desde pequenas empresas até grandes corporações.",
    longDescription:
      "O Karoo Chat é uma solução completa de atendimento multicanal, desenvolvida especialmente para empresas que desejam centralizar e profissionalizar o relacionamento com seus clientes. Integrando WhatsApp, Facebook, Telegram e outros canais em um só lugar, o Karoo Chat oferece atendimento simultâneo, histórico completo das conversas, relatórios detalhados e muito mais.",
    image: "/placeholder.svg?height=500&width=800",
    features: [
      "Atendimento centralizado via WhatsApp, Facebook, Telegram e outros canais",
      "Histórico completo de conversas com busca rápida",
      "Relatórios e dashboards personalizados",
      "Transferência de atendimento entre setores",
      "Avisos e notificações em tempo real",
      "Sistema 100% web, sem necessidade de instalação",
      "Integração com o Karoo Bot",
      "Filas de atendimento configuráveis por equipe",
    ],
    specifications: {
      Capacidade: "Ilimitada",
      Usuários: "Ilimitados",
      Armazenamento: "1TB por usuário",
      Suporte: "24/7 prioritário",
      Atualizações: "Automáticas",
      Implementação: "Personalizada",
      SLA: "99.99% de uptime garantido",
    },
    relatedProducts: [3, 4, 5],
  },
  {
    id: 2,
    name: "Karoo Bot",
    description:
      "Perfeito para pequenas empresas e startups. O Cirrus Lite oferece todas as funcionalidades essenciais a um preço acessível.",
    longDescription:
      "O Cirrus Lite foi desenvolvido pensando nas necessidades específicas de pequenas empresas e startups. Oferecemos todas as funcionalidades essenciais para o gerenciamento eficiente do seu negócio, sem a complexidade desnecessária. Com uma interface intuitiva e fácil de usar, você estará operacional em minutos, não em dias. O Cirrus Lite cresce com o seu negócio, permitindo uma fácil atualização para versões mais avançadas quando necessário.",
    image: "/placeholder.svg?height=500&width=800",
    features: [
      "Todas as funcionalidades essenciais para pequenas empresas",
      "Interface intuitiva e fácil de usar",
      "Suporte por email com resposta em até 24 horas",
      "Atualizações regulares com novos recursos",
      "Segurança robusta para seus dados",
      "Capacidade de expansão conforme seu negócio cresce",
      "Tutoriais e documentação detalhada",
      "Comunidade ativa de usuários",
    ],
    specifications: {
      Capacidade: "Até 10.000 registros",
      Usuários: "Até 10 usuários",
      Armazenamento: "100GB total",
      Suporte: "Email (resposta em 24h)",
      Atualizações: "Trimestrais",
      Implementação: "Self-service com guias",
      SLA: "99.9% de uptime",
    },
    relatedProducts: [3, 6, 1],
  },
  {
    id: 3,
    name: "Karoo KB",
    description:
      "Solução baseada em nuvem para equipes remotas. O Cirrus Cloud permite que suas equipes trabalhem de qualquer lugar com acesso total aos recursos.",
    longDescription:
      "O Cirrus Cloud foi projetado para a força de trabalho moderna e distribuída. Nossa solução baseada em nuvem permite que suas equipes acessem todos os recursos de qualquer lugar e em qualquer dispositivo. Com sincronização em tempo real, colaboração integrada e backup automático, o Cirrus Cloud garante que todos estejam sempre trabalhando com os dados mais atualizados. A segurança é nossa prioridade, com autenticação de dois fatores e criptografia avançada protegendo seus dados sensíveis.",
    image: "/placeholder.svg?height=500&width=800",
    features: [
      "Acesso seguro de qualquer dispositivo (desktop, tablet, smartphone)",
      "Colaboração em tempo real entre membros da equipe",
      "Backup automático de todos os dados",
      "Sincronização offline para trabalhar sem internet",
      "Controles de permissão granulares",
      "Autenticação de dois fatores",
      "Histórico de versões e recuperação de documentos",
      "Notificações personalizáveis",
    ],
    specifications: {
      Capacidade: "Baseada no plano",
      Usuários: "5-500 dependendo do plano",
      Armazenamento: "500GB-5TB dependendo do plano",
      Suporte: "Chat e email",
      Atualizações: "Mensais",
      Implementação: "Assistida",
      SLA: "99.95% de uptime",
    },
    relatedProducts: [6, 1, 2],
  },
  {
    id: 4,
    name: "Karoo IA",
    description:
      "Solução completa para grandes corporações com necessidades específicas. Inclui implementação personalizada e treinamento da equipe.",
    longDescription:
      "O Cirrus Enterprise é nossa solução mais robusta, projetada para grandes corporações com necessidades complexas e específicas. Oferecemos implementação totalmente personalizada, integração com seus sistemas existentes e treinamento abrangente para toda a sua equipe. Com o Cirrus Enterprise, você tem acesso a uma API completa para desenvolver integrações personalizadas e garantimos conformidade com todas as regulamentações relevantes para o seu setor. Nossa equipe dedicada de gerentes de conta trabalha diretamente com você para garantir o sucesso contínuo.",
    image: "/placeholder.svg?height=500&width=800",
    features: [
      "Implementação totalmente personalizada para suas necessidades específicas",
      "Treinamento abrangente para toda a equipe",
      "API completa para integrações personalizadas",
      "Conformidade com GDPR, HIPAA, SOC 2 e outras regulamentações",
      "Gerente de conta dedicado",
      "Auditorias de segurança regulares",
      "Recuperação de desastres avançada",
      "Suporte técnico dedicado 24/7",
    ],
    specifications: {
      Capacidade: "Ilimitada",
      Usuários: "Ilimitados",
      Armazenamento: "Personalizado",
      Suporte: "Dedicado 24/7",
      Atualizações: "Controladas pelo cliente",
      Implementação: "Totalmente personalizada",
      SLA: "Personalizado até 99.999%",
    },
    relatedProducts: [1, 5, 3],
  },
  {
    id: 5,
    name: "Backup",
    description:
      "Ferramenta de análise de dados avançada que transforma seus dados em insights acionáveis para tomada de decisões.",
    longDescription:
      "O Cirrus Analytics é uma poderosa ferramenta de análise de dados que transforma informações brutas em insights acionáveis para sua empresa. Com dashboards personalizáveis, relatórios automatizados e previsões baseadas em IA, você pode tomar decisões informadas rapidamente. Nossa plataforma se integra facilmente com suas fontes de dados existentes e permite exportação em vários formatos. O Cirrus Analytics é ideal para equipes de marketing, vendas, operações e liderança que precisam entender tendências, identificar oportunidades e otimizar processos.",
    image: "/placeholder.svg?height=500&width=800",
    features: [
      "Dashboards personalizáveis com visualizações interativas",
      "Relatórios automatizados enviados por email",
      "Previsões e tendências baseadas em IA",
      "Exportação de dados em múltiplos formatos (PDF, Excel, CSV)",
      "Integração com múltiplas fontes de dados",
      "Alertas personalizáveis baseados em métricas",
      "Análise de coorte e segmentação",
      "Compartilhamento seguro de relatórios",
    ],
    specifications: {
      Capacidade: "Até 100 milhões de registros",
      Usuários: "Baseado no plano",
      Armazenamento: "Baseado no plano",
      Suporte: "Horário comercial",
      Atualizações: "Bimestrais",
      Implementação: "Assistida",
      SLA: "99.9% de uptime",
    },
    relatedProducts: [1, 4, 6],
  },
  {
    id: 6,
    name: "Bunker",
    description:
      "Aplicativo móvel que permite acesso às principais funcionalidades do Cirrus em qualquer lugar, a qualquer momento.",
    longDescription:
      "O Cirrus Mobile é nosso aplicativo dedicado que coloca o poder do Cirrus na palma da sua mão. Disponível para iOS e Android, o aplicativo permite que você acesse as principais funcionalidades do sistema em qualquer lugar, a qualquer momento. Com notificações em tempo real, você nunca perderá atualizações importantes. O modo offline permite continuar trabalhando mesmo sem conexão com a internet, com sincronização automática quando a conexão for restabelecida. A interface intuitiva foi projetada especificamente para dispositivos móveis, garantindo uma experiência de usuário excelente.",
    image: "/placeholder.svg?height=500&width=800",
    features: [
      "Disponível para iOS e Android",
      "Notificações em tempo real para atualizações importantes",
      "Modo offline com sincronização automática",
      "Interface otimizada para dispositivos móveis",
      "Autenticação biométrica (Face ID, Touch ID)",
      "Acesso rápido às funcionalidades mais utilizadas",
      "Compartilhamento fácil de arquivos e informações",
      "Baixo consumo de bateria e dados",
    ],
    specifications: {
      Compatibilidade: "iOS 12+ e Android 8+",
      "Tamanho do app": "< 50MB",
      "Uso de dados": "Otimizado",
      Suporte: "In-app e email",
      Atualizações: "Mensais",
      Requisitos: "Conta Cirrus ativa",
      Idiomas: "Português, Inglês, Espanhol",
    },
    relatedProducts: [3, 2, 5],
  },
]

export default function ProductPage({ params }: { params: { id: string } }) {
  const productId = Number.parseInt(params.id)
  const product = productsData.find((p) => p.id === productId)

  if (!product) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1 container mx-auto max-w-6xl px-4 py-16">
          <h1 className="text-3xl font-bold mb-6">Produto não encontrado</h1>
          <p className="mb-6">O produto que você está procurando não existe ou foi removido.</p>
          <Button asChild>
            <Link href="/products">
              <ArrowLeft className="mr-2 h-4 w-4" /> Voltar para produtos
            </Link>
          </Button>
        </main>
        <Footer />
      </div>
    )
  }

  const relatedProducts = product.relatedProducts
    .map((id) => productsData.find((p) => p.id === id))
    .filter(Boolean) as typeof productsData

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="bg-gray-100 py-3 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-6xl">
            <div className="flex items-center text-sm text-gray-600">
              <Link href="/" className="hover:text-sky-600">
                Início
              </Link>
              <span className="mx-2">/</span>
              <Link href="/products" className="hover:text-sky-600">
                Produtos
              </Link>
              <span className="mx-2">/</span>
              <span className="text-gray-900 font-medium">{product.name}</span>
            </div>
          </div>
        </div>

        {/* Product Header */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">{product.name}</h1>
                <p className="text-lg text-gray-600 mb-6">{product.description}</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="bg-sky-600 hover:bg-sky-700">
                    <Link href="/contact">Solicitar demonstração</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <Link href="/contact">Falar com um consultor</Link>
                  </Button>
                </div>
              </div>
              <div>
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Product Details */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-bold mb-6 text-gray-900">Sobre o {product.name}</h2>
                <div className="prose max-w-none text-gray-700">
                  <p className="mb-6">{product.longDescription}</p>
                </div>

                <h3 id="features-heading" className="text-xl font-bold mt-12 mb-6 text-gray-900">
                  Recursos principais
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4" aria-labelledby="features-heading">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-sky-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md h-fit">
                <h3 className="text-xl font-bold mb-6 text-gray-900">Especificações</h3>
                <div className="space-y-4">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between border-b border-gray-100 pb-2">
                      <span className="font-medium text-gray-700">{key}</span>
                      <span className="text-gray-600">{value}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h4 className="font-semibold mb-4 text-gray-900">Precisa de mais informações?</h4>
                  <p className="text-gray-600 text-sm mb-4">
                    Nossa equipe está pronta para responder todas as suas perguntas e ajudar você a escolher a melhor
                    solução para o seu negócio.
                  </p>
                  <Button asChild className="w-full">
                    <Link href="/contact">Entre em contato</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-200">
            <div className="container mx-auto max-w-6xl">
              <h2 className="text-2xl font-bold mb-8 text-gray-900">Produtos relacionados</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedProducts.map((relatedProduct) => (
                  <Link
                    href={`/products/${relatedProduct.id}`}
                    key={relatedProduct.id}
                    className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
                  >
                    <img
                      src={relatedProduct.image || "/placeholder.svg"}
                      alt={relatedProduct.name}
                      className="w-full h-40 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-lg font-semibold mb-2 text-gray-800">{relatedProduct.name}</h3>
                      <p className="text-gray-600 mb-4 line-clamp-2">{relatedProduct.description}</p>
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
        )}

        {/* CTA Section */}
        <section className="bg-sky-600 py-16 px-4 sm:px-6 lg:px-8 text-white">
          <div className="container mx-auto max-w-6xl text-center">
            <h2 className="text-3xl font-bold mb-6">Pronto para experimentar o {product.name}?</h2>
            <p className="text-lg mb-8 max-w-3xl mx-auto text-sky-100">
              Entre em contato conosco hoje mesmo e descubra como o {product.name} pode transformar seu negócio.
            </p>
            <Button asChild size="lg" className="bg-white text-sky-600 hover:bg-sky-100">
              <Link href="/contact">Solicitar demonstração gratuita</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
