// Tomasz Mianecki
// ver 3.0

let flaga_ribbon = ["TOP", "NEW", "NON"];
let color_ribbon = "#fecb00";
let hiper_link = ["strona_produktu_led.html"];
let lista_docelowa_id = ["_industr_carts", "_line_carts", "_tepmer_carts", "_specjal_carts", "_ex_carts", "_zewenetrz_carts", "_sport_zew_carts", "_ofice_carts", "_agro_carts", "_archit_carts"];
let aktualny_jezyk_strony = document.getElementById("jezyk_strony").innerHTML;
//console.log(aktualny_jezyk_strony)
let adres_pliku_xml_standard ="xml/carty_produkt_catalog.xml";
let adres_pliku_xml_wyzej_w_hirarhi ="../xml/carty_produkt_catalog.xml";
let __adres_xml =(aktualny_jezyk_strony<1) ? adres_pliku_xml_standard:adres_pliku_xml_wyzej_w_hirarhi;;
//console.log("__adres_xml")
//console.log(__adres_xml)
// funkcjia ładująca plik xml
function loadDoc() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    funkcjiaOdczytuXML(this);
  }
  xhttp.open("GET", __adres_xml);
  xhttp.send();
}

function flagowanie(ribbon) {
  let flaga = "";
  switch (ribbon) {
    case '1':
      flaga = flaga_ribbon[0]
      return ("<div class='ribbon up' style='--color: #fecb00;'><div class='content_ribon'>" + flaga + "</div> </div>")
     // break;
    case '2':
      flaga = flaga_ribbon[1]
      return ("<div class='ribbon up' style='--color: #fecb00;'><div class='content_ribon'>" + flaga + "</div> </div>")
     // break;
    case '3':
      flaga = flaga_ribbon[2]
      return (" <!-- brak ribbon -->")
    //  break;
  }

}

function do_swojej_categori(cel, lista) {
  let sum = "";
  for (let x of lista) {
    sum += x;
    //console.log(sum)
  }

  document.getElementById(cel).innerHTML = sum;
}

function doInnerHtmll(cel, cartt) {
  switch (cel) {
    case lista_docelowa_id[0]:
      str_industr_carts += cartt;
      break;
    case lista_docelowa_id[1]:
      str_line_carts += cartt;
      break;
    case lista_docelowa_id[2]:
      str_tepmer_carts += cartt;
      break;
    case lista_docelowa_id[3]:
      str_specjal_carts += cartt;
      break;
    case lista_docelowa_id[4]:
      str_ex_carts += cartt;
      break;
    case lista_docelowa_id[5]:
      str_zewenetrz_carts += cartt;
      break;
    case lista_docelowa_id[6]:
      str_sport_zew_carts += cartt;
      break;
    case lista_docelowa_id[7]:
      str_ofice_carts += cartt;
      break;
    case lista_docelowa_id[8]:
      str_agro_carts += cartt;
      break;
    case lista_docelowa_id[9]:
      str_archit_carts += cartt;
      break;
  }
  //console.log(str_archit_carts)
}

function kreacjia_karty(a, b, c, d, e) {
  let aa = parseInt(a);
  aa -= 1;
  let e_adresu_lc =e.toLowerCase()
  let spec =` ${b}.html?${aktualny_jezyk_strony}nrId=${aa}-${e_adresu_lc}"`;

  let skladak =`<!--  ${a}  -->
  <div>
    <a href="${spec} alt="${c}" target="_blank">
      <div class="card_produkt">
        <div class="wrapper_produkt"> ${d}
          <picture>
            <source srcset="/produkty_karty_covery/Produkt_cover_bg_hex_${e}.webP" 
            type="image/webp" class="cover-image_produkt lozad" alt="${c} - cover">
            <source srcset="/produkty_karty_covery/Produkt_cover_bg_hex_${e}.jpg" 
            type="image/jpg" class="cover-image_produkt lozad" alt="${c} - cover">
            <img src="/produkty_karty_covery/Produkt_cover_bg_hex_${e}.jpg" 
            class="cover-image_produkt lozad" alt="${c} - cover" >
          </picture>
        </div>
      <picture>
        <source srcset="/produkty_karty_title/${e}-title.webP" type="image/webp" 
        class="title_produkt" alt="${c} - title">
        <source srcset="/produkty_karty_title/${e}-title.png" type="image/png" 
        class="title_produkt" alt="${c} - title">
        <img src="/produkty_karty_title/${e}-title.png" 
        class="title_produkt" alt="${c} - title">
      </picture>
      <picture>
      <source srcset="/produkty_karty_charakter/${e}-char_simple.webP" 
      type="image/webp" class="character_produkt lozad" alt="${c} - only the lamp">
       <source srcset="/produkty_karty_charakter/${e}-char_simple.png" 
       type="image/png" class="character_produkt lozad" alt="${c} - only the lamp">
       <img src="/produkty_karty_charakter/${e}-char_simple.png" 
       class="character_produkt" style="left: 0px;bottom: 0px;" alt="${c} - only the lamp">
      </picture>
      </div>
    </a>
  </div>` ;
  return skladak;
}

let str_industr_carts = '';
let str_line_carts = '';
let str_tepmer_carts = '';
let str_specjal_carts = '';
let str_ex_carts = '';
let str_zewenetrz_carts = '';
let str_sport_zew_carts = '';
let str_ofice_carts = '';
let str_agro_carts = '';
let str_archit_carts = '';
let lista_operacyjna = ['str_industr_carts', 'str_line_carts', 'str_tepmer_carts', 'str_specjal_carts', 'str_ex_carts', 'str_zewenetrz_carts', 'str_sport_zew_carts', 'str_ofice_carts', 'str_agro_carts', 'str_archit_carts'];


function funkcjiaOdczytuXML(xml) {
  const xmlDoc = xml.responseXML;
  const x = xmlDoc.getElementsByTagName("CARTS");
  //var karty_out=[];
  for (let i = 0; i < x.length; i++) {
    let numerId = x[i].getElementsByTagName("NUMER_ID")[0].childNodes[0].nodeValue;
    let rodzina = x[i].getElementsByTagName("RODZINA")[0].childNodes[0].nodeValue;
    let alt = x[i].getElementsByTagName("ALT")[0].childNodes[0].nodeValue;
    var categoria = x[i].getElementsByTagName("CATEGORIA")[0].childNodes[0].nodeValue;
    let flaga = x[i].getElementsByTagName("FLAGA")[0].childNodes[0].nodeValue;
    let stronaWeb = x[i].getElementsByTagName("STRONA_WEB")[0].childNodes[0].nodeValue;
    let div_flaga = flagowanie(flaga);
    let test_strony = (aktualny_jezyk_strony<1) ? stronaWeb:"../"+stronaWeb;
    var carta = kreacjia_karty(numerId, test_strony, alt, div_flaga, rodzina);
    //console.log(carta)
    doInnerHtmll(categoria, carta);

  }
  for (let x of lista_docelowa_id) {
    switch (x) {
      case lista_docelowa_id[0]:
        document.getElementById(lista_docelowa_id[0]).innerHTML = str_industr_carts;
        break;
      case lista_docelowa_id[1]:
        document.getElementById(lista_docelowa_id[1]).innerHTML = str_line_carts;
        break;
      case lista_docelowa_id[2]:
        document.getElementById(lista_docelowa_id[2]).innerHTML = str_tepmer_carts;
        break;
      case lista_docelowa_id[3]:
        document.getElementById(lista_docelowa_id[3]).innerHTML = str_specjal_carts;
        break;
      case lista_docelowa_id[4]:
        document.getElementById(lista_docelowa_id[4]).innerHTML = str_ex_carts;
        break;
      case lista_docelowa_id[5]:
        document.getElementById(lista_docelowa_id[5]).innerHTML = str_zewenetrz_carts;
        break;
      case lista_docelowa_id[6]:
        document.getElementById(lista_docelowa_id[6]).innerHTML = str_sport_zew_carts;
        break;
      case lista_docelowa_id[7]:
        document.getElementById(lista_docelowa_id[7]).innerHTML = str_ofice_carts;
        break;
      case lista_docelowa_id[8]:
        document.getElementById(lista_docelowa_id[8]).innerHTML = str_agro_carts;
        break;
      case lista_docelowa_id[9]:
        document.getElementById(lista_docelowa_id[9]).innerHTML = str_archit_carts;
        break;
    }

  }
}

loadDoc();

