// Tomasz Mianecki
// versja 1

let czas_new = 4;
let lista_rodzin_produktu = ["Belus" , "SQR" , "HB-U" , "HB-U2"];
let obecna_data =  new Date();
let obecnie_rok = obecna_data.getFullYear();
let obecnie_miesiac = obecna_data.getMonth();
let obecnie_dzien = obecna_data.getDay();
let flaga_ribbon = ["NEW","TOP","NON"];
let color_ribbon = "#fecb00";
let hiper_link = ["strona_produktu_led.html"];
let lista_docelowa_id=["_industr_carts","_line_carts","_tepmer_carts","_specjal_carts","_ex_carts","_zewenetrz_carts","_sport_zew_carts","_ofice_carts","_agro_carts","_archit_carts"];

// funkcjia ładująca plik xml
function loadDoc() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    funkcjiaOdczytuXML(this);
  }
 xhttp.open("GET", "carty_produkt_catalog.xml");
 xhttp.send();
}

function funkcjiaOdczytuXML(xml){
  let numer = 1
  const xmlDoc = xml.responseXML;
  const x = xmlDoc.getElementsByTagName("CARTS");
   let carta="";
   for (let i = 0; i <x.length; i++){
     
   }
}
//document.getElementById("demo").innerHTML = carta;