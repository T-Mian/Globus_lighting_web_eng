

//import url("https://unpkg.co/gsap@3/dist/gsap.min.js")
// guzik Go to top "Top"
// Get the button:

let mybutton = document.getElementById("myBtn");

window.addEventListener("scroll", function() {
  myEventHandlers.myFunction();
});

window.addEventListener("scroll", function() {
  myEventHandlers.scrollFunction();
});


const myEventHandlers = {
  scrollFunction: function() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
},

  myFunction: function () {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}
}


// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


//const lista_panelu=["https://www.globuslighting.pl/wp-content/uploads/2014/10/Rozwiazania_przemysl1.png","https://www.globuslighting.pl/wp-content/uploads/2014/10/Warsztat.png","https://www.globuslighting.pl/wp-content/uploads/2014/10/Sklep.png"]
//let celownik_panelu= 0

let panels = document.querySelectorAll(".panel_baner");
let fronts = document.querySelectorAll(".front_baner");
let backs = document.querySelectorAll(".back_baner");
const mirrorTL = gsap.timeline();
const nextTL = gsap.timeline();



function cykl() {
	mirrorTL.restart();
	setTimeout(cykl, 10000);
}

cykl() 


mirrorTL
	.to(fronts, 2.5, { backgroundPosition: "30px 0px", ease: "expo.inOut" })
	.to(panels, 2.5, { z: -300, rotationY: 180, ease: "expo.inOut" }, "-=2.3")
	.from(
		backs,
		2.5,
		{
			backgroundPosition: "-30px 0px",
			ease: "expo.inOut",
			onComplete: () => {
			}
		},
		"-=2.3")
  .to(backs, 2.5, { backgroundPosition: "-30px 0px", ease: "expo.inOut" })
	.to(panels, 2.5, { z:+300, rotationY: -180, ease: "expo.inOut" }, "-=2.3")
  .from(
		fronts,
		2.5,
		{
			backgroundPosition: "30px 0px",
			ease: "expo.inOut",
			onComplete: () => {
			}
		},
		"-=2.3")
	.from(
		backs,
		2.5,
		{
			backgroundPosition: "-30px 0px",
			ease: "expo.inOut",
			onComplete: () => {
			}
		},
		"-=2.3")
	.to(fronts, 2.5, { backgroundPosition: "30px 0px", ease: "expo.inOut" })
	.to(panels, 2.5, { z: 0, rotationY: 0, ease: "expo.inOut" }, "-=2.5")


var aktuall_category =document.getElementById("text_categorii")
aktuall_category='ALL'

var list_zastosowań=["_industr","_line","_tepmer","_specjal","_ex","_zewenetrz","_sport_zew","_ofice","_agro","_archit"]

function display_Mnie(params){

  if (params=='_catalog') {
    for (let staf of list_zastosowań) {
      let staf_id=document.getElementById(staf)
      staf_id.removeAttribute("style")
    }
  }
  else 
  {
    for (let staf of list_zastosowań) {
      if (staf == params) {  
        let staf_id=document.getElementById(staf)
        staf_id.style.display="flex";
        if (params=='_industr' ||params=='_catalog' ) {
          
        } else {
          staf_id.style.marginTop="-39%"
        }

      }
      else {
        let staf_id= document.getElementById(staf)
        staf_id.style.display="none";
        staf_id.style.marginTop="+0%"
      }
    }
  } 
}

function zminaKategorii(text_STR,id_data){
  var categoria = document.getElementById("text_categorii");
  let id_s=id_data.substr(7);
  categoria.innerHTML=text_STR;
  categoria.style.opacity = "1";
  aktuall_category = text_STR;
  display_Mnie(id_s)
}


function pokazHint(text){
  let obecny_opis = document.getElementById("text_categorii");
  let hint = document.getElementById("hint");
  if (obecny_opis != aktuall_category){
      hint.innerHTML= " : "+text;
      hint.style.opacity = "0.5";
    
  }else{
    hint.style.opacity = "0.5";
  }
}

function schowajHint(){
  document.getElementById("hint").innerHTML="";
}

function closeMenu(){
  let nav=document.getElementById("navElement")
  nav.style.visibility = "hidden"
  document.getElementById("burgerMenu").style.visibility="visible"
}

function showMenu(){
  let nav=document.getElementById("navElement")
  let buger=document.getElementById("ikona_bars_staget")
  buger.style.visibility = "visible"
  nav.style.visibility = "visible"
  document.getElementById("burgerMenu").style.visibility="hidden"
}
var flaga_menu = false;

function togleMenu(){
  console.log("start "+flaga_menu)
  if (flaga_menu == false){
    let nav=document.getElementById("navElement")
    let burger=document.getElementById("burgerMenu")
    let burger_stak=document.getElementById("ikona_bars_staget")
    burger.style.visibility = "visible"
    nav.style.visibility = "hidden"
    burger_stak.style.visibility = "hidden"
    
  }
  if(flaga_menu){
    let burger_stak=document.getElementById("ikona_bars_staget")
    let nav=document.getElementById("navElement")
    let burger=document.getElementById("burgerMenu")
    nav.style.visibility = "visible"
    burger_stak.style.visibility = "visible"
    burger.style.visibility = "hidden"
  }
  
  flaga_menu=!flaga_menu;
  console.log("zmiana "+flaga_menu)
}
togleMenu()
var flaga_speedProdukt=false;

function speedProdukt() {
  
  let speedProdukt=document.getElementById("speedProdukt");
  let speedProdukt_led=document.getElementById("speedProdukt_led");
  let speedProdukt_voltaik=document.getElementById("speedProdukt_voltaik");
  let speedProdukt_station=document.getElementById("speedProdukt_station");
  let standart_icon='<i class="fa-solid fa-tags"></i>'
  let close_icon = '<i class="fa-regular fa-circle-xmark"></i>'
  
  if (flaga_speedProdukt==false){
    speedProdukt_led.style.visibility = "hidden"
    speedProdukt_led.style.transition="left 1s,opacity 1s,visibility 500ms"
    speedProdukt_led.style.opacity ="0"
    speedProdukt_led.style.left ="10px"
    speedProdukt_led.style.zIndex="60"
    speedProdukt_voltaik.style.visibility = "hidden"
    speedProdukt_voltaik.style.opacity ="0"
    speedProdukt_voltaik.style.left ="10px"
    speedProdukt_voltaik.style.top="190px"
    speedProdukt_voltaik.style.zIndex="60"
    speedProdukt_voltaik.style.transition="left 1s,top 1s,opacity 1s,visibility 1s"
    speedProdukt_station.style.visibility = "hidden"
    speedProdukt_station.style.opacity ="0"
    speedProdukt_station.style.top="190px"
    speedProdukt_station.style.zIndex="60"
    speedProdukt_station.style.transition="top 1s,opacity 1s,visibility 1s"
    speedProdukt.innerHTML=standart_icon
  }else {
    speedProdukt.innerHTML=close_icon
    speedProdukt_led.style.visibility = "visible"
    speedProdukt_led.style.opacity ="1"
    speedProdukt_led.style.left ="150px"
    speedProdukt_led.style.zIndex="100"
    speedProdukt_led.style.transition="left top 1s,opacity 1s"
    speedProdukt_voltaik.style.visibility = "visible"
    speedProdukt_voltaik.style.opacity ="1"
    speedProdukt_voltaik.style.left ="100px"
    speedProdukt_voltaik.style.top="290px"
    speedProdukt_voltaik.style.zIndex="100"
    speedProdukt_voltaik.style.transition="left 1s,top 1s,opacity 1s"
    speedProdukt_station.style.visibility = "visible"
    speedProdukt_station.style.opacity ="1"
    speedProdukt_station.style.top="350px"
    speedProdukt_station.style.zIndex="100"
    speedProdukt_station.style.transition="top 1s,opacity 1s"
  }
  flaga_speedProdukt=!flaga_speedProdukt
}
speedProdukt()