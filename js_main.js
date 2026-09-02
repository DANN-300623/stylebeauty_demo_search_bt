/* =========================================================
   STIL BEAUTY SALON
   GLOBAL JAVASCRIPT
========================================================= */

/* =====================================================
   BACKEND ADRESA
   Dok testiraš lokalno (XAMPP), ostavi kako jeste.
   Kad sajt bude na pravom hostingu, promeni ovo u
   pravu adresu foldera sa PHP fajlovima, npr.:
   "https://tvoj-domen.rs/booking"
===================================================== */

const API_BASE = "http://localhost/salon_booking";

/* =====================================================
   SEARCH INDEX — sadržaj svih stranica za pretragu
===================================================== */

const searchIndex = [
    {
        page: "Cenovnik",
        url: "cenovnik.html",
        anchor: "jednostavno-bez-iznenadjenja",
        heading: "Jednostavno, bez iznenađenja.",
        text: "STIL • CENOVNIK Jednostavno, bez iznenađenja. Pogledaj usluge i pronađi ono što ti odgovara."
    },
    {
        page: "Cenovnik",
        url: "cenovnik.html",
        anchor: "tvoj-stil-tvoj-izbor",
        heading: "Tvoj STIL, tvoj izbor.",
        text: "CENE USLUGA Tvoj STIL, tvoj izbor. Cene ispod su primer strukture i mogu se jednostavno zameniti stvarnim cenama salona."
    },
    {
        page: "Cenovnik",
        url: "cenovnik.html",
        anchor: "nega-koja-prija",
        heading: "Nega koja prija.",
        text: "Nega lica Nokti Pedikir Obrve & trepavice 01 • NEGA LICA Nega koja prija. 01 Osnovni tretman lica Čišćenje i osnovna nega kože. XX00 RSD 02 Dubinsko čišćenje Detaljniji tretman prilagođen koži. XX00 RSD 03 Hidratantni tretman Nega i hidratacija za svežiji izgled. XX00 RSD 04 Tretman po preporuci Odabir tretmana prema potrebama kože. XX00 RSD 02 • NOKTI Uredni nokti, tvoj STIL. 01 Klasičan manikir Uređivanje noktiju i zanoktica. XX00 RSD 02 Gel lak Uredan i dugotrajniji izgled noktiju. XX00 RSD 03 Korekcija Održavanje postojećeg manikira. XX00 RSD 04 Nail art Cena zavisi od odabranog dizajna. o"
    },
    {
        page: "Cenovnik",
        url: "cenovnik.html",
        anchor: "pricing-note",
        heading: "",
        text: "✦ Važna napomena Cene i trajanje tretmana mogu zavisiti od vrste usluge i individualnih potreba. Za više informacija slobodno nas kontaktiraj."
    },
    {
        page: "Cenovnik",
        url: "cenovnik.html",
        anchor: "pronasla-si-svoj-tretman",
        heading: "Pronašla si svoj tretman?",
        text: "♡ STIL BEAUTY Pronašla si svoj tretman? Rezerviši termin i vidimo se u STIL-u. Zakaži termin →"
    },
    {
        page: "Galerija",
        url: "galerija.html",
        anchor: "mali-detalji-veliki-utisak",
        heading: "Mali detalji, veliki utisak.",
        text: "STIL • GALERIJA Mali detalji, veliki utisak. Pogledaj delić STIL atmosfere, naših radova i beauty trenutaka."
    },
    {
        page: "Galerija",
        url: "galerija.html",
        anchor: "ovde-se-stil-vidi",
        heading: "Ovde se STIL vidi.",
        text: "DOBRODOŠLA U STIL Ovde se STIL vidi. Fotografije salona, detalja, noktiju, tretmana i svega što čini naš mali beauty svet."
    },
    {
        page: "Galerija",
        url: "galerija.html",
        anchor: "gallery-section",
        heading: "",
        text: "Sve Salon Nokti Nega lica Beauty SALON STIL naš mali kutak Salon STIL NAILS 01 Nokti Detail CARE 02 Nega lica Care STIL BEAUTY 03 Naš prostor STIL BEAUTY 04 Beauty STIL NAILS 05 Nokti STIL Nails FACE 06 Tretman Care STIL BEAUTY detalji koji čine razliku Beauty STIL NAILS 07 Manikir Detail STIL 08 Salon Atmosfera"
    },
    {
        page: "Galerija",
        url: "galerija.html",
        anchor: "jos-stil-a-na-instagramu",
        heading: "Još STIL-a na Instagramu.",
        text: "◎ PRATIMO SE Još STIL-a na Instagramu. Pogledaj najnovije radove, termine i svakodnevne trenutke iz salona. Poseti Instagram ↗"
    },
    {
        page: "Galerija",
        url: "galerija.html",
        anchor: "dopada-ti-se-stil",
        heading: "Dopada ti se STIL?",
        text: "✦ STIL BEAUTY Dopada ti se STIL? Onda je možda vreme da rezervišeš svoj termin. Zakaži termin →"
    },
    {
        page: "Početna",
        url: "index.html",
        anchor: "tvoj-mali-trenutak-za-sebe",
        heading: "Tvoj mali trenutak za sebe.",
        text: "BEAUTY • CARE • STIL Tvoj mali trenutak za sebe. Nega lica, nokti, pedikir i obrve — sve na jednom mestu. Zakaži termin → Pogledaj usluge Detalji koji prave STIL. STIL beauty & care YOUR STIL YOUR MOMENT"
    },
    {
        page: "Početna",
        url: "index.html",
        anchor: "lepota-nije-zurba",
        heading: "Lepota nije žurba.",
        text: "DOBRODOŠLA U STIL Lepota nije žurba. U STIL-u želimo da se osećaš prijatno i opušteno, bilo da dolaziš na brz manikir ili duži tretman lica."
    },
    {
        page: "Početna",
        url: "index.html",
        anchor: "sta-ti-se-danas-radi",
        heading: "Šta ti se danas radi?",
        text: "NAŠE USLUGE Šta ti se danas radi? Četiri kategorije, jasan izbor — biraš šta ti odgovara. 01 ✧ Nega lica Čišćenje, hidratacija i tretmani prema potrebama kože. Saznaj više → 02 ♡ Nokti & manikir Manikir, gel lak i detalji koji se uklapaju u tvoj stil. Saznaj više → 03 ◌ Pedikir Nega stopala i uredan završni detalj. Saznaj više → 04 ✦ Obrve & trepavice Oblikovanje, farbanje, laminacija i lash lift. Saznaj više → 05 + Ostali tretmani Pogledaj kompletnu ponudu STIL salona. Pogledaj sve → Pogledaj sve usluge →"
    },
    {
        page: "Početna",
        url: "index.html",
        anchor: "lepota-je-u-detaljima",
        heading: "Lepota je u detaljima.",
        text: "ZAŠTO STIL? Lepota je u detaljima. Osnovali smo STIL sa jednom idejom — da se svaka klijentkinja oseti opušteno i negovano od trenutka kad uđe. Upoznaj STIL → ♡ Prijatna atmosfera Bez žurbe i nepotrebne formalnosti. ✦ Sve na jednom mestu Nega, nokti, pedikir i još mnogo toga. ○ Pažnja na detalje Jer male stvari prave veliku razliku. ✧ Tvoje vreme Dođeš, opustiš se i izađeš sređena."
    },
    {
        page: "Početna",
        url: "index.html",
        anchor: "prica-iza-stil-a-u-par-redova",
        heading: "Priča iza STIL-a. U par redova.",
        text: "STIL • BEAUTY • CARE STIL O NAMA Priča iza STIL-a. U par redova. Male stvari nam znače najviše — zato ih ne preskačemo. Više o nama →"
    },
    {
        page: "Početna",
        url: "index.html",
        anchor: "stil-iznutra",
        heading: "STIL, iznutra.",
        text: "GALERIJA STIL, iznutra. Kratak pogled na prostor i atmosferu salona. SALON STIL naš mali kutak Salon STIL NEGA NAILS manikir & pedikir Nega Nokti TRETMANI CARE nega lica i tela Tretmani Care DETALJI BEAUTY mali beauty detalji Detalji Beauty STIL STIL BEAUTY atmosfera salona STIL Beauty Pogledaj celu galeriju →"
    },
    {
        page: "Početna",
        url: "index.html",
        anchor: "quote-section",
        heading: "",
        text: "“ Ljudi se vraćaju tamo gde se osećaju dobrodošlo.” STIL"
    },
    {
        page: "Početna",
        url: "index.html",
        anchor: "kad-mozes-da-dodjes",
        heading: "Kad možeš da dođeš?",
        text: "✦ REZERVACIJA Kad možeš da dođeš? Ostavi svoje podatke i javljamo se da dogovorimo termin. Zakaži termin →"
    },
    {
        page: "Kontakt",
        url: "kontakt.html",
        anchor: "hajde-da-se-upoznamo",
        heading: "Hajde da se upoznamo.",
        text: "STIL • KONTAKT Hajde da se upoznamo. Imaš pitanje, želiš termin ili samo želiš da saznaš šta bi ti najviše odgovaralo? Piši nam."
    },
    {
        page: "Kontakt",
        url: "kontakt.html",
        anchor: "svrati-u-nas-stil",
        heading: "Svrati u naš STIL.",
        text: "GDE SMO Svrati u naš STIL. Svrati na kratak predah od svakodnevice. ⌖ Adresa Ulica i broj Grad, Srbija ☎ Telefon +381 00 000 0000 ◎ Instagram @stil.beauty ◷ Radno vreme Pon – Pet 09:00 – 19:00 ✦ Za najbrži odgovor pošalji nam poruku ili nas pozovi direktno. ZAKAŽI TERMIN Rezerviši svoje vreme. Popuni formu i javićemo ti se radi potvrde termina. Ime i prezime Telefon E-mail Željena usluga Učitavanje usluga... Željeni datum Slobodni termini Poruka opcionalno Slažem se da STIL može da me kontaktira povodom ovog zahteva. Pošalji zahtev →"
    },
    {
        page: "Kontakt",
        url: "kontakt.html",
        anchor: "vidimo-se-u-stil-u",
        heading: "Vidimo se u STIL-u.",
        text: "PRONAĐI NAS Vidimo se u STIL-u. Naša tačna lokacija može biti prikazana ovde putem Google Maps mape. Otvori mapu ↗ ✦ STIL Ulica i broj"
    },
    {
        page: "Kontakt",
        url: "kontakt.html",
        anchor: "pre-nego-sto-dodjes",
        heading: "Pre nego što dođeš.",
        text: "ČESTA PITANJA Pre nego što dođeš. Da li je potrebno zakazivanje? + Da. Preporučujemo da termin rezervišeš unapred kako bismo mogli da ti posvetimo dovoljno vremena. Kako mogu da pomerim termin? + Pozovi nas ili pošalji poruku čim znaš da nećeš moći da dođeš u zakazano vreme. Ne znam koji tretman mi treba. + Nema problema. Napiši nam šta želiš da postigneš i pomoći ćemo ti da izabereš odgovarajući tretman. Da li mogu da zakažem više usluga? + Naravno. U poruci samo napiši koje usluge želiš da kombinuješ, pa ćemo zajedno pronaći odgovarajući termin."
    },
    {
        page: "Kontakt",
        url: "kontakt.html",
        anchor: "vidimo-se-uskoro",
        heading: "Vidimo se uskoro.",
        text: "♡ STIL BEAUTY Vidimo se uskoro. Jedan termin. Malo vremena za sebe. I malo više STIL-a. Zakaži termin ↑"
    },
    {
        page: "Nega lica",
        url: "nega-lica.html",
        anchor: "vreme-da-malo-usporis",
        heading: "Vreme da malo usporiš.",
        text: "STIL • NEGA Vreme da malo usporiš. Tvoja koža zaslužuje pažnju. Izaberi tretman, odvoji malo vremena za sebe i uživaj u trenutku posvećenom nezi. Zakaži tretman → care STIL ✦"
    },
    {
        page: "Nega lica",
        url: "nega-lica.html",
        anchor: "tvoja-koza-tvoj-trenutak",
        heading: "Tvoja koža. Tvoj trenutak.",
        text: "NEGA LICA Tvoja koža. Tvoj trenutak. Tretmani nege lica mogu biti deo tvoje rutine, ali i mali predah od svakodnevnog tempa. Uživaj u trenutku posvećenom sebi."
    },
    {
        page: "Nega lica",
        url: "nega-lica.html",
        anchor: "izaberi-ono-sto-tvojoj-kozi-prija",
        heading: "Izaberi ono što tvojoj koži prija.",
        text: "TRETMANI Izaberi ono što tvojoj koži prija. Ovde će biti prikazana kompletna ponuda tretmana lica u STIL salonu. 01 Osnovna nega lica Tretman namenjen osveženju i osnovnoj nezi kože. Trajanje: po dogovoru Cena po dogovoru → 02 Dubinska nega Tretman za temeljnu negu i osveženje kože lica. Trajanje: po dogovoru Cena po dogovoru → 03 Hidratacija Nega usmerena na hidrataciju i svežiji izgled kože. Trajanje: po dogovoru Cena po dogovoru → 04 Tretman po preporuci Nisi sigurna šta ti odgovara? Pozovi nas i zajedno izaberite tretman. Trajanje: po dogovoru Cena po dogovoru →"
    },
    {
        page: "Nega lica",
        url: "nega-lica.html",
        anchor: "ne-znas-koji-tretman-je-pravi-za-tebe",
        heading: "Ne znaš koji tretman je pravi za tebe?",
        text: "✧ NISI SIGURNA? Ne znaš koji tretman je pravi za tebe? Nema problema. Pozovi nas ili nam piši i zajedno ćemo pronaći opciju koja ti najviše odgovara. Pitaj nas →"
    },
    {
        page: "Nega lica",
        url: "nega-lica.html",
        anchor: "jer-nega-nije-samo-tretman",
        heading: "Jer nega nije samo tretman.",
        text: "STIL RITUAL Jer nega nije samo tretman. 01 ♡ Vreme za sebe Nekoliko trenutaka bez žurbe može da napravi veliku razliku. 02 ✦ Pažnja na detalje Lepota se krije u malim stvarima i pažnji koju im posvetimo. 03 ○ Prijatan ritual Nega kože može biti trenutak kojem ćeš se radovati."
    },
    {
        page: "Nega lica",
        url: "nega-lica.html",
        anchor: "pokloni-kozi-malo-paznje",
        heading: "Pokloni koži malo pažnje.",
        text: "✦ NEGA LICA Pokloni koži malo pažnje. Rezerviši svoj termin i odvoji malo vremena samo za sebe. Zakaži tretman →"
    },
    {
        page: "Nokti & manikir",
        url: "nokti.html",
        anchor: "nokti-koji-izgledaju-kao-stil",
        heading: "Nokti koji izgledaju kao STIL.",
        text: "STIL • NAILS Nokti koji izgledaju kao STIL. Uredni, negovani nokti i detalji koji upotpunjuju tvoj izgled — od jednostavnog manikira do tvog omiljenog dizajna. Zakaži termin → nails STIL ♡"
    },
    {
        page: "Nokti & manikir",
        url: "nokti.html",
        anchor: "mali-detalj-koji-pravi-razliku",
        heading: "Mali detalj koji pravi razliku.",
        text: "NOKTI & MANIKIR Mali detalj koji pravi razliku. Nekad je dovoljan samo uredan manikir da se osećaš sređenije. Izaberi stil koji ti odgovara i prepusti nama detalje."
    },
    {
        page: "Nokti & manikir",
        url: "nokti.html",
        anchor: "od-jednostavnog-do-posebnog",
        heading: "Od jednostavnog do posebnog.",
        text: "NOKTI Od jednostavnog do posebnog. Ponuda usluga može se prilagoditi stvarnoj ponudi STIL salona. 01 Klasičan manikir Uređivanje noktiju i zanoktica za čist i negovan izgled. Trajanje: po dogovoru Cena po dogovoru → 02 Gel lak Dugotrajniji izgled noktiju uz urednu i sjajnu završnicu. Trajanje: po dogovoru Cena po dogovoru → 03 Korekcija Održavanje i osvežavanje postojećeg izgleda noktiju. Trajanje: po dogovoru Cena po dogovoru → 04 Nail art Diskretni detalji ili nešto potpuno posebno — po tvom izboru. Cena zavisi od dizajna Po dogovoru →"
    },
    {
        page: "Nokti & manikir",
        url: "nokti.html",
        anchor: "jednostavno-nezno-ili-upadljivo",
        heading: "Jednostavno, nežno ili upadljivo?",
        text: "TVOJ IZBOR Jednostavno, nežno ili upadljivo? Tvoj manikir ne mora da prati pravila. Izaberi oblik, boju i detalje koji ti se dopadaju. Pogledaj galeriju noktiju → 01 MINIMAL 02 SOFT 03 STIL"
    },
    {
        page: "Nokti & manikir",
        url: "nokti.html",
        anchor: "lepi-nokti-pocinju-dobrom-negom",
        heading: "Lepi nokti počinju dobrom negom.",
        text: "MALI SAVET Lepi nokti počinju dobrom negom. 01 Neguj zanoktice Redovna hidratacija pomaže da koža oko noktiju izgleda urednije. 02 Ne preskači održavanje Redovni termini pomažu da nokti ostanu uredni i negovani. 03 Biraj ono što voliš Najlepši manikir je onaj zbog kojeg se ti osećaš lepo."
    },
    {
        page: "Nokti & manikir",
        url: "nokti.html",
        anchor: "vreme-je-za-novi-manikir",
        heading: "Vreme je za novi manikir.",
        text: "♡ STIL NAILS Vreme je za novi manikir. Izaberi svoj termin i prepusti nama da se pobrinemo za detalje. Zakaži termin →"
    },
    {
        page: "Obrve & trepavice",
        url: "obrve-trepavice.html",
        anchor: "pogled-koji-govori-sam-za-sebe",
        heading: "Pogled koji govori sam za sebe.",
        text: "STIL • BROWS & LASHES Pogled koji govori sam za sebe. Obrve i trepavice su mali detalji koji mogu potpuno promeniti izgled lica. Istakni ono što već imaš. Zakaži termin → beauty STIL ✦"
    },
    {
        page: "Obrve & trepavice",
        url: "obrve-trepavice.html",
        anchor: "nekad-je-dovoljan-samo-jedan-detalj",
        heading: "Nekad je dovoljan samo jedan detalj.",
        text: "OBRVE & TREPAVICE Nekad je dovoljan samo jedan detalj. Lepo oblikovane obrve i naglašene trepavice mogu dati licu svežiji i odmorniji izgled, bez mnogo dodatnog truda."
    },
    {
        page: "Obrve & trepavice",
        url: "obrve-trepavice.html",
        anchor: "suptilno-ili-naglaseno",
        heading: "Suptilno ili naglašeno.",
        text: "USLUGE Suptilno ili naglašeno. Izaberi tretman prema svom stilu i željenom efektu. 01 Oblikovanje obrva Uređivanje i oblikovanje obrva prema prirodnom obliku lica. Trajanje: po dogovoru Cena po dogovoru → 02 Farbanje obrva Naglašavanje obrva uz odabir nijanse koja odgovara tvom izgledu. Trajanje: po dogovoru Cena po dogovoru → 03 Lash lift Podizanje i uvijanje prirodnih trepavica za otvoreniji pogled. Trajanje: po dogovoru Cena po dogovoru → 04 Farbanje trepavica Diskretno naglašavanje prirodne boje trepavica. Trajanje: po dogovoru Cena po dogovoru → 05 Obrve + trepavice Kombinacija tretmana z"
    },
    {
        page: "Obrve & trepavice",
        url: "obrve-trepavice.html",
        anchor: "manje-je-cesto-vise",
        heading: "Manje je često više.",
        text: "PRIRODAN EFEKAT Manje je često više. Cilj nije da promenimo tvoje lice, već da istaknemo ono što je već lepo. NATURAL Prirodno → STIL STIL efekat"
    },
    {
        page: "Obrve & trepavice",
        url: "obrve-trepavice.html",
        anchor: "obrve-su-okvir-lica",
        heading: "Obrve su okvir lica.",
        text: "MALI SAVET Obrve su okvir lica. 01 Ne preteruj sa oblikom Prirodan oblik često najbolje prati proporcije tvog lica. 02 Biraj nijansu pažljivo Cilj je da obrve izgledaju skladno sa celokupnim izgledom. 03 Neguj trepavice Nežna svakodnevna nega može pomoći da trepavice izgledaju uredno."
    },
    {
        page: "Obrve & trepavice",
        url: "obrve-trepavice.html",
        anchor: "istakni-svoj-pogled",
        heading: "Istakni svoj pogled.",
        text: "✦ BROWS & LASHES Istakni svoj pogled. Zakaži termin i pronađi tretman koji odgovara tvom stilu. Zakaži termin →"
    },
    {
        page: "Pedikir",
        url: "pedikir.html",
        anchor: "mali-predah-za-tvoja-stopala",
        heading: "Mali predah za tvoja stopala.",
        text: "STIL • CARE Mali predah za tvoja stopala. Nega stopala ne mora da bude samo obaveza. Pretvori je u mali ritual i odvoji vreme da se opustiš. Zakaži termin → CARE pedicure STIL ◌"
    },
    {
        page: "Pedikir",
        url: "pedikir.html",
        anchor: "nega-od-glave-do-stopala",
        heading: "Nega od glave do stopala.",
        text: "PEDIKIR Nega od glave do stopala. Uredna stopala i negovani nokti deo su celokupne nege. A ako pritom možeš malo i da se opustiš — još bolje."
    },
    {
        page: "Pedikir",
        url: "pedikir.html",
        anchor: "izaberi-svoj-trenutak-nege",
        heading: "Izaberi svoj trenutak nege.",
        text: "USLUGE Izaberi svoj trenutak nege. Nazivi, trajanja i cene mogu se kasnije prilagoditi stvarnoj ponudi salona. 01 Klasičan pedikir Uređivanje noktiju i osnovna nega stopala za uredan i negovan izgled. Trajanje: po dogovoru Cena po dogovoru → 02 Pedikir + lak Kompletna nega uz završni sloj laka po tvom izboru. Trajanje: po dogovoru Cena po dogovoru → 03 Pedikir + gel lak Nega stopala uz dugotrajniju završnicu noktiju. Trajanje: po dogovoru Cena po dogovoru → 04 Nega stopala Dodatna pažnja posvećena koži stopala i osećaju prijatnosti. Trajanje: po dogovoru Cena po dogovoru →"
    },
    {
        page: "Pedikir",
        url: "pedikir.html",
        anchor: "ne-moras-nigde-da-zuris",
        heading: "Ne moraš nigde da žuriš.",
        text: "relax STIL STIL RITUAL Ne moraš nigde da žuriš. Pedikir je jedan od onih malih trenutaka kada možeš da sedneš, opustiš se i pustiš nekoga drugog da se pobrine za tebe. Zato STIL nije samo mesto za sređivanje. To je i mali predah usred svakodnevnog dana. Rezerviši svoj trenutak →"
    },
    {
        page: "Pedikir",
        url: "pedikir.html",
        anchor: "nekoliko-malih-navika",
        heading: "Nekoliko malih navika.",
        text: "NEGA KOD KUĆE Nekoliko malih navika. Za uredniji i prijatniji osećaj između termina. 01 Hidratacija Redovna hidratacija kože pomaže da stopala ostanu mekša i negovanija. 02 Obrati pažnju na nokte Održavaj nokte urednim i nemoj čekati da postanu predugački. 03 Pokloni sebi vreme Nega nije samo estetika — neka bude deo tvog malog rituala."
    },
    {
        page: "Pedikir",
        url: "pedikir.html",
        anchor: "vreme-je-za-malo-predaha",
        heading: "Vreme je za malo predaha.",
        text: "◌ STIL PEDICURE Vreme je za malo predaha. Zakaži svoj termin i pokloni sebi malo pažnje. Zakaži termin →"
    },
    {
        page: "Usluge",
        url: "usluge.html",
        anchor: "usluge",
        heading: "Usluge",
        text: "STIL BEAUTY SALON Usluge Nega lica, nokti, pedikir i obrve na jednom mestu — biraš šta ti treba."
    },
    {
        page: "Usluge",
        url: "usluge.html",
        anchor: "sta-zelis-da-uradis-danas",
        heading: "Šta želiš da uradiš danas?",
        text: "ŠTA RADIMO Šta želiš da uradiš danas? U STIL-u možeš da završiš nekoliko različitih beauty tretmana na jednom mestu — od nege lica i noktiju do obrva, trepavica i pedikira. Izaberi kategoriju koja te zanima i pogledaj detaljnije tretmane."
    },
    {
        page: "Usluge",
        url: "usluge.html",
        anchor: "izaberi-svoj-tretman",
        heading: "Izaberi svoj tretman",
        text: "NAŠE USLUGE Izaberi svoj tretman 01 ✧ Nega lica Tretmani za čišćenje, hidrataciju, osvežavanje i negu kože. Pogledaj tretmane → 02 ♡ Nokti & manikir Manikir, gel lak i detalji koji se uklapaju u tvoj stil. Pogledaj tretmane → 03 ◌ Pedikir Nega stopala i uredan završni detalj. Pogledaj tretmane → 04 ✦ Obrve & trepavice Oblikovanje, farbanje, laminacija i lash lift. Pogledaj tretmane →"
    },
    {
        page: "Usluge",
        url: "usluge.html",
        anchor: "nisi-sigurna-sta-da-izaberes",
        heading: "Nisi sigurna šta da izabereš?",
        text: "POMOĆ PRI IZBORU Nisi sigurna šta da izabereš? Ne moraš tačno da znaš šta ti treba. Javi nam se, ispričaj šta te muči ili šta bi da promeniš — zajedno ćemo izabrati tretman koji ti odgovara. STIL"
    },
    {
        page: "Usluge",
        url: "usluge.html",
        anchor: "odaberi-tretman-i-zakazi-termin",
        heading: "Odaberi tretman i zakaži termin.",
        text: "◌ SLEDEĆI KORAK Odaberi tretman i zakaži termin. Pozovi nas ili nam pošalji poruku i dogovori svoj termin. Zakaži termin →"
    },
{
        page: "O nama",
        url: "o-nama.html",
        anchor: "nega-sa-paznjom-za-tebe",
        heading: "Nega sa pažnjom. Za tebe.",
        text: "STIL • O NAMA Nega sa pažnjom. Za tebe. Mesto gde dolaziš da se središ, ali i da se osećaš prijatno."
    },
    {
        page: "O nama",
        url: "o-nama.html",
        anchor: "stil-je-nastao-iz-ljubavi-prema-lepoti",
        heading: "STIL je nastao iz ljubavi prema lepoti.",
        text: "STIL beauty & care YOUR STIL YOUR NAŠA PRIČA STIL je nastao iz ljubavi prema lepoti. Verujemo u ličan pristup. Poznaješ osobu koja te dočekuje, a svaki tretman je posvećen tebi — ne rasporedu. Kod nas možeš da se opustiš bez osećaja da si samo još jedan termin u danu. Volimo lepe detalje, uredne nokte, negovanu kožu, lepo oblikovane obrve i onaj osećaj kada izađeš iz salona i pomisliš: \"E, sad sam baš sređena.\" Zato smo sve spojili pod jednim imenom — STIL."
    },
    {
        page: "O nama",
        url: "o-nama.html",
        anchor: "ovde-je-sve-zbog-tebe",
        heading: "Ovde je sve zbog tebe.",
        text: "NAŠ KUTAK Ovde je sve zbog tebe. Nekad dolaziš zbog noktiju. Nekad zbog tretmana lica. Nekad samo zato što ti treba malo vremena za sebe. Šta god da je razlog, želimo da se kod nas osećaš prijatno, opušteno i dobrodošlo. Pažljivo biramo ono što radimo, slušamo šta ti prija i verujemo da lepota ne mora da bude komplikovana. Dobrodošla u STIL STIL"
    },
    {
        page: "O nama",
        url: "o-nama.html",
        anchor: "ono-sto-nam-je-vazno",
        heading: "Ono što nam je važno.",
        text: "ZAŠTO STIL Ono što nam je važno. Nisu nam važni samo rezultati tretmana, već i osećaj koji nosiš sa sobom kada odeš. 01 ♡ Pažnja Svaka osoba je drugačija. Zato i pristup treba da bude ličan. 02 ✦ Urednost Volimo čist, negovan i prirodan izgled koji traje i van salona. 03 ◌ Opuštenost Kod nas nema žurbe. Tvoj termin je vreme koje odvajaš za sebe. 04 ◎ STIL Ne želimo da svi izgledaju isto. Želimo da svako pronađe svoj stil."
    },
    {
        page: "O nama",
        url: "o-nama.html",
        anchor: "about-quote-section",
        heading: "",
        text: "“ Lepota nije u tome da izgledaš kao neko drugi. Lepota je kada pogledaš sebe i kažeš — ovo sam ja.” STIL"
    },
    {
        page: "O nama",
        url: "o-nama.html",
        anchor: "sve-na-jednom-mestu-bez-komplikovanja",
        heading: "Sve na jednom mestu, bez komplikovanja.",
        text: "ŠTA RADIMO Sve na jednom mestu, bez komplikovanja. 01 Nega lica → 02 Nokti & manikir → 03 Pedikir → 04 Obrve & trepavice →"
    },
    {
        page: "O nama",
        url: "o-nama.html",
        anchor: "dodji-da-upoznas-stil",
        heading: "Dođi da upoznaš STIL.",
        text: "♡ DOBRODOŠLA Dođi da upoznaš STIL. Rezerviši termin i svrati u STIL. Zakaži termin →"
    },
];

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       01. MOBILE MENU
    ===================================================== */

    const menuToggle = document.querySelector(".menu-toggle");
    const mainNav = document.querySelector(".main-nav");

    if (menuToggle && mainNav) {

        menuToggle.addEventListener("click", () => {

            menuToggle.classList.toggle("active");
            mainNav.classList.toggle("open");
            document.body.classList.toggle("menu-open");

        });

        // Zatvori meni kada se klikne na link
        mainNav.querySelectorAll("a").forEach(link => {

            link.addEventListener("click", () => {

                menuToggle.classList.remove("active");
                mainNav.classList.remove("open");
                document.body.classList.remove("menu-open");

            });

        });

    }


    /* =====================================================
       02. STICKY HEADER
    ===================================================== */

    const header = document.querySelector(".site-header");

    if (header) {

        const checkHeader = () => {

            if (window.scrollY > 30) {
                header.classList.add("scrolled");
            } else {
                header.classList.remove("scrolled");
            }

        };

        checkHeader();

        window.addEventListener(
            "scroll",
            checkHeader,
            { passive: true }
        );

    }


    /* =====================================================
       03. ACTIVE NAVIGATION
    ===================================================== */

    const currentPage =
        window.location.pathname
            .split("/")
            .pop() || "index.html";

    document.querySelectorAll(".main-nav a").forEach(link => {

        const href = link.getAttribute("href");

        if (!href) return;

        const linkPage =
            href.split("/")
                .pop()
                .split("#")[0];

        if (
            linkPage === currentPage ||
            (currentPage === "" && linkPage === "index.html")
        ) {

            link.classList.add("active");

        }

    });


    /* =====================================================
       04. SCROLL REVEAL
    ===================================================== */

    const revealElements =
        document.querySelectorAll(".reveal");

    if (revealElements.length) {

        const revealObserver =
            new IntersectionObserver(
                (entries, observer) => {

                    entries.forEach(entry => {

                        if (entry.isIntersecting) {

                            entry.target.classList.add(
                                "visible"
                            );

                            observer.unobserve(
                                entry.target
                            );

                        }

                    });

                },
                {
                    threshold: 0.12
                }
            );

        revealElements.forEach(element => {

            revealObserver.observe(element);

        });

    }


    /* =====================================================
       05. SMOOTH ANCHOR SCROLL
    ===================================================== */

    document.querySelectorAll(
        'a[href^="#"]'
    ).forEach(anchor => {

        anchor.addEventListener("click", event => {

            const targetId =
                anchor.getAttribute("href");

            if (
                !targetId ||
                targetId === "#"
            ) {
                return;
            }

            const target =
                document.querySelector(targetId);

            if (!target) return;

            event.preventDefault();

            const headerHeight =
                header
                    ? header.offsetHeight
                    : 0;

            const targetPosition =
                target.getBoundingClientRect().top +
                window.scrollY -
                headerHeight -
                20;

            window.scrollTo({
                top: targetPosition,
                behavior: "smooth"
            });

        });

    });


    /* =====================================================
       06. GALLERY FILTER
    ===================================================== */

    const galleryFilters =
        document.querySelectorAll(
            ".gallery-filter"
        );

    const galleryPhotos =
        document.querySelectorAll(
            ".gallery-photo"
        );

    if (
        galleryFilters.length &&
        galleryPhotos.length
    ) {

        galleryFilters.forEach(filter => {

            filter.addEventListener("click", () => {

                galleryFilters.forEach(item => {
                    item.classList.remove("active");
                });

                filter.classList.add("active");

                const category =
                    filter.dataset.filter;

                galleryPhotos.forEach(photo => {

                    const photoCategory =
                        photo.dataset.category;

                    if (
                        category === "all" ||
                        photoCategory === category
                    ) {

                        photo.classList.remove(
                            "hidden"
                        );

                    } else {

                        photo.classList.add(
                            "hidden"
                        );

                    }

                });

            });

        });

    }


    /* =====================================================
       07. PRICING TABS
    ===================================================== */

    const pricingTabs =
        document.querySelectorAll(
            ".pricing-tab"
        );

    const pricingCategories =
        document.querySelectorAll(
            ".price-category"
        );

    if (
        pricingTabs.length &&
        pricingCategories.length
    ) {

        pricingTabs.forEach(tab => {

            tab.addEventListener("click", () => {

                const category =
                    tab.dataset.category;

                pricingTabs.forEach(item => {

                    item.classList.remove(
                        "active"
                    );

                });

                pricingCategories.forEach(item => {

                    item.classList.remove(
                        "active"
                    );

                });

                tab.classList.add("active");

                const target =
                    document.querySelector(
                        `.price-category[data-category="${category}"]`
                    );

                if (target) {

                    target.classList.add("active");

                }

            });

        });

    }


    /* =====================================================
       08. FAQ ACCORDION
    ===================================================== */

    const faqItems =
        document.querySelectorAll(
            ".faq-item"
        );

    if (faqItems.length) {

        faqItems.forEach(item => {

            const question =
                item.querySelector(
                    ".faq-question"
                );

            if (!question) return;

            question.addEventListener(
                "click",
                () => {

                    const isOpen =
                        item.classList.contains(
                            "open"
                        );

                    // zatvori ostale
                    faqItems.forEach(otherItem => {

                        if (
                            otherItem !== item
                        ) {

                            otherItem.classList.remove(
                                "open"
                            );

                        }

                    });

                    if (isOpen) {

                        item.classList.remove(
                            "open"
                        );

                    } else {

                        item.classList.add(
                            "open"
                        );

                    }

                }
            );

        });

    }


    /* =====================================================
       09. CONTACT FORM (zakazivanje povezano sa bazom)
    ===================================================== */

    const contactForm =
        document.querySelector(
            ".contact-form"
        );

    if (contactForm) {

        const serviceSelect = contactForm.querySelector('[name="service"]');
        const dateInput = contactForm.querySelector('[name="date"]');
        const timeSlotsGroup = document.getElementById("timeSlotsGroup");
        const timeSlotsContainer = document.getElementById("timeSlots");
        const selectedTimeInput = document.getElementById("selectedTime");
        const selectedEmployeeInput = document.getElementById("selectedEmployee");
        const submitBtn = contactForm.querySelector('.form-submit');

        // Danas kao najraniji moguci datum
        if (dateInput) {
            dateInput.min = new Date().toISOString().split("T")[0];
        }

        const nazivKategorije = {
            "nega-lica": "Nega lica",
            "nokti": "Nokti",
            "pedikir": "Pedikir",
            "obrve-trepavice": "Obrve i trepavice"
        };

        /* -------------------------
           UCITAJ USLUGE U DROPDOWN
        ------------------------- */

        function ucitajUsluge() {

            if (!serviceSelect) return;

            fetch(API_BASE + "/get-usluge.php")
                .then(res => res.json())
                .then(usluge => {

                    serviceSelect.innerHTML =
                        '<option value="" selected disabled>Izaberi uslugu</option>';

                    const grupe = {};

                    usluge.forEach(u => {
                        if (!grupe[u.kategorija]) grupe[u.kategorija] = [];
                        grupe[u.kategorija].push(u);
                    });

                    Object.keys(grupe).forEach(kategorija => {

                        const optgroup = document.createElement("optgroup");
                        optgroup.label = nazivKategorije[kategorija] || kategorija;

                        grupe[kategorija].forEach(u => {

                            const option = document.createElement("option");
                            option.value = u.id;
                            option.textContent =
                                u.naziv + " — " + u.cena.toLocaleString("sr-RS") + " RSD";

                            optgroup.appendChild(option);

                        });

                        serviceSelect.appendChild(optgroup);

                    });

                })
                .catch(() => {

                    serviceSelect.innerHTML =
                        '<option value="" selected disabled>Greška pri učitavanju usluga</option>';

                });

        }

        ucitajUsluge();


        /* -------------------------
           UCITAJ SLOBODNE TERMINE
        ------------------------- */

        function ucitajSlobodneTermine() {

            if (!serviceSelect || !dateInput || !timeSlotsGroup || !timeSlotsContainer) return;

            const uslugaId = serviceSelect.value;
            const datum = dateInput.value;

            selectedTimeInput.value = "";
            selectedEmployeeInput.value = "";

            if (!uslugaId || !datum) {
                timeSlotsGroup.style.display = "none";
                return;
            }

            timeSlotsGroup.style.display = "block";
            timeSlotsContainer.innerHTML =
                '<span class="time-slots-loading">Učitavanje termina...</span>';

            fetch(API_BASE + "/get-slobodni-termini.php?usluga_id=" + uslugaId + "&datum=" + datum)
                .then(res => res.json())
                .then(termini => {

                    if (!Array.isArray(termini) || termini.length === 0) {

                        timeSlotsContainer.innerHTML =
                            '<span class="time-slots-empty">Nema slobodnih termina za taj datum. Probaj drugi dan.</span>';

                        return;

                    }

                    timeSlotsContainer.innerHTML = "";

                    termini.forEach(t => {

                        const dugme = document.createElement("button");
                        dugme.type = "button";
                        dugme.className = "time-slot";
                        dugme.textContent = t.vreme;
                        dugme.dataset.vreme = t.vreme;
                        dugme.dataset.zaposleniId = t.zaposleni_id;

                        dugme.addEventListener("click", () => {

                            timeSlotsContainer
                                .querySelectorAll(".time-slot")
                                .forEach(el => el.classList.remove("selected"));

                            dugme.classList.add("selected");

                            selectedTimeInput.value = t.vreme;
                            selectedEmployeeInput.value = t.zaposleni_id;

                        });

                        timeSlotsContainer.appendChild(dugme);

                    });

                })
                .catch(() => {

                    timeSlotsContainer.innerHTML =
                        '<span class="time-slots-empty">Greška pri učitavanju termina.</span>';

                });

        }

        if (serviceSelect) serviceSelect.addEventListener("change", ucitajSlobodneTermine);
        if (dateInput) dateInput.addEventListener("change", ucitajSlobodneTermine);


        /* -------------------------
           SLANJE FORME
        ------------------------- */

        contactForm.addEventListener(
            "submit",
            event => {

                event.preventDefault();

                const name = contactForm.querySelector('[name="name"]');
                const phone = contactForm.querySelector('[name="phone"]');
                const email = contactForm.querySelector('[name="email"]');
                const privacy = contactForm.querySelector('[name="privacy"]');
                const message = contactForm.querySelector(".form-message");

                if (name && name.value.trim().length < 2) {
                    name.focus();
                    showFormMessage(message, "Molimo unesite ime.", true);
                    return;
                }

                if (phone && phone.value.trim().length < 5) {
                    phone.focus();
                    showFormMessage(message, "Molimo unesite broj telefona.", true);
                    return;
                }

                if (email && !email.checkValidity()) {
                    email.focus();
                    showFormMessage(message, "Molimo unesite ispravnu e-mail adresu.", true);
                    return;
                }

                if (serviceSelect && serviceSelect.value === "") {
                    serviceSelect.focus();
                    showFormMessage(message, "Molimo izaberite uslugu.", true);
                    return;
                }

                if (!dateInput.value) {
                    dateInput.focus();
                    showFormMessage(message, "Molimo izaberite datum.", true);
                    return;
                }

                if (!selectedTimeInput.value || !selectedEmployeeInput.value) {
                    showFormMessage(message, "Molimo izaberite jedan od slobodnih termina.", true);
                    return;
                }

                if (privacy && !privacy.checked) {
                    showFormMessage(message, "Potrebna je saglasnost za kontaktiranje.", true);
                    return;
                }

                if (submitBtn) {
                    submitBtn.disabled = true;
                    submitBtn.style.opacity = "0.6";
                }

                const podaci = {
                    name: name.value.trim(),
                    phone: phone.value.trim(),
                    email: email.value.trim(),
                    service_id: serviceSelect.value,
                    date: dateInput.value,
                    time: selectedTimeInput.value,
                    employee_id: selectedEmployeeInput.value,
                    message: contactForm.querySelector('[name="message"]').value.trim(),
                    privacy: privacy.checked
                };

                fetch(API_BASE + "/obradi-zakazivanje.php", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(podaci)
                })
                    .then(res => res.json())
                    .then(data => {

                        showFormMessage(message, data.poruka, !data.uspeh);

                        if (data.uspeh) {

                            contactForm.reset();

                            if (timeSlotsGroup) timeSlotsGroup.style.display = "none";
                            if (timeSlotsContainer) timeSlotsContainer.innerHTML = "";

                        }

                    })
                    .catch(() => {

                        showFormMessage(
                            message,
                            "Došlo je do greške. Proveri konekciju i pokušaj ponovo.",
                            true
                        );

                    })
                    .finally(() => {

                        if (submitBtn) {
                            submitBtn.disabled = false;
                            submitBtn.style.opacity = "1";
                        }

                    });

            }
        );

    }


    /* =====================================================
       FORM MESSAGE HELPER
    ===================================================== */

    function showFormMessage(
        element,
        text,
        error
    ) {

        if (!element) return;

        element.textContent = text;

        element.style.color =
            error
                ? "#92763f"
                : "#3f5b4b";

    }


    /* =====================================================
       10. PHONE NUMBER FORMATTING
    ===================================================== */

    const phoneInputs =
        document.querySelectorAll(
            'input[type="tel"]'
        );

    phoneInputs.forEach(input => {

        input.addEventListener(
            "input",
            () => {

                let value =
                    input.value.replace(
                        /[^\d+ ]/g,
                        ""
                    );

                input.value = value;

            }
        );

    });


    /* =====================================================
       11. GALLERY LIGHTBOX
    ===================================================== */

    const galleryItems =
        document.querySelectorAll(
            ".gallery-photo"
        );

    if (galleryItems.length) {

        createLightbox();

        galleryItems.forEach(item => {

            item.addEventListener(
                "click",
                () => {

                    const title =
                        item.querySelector(
                            ".photo-title"
                        );

                    const category =
                        item.querySelector(
                            ".photo-category"
                        );

                    openLightbox(
                        title
                            ? title.textContent
                            : "STIL",
                        category
                            ? category.textContent
                            : "STIL BEAUTY SALON"
                    );

                }
            );

        });

    }


    /* =====================================================
       LIGHTBOX FUNCTIONS
    ===================================================== */

    function createLightbox() {

        if (
            document.querySelector(
                ".lightbox"
            )
        ) {
            return;
        }

        const lightbox =
            document.createElement("div");

        lightbox.className = "lightbox";

        lightbox.innerHTML = `

            <button
                class="lightbox-close"
                aria-label="Zatvori"
            >
                ×
            </button>

            <div class="lightbox-content">

                <div class="lightbox-visual">

                    <span
                        class="lightbox-category"
                    ></span>

                    <strong
                        class="lightbox-title"
                    >
                        STIL
                    </strong>

                </div>

            </div>

        `;

        document.body.appendChild(
            lightbox
        );


        /* -------------------------
           LIGHTBOX CSS
        ------------------------- */

        const style =
            document.createElement("style");

        style.textContent = `

            .lightbox {
                position: fixed;
                inset: 0;
                z-index: 5000;

                display: flex;
                align-items: center;
                justify-content: center;

                padding: 25px;

                background:
                    rgba(29,46,39,0.94);

                opacity: 0;
                visibility: hidden;

                transition:
                    opacity .3s ease,
                    visibility .3s ease;
            }

            .lightbox.open {
                opacity: 1;
                visibility: visible;
            }

            .lightbox-content {
                width: min(850px, 100%);
            }

            .lightbox-visual {
                min-height: 600px;

                display: flex;
                flex-direction: column;

                align-items: center;
                justify-content: center;

                position: relative;

                background:
                    linear-gradient(
                        145deg,
                        #526b59,
                        #263c32
                    );

                border:
                    1px solid
                    rgba(215,194,143,.35);
            }

            .lightbox-title {
                font-family:
                    "Cormorant Garamond",
                    serif;

                font-size:
                    clamp(60px, 10vw, 120px);

                color:
                    #f7f2e9;
            }

            .lightbox-category {
                margin-bottom: 15px;

                font-size: 10px;

                letter-spacing: 4px;

                text-transform: uppercase;

                color:
                    #d7c28f;
            }

            .lightbox-close {
                position: absolute;

                right: 25px;
                top: 20px;

                z-index: 2;

                width: 45px;
                height: 45px;

                border:
                    1px solid
                    rgba(255,255,255,.25);

                border-radius: 50%;

                color: white;

                font-size: 30px;

                cursor: pointer;
            }

            .lightbox-close:hover {
                background:
                    #b89a5b;
            }

            @media(max-width:600px) {

                .lightbox-visual {
                    min-height: 450px;
                }

            }

        `;

        document.head.appendChild(
            style
        );


        const close =
            lightbox.querySelector(
                ".lightbox-close"
            );

        close.addEventListener(
            "click",
            closeLightbox
        );


        lightbox.addEventListener(
            "click",
            event => {

                if (
                    event.target === lightbox
                ) {

                    closeLightbox();

                }

            }
        );

    }


    function openLightbox(
        title,
        category
    ) {

        const lightbox =
            document.querySelector(
                ".lightbox"
            );

        if (!lightbox) return;

        const titleElement =
            lightbox.querySelector(
                ".lightbox-title"
            );

        const categoryElement =
            lightbox.querySelector(
                ".lightbox-category"
            );

        titleElement.textContent =
            title;

        categoryElement.textContent =
            category;

        lightbox.classList.add(
            "open"
        );

        document.body.style.overflow =
            "hidden";

    }


    function closeLightbox() {

        const lightbox =
            document.querySelector(
                ".lightbox"
            );

        if (!lightbox) return;

        lightbox.classList.remove(
            "open"
        );

        document.body.style.overflow =
            "";

    }


    /* =====================================================
       12. ESC KEY
    ===================================================== */

    document.addEventListener(
        "keydown",
        event => {

            if (
                event.key === "Escape"
            ) {

                closeLightbox();

                if (
                    searchOverlay &&
                    searchOverlay.classList.contains("open")
                ) {

                    closeSearch();

                }

                if (
                    mainNav &&
                    mainNav.classList.contains(
                        "open"
                    )
                ) {

                    mainNav.classList.remove(
                        "open"
                    );

                    if (menuToggle) {

                        menuToggle.classList.remove(
                            "active"
                        );

                    }

                    document.body.classList.remove(
                        "menu-open"
                    );

                }

            }

        }
    );


    /* =====================================================
       18. SEARCH
    ===================================================== */

    const searchToggle = document.getElementById("searchToggle");
    const searchOverlay = document.getElementById("searchOverlay");
    const searchClose = document.getElementById("searchClose");
    const searchInput = document.getElementById("searchInput");
    const searchResults = document.getElementById("searchResults");

    const SEARCH_LIVE_LIMIT = 6;
    const SEARCH_STORAGE_KEY = "stilSearchTerm";

    function normalizeText(text) {

        return (text || "")
            .toLowerCase()
            .replace(/č|ć/g, "c")
            .replace(/š/g, "s")
            .replace(/ž/g, "z")
            .replace(/đ/g, "d");

    }

    function escapeHtml(text) {

        const div = document.createElement("div");
        div.textContent = text;

        return div.innerHTML;

    }

    // Napravi kratak isecak teksta oko pronadjene reci, sa markiranjem
    function napraviIsecak(originalText, normalizedQuery) {

        const normalizedFull = normalizeText(originalText);
        const idx = normalizedFull.indexOf(normalizedQuery);

        if (idx === -1) return null;

        const kontekstPre = 36;
        const kontekstPosle = 70;

        const start = Math.max(0, idx - kontekstPre);
        const end = Math.min(originalText.length, idx + normalizedQuery.length + kontekstPosle);

        const pre = originalText.slice(start, idx);
        const pogodak = originalText.slice(idx, idx + normalizedQuery.length);
        const posle = originalText.slice(idx + normalizedQuery.length, end);

        const prefiks = start > 0 ? "…" : "";
        const sufiks = end < originalText.length ? "…" : "";

        return (
            prefiks +
            escapeHtml(pre) +
            '<mark class="search-highlight">' + escapeHtml(pogodak) + "</mark>" +
            escapeHtml(posle) +
            sufiks
        );

    }

    function openSearch() {

        if (!searchOverlay) return;

        searchOverlay.classList.add("open");

        document.body.classList.add("search-open");

        setTimeout(() => {

            if (searchInput) searchInput.focus();

        }, 150);

    }

    function closeSearch() {

        if (!searchOverlay) return;

        searchOverlay.classList.remove("open");

        document.body.classList.remove("search-open");

        if (searchInput) searchInput.value = "";

        if (searchResults) {
            searchResults.innerHTML = "";
            searchResults.classList.remove("has-results");
        }

    }

    function pronadjiPoklapanja(query) {

        const normalizedQuery = normalizeText(query.trim());

        if (normalizedQuery.length < 2) return [];

        return searchIndex
            .map(unos => {

                const normalizedHeading = normalizeText(unos.heading);
                const normalizedTextAll = normalizeText(unos.text);

                const poklapaSeUNaslovu = normalizedHeading.includes(normalizedQuery);
                const poklapaSeUTekstu = normalizedTextAll.includes(normalizedQuery);

                if (!poklapaSeUNaslovu && !poklapaSeUTekstu) return null;

                // isecak pravimo iz teksta (bogatiji sadrzaj), a ako reci nema
                // u tekstu (samo u naslovu), pravimo isecak iz naslova
                const isecak = poklapaSeUTekstu
                    ? napraviIsecak(unos.text, normalizedQuery)
                    : napraviIsecak(unos.heading, normalizedQuery);

                return { unos, isecak, prioritet: poklapaSeUNaslovu ? 0 : 1 };

            })
            .filter(Boolean)
            .sort((a, b) => a.prioritet - b.prioritet);

    }

    function prikaziRezultate(rezultati, query, prikaziSve) {

        if (!searchResults) return;

        if (rezultati.length === 0) {

            searchResults.innerHTML =
                '<div class="search-empty">Nema rezultata za „' + escapeHtml(query) + '“</div>';

            searchResults.classList.add("has-results");

            return;

        }

        const prikazani = prikaziSve
            ? rezultati
            : rezultati.slice(0, SEARCH_LIVE_LIMIT);

        let html = "";

        if (prikaziSve) {

            html += '<div class="search-count">' +
                rezultati.length + (rezultati.length === 1 ? " rezultat" : " rezultata") +
                ' za „' + escapeHtml(query) + '“</div>';

        }

        html += prikazani
            .map(r => (
                '<a href="' + r.unos.url + '#' + r.unos.anchor + '" class="search-result" data-term="' +
                    escapeHtml(query) + '">' +
                    '<span class="search-result-page">' + escapeHtml(r.unos.page) + "</span>" +
                    '<span class="search-result-heading">' + escapeHtml(r.unos.heading) + "</span>" +
                    '<span class="search-result-snippet">' + r.isecak + "</span>" +
                "</a>"
            ))
            .join("");

        if (!prikaziSve && rezultati.length > SEARCH_LIVE_LIMIT) {

            html += '<div class="search-more-hint">Pritisni Enter za svih ' +
                rezultati.length + " rezultata</div>";

        }

        searchResults.innerHTML = html;
        searchResults.classList.add("has-results");

        // klik na rezultat - zapamti trazenu rec da je markiramo na odredisnoj stranici
        searchResults.querySelectorAll(".search-result").forEach(link => {

            link.addEventListener("click", () => {

                sessionStorage.setItem(SEARCH_STORAGE_KEY, link.dataset.term);

            });

        });

    }

    function runSearch(query, prikaziSve) {

        if (!searchResults) return;

        if (query.trim().length < 2) {

            searchResults.innerHTML = "";
            searchResults.classList.remove("has-results");

            return;

        }

        const rezultati = pronadjiPoklapanja(query);

        prikaziRezultate(rezultati, query.trim(), Boolean(prikaziSve));

    }

    if (searchToggle && searchOverlay) {

        searchToggle.addEventListener("click", openSearch);

        if (searchClose) {

            searchClose.addEventListener("click", closeSearch);

        }

        searchOverlay.addEventListener("click", event => {

            if (event.target === searchOverlay) {

                closeSearch();

            }

        });

        if (searchInput) {

            searchInput.addEventListener("input", event => {

                runSearch(event.target.value, false);

            });

            searchInput.addEventListener("keydown", event => {

                if (event.key === "Enter") {

                    event.preventDefault();

                    runSearch(searchInput.value, true);

                }

            });

        }

    }


    /* -------------------------------------------------
       Markiranje trazene reci na odredisnoj stranici
       (posle klika na rezultat pretrage)
    ------------------------------------------------- */

    (function markirajPretraguNaStranici() {

        const term = sessionStorage.getItem(SEARCH_STORAGE_KEY);

        if (!term) return;

        sessionStorage.removeItem(SEARCH_STORAGE_KEY);

        const normalizedTerm = normalizeText(term);

        if (normalizedTerm.length < 2) return;

        let ciljniElement = null;

        if (window.location.hash) {

            ciljniElement = document.querySelector(window.location.hash);

        }

        const opseg = ciljniElement || document.querySelector("main") || document.body;

        const walker = document.createTreeWalker(
            opseg,
            NodeFilter.SHOW_TEXT,
            {
                acceptNode: function (node) {

                    if (!node.nodeValue || !node.nodeValue.trim()) {
                        return NodeFilter.FILTER_REJECT;
                    }

                    if (node.parentElement && node.parentElement.closest("script, style")) {
                        return NodeFilter.FILTER_REJECT;
                    }

                    return NodeFilter.FILTER_ACCEPT;

                }
            }
        );

        let pronadjenCvor = null;
        let pronadjenIndeks = -1;

        let cvor;
        while ((cvor = walker.nextNode())) {

            const normalizedValue = normalizeText(cvor.nodeValue);
            const idx = normalizedValue.indexOf(normalizedTerm);

            if (idx !== -1) {
                pronadjenCvor = cvor;
                pronadjenIndeks = idx;
                break;
            }

        }

        if (!pronadjenCvor) return;

        const roditelj = pronadjenCvor.parentNode;
        const tekst = pronadjenCvor.nodeValue;

        const pre = tekst.slice(0, pronadjenIndeks);
        const pogodak = tekst.slice(pronadjenIndeks, pronadjenIndeks + term.length);
        const posle = tekst.slice(pronadjenIndeks + term.length);

        const markElement = document.createElement("mark");
        markElement.className = "search-highlight-target";
        markElement.textContent = pogodak;

        const fragment = document.createDocumentFragment();
        if (pre) fragment.appendChild(document.createTextNode(pre));
        fragment.appendChild(markElement);
        if (posle) fragment.appendChild(document.createTextNode(posle));

        roditelj.replaceChild(fragment, pronadjenCvor);

        setTimeout(() => {

            markElement.scrollIntoView({ behavior: "smooth", block: "center" });

        }, 300);

    })();


    /* =====================================================
       13. CURRENT YEAR
    ===================================================== */

    document.querySelectorAll(
        "[data-year]"
    ).forEach(element => {

        element.textContent =
            new Date().getFullYear();

    });


    /* =====================================================
       14. DROPDOWN MOBILE
    ===================================================== */

    const dropdownTriggers =
        document.querySelectorAll(
            ".dropdown-trigger"
        );

    dropdownTriggers.forEach(trigger => {

        trigger.addEventListener(
            "click",
            event => {

                if (
                    window.innerWidth > 800
                ) {
                    return;
                }

                event.preventDefault();

                const dropdown =
                    trigger.closest(
                        ".nav-dropdown"
                    );

                if (!dropdown) return;

                dropdown.classList.toggle(
                    "mobile-open"
                );

            }
        );

    });


    /* =====================================================
       15. BUTTON RIPPLE
    ===================================================== */

    document.querySelectorAll(
        ".btn"
    ).forEach(button => {

        button.addEventListener(
            "click",
            event => {

                const ripple =
                    document.createElement(
                        "span"
                    );

                ripple.className =
                    "button-ripple";

                const rect =
                    button.getBoundingClientRect();

                const size =
                    Math.max(
                        rect.width,
                        rect.height
                    );

                ripple.style.width =
                    `${size}px`;

                ripple.style.height =
                    `${size}px`;

                ripple.style.left =
                    `${event.clientX - rect.left - size / 2}px`;

                ripple.style.top =
                    `${event.clientY - rect.top - size / 2}px`;

                button.appendChild(
                    ripple
                );

                setTimeout(() => {

                    ripple.remove();

                }, 600);

            }
        );

    });


    /* =====================================================
       16. RIPPLE STYLE
    ===================================================== */

    const rippleStyle =
        document.createElement("style");

    rippleStyle.textContent = `

        .btn {
            position: relative;
            overflow: hidden;
        }

        .button-ripple {
            position: absolute;

            border-radius: 50%;

            background:
                rgba(255,255,255,.2);

            transform: scale(0);

            animation:
                buttonRipple .6s ease-out;

            pointer-events: none;
        }

        @keyframes buttonRipple {

            to {
                transform: scale(2.5);
                opacity: 0;
            }

        }

    `;

    document.head.appendChild(
        rippleStyle
    );


    /* =====================================================
       17. INITIAL PAGE LOAD
    ===================================================== */

    document.body.classList.add(
        "page-loaded"
    );


    console.log(
        "STIL Beauty Salon — website loaded successfully."
    );

});