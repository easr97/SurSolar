let slider = function (sliderElement) {

  let pages = [];
  let currentSlide = 1;
  let isChanging = false;
  let keyUp = { 38: 1, 33: 1 };
  let keyDown = { 40: 1, 34: 1 };

  let init = function () {

    document.body.classList.add('slider__body');

    // controlar el deslizamiento
    whatWheel = 'onwheel' in document.createElement('div') ? 'wheel' : document.onmousewheel !== undefined ? 'mousewheel' : 'DOMMouseScroll';
    window.addEventListener(whatWheel, function (e) {
      console.log("controlando el deslizamiento");
      let direction = e.wheelDelta || e.deltaY;
      if (direction > 0) {
        changeSlide(-1);
      } else {
        changeSlide(1);
      }
    });

    // permitir interacción del teclado
    window.addEventListener('keydown', function (e) {
      console.log("permitir interacción del teclado");
      if (keyUp[e.key]) {
        changeSlide(-1);
      } else if (keyDown[e.key]) {
        changeSlide(1);
      }
    });

    // animación del cambio de página, terminado
    detectChangeEnd() && document.querySelector(sliderElement).addEventListener(detectChangeEnd(), function () {
      console.log("animación del cambio de página, terminado");
      if (isChanging) {
        setTimeout(function () {
          isChanging = false;
          window.location.hash = document.querySelector('[data-slider-index="' + currentSlide + '"]').id;
          console.log("window.location.hash ", window.location.hash);
        }, 400);
      }
    });

    // preparar la página y construir los indicadores visuales
    document.querySelector(sliderElement).classList.add('slider__container');

    console.log("preparar la página y construir los indicadores visuales");
    let indicatorContainer = document.createElement('div');
    indicatorContainer.classList.add('slider__indicators');

    let index = 1;
    [].forEach.call(document.querySelectorAll(sliderElement + ' > *'), function (section) {
      let indicator = document.createElement('a');
      indicator.classList.add('slider__indicator')
      indicator.setAttribute('data-slider-target-index', index);
      indicatorContainer.appendChild(indicator);

      section.classList.add('slider__page');
      pages.push(section);
      section.setAttribute('data-slider-index', index++);
    });

    document.body.appendChild(indicatorContainer);
    document.querySelector('a[data-slider-target-index = "' + currentSlide + '"]').classList.add('slider__indicator--active');


    // para los equipos táctiles
    let touchStartPos = 0;
    let touchStopPos = 0;
    let touchMinLength = 90;
    document.addEventListener('touchstart', function (e) {
      e.preventDefault();
      if (e.type == 'touchstart' || e.type == 'touchmove' || e.type == 'touchend' || e.type == 'touchcancel') {
        let touch = e.touches[0] || e.changedTouches[0];
        touchStartPos = touch.pageY;
      }
    }, { passive: false });
    document.addEventListener('touchend', function (e) {
      e.preventDefault();
      if (e.type == 'touchstart' || e.type == 'touchmove' || e.type == 'touchend' || e.type == 'touchcancel') {
        let touch = e.touches[0] || e.changedTouches[0];
        touchStopPos = touch.pageY;
      }
      if (touchStartPos + touchMinLength < touchStopPos) {
        changeSlide(-1);
      } else if (touchStartPos > touchStopPos + touchMinLength) {
        changeSlide(1);
      }
    });
  };


  // previniendo el doble-deslizamiento
  let detectChangeEnd = function () {
    let transition;
    let e = document.createElement('foobar');
    let transitions = {
      'transition': 'transitionend',
      'OTransition': 'oTransitionEnd',
      'MozTransition': 'transitionend',
      'WebkitTransition': 'webkitTransitionEnd'
    };

    for (transition in transitions) {
      console.log("transition", transition);
      console.log("e.style[transition]", e.style[transition]);
      if (e.style[transition] !== undefined) {
        return transitions[transition];
      }
    }
    return true;
  };


  // lidiando con los cambios del CSS
  let changeCss = function (obj, styles) {
    for (let _style in styles) {
      console.log("obj.style[_style]", obj.style[_style]);
      if (obj.style[_style] !== undefined) {
        obj.style[_style] = styles[_style];
      }
    }
  };

  // manejando el cambio de página/sección
  let changeSlide = function (direction) {

    // estoy en eso, o en la primera/última página; cálmate
    if (isChanging || (direction == 1 && currentSlide == pages.length) || (direction == -1 && currentSlide == 1)) {
      return;
    }

    // cambiar página
    currentSlide += direction;
    isChanging = true;
    changeCss(document.querySelector(sliderElement), {
      transform: 'translate3d(0, ' + -(currentSlide - 1) * 100 + '%, 0)'
    });

    // cambiando los puntos del indicador
    document.querySelector('a.slider__indicator--active').classList.remove('slider__indicator--active');
    console.log('a[data-slider-target-index]', document.querySelector('a[data-slider-target-index="' + currentSlide + '"]'));
    document.querySelector('a[data-slider-target-index="' + currentSlide + '"]').classList.add('slider__indicator--active');
  };

  // ir a una diapositiva específica, si existe
  let gotoSlide = function (where) {
    let target = document.querySelector(where).getAttribute('data-slider-index');
    console.log("Target ", target);
    console.log("CurrentSlide ", currentSlide);
    if (target != currentSlide && document.querySelector(where)) {
      changeSlide(target - currentSlide);
      console.log("changeSlide ", changeSlide);

    }
  };

  // si la página se carga con un hash, ir a la diapositiva
  if (location.hash) {
    setTimeout(function () {
      window.scrollTo(0, 0);
      console.log("location.hash", location.hash);
      gotoSlide(location.hash);
    }, 1);
  };

  // y... despegamos
  if (document.readyState === 'complete') {
    init();
  } else {
    window.addEventListener('onload', init(), false);
  }

  /* Yendo a una sección en específico desde el cintillo 
    de la barra de navegación, o del footer */
  (document).addEventListener("click", function () {
    if (document.activeElement.className == "pres") {
      gotoSlide("#presentacion");
    }
    if (document.activeElement.className == "noso") {
      gotoSlide("#nosotros");
    }
    if (document.activeElement.className == "prod") {
      gotoSlide("#Productos");
    }
    if (document.activeElement.className == "marc") {
      gotoSlide("#marcas");
    }
    if (document.activeElement.className == "cont") {
      gotoSlide("#contacto");
    }
    if (document.activeElement.className == "alpi") {
      gotoSlide("#pie");
    }
  })

  function includeHTML() {
    var z, i, elmnt, file, xhttp;
    /*loop through a collection of all HTML elements:*/
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
      elmnt = z[i];
      /*search for elements with a certain atrribute:*/
      file = elmnt.getAttribute("w3-include-html");
      if (file) {
        /*make an HTTP request using the attribute value as the file name:*/
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
          if (this.readyState == 4) {
            if (this.status == 200) { elmnt.innerHTML = this.responseText; }
            if (this.status == 404) { elmnt.innerHTML = "Page not found."; }
            /*remove the attribute, and call this function once more:*/
            elmnt.removeAttribute("w3-include-html");
            includeHTML();
          }
        }
        xhttp.open("GET", file, true);
        xhttp.send();
        /*exit the function:*/
        return;
      }
    }
  };

}