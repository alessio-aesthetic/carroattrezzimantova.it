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
    description: `${zone.title}: soccorso stradale, traino auto e recupero veicoli vicino Mantova. Chiama ${site.phone}.`,
    alternates: { canonical: `/zone/${zone.slug}/` },
  }
}

export default function ZonePage({ params }: { params: { slug: string } }) {
  const zone = zones.find((item) => item.slug === params.slug)
  if (!zone) notFound()

  return (
    <main className="bg-white">
      <section className="bg-slate-950 py-24 text-white">
        <Container>
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-emerald-300">
            zona servita
          </p>
          <h1 className="mt-4 max-w-4xl font-display text-5xl font-bold tracking-tight">
            {zone.title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Servizio di carroattrezzi a {zone.name} per auto ferme, veicoli in
            panne, recuperi dopo incidente e trasporti verso officine della
            zona di Mantova. Una posizione precisa ci aiuta a organizzare il
            recupero con meno attese e più chiarezza.
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
        <Container>
          <h2 className="font-display text-3xl font-bold text-slate-950">
            Servizi disponibili a {zone.name}
          </h2>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((service) => (
              <Link
                key={service.slug}
                href={`/servizi/${service.slug}/`}
                className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 font-semibold text-slate-800"
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
