"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ShoppingBag, MessageCircle } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useCart } from "@/contexts/cart-context"

export default function CheckoutPage() {
  const { items, totalPrice, clearCart } = useCart()
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    cpf: "",
    cep: "",
    address: "",
    number: "",
    complement: "",
    neighborhood: "",
    city: "",
    state: "",
  })
  const [orderComplete, setOrderComplete] = useState(false)

  const shippingCost = totalPrice >= 299 ? 0 : 19.90
  const finalTotal = totalPrice + shippingCost

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault()
    setOrderComplete(true)
    clearCart()
  }

  const generateWhatsAppOrder = () => {
    const orderItems = items.map(item => 
      `- ${item.product.name} (${item.selectedSize}/${item.selectedColor}) x${item.quantity}: ${(item.product.price * item.quantity).toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}`
    ).join("\n")
    
    const message = `*Novo Pedido - Loja Dois*\n\n*Dados do Cliente:*\nNome: ${formData.name}\nTelefone: ${formData.phone}\nEmail: ${formData.email}\n\n*Endereço de Entrega:*\n${formData.address}, ${formData.number}${formData.complement ? ` - ${formData.complement}` : ""}\n${formData.neighborhood}\n${formData.city} - ${formData.state}\nCEP: ${formData.cep}\n\n*Itens do Pedido:*\n${orderItems}\n\n*Subtotal:* ${totalPrice.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}\n*Frete:* ${shippingCost === 0 ? "Grátis" : shippingCost.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}\n*Total:* ${finalTotal.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}`
    
    return `https://wa.me/5562994335402?text=${encodeURIComponent(message)}`
  }

  if (orderComplete) {
    return (
      <main className="min-h-screen">
        <Header />
        <section className="pt-32 pb-20">
          <div className="container mx-auto px-4 lg:px-8 max-w-2xl text-center">
            <div className="bg-card p-8 lg:p-12 border border-border animate-in fade-in zoom-in-95 duration-500">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShoppingBag className="w-10 h-10 text-green-600" />
              </div>
              <h1 className="font-serif text-3xl text-foreground mb-4">
                Pedido Recebido!
              </h1>
              <p className="text-muted-foreground mb-8">
                Obrigada pela sua compra! Para finalizar e efetuar o pagamento, 
                clique no botão abaixo para enviar os detalhes do pedido via WhatsApp.
              </p>
              <Link
                href={generateWhatsAppOrder()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-600 text-white px-8 py-4 text-sm tracking-wider uppercase hover:bg-green-700 transition-colors mb-4 w-full"
              >
                <MessageCircle className="w-5 h-5" />
                Finalizar no WhatsApp
              </Link>
              <Link
                href="/loja"
                className="inline-flex items-center justify-center gap-2 border border-border text-foreground px-8 py-4 text-sm tracking-wider uppercase hover:bg-secondary transition-colors w-full"
              >
                Continuar Comprando
              </Link>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    )
  }

  if (items.length === 0) {
    return (
      <main className="min-h-screen">
        <Header />
        <section className="pt-32 pb-20">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <ShoppingBag className="w-20 h-20 text-muted-foreground mx-auto mb-6" />
            <h1 className="font-serif text-3xl text-foreground mb-4">
              Carrinho Vazio
            </h1>
            <p className="text-muted-foreground mb-8">
              Adicione produtos ao carrinho para continuar
            </p>
            <Link
              href="/loja"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 text-sm tracking-wider uppercase hover:bg-primary/90 transition-colors"
            >
              Explorar Loja
            </Link>
          </div>
        </section>
        <Footer />
      </main>
    )
  }

  return (
    <main className="min-h-screen">
      <Header />
      
      <section className="pt-24 lg:pt-32 pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          <Link
            href="/loja"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm tracking-wider uppercase">Continuar comprando</span>
          </Link>

          <h1 className="font-serif text-3xl lg:text-4xl text-foreground mb-8">
            Checkout
          </h1>

          {/* Progress Steps */}
          <div className="flex items-center gap-4 mb-12">
            {[1, 2].map((s) => (
              <div key={s} className="flex items-center gap-2">
                <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm ${
                  step >= s ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground"
                }`}>
                  {s}
                </span>
                <span className={`text-sm tracking-wider uppercase ${
                  step >= s ? "text-foreground" : "text-muted-foreground"
                }`}>
                  {s === 1 ? "Dados" : "Revisão"}
                </span>
                {s === 1 && <div className="w-12 h-px bg-border" />}
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmitOrder}>
                {step === 1 && (
                  <div className="space-y-8 animate-in fade-in slide-in-from-left-4 duration-500">
                    {/* Personal Data */}
                    <div>
                      <h2 className="font-serif text-xl text-foreground mb-4">Dados Pessoais</h2>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="sm:col-span-2">
                          <label className="block text-sm text-muted-foreground mb-2">Nome Completo</label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="w-full bg-card border border-border px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                          />
                        </div>
                        <div>
                          <label className="block text-sm text-muted-foreground mb-2">E-mail</label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="w-full bg-card border border-border px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                          />
                        </div>
                        <div>
                          <label className="block text-sm text-muted-foreground mb-2">Telefone</label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            required
                            className="w-full bg-card border border-border px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                          />
                        </div>
                        <div>
                          <label className="block text-sm text-muted-foreground mb-2">CPF</label>
                          <input
                            type="text"
                            name="cpf"
                            value={formData.cpf}
                            onChange={handleInputChange}
                            required
                            className="w-full bg-card border border-border px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Address */}
                    <div>
                      <h2 className="font-serif text-xl text-foreground mb-4">Endereço de Entrega</h2>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm text-muted-foreground mb-2">CEP</label>
                          <input
                            type="text"
                            name="cep"
                            value={formData.cep}
                            onChange={handleInputChange}
                            required
                            className="w-full bg-card border border-border px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                          />
                        </div>
                        <div className="sm:col-span-2">
                          <label className="block text-sm text-muted-foreground mb-2">Endereço</label>
                          <input
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleInputChange}
                            required
                            className="w-full bg-card border border-border px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                          />
                        </div>
                        <div>
                          <label className="block text-sm text-muted-foreground mb-2">Número</label>
                          <input
                            type="text"
                            name="number"
                            value={formData.number}
                            onChange={handleInputChange}
                            required
                            className="w-full bg-card border border-border px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                          />
                        </div>
                        <div>
                          <label className="block text-sm text-muted-foreground mb-2">Complemento</label>
                          <input
                            type="text"
                            name="complement"
                            value={formData.complement}
                            onChange={handleInputChange}
                            className="w-full bg-card border border-border px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                          />
                        </div>
                        <div>
                          <label className="block text-sm text-muted-foreground mb-2">Bairro</label>
                          <input
                            type="text"
                            name="neighborhood"
                            value={formData.neighborhood}
                            onChange={handleInputChange}
                            required
                            className="w-full bg-card border border-border px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                          />
                        </div>
                        <div>
                          <label className="block text-sm text-muted-foreground mb-2">Cidade</label>
                          <input
                            type="text"
                            name="city"
                            value={formData.city}
                            onChange={handleInputChange}
                            required
                            className="w-full bg-card border border-border px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                          />
                        </div>
                        <div>
                          <label className="block text-sm text-muted-foreground mb-2">Estado</label>
                          <select
                            name="state"
                            value={formData.state}
                            onChange={handleInputChange}
                            required
                            className="w-full bg-card border border-border px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                          >
                            <option value="">Selecione</option>
                            <option value="AC">AC</option>
                            <option value="AL">AL</option>
                            <option value="AP">AP</option>
                            <option value="AM">AM</option>
                            <option value="BA">BA</option>
                            <option value="CE">CE</option>
                            <option value="DF">DF</option>
                            <option value="ES">ES</option>
                            <option value="GO">GO</option>
                            <option value="MA">MA</option>
                            <option value="MT">MT</option>
                            <option value="MS">MS</option>
                            <option value="MG">MG</option>
                            <option value="PA">PA</option>
                            <option value="PB">PB</option>
                            <option value="PR">PR</option>
                            <option value="PE">PE</option>
                            <option value="PI">PI</option>
                            <option value="RJ">RJ</option>
                            <option value="RN">RN</option>
                            <option value="RS">RS</option>
                            <option value="RO">RO</option>
                            <option value="RR">RR</option>
                            <option value="SC">SC</option>
                            <option value="SP">SP</option>
                            <option value="SE">SE</option>
                            <option value="TO">TO</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="w-full bg-primary text-primary-foreground py-4 text-sm tracking-wider uppercase hover:bg-primary/90 transition-colors"
                    >
                      Continuar
                    </button>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
                    <div>
                      <h2 className="font-serif text-xl text-foreground mb-4">Revise seu Pedido</h2>
                      
                      <div className="bg-card border border-border p-6 mb-6">
                        <h3 className="text-sm tracking-wider uppercase text-muted-foreground mb-3">Dados de Entrega</h3>
                        <p className="text-foreground">{formData.name}</p>
                        <p className="text-muted-foreground text-sm">{formData.email}</p>
                        <p className="text-muted-foreground text-sm">{formData.phone}</p>
                        <p className="text-muted-foreground text-sm mt-3">
                          {formData.address}, {formData.number}{formData.complement && ` - ${formData.complement}`}
                        </p>
                        <p className="text-muted-foreground text-sm">
                          {formData.neighborhood} - {formData.city}/{formData.state}
                        </p>
                        <p className="text-muted-foreground text-sm">CEP: {formData.cep}</p>
                        
                        <button
                          type="button"
                          onClick={() => setStep(1)}
                          className="text-accent text-sm hover:underline mt-4"
                        >
                          Editar dados
                        </button>
                      </div>

                      <div className="bg-card border border-border p-6">
                        <h3 className="text-sm tracking-wider uppercase text-muted-foreground mb-4">Itens do Pedido</h3>
                        <div className="space-y-4">
                          {items.map((item) => (
                            <div key={`${item.product.id}-${item.selectedSize}-${item.selectedColor}`} className="flex gap-4">
                              <div className="relative w-16 h-20 bg-secondary flex-shrink-0">
                                <Image
                                  src={item.product.image}
                                  alt={item.product.name}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                              <div className="flex-1">
                                <p className="text-foreground text-sm">{item.product.name}</p>
                                <p className="text-muted-foreground text-xs">{item.selectedSize} / {item.selectedColor}</p>
                                <p className="text-muted-foreground text-xs">Qtd: {item.quantity}</p>
                              </div>
                              <p className="text-foreground text-sm">
                                {(item.product.price * item.quantity).toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="flex-1 border border-border text-foreground py-4 text-sm tracking-wider uppercase hover:bg-secondary transition-colors"
                      >
                        Voltar
                      </button>
                      <button
                        type="submit"
                        className="flex-1 bg-primary text-primary-foreground py-4 text-sm tracking-wider uppercase hover:bg-primary/90 transition-colors"
                      >
                        Finalizar Pedido
                      </button>
                    </div>
                  </div>
                )}
              </form>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-card border border-border p-6 sticky top-24">
                <h2 className="font-serif text-xl text-foreground mb-6">Resumo do Pedido</h2>
                
                <div className="space-y-4 pb-6 border-b border-border">
                  {items.map((item) => (
                    <div key={`${item.product.id}-${item.selectedSize}-${item.selectedColor}`} className="flex justify-between text-sm">
                      <span className="text-muted-foreground">
                        {item.product.name} x{item.quantity}
                      </span>
                      <span className="text-foreground">
                        {(item.product.price * item.quantity).toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="space-y-3 py-6 border-b border-border">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="text-foreground">
                      {totalPrice.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Frete</span>
                    <span className={shippingCost === 0 ? "text-green-600" : "text-foreground"}>
                      {shippingCost === 0 ? "Grátis" : shippingCost.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
                    </span>
                  </div>
                </div>

                <div className="flex justify-between pt-6">
                  <span className="font-serif text-lg text-foreground">Total</span>
                  <span className="font-serif text-lg text-foreground">
                    {finalTotal.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
                  </span>
                </div>

                {totalPrice < 299 && (
                  <p className="text-xs text-muted-foreground mt-4">
                    Faltam {(299 - totalPrice).toLocaleString("pt-BR", { style: "currency", currency: "BRL" })} para frete grátis!
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
