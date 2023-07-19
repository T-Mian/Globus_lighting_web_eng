//Tomasz Mianecki 
//versja 2


let menu_eng =`
        <ul class="menu">
          <li>
            <a href="index.html">
              <i class="fa-solid fa-house"></i>
              Home
            </a>
          </li>
          <li class="dropdown_menu">
            <a href="#">
              <i class="fa-solid fa-tags"></i>
              Products
              <i class="fa fa-caret-down"></i>
            </a>
            <div class="dropdown-content">
              <a href="products_led.html">
                LED products
              </a>
              <a href="page_constr.html">
                Industrial photovoltaics
              </a>
              <a href="page_constr.html">
                Car chargers
              </a>
              <a href="page_constr.html">
                LED products catalogue
              </a>
            </div>
          </li>
          <li class="dropdown_menu">
            <a href="#">
              <i class="fa-solid fa-pen-ruler"></i>
              Solutions
              <i class="fa fa-caret-down"></i>
            </a>
            <div class="dropdown-content">
              <a href="page_constr.html">
                Solutions</a>
              <a href="page_constr.html">
                Industrial lighting</a>
              <a href="page_constr.html">
                Street lighting</a>
              <a href="page_constr.html">
                Hotel lighting</a>
              <a href="page_constr.html">
                Office lighting </a>
              <a href="page_constr.html">
                Commercial facilities lighting </a>
              <a href="page_constr.html">
                Sports facilities lighting </a>
              <a href="page_constr.html">
                Architectural lighting</a>
              <a href="page_constr.html">
                Monuments lighting</a>
              <a href="page_constr.html">
                Facade lighting</a>
              <a href="page_constr.html">
                Park ang garden lighting</a>
              <a href="page_constr.html">
                Parking lighting</a>
              <a href="page_constr.html">
                Workshop lighting </a>
              <a href="page_constr.html">
                Explosion proof lighting </a>
              <a href="page_constr.html">
                Lighting audit </a>
            </div>
          </li>
          <li>
            <a href="financing.html">
              <i class="fa-solid fa-dollar-sign"></i>
              Financing
            </a>
          </li>
          <li class="dropdown_menu">
            <a href="#">
              <i class="fa-solid fa-landmark-dome"></i>
              Realisations
              <i class="fa fa-caret-down"></i>
            </a>
            <div class="dropdown-content">
              <a href="page_constr.html">
                Realisations</a>
              <a href="page_constr.html">
                Main Railway Station in Wroclaw</a>
              <a href="page_constr.html">
                Mondelez</a>
              <a href="page_constr.html">
                Siegienia Aubi </a>
              <a href="page_constr.html">
                Stradom </a>
              <a href="page_constr.html">
                Orlik football field </a>
              <a href="page_constr.html">
                Glassworks lighting </a>
              <a href="page_constr.html">
                Production halls lighting </a>
              <a href="page_constr.html">
                Opakofarb </a>
              <a href="page_constr.html">
                City Forum Archicom</a>
              <a href="page_constr.html">
                LG Chem Magazine</a>
              <a href="page_constr.html">
                Lorenz Bahlsen Magazine</a>
            </div>
          </li>
          <li>
            <a href="page_constr.html">
              <i class="fa-solid fa-blog"></i>
              Blog
            </a>
          </li>
          <li class="dropdown_menu">
            <a href="#">
              <i class="fa-solid fa-passport"></i>
              About us
              <i class="fa fa-caret-down"></i>
            </a>
            <div class="dropdown-content">
              <a href="page_constr.html">About</a>
              <a href="page_constr.html">Career</a>
            </div>
          </li>
          <li>
            <a href="page_constr.html">
              <i class="fa-solid fa-pen-nib"></i>
              Contact
            </a>
          </li>
          <li id="closeBurger" onclick="togleMenu()"><i class="fa-solid fa-xmark"></i></li>
        </ul>`

let menu_eng_web = document.getElementById("navElement");
menu_eng_web.innerHTML=menu_eng
