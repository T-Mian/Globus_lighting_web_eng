

let obiekt_menu_ang = `          <li>
            <a href="index.html">
              <i class="fa-solid fa-house"></i>
              Home
            </a>
          </li>
          <li class="dropdown_menu">
            <a href="products_led.html">
              <i class="fa-solid fa-tags"></i>
              <span>
                Products
              </span>
              <i class="fa fa-caret-down"></i>
            </a>
            <div class="dropdown-content">
              <a href="products_led.html">
                <i class="fa-regular fa-lightbulb"></i>
                LED products
              </a>
              <a href="page_constr.html">
                <i class="fa-solid fa-solar-panel"></i>
                Industrial photovoltaics
              </a>
              <a href="page_constr.html">
                <i class="fa-solid fa-charging-station fa-flip-horizontal"></i>
                Car chargers
              </a>
              <a href="page_constr.html">
                <i class="fa-regular fa-folder-open"></i>
                LED products catalogue
              </a>
            </div>
          </li>
          <li class="dropdown_menu">
            <a href="solutions.html">
              <i class="fa-solid fa-pen-ruler"></i>
              <span>
                Solutions
              </span>
              <i class="fa fa-caret-down"></i>
            </a>
            <div class="dropdown-content">
              <a href="financing.html">
                <i class="fa-solid fa-dollar-sign"></i>
                Financing
              </a>
              <a href="solutions_folder/industrial_LED.html">
                <i class="fa-solid fa-industry"></i>
                Industrial lighting</a>
              <a href="solutions_folder/street_lighting_ENEC.html">
                <i class="fa-solid fa-road"></i>
                Street lighting</a>
              <a href="solutions_folder/hotel_lighting.html">
                <i class="fa-solid fa-hotel"></i>
                Hotel lighting</a>
              <a href="solutions_folder/office_lighting.html">
                <i class="fa-solid fa-briefcase"></i>
                Office lighting </a>
              <a href="solutions_folder/lighting_of_shops.html">
                <i class="fa-solid fa-basket-shopping"></i>
                Commercial facilities lighting </a>
              <a href="solutions_folder/lighting_sports_facilities.html">
                <i class="fa-solid fa-volleyball"></i>
                Sports facilities lighting </a>
              <a href="solutions_folder/architectural_lighting.html">
                <i class="fa-solid fa-city"></i>
                Architectural lighting</a>
              <a href="solutions_folder/lighting_of_historic_buildings.html">
                <i class="fa-solid fa-monument"></i>
                Monuments lighting</a>
              <a href="solutions_folder/facade_lighting.html">
                <i class="fa-solid fa-archway"></i>
                Facade lighting</a>
              <a href="solutions_folder/park_and_garden.html">
                <i class="fa-solid fa-clover"></i>
                Park and garden lighting</a>
              <a href="solutions_folder/parking_lighting.html">
                <i class="fa-solid fa-square-parking"></i>
                Parking lighting</a>
              <a href="solutions_folder/workshop_lighting.html">
                <i class="fa-solid fa-pen-ruler"></i>
                Workshop lighting </a>
              <a href="solutions_folder/explosion_proof_lighting.html">
                <i class="fa-solid fa-explosion"></i>
                Explosion proof lighting </a>
              <a href="solutions_folder/lighting_audit.html">
                <i class="fa-solid fa-microscope"></i>
                Lighting audit </a>
            </div>
          </li>
          <li>
            <a href="lighting_design.html">
              <i class="fa-solid fa-compass-drafting"></i>
              Projects
            </a>
          </li>
          <li class="dropdown_menu">
            <a href="realisations.html">
              <i class="fa-solid fa-landmark-dome"></i>
              <span>
                Realisations
              </span>
              <i class="fa fa-caret-down"></i>
            </a>
            <div class="dropdown-content">
              <a href="page_constr.html">
                Main Railway Station in Wroclaw
              </a>
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
            <a href="blog.html">
              <i class="fa-solid fa-blog"></i>
              Blog
            </a>
          </li>
          <li class="dropdown_menu">
            <a href="about_us.html">
              <i class="fa-solid fa-passport"></i>
              About us
              <i class="fa fa-caret-down"></i>
            </a>
            <div class="dropdown-content">
              <a href="career.html">
                <i class="fa-regular fa-id-badge"></i>
                Career</a>
              <a href="contact.html">
                <i class="fa-solid fa-pen-nib"></i>
                Contact
              </a> 
            </div>
          </li>
          <li class="dropdown_menu">
            <a href="">
              <i class="fa-solid fa-language"></i>
              &nbsp
              <i class="fa fa-caret-down"></i>
            </a>
            <div class="dropdown-content">
              <a href="../wersja_pl/home.html">
                <i class="fa-solid fa-flag"></i>
                Polski
                </a>
              <a href="wersja_fr/page_d'accueil.html">
                <i class="fa-solid fa-flag"></i>
                French
              </a>
            </div>
          </li>
          <li id="closeBurger" onclick="togleMenu()"><i class="fa-solid fa-bars-staggered"></i></li>
          `

let obiekt_menu_fr=`<li>
            <a href="page_d'accueil.html">
              <i class="fa-solid fa-house"></i>
              Home
            </a>
          </li>
          <li class="dropdown_menu">
            <a href="../products_led.html?lang=fr">
              <i class="fa-solid fa-tags"></i>
              <span>
                Des produits
              </span>
              <i class="fa fa-caret-down"></i>
            </a>
            <div class="dropdown-content">
              <a href="page_en_construction.html">
                <i class="fa-regular fa-lightbulb"></i>
                Luminaires à LED
              </a>
              <a href="page_en_construction.html">
                <i class="fa-solid fa-solar-panel"></i>
                Photovoltaïque industriel
              </a>
              <a href="page_en_construction.html">
                <i class="fa-solid fa-charging-station fa-flip-horizontal"></i>
                Chargeurs de voiture
              </a>
              <a href="page_en_construction.html">
                <i class="fa-regular fa-folder-open"></i>
                Catalogue produits
              </a>
            </div>
          </li>
          <li class="dropdown_menu">
            <a href="page_en_construction.html">
              <i class="fa-solid fa-pen-ruler"></i>
              <span>
                Solutions
              </span>
              <i class="fa fa-caret-down"></i>
            </a>
            <div class="dropdown-content">
              <a href="page_en_construction.html">
                <i class="fa-solid fa-dollar-sign"></i>
                Financement
              </a>
              <a href="page_en_construction.html">
                <i class="fa-solid fa-industry"></i>
                Éclairage industriel </a>
              <a href="page_en_construction.html">
                <i class="page_en_construction.html"></i>
                Lampadaires</a>
              <a href="page_en_construction.html">
                <i class="fa-solid fa-hotel"></i>
                Éclairage d'hôtel</a>
              <a href="page_en_construction.html">
                <i class="fa-solid fa-briefcase"></i>
                Éclairage de bureau </a>
              <a href="page_en_construction.html">
                <i class="fa-solid fa-basket-shopping"></i>
                Éclairage commercial</a>
              <a href="page_en_construction.html">
                <i class="fa-solid fa-volleyball"></i>
                Éclairage des installations sportives</a>
              <a href="page_en_construction.html">
                <i class="fa-solid fa-city"></i>
                Éclairage architectural</a>
              <a href="page_en_construction.html">
                <i class="fa-solid fa-monument"></i>
                Illumination des monuments</a>
              <a href="page_en_construction.html">
                <i class="fa-solid fa-archway"></i>
                Éclairage de façade</a>
              <a href="page_en_construction.html">
                <i class="fa-solid fa-clover"></i>
                Éclairage de parc et de jardin</a>
              <a href="page_en_construction.html">
                <i class="fa-solid fa-square-parking"></i>
                Éclairage de parking</a>
              <a href="page_en_construction.html">
                <i class="fa-solid fa-pen-ruler"></i>
                Éclairage d'atelier </a>
              <a href="page_en_construction.html">
                <i class="fa-solid fa-explosion"></i>
                Éclairage antidéflagrant</a>
              <a href="page_en_construction.html">
                <i class="fa-solid fa-microscope"></i>
                Audit d'éclairage </a>
            </div>
          </li>
          <li>
            <a href="page_en_construction.html">
              <i class="fa-solid fa-compass-drafting"></i>
              Projets
            </a>
          </li>
          <li class="dropdown_menu">
            <a href="page_en_construction.html">
              <i class="fa-solid fa-landmark-dome"></i>
              <span>
                Réalisations
              </span>
              <i class="fa fa-caret-down"></i>
            </a>
            <div class="dropdown-content">
              <a href="page_en_construction.html">
                Gare principale de Wroclaw
              </a>
              <a href="page_en_construction.html">
                Mondelez</a>
              <a href="page_en_construction.html">
                Siegienia Aubi </a>
              <a href="page_en_construction.html">
                Stradom </a>
              <a href="page_en_construction.html">
                Terrain de football d'Orlik </a>
              <a href="page_en_construction.html">
                Éclairage de verrerie </a>
              <a href="page_en_construction.html">
               Éclairage du hall de production </a>
              <a href="page_en_construction.html">
                Opakofarb </a>
              <a href="page_en_construction.html">
                City Forum Archicom</a>
              <a href="page_en_construction.html">
               LG Chem Magazine</a>
              <a href="page_en_construction.html">
                Lorenz Bahlsen Magazine</a>
            </div>
          </li>
          <li>
            <a href="page_en_construction.html">
              <i class="fa-solid fa-blog"></i>
              Blog
            </a>
          </li>
          <li class="dropdown_menu">
            <a href="page_en_construction.html">
              <i class="fa-solid fa-passport"></i>
              À propos de nous
              <i class="fa fa-caret-down"></i>
            </a>
            <div class="dropdown-content">
              <a href="page_en_construction.html">
                <i class="fa-regular fa-id-badge"></i>
                Carrière</a>
              <a href="page_en_construction.html">
                <i class="fa-solid fa-pen-nib"></i>
                Contact
              </a>
            </div>
          </li>
          <li class="dropdown_menu">
            <a href="">
              <i class="fa-solid fa-language"></i>
              &nbsp
              <i class="fa fa-caret-down"></i>
            </a>
            <div class="dropdown-content">
              <a href="../wersja_pl/home.html">
                <i class="fa-solid fa-flag"></i>
                Polski
                </a>
              <a href="../index.html">
                <i class="fa-solid fa-flag"></i>
                English
              </a>
            </div>
          </li>
          <li id="closeBurger" onclick="togleMenu()"><i class="fa-solid fa-bars-staggered"></i></li>
        </ul>`


let obiekt_menu_pl= ` <li>
            <a href="home.html">
              <i class="fa-solid fa-house"></i>
              Home
            </a>
          </li>
          <li class="dropdown_menu">
            <a href="../products_led.html?lang=pl">
              <i class="fa-solid fa-tags"></i>
              <span>
                Produkty
              </span>
              <i class="fa fa-caret-down"></i>
            </a>
            <div class="dropdown-content">
              <a href="../products_led.html">
                <i class="fa-regular fa-lightbulb"></i>
                Produkty LED
              </a>
              <a href="strona_w_konstrukcji.html">
                <i class="fa-solid fa-solar-panel"></i>
                Fotowoltaika przemysłowa
              </a>
              <a href="strona_w_konstrukcji.html">
                <i class="fa-solid fa-charging-station fa-flip-horizontal"></i>
                Ładowarki do samochodu
              </a>
              <a href="strona_w_konstrukcji.html">
                <i class="fa-regular fa-folder-open"></i>
                Katalog produktów LED
              </a>
            </div>
          </li>
          <li class="dropdown_menu">
            <a href="strona_w_konstrukcji.html">
              <i class="fa-solid fa-pen-ruler"></i>
              <span>
                Rozwiązania
              </span>
              <i class="fa fa-caret-down"></i>
            </a>
            <div class="dropdown-content">
              <a href="strona_w_konstrukcji.html">
                <i class="fa-solid fa-dollar-sign"></i>
                Finansowanie
              </a>
              <a href="strona_w_konstrukcji.html">
                <i class="fa-solid fa-industry"></i>
                Oświetlenie przemysłowe </a>
              <a href="strona_w_konstrukcji.html">
                <i class="fa-solid fa-road"></i>
                Oświetlenie uliczne</a>
              <a href="strona_w_konstrukcji.html">
                <i class="fa-solid fa-hotel"></i>
                Oświetlenie hotelowe</a>
              <a href="strona_w_konstrukcji.html">
                <i class="fa-solid fa-briefcase"></i>
                Oświetlenie biurowe </a>
              <a href="strona_w_konstrukcji.html">
                <i class="fa-solid fa-basket-shopping"></i>
                Oświetlenie obiektów handlowych </a>
              <a href="strona_w_konstrukcji.html">
                <i class="fa-solid fa-volleyball"></i>
                Oświetlenie obiektów sportowych</a>
              <a href="strona_w_konstrukcji.html">
                <i class="fa-solid fa-city"></i>
                Oświetlenie architektoniczne</a>
              <a href="strona_w_konstrukcji.html">
                <i class="fa-solid fa-monument"></i>
                Oświetlenie zabytków</a>
              <a href="strona_w_konstrukcji.html">
                <i class="fa-solid fa-archway"></i>
                Oświetlenie elewacji</a>
              <a href="strona_w_konstrukcji.html">
                <i class="fa-solid fa-clover"></i>
                Oświetlenie parkowe i ogrodowe</a>
              <a href="strona_w_konstrukcji.html">
                <i class="fa-solid fa-square-parking"></i>
                Oświetlenie parkingowe</a>
              <a href="strona_w_konstrukcji.html">
                <i class="fa-solid fa-pen-ruler"></i>
                Oświetlenie warsztatu </a>
              <a href="strona_w_konstrukcji.html">
                <i class="fa-solid fa-explosion"></i>
                Oświetlenie przeciwwybuchowe </a>
              <a href="strona_w_konstrukcji.html">
                <i class="fa-solid fa-microscope"></i>
                Audyt oświetlenia </a>
            </div>
          </li>
          <li>
            <a href="strona_w_konstrukcji.html">
              <i class="fa-solid fa-compass-drafting"></i>
              Projektowanie
            </a>
          </li>
          <li class="dropdown_menu">
            <a href="strona_w_konstrukcji.html">
              <i class="fa-solid fa-landmark-dome"></i>
              <span>
                Realizacje
              </span>
              <i class="fa fa-caret-down"></i>
            </a>
            <div class="dropdown-content">
              <a href="strona_w_konstrukcji.html">
                Dworzec Główny Wrocław
              </a>
              <a href="strona_w_konstrukcji.html">
                Mondelez</a>
              <a href="strona_w_konstrukcji.html">
                Siegienia Aubi </a>
              <a href="v">
                Stradom </a>
              <a href="strona_w_konstrukcji.html">
                Boisko Orlik </a>
              <a href="strona_w_konstrukcji.html">
                Oświetlenie huty szkła </a>
              <a href="strona_w_konstrukcji.html">
                Oświetlenie hali produkcyjnej </a>
              <a href="strona_w_konstrukcji.html">
                Opakofarb </a>
              <a href="strona_w_konstrukcji.html">
                City Forum Archicom</a>
              <a href="strona_w_konstrukcji.html">
                Magazyn LG Chem</a>
              <a href="strona_w_konstrukcji.html">
                Magazyn Lorenz Bahlsen</a>
            </div>
          </li>
          <li>
            <a href="strona_w_konstrukcji.html">
              <i class="fa-solid fa-blog"></i>
              Blog
            </a>
          </li>
          <li class="dropdown_menu">
            <a href="strona_w_konstrukcji.html">
              <i class="fa-solid fa-passport"></i>
              O nas
              <i class="fa fa-caret-down"></i>
            </a>
            <div class="dropdown-content">
              <a href="strona_w_konstrukcji.html">
                <i class="fa-regular fa-id-badge"></i>
                Kariera</a>
              <a href="strona_w_konstrukcji.html">
                <i class="fa-solid fa-pen-nib"></i>
                Kontakt
              </a>
            </div>
          </li>
          <li class="dropdown_menu">
            <a href="">
              <i class="fa-solid fa-language"></i>
              &nbsp
              <i class="fa fa-caret-down"></i>
            </a>
            <div class="dropdown-content">
              <a href="../wersja_fr/page_d'accueil.html">
                <i class="fa-solid fa-flag"></i>
                French
                </a>
              <a href="../index.html">
                <i class="fa-solid fa-flag"></i>
                English
              </a>
            </div>
          </li>
          <li id="closeBurger" onclick="togleMenu()"><i class="fa-solid fa-bars-staggered"></i></li>`


let obiekt_footer_ang =`
      <div class="row_foot">
        <div class="column_foot">
          <h2 style="text-transform: uppercase;letter-spacing: 2.4px;"> <i class="fa-regular fa-address-book"></i>&nbsp
            Contact details </h2>
          <!-- <hr style="background-color: #fecb00;content: '';width: 50%;left:3%;size:5px;"/> -->
          <p> <i class="fa-regular fa-envelope"></i>&nbsp GL Sp. z o.o.<br>
            st. Fabryczna 14<br>
            53-609 Wroclaw <br>
            <br>
            <span> <i class="fa-solid fa-phone"></i>&nbsp Phone:</span>
            <a href="tel:+48713073339">+48 71 307 33 39</a><br>
            <span> <i class="fa-solid fa-globe"></i>&nbsp e-mail:</span>
            <a href="mailto:gl@globuslighting.pl">gl@globuslighting.pl</a>
          </p>
        </div>
        <div class="column_foot">
          <h2 style="content: ''; margin-bottom: 1em;"></h2>
          <p> <span> Globus Lighting</span> comes from the Globus company with nearly 100 years of tradition.We started
            with tools for the industry, now we are a separate
            company who is Polish, <span><a href="solutions_folder/industrial_LED.html">producer of industry </a></span> and specialist
            lighting. LED lighting is amazing saving and durable so we would like
            to invite all interested to contact with us. As a producer of LED lighting
            we create not only for industry but also <a href="solutions_folder/street_lighting_ENEC.html">street</a>, <span><a href="solutions_folder/lighting_of_shops.html"> commercial,</a>
              <a href="solutions_folder/hotel_lighting.html">hotel,</a><a href="solutions_folder/office_lighting.html"> office lighting,</a>
              or for<a href="solutions_folder/workshop_lighting.html"> workshops lighting.</a></span></p>
        </div>
      </div>
      ` 


let obiekt_footer_fr=`<div class="row_foot">
        <div class="column_foot">
          <h2 style="text-transform: uppercase;letter-spacing: 2.4px;"> <i class="fa-regular fa-address-book"></i>&nbsp
            DÉTAILS DU CONTACT </h2>
          <!-- <hr style="background-color: #fecb00;content: '';width: 50%;left:3%;size:5px;"/> -->
          <p> <i class="fa-regular fa-envelope"></i>&nbsp GL Sp. z o.o.<br>
            st. Fabryczna 14<br>
            53-609 Wroclaw <br>
            <br>
            <span> <i class="fa-solid fa-phone"></i>&nbsp Téléphone:</span>
            <a href="tel:+48713073339">+48 71 307 33 39</a><br>
            <span> <i class="fa-solid fa-globe"></i>&nbsp e-mail:</span>
            <a href="mailto:gl@globuslighting.pl">gl@globuslighting.pl</a>
          </p>
        </div>
        <div class="column_foot">
          <h2 style="content: ''; margin-bottom: 1em;"></h2>
          <p> <span> Globus Lighting </span> vient de la société Globus avec près de 100 ans de tradition. Nous avons commencé avec des outils pour l'industrie et nous sommes maintenant une entreprise distincte qui est un fabricant polonais <span><a href="page_en_construction.html">éclairage industriel</a></span> et spécialiste. L'éclairage LED est une économie et une durabilité extraordinaires, toutes les personnes intéressées sont donc invitées à nous contacter. En tant que fabricant d'éclairage LED, nous créons non seulement des luminaires pour l'industrie, mais aussi des <a href="page_en_construction.html">éclairages publics</a>, <a href="page_en_construction.html">commerciaux</a>, <a href="page_en_construction.html">d'hôtels</a>, <a href="page_en_construction.html"> de bureaux</a> et <a href="page_en_construction.html">d'ateliers</a>.
        </div>
      </div>`


let obiekt_footer_pl=` <div class="row_foot">
        <div class="column_foot">
          <h2 style="text-transform: uppercase;letter-spacing: 2.4px;"> <i class="fa-regular fa-address-book"></i>&nbsp
            DANE KONTAKTOWE </h2>
          <!-- <hr style="background-color: #fecb00;content: '';width: 50%;left:3%;size:5px;"/> -->
          <p> <i class="fa-regular fa-envelope"></i>&nbsp GL Sp. z o.o.<br>
            st. Fabryczna 14<br>
            53-609 Wroclaw <br>
            <br>
            <span> <i class="fa-solid fa-phone"></i>&nbsp Telefon:</span>
            <a href="tel:+48713073339">+48 71 307 33 39</a><br>
            <span> <i class="fa-solid fa-globe"></i>&nbsp e-mail:</span>
            <a href="mailto:gl@globuslighting.pl">gl@globuslighting.pl</a>
          </p>
        </div>
        <div class="column_foot">
          <h2 style="content: ''; margin-bottom: 1em;"></h2>
          <p> <span> Globus Lighting </span> wywodzi się z firmy Globus o blisko 100-letniej tradycji. Zaczynaliśmy od narzędzi dla przemysłu, a obecnie jesteśmy oddzielną spółką, która jest polskim producentem <span><a href="strona_w_konstrukcji.html">oświetlenia przemysłowego</a></span> oraz specjalistycznego. Oświetlenie ledowe to niezwykła oszczędność i trwałość, dlatego wszystkich zainteresowanych zapraszamy do kontaktu. Jako producent oświetlenia LED tworzymy nie tylko oprawy dla przemysłu, ale również <a href="strona_w_konstrukcji.html">oświetlenie uliczne</a>, <a href="strona_w_konstrukcji.html">handlowe</a>,  <a href="strona_w_konstrukcji.html">hotelowe</a>, <a href="strona_w_konstrukcji.html">biurowe </a>czy dla<a href="strona_w_konstrukcji.html"> warsztatów</a>.</p>
        </div>
      </div>`


let obiekt_produktY_led_ang =`<h3 style="color:#fecb00;margin-top: 65px;  border-radius:0 25px 25px 0;"><b>Globus Lighting – LED luminaires
            and lighting systems</b></h3>
        <p style="color:#e5e5e5;padding-left:5%;padding-right: 5%;">In Globus Lighting you will find <span>Industrial
            LED luminaires</span>, as well as for offices, <span>architecture</span>, streets, indoor facilities
          <span>and sport</span>.<br> Globus Lighting LED luminaires are characterised by the highest quality, durability
          and energy-efficiency.<br> Thanks to our LED lighting you will cut your costs up to 70% in comparison with
          traditional lighting Our outdoor and indoor lighting is inteligent lighting,<br> which thanks to many kinds of
          sensors and control systems is problem-free and cost-effective.<br> For example, thanks to motion sensorsthe light
          turns on when there are people in the room and thanks to dusk sensors,<br> when it is not possible to work without
          additional light.<br> All this is possible without switching on and manual control.
        </p>
        <h3 style="color:#fecb00;margin-top: 45px;"><b>Available LED luminaires</b></h3>
        <h4 style="color:#fecb00;margin-top: 45px;"><b>Industrial luminaires</b></h4>
        <p style="color:#e5e5e5;padding-left:5%;padding-right: 5%;">In our assortment you will find <span>industrial
            lighting</span>, which are particularly suitable for industrial halls and warehouses.<br> Among the industrial
          luminaires we can mention linear industrial luminaires BSL (30-60-90),<br>linear industrial luminaires BSL
          (120-150),<br> workplace industrial luminaires 24 VDC/AVC,<br> industrial luminaires High Bay BSL 020,<br> industrial
          luminaires High Bay 030,<br>industrial luminaires High Bay BSL,<br> industrial luminaires Herbus and much more. </p>
        <h4 style="color:#fecb00;margin-top: 45px;"><b>Outdoor luminaires and lighting systems</b></h4>
        <p style="color:#e5e5e5;padding-left:5%;padding-right: 5%;">In Globus Lighting you can order also outdoor
          luminaires and lighting systems.<br> Among our outdoor luminaires and lighting systems there are floodlights,<br>
          <span>park luminaires</span> and <span>street luminaires</span> <br>Globus Lighting floodlights are outdoor
          luminaires, but it is also possible to use them indoor,<br> for example in sport facilities.<br> This kind of lighting
          has a wide range of power from 50W to 100W,<br> what makes them useful in many places.<br>
          Other types of our outdoor lighting are park and street luminaires.
        </p>
        <h4 style="color:#fecb00;margin-top: 45px;"><b>Downlight LED luminaires</b></h4>
        <p style="color:#e5e5e5;padding-left:5%;padding-right: 5%;">Our downlight LED luminaires are for example DLA
          Downlight,<br> Downlight and DGS Downlight.<br> Downlight LED luminaires have a wide range of applications,<br> for
          example as <span>Office lighting</span>,<br> <span>hotel lighting</span> <br>As well as lighting in <span>shopping
            centres</span>.<br> All <span>Of our intelligent lightings systems</span> are the best in places where
          automation is important. </p>
        <h4 style="color:#fecb00;margin-top: 45px;"><b>Are you interested in our offer? Contact us!</b></h4>

        `
let obiekt_produktY_led_fr = `<h3 style="color:#fecb00;margin-top: 65px;  border-radius:0 25px 25px 0;"><b>
Globus Lighting – Luminaires et systèmes d’éclairage LED
</b></h3>

        <p style="color:#e5e5e5;padding-left:5%;padding-right: 5%;">
       Chez Globus Lighting, vous trouverez des luminaires LED destinés à des fins industrielles, ainsi que pour les bureaux, les installations architecturales, routières, commerciales et sportives. Les luminaires LED préparés par Globus Lighting se caractérisent par la plus haute qualité, durabilité et efficacité énergétique. Grâce aux luminaires extérieurs LED fabriqués par notre entreprise, vous réduirez vos coûts jusqu'à 70% par rapport à l'éclairage traditionnel.<br><br>
         Les systèmes d'éclairage externe et interne que nous préparons sont un éclairage intelligent qui, grâce à de nombreux capteurs et à un contrôle approprié, est sans problème et économique. Par exemple, grâce aux capteurs de mouvement, la lumière s'allume lorsqu'il y a du monde dans la pièce, et aux capteurs crépusculaires lorsqu'il n'est plus possible de travailler dans la pièce avec de la lumière naturelle. Tout cela sans allumer les luminaires ni la commande manuelle.
        </p>
        <h3 style="color:#fecb00;margin-top: 45px;">
        <b>
        Luminaires LED – types disponibles dans l'assortiment
        </b>
        </h3>
        <h4 style="color:#fecb00;margin-top: 45px;"><b>
        Luminaires industriels Luminaires et systèmes d'éclairage extérieur
        </b>
        </h4>
        <p style="color:#e5e5e5;padding-left:5%;padding-right: 5%;">
        Notre assortiment comprend, entre autres, des luminaires industriels particulièrement adaptés aux halls industriels et aux entrepôts. Parmi les luminaires industriels, on peut citer les luminaires industriels linéaires BSL (30-60-90), les luminaires industriels linéaires BSL (120-150), les luminaires de station industrielle 24 VDC/AVC, les luminaires industriels High Bay BSL 020, les luminaires industriels High Bay BSL 030. , industriels High Bay BSL, luminaires industriels Herbus et bien d'autres.
        </p>
        <h4 style="color:#fecb00;margin-top: 45px;"><b>
        Luminaires et systèmes d’éclairage extérieur
        </b>
        </h4>
        <p style="color:#e5e5e5;padding-left:5%;padding-right: 5%;"> 
       Chez Globus Lighting, vous pouvez également commander des luminaires et des systèmes d’éclairage extérieur. Les appareils et systèmes d’éclairage extérieur comprennent les projecteurs, les luminaires de parc et les luminaires de rue.

Les projecteurs Globus sont des appareils d'éclairage extérieur, ils peuvent également être utilisés à l'intérieur des bâtiments, par exemple dans les installations sportives. Les luminaires extérieurs de ce type ont une puissance variée allant de 50W à 1000W, ce qui leur permet d'être utilisés pour diverses tâches.

Les autres types de luminaires extérieurs de notre assortiment comprennent les luminaires de parc et les luminaires de rue.
        </p>
        <h4 style="color:#fecb00;margin-top: 45px;">
        <b>
       luminaires LED de type Downlight
        </b>
        </h4>
        <p style="color:#e5e5e5;padding-left:5%;padding-right: 5%;">
        Les luminaires downlight LED que nous proposons comprennent le Downlight DLA, le Downlight et le Downlight DGS. Les downlights LED ont une large gamme d'applications, par exemple pour l'éclairage de bureaux, d'hôtels et d'installations commerciales.
Toutes nos solutions sont des éclairages intelligents, parfaits pour les endroits où l'automatisation est importante. </p>
        <h4 style="color:#fecb00;margin-top: 45px;"><b>Êtes-vous intéressé par notre offre? Contactez-nous!</b></h4>
`
let obiekt_produktY_led_pl = `<h3 style="color:#fecb00;margin-top: 65px;  border-radius:0 25px 25px 0;"><b>Globus Lighting – oprawy i systemy oświetleniowe LED</b></h3>

        <p style="color:#e5e5e5;padding-left:5%;padding-right: 5%;">
        W Globus Lighting znajdziesz oprawy LED przemysłowe, jak i dla biur, architektoniczne, uliczne czy do obiektów handlowych i sportowych. Oprawy LED przygotowywane przez Globus Lighting cechują się najwyższą jakością oraz żywotnością i energooszczędnością. Dzięki oprawom oświetlenia zewnętrznego LED produkowanym przez naszą firmę zmniejszysz swoje koszty nawet o 70%, w porównaniu do tradycyjnego oświetlenia.<br><br>
        Przygotowywane przez nas systemy oświetlenia zewnętrznego czy wewnętrznego to inteligentne oświetlenie, które dzięki licznym czujnikom oraz odpowiedniemu sterowaniu jest bezproblemowe i oszczędne. Na przykład dzięki czujnikom ruchu, światło zapala się wtedy, kiedy w pomieszczeniu są ludzie, a czujnikom zmierzchu, wtedy, kiedy w pomieszczeniu praca przy świetle naturalnym jest już niemożliwa. Wszystko to bez włączania opraw oświetleniowych i manualnego sterowania.
        </p>
        <h3 style="color:#fecb00;margin-top: 45px;">
        <b>Oprawy LED – posiadane w asortymencie rodzaje</b>
        </h3>
        <h4 style="color:#fecb00;margin-top: 45px;"><b>
        Oprawy przemysłowe Oprawy i systemy oświetlenia zewnętrznego
        </b>
        </h4>
        <p style="color:#e5e5e5;padding-left:5%;padding-right: 5%;">W naszym asortymencie znajdziesz między innymi oprawy przemysłowe, które szczególnie nadają się do hal przemysłowych i magazynów. Wśród opraw przemysłowych możemy wymienić Oprawy przemysłowe liniowe BSL (30-60-90), oprawy przemysłowe liniowe BSL (120-150), oprawy przemysłowe stanowiskowe 24 VDC/AVC, oprawy przemysłowe High Bay BSL 020, oprawy przemysłowe High Bay BSL 030, oprawy przemysłowe High Bay BSL, oprawy przemysłowe Herbus i wiele innych.
        </p>
        <h4 style="color:#fecb00;margin-top: 45px;"><b>
        Oprawy i systemy oświetlenia zewnętrznego
        </b>
        </h4>
        <p style="color:#e5e5e5;padding-left:5%;padding-right: 5%;"> 
        W Globus Lighting możesz zamówić również oprawy i systemy oświetlenia zewnętrznego. Wśród opraw i systemów oświetlenia zewnętrznego znajdują się naświetlacze, oprawy parkowe i oprawy uliczne.

Naświetlacze Globus to oprawy oświetlenia zewnętrznego, możliwe jest ich stosowanie również wewnątrz budynków, np. w obiektach sportowych. Oprawy oświetlenia zewnętrznego tego typu posiadają różnorodność mocy od 50W do 1000W, co pozwala na zastosowanie ich przy różnorodnych zadaniach.

Innymi rodzajami opraw oświetlenia zewnętrznego w naszym asortymencie są oprawy parkowe oraz oprawy uliczne.
        </p>
        <h4 style="color:#fecb00;margin-top: 45px;">
        <b>
       Oprawy LED typu Downlight
        </b>
        </h4>
        <p style="color:#e5e5e5;padding-left:5%;padding-right: 5%;">Oprawy LED typu Downlight, jakie posiadamy w asortymencie to między innymi Downlight DLA, Downlight oraz Downlight DGS. oprawy LED typu Downlight mają szerokie zastosowanie, np. jako oświetlenie biurowe, oświetlenie hotelowe oraz w obiektach handlowych.
Wszystkie nasze rozwiązania to inteligentne oświetlenie, świetnie sprawdzające się w miejscach, gdzie istotna jest automatyzacja. </p>
        <h4 style="color:#fecb00;margin-top: 45px;"><b>Jesteś zainteresowany naszą ofertą? Skontaktuj się z nami!</b></h4>
`

let obiekt_form_contakt_ang =`      
      <div class="form">
        <div class="row">
          <input type="text" name="name" placeholder="Name (Required)" required pattern=.{3,} id="name"
            data-error-text="Incorrect input for name " />
          <input type="text" name="surname" placeholder="Surname (Required)" required pattern=.{3,} id="name"
            data-error-text="Incorrect input for surname" />
        </div>
        <div class="row">

          <input type="email" name="email" required id="email" data-error-text="Incorrect input email"
            placeholder="E-mail Address (Required)" />
          <input type="tel" name="topic" placeholder="Topic" />
        </div>
        <div class="row2">
          <textarea name="message" required data-error-text="No input" id="message"
            placeholder="Message content"></textarea>
        </div>
        <div class="form-message"></div>
        <div class="row2">
          <input type="submit" value="Send" class="neon" />
        </div>

        <div class="title ">
          <p style="font-size:20px;">Contact in commercial and technical matters</p>
        </div>
        <button class="glowing-btn" style="width: 45%;">
          <a href="tel:+48537119116">
            <span class='glowing-txt'>
              +48 537 119 116
            </span>
          </a>
        </button><span style="padding: 10px;">or</span>
        <button class="glowing-btn" style="width: 45%" ;>
          <a href="tel:+48713073339">
            <span class='glowing-txt'>
              +48 71 307 33 39
            </span>
          </a>
        </button>
      </div>`

let obiekt_form_contakt_fr=`<div class="form">
        <div class="row">
          <input type="text" name="name" placeholder="Nom (requis)" required pattern=.{3,} id="name"
            data-error-text="Avez-vous saisi des données incorrectes ?" />
          <input type="text" name="surname" placeholder="Nom de famille (requis)" required pattern=.{3,} id="name"
            data-error-text="Avez-vous saisi des données incorrectes ?" />
        </div>
        <div class="row">

          <input type="email" name="email" required id="email" data-error-text="Adresse e-mail incorrecte?"
            placeholder="E-mail(requis)" />
          <input type="tel" name="topic" placeholder="Sujet" />
        </div>
        <div class="row2">
          <textarea name="message" required data-error-text="Le message est vide ?" id="message"
            placeholder="Contenu du message"></textarea>
        </div>
        <div class="form-message"></div>
        <div class="row2">
          <input type="submit" value="Send" class="neon" />
        </div>
        <div class="title ">
          <p style="font-size:20px;">Contact en matière commerciale et technique</p>
        </div>
        <button class="glowing-btn" style="width: 45%;">
          <a href="tel:+48537119116">
            <span class='glowing-txt'>
              +48 537 119 116
            </span>
          </a>
        </button><span style="padding: 10px;">ou</span>
        <button class="glowing-btn" style="width: 45%" ;>
          <a href="tel:+48713073339">
            <span class='glowing-txt'>
              +48 71 307 33 39
            </span>
          </a>
        </button>
      </div>`
let obiekt_form_contakt_pl=`      <div class="form">
        <span class="form-row honey-row">
          <label for="honey">Boot trap</label>
          <input type="text" name="honey">
        </span>
        <div class="row">
          <input type="text" name="name" placeholder="Imię (wymagane)" required pattern=.{3,} id="name"
            data-error-text="Błędne wprowadzenie imienia" />
          <input type="text" name="surname" placeholder="Nazwisko (wymagane)" required pattern=.{3,} id="name"
            data-error-text="Błędne wprowadzenie nazwiska" />
        </div>
        <div class="row">

          <input type="email" name="email" required id="email" data-error-text="Nieprawidłowy adres e-mail"
            placeholder="E-mail(wymagane)" />
          <input type="tel" name="topic" placeholder="Temat" />
        </div>
        <div class="row2">
          <textarea name="message" required data-error-text="Pusta wiadomość" id="message"
            placeholder="Treść wiadomości"></textarea>
        </div>
        <div class="form-message"></div>
        <div class="row2">
          <input type="submit" value="Wyslij" class="neon" />
        </div>
        <div class="title ">
          <p style="font-size:20px;">Kontakt w sprawach handlowych i technicznych</p>
        </div>
        <button class="glowing-btn" style="width: 45%;">
          <a href="tel:+48537119116">
            <span class='glowing-txt'>
              +48 537 119 116
            </span>
          </a>
        </button><span style="padding: 10px;">lub</span>
        <button class="glowing-btn" style="width: 45%" ;>
          <a href="tel:+48713073339">
            <span class='glowing-txt'>
              +48 71 307 33 39
            </span>
          </a>
        </button>
      </div>`

// id="menu_in_situ"
// id="menu_in_situ_solution"
//  id="stopka_web"
//  id="stopka_web_solution"
// <p id="services"></p>
//  <script src="js/elementy_enkapsuly.js"></script>
//  <script src="../js/elementy_enkapsuly.js"></script>
// <u id="jezyk_strony" style="color: #222;">0</u>

let flaga_wersji_jezykowej =document.getElementById("jezyk_strony");
let flaga_W_J = flaga_wersji_jezykowej.innerHTML
console.log("flaga_W_J")
console.log(flaga_W_J)

let menu_arr = [obiekt_menu_ang,obiekt_menu_fr,obiekt_menu_pl]

let mont_menu =  document.getElementById("menu_in_situ");

if(mont_menu !=null && flaga_W_J !=null ){
  mont_menu.innerHTML=menu_arr[flaga_W_J]
}
else{
  console.log("Nie znaleziono ID 'menu_in_situ'")
}

let mont_footer =  document.getElementById("stopka_web");

let footer_arr  = [obiekt_footer_ang,obiekt_footer_fr,obiekt_footer_pl]

if(mont_footer !=null && flaga_W_J !=null ){
  mont_footer.innerHTML=footer_arr[flaga_W_J]
}
else{
  console.log("Nie znaleziono ID 'stopka_web'")
}


let mont_produktY_text =  document.getElementById("produktY_text");

let produktY_text_arr =[obiekt_produktY_led_ang,obiekt_produktY_led_fr,obiekt_produktY_led_pl]
if(mont_produktY_text !=null && flaga_W_J !=null ){
  mont_produktY_text.innerHTML=produktY_text_arr[flaga_W_J]
}
else{
  console.log("Nie znaleziono ID 'produktY_text'")
}

let mont_contakt_form = document.getElementById("contactForm");
let contakt_form_arr=[obiekt_form_contakt_ang,obiekt_form_contakt_fr,obiekt_form_contakt_pl]

if(mont_contakt_form !=null && flaga_W_J !=null ){
  mont_contakt_form.innerHTML=contakt_form_arr[flaga_W_J]
}
else{
  console.log("Nie znaleziono ID 'contactForm'")
}

