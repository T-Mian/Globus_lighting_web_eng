

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

