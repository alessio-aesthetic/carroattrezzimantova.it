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
    description: `${title}: assistenza rapida, gestione chiara e trasporto del veicolo verso la destinazione concordata.`,
    alternates: { canonical: `/servizi/${service.slug}/` },
  }
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = services.find((item) => item.slug === params.slug)
  if (!service) notFound()

  return (
    <main className="bg-white">
      <section className="bg-gradient-to-br from-blue-50 via-white to-amber-50 py-20">
        <Container className="grid gap-10 lg:grid-cols-[1fr_0.65fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#0B3A75]">
              servizio carroattrezzi
            </p>
            <h1 className="mt-4 max-w-4xl font-display text-5xl font-bold tracking-tight text-slate-950">
              {service.title} a Mantova
            </h1>
            <div className="mt-6 max-w-3xl space-y-5 text-lg leading-8 text-slate-700">
              <p>
                <strong>{service.text}</strong>
              </p>
              <p>{service.detail}</p>
              <p>
                L’obiettivo è semplice: toglierti dall’incertezza e gestire il
                veicolo con una procedura chiara. Ti diciamo quali informazioni
                servono, concordiamo dove portare il mezzo e manteniamo il
                servizio comprensibile dall’inizio alla fine.
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
          <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl shadow-blue-950/10">
            <img
              src={`/images/services/${service.slug}.webp`}
              alt={`${service.title} a Mantova con carroattrezzi professionale`}
              className="h-[360px] w-full object-cover"
            />
            <div className="p-5">
              <img
                src="/images/logo-mantova.png"
                alt="Carroattrezzi Mantova"
                className="mx-auto h-16 w-auto object-contain"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-3">
            {[
              [
                'Valutazione corretta',
                'Raccogliamo posizione, accessi, modello del veicolo e problema riscontrato. Questi dettagli permettono di preparare un intervento più preciso.',
              ],
              [
                'Destinazione concordata',
                'Il mezzo può essere portato in officina, carrozzeria, deposito o presso un indirizzo indicato. La destinazione viene definita prima del recupero.',
              ],
              [
                'Comunicazione chiara',
                'Ti aiutiamo a capire cosa fare mentre aspetti, quali dati comunicare e come organizzare il trasporto senza passaggi confusi.',
              ],
            ].map(([title, text]) => (
              <div
                key={title}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-6"
              >
                <h2 className="font-display text-2xl font-bold text-slate-950">
                  {title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-slate-700">{text}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 rounded-[2rem] bg-[#0B3A75] p-8 text-white">
            <h2 className="font-display text-3xl font-bold">
              Quando conviene chiamare subito
            </h2>
            <div className="mt-5 grid gap-5 text-sm leading-6 text-blue-50 md:grid-cols-2">
              <p>
                Se il veicolo non parte, perde liquidi, ha spie accese o si
                trova in una posizione pericolosa, è meglio evitare tentativi
                improvvisati. Una chiamata permette di capire se serve
                assistenza sul posto o recupero con carroattrezzi.
              </p>
              <p>
                Anche quando il problema sembra piccolo, muovere il mezzo può
                peggiorare il danno. Per questo valutiamo la situazione prima di
                suggerire il passaggio successivo.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </main>
  )
}
