"use client"

import Link from "next/link"
import { ArrowLeft, Check, ArrowRight, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { useRef, useEffect } from "react"

// Dados simulados dos produtos
const productsData = [
  {
    id: 1,
    name: "Karoo Chat",
    description:
      "O Karoo Chat é uma solução robusta para empresas que buscam melhorar a eficiência e a qualidade do atendimento ao cliente, com funcionalidades que atendem desde pequenas empresas até grandes corporações.",
    longDescription:
      "O Karoo Chat é uma solução completa de atendimento multicanal, desenvolvida especialmente para empresas que desejam centralizar e profissionalizar o relacionamento com seus clientes. Integrando WhatsApp, Facebook, Telegram e outros canais em um só lugar, o Karoo Chat oferece atendimento simultâneo, histórico completo das conversas, relatórios detalhados e muito mais.",
    video: "/videos/Videoclara.mp4",
    dif: "Diferenças entre API Oficial e API Web",
    apiOfficial: {
      pros: [
        "Estabilidade na conexão",
        "Garantia de entrega das mensagens",
        "Segurança na conexão",
        "Proteção para não ter o número bloqueado",
      ],
      cons: [
        "Custo",
        "Necessidade de ter um site em https, email comercial e facebook business",
        "Para iniciar um atendimento, a empresa precisa esperar o cliente autorizar a conversa para iniciar o diálogo",
        "Não é possível importar os contatos do número usado",
        "O proativo tem cobrança extra por atendimento proativo",
      ],
    },
    apiWeb: {
      pros: [
        "Custo Zero",
        "Não tem necessidade de ter um site em https, email comercial e facebook business",
        "Atendimentos proativos permitem a empresa mandar uma mensagem ao cliente, sem a necessidade dele autorizar",
        "Conseguimos importar os contatos que o cliente já conversou pelo WhatsApp",
      ],
      cons: [
        "Bloqueio de número (Se o cliente tiver um volume alto de atendimento por dia ou se marcarem o número do cliente como SPAM",
        "Instabilidade na conexão ao WhatsApp",
        "Possível lentidão e perda de mensagens nas conversas",
      ],
    },
    specifications: [
      { type: "item", text: "Atendimento centralizado via WhatsApp, Facebook, Telegram e outros canais" },
      { type: "item", text: "Histórico completo de conversas com busca rápida" },
      { type: "item", text: "Relatórios e dashboards personalizados" },
      { type: "item", text: "Transferência de atendimento entre setores" },
      { type: "item", text: "Avisos e notificações em tempo real" },
      { type: "item", text: "Sistema 100% web, sem necessidade de instalação" },
      { type: "item", text: "Integração com o Karoo Bot" },
      { type: "item", text: "Filas de atendimento configuráveis por equipe" },
    ],
    relatedProducts: [3, 4, 5],
  },
  {
    id: 2,
    name: "Karoo Bot",
    description:
      "Ideal para empresas que buscam agilidade no atendimento. O Karoo Bot oferece automação inteligente, integração com múltiplos canais e uma interface simples, tudo isso com excelente custo-benefício.",
    longDescription:
      "O Karoo Bot é uma plataforma de automação de atendimento desenvolvida para facilitar a comunicação entre empresas e seus clientes. Com foco em agilidade e eficiência, ele permite a criação de chatbots inteligentes sem a necessidade de programação. A interface visual e intuitiva torna a construção de fluxos de conversa rápida e acessível, mesmo para quem nunca trabalhou com bots. O Karoo Bot integra-se facilmente a canais como WhatsApp, sites e sistemas Alterdata, oferecendo uma experiência de atendimento moderna, automatizada e personalizada. Ideal para negócios que desejam melhorar o suporte ao cliente e ganhar escala com simplicidade.",
    // Adicione a linha abaixo para incluir a imagem específica para o conteúdo
    contentImage: "/images/botintegrations.png", // Substitua pelo caminho real da sua imagem para a seção de detalhes
    video: "/videos/karoobot.mp4",
    botintegrations: "Acima temos alguns exemplos de integrações, caso queira consultar possibilidade de integração entre em contato com nosso time!",

    specifications: [
      { type: "item", text: "Atendimento 24/7" },
      { type: "item", text: "Automação e Redução de Custos" },
      { type: "item", text: "Escalabilidade e Eficiência" },
      { type: "item", text: "Otimização da Experiência do Cliente" },
    ],
    relatedProducts: [3, 6, 1],
  },
  {
    id: 3,
    name: "Karoo KB",
    description:
      "O Karoo KB Funciona como um Repositório central de informações que alimenta uma inteligência artificial (IA), organizando dados para que a IA possa fornecer respostas rápidas e precisas, otimizando o atendimento ao cliente e a gestão interna.",
    longDescription:
      "A Base de Conhecimento Karoo funciona como o cérebro de uma inteligência artificial, sendo um sistema robusto e dinâmico que centraliza e organiza todo o conhecimento essencial para a operação eficiente de uma empresa. Seu principal objetivo é capacitar a IA a responder a uma vasta gama de perguntas e situações, tanto para clientes externos quanto para equipes internas. Ela atua como um vasto arquivo digital onde são armazenadas informações sobre produtos, serviços, políticas da empresa, procedimentos operacionais, perguntas frequentes (FAQs), e até mesmo dados técnicos complexos. Este conteúdo é cuidadosamente estruturado e categorizado, permitindo que a IA o acesse e interprete rapidamente para gerar respostas relevantes e consistentes.",
      video: "/videos/karooia.mp4",

    specifications: [
      { type: "item", text: "Capacitação da IA (Integração e Otimização)" },
      { type: "item", text: "Edição e Gestão de Conteúdo" },
      { type: "item", text: "Pesquisa e Descoberta" },
      { type: "item", text: "Acesso e Permissões" },
      { type: "item", text: "Colaboração e Automação" },
    ],
    relatedProducts: [6, 1, 2],
  },
  {
    id: 4,
    name: "Karoo IA",
    description:
      "O Karoo IA é uma solução avançada de inteligência artificial projetada para otimizar interações automatizadas, melhorar a eficiência operacional e oferecer respostas rápidas e precisas. Ele aprende continuamente, adaptando-se às necessidades do negócio e garantindo uma comunicação mais inteligente e personalizada.",
    longDescription:
      "O Karoo IA revoluciona a maneira como empresas interagem com clientes e otimizam processos internos. Com tecnologia de aprendizado contínuo, ele analisa padrões, aprimora respostas e se adapta às demandas do usuário, proporcionando interações cada vez mais naturais e eficientes. Seu sistema inteligente automatiza tarefas repetitivas, melhora a precisão das informações e contribui para a produtividade do time. Além disso, a personalização avançada garante que as respostas estejam sempre alinhadas com a identidade da marca, reforçando a qualidade do atendimento e a confiança dos clientes.",
    video: "/videos/karooia.mp4",
    specifications: [
      { type: "item", text: "Respostas Inteligentes" },
      { type: "item", text: "Atendimento Automatizado" },
      { type: "item", text: "Aprendizado Contínuo" },
      { type: "item", text: "Personalização Avançada" },
      { type: "item", text: "Treinamento Customizado" },
    ],
    relatedProducts: [1, 5, 3],
  },
  {
    id: 5,
    name: "Backup",
    description:
      "O Alterdata Backup garante a proteção dos seus sistemas com cópias automáticas e seguras, preservando a integridade dos dados e permitindo recuperação rápida quando necessário.",
    longDescription:
      "O Alterdata Backup é um serviço essencial para a segurança e continuidade dos seus sistemas. Com backups automáticos e armazenamento seguro, ele protege seus dados contra perdas e falhas, garantindo que informações críticas estejam sempre disponíveis. Além disso, oferece recuperação ágil, minimizando impactos operacionais e permitindo que sua empresa continue funcionando sem interrupções. Com tecnologia avançada e criptografia robusta, o Alterdata Backup proporciona tranquilidade e confiança para o seu negócio.",
    image: "/placeholder.svg?height=500&width=800",
    specifications: [
      { type: "title", text: "Conectividade" },
      { type: "item", text: "Conexão estável com a internet" },
      { type: "title", text: "Armazenamento" },
      { type: "item", text: "Espaço de armazenamento adequado" },
      { type: "item", text: "Permissões de backup" },
      { type: "title", text: "Operação" },
      { type: "item", text: "Agendamento de tarefas" },
      { type: "item", text: "Monitoramento ativo" },
    ],
    relatedProducts: [1, 4, 6],
  },
  {
    id: 6,
    name: "Bunker",
    description:
      "O Alterdata Bunker é um serviço de backup exclusivo para clientes Nuvem Alterdata, oferecendo armazenamento seguro e isolado para garantir máxima proteção contra perdas e ataques cibernéticos.",
    longDescription:
      "O Alterdata Bunker foi desenvolvido para reforçar a segurança dos dados dos clientes Nuvem Alterdata, criando uma camada extra de proteção contra ataques cibernéticos, como ransomware. O serviço realiza backups automáticos e armazena os dados em um ambiente separado da Nuvem Alterdata, garantindo maior resiliência contra falhas e ameaças. Além disso, os usuários podem acessar e baixar seus backups a qualquer momento, proporcionando autonomia e controle total sobre suas informações. Com criptografia avançada e um sistema de segurança robusto, o Alterdata Bunker é a solução ideal para empresas que priorizam a confiabilidade e proteção dos seus dados.",
    image: "/placeholder.svg?height=500&width=800",
    specifications: [
      { type: "item", text: "Backup isolado da Nuvem Alterdata" },
      { type: "item", text: "Monitoramento contínuo" },
      { type: "item", text: "Backups automáticos e regulares" },
      { type: "item", text: "Proteção contra ransomware" },
      { type: "item", text: "Permissões de notificação" },
    ],
    relatedProducts: [3, 2, 5],
  },
]

/*const videoElement = document.createElement("video");
        videoElement.src = "/videos/Videoclara.mp4", "/videos/karoobot.mp4", "/videos/karooia.mp4";
        videoElement.preload = "auto";
        document.body.appendChild(videoElement); */

export default function ProductPage({ params }: { params: { id: string } }) {
  const productId = Number.parseInt(params.id)
  const product = productsData.find((p) => p.id === productId)
  const videoRef = useRef<HTMLVideoElement>(null)

  // Configurar volume padrão quando o vídeo carregar
  useEffect(() => {
    if (videoRef.current && product?.video) {
      // Define o volume padrão (0.0 a 1.0)
      videoRef.current.volume = 0.15 // 15% do volume máximo
    }
  }, [product])

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
                    <Link href="https://widget.karoo.com.br/c/275?color=23272a&dptos=5675%2C24041%2C27403%2C28299%2C21192%2C367%2C27666%2C20142" target="_blank" rel="noopener noreferrer">Quero Contratar</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <Link href="https://widget.karoo.com.br/c/136?color=23272a&dptos=159%2C10788%2C10451%2C176%2C21323%2C203%2C6324%2C10102%2C177%2C10450" target="_blank" rel="noopener noreferrer">Falar com um especialista</Link>
                  </Button>
                </div>
              </div>
              <div>
                {product.video ? (
                  <div className="flex justify-end">
                    {" "}
                    {/* Move o vídeo para a direita */}
                    <video
                      ref={videoRef}
                      src={product.video}
                      controls
                      autoPlay
                      playsInline
                      loop
                      className="rounded-lg shadow-lg w-full max-w-md"// Ajustei a largura também
                    >
                      <p>Seu navegador não suporta o elemento de vídeo.</p>
                    </video>
                  </div>
                ) : (
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="rounded-lg shadow-lg w-full"
                  />
                )}
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

                  {/* New image section for content details */}
                  {product.contentImage && (
                    <div className="my-8"> {/* Added margin for spacing */}
                      <img
                        src={product.contentImage}
                        alt={`Imagem detalhada do ${product.name}`}
                        className="rounded-lg w-full max-w-xl mx-auto" // Added max-width and auto margins for centering
                      />
                    </div>
                  )}

                  <h2 className="text-2xl font-bold mb-6 text-gray-900">{product.dif}</h2>
                  <h2 className="text-1xl font-bold mb-1 text-gray-900">{product.botintegrations}</h2>
                </div>

                {/* API Sections - Only show if product has these properties */}
                {product.apiOfficial && (
                  <>
                    <h3 id="features-heading" className="text-xl font-bold mt-12 mb-6 text-gray-900">
                      API Oficial
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8" aria-labelledby="features-heading">
                      {/* Coluna de Prós */}
                      <div>
                        <h4 className="text-lg font-semibold mb-4 text-green-700 flex items-center">
                          <Check className="h-5 w-5 mr-2" />
                          Prós
                        </h4>
                        <div className="space-y-14">
                          {product.apiOfficial.pros.map((pro, index) => (
                            <div key={index} className="flex items-start">
                              <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700">{pro}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Coluna de Contras */}
                      <div>
                        <h4 className="text-lg font-semibold mb-4 text-red-700 flex items-center">
                          <X className="h-5 w-5 mr-2" />
                          Contras
                        </h4>
                        <div className="space-y-3">
                          {product.apiOfficial.cons.map((con, index) => (
                            <div key={index} className="flex items-start">
                              <X className="h-5 w-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700">{con}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </>
                )}
                {product.apiWeb && (
                  <>
                    <h3 className="text-xl font-bold mt-12 mb-6 text-gray-900">API Web</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {/* Coluna de Prós */}
                      <div>
                        <h4 className="text-lg font-semibold mb-4 text-green-700 flex items-center">
                          <Check className="h-5 w-5 mr-2" />
                          Prós
                        </h4>
                        <div className="space-y-3">
                          {product.apiWeb.pros.map((pro, index) => (
                            <div key={`web-${index}`} className="flex items-start">
                              <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700">{pro}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Coluna de Contras */}
                      <div>
                        <h4 className="text-lg font-semibold mb-4 text-red-700 flex items-center">
                          <X className="h-5 w-5 mr-2" />
                          Contras
                        </h4>
                        <div className="space-y-8">
                          {product.apiWeb.cons.map((con, index) => (
                            <div key={`web-${index}`} className="flex items-start">
                              <X className="h-5 w-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700">{con}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md h-fit">
                <h3 className="text-xl font-bold mb-6 text-gray-900">Recursos Principais</h3>
                <div className="space-y-3">
                  {product.specifications.map((spec, index) => (
                    <div key={index}>
                      {spec.type === "title" ? (
                        <h4 className="text-lg font-semibold text-gray-800 mt-4 mb-2 first:mt-0">{spec.text}</h4>
                      ) : (
                        <div className="flex items-start gap-3 ml-4">
                          <div className="w-2 h-2 bg-sky-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700 leading-relaxed">{spec.text}</span>
                        </div>
                      )}
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
              <Link href="https://widget.karoo.com.br/c/275?color=23272a&dptos=524%2C2405%2C2407%2C2408%2C26810%2C2404%2C27111%2C2406%2C6626%2C6427%2C519" target="_blank" rel="noopener noreferrer">Solicitar Demonstração Gratuita</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}