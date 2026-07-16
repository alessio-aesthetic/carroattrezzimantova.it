import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { Container } from '@/components/Container'
import { faqs, services, site, zones } from '@/data/site'

export const metadata: Metadata = {
  title: 'Carroattrezzi a Mantova 24H | Soccorso stradale',
  description:
    'Carroattrezzi a Mantova attivo 24 ore: soccorso stradale, traino auto, recupero dopo incidente e assistenza per moto e furgoni.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Carroattrezzi a Mantova 24H | Soccorso stradale',
    description:
      'Assistenza stradale a Mantova e provincia per auto, moto e furgoni. Chiama per organizzare il recupero del tuo veicolo.',
    images: ['/images/hero-roadside.jpg'],
  },
}

const telHref = `tel:${site.tel}`

function PhoneButton({ children = `Chiama ${site.phone}`, dark = false }: { children?: React.ReactNode; dark?: boolean }) {
  return (
    <Link
      href={telHref}
      className={`inline-flex min-h-12 items-center justify-center rounded-full px-6 py-3 text-sm font-bold transition hover:-translate-y-0.5 ${dark ? 'bg-white text-[#12233f] shadow-xl shadow-black/15 hover:bg-slate-100' : 'bg-[#e65c2f] text-white shadow-lg shadow-orange-900/20 hover:bg-[#c94920]'}`}
    >
      {children}
    </Link>
  )
}

function Header() {
  return (
    <header className="relative z-20 border-b border-slate-200/80 bg-white/90 backdrop-blur">
      <Container className="flex min-h-20 items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-3" aria-label="Carroattrezzi Mantova home">
          <span className="flex size-10 items-center justify-center rounded-xl bg-[#12233f] text-lg font-black text-[#f4c24f]">CM</span>
          <span className="hidden text-sm font-extrabold uppercase tracking-[0.14em] text-[#12233f] sm:inline">Carroattrezzi Mantova</span>
        </Link>
        <nav className="hidden items-center gap-7 text-sm font-semibold text-slate-700 lg:flex">
          <a href="#servizi" className="transition hover:text-[#e65c2f]">Servizi</a>
          <a href="#come-lavoriamo" className="transition hover:text-[#e65c2f]">Come lavoriamo</a>
          <a href="#zone" className="transition hover:text-[#e65c2f]">Zone servite</a>
          <a href="#faq" className="transition hover:text-[#e65c2f]">FAQ</a>
        </nav>
        <PhoneButton>Chiama {site.phone}</PhoneButton>
      </Container>
    </header>
  )
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#f7f8f6]">
      <div className="absolute -right-24 -top-32 size-[34rem] rounded-full bg-[#f4c24f]/25 blur-3xl" />
      <div className="absolute -bottom-48 left-1/3 size-[30rem] rounded-full bg-[#dce8f3] blur-3xl" />
      <Container className="relative grid gap-12 py-14 sm:py-20 lg:grid-cols-[0.86fr_1.14fr] lg:items-center lg:gap-16 lg:py-24">
        <div className="max-w-2xl">
          <p className="mb-6 inline-flex rounded-full border border-[#12233f]/15 bg-white px-4 py-2 text-xs font-extrabold uppercase tracking-[0.2em] text-[#12233f] shadow-sm">Soccorso stradale a Mantova e provincia</p>
          <h1 className="max-w-xl text-5xl font-black tracking-[-0.055em] text-[#12233f] sm:text-6xl lg:text-[5.6rem] lg:leading-[0.94]">Carroattrezzi a Mantova.</h1>
          <p className="mt-8 max-w-xl text-xl leading-8 text-slate-700 sm:text-2xl sm:leading-9">
            Quando l’auto si ferma, la priorità è sapere subito cosa fare. Organizziamo <strong className="text-[#12233f]">soccorso stradale, traino e recupero veicoli</strong> con una comunicazione chiara, dalla prima chiamata fino alla destinazione concordata.
          </p>
          <p className="mt-5 max-w-xl text-base leading-7 text-slate-600">
            Siamo disponibili per guasti, incidenti, batteria scarica, moto, furgoni e veicoli bloccati. Ti chiediamo soltanto le informazioni utili, valutiamo la situazione e indirizziamo l’intervento più adatto senza complicare un momento già scomodo.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <PhoneButton>Chiama ora {site.phone}</PhoneButton>
            <Link href="#servizi" className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#12233f]/20 bg-white px-6 py-3 text-sm font-bold text-[#12233f] transition hover:border-[#e65c2f] hover:text-[#e65c2f]">Scopri i servizi</Link>
          </div>
          <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 border-t border-slate-200 pt-6 text-sm font-semibold text-slate-600">
            <span><strong className="text-[#12233f]">24H</strong> disponibilità</span>
            <span><strong className="text-[#12233f]">Mantova</strong> e provincia</span>
            <span><strong className="text-[#12233f]">Auto, moto</strong> e furgoni</span>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 rounded-[2.5rem] border border-[#12233f]/10" />
          <div className="relative overflow-hidden rounded-[2rem] bg-[#12233f] p-3 shadow-2xl shadow-[#12233f]/20">
            <Image src="/images/hero-roadside.jpg" alt="Auto pronta per il soccorso stradale a Mantova" width={1800} height={1200} priority className="h-[24rem] w-full rounded-[1.4rem] object-cover sm:h-[34rem]" />
            <div className="absolute bottom-7 left-7 right-7 flex items-end justify-between gap-4 rounded-2xl bg-white/95 p-5 shadow-xl backdrop-blur">
              <div><p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#e65c2f]">Intervento organizzato</p><p className="mt-1 text-lg font-extrabold text-[#12233f]">Ti aiutiamo a rimettere in ordine la situazione.</p></div>
              <span className="hidden size-12 shrink-0 items-center justify-center rounded-full bg-[#f4c24f] text-sm font-black text-[#12233f] sm:flex">24H</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

function Intro() {
  return (
    <section className="border-b border-slate-200 bg-white py-20 sm:py-28">
      <Container className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr]">
        <div><p className="text-xs font-black uppercase tracking-[0.22em] text-[#e65c2f]">Un aiuto concreto</p><h2 className="mt-5 max-w-sm text-4xl font-black tracking-[-0.04em] text-[#12233f] sm:text-5xl">Meno confusione. Più controllo.</h2></div>
        <div className="grid gap-6 text-lg leading-8 text-slate-700 sm:grid-cols-2">
          <p>Un veicolo fermo può significare una giornata di lavoro interrotta, un viaggio da riprogrammare o una situazione poco sicura sul ciglio della strada. Per questo, durante il primo contatto, raccogliamo subito posizione, tipo di mezzo, problema e destinazione desiderata.</p>
          <p>Il nostro lavoro non consiste soltanto nel caricare un’auto. Significa capire il contesto, preparare l’intervento con criterio e accompagnarti nelle decisioni pratiche: officina, carrozzeria, deposito o indirizzo concordato.</p>
        </div>
      </Container>
    </section>
  )
}

function Services() {
  return (
    <section id="servizi" className="bg-[#f7f8f6] py-20 sm:py-28">
      <Container>
        <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end"><div><p className="text-xs font-black uppercase tracking-[0.22em] text-[#e65c2f]">Servizi</p><h2 className="mt-4 max-w-2xl text-4xl font-black tracking-[-0.04em] text-[#12233f] sm:text-5xl">La soluzione giusta per ogni tipo di fermo.</h2></div><p className="max-w-md text-base leading-7 text-slate-600">Dalla chiamata urgente al trasporto programmato, ogni servizio parte da una valutazione reale del veicolo e del luogo in cui si trova.</p></div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => <Link key={service.slug} href={`/servizi/${service.slug}/`} className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:border-[#e65c2f]/50 hover:shadow-xl hover:shadow-[#12233f]/10"><div className="relative overflow-hidden"><Image src={`/images/services/${service.slug}.webp`} alt={`${service.title} a Mantova`} width={900} height={540} className="h-48 w-full object-cover transition duration-500 group-hover:scale-105" /><span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-black text-[#12233f]">{String(index + 1).padStart(2, '0')}</span></div><div className="p-6"><h3 className="text-xl font-extrabold text-[#12233f]">{service.title}</h3><p className="mt-3 text-sm leading-6 text-slate-600">{service.text}</p><span className="mt-5 inline-flex text-sm font-extrabold text-[#e65c2f]">Approfondisci <span aria-hidden="true" className="ml-2 transition group-hover:translate-x-1">→</span></span></div></Link>)}
        </div>
      </Container>
    </section>
  )
}

function Process() {
  return (
    <section id="come-lavoriamo" className="bg-[#12233f] py-20 text-white sm:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]"><div><p className="text-xs font-black uppercase tracking-[0.22em] text-[#f4c24f]">Come lavoriamo</p><h2 className="mt-5 max-w-md text-4xl font-black tracking-[-0.04em] sm:text-5xl">Un processo semplice, anche quando hai fretta.</h2><p className="mt-6 max-w-md text-base leading-7 text-slate-300">La chiarezza è parte del servizio. Ti diciamo quali informazioni servono, cosa possiamo organizzare e quale sarà il passaggio successivo.</p></div><div className="grid gap-4 sm:grid-cols-3">{[['01','Raccogliamo i dati','Posizione, tipo di veicolo, problema e condizioni di accesso.'],['02','Valutiamo il recupero','Consideriamo mezzo, sicurezza, manovre e destinazione.'],['03','Organizziamo l’intervento','Il veicolo viene assistito o trasportato dove hai scelto.']].map(([num,title,text]) => <div key={num} className="border-t border-white/20 pt-5"><span className="text-sm font-black text-[#f4c24f]">{num}</span><h3 className="mt-7 text-xl font-extrabold">{title}</h3><p className="mt-3 text-sm leading-6 text-slate-300">{text}</p></div>)}</div></div>
      </Container>
    </section>
  )
}

function FieldSupport() {
  return (
    <section className="bg-[#f7f8f6] py-20 sm:py-28">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[#e65c2f]">Sul posto</p>
            <h2 className="mt-4 max-w-md text-4xl font-black tracking-[-0.04em] text-[#12233f] sm:text-5xl">Ogni recupero richiede attenzione ai dettagli.</h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-slate-700">Un’auto incidentata, una moto da fissare, un furgone fermo durante una consegna: il mezzo e il contesto cambiano ogni volta. Per questo prepariamo l’intervento considerando accessi, sicurezza, dimensioni e destinazione, con immagini reali del lavoro su strada.</p>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {[
            ['/images/mechanic.jpg', 'Valutazione del veicolo', 'Prima di intervenire, raccogliamo le informazioni che servono per scegliere il recupero più adatto.'],
            ['/images/road-car.jpg', 'Assistenza lungo il percorso', 'Strade urbane, provinciali e collegamenti della provincia: la posizione precisa rende tutto più semplice.'],
            ['/images/tow-detail.jpg', 'Movimentazione curata', 'Il carico e il trasporto vengono organizzati con attenzione alle condizioni del mezzo.'],
          ].map(([src, title, text]) => (
            <article key={title} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <Image src={src} alt={title} width={1600} height={1067} className="h-56 w-full object-cover" />
              <div className="p-6"><h3 className="text-lg font-extrabold text-[#12233f]">{title}</h3><p className="mt-3 text-sm leading-6 text-slate-600">{text}</p></div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}

function Zones() {
  return <section id="zone" className="bg-white py-20 sm:py-28"><Container><div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end"><div><p className="text-xs font-black uppercase tracking-[0.22em] text-[#e65c2f]">Territorio</p><h2 className="mt-4 text-4xl font-black tracking-[-0.04em] text-[#12233f] sm:text-5xl">Mantova e i comuni vicini.</h2></div><p className="max-w-2xl text-lg leading-8 text-slate-700">Siamo disponibili in città e nei principali comuni della provincia. Che il mezzo si trovi in centro, in una zona industriale, lungo una provinciale o davanti a casa, la posizione precisa ci permette di organizzare un intervento più ordinato.</p></div><div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{zones.map((zone) => <Link key={zone.slug} href={`/zone/${zone.slug}/`} className="flex items-center justify-between border-b border-slate-200 py-4 text-sm font-extrabold text-[#12233f] transition hover:border-[#e65c2f] hover:text-[#e65c2f]"><span>{zone.name}</span><span aria-hidden="true">↗</span></Link>)}</div></Container></section>
}

function Trust() {
  return <section className="bg-[#f4c24f] py-14"><Container className="grid gap-8 md:grid-cols-3"><div><p className="text-4xl font-black text-[#12233f]">24H</p><p className="mt-2 text-sm font-bold text-[#12233f]/75">Disponibilità per urgenze e recuperi</p></div><div><p className="text-4xl font-black text-[#12233f]">3 step</p><p className="mt-2 text-sm font-bold text-[#12233f]/75">Dalla chiamata alla destinazione</p></div><div><p className="text-4xl font-black text-[#12233f]">1 contatto</p><p className="mt-2 text-sm font-bold text-[#12233f]/75">Per capire subito come intervenire</p></div></Container></section>
}

function Faq() {
  return <section id="faq" className="bg-[#f7f8f6] py-20 sm:py-28"><Container><div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]"><div><p className="text-xs font-black uppercase tracking-[0.22em] text-[#e65c2f]">Domande frequenti</p><h2 className="mt-4 text-4xl font-black tracking-[-0.04em] text-[#12233f] sm:text-5xl">Prima di chiamare, ecco cosa sapere.</h2></div><div className="divide-y divide-slate-200 border-y border-slate-200">{faqs.map((faq) => <details key={faq.question} className="group py-5"><summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-lg font-extrabold text-[#12233f]"><span>{faq.question}</span><span className="text-2xl font-normal text-[#e65c2f] transition group-open:rotate-45">+</span></summary><p className="max-w-3xl pt-4 text-base leading-7 text-slate-600">{faq.answer}</p></details>)}</div></div></Container></section>
}

function Cta() {
  return <section id="contatti" className="bg-[#e65c2f] py-20 text-white sm:py-24"><Container className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between"><div><p className="text-xs font-black uppercase tracking-[0.22em] text-white/75">Serve assistenza?</p><h2 className="mt-4 max-w-2xl text-4xl font-black tracking-[-0.04em] sm:text-5xl">Parliamo del tuo veicolo e organizziamo il prossimo passo.</h2><p className="mt-5 max-w-2xl text-lg leading-8 text-white/85">Chiama e comunica dove ti trovi, che mezzo hai e cosa è successo. Ti aiutiamo a scegliere la soluzione più adatta, con una destinazione concordata e informazioni chiare.</p></div><PhoneButton dark>Chiama {site.phone}</PhoneButton></Container></section>
}

function Footer() {
  return <footer className="bg-white py-12"><Container><div className="grid gap-10 border-t border-slate-200 pt-10 md:grid-cols-2 lg:grid-cols-4"><div><div className="flex items-center gap-3"><span className="flex size-10 items-center justify-center rounded-xl bg-[#12233f] text-sm font-black text-[#f4c24f]">CM</span><span className="font-extrabold text-[#12233f]">Carroattrezzi Mantova</span></div><p className="mt-5 max-w-xs text-sm leading-6 text-slate-600">Soccorso stradale, traino e recupero veicoli a Mantova e provincia, con assistenza diretta e comunicazione trasparente.</p></div><div><h3 className="font-extrabold text-[#12233f]">Contatti</h3><div className="mt-4 space-y-2 text-sm leading-6 text-slate-600"><p>{site.address}</p><Link className="block font-bold text-[#e65c2f]" href={telHref}>{site.phone}</Link><Link className="block" href={`mailto:${site.email}`}>{site.email}</Link></div></div><div><h3 className="font-extrabold text-[#12233f]">Servizi</h3><ul className="mt-4 space-y-2 text-sm text-slate-600">{services.slice(0, 5).map((service) => <li key={service.slug}><Link href={`/servizi/${service.slug}/`} className="hover:text-[#e65c2f]">{service.title}</Link></li>)}</ul></div><div><h3 className="font-extrabold text-[#12233f]">Zone</h3><ul className="mt-4 space-y-2 text-sm text-slate-600">{zones.slice(0, 6).map((zone) => <li key={zone.slug}><Link href={`/zone/${zone.slug}/`} className="hover:text-[#e65c2f]">{zone.name}</Link></li>)}</ul></div></div><p className="mt-12 border-t border-slate-200 pt-6 text-xs text-slate-500">© 2026 {site.domain}. Tutti i diritti riservati.</p></Container></footer>
}

function JsonLd() {
  const schema = { '@context': 'https://schema.org', '@type': ['LocalBusiness', 'AutomotiveBusiness'], name: site.name, url: `https://${site.domain}`, telephone: site.tel, email: site.email, address: { '@type': 'PostalAddress', streetAddress: site.address, addressLocality: 'Mantova', postalCode: '46100', addressCountry: 'IT' }, areaServed: ['Mantova', ...zones.map((zone) => zone.name)], openingHours: 'Mo-Su 00:00-23:59', priceRange: '€€' }
  const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map((faq) => ({ '@type': 'Question', name: faq.question, acceptedAnswer: { '@type': 'Answer', text: faq.answer } })) }
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} /></>
}

export default function Home() {
  return <div className="min-h-screen overflow-hidden bg-white text-slate-900"><JsonLd /><Header /><main><Hero /><Intro /><Trust /><Services /><Process /><FieldSupport /><Zones /><Faq /><Cta /></main><Footer /></div>
}
