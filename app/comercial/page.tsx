import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1">
        {/* Header */}
        <section className="bg-gradient-to-r from-sky-500 to-blue-600 py-16 px-4 sm:px-6 lg:px-8 text-white">
          <div className="container mx-auto max-w-6xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Preços e Produtos</h1>
            <p className="text-lg text-sky-100 max-w-3xl">
              Confira os detalhes dos nossos produtos e planos de preços para impulsionar o seu negócio.
            </p>
          </div>
        </section>

        {/* Módulos Principais */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold mb-4 text-center text-gray-800">Módulos Principais</h2>
            <p className="text-center text-gray-600 mb-12">
              Produtos independentes que podem ser contratados separadamente
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {/* Karoo Chat */}
              <div
                className="bg-gray-50 rounded-lg shadow-md p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2"
                style={{ borderColor: "rgb(255,69,0)" }}
              >
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">Karoo Chat</h3>
                  <p className="text-gray-600 mb-6">
                    Plataforma de atendimento online para conectar sua empresa com os clientes de forma eficiente e
                    humana.
                  </p>
                  <ul className="list-none text-gray-700 mb-6 space-y-2">
                    <li className="flex items-center">
                      <Check className="w-4 h-4 text-green-500 mr-2" />
                      Atendimento multi-canal
                    </li>
                    <li className="flex items-center">
                      <Check className="w-4 h-4 text-green-500 mr-2" />
                      Histórico completo
                    </li>
                    <li className="flex items-center">
                      <Check className="w-4 h-4 text-green-500 mr-2" />
                      Transferência entre operadores
                    </li>
                    <li className="flex items-center">
                      <Check className="w-4 h-4 text-green-500 mr-2" />
                      Relatórios e métricas
                    </li>
                  </ul>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-sky-600 mb-2">R$ 29,90</p>
                  <p className="text-sm text-gray-600 mb-4">por usuário/mês</p>
                  <Button asChild className="w-full">
                    <Link href="/contact">Contratar</Link>
                  </Button>
                </div>
              </div>

              {/* Karoo Bot */}
              <div
                className="bg-gray-50 rounded-lg shadow-md p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2"
                style={{ borderColor: "rgb(48,78,157)" }}
              >
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">Karoo Bot</h3>
                  <p className="text-gray-600 mb-6">
                    Automatize seu atendimento com um chatbot inteligente e personalizável.
                  </p>
                  <ul className="list-none text-gray-700 mb-6 space-y-2">
                    <li className="flex items-center">
                      <Check className="w-4 h-4 text-green-500 mr-2" />
                      Respostas automáticas 24/7
                    </li>
                    <li className="flex items-center">
                      <Check className="w-4 h-4 text-green-500 mr-2" />
                      Integração com sistemas
                    </li>
                    <li className="flex items-center">
                      <Check className="w-4 h-4 text-green-500 mr-2" />
                      Fluxos personalizáveis
                    </li>
                    <li className="flex items-center">
                      <Check className="w-4 h-4 text-green-500 mr-2" />
                      Triagem inteligente
                    </li>
                  </ul>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-sky-600 mb-2">R$ 49,90</p>
                  <p className="text-sm text-gray-600 mb-4">preço único/mês</p>
                  <Button asChild className="w-full">
                    <Link href="/contact">Contratar</Link>
                  </Button>
                </div>
              </div>

              {/* Karoo Base de Conhecimento */}
              <div
                className="bg-gray-50 rounded-lg shadow-md p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2"
                style={{ borderColor: "rgb(6,168,130)" }}
              >
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">Karoo Base de Conhecimento</h3>
                  <p className="text-gray-600 mb-6">
                    Centralize informações e facilite o acesso ao conhecimento da sua empresa.
                  </p>
                  <ul className="list-none text-gray-700 mb-6 space-y-2">
                    <li className="flex items-center">
                      <Check className="w-4 h-4 text-green-500 mr-2" />
                      Organização de conteúdo
                    </li>
                    <li className="flex items-center">
                      <Check className="w-4 h-4 text-green-500 mr-2" />
                      Busca inteligente
                    </li>
                    <li className="flex items-center">
                      <Check className="w-4 h-4 text-green-500 mr-2" />
                      Acesso controlado
                    </li>
                    <li className="flex items-center">
                      <Check className="w-4 h-4 text-green-500 mr-2" />
                      Atualizações em tempo real
                    </li>
                  </ul>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-sky-600 mb-2">R$ 19,90</p>
                  <p className="text-sm text-gray-600 mb-4">preço único/mês</p>
                  <Button asChild className="w-full">
                    <Link href="/contact">Contratar</Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Karoo IA Plans */}
            <h3 className="text-2xl font-bold mb-8 text-center text-gray-800">Karoo IA - Planos por Conversas</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { conversations: "1.000", price: "169,80" },
                { conversations: "2.500", price: "309,80" },
                { conversations: "5.000", price: "509,80" },
                { conversations: "10.000", price: "909,80" },
              ].map((plan, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-lg shadow-md p-6 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2"
                  style={{ borderColor: "rgb(82,69,150)" }}
                >
                  <h4 className="text-xl font-bold mb-2 text-gray-800">{plan.conversations} Conversas</h4>
                  <p className="text-3xl font-bold text-sky-600 mb-4">R$ {plan.price}</p>
                  <p className="text-sm text-gray-600 mb-4">por mês</p>
                  <Button asChild size="sm" className="w-full">
                    <Link href="/contact">Contratar</Link>
                  </Button>
                </div>
              ))}
            </div>

            <div className="mt-6 text-center">
              <p className="text-gray-600 text-sm">
                <strong>Bilhetagem Extra:</strong> R$ 0,10 por conversa após exceder o limite do plano IA
              </p>
            </div>
          </div>
        </section>

        {/* Integrações */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold mb-4 text-center text-gray-800">Integrações</h2>
            <p className="text-center text-gray-600 mb-12">Conecte o Karoo com suas ferramentas favoritas</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Integração Bimer */}
              <div
                className="bg-white rounded-lg shadow-md p-8 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2"
                style={{ borderColor: "rgb(0,96,156)" }}
              >
                <h3 className="text-xl font-bold mb-4 text-gray-800">Integração Bimer</h3>
                <p className="text-gray-600 mb-14">Conecte seu sistema Bimer com o Karoo para uma gestão integrada.</p>
                <p className="text-3xl font-bold text-sky-600 mb-4">R$ 199,90</p>
                <p className="text-sm text-gray-600 mb-6">por mês</p>
                <Button asChild className="w-full">
                  <Link href="/contact">Contratar</Link>
                </Button>
              </div>

              {/* WhatsApp API */}
              <div
                className="bg-white rounded-lg shadow-md p-8 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2"
                style={{ borderColor: "rgb(255,73,110)" }}
              >
                <h3 className="text-xl font-bold mb-4 text-gray-800">Integração API Oficial</h3>
                <p className="text-gray-600 mb-7">Integração oficial com WhatsApp Business API do Grupo Meta.</p>
                <div className="mb-4">
                  <p className="text-2xl font-bold text-sky-600">R$ 176,00</p>
                  <p className="text-sm text-gray-600">taxa mensal</p>
                  <p className="text-lg font-semibold text-sky-600 mt-2">+ R$ 0,40</p>
                  <p className="text-sm text-gray-600">por conversa iniciada pela empresa</p>
                </div>
                <Button asChild className="w-full">
                  <Link href="/contact">Contratar</Link>
                </Button>
              </div>

              {/* WhatsApp Web */}
              <div className="bg-white rounded-lg shadow-md p-8 text-center border-2 border-green-500 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="flex justify-center mb-4">
                  <Badge className="bg-green-500 text-white">Gratuito</Badge>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">Integração WhatsApp Web</h3>
                <p className="text-gray-600 mb-6">Integração básica com WhatsApp Web para pequenas empresas.</p>
                <p className="text-3xl font-bold text-green-600 mb-4">R$ 0,00</p>
                <p className="text-sm text-gray-600 mb-4">Doado</p>
                <Button asChild className="w-full bg-green-600 hover:bg-green-700">
                  <Link href="/contact">Ativar</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Observações Importantes */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-yellow-50 border-t border-yellow-200">
          <div className="container mx-auto max-w-6xl">
            <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">Observações Importantes</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h4 className="text-lg font-semibold mb-3 text-gray-800 flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-2" />
                  Taxa de Adesão
                </h4>
                <p className="text-gray-600">
                  <strong>R$ 467,00</strong> cobrado APENAS uma única vez por venda, independentemente de quantos
                  produtos Karoo forem adquiridos simultaneamente na mesma transação.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h4 className="text-lg font-semibold mb-3 text-gray-800 flex items-center">
                  <Check className="w-5 h-5 text-blue-500 mr-2" />
                  Conversas WhatsApp API
                </h4>
                <ul className="text-gray-600 space-y-1">
                  <li>
                    <strong>Iniciadas por usuários:</strong> Não são cobradas
                  </li>
                  <li>
                    <strong>Iniciadas pela empresa:</strong> R$ 0,40 por conversa
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-sky-600 py-16 px-4 sm:px-6 lg:px-8 text-white">
          <div className="container mx-auto max-w-6xl text-center">
            <h2 className="text-3xl font-bold mb-6">Pronto para transformar seu atendimento?</h2>
            <p className="text-lg mb-8 max-w-3xl mx-auto text-sky-100">
              Entre em contato conosco para saber mais sobre como nossas soluções podem beneficiar sua empresa e receber
              um orçamento personalizado.
            </p>
            <Button asChild size="lg" className="bg-white text-sky-600 hover:bg-sky-100">
              <Link href="https://widget.karoo.com.br/c/469" target="_blank" rel="noopener noreferrer">
                Fale Conosco
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
