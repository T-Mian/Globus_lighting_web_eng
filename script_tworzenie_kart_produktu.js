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

function do_swojej_categori(cel,lista){
  let sum = ""
  for (let x of lista) {
    sum+=x
    console.log(sum)
  }
  
document.getElementById(cel).innerHTML=sum;
}

function doInnerHtmll(cel, cartt){
  switch(cel) {
  case lista_docelowa_id[0]:
    str_industr_carts+=cartt
    break;
  case lista_docelowa_id[1]:
    str_line_carts+=cartt
    break;
  case lista_docelowa_id[2]:
    str_tepmer_carts+=cartt
    break;
  case lista_docelowa_id[3]:
    str_specjal_carts+=cartt
    break;
  case lista_docelowa_id[4]:
    str_ex_carts+=cartt
    break;
  case lista_docelowa_id[5]:
    str_zewenetrz_carts+=cartt
    break;
  case lista_docelowa_id[6]:
    str_sport_zew_carts+=cartt
    break;
  case lista_docelowa_id[7]:
    str_ofice_carts+=cartt
    break;
  case lista_docelowa_id[8]:
    str_agro_carts+=cartt
    break;
  case lista_docelowa_id[9]:
    str_archit_carts+=cartt
    break;
  }
  //console.log(str_archit_carts)
}


function kreacjia_karty(a,b,c,d,e){
 // return('<!--'+a+'--><div><a href="'+b+'.html" alt=" ' +c+'" target="_blank"><div class="card_produkt"><div class="wrapper_produkt">'+d+'<img src="/produkty_karty_covery/Produkt_cover_bg_hex_'+e+'.jpg" class="cover-image_produkt" /></div><img src="/produkty_karty_title/'+e+'-title.png" class="title_produkt" /> <img src="/produkty_karty_charakter/'+e+'-char_simple.png" class="character_produkt" /></div></a></div>')

skladak='<!--'+a+'--><div><a href="'+b+'.html" alt=" ' +c+'" target="_blank"><div class="card_produkt"><div class="wrapper_produkt">'+d+'<img src="/produkty_karty_covery/Produkt_cover_bg_hex_'+e+'.jpg" class="cover-image_produkt" /></div><img src="/produkty_karty_title/'+e+'-title.png" class="title_produkt" /> <img src="/produkty_karty_charakter/'+e+'-char_simple.png" class="character_produkt" /></div></a></div>'
  return skladak
}

let str_industr_carts='';
let str_line_carts='';
let str_tepmer_carts='';
let str_specjal_carts='';
let str_ex_carts='';
let str_zewenetrz_carts='';
let str_sport_zew_carts='';
let str_ofice_carts='';
let str_agro_carts='';
let str_archit_carts='';
let lista_operacyjna=['str_industr_carts','str_line_carts','str_tepmer_carts','str_specjal_carts','str_ex_carts','str_zewenetrz_carts','str_sport_zew_carts','str_ofice_carts','str_agro_carts','str_archit_carts']


function funkcjiaOdczytuXML(xml){
  const xmlDoc = xml.responseXML;
  const x = xmlDoc.getElementsByTagName("CARTS");
  var karty_out=[];
  for (let i = 0; i <x.length; i++){
     let numerId = x[i].getElementsByTagName("NUMER_ID")[0].childNodes[0].nodeValue;
     let rodzina = x[i].getElementsByTagName("RODZINA")[0].childNodes[0].nodeValue;
     let alt = x[i].getElementsByTagName("ALT")[0].childNodes[0].nodeValue ;
     var categoria = x[i].getElementsByTagName("CATEGORIA")[0].childNodes[0].nodeValue;
     let flaga = x[i].getElementsByTagName("FLAGA")[0].childNodes[0].nodeValue;
     let stronaWeb = x[i].getElementsByTagName("STRONA_WEB")[0].childNodes[0].nodeValue;
     let div_flaga = flagowanie(flaga);

    
     var carta=kreacjia_karty(numerId,stronaWeb,alt,div_flaga,rodzina)
     //console.log(carta)
    doInnerHtmll(categoria,carta)
    
  }
  for (let x of lista_docelowa_id) {
    switch(x) {
      case lista_docelowa_id[0]:
        document.getElementById(lista_docelowa_id[0]).innerHTML=str_industr_carts
        break;
      case lista_docelowa_id[1]:
        document.getElementById(lista_docelowa_id[1]).innerHTML=str_line_carts
        break;
      case lista_docelowa_id[2]:
        document.getElementById(lista_docelowa_id[2]).innerHTML=str_tepmer_carts
        break;
      case lista_docelowa_id[3]:
        document.getElementById(lista_docelowa_id[3]).innerHTML=str_specjal_carts
        break;
      case lista_docelowa_id[4]:
        document.getElementById(lista_docelowa_id[4]).innerHTML=str_ex_carts
        break;
      case lista_docelowa_id[5]:
        document.getElementById(lista_docelowa_id[5]).innerHTML=str_zewenetrz_carts
        break;
      case lista_docelowa_id[6]:
        document.getElementById(lista_docelowa_id[6]).innerHTML=str_sport_zew_carts
        break;
      case lista_docelowa_id[7]:
        document.getElementById(lista_docelowa_id[7]).innerHTML=str_ofice_carts
        break;
      case lista_docelowa_id[8]:
        document.getElementById(lista_docelowa_id[8]).innerHTML=str_agro_carts
        break;
      case lista_docelowa_id[9]:
        document.getElementById(lista_docelowa_id[9]).innerHTML=str_archit_carts
        break;
      }
    
    } 
  }


loadDoc()

