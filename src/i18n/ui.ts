export const locales = ['es', 'en'] as const;
export type Locale = (typeof locales)[number];

export const ui = {
  es: {
    'nav.archive': 'Archivo',
    'nav.projects': 'Proyectos',
    'nav.world': 'Mundo',
    'nav.journal': 'Diario',
    'nav.contact': 'Contacto',
    'home.sentence': 'Que la música hable.',
    'archive.title': 'Archivo',
    'archive.intro': 'Todo lo que existe, documentado.',
    'projects.title': 'Proyectos',
    'world.title': 'Mundo',
    'world.symbols': 'Símbolos',
    'world.locations': 'Lugares',
    'journal.title': 'Diario',
    'contact.title': 'Contacto',
    'listen.title': 'Escucha',
    'meta.description': 'Sacro — música y mundo.',
    'symbol.appearances': 'Apariciones',
    'symbol.readings': 'Posibles lecturas',
    'location.connected': 'Conectado a',
  },
  en: {
    'nav.archive': 'Archive',
    'nav.projects': 'Projects',
    'nav.world': 'World',
    'nav.journal': 'Journal',
    'nav.contact': 'Contact',
    'home.sentence': 'Let the music speak.',
    'archive.title': 'Archive',
    'archive.intro': 'Everything that exists, documented.',
    'projects.title': 'Projects',
    'world.title': 'World',
    'world.symbols': 'Symbols',
    'world.locations': 'Locations',
    'journal.title': 'Journal',
    'contact.title': 'Contact',
    'listen.title': 'Listen',
    'meta.description': 'Sacro — music and world.',
    'symbol.appearances': 'Appearances',
    'symbol.readings': 'Possible readings',
    'location.connected': 'Connected to',
  },
} as const;

export function t(locale: Locale, key: keyof (typeof ui)['es']): string {
  return ui[locale][key] ?? ui.es[key];
}
