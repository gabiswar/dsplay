import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import ptBR from 'date-fns/locale/pt-BR';
import enUS from 'date-fns/locale/en-US';
import fr from 'date-fns/locale/fr';
import es from 'date-fns/locale/es';
import de from 'date-fns/locale/de';
import nl from 'date-fns/locale/nl';
import it from 'date-fns/locale/it';

i18n
  .use(LanguageDetector)
  .init({
    // we init with resources
    resources: {
      en: {
        translations: {
          locale: enUS,
          Title: 'Title',
          floor: 'Flor'
        },
      },
      pt: {
        translations: {
          locale: ptBR,
          floor: 'Piso'
        },
      },
      fr: {
        translations: {
          locale: fr,
          floor: 'Piso'
        },
      },
      de: {
        translations: {
          locale: de,
          floor: 'Piso',
          update: 'Aktualisieren',
        },
      },
      es: {
        translations: {
          locale: es,
          floor: 'Piso',
        },
      },
      it: {
        translations: {
          locale: it,
          floor: 'Piso',
        },
      },
      nl: {
        translations: {
          locale: nl,
          floor: 'Piso',
        },
      },
    },
    fallbackLng: 'en',
    debug: true,

    // have a common namespace used around the full app
    ns: ['translations'],
    defaultNS: 'translations',

    keySeparator: false, // we use content as keys

    interpolation: {
      escapeValue: false, // not needed for react!!
      formatSeparator: ',',
    },

    react: {
      wait: true,
    },
  });

export default i18n;
