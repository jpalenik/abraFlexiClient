import { TypeAnnotation, PropertyType } from '../../abra/AFTypes'
import { AFEntity } from '../../abra/AFEntity'
import { AFMena } from './AFMena'
import { AFUcet } from './AFUcet'
import { AFStredisko } from './AFStredisko'
import { AFCinnost } from './AFCinnost'
import { AFUcetniObdobi } from './AFUcetniObdobi'




export class AFObrat extends AFEntity {
  static EntityPath: string = 'obrat'
  static EntityName: string = 'Obraty'
  static EntityType: string = 'OBRAT'

  // ID (db: IdObrat) - ID)
  id?: number
  // Poslední změna (db: lastUpdate) - Poslední změna)
  lastUpdate?: Date
  // Měsíc (db: Obdobi) - Měsíc)
  obdobi?: number
  // Rok (db: Rok) - Rok)
  rok?: number
  // Obrat DAL (db: ObrDal) - Obrat DAL)
  obrDal?: Big
  // Obrat MD (db: ObrMd) - Obrat MD)
  obrMd?: Big
  // Obrat DAL - původní (db: ObrDalBck) - Obrat DAL - původní)
  obrDalBck?: Big
  // Obrat MD - původní (db: ObrMdBck) - Obrat MD - původní)
  obrMdBck?: Big
  // Uživatelská hodnota (db: UzivNastav) - Uživatelská hodnota)
  uzivNastav?: boolean
  // Kalendářní měsíc (db: date_trunc(&#39;month&#39;,to_date(rok || &#39;-&#39; || to_char(obdobi, &#39;00&#39;), &#39;YYYY-MM&#39;))) - Kalendářní měsíc)
  rokMesic?: Date
  // Měna (db: IdMeny) - Měna)
  mena?: AFMena
  // Účet (db: IdUcet) - Účet)
  ucet?: AFUcet
  // Středisko (db: IdStred) - Středisko)
  stredisko?: AFStredisko
  // Činnost (db: IdCinnost) - Činnost)
  cinnost?: AFCinnost
  // Účetní období (db: IdUcetObdobi) - Účetní období)
  ucetniObdobi?: AFUcetniObdobi



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
    obdobi : {
      key: 'obdobi',
      type: PropertyType.Integer,
      isArray: false,
      
    },
    rok : {
      key: 'rok',
      type: PropertyType.Integer,
      isArray: false,
      
    },
    obrDal : {
      key: 'obrDal',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    obrMd : {
      key: 'obrMd',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    obrDalBck : {
      key: 'obrDalBck',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    obrMdBck : {
      key: 'obrMdBck',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    uzivNastav : {
      key: 'uzivNastav',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    rokMesic : {
      key: 'rokMesic',
      type: PropertyType.Date,
      isArray: false,
      
    },
    mena : {
      key: 'mena',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFMena',
      
    },
    ucet : {
      key: 'ucet',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFUcet',
      maxLength: 6,
      
    },
    stredisko : {
      key: 'stredisko',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFStredisko',
      
    },
    cinnost : {
      key: 'cinnost',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFCinnost',
      
    },
    ucetniObdobi : {
      key: 'ucetniObdobi',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFUcetniObdobi',
      
    },


  }
}