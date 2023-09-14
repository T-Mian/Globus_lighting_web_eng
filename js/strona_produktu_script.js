// Tomasz Mianecki 
//Skrypt do obsługi strony z produktem 
// versja 5


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
var jezyk_przychodzacy =""
var flaga_językaAflfa=0
let _jezyk_strony = document.getElementById("jezyk_strony")
// dekodowanie adresu
parametry = encodeURI(window.location.href).split("?");
if (parametry.length > 1) {
  zmienne = parametry[1].split("&");
}
for (i = 0; i < zmienne.length; i++) {
  zm = zmienne[i].split("=");
  id_pr = zm[1]
  let x=zm[0]
  jezyk_przychodzacy =x.slice(0,1)
  flaga_językaAflfa = parseInt(jezyk_przychodzacy)
  console.log("flaga_językaAflfa")
  console.log(flaga_językaAflfa)
  _jezyk_strony.innerHTML=flaga_językaAflfa
  flaga_języka=jezyk_opisu[flaga_językaAflfa]
}


var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    Odczyt(this);
  } else {
    console.log(this.status)
  }
};

let adres_opisu_xml=(flaga_językaAflfa<1) ? "xml/opisy_produktow.xml":"../xml/opisy_produktow.xml"
xhttp.open("GET", adres_opisu_xml, true);
xhttp.send();


function loadTabele(params) {
  let nazwa_a = params.split("_")
  let nazwa_b = nazwa_a[0]
  try {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      zaladowacTabele(this, nazwa_b);
    }
    let adres = "xml/bdxml/" + params
    xhttp.open("GET", adres);
    xhttp.send();
  }
  catch (err) {
    document.getElementById("table_led").innerHTML = err.message;
  }
}

let oko_icon = '<i class="fa-regular fa-eye"></i>'

function downLoad_icon(strona, plik, kod) {
  let str_plik = ""
  str_plik += "'" + plik + "'"
  let _kod = "'" + kod + "'"
  let alfa_downLoad_icon = `<button onclick="copyPages(${strona},${str_plik},${_kod})" type="button"><i class="fa-solid fa-download"></i></button>`
  return alfa_downLoad_icon
}

function zaladowacTabele(xml, plik_nazwa) {
  let lang=["Product code","Code produit","Kod produktu","Power","Pouvoir","Moc","Flux","Flux","Strumień","Control Mode","Mode de contrôle","Tryb sterowania","Photometry","Photométrie","Fotometria"];
  let sterowanie_ANG=["No dim","1-10V dim","ZHAGA","Motion sensor","PIR sensor","Photocell","DALI","DALI2"];
  let sterowanie_FR=["Pas de gradation","Gradation 1-10V","ZHAGA","Un capteur de mouvements","Capteur IRP","Photocellule","DALI","DALI2"];
  let nazwa = plik_nazwa + "_1";
  const xmlDoc = xml.responseXML;
  const x = xmlDoc.getElementsByTagName("MODEL");
  let indeks=jezyk_opisu.indexOf(flaga_języka)
  let table = `<table><tr><th>${lang[indeks]}</th><th>Ra & CCT [K]</th><th>${lang[indeks+3]} [W]</th><th>${lang[indeks+6]} [lm]</th><th>${lang[indeks+9]}</th><th>IP & IK</th><th>${lang[indeks+12]}</th><th>Download</th></tr>`;

  let strona = 3;
  for (let i = 0; i < x.length; i++) {
     let _ster = x[i].getElementsByTagName("elem_sterowanie")[0].childNodes[0].nodeValue;
  _ster= _ster.toUpperCase()
  if(flaga_języka == "OPIS_TRESC_ANG"){
    if(_ster=="BRAK"){_ster=sterowanie_ANG[0]}
    if(_ster=="CZUJNIK PIR"){_ster=sterowanie_ANG[4]}
    if(_ster=="CZUJNIK MICROFALOWY" ||_ster=="CZUJNIK RUCHU"){_ster=sterowanie_ANG[3]}
    if(_ster=="1-10V"){_ster=sterowanie_ANG[1]}
  }
  if(flaga_języka == "OPIS_TRESC_FR"){
    if(_ster=="BRAK"){_ster=sterowanie_FR[0]}
    if(_ster=="CZUJNIK PIR"){_ster=sterowanie_FR[4]}
    if(_ster=="CZUJNIK MICROFALOWY" ||_ster=="CZUJNIK RUCHU"){_ster=sterowanie_FR[3]}
    if(_ster=="1-10V"){_ster=sterowanie_FR[1]}
  }
    let a = x[i].getElementsByTagName("KOD")[0].childNodes[0].nodeValue;
    let b = adresatorTabel(a, nazwa);
    let res_ip = (x[i].getElementsByTagName("IP").length > 0) ? x[i].getElementsByTagName("IP")[0].childNodes[0].nodeValue : "&nbsp";
    let res_ik = (x[i].getElementsByTagName("IK").length > 0) ? x[i].getElementsByTagName("IK")[0].childNodes[0].nodeValue : "&nbsp";
    let res_ik_ver2 = (x[i].getElementsByTagName("elem_IK").length > 0) ? x[i].getElementsByTagName("elem_IK")[0].childNodes[0].nodeValue : "";
    if (res_ik_ver2 == "nullIK") { res_ik_ver2 = "" };
    table += "<tr><td>" + oko_icon + "&nbsp" + b + "</td><td>" +
      x[i].getElementsByTagName("RACCT")[0].childNodes[0].nodeValue +
      "</td><td>" +
      x[i].getElementsByTagName("MOC")[0].childNodes[0].nodeValue +
      "</td><td>" +
      x[i].getElementsByTagName("FLUX")[0].childNodes[0].nodeValue +
      "</td><td>" +_ster+"</td><td>" +res_ip + "&nbsp &nbsp" + res_ik + res_ik_ver2 +"</td><td>" +
      x[i].getElementsByTagName("ROZ")[0].childNodes[0].nodeValue +
      "</td><td>" + downLoad_icon(strona, nazwa, a) + "</td></tr>"
    strona += 2
  }
  table += "</table>"
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
  if (id_pr == 80) {
    id_pr = 0
  } else {
    id_pr++
  }
  Odczyt(xhttp)
  console.log("funcNastepny")
}

function Odczyt(xml) {
  var xmlDoc = xml.responseXML;
  var x = xmlDoc.getElementsByTagName("RODZINA");
  var y = xmlDoc.getElementsByTagName("H3_OPISU");
  var z = xmlDoc.getElementsByTagName(flaga_języka);
  var q = xmlDoc.getElementsByTagName("ICONY_RODZINY");
  var f = xmlDoc.getElementsByTagName("FOTO");
  var g = xmlDoc.getElementsByTagName("PFOTOMETRIA");
  var tabela = xmlDoc.getElementsByTagName("PLIK_TABELI");
  tytul_produktu.innerHTML = x[id_pr].childNodes[0].nodeValue;
  tytul_opisu.innerHTML = y[id_pr].childNodes[0].nodeValue;
  opis_produktu.innerHTML = z[id_pr].childNodes[0].nodeValue;
  ickonografia_produktu.innerHTML = ("<!--" + x[id_pr].childNodes[0].nodeValue + "-->" + q[id_pr].childNodes[0].nodeValue);
  let set = f[id_pr].childNodes[0].nodeValue;
  foto_produktu.setAttribute("src", set);
  let dataPfotometria = ""
  if (g[id_pr].childNodes[0].nodeValue) {
    dataPfotometria = g[id_pr].childNodes[0].nodeValue;
  }
  przydzielPfotometria(dataPfotometria);
  var tabela_sc = tabela[id_pr].childNodes[0].nodeValue;
  loadTabele(tabela_sc)

}

function przydzielPfotometria(element) {
  if (element) {
    let ell = element.split(" , ")
    let res = ""
    for (let x in ell) {
      res += "<img src='" + ell[x] + "'>"
    }
    rozsyl_produktu.innerHTML = res
  } else {
    console.log("Brak fotometri")
  }

}

function myFunctionSize() {
  document.getElementById("szczegułowy_opis").style.fontSize = "20px";
  let btn = document.getElementById("myBtnPlus");
  btn.setAttribute("disabled", "");
  let btn_2 = document.getElementById("myBtnMinus");
  btn_2.removeAttribute("disabled");
}
function myFunctionSizeMin() {
  document.getElementById("szczegułowy_opis").style.fontSize = "1em";
  document.getElementById("myBtnPlus").removeAttribute("disabled");
  document.getElementById("myBtnMinus").setAttribute("disabled", "");
}

function showInfoIcins() {
  document.getElementById("opis_ikons").style.visibility = "visible";
}

function hidenIkons() {
  document.getElementById("opis_ikons").style.visibility = "hidden";
}
/*
let btn_pl = document.getElementById("btnLangeShowPl");
let btn_fr = document.getElementById("btnLangeShowFR");
let btn_ang = document.getElementById("btnLangeShowANG");
var list_btn = [btn_ang,btn_fr,btn_pl]
for(let x of list_btn){
  console.log("for(let x of list_btn) ")
  console.log(x)
  if(list_btn.indexOf(x)==flaga_językaAflfa){
    console.log(" if(list_btn.indexOf(x)==flaga_językaAflfa)")
      x.firstChild.classList.remove("fa-xmark");
      x.firstChild.classList.add("fa-check")
  }else{
    x.firstChild.classList.remove("fa-check");
    x.firstChild.classList.add("fa-xmark")
  }
}
var flaga_lange_show = false;

function langeShow() {
  let x = 40
  if (flaga_lange_show) {
    for (let btn of list_btn) {
      btn.style.opacity = "1"
      btn.style.transition = " all 1s ease-out"
      btn.style.top = x + 8 + "%"
      x += 8
    }
  } else {
    for (let btn of list_btn) {
      btn.style.opacity = "0"
      btn.style.transition = " all 1s ease-out"
      btn.style.top = "40%"
      x -= 8
    }
  }
  flaga_lange_show = !flaga_lange_show
}
langeShow()

function langeSet(nr) {
  var id=""
  if(nr==0){id='btnLangeShowANG'}
  if(nr==1){id='btnLangeShowFR'}
  if(nr==2){id='btnLangeShowPl'}
  flaga_języka = jezyk_opisu[nr];
  Odczyt(xhttp)
  
  for (let btn of list_btn) {
    let el = document.getElementById(id)
    btn.firstChild.classList.remove("fa-xmark", "fa-check");
    btn.firstChild.classList.add("fa-xmark")
    if (el == btn) {
      el.firstChild.classList.remove("fa-xmark");
      el.firstChild.classList.add("fa-check")
    }
  } 
  translate_web(nr)
  
}

function translate_web(nr){
  consola.log("translate_web")
  consola.log("nr")
  consola.log(nr)
  let span_product_description = document.getElementById("product_description_span");
  let span_photometry = document.getElementById("photometry_span");
  let span_info = document.getElementById("info_span");
  let span_configurations = document.getElementById("configurations_span");
  switch (nr) {
    case 0:
      span_product_description.innerHTML = "Product description :";
      span_photometry.innerHTML = "Photometry";
      span_info.innerHTML = "Info";
      span_configurations.innerHTML = "Configurations available :";
      break;
    case 1:
      span_product_description.innerHTML = "Description du produit :";
      span_photometry.innerHTML = "Photométrie";
      span_info.innerHTML = "Info";
      span_configurations.innerHTML = "Paramétrages disponibles :";
      break;
    case 2:
      span_product_description.innerHTML = "Opis produktu :";
      span_photometry.innerHTML = "Fotometria";
      span_info.innerHTML = "Informacje";
      span_configurations.innerHTML = "Dostępne konfiguracje:";
      break;
    default:
      span_product_description.innerHTML = "Product description :";
      span_photometry.innerHTML = "Photometry";
      span_info.innerHTML = "Info";
      span_configurations.innerHTML = "Configurations available :";
      console.log("langeSet switch default")
  }
}*/
  let span_product_description = document.getElementById("product_description_span");
  let span_photometry = document.getElementById("photometry_span");
  //let span_info = document.getElementById("info_span");
  let span_configurations = document.getElementById("configurations_span");

let tlumaczenie_strony=["Product description :","Description du produit ","Opis produktu :","Photometry","Photométrie","Fotometria","Configurations available :","Paramétrages disponibles :","Dostępne konfiguracje:"]

  span_product_description.innerHTML = tlumaczenie_strony[flaga_językaAflfa];
  span_photometry.innerHTML = tlumaczenie_strony[flaga_językaAflfa+3];
  //span_info.innerHTML = tlumaczenie_strony[flaga_językaAflfa+9];
  span_configurations.innerHTML = tlumaczenie_strony[flaga_językaAflfa+6];

//translate_web(flaga_językaAflfa)

//do opracowania 
function adresatorTabel(zakladka, plik_danych) {
  let lang_alfa = flaga_języka.split('_')
  let alfa = ""
  let lan = lang_alfa[2].toLowerCase()
  alfa += '<a href="pdf_zbior/' + lan + '/' + plik_danych + '.pdf#' + zakladka + '"' + 'target="_blanc" rel="noopener" rel="noreferrer" >' + zakladka + '</a>'
  return alfa
}
//console.log(adresatorTabel("GL-TUBUS-A4012061-840", "tubus_1"))

async function copyPages(strona, plik, kod) {
  let lang_alfa = flaga_języka.split('_')
  let lan = lang_alfa[2].toLowerCase()
  //let plik_alfa =""
  let strona_alfa = strona
  plik_alfa = plik
  plik_alfa += ".pdf#"
  //let beta =`pdf_zbior/${lan}/${plik_alfa}page=${strona_alfa}"`
  //window.open(beta)
  let gamma = plik + ".pdf"
  const { PDFDocument } = PDFLib
  const url1 = `pdf_zbior/${lan}/${gamma}`
  //console.log(url1)
  strona_alfa -= 1
  let flaga = new Boolean(false);
  const firstDonorPdfBytes = await fetch(url1).then((response) => {
    if (!response.ok) {
      flaga = false;
      throw new Error(`HTTP error, status = ${response.status}`);
    }
    flaga = true;
    return response.arrayBuffer();
  })
  if (flaga) {
    const firstDonorPdfDoc = await PDFDocument.load(firstDonorPdfBytes)
    const pdfDoc = await PDFDocument.create();
    const [firstDonorPage] = await pdfDoc.copyPages(firstDonorPdfDoc, [strona_alfa])
    const [secondDonorPage] = await pdfDoc.copyPages(firstDonorPdfDoc, [strona_alfa + 1])
    pdfDoc.addPage(firstDonorPage)
    pdfDoc.addPage(secondDonorPage)
    const pdfBytes = await pdfDoc.save()
    download(pdfBytes, kod + ".pdf", "application/pdf");
  } else {
    console.log("Flaga false")
  }

}
