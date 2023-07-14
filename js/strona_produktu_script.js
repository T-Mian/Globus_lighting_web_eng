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
if (parametry.length>1) {
  zmienne=parametry[1].split("&"); 
}
for (i=0;i<zmienne.length;i++) {
  zm=zmienne[i].split("=");
  console.log(zm[1])
  id_pr=zm[1]
}
id_pr-=1

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    Odczyt(this);
  }else{
    console.log(this.status)
  }
};
xhttp.open("GET", "xml/opisy_produktow.xml",true);
xhttp.send();


function funcPoprzedni() {
  if (id_pr == 0) {
    id_pr = 0
  } else {
    id_pr--
  }
  Odczyt(xhttp)
}

function funcNastepny() {
  if (id_pr == 21) {
    id_pr = 21
  } else {
    id_pr++
  }
  Odczyt(xhttp)
}

function Odczyt(xml) {
  var xmlDoc = xml.responseXML;
  var x = xmlDoc.getElementsByTagName("RODZINA");
  var y = xmlDoc.getElementsByTagName("H3_OPISU");
  var z = xmlDoc.getElementsByTagName(flaga_języka);
  var q = xmlDoc.getElementsByTagName("ICONY_RODZINY");
  var f = xmlDoc.getElementsByTagName("FOTO");
  var g = xmlDoc.getElementsByTagName("PFOTOMETRIA");
  //var pA = xmlDoc.getElementsByTagName("DADATKOWE_INFO_ANG");
  //var pF = xmlDoc.getElementsByTagName("DODATKOWE_INFO_FRA");
  //var pP = xmlDoc.getElementsByTagName("DODATKOWE_INFO_PLN");
  tytul_produktu.innerHTML = x[id_pr].childNodes[0].nodeValue;
  tytul_opisu.innerHTML = y[id_pr].childNodes[0].nodeValue;
  opis_produktu.innerHTML = z[id_pr].childNodes[0].nodeValue;
  ickonografia_produktu.innerHTML = q[id_pr].childNodes[0].nodeValue;
  let set = f[id_pr].childNodes[0].nodeValue;
  foto_produktu.setAttribute("src", set);
  let dataPfotometria = g[id_pr].childNodes[0].nodeValue;
  przydzielPfotometria(dataPfotometria);

}

function przydzielPfotometria(element) {
  let ell = element.split(" , ")
  let res = ""
  for (let x in ell) {
    res += "<img src='" + ell[x] + "'>"
  }
  rozsyl_produktu.innerHTML = res
}

//adres_karty,adres_pliku_zip,dodatkowe_info
function dodatkowe_Info() {
  switch (flaga_języka) {
    case "OPIS_TRESC_ANG":
      console.log(p)
      break;
    case "OPIS_TRESC_FR":
      console.log(flaga_języka)
      break;
    case "OPIS_TRESC_PL":
      console.log(flaga_języka)
      break;
  }


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
