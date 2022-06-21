window.onload = function(){

    let ilgioIvedimoLaukelis = document.getElementById("ilgis");
    console.log(ilgioIvedimoLaukelis);

    let plocioIvedimoLaukelis = document.getElementById("plotis");
    console.log(plocioIvedimoLaukelis);

    let mygtukas = document.getElementById("Skaiciavimomygtukas");
    console.log(mygtukas);

    mygtukas.onclick = function(){
        let ilgis = ilgioIvedimoLaukelis.valueAsNumber;
        console.log(ilgis);
        let plotis = plocioIvedimoLaukelis.valueAsNumber;
        console.log(plotis);

        console.log(staciakampioplotas(ilgis, plotas));

        pastraipa.innerHTML = "Stačiakampio plotas yra: " + staciakampioplotas(ilgis, plotis);

     }   

}

function staciakampioplotas(a, b){
    return a*b;

}