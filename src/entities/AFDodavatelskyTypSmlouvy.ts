import { AFEntity } from '../AFEntity'
import { AFTypFakturyPrijate } from './AFTypFakturyPrijate'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'

export enum AFDodavatelskyTypSmlouvyZpusFaktK {
  dopredu = 'zpusobFakt.dopredu', //Fakturovat dopředu
  zpetne = 'zpusobFakt.zpetne', //Fakturovat zpětně
}

export enum AFDodavatelskyTypSmlouvyTypPohybuK {
  prijem = 'typPohybu.prijem', //Příjem
  vydej = 'typPohybu.vydej', //Výdej
}


export class AFDodavatelskyTypSmlouvy extends AFEntity {

    // ID (db: IdTypSml) - ID)
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

    // Automaticky generovat (db: AutoGen) - Automaticky generovat)
    autoGen?: boolean

    // Obrátkový den (db: Den) - Obrátkový den)
    den?: number

    // Obrátkový měsíc (db: Mesic) - Obrátkový měsíc)
    mesic?: number

    // Řešit přeplatky (db: Preplatky) - Řešit přeplatky)
    preplatky?: boolean

    // Způsob fakturace (db: ZpusFaktK) - Způsob fakturace)
    zpusFaktK?: any

    // Fakturovat dní předem/po (db: DnyFakt) - Fakturovat dní předem/po)
    dnyFakt?: number

    // Variabilní symbol z faktury (db: VarSymFakt) - Variabilní symbol je generován z čísla faktury)
    varSymFakt?: boolean

    // Dat.vyst. z DUZP (db: DatVystZDuzp) - Dat.vyst. z DUZP)
    datVystZDuzp?: boolean

    // Generovat i nulové faktury (db: GenerovatNuloveFaktury) - Generovat i nulové faktury)
    generovatNuloveFaktury?: boolean

    // Zahájit workflow při založení dokladu (db: WorkFlow) - Zahájit workflow při založení dokladu)
    workFlow?: boolean

    // Typ pohybu (db: TypPohybuK) - Typ pohybu)
    typPohybuK?: any

    // Štítky (db: undefined) - Štítky)
    stitky?: string

    // Typ faktury (db: IdTypDokl) - Typ faktury)
    typDoklFak?: AFTypFakturyPrijate


    // Uživatelské vazby (type: VAZBA) - uzivatelske-vazby)
    uzivatelskeVazby?: Promise<AFUzivatelskaVazba[]>

}