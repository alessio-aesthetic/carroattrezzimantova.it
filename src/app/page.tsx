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
      className={`inline-flex items-center justify-center rounded-full bg-[#0B3A75] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-950/20 transition hover:bg-[#082D5A] ${className}`}
    >
      {children}
    </Link>
  )
}

function WhatsAppLink({ className = '' }: { className?: string }) {
  return (
    <Link
      href={whatsappUrl}
      className={`inline-flex items-center justify-center rounded-full border border-[#F1C40F]/70 bg-[#F1C40F] px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-[#FFD84A] ${className}`}
    >
      WhatsApp
    </Link>
  )
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur">
      <Container className="flex min-h-20 items-center justify-between gap-6">
        <Link href="/" className="flex min-w-0 items-center">
          <img
            src="/images/logo-mantova.png"
            alt="Carroattrezzi Mantova"
            className="h-14 w-auto max-w-[210px] object-contain sm:h-16 sm:max-w-[260px]"
          />
        </Link>
        <nav className="hidden items-center gap-7 text-sm font-semibold text-slate-700 lg:flex">
          <a href="#servizi" className="hover:text-[#0B3A75]">
            Servizi
          </a>
          <a href="#zone" className="hover:text-[#0B3A75]">
            Zone
          </a>
          <a href="#prezzi" className="hover:text-[#0B3A75]">
            Prezzi
          </a>
          <a href="#faq" className="hover:text-[#0B3A75]">
            Domande
          </a>
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <WhatsAppLink className="py-2.5" />
          <PhoneLink className="py-2.5" />
        </div>
        <PhoneLink className="px-5 lg:hidden">Chiama</PhoneLink>
      </Container>
    </header>
  )
}

function HeroVisual() {
  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-gradient-to-br from-white via-blue-50 to-amber-50 p-6 shadow-2xl shadow-blue-950/10">
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0B3A75]/10 to-transparent" />
      <img
        src="/images/hero-technician-towtruck.png"
        alt="Tecnico del soccorso stradale con carroattrezzi"
        className="relative z-10 mx-auto mt-2 w-full max-w-[760px] object-contain"
      />
      <div className="relative z-20 -mt-10 rounded-3xl border border-white/80 bg-white/85 p-4 shadow-xl shadow-blue-950/10 backdrop-blur">
        <img
        src="/images/logo-mantova.png"
        alt="Logo Carroattrezzi Mantova con carro attrezzi giallo e blu"
          className="mx-auto w-full max-w-[440px] object-contain"
        />
      </div>
      <div className="relative z-20 mt-6 grid gap-3 sm:grid-cols-3">
        {[
          ['24H', 'supporto continuo'],
          ['MN', 'zona Mantova'],
          ['12', 'servizi dedicati'],
        ].map(([value, label]) => (
          <div
            key={label}
            className="rounded-2xl border border-white bg-white/80 p-4 shadow-sm"
          >
            <p className="font-display text-3xl font-bold text-[#0B3A75]">
              {value}
            </p>
            <p className="mt-1 text-sm font-medium text-slate-700">{label}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(241,196,15,0.18),transparent_32%),radial-gradient(circle_at_top_right,rgba(11,58,117,0.14),transparent_34%)]" />
      <Container className="relative grid gap-12 pb-20 pt-14 lg:grid-cols-[1fr_0.95fr] lg:items-center lg:pb-28 lg:pt-24">
        <div>
          <p className="mb-5 inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-semibold text-[#0B3A75]">
            Soccorso stradale, traino e recupero veicoli
          </p>
          <h1 className="font-display text-5xl font-bold tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
            Carroattrezzi a Mantova
          </h1>
          <div className="mt-7 max-w-2xl space-y-5 text-lg leading-8 text-slate-700">
            <p>
              Quando un’auto si ferma, non serve una promessa generica: serve
              una persona che risponda, capisca il problema e organizzi il
              recupero con metodo. Il nostro servizio di <strong>carroattrezzi a Mantova</strong> nasce
              per dare una soluzione concreta a chi si trova con un mezzo fermo,
              danneggiato o impossibile da spostare.
            </p>
            <p>
              Gestiamo <strong>soccorso stradale</strong>, traino auto, recupero dopo incidente,
              assistenza per moto e furgoni leggeri. Prima di partire
              concordiamo posizione, destinazione e condizioni del veicolo,
              così sai cosa succede e puoi decidere con calma anche in una
              situazione urgente.
            </p>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <PhoneLink />
            <WhatsAppLink />
          </div>
        </div>
        <HeroVisual />
      </Container>
    </section>
  )
}

function SectionHeading({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string
  title: string
  children: React.ReactNode
}) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#0B3A75]">
        {eyebrow}
      </p>
      <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
        {title}
      </h2>
      <div className="mt-5 space-y-4 text-lg leading-8 text-slate-700">
        {children}
      </div>
    </div>
  )
}

function Urgencies() {
  return (
    <section className="bg-slate-50 py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1fr] lg:items-start">
          <SectionHeading eyebrow="urgenze" title="Prima la sicurezza, poi il recupero.">
            <p>
              Un intervento fatto bene comincia dalla telefonata. Ti chiediamo
              dove si trova il veicolo, se ci sono persone in sicurezza, se il
              mezzo blocca il traffico e dove vuoi portarlo. Queste informazioni
              permettono di scegliere la procedura più adatta.
            </p>
            <p>
              Il risultato è un servizio più ordinato: meno dubbi, meno attese
              inutili e una gestione più chiara dal primo contatto fino alla
              consegna del mezzo.
            </p>
          </SectionHeading>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ['Auto ferma in strada', 'Recupero del veicolo quando non può proseguire in sicurezza.'],
              ['Guasto improvviso', 'Supporto per problemi meccanici, elettrici o avviamento mancato.'],
              ['Incidente o urto', 'Carico del mezzo danneggiato e trasporto verso la destinazione scelta.'],
              ['Parcheggi e cortili', 'Valutazione degli accessi quando il veicolo è bloccato in spazi stretti.'],
            ].map(([title, text]) => (
              <div
                key={title}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <p className="font-semibold text-slate-950">{title}</p>
                <p className="mt-3 text-sm leading-6 text-slate-700">{text}</p>
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
    <section id="servizi" className="bg-white py-24">
      <Container>
        <SectionHeading eyebrow="servizi" title="Servizi pensati per problemi reali.">
          <p>
            Ogni fermo ha una storia diversa: un’auto in panne davanti casa, un
            furgone bloccato durante il lavoro, una moto da recuperare con cura
            o un veicolo da portare fuori provincia. Per questo non trattiamo
            ogni richiesta nello stesso modo.
          </p>
          <p>
            Valutiamo mezzo, posizione, accessi e destinazione. Poi organizziamo
            il servizio più corretto, con comunicazione chiara e tempi
            comprensibili.
          </p>
        </SectionHeading>
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Link
              key={service.slug}
              href={`/servizi/${service.slug}/`}
              className="group rounded-3xl border border-slate-200 bg-slate-50 p-6 transition hover:-translate-y-1 hover:border-[#0B3A75]/30 hover:bg-white hover:shadow-xl hover:shadow-blue-950/10"
            >
              <div className="-mx-2 -mt-2 mb-5 overflow-hidden rounded-2xl">
                <img
                  src={`/images/services/${service.slug}.webp`}
                  alt={`${service.title} a Mantova`}
                  className="h-48 w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#F1C40F] text-sm font-black text-slate-950">
                {String(index + 1).padStart(2, '0')}
              </div>
              <h3 className="mt-5 font-display text-xl font-bold text-slate-950">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-700">
                {service.text}
              </p>
              <span className="mt-5 inline-flex text-sm font-semibold text-[#0B3A75]">
                Scopri il servizio
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
    <section id="zone" className="bg-gradient-to-b from-blue-50 to-white py-24">
      <Container>
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading eyebrow="zone servite" title="Mantova e provincia, con interventi organizzati.">
            <p>
              Operiamo su Mantova e nei comuni vicini con un approccio pratico:
              posizione precisa, informazioni essenziali e destinazione
              concordata prima del recupero. È il modo migliore per ridurre
              incertezze quando il veicolo è fermo.
            </p>
            <p>
              Che tu sia in centro, in una zona industriale, lungo una strada
              provinciale o in un parcheggio privato, ti aiutiamo a capire il
              passaggio successivo e a portare il mezzo dove serve.
            </p>
          </SectionHeading>
          <PhoneLink />
        </div>
        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {zones.map((zone) => (
            <Link
              key={zone.slug}
              href={`/zone/${zone.slug}/`}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white font-semibold text-slate-800 shadow-sm transition hover:border-[#0B3A75]/30 hover:text-[#0B3A75]"
            >
              <img
                src={`/images/zones/${zone.slug}.webp`}
                alt={`${zone.title} - soccorso stradale locale`}
                className="h-36 w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <span className="block px-5 py-4">{zone.title}</span>
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
            <div className="mt-6 space-y-4 text-sm leading-6 text-slate-700">
              <p>
                <strong>Rispondiamo in modo diretto</strong>, senza frasi vaghe
                e senza scaricare il problema su chi è già in difficoltà.
              </p>
              <p>
                <strong>Concordiamo la destinazione</strong>: officina,
                carrozzeria, deposito o indirizzo indicato.
              </p>
              <p>
                <strong>Valutiamo il mezzo prima di partire</strong>, così il
                recupero viene preparato con più precisione.
              </p>
            </div>
          </div>
          <div className="rounded-[2rem] bg-[#0B3A75] p-8 text-white shadow-sm">
            <h2 className="font-display text-3xl font-bold">
              Processo in 3 step
            </h2>
            <ol className="mt-6 space-y-5">
              {[
                ['Chiamata', 'Raccogliamo posizione, problema e tipo di veicolo.'],
                ['Valutazione', 'Definiamo recupero, destinazione e priorità.'],
                ['Intervento', 'Carichiamo o assistiamo il mezzo con metodo.'],
              ].map(([title, text], index) => (
                <li key={title} className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F1C40F] text-sm font-black text-slate-950">
                    {index + 1}
                  </span>
                  <span>
                    <strong className="block text-white">{title}</strong>
                    <span className="text-sm text-blue-50">{text}</span>
                  </span>
                </li>
              ))}
            </ol>
          </div>
          <div className="rounded-[2rem] border border-amber-200 bg-amber-50 p-8">
            <h2 className="font-display text-3xl font-bold text-slate-950">
              Prezzi chiari
            </h2>
            <p className="mt-5 text-sm leading-6 text-slate-700">
              Il costo dipende da distanza, tipologia del veicolo, condizioni
              del recupero e destinazione. Prima di partire chiediamo i dettagli
              utili per darti un’indicazione trasparente e ridurre al minimo le
              sorprese.
            </p>
            <p className="mt-4 text-sm leading-6 text-slate-700">
              Se il mezzo è in un punto difficile, in un parcheggio stretto o in
              una zona trafficata, lo valutiamo subito: un preventivo serio nasce
              da informazioni corrette.
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
        <SectionHeading eyebrow="domande frequenti" title="Risposte chiare prima di decidere.">
          <p>
            In un momento di urgenza servono indicazioni semplici. Qui trovi le
            domande che riceviamo più spesso da chi ha bisogno di un
            carroattrezzi a Mantova o nei comuni vicini.
          </p>
        </SectionHeading>
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
    <section className="bg-[#0B3A75] py-20 text-white">
      <Container className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#F1C40F]">
            intervento rapido
          </p>
          <h2 className="mt-4 font-display text-4xl font-bold">
            Veicolo fermo a Mantova?
          </h2>
          <p className="mt-4 max-w-2xl text-blue-50">
            Chiama ora e comunica posizione, tipo di mezzo e destinazione:
            organizziamo il recupero con una procedura chiara, senza farti
            perdere tempo con spiegazioni inutili.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href={`tel:${site.tel}`}
            className="inline-flex items-center justify-center rounded-full bg-[#F1C40F] px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-black/15 transition hover:bg-[#FFD84A]"
          >
            Chiama {site.phone}
          </Link>
          <Link
            href={whatsappUrl}
            className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white px-6 py-3 text-sm font-semibold text-[#0B3A75] transition hover:bg-blue-50"
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
            <img
              src="/images/logo-mantova.png"
              alt="Carroattrezzi Mantova"
              className="h-16 w-auto object-contain"
            />
            <p className="mt-4 text-sm leading-6 text-slate-600">
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
        streetAddress: 'Circonvallazione Sud, 8/G',
        postalCode: '46100',
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
