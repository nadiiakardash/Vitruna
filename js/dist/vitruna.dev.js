"use strict";

function openBurger() {
  document.getElementById("vitrunaNav").style.display = "block";
  document.getElementById("vitruna-menu-burger").style.display = "block";
  document.getElementById("vitrunaNav").style.width = "100%";
  document.getElementById("vitrunaNav").style.height = "100%";
  document.getElementById("vitrunaNav").style.position = "fixed";
}

function closeBurger() {
  document.getElementById("vitrunaNav").style.display = "none";
  document.getElementById("vitruna-menu-burger").style.display = "none";
  document.getElementById("vitrunaNav").style.width = "0%";
  document.getElementById("vitrunaNav").style.height = "0%";
  document.getElementById("vitrunaNav").style.position = "none";
}

function chooseItem() {
  var txt = document.getElementById("vitruna_choose-elem");

  if (txt.style.textAlign === "left") {
    txt.style.textAlign = "center";
  } else {
    txt.style.textAlign = "left";
  }

  if (txt.style.border === "none") {
    txt.style.border = "1px solid #666666";
  } else {
    txt.style.border = "none";
  }

  var x = document.getElementById("vitruna_check-list");

  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function buyCoost() {
  var buy = document.getElementById("vitruna_buy-input");

  if (buy.style.display === "none") {
    buy.style.display = "block";
  } else {
    buy.style.display = "none";
  }
}

function Sell() {
  var sell = document.getElementById("vitruna_sell-input");

  if (sell.style.display === "none") {
    sell.style.display = "block";
  } else {
    sell.style.display = "none";
  }
}

function chooseItem2() {
  var txt = document.getElementById("vitruna_choose-elem2");

  if (txt.style.transform === "rotate(180deg)") {
    txt.style.transform = "rotate(0deg)";
  } else {
    txt.style.transform = "rotate(180deg)";
  }

  var x = document.getElementById("vitruna_check-list");

  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function chooseItemTime() {
  var txt = document.getElementById("vitruna_choose-elem3");

  if (txt.style.transform === "rotate(180deg)") {
    txt.style.transform = "rotate(0deg)";
  } else {
    txt.style.transform = "rotate(180deg)";
  }

  var x = document.getElementById("vitruna_alltime");

  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function chooseItemRegion() {
  var txt = document.getElementById("vitruna_choose-elem4");

  if (txt.style.transform === "rotate(180deg)") {
    txt.style.transform = "rotate(0deg)";
  } else {
    txt.style.transform = "rotate(180deg)";
  }

  var x = document.getElementById("vitruna_region");

  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function chooseItemNew() {
  var txt = document.getElementById("vitruna_choose-elem5");

  if (txt.style.transform === "rotate(180deg)") {
    txt.style.transform = "rotate(0deg)";
  } else {
    txt.style.transform = "rotate(180deg)";
  }

  var x = document.getElementById("vitruna_new");

  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
} //


window.onload = function () {
  crear_select();
};

function isMobileDevice() {
  return typeof window.orientation !== "undefined" || navigator.userAgent.indexOf('IEMobile') !== -1;
}

;
var li = new Array();

function crear_select() {
  var div_cont_select = document.querySelectorAll("[data-mate-select='active']");
  var select_ = '';

  for (var e = 0; e < div_cont_select.length; e++) {
    div_cont_select[e].setAttribute('data-indx-select', e);
    div_cont_select[e].setAttribute('data-selec-open', 'false');
    var ul_cont = document.querySelectorAll("[data-indx-select='" + e + "'] > .cont_list_select_mate > ul");
    select_ = document.querySelectorAll("[data-indx-select='" + e + "'] >select")[0];

    if (isMobileDevice()) {
      select_.addEventListener('change', function () {
        _select_option(select_.selectedIndex, e);
      });
    }

    var select_optiones = select_.options;
    document.querySelectorAll("[data-indx-select='" + e + "']  > .selecionado_opcion ")[0].setAttribute('data-n-select', e);
    document.querySelectorAll("[data-indx-select='" + e + "']  > .icon_select_mate ")[0].setAttribute('data-n-select', e);

    for (var i = 0; i < select_optiones.length; i++) {
      li[i] = document.createElement('li');

      if (select_optiones[i].selected == true || select_.value == select_optiones[i].innerHTML) {
        li[i].className = 'active';
        document.querySelector("[data-indx-select='" + e + "']  > .selecionado_opcion ").innerHTML = select_optiones[i].innerHTML;
      }

      ;
      li[i].setAttribute('data-index', i);
      li[i].setAttribute('data-selec-index', e); // funcion click al selecionar 

      li[i].addEventListener('click', function () {
        _select_option(this.getAttribute('data-index'), this.getAttribute('data-selec-index'));
      });
      li[i].innerHTML = select_optiones[i].innerHTML;
      ul_cont[0].appendChild(li[i]);
    }

    ;
  }

  ;
}

var cont_slc = 0;

function open_select(idx) {
  var idx1 = idx.getAttribute('data-n-select');
  var ul_cont_li = document.querySelectorAll("[data-indx-select='" + idx1 + "'] .cont_select_int > li");
  var hg = 0;
  var slect_open = document.querySelectorAll("[data-indx-select='" + idx1 + "']")[0].getAttribute('data-selec-open');
  var slect_element_open = document.querySelectorAll("[data-indx-select='" + idx1 + "'] select")[0];

  if (isMobileDevice()) {
    if (window.document.createEvent) {
      var evt = window.document.createEvent("MouseEvents");
      evt.initMouseEvent("mousedown", false, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
      slect_element_open.dispatchEvent(evt);
    } else if (slect_element_open.fireEvent) {
      slect_element_open.fireEvent("onmousedown");
    } else {
      slect_element_open.click();
    }
  } else {
    for (var i = 0; i < ul_cont_li.length; i++) {
      hg += ul_cont_li[i].offsetHeight;
    }

    ;

    if (slect_open == 'false') {
      document.querySelectorAll("[data-indx-select='" + idx1 + "']")[0].setAttribute('data-selec-open', 'true');
      document.querySelectorAll("[data-indx-select='" + idx1 + "'] > .cont_list_select_mate > ul")[0].style.height = hg + "px";
      document.querySelectorAll("[data-indx-select='" + idx1 + "'] > .icon_select_mate")[0].style.transform = 'rotate(180deg)';
    } else {
      document.querySelectorAll("[data-indx-select='" + idx1 + "']")[0].setAttribute('data-selec-open', 'false');
      document.querySelectorAll("[data-indx-select='" + idx1 + "'] > .icon_select_mate")[0].style.transform = 'rotate(0deg)';
      document.querySelectorAll("[data-indx-select='" + idx1 + "'] > .cont_list_select_mate > ul")[0].style.height = "0px";
    }
  }
} // fin function open_select


function salir_select(indx) {
  var select_ = document.querySelectorAll("[data-indx-select='" + indx + "'] > select")[0];
  document.querySelectorAll("[data-indx-select='" + indx + "'] > .cont_list_select_mate > ul")[0].style.height = "0px";
  document.querySelector("[data-indx-select='" + indx + "'] > .icon_select_mate").style.transform = 'rotate(0deg)';
  document.querySelectorAll("[data-indx-select='" + indx + "']")[0].setAttribute('data-selec-open', 'false');
}

function _select_option(indx, selc) {
  if (isMobileDevice()) {
    selc = selc - 1;
  }

  var select_ = document.querySelectorAll("[data-indx-select='" + selc + "'] > select")[0];
  var li_s = document.querySelectorAll("[data-indx-select='" + selc + "'] .cont_select_int > li");
  var p_act = document.querySelectorAll("[data-indx-select='" + selc + "'] > .selecionado_opcion")[0].innerHTML = li_s[indx].innerHTML;
  var select_optiones = document.querySelectorAll("[data-indx-select='" + selc + "'] > select > option");

  for (var i = 0; i < li_s.length; i++) {
    if (li_s[i].className == 'active') {
      li_s[i].className = '';
    }

    ;
    li_s[indx].className = 'active';
  }

  ;
  select_optiones[indx].selected = true;
  select_.selectedIndex = indx;
  select_.onchange();
  salir_select(selc);
}