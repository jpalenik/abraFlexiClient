import { AFEntity, TypeAnnotation, PropertyType } from '../AFEntity'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'


import { StavPriznaniDph } from './AFEntityEnums'

export class AFUlozenePriznaniDph extends AFEntity {
  static EntityPath: string = 'ulozene-priznani-dph'
  static EntityName: string = 'Uložené přiznání DPH'
  static EntityType: string = 'ULOZENE_PRIZNANI_DPH'

  // ID (db: IdRadekPriznaniDph) - ID)
  id?: number
  // Poslední změna (db: lastUpdate) - Poslední změna)
  lastUpdate?: Date
  // Rok (db: Rok) - Rok)
  rok?: number
  // Měsíc (db: Mesic) - Měsíc)
  mesic?: number
  // Čtvrtletí (db: Ctvrtleti) - Čtvrtletí)
  ctvrtleti?: number
  // Datum výpočtu (db: Datum) - Datum výpočtu)
  datum?: Date
  // Typ přiznání DPH (db: StavK) - Typ přiznání DPH)
  stavK?: StavPriznaniDph
  // Uživatel (db: IdUzivatel) - Uživatel)
  uzivatel?: any

  // Uživatelské vazby (type: VAZBA) - uzivatelske-vazby)
  uzivatelskeVazby?: AFUzivatelskaVazba[]


  static propAnnotations: Record<string, TypeAnnotation> = {
    id : {
      key: 'id',
      type: PropertyType.Integer,
      isArray: false,
      
    },    lastUpdate : {
      key: 'lastUpdate',
      type: PropertyType.DateTime,
      isArray: false,
      
    },    rok : {
      key: 'rok',
      type: PropertyType.Integer,
      isArray: false,
      
    },    mesic : {
      key: 'mesic',
      type: PropertyType.Integer,
      isArray: false,
      
    },    ctvrtleti : {
      key: 'ctvrtleti',
      type: PropertyType.Integer,
      isArray: false,
      
    },    datum : {
      key: 'datum',
      type: PropertyType.Date,
      isArray: false,
      
    },    stavK : {
      key: 'stavK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'StavPriznaniDph',
      enum: StavPriznaniDph,
      
    },    uzivatel : {
      key: 'uzivatel',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFEntity,
      maxLength: 254,
      
    },
    uzivatelskeVazby : {
      key: 'uzivatelskeVazby',
      type: PropertyType.Relation,
      isArray: true,
      afClass: AFUzivatelskaVazba
    },

  }
}