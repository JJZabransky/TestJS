class Auto {
     constructor(rokVyroby, znacka, model, najeteKilometry) {

     }
}

class Autoservis {
    constructor(nazev, auta) {

    }
}

let auta = [
    new Auto("2006","Skoda","Octavia",7000),
    new Auto("2018","Skoda","Karoq",14000),
    new Auto("2015","BMW","M8",11000)
];

const as = new Autoservis("Bruzek Car", auta);

function VsechnaAuta() {
    auta.forEach(element => {
        return element.rokVyroby + " " + element.znacka + " " + element.model + " " + element.najeteKilometry;
    })
    
}

const carButton = document.getElementById("VsechnaAuta");

carButton.addEventListener('click',VsechnaAuta);