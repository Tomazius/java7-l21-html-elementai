window.onload = function(){ 

    // Reikia nuskaityti informaciją iš įvedimo laukelių; Tam - reikia susikurti kintamąjį, su kuriuo galima atlikti įvairius veiksmus;

    let IlgioIvedimoLaukelis = document.getElementById("ilgis");
    let PlocioIvedimoLaukelis = document.getElementById("plotis");

    // Galima pasitikrint: F12 patampa mėlynas. console.log(PlocioIvedimoLaukelis);

    let mygtukas = document.getElementById("skaiciavimoMygtukas");
    
    let pastraipa = document.getElementById("rezultatoPastraipa");

    mygtukas.onclick = function(){

        let ilgis = IlgioIvedimoLaukelis.valueAsNumber;
        console.log(ilgis);
        let plotis = PlocioIvedimoLaukelis.valueAsNumber;
        console.log(plotis);

        console.log(staciakampioPlotas(ilgis, plotis));

        pastraipa.innerHTML = "Stačiakampio plotas: " + staciakampioPlotas(ilgis, plotis);
    }
}

function staciakampioPlotas (a, b) {
    return a*b;

}