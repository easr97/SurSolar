let form = document.querySelector('form');
let nombre = document.getElementById("nombre");
let email = document.getElementById("email");
let phone = document.getElementById("phone");
let message = document.getElementById("message");
let ventas = document.getElementById('ventas');
let servic = document.getElementById('servic');
let rubro = document.getElementById("rubro");
let subject = "Consulta por ";

/* 
    Host: "smtp.elasticemail.com",
    Username: "easr01@gmail.com",
    Password: "6D384F18DA6C57DBF44F3141B231C5BEF30B",

*/

function sendEmail() {
  const bodymessage = 'Nombre: $(nombre.value)<br>Correoe: $(email.value)<br>Telefono: $(phone.value)<br>Asunto: '+ subject +'<br>Rubro: $(rubro.value)';
  Email.send({
    SecureToken: "60844d32-aac7-4013-a4c7-f93ab7a4fefa",
    To: "easr01@gmail.com",
    From: "easr01@gmail.com",
    Subject: subject,
    Body: bodymessage
  }).then(
    message => {
      console.log(message);
      if (message != "Ok") {
        
        Swal.fire({
          title: "Exito!",
          text: "Mensaje Enviado!",
          icon: "success"
        });
      }
    }
  );
}

function checkRadio() {
  // checking if any radio button is selected
  if (ventas.checked) {
    subject = subject + ventas.value;
  }
  if (servic.checked) {
    subject = subject + servic.value;
  }
  let list = document.getElementById("txt-radio").classList;
  if (servic.checked || ventas.checked) {
    list.remove("rojo");
  } else {
    list.add("rojo");
  }
}

function checkRubro() {
  // checking if any radio button is selected
  let list = document.getElementById("txt-rubro").classList;
  if (rubro.value.trim() == "") {
    list.add("rojo");
  } else {
    list.remove("rojo");
  }
}

function checkInputs() {
  let items = document.querySelectorAll(".item");
  /* console.log("Items: ", items); */
  for (let item of items) {
    if (item.value.trim() == "") {
      item.classList.add("error");
      item.parentElement.classList.add("error");
    }

    if (items[1].value != "") {
      checkEmail();
    }

    items[1].addEventListener("keyup", () => {
      checkEmail();
    });

    item.addEventListener("keyup", () => {
      if (item.value != "") {
        item.classList.remove("error");
        item.parentElement.classList.remove("error");
      } else {
        item.classList.add("error");
        item.parentElement.classList.add("error");
      }
    });
  }
}

function checkEmail() {
  let emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let errorTxtEmail = document.querySelector(".error-txt.email");
  /*   console.log("errorTxtEmail: ", errorTxtEmail); */
  if (!email.value.match(emailRegex)) {
    email.classList.add("error");
    email.parentElement.classList.add("error");
    /*     console.log("Lo que va: ", email.value); */
    if (email.value != "") {
      errorTxtEmail.innerText = "Ingrese una dirección de correo válida";
    } else {
      errorTxtEmail.innerText = "El Correoe no debe quedar en blanco";
    }
  } else {
    email.classList.remove("error");
    email.parentElement.classList.remove("error");
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkRadio();
  checkRubro();
  checkInputs();

  console.log("Radio ",document.getElementById("txt-radio").classList);
  console.log("Rubro ",document.getElementById("txt-rubro").classList);

  if (!document.getElementById("txt-radio").classList.contains("rojo") && !document.getElementById("txt-rubro").classList.contains("rojo")  && !nombre.classList.contains("error") && !email.classList.contains("error") && !phone.classList.contains("error")) {
    console.log("Ok"); 
    sendEmail();
  }
})