import { type Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import { Container } from '@/components/Container'
import { services, site, zones } from '@/data/site'

export function generateStaticParams() {
  return zones.map((zone) => ({ slug: zone.slug }))
}

export function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Metadata {
  const zone = zones.find((item) => item.slug === params.slug)
  if (!zone) return {}
  return {
    title: { absolute: zone.title },
    description: `${zone.title}: soccorso stradale, traino auto e recupero veicoli con assistenza rapida e destinazione concordata.`,
    alternates: { canonical: `/zone/${zone.slug}/` },
  }
}

export default function ZonePage({ params }: { params: { slug: string } }) {
  const zone = zones.find((item) => item.slug === params.slug)
  if (!zone) notFound()

  return (
    <main className="bg-white">
      <section className="bg-gradient-to-br from-blue-50 via-white to-amber-50 py-20">
        <Container className="grid gap-10 lg:grid-cols-[1fr_0.65fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#0B3A75]">
              zona servita
            </p>
            <h1 className="mt-4 max-w-4xl font-display text-5xl font-bold tracking-tight text-slate-950">
              {zone.title}
            </h1>
            <div className="mt-6 max-w-3xl space-y-5 text-lg leading-8 text-slate-700">
              <p>
                Il servizio di <strong>carroattrezzi a {zone.name}</strong> è
                pensato per chi ha un veicolo fermo e vuole una risposta chiara,
                senza perdere tempo tra spiegazioni inutili e passaggi confusi.
              </p>
              <p>
                Gestiamo auto in panne, recuperi dopo incidente, traino verso
                officine della zona, assistenza per moto e supporto per furgoni
                leggeri. Durante la chiamata definiamo posizione, tipo di mezzo
                e destinazione, così l’intervento parte con informazioni
                complete.
              </p>
              <p>
                A {zone.name} capita spesso di dover recuperare veicoli in
                parcheggi privati, cortili, strade locali o collegamenti verso
                Mantova. Per questo valutiamo accessi e spazio di manovra prima
                di organizzare il recupero.
              </p>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href={`tel:${site.tel}`}
                className="rounded-full bg-[#0B3A75] px-6 py-3 text-center text-sm font-semibold text-white"
              >
                Chiama {site.phone}
              </Link>
              <Link
                href={`https://wa.me/${site.whatsapp}`}
                className="rounded-full bg-[#F1C40F] px-6 py-3 text-center text-sm font-semibold text-slate-950"
              >
                WhatsApp
              </Link>
            </div>
          </div>
          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl shadow-blue-950/10">
            <img
              src="/images/logo-mantova.png"
              alt={`Logo Carroattrezzi Mantova per interventi a ${zone.name}`}
              className="mx-auto w-full object-contain"
            />
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#0B3A75]">
                come lavoriamo
              </p>
              <h2 className="mt-4 font-display text-4xl font-bold text-slate-950">
                Intervento ordinato, anche quando hai fretta.
              </h2>
            </div>
            <div className="space-y-5 text-lg leading-8 text-slate-700">
              <p>
                Quando il mezzo è fermo, la prima cosa è capire se la posizione
                è sicura. Se sei vicino a una strada trafficata, in una rotonda,
                in una piazzola o in un accesso aziendale, ti aiutiamo a
                comunicare le informazioni più importanti.
              </p>
              <p>
                Poi concordiamo la destinazione: officina, carrozzeria,
                abitazione, deposito o altra sede. Questo rende il servizio più
                lineare e ti evita decisioni prese di corsa quando il veicolo è
                già sul carroattrezzi.
              </p>
            </div>
          </div>

          <h2 className="mt-16 font-display text-3xl font-bold text-slate-950">
            Servizi disponibili a {zone.name}
          </h2>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 9).map((service) => (
              <Link
                key={service.slug}
                href={`/servizi/${service.slug}/`}
                className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 font-semibold text-slate-800 transition hover:border-[#0B3A75]/30 hover:bg-white hover:text-[#0B3A75]"
              >
                {service.title}
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </main>
  )
}
