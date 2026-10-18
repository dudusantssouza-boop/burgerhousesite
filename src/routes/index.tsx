import { createFileRoute } from "@tanstack/react-router";
import hero from "@/assets/hero.jpg";
import { CATEGORIES, PRODUCTS, STORE, type Product } from "@/data/menu";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Burger House — Cardápio Digital (Demo)" },
      { name: "description", content: "Cardápio digital da Burger House: hambúrgueres, combos, acompanhamentos e bebidas. Projeto de demonstração." },
      { property: "og:title", content: "Burger House — Cardápio Digital" },
      { property: "og:description", content: "Hambúrgueres artesanais, combos e mais. Peça pelo WhatsApp (demo)." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const brl = (v: number) => v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

const waLink = (p: Product) =>
  `https://wa.me/${STORE.whatsappDemo}?text=${encodeURIComponent(
    `Olá! Tenho interesse em: ${p.name} (${brl(p.price)}). [Mensagem de demonstração — Burger House é fictícia]`,
  )}`;

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="bg-primary py-2 text-center text-xs font-semibold text-primary-foreground">
        Projeto de demonstração · Empresa, produtos e WhatsApp fictícios
      </div>

      <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <a href="#" className="font-display text-2xl tracking-wide">
            BURGER <span className="text-primary">HOUSE</span>
          </a>
          <a href="#info" className="text-sm text-muted-foreground hover:text-primary">Localização</a>
        </div>
        <nav className="mx-auto flex max-w-6xl gap-2 overflow-x-auto px-4 pb-3">
          {CATEGORIES.map((c) => (
            <a key={c.id} href={`#${c.id}`} className="shrink-0 rounded-full border border-border px-4 py-1.5 text-sm font-medium transition hover:border-primary hover:bg-primary hover:text-primary-foreground">
              {c.label}
            </a>
          ))}
        </nav>
      </header>

      <section className="relative overflow-hidden">
        <img src={hero} alt="Hambúrgueres artesanais da Burger House" width={1600} height={912} className="h-[60vh] min-h-[380px] w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 mx-auto max-w-6xl px-4 pb-10">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-primary">Hamburgueria artesanal</p>
          <h1 className="font-display text-5xl leading-none sm:text-7xl">
            Sabor que <span className="text-primary">derrete</span>
          </h1>
          <p className="mt-3 max-w-md text-muted-foreground">Blends feitos na casa, pão brioche e muito queijo. Escolha e chame no WhatsApp.</p>
          <a href="#hamburgueres" className="mt-6 inline-block rounded-full bg-primary px-6 py-3 font-bold text-primary-foreground shadow-glow transition hover:scale-105">
            Ver cardápio
          </a>
        </div>
      </section>

      <main className="mx-auto max-w-6xl px-4 py-12">
        {CATEGORIES.map((c) => (
          <section key={c.id} id={c.id} className="scroll-mt-32 py-8">
            <h2 className="mb-6 font-display text-4xl">
              {c.label}<span className="text-primary">.</span>
            </h2>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {PRODUCTS.filter((p) => p.category === c.id).map((p) => (
                <article key={p.name} className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition hover:border-primary">
                  <div className="relative overflow-hidden">
                    <img src={p.image} alt={p.name} loading="lazy" width={944} height={704} className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105" />
                    {p.tag && <span className="absolute left-3 top-3 rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground">{p.tag}</span>}
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="min-w-0 text-lg font-bold">{p.name}</h3>
                      <span className="shrink-0 font-display text-2xl text-primary">{brl(p.price)}</span>
                    </div>
                    <p className="mt-2 flex-1 text-sm text-muted-foreground">{p.description}</p>
                    <a href={waLink(p)} target="_blank" rel="noopener noreferrer" className="mt-5 flex items-center justify-center gap-2 rounded-xl bg-primary py-3 font-bold text-primary-foreground transition hover:brightness-110">
                      <WhatsIcon /> Pedir pelo WhatsApp
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}
      </main>

      <section id="info" className="scroll-mt-32 border-t border-border bg-card">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-14 md:grid-cols-2">
          <div className="space-y-8">
            <h2 className="font-display text-4xl">Onde <span className="text-primary">estamos</span></h2>
            <div>
              <h3 className="mb-1 text-sm font-semibold uppercase tracking-widest text-primary">Endereço</h3>
              <p>{STORE.address}</p>
            </div>
            <div>
              <h3 className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">Horário</h3>
              <ul className="space-y-1">
                {STORE.hours.map((h) => (
                  <li key={h.days} className="flex justify-between border-b border-border py-1.5 text-sm">
                    <span>{h.days}</span><span className="text-muted-foreground">{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-1 text-sm font-semibold uppercase tracking-widest text-primary">WhatsApp</h3>
              <p className="text-sm text-muted-foreground">{STORE.whatsappLabel}</p>
            </div>
          </div>
          <iframe
            title="Mapa ilustrativo"
            src={`https://www.google.com/maps?q=${encodeURIComponent(STORE.mapQuery)}&output=embed`}
            className="h-80 w-full rounded-2xl border border-border md:h-full"
            loading="lazy"
          />
        </div>
      </section>

      <footer className="px-4 py-8 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Burger House · Projeto fictício para portfólio. Localização do mapa apenas ilustrativa.
      </footer>
    </div>
  );
}

function WhatsIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
      <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.8.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.5-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6l.4-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 4.9 4.3 2.4.9 2.9.8 3.4.7.6-.1 1.7-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.3zM12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2z" />
    </svg>
  );
}
