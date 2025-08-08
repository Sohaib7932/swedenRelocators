import merge from 'lodash/merge';
// date fns
import {
  fr as frFRAdapter,
  vi as viVNAdapter,
  enUS as enUSAdapter,
  zhCN as zhCNAdapter,
  arSA as arSAAdapter,
} from 'date-fns/locale';

// date pickers (MUI)
import {
  enUS as enUSDate,
  frFR as frFRDate,
  viVN as viVNDate,
  zhCN as zhCNDate,
} from '@mui/x-date-pickers/locales';
// core (MUI)
import {
  enUS as enUSCore,
  frFR as frFRCore,
  viVN as viVNCore,
  zhCN as zhCNCore,
  arSA as arSACore,
} from '@mui/material/locale';
// data grid (MUI)
import {
  // enUS as enUSDataGrid,
  // frFR as frFRDataGrid,
  // viVN as viVNDataGrid,
  // zhCN as zhCNDataGrid,
  // arSD as arSDDataGrid,
} from '@mui/x-data-grid';

// PLEASE REMOVE `LOCAL STORAGE` WHEN YOU CHANGE SETTINGS.
// ----------------------------------------------------------------------

export const allLangs = [
  {
    label: 'English',
    value: 'en',
    systemValue: merge(enUSDate, enUSCore),
    adapterLocale: enUSAdapter,
    icon: 'flagpack:gb-nir',
    numberFormat: {
      code: 'en-US',
      currency: 'USD',
    },
  },
  {
    label: 'German',
    value: 'de',
    systemValue: merge(enUSDate, enUSCore), // Using English system values as fallback
    adapterLocale: enUSAdapter,
    icon: 'flagpack:de',
    numberFormat: {
      code: 'de-DE',
      currency: 'EUR',
    },
  },
  {
    label: 'Danish',
    value: 'da',
    systemValue: merge(enUSDate, enUSCore),
    adapterLocale: enUSAdapter,
    icon: 'flagpack:dk',
    numberFormat: {
      code: 'da-DK',
      currency: 'DKK',
    },
  },
  {
    label: 'Swedish',
    value: 'sv',
    systemValue: merge(enUSDate, enUSCore),
    adapterLocale: enUSAdapter,
    icon: 'flagpack:se',
    numberFormat: {
      code: 'sv-SE',
      currency: 'SEK',
    },
  },
  {
    label: 'Spanish',
    value: 'es',
    systemValue: merge(enUSDate, enUSCore),
    adapterLocale: enUSAdapter,
    icon: 'flagpack:es',
    numberFormat: {
      code: 'es-ES',
      currency: 'EUR',
    },
  },
  {
    label: 'Arabic',
    value: 'ar',
    systemValue: merge(arSACore),
    adapterLocale: arSAAdapter,
    icon: 'flagpack:sa',
    numberFormat: {
      code: 'ar',
      currency: 'AED',
    },
  },
  {
    label: 'Persian',
    value: 'pr',
    systemValue: merge(enUSDate, enUSCore),
    adapterLocale: enUSAdapter,
    icon: 'flagpack:ir',
    numberFormat: {
      code: 'fa-IR',
      currency: 'IRR',
    },
  },
  {
    label: 'Greek',
    value: 'gr',
    systemValue: merge(enUSDate, enUSCore),
    adapterLocale: enUSAdapter,
    icon: 'flagpack:gr',
    numberFormat: {
      code: 'el-GR',
      currency: 'EUR',
    },
  },
  {
    label: 'Urdu',
    value: 'ur',
    systemValue: merge(enUSDate, enUSCore),
    adapterLocale: enUSAdapter,
    icon: 'flagpack:pk',
    numberFormat: {
      code: 'ur-PK',
      currency: 'PKR',
    },
  },
  {
    label: 'Punjabi',
    value: 'pn',
    systemValue: merge(enUSDate, enUSCore),
    adapterLocale: enUSAdapter,
    icon: 'flagpack:in',
    numberFormat: {
      code: 'pa-IN',
      currency: 'INR',
    },
  },
];

export const defaultLang = allLangs[0]; // English

// GET MORE COUNTRY FLAGS
// https://icon-sets.iconify.design/flagpack/
// https://www.dropbox.com/sh/nec1vwswr9lqbh9/AAB9ufC8iccxvtWi3rzZvndLa?dl=0
