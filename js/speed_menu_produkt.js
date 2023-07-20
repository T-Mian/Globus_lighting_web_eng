//Tomasz Mianecki 
//versja 1

let sped_Menu_web = document.getElementById("spedMenu");

let element=`
<div id="speedProdukt" onclick="speedProdukt()" class="data_hover">
        <i class="fa-solid fa-tags"></i>
        <span data-hover="Produkts">Produkts</span>
      </div>
      <a href="products_led.html">
        <div id="speedProdukt_led">
          <i class="fa-regular fa-lightbulb"></i>
          <span data-hover="Led light"></span>
        </div>
      </a>
      <a href="page_constr.html">
        <div id="speedProdukt_voltaik">
          <i class="fa-solid fa-solar-panel"></i>
          <span data-hover="Solar power"></span>
        </div>
      </a>
      <a href="page_constr.html">
        <div id="speedProdukt_station">
          <i class="fa-solid fa-charging-station fa-flip-horizontal"></i>
          <span data-hover="Car power"></span>
        </div>
      </a>`

sped_Menu_web.innerHTML = element