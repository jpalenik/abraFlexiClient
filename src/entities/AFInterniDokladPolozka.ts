import { AFEntity } from '../AFEntity'
import { AFStredisko } from './AFStredisko'
import { AFCinnost } from './AFCinnost'
import { AFMena } from './AFMena'
import { AFPredpisZauctovani } from './AFPredpisZauctovani'
import { AFUcet } from './AFUcet'
import { AFZakazka } from './AFZakazka'
import { AFAdresar } from './AFAdresar'
import { AFCleneniDph } from './AFCleneniDph'
import { AFPreneseniDph } from './AFPreneseniDph'
import { AFMernaJednotka } from './AFMernaJednotka'
import { AFSazbaDph } from './AFSazbaDph'
import { AFCleneniKontrolniHlaseni } from './AFCleneniKontrolniHlaseni'
import { AFInterniDoklad } from './AFInterniDoklad'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'

export enum AFInterniDokladPolozkaTypCenyDphK {
  bezDph = 'typCeny.bezDph', //bez DPH
  sDph = 'typCeny.sDph', //včetně DPH
}

export enum AFInterniDokladPolozkaTypSzbDphK {
  dphOsv = 'typSzbDph.dphOsv', //osvobozeno
  dphSniz = 'typSzbDph.dphSniz', //snížená
  dphSniz2 = 'typSzbDph.dphSniz2', //2. snížená
  dphZakl = 'typSzbDph.dphZakl', //základní
}

export enum AFInterniDokladPolozkaTypVypCenyK {
  marze = 'typVypCeny.marze', //marže
  rabat = 'typVypCeny.rabat', //rabat
  sleva = 'typVypCeny.sleva', //sleva
  neuveden = 'typVypCeny.neuveden', //neuveden
}

export enum AFInterniDokladPolozkaZaokrJakK {
  nahoru = 'zaokrJak.nahoru', //nahoru
  dolu = 'zaokrJak.dolu', //dolů
  matem = 'zaokrJak.matem', //matematicky
}

export enum AFInterniDokladPolozkaZaokrNaK {
  zadne = 'zaokrNa.zadne', //nezaokrouhlovat
  tisiciny = 'zaokrNa.tisiciny', //0.001
  setiny = 'zaokrNa.setiny', //0.01
  5setiny = 'zaokrNa.5setiny', //0.05
  desetiny = 'zaokrNa.desetiny', //0.1
  5desetiny = 'zaokrNa.5desetiny', //0.5
  jednotky = 'zaokrNa.jednotky', //1
  5jednotky = 'zaokrNa.5jednotky', //5
  desitky = 'zaokrNa.desitky', //10
  stovky = 'zaokrNa.stovky', //100
  tisice = 'zaokrNa.tisice', //1000
}

export enum AFInterniDokladPolozkaStavUzivK {
  bezPrikazu = 'stavUziv.bezPrikazu', //Bez příkazu
  obsaPrikaz = 'stavUziv.obsaPrikaz', //Obsažen v příkazu
  castPrikaz = 'stavUziv.castPrikaz', //Odeslán částečný příkaz
  celPrikaz = 'stavUziv.celPrikaz', //Odeslán příkaz
  nactenoEl = 'stavUziv.nactenoEl', //Načteno elektronicky
  nactenoElPosledni = 'stavUziv.nactenoElPosledni', //Naposledy načteno elektronicky
  genKasa = 'stavUziv.genKasa', //Vygenerován z kasy
  zauctovano = 'stavUziv.zauctovano', //Zaúčtováno do pokladny
  zaucZmena = 'stavUziv.zaucZmena', //Změněno po zaúčtování
}


export class AFInterniDokladPolozka extends AFEntity {

    // ID (db: IdPolInt) - ID)
    id?: number

    // Poslední změna (db: lastUpdate) - Poslední změna)
    lastUpdate?: Date

    // Úč. pol. (db: Ucetni) - Položka je účetní)
    ucetni?: boolean

    // Označení (db: Kod) - Označení)
    kod?: string

    // EAN (db: EanKod) - EAN)
    eanKod?: string

    // Název (db: Nazev) - Název)
    nazev?: string

    // Název EN (db: NazevA) - Název EN)
    nazevA?: string

    // Název DE (db: NazevB) - Název DE)
    nazevB?: string

    // Název FR (db: NazevC) - Název FR)
    nazevC?: string

    // Pořadí (db: CisRad) - Pořadí)
    cisRad?: number

    // Typ položky (db: TypPolozkyK) - Typ položky)
    typPolozkyK?: any

    // Balení (db: BaleniId) - Balení)
    baleniId?: number

    // Počet balení (db: MnozBaleni) - Počet balení)
    mnozBaleni?: Big

    // Množství (db: MnozMj) - Množství)
    mnozMj?: Big

    // Typ ceny (db: TypCenyDphK) - Typ ceny)
    typCenyDphK?: any

    // Typ sazby DPH (db: TypSzbDphK) - Typ sazby DPH)
    typSzbDphK?: any

    // DPH [%] (db: SzbDph) - DPH [%])
    szbDph?: Big

    // Cena za MJ (db: CenaMj) - Cena za MJ)
    cenaMj?: Big

    // Základ [Kč] (db: SumZkl) - Základ [Kč])
    sumZkl?: Big

    // DPH [Kč] (db: SumDph) - DPH [Kč])
    sumDph?: Big

    // Celkem [Kč] (db: sumZkl + sumDph) - Celkem [Kč])
    sumCelkem?: Big

    // Základ [měna] (db: SumZklMen) - Základ [měna])
    sumZklMen?: Big

    // DPH [měna] (db: SumDphMen) - DPH [měna])
    sumDphMen?: Big

    // Celkem [měna] (db: sumZklMen + sumDphMen) - Celkem [měna])
    sumCelkemMen?: Big

    // Objem (db: Objem) - Objem)
    objem?: Big

    // Cen. jednotka (db: CenJednotka) - Cen. jednotka)
    cenJednotka?: Big

    // Způsob výpočtu (db: TypVypCenyK) - Způsob výpočtu)
    typVypCenyK?: any

    // Nákupní cena za MJ z ceníku (db: CenaMjNakup) - Nákupní)
    cenaMjNakup?: Big

    // Prodejní cena za MJ z ceníku (db: CenaMjProdej) - Základní prodejní)
    cenaMjProdej?: Big

    // Ceníková cena [Kč] (db: CenaMjCenikTuz) - Ceníková cena [Kč])
    cenaMjCenikTuz?: Big

    // Marže / Rabat / Sleva [%] (db: ProcZakl) - Marže / Rabat / Sleva [%])
    procZakl?: Big

    // Množstevní sleva [%] (db: SlevaMnoz) - Množstevní sleva [%])
    slevaMnoz?: Big

    // Způsob zaokr. ceny (db: ZaokrJakK) - Způsob)
    zaokrJakK?: any

    // Řád zaokr. ceny (db: ZaokrNaK) - Řád)
    zaokrNaK?: any

    // Šarže (db: Sarze) - Šarže)
    sarze?: string

    // Expirace (db: Expirace) - Expirace)
    expirace?: Date

    // Trvanlivost (db: DatTrvan) - Trvanlivost)
    datTrvan?: Date

    // Datum výroby (db: DatVyroby) - Datum výroby)
    datVyroby?: Date

    // Uživatelský stav (db: StavUzivK) - Uživatelský stav)
    stavUzivK?: any

    // Plán MJ (db: MnozMjPlan) - Plánované množství)
    mnozMjPlan?: Big

    // Real. MJ (db: MnozMjReal) - Realizované množství)
    mnozMjReal?: Big

    // Zaokr. pol. (db: AutoZaokr) - AutoZaokr)
    autoZaokr?: boolean

    // Auto. pol. (db: Autogen) - Autogen)
    autogen?: boolean

    // Poznámka (db: Poznam) - Poznámka)
    poznam?: string

    // Datum vyst. (db: DatVyst) - Vystaveno)
    datVyst?: Date

    // Kopírovat MD účet základu (db: KopZklMdUcet) - Kopírovat MD účet základu)
    kopZklMdUcet?: boolean

    // Kopírovat D účet základu (db: KopZklDalUcet) - Kopírovat D účet základu)
    kopZklDalUcet?: boolean

    // Kopírovat MD účet DPH (db: KopDphMdUcet) - Kopírovat MD účet DPH)
    kopDphMdUcet?: boolean

    // Kopírovat D účet DPH (db: KopDphDalUcet) - Kopírovat D účet DPH)
    kopDphDalUcet?: boolean

    // Kopírovat předpis (db: KopTypUcOp) - Kopírovat předpis)
    kopTypUcOp?: boolean

    // Kopírovat zakázku (db: KopZakazku) - Kopírovat zakázku)
    kopZakazku?: boolean

    // Kopírovat středisko (db: KopStred) - Kopírovat středisko)
    kopStred?: boolean

    // Kopírovat činnost (db: KopCinnost) - Kopírovat činnost)
    kopCinnost?: boolean

    // Kopírovat štítky (db: KopKlice) - Kopírovat štítky)
    kopKlice?: boolean

    // Kopírovat řádek DPH (db: KopClenDph) - Kopírovat řádek DPH z dokladu)
    kopClenDph?: boolean

    // Kopírovat dat. zaúčt. (db: KopDatUcto) - Kopírovat dat. zaúčt.)
    kopDatUcto?: boolean

    // Datum zaúčt. (db: DatUcto) - Datum zaúčtování)
    datUcto?: Date

    // Storno (db: Storno) - Storno)
    storno?: boolean

    // Storno položky (db: StornoPol) - Storno položky)
    stornoPol?: boolean

    // Středisko (db: IdStred) - Středisko)
    stredisko?: AFStredisko

    // Činnost (db: IdCinnost) - Činnost)
    cinnost?: AFCinnost

    // Měna (db: IdMeny) - Měna)
    mena?: AFMena

    // Předpis zaúčtování (db: IdTypUcOp) - Předpis zaúčtování)
    typUcOp?: AFPredpisZauctovani

    // Účet MD zákl. (db: IdZklMdUcet) - Má Dáti základu)
    zklMdUcet?: AFUcet

    // Účet Dal zákl. (db: IdZklDalUcet) - Dal základu)
    zklDalUcet?: AFUcet

    // Účet MD DPH (db: IdDphMdUcet) - Má dáti DPH)
    dphMdUcet?: AFUcet

    // Účet Dal DPH (db: IdDphDalUcet) - Dal DPH)
    dphDalUcet?: AFUcet

    // Zakázka (db: IdZakazky) - Zakázka)
    zakazka?: AFZakazka

    // Dodavatel (db: IdFirmy) - Dodavatel)
    dodavatel?: AFAdresar

    // Řádky DPH (db: IdClenDph) - Řádky DPH)
    clenDph?: AFCleneniDph

    // Kód přenesení DPH (db: IdDphPren) - Kód přenesení DPH)
    dphPren?: AFPreneseniDph

    // MJ (db: IdMj) - MJ)
    mj?: AFMernaJednotka

    // MJ objemu (db: IdMjObjem) - MJ objemu)
    mjObjem?: AFMernaJednotka

    // Sazba DPH (db: IdSazbyDph) - Sazba DPH)
    sazbaDph?: AFSazbaDph

    // Zdrojová položka objednávky (db: IdPolObchZdroj) - Zdrojová položka objednávky)
    idPolObchZdroj?: number

    // Štítky (db: undefined) - Štítky)
    stitky?: string

    // Zdroj (db: Source) - Zdroj)
    source?: string

    // Řádek kontrolního hlášení DPH (db: IdClenKonVykDph) - Řádek kontrolního hlášení DPH)
    clenKonVykDph?: AFCleneniKontrolniHlaseni

    // Kopírovat řádek kon. hl. DPH (db: KopClenKonVykDph) - Kopírovat řádek kontrolního hlášení DPH z dokladu)
    kopClenKonVykDph?: boolean

    // Číselný kód zboží (db: CiselnyKodZbozi) - Číselný kód zboží)
    ciselnyKodZbozi?: string

    // Druh zboží (db: DruhZbozi) - Druh zboží)
    druhZbozi?: string

    // Marže (db: undefined) - Marže)
    marze?: Big

    // Min. marže (db: undefined) - Min. marže)
    minMarze?: Big

    // Doklad (db: IdDoklInt) - Interní doklad)
    doklInt?: AFInterniDoklad


    // Uživatelské vazby (type: VAZBA) - uzivatelske-vazby)
    uzivatelskeVazby?: Promise<AFUzivatelskaVazba[]>

}