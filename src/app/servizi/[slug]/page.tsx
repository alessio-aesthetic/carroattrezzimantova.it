import { type Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import { Container } from '@/components/Container'
import { services, site } from '@/data/site'

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }))
}

export function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Metadata {
  const service = services.find((item) => item.slug === params.slug)
  if (!service) return {}
  const title = `${service.title} a Mantova`
  return {
    title: { absolute: title },
    description: `${title}: intervento rapido, gestione chiara e destinazione concordata. Chiama ${site.phone}.`,
    alternates: { canonical: `/servizi/${service.slug}/` },
  }
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = services.find((item) => item.slug === params.slug)
  if (!service) notFound()

  return (
    <main className="bg-white">
      <section className="bg-slate-950 py-24 text-white">
        <Container>
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-emerald-300">
            servizio
          </p>
          <h1 className="mt-4 max-w-4xl font-display text-5xl font-bold tracking-tight">
            {service.title} a Mantova
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            {service.text} Prima dell’intervento raccogliamo posizione, tipo di
            mezzo, problema e destinazione: sono dettagli semplici, ma fanno la
            differenza per scegliere la procedura corretta.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href={`tel:${site.tel}`}
              className="rounded-full bg-emerald-400 px-6 py-3 text-center text-sm font-semibold text-slate-950"
            >
              Chiama {site.phone}
            </Link>
            <Link
              href={`https://wa.me/${site.whatsapp}`}
              className="rounded-full border border-white/20 px-6 py-3 text-center text-sm font-semibold"
            >
              WhatsApp
            </Link>
          </div>
        </Container>
      </section>
      <section className="py-20">
        <Container className="grid gap-8 lg:grid-cols-3">
          {[
            'Valutazione della posizione e degli accessi.',
            'Carico o assistenza con modalità adatta al mezzo.',
            'Consegna verso officina, deposito o destinazione concordata.',
          ].map((item) => (
            <div
              key={item}
              className="rounded-3xl border border-slate-200 bg-slate-50 p-6"
            >
              <p className="font-semibold text-slate-950">{item}</p>
            </div>
          ))}
        </Container>
      </section>
    </main>
  )
}
