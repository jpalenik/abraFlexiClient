import { TypeAnnotation, PropertyType } from '../../abra/AFTypes.js'
import { AFEntity } from '../../abra/AFEntity.js'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba.js'


import { TypMj, NormalMj } from '../AFEntityEnums.js'

export class AFMernaJednotka extends AFEntity {
  static EntityPath: string = 'merna-jednotka'
  static EntityName: string = 'Měrné jednotky '
  static EntityType: string = 'MERNA_JEDNOTKA'

  // ID (db: IdMj) - ID)
  id?: number
  // Poslední změna (db: lastUpdate) - Poslední změna)
  lastUpdate?: Date
  // Zkratka (db: Kod) - Zkratka)
  kod?: string
  // Název (db: Nazev) - Název)
  nazev?: string
  // Název EN (db: NazevA) - Název EN)
  nazevA?: string
  // Název DE (db: NazevB) - Název DE)
  nazevB?: string
  // Název FR (db: NazevC) - Název FR)
  nazevC?: string
  // Poznámka (db: Poznam) - Poznámka)
  poznam?: string
  // Popis (db: Popis) - Popis)
  popis?: string
  // Platí od (db: PlatiOd) - Platí od)
  platiOd?: number
  // Platí do (db: PlatiDo) - Platí do)
  platiDo?: number
  // Typ (db: TypMjK) - Typ)
  typMjK?: TypMj
  // Normal. jednotka (db: NormalMjK) - Normal. jednotka)
  normalMjK?: NormalMj
  // Zkratka pro tisky (db: KodTisk) - Zkratka pro tisky)
  kodTisk?: string
  // Zkratka pro tisky EN (db: KodTiskA) - Zkratka pro tisky EN)
  kodTiskA?: string
  // Zkratka pro tisky DE (db: KodTiskB) - Zkratka pro tisky DE)
  kodTiskB?: string
  // Zkratka pro tisky FR (db: KodTiskC) - Zkratka pro tisky FR)
  kodTiskC?: string

  // Uživatelské vazby (type: VAZBA) - uzivatelske-vazby)
  'uzivatelske-vazby'?: AFUzivatelskaVazba[]
  get uzivatelskeVazby(): AFUzivatelskaVazba[] | undefined { return this['uzivatelske-vazby']}


  static propAnnotations: Record<string, TypeAnnotation> = {
    id : {
      key: 'id',
      type: PropertyType.Integer,
      isArray: false,
      
    },
    lastUpdate : {
      key: 'lastUpdate',
      type: PropertyType.DateTime,
      isArray: false,
      
    },
    kod : {
      key: 'kod',
      type: PropertyType.String,
      isArray: false,
      maxLength: 20,
      
    },
    nazev : {
      key: 'nazev',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    nazevA : {
      key: 'nazevA',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    nazevB : {
      key: 'nazevB',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    nazevC : {
      key: 'nazevC',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    poznam : {
      key: 'poznam',
      type: PropertyType.String,
      isArray: false,
      
    },
    popis : {
      key: 'popis',
      type: PropertyType.String,
      isArray: false,
      
    },
    platiOd : {
      key: 'platiOd',
      type: PropertyType.Integer,
      isArray: false,
      
    },
    platiDo : {
      key: 'platiDo',
      type: PropertyType.Integer,
      isArray: false,
      
    },
    typMjK : {
      key: 'typMjK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'TypMj',
      enum: TypMj,
      
    },
    normalMjK : {
      key: 'normalMjK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'NormalMj',
      enum: NormalMj,
      
    },
    kodTisk : {
      key: 'kodTisk',
      type: PropertyType.String,
      isArray: false,
      maxLength: 20,
      
    },
    kodTiskA : {
      key: 'kodTiskA',
      type: PropertyType.String,
      isArray: false,
      maxLength: 20,
      
    },
    kodTiskB : {
      key: 'kodTiskB',
      type: PropertyType.String,
      isArray: false,
      maxLength: 20,
      
    },
    kodTiskC : {
      key: 'kodTiskC',
      type: PropertyType.String,
      isArray: false,
      maxLength: 20,
      
    },

    'uzivatelske-vazby' : {
      key: 'uzivatelske-vazby',
      type: PropertyType.Relation,
      isArray: true,
      afClass: 'AFUzivatelskaVazba'
    },

  }
}