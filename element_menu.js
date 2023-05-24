//Tomasz Mianecki 
//versja 1


const caret_down = "<i class=\"fa fa-caret-down\"></i>"

const caret_right= "<i class=\"fa-solid fa-caret-right\"></i>"

const list_glowne_elementy=["Home1","Products2","Solutions2","Financing1","Realisations2","Blog1","About us2","Contact1"] 

const lista_pod_menu=["LED products0","Industrial photovoltaics0","Car chargers0","LED products catalogue0","Industrial lighting0","Street lighting0","Hotel lighting0","Office lighting0","Commercial facilities lighting0","Sports facilities lighting0","Architectural lighting3","Monuments lighting0","Facade lighting0","Park ang garden lighting0","Parking lighting0","Workshop lighting0","Explosion proof lighting0","Lighting audit0","Main Railway Station in Wroclaw0","Mondelez0","Siegienia Aubi0","Stradom0"," Orlik football field0"," Glassworks lighting0","Production halls lighting0","Opakofarb0","City Forum Archicom0","LG Chem Magazine0","Lorenz Bahlsen Magazine0","Career0"]

const lista_ikons_glowne=["<i class=\"fa-solid fa-house\"></i>","<i class=\"fa-solid fa-tags\"></i>","<i class=\"fa-solid fa-pen-ruler\"></i>","<i class=\"fa-solid fa-dollar-sign\"></i>","<i class=\"fa-solid fa-landmark-dome\"></i>","<i class=\"fa-solid fa-blog\"></i>"," <i class=\"fa-solid fa-passport\"></i>","<i class=\"fa-solid fa-pen-nib\"></i>"]

const lista_adresow = ['home.html','products_led.html','#']

const logo = `
<div>
  <a href="index.html">
    <img id="logos" style="padding:25px;" class="logo_s hexagon_loga"           src="svg/logo_Globus_lighting_FECB00.svg"
    onmouseover="this.src='svg/logo_Globus_lighting.svg'"
    onmouseout="this.src='svg/logo_Globus_lighting_FECB00.svg'">
    </a>
</div>
`
const nav_list_text= '<!--Navigation--> <nav>'
nav_list_text+='<ul class="menu" style="margin-left:10%;">'

list_glowne_elementy.forEach(funkcjaBudującaMenu)
nav_list_text += "</ul>";

function funkcjaBudującaMenu(value){
  let nr= 0
  let wynik = ''
  if ( value.slice(-1) == 1){
    let val =  value.slice(0,-1)
    wynik+= '<li>'+'<a href='+'"#"'+'>'+lista_ikons_glowne[nr] + val+'</a>'+ '</li>'
    nav_list_text+=wynik
    nr+=1
  }
}