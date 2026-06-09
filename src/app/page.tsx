import Link from 'next/link'

import { Container } from '@/components/Container'
import { faqs, services, site, zones } from '@/data/site'

const whatsappUrl = `https://wa.me/${site.whatsapp}`

function PhoneLink({
  children = `Chiama ${site.phone}`,
  className = '',
}: {
  children?: React.ReactNode
  className?: string
}) {
  return (
    <Link
      href={`tel:${site.tel}`}
      className={`inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-950/15 transition hover:bg-slate-800 ${className}`}
    >
      {children}
    </Link>
  )
}

function WhatsAppLink({ className = '' }: { className?: string }) {
  return (
    <Link
      href={whatsappUrl}
      className={`inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:border-emerald-500 hover:text-emerald-700 ${className}`}
    >
      WhatsApp
    </Link>
  )
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur">
      <Container className="flex min-h-20 items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-lg font-black text-white">
            CM
          </span>
          <span className="leading-tight">
            <span className="block font-display text-lg font-bold tracking-tight text-slate-950">
              Carroattrezzi Mantova
            </span>
            <span className="block text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              soccorso stradale
            </span>
          </span>
        </Link>
        <nav className="hidden items-center gap-7 text-sm font-semibold text-slate-700 lg:flex">
          <a href="#servizi" className="hover:text-slate-950">
            Servizi
          </a>
          <a href="#zone" className="hover:text-slate-950">
            Zone
          </a>
          <a href="#prezzi" className="hover:text-slate-950">
            Prezzi
          </a>
          <a href="#faq" className="hover:text-slate-950">
            FAQ
          </a>
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <WhatsAppLink className="py-2.5" />
          <PhoneLink className="py-2.5" />
        </div>
        <PhoneLink className="lg:hidden">Chiama</PhoneLink>
      </Container>
    </header>
  )
}

function LogoMark() {
  return (
    <div className="relative h-[360px] overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900 shadow-2xl shadow-slate-950/30 lg:h-[520px]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,197,94,0.22),transparent_28%),radial-gradient(circle_at_80%_30%,rgba(14,165,233,0.22),transparent_26%),linear-gradient(135deg,#020617,#0f172a_55%,#111827)]" />
      <div className="absolute inset-x-10 bottom-16 h-28 skew-y-[-10deg] rounded-full bg-white/10 blur-3xl" />
      <div className="absolute left-10 top-10 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white/90">
        Centrale operativa 24H
      </div>
      <div className="absolute inset-x-8 bottom-8">
        <div className="rounded-[1.5rem] border border-white/10 bg-white/10 p-5 backdrop-blur">
          <div className="flex items-center justify-between gap-5">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">
                Mantova e provincia
              </p>
              <p className="mt-2 font-display text-3xl font-bold text-white">
                Traino, recupero, assistenza.
              </p>
            </div>
            <div className="hidden h-20 w-20 items-center justify-center rounded-2xl bg-emerald-400 text-3xl font-black text-slate-950 sm:flex">
              24
            </div>
          </div>
        </div>
      </div>
      <div className="absolute left-14 top-32 h-28 w-28 rounded-3xl border border-white/15 bg-white/10" />
      <div className="absolute right-12 top-32 h-40 w-56 rounded-[2rem] border border-white/15 bg-white/10" />
      <div className="absolute left-24 top-52 h-20 w-72 rounded-full border border-emerald-300/30 bg-emerald-300/10" />
      <div className="absolute right-20 top-64 h-3 w-48 rounded-full bg-white/30" />
      <div className="absolute right-28 top-72 h-3 w-36 rounded-full bg-emerald-300/70" />
    </div>
  )
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-50">
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,white,transparent_30%),radial-gradient(circle_at_top_right,rgba(16,185,129,0.16),transparent_35%)]" />
      <Container className="relative grid gap-12 pb-20 pt-16 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:pb-28 lg:pt-24">
        <div>
          <p className="mb-5 inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-800">
            Pronto intervento locale per auto ferme, incidenti e guasti
          </p>
          <h1 className="font-display text-5xl font-bold tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
            Carroattrezzi a Mantova
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
            Quando il veicolo si ferma, serve una risposta concreta: una
            chiamata chiara, un mezzo adatto e una destinazione concordata
            senza perdere tempo. Gestiamo soccorso stradale, traino auto,
            recupero dopo incidente e trasporto veicoli a Mantova con un
            approccio ordinato, rapido e professionale.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <PhoneLink />
            <WhatsAppLink />
          </div>
          <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-slate-200 pt-8">
            {[
              ['24H', 'urgenze'],
              ['12', 'servizi'],
              ['MN', 'zona locale'],
            ].map(([value, label]) => (
              <div key={label}>
                <dt className="text-sm text-slate-500">{label}</dt>
                <dd className="mt-1 font-display text-3xl font-bold text-slate-950">
                  {value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <LogoMark />
      </Container>
    </section>
  )
}

function SectionHeading({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string
  title: string
  text: string
}) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm font-bold uppercase tracking-[0.22em] text-emerald-700">
        {eyebrow}
      </p>
      <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-lg leading-8 text-slate-700">{text}</p>
    </div>
  )
}

function Urgencies() {
  return (
    <section className="bg-white py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1fr] lg:items-start">
          <SectionHeading
            eyebrow="urgenze"
            title="Prima la sicurezza, poi il recupero."
            text="Un buon intervento non parte dal carroattrezzi, parte dalle informazioni giuste. Dove si trova il mezzo? È in una posizione pericolosa? Può essere spostato o va caricato? Da queste risposte dipende la soluzione migliore."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              'Auto ferma in strada o parcheggio',
              'Guasto improvviso e veicolo non marciante',
              'Incidente con mezzo da recuperare',
              'Batteria scarica o avviamento impossibile',
            ].map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-6"
              >
                <p className="font-semibold text-slate-950">{item}</p>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Ti guidiamo al telefono e organizziamo il recupero con tempi,
                  destinazione e modalità comprensibili.
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

function Services() {
  return (
    <section id="servizi" className="bg-slate-950 py-24 text-white">
      <Container>
        <SectionHeading
          eyebrow="servizi"
          title="Dodici servizi, una gestione precisa."
          text="Ogni richiesta viene valutata in base a mezzo, posizione e destinazione. Così il servizio è coerente con il problema reale, non una risposta generica."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Link
              key={service.slug}
              href={`/servizi/${service.slug}/`}
              className="group rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:bg-white/[0.07]"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-400 text-sm font-black text-slate-950">
                {String(index + 1).padStart(2, '0')}
              </div>
              <h3 className="mt-5 font-display text-xl font-bold">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                {service.text}
              </p>
              <span className="mt-5 inline-flex text-sm font-semibold text-emerald-300">
                Apri servizio
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  )
}

function Zones() {
  return (
    <section id="zone" className="bg-white py-24">
      <Container>
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="zone servite"
            title="Mantova e comuni vicini, con link locali pronti."
            text="Le pagine città sono predisposte per lavorare sul territorio: ogni link è già strutturato per una futura pagina dedicata, utile per richieste locali e copertura SEO."
          />
          <PhoneLink />
        </div>
        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {zones.map((zone) => (
            <Link
              key={zone.slug}
              href={`/zone/${zone.slug}/`}
              className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 font-semibold text-slate-800 transition hover:border-emerald-300 hover:bg-emerald-50"
            >
              {zone.title}
            </Link>
          ))}
        </div>
      </Container>
    </section>
  )
}

function WhyProcessPricing() {
  return (
    <section id="prezzi" className="bg-slate-50 py-24">
      <Container>
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <h2 className="font-display text-3xl font-bold text-slate-950">
              Perché scegliere noi
            </h2>
            <ul className="mt-6 space-y-4 text-sm leading-6 text-slate-700">
              <li>Comunicazione chiara prima dell’intervento.</li>
              <li>Destinazione concordata: officina, deposito o indirizzo.</li>
              <li>Gestione ordinata per auto, moto e furgoni leggeri.</li>
              <li>Approccio locale su Mantova e comuni vicini.</li>
            </ul>
          </div>
          <div className="rounded-[2rem] bg-slate-950 p-8 text-white shadow-sm">
            <h2 className="font-display text-3xl font-bold">
              Processo in 3 step
            </h2>
            <ol className="mt-6 space-y-5">
              {[
                ['Chiamata', 'Raccogliamo posizione, problema e veicolo.'],
                ['Valutazione', 'Definiamo soluzione, destinazione e priorità.'],
                ['Recupero', 'Carichiamo o assistiamo il mezzo con metodo.'],
              ].map(([title, text], index) => (
                <li key={title} className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-400 text-sm font-black text-slate-950">
                    {index + 1}
                  </span>
                  <span>
                    <strong className="block">{title}</strong>
                    <span className="text-sm text-slate-300">{text}</span>
                  </span>
                </li>
              ))}
            </ol>
          </div>
          <div className="rounded-[2rem] border border-emerald-200 bg-emerald-50 p-8">
            <h2 className="font-display text-3xl font-bold text-slate-950">
              Prezzi chiari
            </h2>
            <p className="mt-5 text-sm leading-6 text-slate-700">
              Il costo dipende da distanza, tipologia del veicolo, condizioni
              del recupero e destinazione. Prima di partire chiediamo i dettagli
              utili per darti un’indicazione trasparente e ridurre al minimo le
              sorprese.
            </p>
            <PhoneLink className="mt-7" />
          </div>
        </div>
      </Container>
    </section>
  )
}

function Faqs() {
  return (
    <section id="faq" className="bg-white py-24">
      <Container>
        <SectionHeading
          eyebrow="faq"
          title="Domande frequenti sul carroattrezzi a Mantova"
          text="Risposte dirette alle domande che contano quando il mezzo è fermo e devi decidere in fretta."
        />
        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="rounded-3xl border border-slate-200 bg-slate-50 p-6"
            >
              <h3 className="font-display text-xl font-bold text-slate-950">
                {faq.question}
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-700">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

function FinalCta() {
  return (
    <section className="bg-slate-950 py-20 text-white">
      <Container className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-emerald-300">
            intervento rapido
          </p>
          <h2 className="mt-4 font-display text-4xl font-bold">
            Veicolo fermo a Mantova?
          </h2>
          <p className="mt-4 max-w-2xl text-slate-300">
            Chiama ora e comunica posizione, tipo di mezzo e destinazione:
            organizziamo il recupero con una procedura chiara.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <PhoneLink className="bg-emerald-400 text-slate-950 hover:bg-emerald-300" />
          <Link
            href={whatsappUrl}
            className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
          >
            WhatsApp
          </Link>
        </div>
      </Container>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-white py-12">
      <Container>
        <div className="grid gap-10 border-t border-slate-200 pt-10 lg:grid-cols-4">
          <div>
            <p className="font-display text-xl font-bold text-slate-950">
              {site.name}
            </p>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Soccorso stradale, traino auto e recupero veicoli a Mantova e
              provincia.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-slate-950">Contatti</h3>
            <div className="mt-3 space-y-2 text-sm text-slate-600">
              <p>{site.address}</p>
              <p>
                <Link href={`tel:${site.tel}`}>{site.phone}</Link>
              </p>
              <p>
                <Link href={`mailto:${site.email}`}>{site.email}</Link>
              </p>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-slate-950">Servizi</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              {services.slice(0, 5).map((service) => (
                <li key={service.slug}>
                  <Link href={`/servizi/${service.slug}/`}>
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-slate-950">Zone</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              {zones.slice(0, 5).map((zone) => (
                <li key={zone.slug}>
                  <Link href={`/zone/${zone.slug}/`}>{zone.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="mt-10 text-sm text-slate-500">
          © 2026 {site.domain}. Tutti i diritti riservati.
        </p>
      </Container>
    </footer>
  )
}

function JsonLd() {
  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': ['LocalBusiness', 'AutomotiveBusiness'],
      name: site.name,
      url: `https://${site.domain}`,
      telephone: site.tel,
      email: site.email,
      address: {
        '@type': 'PostalAddress',
        addressLocality: site.city,
        addressRegion: 'MN',
        addressCountry: 'IT',
      },
      areaServed: [site.city, ...zones.map((zone) => zone.name)],
      openingHours: 'Mo-Su 00:00-23:59',
    },
    ...services.map((service) => ({
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: `${service.title} a Mantova`,
      provider: { '@type': 'AutomotiveBusiness', name: site.name },
      areaServed: site.city,
      url: `https://${site.domain}/servizi/${service.slug}/`,
    })),
  ]

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export default function Home() {
  return (
    <>
      <JsonLd />
      <Header />
      <main>
        <Hero />
        <Urgencies />
        <Services />
        <Zones />
        <WhyProcessPricing />
        <Faqs />
        <FinalCta />
      </main>
      <Footer />
    </>
  )
}
