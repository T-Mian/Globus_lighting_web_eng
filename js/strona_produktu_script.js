// Tomasz Mianecki 
// versja 1.9


let tytul_produktu = document.getElementById("title_produkts")
let ickonografia_produktu = document.getElementById("produkt_ikons")
let foto_produktu = document.getElementById("foto_produkt")
let tytul_opisu = document.getElementById("titlte_opis")
let opis_produktu = document.getElementById("szczegułowy_opis")
let rozsyl_produktu = document.getElementById("photometry")
let info_dodatkowe = document.getElementById("dodatki")
let jezyk_opisu = ["OPIS_TRESC_ANG", "OPIS_TRESC_FR", "OPIS_TRESC_PL"]
let flaga_języka = jezyk_opisu[0];
let res = "";
var id_pr = 0


parametry = encodeURI(window.location.href).split("?");
if (parametry.length > 1) {
  zmienne = parametry[1].split("&");
}
for (i = 0; i < zmienne.length; i++) {
  zm = zmienne[i].split("=");
  //console.log(zm[1])
  id_pr = zm[1]
}
//id_pr -= 1

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    Odczyt(this);
  } else {
    console.log(this.status)
  }
};
xhttp.open("GET", "xml/opisy_produktow.xml", true);
xhttp.send();


function loadTabele(params) {
  let nazwa_a=params.split("_")
  let nazwa_b=nazwa_a[0]
  try {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    zaladowacTabele(this,nazwa_b);
  }
    let adres="xml/bdxml/"+params
  xhttp.open("GET", adres);
  xhttp.send();
}
catch(err) {
  document.getElementById("table_led").innerHTML = err.message;
}
}
function zaladowacTabele(xml,plik_nazwa) {
  let nazwa=plik_nazwa+"_1"
  const xmlDoc = xml.responseXML;
  const x = xmlDoc.getElementsByTagName("MODEL");
  let table="<table><tr><th>Model</th><th>Ra & CCT [K]</th><th>Power [W]</th><th>Flux [lm]</th><th>Control</th><th>IP & IK</th><th>Photometry</th></tr>";
  for (let i = 0; i <x.length; i++) { 
    let a = x[i].getElementsByTagName("KOD")[0].childNodes[0].nodeValue
    let b = adresatorTabel(a,nazwa)
    table += "<tr><td>" +b + "</td><td>" +
    x[i].getElementsByTagName("RACCT")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("MOC")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("FLUX")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("elem_sterowanie")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("IP")[0].childNodes[0].nodeValue +
    " & " +
    x[i].getElementsByTagName("IK")[0].childNodes[0].nodeValue +
    "</td><td>"+
    x[i].getElementsByTagName("ROZ")[0].childNodes[0].nodeValue +
    "</td></tr>";
  }
  table+="</table>"
  document.getElementById("table_led").innerHTML = table;
}

function funcPoprzedni() {
  if (id_pr == 0) {
    id_pr = 0
  } else {
    id_pr--
  }
  Odczyt(xhttp)
  console.log("funcPoprzedni")
}

function funcNastepny() {
  if (id_pr == 79) {
    id_pr = 0
  } else {
    id_pr++
  }
  Odczyt(xhttp)
  console.log("funcNastepny")
}

function Odczyt(xml) {
  console.log("func Odczyt id_pr :" , id_pr);
  var xmlDoc = xml.responseXML;
  var x = xmlDoc.getElementsByTagName("RODZINA");
  var y = xmlDoc.getElementsByTagName("H3_OPISU");
  var z = xmlDoc.getElementsByTagName(flaga_języka);
  var q = xmlDoc.getElementsByTagName("ICONY_RODZINY");
  var f = xmlDoc.getElementsByTagName("FOTO");
  var g = xmlDoc.getElementsByTagName("PFOTOMETRIA");
  var tabela=xmlDoc.getElementsByTagName("PLIK_TABELI");
  tytul_produktu.innerHTML = x[id_pr].childNodes[0].nodeValue;
  tytul_opisu.innerHTML = y[id_pr].childNodes[0].nodeValue;
  opis_produktu.innerHTML = z[id_pr].childNodes[0].nodeValue;
  ickonografia_produktu.innerHTML = ("<!--"+x[id_pr].childNodes[0].nodeValue+"-->"+q[id_pr].childNodes[0].nodeValue);
  let set = f[id_pr].childNodes[0].nodeValue;
  foto_produktu.setAttribute("src", set);
  let dataPfotometria = g[id_pr].childNodes[0].nodeValue;
  przydzielPfotometria(dataPfotometria);
  var tabela_sc=tabela[id_pr].childNodes[0].nodeValue;
  var tabela_hed_a=tabela_sc.split("_")
  var tabela_hed_b=tabela_hed_a[0]
  loadTabele(tabela_sc)
  

}

function przydzielPfotometria(element) {
  let ell = element.split(" , ")
  let res = ""
  for (let x in ell) {
    res += "<img src='" + ell[x] + "'>"
  }
  rozsyl_produktu.innerHTML = res
}

function myFunctionSize() {
  document.getElementById("szczegułowy_opis").style.fontSize = "20px";
  let btn = document.getElementById("myBtnPlus")
  btn.setAttribute("disabled", "");
  let btn_2 = document.getElementById("myBtnMinus").removeAttribute("disabled")
}
function myFunctionSizeMin() {
  document.getElementById("szczegułowy_opis").style.fontSize = "1em";
  document.getElementById("myBtnPlus").removeAttribute("disabled")
  document.getElementById("myBtnMinus").setAttribute("disabled", "");
}

function showInfoIcins() {
  document.getElementById("opis_ikons").style.visibility = "visible"
}

function hidenIkons() {
  document.getElementById("opis_ikons").style.visibility = "hidden"
}
let btn_pl = document.getElementById("btnLangeShowPl");
let btn_fr = document.getElementById("btnLangeShowFR");
let btn_ang = document.getElementById("btnLangeShowANG");
var list_btn=[btn_pl,btn_fr,btn_ang]
var flaga_lange_show=false;

function langeShow() {
  let x = 40
  if (flaga_lange_show) {
    for (let btn of list_btn) {
      btn.style.opacity="1"
      btn.style.transition=" all 1s ease-out"
      btn.style.top=x+8+"%"
      x+=8
    }
  } else {
    for (let btn of list_btn) {
      btn.style.opacity="0"
      btn.style.transition=" all 1s ease-out"
      btn.style.top="40%"
      x-=8
    }
  }

  flaga_lange_show=!flaga_lange_show
}
langeShow()

function langeSet(nr,id) {
  flaga_języka = jezyk_opisu[nr];
  Odczyt(xhttp)
  for (let btn of list_btn) {
    let el=document.getElementById(id)
    btn.firstChild.classList.remove("fa-xmark","fa-check");
    btn.firstChild.classList.add("fa-xmark")
    if (el==btn) {
      el.firstChild.classList.remove("fa-xmark");
      el.firstChild.classList.add("fa-check")
    }
  }

  let span_product_description=document.getElementById("product_description_span");
  let span_photometry=document.getElementById("photometry_span");
  let span_info=document.getElementById("info_span");
  let span_configurations=document.getElementById("configurations_span");
  switch(nr) {
  case 0:
      span_product_description.innerHTML= "Product description :";
      span_photometry.innerHTML= "Photometry";
      span_info.innerHTML= "Info";
      span_configurations.innerHTML= "Configurations available :";
    break;
  case 1:
    span_product_description.innerHTML= "Description du produit :";
      span_photometry.innerHTML= "Photométrie";
      span_info.innerHTML= "Info";
      span_configurations.innerHTML= "Paramétrages disponibles :";
    break;
  case 2:
      span_product_description.innerHTML= "Opis produktu :";
      span_photometry.innerHTML= "Fotometria";
      span_info.innerHTML= "Informacje";
      span_configurations.innerHTML= "Dostępne konfiguracje:";
    break;
  default:
      span_product_description.innerHTML= "Product description :";
      span_photometry.innerHTML= "Photometry";
      span_info.innerHTML= "Info";
      span_configurations.innerHTML= "Configurations available :";
      console.log("langeSet switch default")
}
}
//do opracowania 
function adresatorTabel(zakladka,plik_danych) {
  let lang_alfa = flaga_języka.split('_')
  let alfa=""
  let lan= lang_alfa[2].toLowerCase()
  alfa += '<a href="pdf_zbior/'+lan+'/'+plik_danych+'.pdf#'+zakladka+'"'+'target="_blanc" rel="noopener" rel="noreferrer" >'+zakladka+'</a>'

  return alfa
}
console.log(adresatorTabel("GL-TUBUS-A4012061-840","tubus_1"))