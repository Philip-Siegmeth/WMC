Erstelle eine Klasse Haustier, die ein Tier beschreibt.

🔧 Eigenschaften:
name (String) – z. B. "Bello"

typ (String) – "Hund" oder "Katze"

alter (Zahl) – in Jahren

gewicht (kg)

🔍 Methoden:
toString() → Gibt z. B. zurück:
"Bello der Hund ist 3 Jahre alt und wiegt 12kg"

istJung() → Gibt true zurück, wenn das Tier jünger als 5 ist

gewichtsklasse() → Gibt zurück:

"Leicht" bei Gewicht < 5kg

"Normal" bei 5–20kg

"Schwer" bei über 20kg

class Haustier { 
    constructor(name , typ , alter , gewicht){
        this.name = name;
        this.typ = typ;
        this.alter = alter;
        this.gewicht = gewicht;
    }
}

function toString(){
    return ('$[name] der $[typ] ist $[alter] alt und wiegt $[gewicht]kg');
}

function istJung(alter){
    if(alter<5) return true;
    else return false;
}

function gewichtsklasse(gewicht){
    if(gewicht <5) return 'Leicht';
    if(gewicht >5 && gewicht <=20) return 'Normal';
    if(gewicht > 20) return 'Schwer';
}



Erstelle eine Klasse Vogel, die einzelne Vögel in einer Vogelstation beschreibt.

🔧 Eigenschaften:
art (z. B. "Amsel")

gewicht (in Gramm, z. B. 120)

fliegt (Boolean – true oder false)

jahr (das Jahr, in dem der Vogel gefunden wurde)

🔍 Methoden:
toString() →
Gibt z. B. zurück: "Amsel, 120g, fliegt: ja, gefunden 2022"

istLeicht() →
Gibt true zurück, wenn gewicht < 100

alter() →
Berechnet, wie alt der Vogel ist (aktuelles Jahr − jahr)

🧪 Bonus: Daten im Array
Erstelle ein Array mit 4 verschiedenen Vögeln (z. B. Amsel, Spatz, Strauß, Pinguin)

Gib mit forEach alle Vögel per toString() aus

Filtere alle Vögel, die nicht fliegen können

Gib alle leichten Vögel aus (gewicht < 100)



class Vogel{
    constructor( art , Gwicht , fliegt , jahr){
        this.art = art ;
        this.Gwicht = Gwicht;
        this.fliegt = fliegt;
        this.jahr = jahr;
    }

    function toString() {
        return ('${this.art} , ${this.Gwicht}g, fliegt: ${this.fliegt} , gefunden ${this.jahr}');
    }

    function istLeicht(){
        if(this.Gwicht <100) return true;
        else return false;
    }


    function alter(jahr){
        return Jahr - this.jahr;
    }

    const Vögeln = ['Amsel' , 'Spatz' , 'Strauß' , 'Pinguin'];
    forEach Vögeln(Vogel => console.log[Vögel]);

    const nichtFlieger => Vögel.filter(fliegen, this.fliegt=== true , 0):

}


📚 Aufgabe – Bücherregal
Du baust ein kleines System zur Verwaltung von Büchern.

🔧 Erstelle eine Klasse Buch mit folgenden Eigenschaften:
titel (String) – z. B. "Harry Potter"

autor (String) – z. B. "J.K. Rowling"

seiten (Zahl) – z. B. 500

gelesen (Boolean) – ob das Buch schon gelesen wurde

🔍 Methoden:
toString() →
Gibt z. B. zurück:
"Harry Potter von J.K. Rowling, 500 Seiten – gelesen"
oder:
"Die Physiker von Dürrenmatt, 180 Seiten – ungelesen"

istKurz() →
Gibt true zurück, wenn das Buch weniger als 200 Seiten hat

📦 Bonus-Aufgaben mit Array:
Erstelle ein Array mit mindestens 4 Büchern

Gib alle Bücher mit toString() per forEach() aus

Filtere alle ungelesenen Bücher

Zeige alle kurzen Bücher

Gib die durchschnittliche Seitenzahl aller Bücher aus (reduce)

class Buecherregal{
    constructor(titel , autor , seiten , gelesen){
        this.titel = titel;
        this.autor = autor;
        this.seiten = seiten;
        this.gelesen = gelesen;
    }

    toString(){
      return  `${this.titel} von ${this.autor}, ${this.seiten} Seiten - ${this.gelesen}`;
    }

    istKurz(){
        if(this.seiten<200) return true;
    }

}

    const buecher = [
        new Buecherregal("Test" , "Me", 140 , true),
        new Buecherregal("Test1" , "Me1", 1400 , false),
        new Buecherregal("Test2" , "Me2", 340 , true),
        new Buecherregal("Test3" , "Me3", 40 , false)
    ];

    function ausgebenBuecher(){
        buecher.forEach(Buecherregal => {
            console.log(Buecherregal.toString);
        });
    }

    function ungeleseneBuecher(){
        const ungeleseneBuch = buecher.filter(Buch => !buch.gelesen);
    }

    function kurzeBuch(){
        const kurzebueche = buecher.filter(Buch => buch.istKurz);
        kurzeBuch.forEach(buch => console.log(buch.toString));
    }

    function durchschnittbuche(){
       let buchedurchschnitt = buecher.reduce((acc , buch) => acc + buch.seiten,0);
       let durchschnitte = buchedurchschnitt / buecher.length;
       console.log(durchschnitte);
    }


    🎮 Aufgabe – Spielesammlung
Du verwaltest eine Sammlung von Computerspielen.

🛠 Erstelle eine Klasse Spiel mit den Eigenschaften:
titel (z. B. "Zelda")

genre (z. B. "Adventure")

spielzeit (in Stunden, z. B. 45)

durchgespielt (Boolean: true oder false)

🔍 Methoden:
toString()
→ Gibt z. B. zurück:
"Zelda (Adventure), 45h – durchgespielt"
oder
"FIFA (Sport), 10h – nicht durchgespielt"

istLang()
→ Gibt true zurück, wenn spielzeit > 40

📦 Bonus-Aufgaben mit Array:
Erstelle ein Array spiele mit mindestens 4 Spielen

Gib alle Spiele mit toString() per forEach() aus

Filtere alle Spiele, die noch nicht durchgespielt sind

Zeige alle langen Spiele (mehr als 40h)

Berechne die durchschnittliche Spielzeit aller Spiele

class Speilesammung{
    constructor(titel , genre , spelzeit , durchgespielt){
        this.titel = titel;
        this.genre = genre;
        this.spielzeit = this.spielzeit;
        this.durchgespielt = durchgespielt;
    }

    toString(){
        return `${this.titel} (${this.genre}), ${this.spielzeit}h - ${this.durchgespielt}`;
    }

    istLang(){
        if(this.spielzeit> 40) return true;
    }


}

const Spiele = [
    new Speilesammung("Fifa" , "Sport" , 10 , true),
    new Speilesammung("Fifa6" , "Sport" , 120 , false),
    new Speilesammung("Fifa2" , "Spor2t" , 10 , true),
    new Speilesammung("Fifa" , "Sport4" , 100 , false)
]

function alleausgeben(){
    Spiele.forEach(Spiel => console.log(Spiel.toString()));
}

function nichtgespielt(){
    const nichtgespielte = Spiele.filter(Spiel => !Spiel.durchgespielt);
}

function langeSPiele(){
    const langeSpiel = Spiele.filter(Spiel => Spiel.spielzeit > 40);
    langeSpiel.forEach(Spiel => console.log(Spiel.toString()));
}

function durchschnittzeit() {
    let gesamtanzahl = Spiele.reduce((acc,Spiel)=> summe + Spiel.spielzeit, 0);
    let durchschnitte = gesamtanzahl / Spiele.length;
}


🧑‍🍳 Aufgabe – Rezeptverwaltung
Du verwaltest eine Liste von Rezepten in einer Koch-App.

🛠 Erstelle eine Klasse Rezept mit folgenden Eigenschaften:
name (z. B. "Pasta Bolognese")

kategorie (z. B. "Hauptgericht", "Dessert")

dauer (Zubereitungszeit in Minuten)

zutaten (ein Array, z. B. ["Nudeln", "Tomaten", "Hackfleisch"])

🔍 Methoden:
toString()
→ Gibt z. B. zurück:
"Pasta Bolognese (Hauptgericht), 25 Minuten"

istSchnell()
→ Gibt true zurück, wenn dauer < 30

📦 Bonus-Aufgaben mit Array:
Erstelle ein Array rezepte mit mindestens 4 Rezepten

Gib alle Rezepte per forEach() + toString() aus

Filtere alle schnellen Rezepte (unter 30 Minuten)

Gib für jedes Rezept mit .map() die Zutatenanzahl zurück
→ Ergebnis: [3, 2, 5, 4]

Gib mit .map() ein Array aller Rezeptnamen in Großbuchstaben aus

🧪 Extra:
Berechne mit reduce() die durchschnittliche Kochzeit

class Rezepte{
    constructor(name, kategorie , dauer , zutaten){
        this.name = name;
        this.kategorie = kategorie;
        this.dauer= dauer ; 
        this.zutaten = zutaten;
    }

    toString(){
        return `${this.name} (${kategorie}), ${dauer} Minuten`;
    }

    istSchnell(){
        if(this.dauer <30) return true;
    }
}

const Rezepta = [
    new Rezepte("Test", "Fleisch" , 20 ,["Nudel" , "Fleisch" , "Sauce"] ),
    new Rezepte("Test", "Fleisch" , 203 ,["Nudel" , "Fleisch" , "Sauce"] ),
    new Rezepte("Test", "Fleisch" , 50 ,["Nudel" , "Fleisch" , "Sauce"] ),
    new Rezepte("Test", "Fleisch" , 240 ,["Nudel" , "Fleisch" , "Sauce"] ),
]
function alleRezepte(){
 Rezepta.forEach(resta => console.log(resta.toString()));
}

function schnelleRezepte(){
    const schnellerezepta = Rezepta.filter(Rezep => Rezep.istSchnell());
}

function Zutatenzaehler(){
    let anzahl = Rezepta.map(Test => Test.zutaten.length);
    return anzahl;
}

function alleNamen(){
    const grosseNamen = Rezepta.map(rezep => rezep.name.toUpperCase());
    console.log(grosseNamen);
}

function Durchschnitte(){
    let durchschnitt = Rezepta.reduce((acc,summe)=> acc + summe.dauer,0);
    let durchschnitte = durchschnitt / Rezepta.length;
}


🧾 Aufgabe – Rechnungsverwaltung (Mini-Buchhaltung)
Du verwaltest eine Liste von Rechnungen und willst damit kleine Auswertungen machen.

🛠 Erstelle eine Klasse Rechnung mit:
empfaenger (z. B. "Müller GmbH")

betrag (in Euro, z. B. 250.00)

bezahlt (Boolean – true oder false)

kategorie (z. B. "Büro", "Reise", "IT")

🔍 Methoden:
toString() →
"Rechnung an Müller GmbH: 250.00€ [bezahlt]"
oder:
"Rechnung an Müller GmbH: 250.00€ [offen]"

istGross() →
Gibt true zurück, wenn der Betrag über 500€ liegt

📦 Datenarray + Auswertungen:
Erstelle ein Array rechnungen mit mindestens 5 Rechnungen

Gib alle Rechnungen mit toString() aus

Filtere alle offenen Rechnungen (bezahlt = false)

Gib mit .map() ein Array mit allen Empfängernamen in Großbuchstaben aus

Gib mit .forEach() die Kategorie + Betrag jeder Rechnung aus, z. B.:
"IT: 320€"

Berechne mit reduce() den Gesamtbetrag aller bezahlten Rechnungen

🧪 Extra (Bonus):
Zeige alle großen Rechnungen (Betrag über 500€), nutze dafür istGross(


)

class Rechnungen{
        constructor(empfaenger , betrag , bezahlt , kategorie){
            this.empfaenger = empfaenger;
            this.betrag = betrag;
            this.bezahlt = bezahlt;
            this.kategorie= kategorie;
        }

        toString(){
            return `Rechnung an ${this.empfaenger}: ${this.betrag} ${this.bezahlt}`;
        }

         istGross(){
                if(this.betrag>500) return true;
            }

    }

    const Rechnung = [
        new Rechnungen("Ich" , 250 , false , "Buero"),
        new Rechnungen("Ich" , 25340 , true , "Buero"),
        new Rechnungen("Ich" , 2540 ,false , "Buero"),
        new Rechnungen("Ich" , 2150 , true , "Buero"),
        new Rechnungen("Ich" , 2650 , true , "Buero")
    ]

    function alleRechnungen(){
        Rechnung.forEach(Rechn => Rechn.toString());
    }

    function offeneRechn(){
        const offenneRechnung = Rechnung.filter(Rechn => Rechn.bezahlt === false);
    }

    function empfang(){
        const namen = Rechnung.map(Rechne => Rechne.name.toUpperCase());
        console.log(namen);
    }

    function zettl(){
        Rechnung.forEach(Rechnunger => console.log(`${Rechnunger.kategorie}: ${Rechnunger.betrag}` ));
    }
    
    function Kosten(){
        let summe = Rechnung.reduce((summe, Rechn)=> summe+ Rechn.betrag,0);
    }

    function grosseRechn(){
        const gorsseRechnung = Rechnung.filter(Rechnere => Rechnere.istGross());
        gorsseRechnung.forEach(Rechna => Rechna.toString());
    }


    🎓 Aufgabe – Schülerverwaltung
Klasse: Schueler

🔧 Eigenschaften:

name (z. B. „Ali“)

klasse (z. B. „10a“)

noten (Array von Zahlen, z. B. [3, 2, 1, 4])

aktiv (Boolean – ob der Schüler aktiv ist)

🔍 Methoden:

toString() → z. B. "Ali (10a), aktiv"

durchschnitt() → berechnet den Notendurchschnitt

istGut() → gibt true zurück, wenn der Schnitt besser als 2,5 ist

📦 Array-Aufgaben:

Erstelle ein Array mit 5 Schülern

Gib alle per toString() aus

Filtere nur die aktiven Schüler

Zeige alle „guten“ Schüler (Schnitt < 2,5)

Berechne den Klassenschnitt (alle Noten zusammen)

class Schüler{
    constructor(name , klasse , noten , aktiv){
        this.name = name;
        this.klasse= klasse;
        this.noten = noten;
        this.aktiv = aktiv ;
    }

    toString(){
        return `${this.name} (${this.klasse}), ${this.aktiv}`;
    }

    durchschnitt(){
        let durchschnitte = this.noten.reduce((summe, note)=> summe + note , 0);
        let durchschatz = durchschnitte / this.noten.length ;
        return durchschatz;
    }

    istGut(){
        if(this.durchschnitt() <2.5) return true;
    }
}

const Schülerverwaltung = [
    new Schüler("Me", "4AAIF", [2,4,4,4,2,2], true),
    new Schüler("Me", "4AAIF", [2,4,4,4,2,2], true),
    new Schüler("Me", "4AAIF", [2,4,4,4,2,2], true),
    new Schüler("Me", "4AAIF", [2,4,4,4,2,2], true),
    new Schüler("Me", "4AAIF", [2,4,4,4,2,2], true)
]

function alleSchueler(){
   Schülerverwaltung.forEach(Schüler => console.log(Schüler.toString()));
}

function aktiveschueler(){
    const aktiva = Schülerverwaltung.filter( schuler => schuler.aktiv === true);
}

function Klassenschnitt(){
    let summe = 0;
    let durchschnittklasse = Schülerverwaltung.forEach(Schüler => summe +Schüler.durchschnitt);
    summe = summe / Schülerverwaltung.length; 
    return summe;
}


🔧 Klasse: Fahrzeug
Eigenschaften:

marke (z. B. "BMW")

modell (z. B. "X5")

baujahr (z. B. 2018)

kilometerstand (z. B. 75000)

🔍 Methoden:
toString()
→ Gibt z. B. zurück:
"BMW X5, Baujahr 2018, 75000 km"

istAlt()
→ Gibt true zurück, wenn das Fahrzeug älter als 10 Jahre ist (aktuelles Jahr - baujahr)

fahrzeugklasse()
→ Gibt zurück:

"Wenig gefahren" bei unter 50.000 km

"Normal" bei 50.000–150.000 km

"Viel gefahren" bei über 150.000 km

📦 Array-Aufgaben:
Erstelle ein Array fahrzeuge mit mindestens 5 verschiedenen Fahrzeugen

Gib alle Fahrzeuge mit toString() per forEach() aus

Filtere alle Fahrzeuge, die älter als 10 Jahre sind

Zeige alle Fahrzeuge, die viel gefahren sind

Berechne den durchschnittlichen Kilometerstand aller Fahrzeuge


class Fahrzeug{
    constructor(marke , modell , baujahr , kilometerstand){
        this.marke = marke;
        this.modell = modell;
        this.baujahr = baujahr;
        this.kilometerstand = kilometerstand;
    }

    toString(){
        return `${this.marke} ${this.modell}, Baujahr ${this.baujahr}, ${this.kilometerstand}km`;
    }

    istAlt(){
        if((2025-this.baujahr) > 10) return true;
    }

    fahrzeugklasse(){
        if(this.kilometerstand<50000) return "Wenig gefahren";
        if(this.kilometerstand>=50000 && this.kilometerstand<= 150000) return "Normal";
        if(this.kilometerstand>150000) return "Viel gefahren";
    }
}

const fahrzeuge = [
    new Fahrzeug("Dacia", "lodgy", 2017 , 112000 ),
    new Fahrzeug("Dacia", "lodgy", 2017 , 112000 ),
    new Fahrzeug("Dacia", "lodgy", 2017 , 112000 ),
    new Fahrzeug("Dacia", "lodgy", 2017 , 112000 ),
    new Fahrzeug("Dacia", "lodgy", 2017 , 112000 )
]

function alleFahrzeuge(){
    fahrzeuge.forEach(fahrzeug => console.log(fahrzeug.toString()));
}

function altefahrzeuge(){
    const altefahre = fahrzeuge.filter( fahrzeug => fahrzeug.istAlt()===true);
}

function vielfahrer(){
    const vielfahre = fahrzeuge.filter(fahrzeug => fahrzeug.kilometerstand > 150000);
    vielfahre.forEach(fahrze => console.log(fahrze.toString()));
}

function durchschnitte(){
    const kilometer = fahrzeuge.reduce((summe, fahrzeuger) => summe + fahrzeuger.kilometerstand,0);
    return kilometer / fahrzeuge.length;
}

🔧 Klasse: Getraenk
Eigenschaften:

name (z. B. "Cola")

typ (z. B. "Softdrink", "Wasser", "Saft")

preis (z. B. 1.50) – in Euro

koffeinhaltig (Boolean)

🔍 Methoden:
toString()
→ Gibt z. B. zurück:
"Cola (Softdrink), 1.50€ – koffeinhaltig"
oder
"Apfelsaft (Saft), 1.20€ – ohne Koffein"

istGünstig()
→ Gibt true zurück, wenn der Preis unter 1.50 € liegt

📦 Bonus – Array & Auswertung:
Erstelle ein Array getraenke mit mindestens 5 Getränken verschiedener Typen

Gib alle Getränke per forEach() und toString() aus

Filtere alle koffeinfreien Getränke

Zeige alle günstigen Getränke

Berechne mit reduce() den Gesamtpreis aller Getränke

Gib mit map() ein Array aller Getränkenamen in Großbuchstaben aus

🎁 Optional:
Zeige pro Getränk mit map() eine Kurzbeschreibung:
→ z. B.: "Cola kostet 1.50€" – "Wasser kostet 0.90€"

class Getraenk{
    constructor(name , typ , preis , koffeinhaltig){
        this.name = name;
        this.typ=typ;
        this.preis = preis;
        this.koffeinhaltig = koffeinhaltig;
    }

    toString(){
        return `${this.name} (${this.typ}), ${this.preis} - ${this.koffeinhaltig}`;
    }

    istguenstig(){
        if(this.preis < 1.50) return true;
    }

}

const Getraenke = [
    new Getraenk("Cola", "Soft", 1.5 , true),
    new Getraenk("Cola", "Soft", 1.5 , true),
    new Getraenk("Cola", "Soft", 1.5 , true),
    new Getraenk("Cola", "Soft", 1.5 , true),
    new Getraenk("Cola", "Soft", 1.5 , true)
];

function alleGetraenke(){
    Getraenke.forEach(getrank => getrank.toString());
}
 function koffeinfrei(){
    return Getraenke.filter(getrank => getrank.koffeinhaltig === false);
 }

 function gunstiggetran(){
    const gunstige = Getraenke.filter(getrunk => getrunk.istguenstig() === true);
    gunstige.forEach(getank => console.log(getank.toString()));
 }

 function preiso(){
    return summe = Getraenke.reduce((sum , getenk)=> sum + getenk.preis,0);
 }

 function namen(){
    const list = Getraenke.map(test => test.name.toUpperCase());
    return list;
 }