

import url("https://unpkg.co/gsap@3/dist/gsap.min.js")
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


let panels = document.querySelectorAll(".panel_baner");
let fronts = document.querySelectorAll(".front_baner");
let backs = document.querySelectorAll(".back_baner");

function cykl() {
	mirrorTL.restart();
	//titleTL.restart();
	setTimeout(cykl, 6000);
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
				//gsap.to(replay_btn, 1, { opacity: 1 });
			}
		},
		"-=2.3"
	);
