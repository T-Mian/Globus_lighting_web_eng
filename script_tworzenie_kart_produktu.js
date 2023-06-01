// Tomasz Mianecki
// versja 1

let czas_new = 4;
let lista_rodzin_produktu = ["Belus" , "SQR" , "HB-U" , "HB-U2"];
let obecna_data =  new Date();
let obecnie_rok = obecna_data.getFullYear();
let obecnie_miesiac = obecna_data.getMonth();
let obecnie_dzien = obecna_data.getDay();
let flaga_ribbon = ["TOP","NEW","NON"];
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

function flagowanie(ribbon){
  let flaga=""
  
  switch(ribbon) {
    case '1':
      flaga = flaga_ribbon[0]
      return ("<div class='ribbon up' style='--color: #fecb00;'><div class='content_ribon'>"+flaga+"</div> </div>")
      break;
    case '2':
      flaga = flaga_ribbon[1]
      return ("<div class='ribbon up' style='--color: #fecb00;'><div class='content_ribon'>"+flaga+"</div> </div>")
      break;
    case '3':
      flaga = flaga_ribbon[2]
      return (" <!-- brak ribbon -->")
      break;
  }
 
}

function funkcjiaOdczytuXML(xml){
  var numer = 1
  const xmlDoc = xml.responseXML;
  const x = xmlDoc.getElementsByTagName("CARTS");
  let karty_out=""
   
   for (let i = 0; i <x.length; i++){
     let numerId = x[i].getElementsByTagName("NUMER_ID")[0].childNodes[0].nodeValue;
     let rodzina = x[i].getElementsByTagName("RODZINA")[0].childNodes[0].nodeValue;
     let alt = x[i].getElementsByTagName("ALT")[0].childNodes[0].nodeValue ;
     let categoria = x[i].getElementsByTagName("CATEGORIA")[0].childNodes[0].nodeValue;
     let flaga = x[i].getElementsByTagName("FLAGA")[0].childNodes[0].nodeValue;
     let stronaWeb = x[i].getElementsByTagName("STRONA_WEB")[0].childNodes[0].nodeValue;
     let div_flaga = flagowanie(flaga)
     
     var carta='<!--'+numer+'--><div><a href="'+stronaWeb+'.html" alt=" ' +alt+'" target="_blank"><div class="card_produkt"><div class="wrapper_produkt">'+div_flaga+'<img src="/produkty_karty_covery/Produkt_cover_bg_hex_'+rodzina+'.jpg" class="cover-image_produkt" /></div><img src="/produkty_karty_title/'+rodzina+'-title.png" class="title_produkt" /> <img src="/produkty_karty_charakter/'+rodzina+'-char_simple.png" class="character_produkt" /></div></a></div>';
     karty_out+=carta
     numer++
   }
   
  document.getElementById("test").innerHTML = karty_out;
}

loadDoc()

// <a href="strona_produktu_led.html" alt="nazwa_alt" target="_blank">
//        <div class="card_produkt">
//          <div class="wrapper_produkt">
//            <div class="ribbon up" style="--color: #fecb00;">
//              <div class="content_ribon">New</div>
//            </div>
//            <img src="/produkty_karty_covery/XXX.jpg" class="cover-image_produkt" />
//          </div>
//          <img src="/produkty_karty_title/XXX.png" class="title_produkt" />
//          <img src="/produkty_karty_charakter/XXX.png" class="character_produkt" />
//       </div>
//      </a> 
