function szamol() {

const f = fakt.value;       // Egy konstans érték, amit a felhasználló ír be a mezőbe
let f2 = f;     // Egyfajta index hogy a while ne legyen végtelen ciklus
let e = f;      // A felhasználló által bevitt adat, viszont ez változtatható
let i2 = f;

while (f2 >= 0) {
    for (let i = e-1; i >= 1; i += -1) {
        e = e*i     // Faktoriális számítása
        //console.log(parseInt(e)," * ", i, " = " , e = e*i);      // Ez csak ellenőrzés!
    }
    if (e == 0) {       // Mivel 0 faktoriálisa 1, ezért ha az e értéke 0, akkor át kell írni 1-re
        e = 1;
    }
    console.log("A ",f2.toString() ," faktoriális értéke: ", parseFloat(e));        // f2.toString() -> ez egy típuskonverzió (tehát átalakítom a stringet number típussá)
    f2 = f2 -1;                                                                     // parseFloat(e) -> ez is típuskonverzió, viszont itt float típussá alakítja. A parseInt(e) is működne, de egy idő után olyan nagy számok jönnek ki, hogy tizedes formában írja ki.
    i2-=1;      // Az i2 értéke megeggyezik a f értékével,ezért kivonunk belőle egyet és egyenlővé tesszük az e-t a kapott értékkel!! 
    e = i2;     // Így az e értéke mindig visszaállítható a kívánt értékre.
}




}