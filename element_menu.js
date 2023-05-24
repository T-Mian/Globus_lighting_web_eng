//Tomasz Mianecki 
//versja 1


const logo = '<div><a href="index.html"><img id="logos" style="padding:25px;" class="logo_s hexagon_loga" src="svg/logo_Globus_lighting_FECB00.svg" onmouseover="this.src=\'svg/logo_Globus_lighting.svg\'" onmouseout="this.src=\'svg/logo_Globus_lighting_FECB00.svg\'"></a></div>'

document.getElementById("logo_firmy").innerHTML=logo



let nav_list_text='<!--Navigation--><nav><ul class="menu" style="margin-left:10%;"><li><a href="home.html"><i class="fa-solid fa-house"></i>Home</a></li><li class="dropdown_menu"><a href="products_led.html"><i class="fa-solid fa-tags"></i><span>Products</span><i class="fa fa-caret-down"></i></a><div class="dropdown-content"><a href="#">LED products</a><a href="#">Industrial photovoltaics</a><a href="#">Car chargers</a><a href="#">LED products catalogue</a></div></li><li class="dropdown_menu"><a href="#"><i class="fa-solid fa-pen-ruler"></i><span>Solutions</span><i class="fa fa-caret-down"></i></a><div class="dropdown-content"><a href="#">Industrial lighting</a><a href="#">Street lighting</a><a href="#">Hotel lighting</a><a href="#"> Office lighting </a><a href="#"> Commercial facilities lighting </a><a href="#"> Sports facilities lighting </a><span class="side_menu"><a href="#">Architectural lighting<i class="fa-solid fa-caret-right"></i><div class="side-content"><a href="#">Monuments lighting</a><a href="#">Facade lighting</a><a href="#">Park ang garden lighting</a><a href="#"> Parking lighting</a></div></a></span><a href="#"> Workshop lighting </a><a href="#"> Explosion proof lighting </a><a href="#"> Lighting audit </a></div></li><li><a href="#"><i class="fa-solid fa-dollar-sign"></i>Financing</a></li><li class="dropdown_menu"><a href="#"><i class="fa-solid fa-landmark-dome"></i><span>Realisations</span><i class="fa fa-caret-down"></i></a><div class="dropdown-content"><a href="#">Main Railway Station in Wroclaw</a><a href="#">Mondelez</a><a href="#"> Siegienia Aubi </a><a href="#"> Stradom </a><a href="#"> Orlik football field </a><a href="#"> Glassworks lighting </a><a href="#"> Production halls lighting </a><a href="#"> Opakofarb </a><a href="#">City Forum Archicom</a><a href="#">LG Chem Magazine</a><a href="#">Lorenz Bahlsen Magazine</a></div></li><li><a href="#"><i class="fa-solid fa-blog"></i>Blog</a></li><li class="dropdown_menu"><a href="#"><i class="fa-solid fa-passport"></i>About us<i class="fa fa-caret-down"></i></a><div class="dropdown-content"><a href="#">Career</a></div></li><li><a href="#"><i class="fa-solid fa-pen-nib"></i>Contact</a></li></ul></nav>'

document.getElementById("div_menu").innerHTML=nav_list_text


