import { AFEntity } from '../AFEntity'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'

export enum AFUmisteniVeSkladuMistnostTypUmisteniK {
  mistnost = 'typUmisteniSklad.mistnost', //Místnost
  regal = 'typUmisteniSklad.regal', //Regál
  police = 'typUmisteniSklad.police', //Police
}


export class AFUmisteniVeSkladuMistnost extends AFEntity {

    // ID (db: IdUmisteni) - ID)
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

    // Zobrazovat (db: Show) - Zobrazovat)
    visible?: boolean

    // Platí od (db: PlatiOd) - Platí od)
    platiOd?: number

    // Platí do (db: PlatiDo) - Platí do)
    platiDo?: number

    // Typ umístění (db: TypUmisteniK) - Typ umístění)
    typUmisteniK?: any


    // Uživatelské vazby (type: VAZBA) - uzivatelske-vazby)
    uzivatelskeVazby?: Promise<AFUzivatelskaVazba[]>

}