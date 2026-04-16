import Image from "next/image"

export function About() {
  return (
    <section id="sobre" className="py-20 lg:py-32 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative aspect-[4/5] lg:aspect-[3/4] animate-in fade-in slide-in-from-left-8 duration-700">
            <Image
              src="/images/about.jpg"
              alt="Interior da Loja Dois"
              fill
              className="object-cover"
            />
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-8 hidden lg:block">
              <span className="font-serif text-5xl font-semibold">25</span>
              <span className="block text-sm tracking-wider uppercase mt-1">Anos de história</span>
            </div>
          </div>

          <div className="animate-in fade-in slide-in-from-right-8 duration-700 delay-200">
            <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
              Nossa História
            </p>
            
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium leading-tight text-foreground mb-6">
              <span className="text-balance">Elegância que transcende o tempo</span>
            </h2>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                A Loja Dois nasceu há 25 anos com um propósito claro: vestir mulheres que buscam 
                qualidade, sofisticação e peças que expressam sua personalidade única.
              </p>
              <p>
                Ao longo dessas décadas, construímos mais do que uma loja — criamos um espaço 
                onde cada mulher pode se sentir especial. Nossa curadoria cuidadosa seleciona 
                peças que combinam tendências atuais com elegância atemporal.
              </p>
              <p>
                Localizada no coração do Setor Marista em Goiânia, oferecemos uma experiência 
                de compra personalizada, onde cada cliente recebe a atenção que merece para 
                encontrar o look perfeito.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-6">
              <div className="text-center">
                <span className="font-serif text-3xl lg:text-4xl font-semibold text-foreground">+39k</span>
                <span className="block text-sm text-muted-foreground mt-1">Seguidoras</span>
              </div>
              <div className="text-center">
                <span className="font-serif text-3xl lg:text-4xl font-semibold text-foreground">25</span>
                <span className="block text-sm text-muted-foreground mt-1">Anos</span>
              </div>
              <div className="text-center">
                <span className="font-serif text-3xl lg:text-4xl font-semibold text-foreground">4.8</span>
                <span className="block text-sm text-muted-foreground mt-1">Avaliação</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
