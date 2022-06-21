window.onload = function () {

    let mygtukas = document.getElementById("mygtukas");

    mygtukas.onclick = function(){
        let eilute = nuskaitoTekstiniIvedimoLaukeli("masyvas");


        const skaiciai = splitintiSkaicius(eilute);
        
        let pastraipa = document.getElementById("rezultatas");
        pastraipa.innerHTML = masyvosuma(skaiciai);

    }



}

function nuskaitoTekstiniIvedimoLaukeli(id){ 
    let ivedimolaukelis = document.getElementById(id);
        return ivedimolaukelis.value;

}

function splitintiSkaicius(eilute){
    const skaiciai = eilute.split(", ");
    console.log(skaiciai);

    for (let i = 0; i < skaiciai.length; i++) {
        skaiciai[i] = parseInt(skaiciai[i]);
        
    }
    return skaiciai;
}

function masyvosuma(masyvas){
    let suma = 0;
    for (const elementas of masyvas) {
        suma += elementas;
    }
    return suma;
}