export const site = {
  domain: 'carroattrezzimantova.it',
  name: 'Carroattrezzi Mantova',
  city: 'Mantova',
  phone: '0376 199 1615',
  tel: '+3903761991615',
  whatsapp: '3903761991615',
  email: 'assistenza@carroattrezzimantova.it',
  address: 'Mantova MN',
  title: 'Carroattrezzi a Mantova 24H',
  description:
    'Carroattrezzi a Mantova per soccorso stradale, traino auto, moto e furgoni. Intervento rapido, prezzi chiari e assistenza 24 ore.',
}

export const services = [
  {
    slug: 'soccorso-stradale-24-ore',
    title: 'Soccorso stradale 24 ore',
    text: 'Intervento per auto ferme, guasti improvvisi e situazioni urgenti in città, tangenziale e strade provinciali.',
  },
  {
    slug: 'traino-auto',
    title: 'Traino auto',
    text: 'Trasporto sicuro verso officina, carrozzeria, deposito o indirizzo indicato dal proprietario.',
  },
  {
    slug: 'recupero-auto-incidentata',
    title: 'Recupero auto incidentata',
    text: 'Gestione ordinata dopo urti e sinistri, con attenzione a danni, accessi e destinazione del veicolo.',
  },
  {
    slug: 'carroattrezzi-moto',
    title: 'Carroattrezzi moto',
    text: 'Recupero di moto e scooter con fissaggi dedicati, protezione del mezzo e trasporto senza improvvisazioni.',
  },
  {
    slug: 'trasporto-veicoli',
    title: 'Trasporto veicoli',
    text: 'Servizio programmato per auto acquistate, vetture ferme, mezzi non revisionati o veicoli da consegnare.',
  },
  {
    slug: 'assistenza-batteria-scarica',
    title: 'Assistenza batteria scarica',
    text: 'Supporto quando l’auto non parte, con valutazione del problema e soluzione più prudente.',
  },
  {
    slug: 'recupero-auto-in-panne',
    title: 'Recupero auto in panne',
    text: 'Recupero di veicoli bloccati da guasti meccanici, problemi elettrici o anomalie che impediscono la marcia.',
  },
  {
    slug: 'carroattrezzi-per-furgoni',
    title: 'Carroattrezzi per furgoni',
    text: 'Assistenza per mezzi da lavoro leggeri, utile quando il fermo del veicolo blocca consegne o appuntamenti.',
  },
  {
    slug: 'soccorso-in-autostrada',
    title: 'Soccorso in autostrada',
    text: 'Supporto su tratti ad alta percorrenza con priorità alla sicurezza di persone, mezzo e traffico.',
  },
  {
    slug: 'rimozione-veicolo',
    title: 'Rimozione veicolo',
    text: 'Spostamento da aree private, cortili, parcheggi aziendali o spazi condominiali con procedura chiara.',
  },
  {
    slug: 'trasporto-auto-fuori-provincia',
    title: 'Trasporto auto fuori provincia',
    text: 'Trasferimenti organizzati fuori Mantova per officine, concessionari, privati e aziende.',
  },
  {
    slug: 'assistenza-veicoli-bloccati',
    title: 'Assistenza veicoli bloccati',
    text: 'Intervento su veicoli immobilizzati in garage, rampe, parcheggi stretti, cortili o zone difficili da raggiungere.',
  },
]

export const zones = [
  'Porto Mantovano',
  'Curtatone',
  'Borgo Virgilio',
  'San Giorgio Bigarello',
  'Roverbella',
  'Marmirolo',
  'Goito',
  'Bagnolo San Vito',
  'Roncoferraro',
  'Castellucchio',
  'Castelbelforte',
  'Virgilio',
].map((name) => ({
  name,
  slug: name.toLowerCase().replaceAll(' ', '-'),
  title: `Carroattrezzi a ${name}`,
}))

export const faqs = [
  {
    question: 'Quanto tempo serve per un carroattrezzi a Mantova?',
    answer:
      'Dipende da posizione, traffico e tipo di veicolo. Durante la chiamata raccogliamo indirizzo, problema e destinazione per organizzare l’intervento nel modo più rapido possibile.',
  },
  {
    question: 'Posso scegliere l’officina di destinazione?',
    answer:
      'Sì. Il veicolo può essere portato presso l’officina di fiducia, una carrozzeria, un deposito o un indirizzo concordato prima del recupero.',
  },
  {
    question: 'Intervenite anche per moto e furgoni?',
    answer:
      'Sì, il servizio comprende auto, moto, scooter e furgoni leggeri. Prima di partire valutiamo dimensioni, peso, accessi e condizioni del mezzo.',
  },
  {
    question: 'Il prezzo viene comunicato prima?',
    answer:
      'L’obiettivo è dare indicazioni chiare prima dell’intervento. Servono posizione, tipo di mezzo, problema e destinazione per evitare sorprese.',
  },
  {
    question: 'Cosa devo comunicare al telefono?',
    answer:
      'Indica dove si trova il veicolo, modello, problema, eventuali danni visibili e destinazione desiderata. Se sei in una zona trafficata, metti prima in sicurezza le persone.',
  },
]
