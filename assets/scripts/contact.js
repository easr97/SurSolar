const form = document.querySelector('form');
const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const message = document.getElementById("message");

/* 
    Host: "smtp.elasticemail.com",
    Username: "easr01@gmail.com",
    Password: "6D384F18DA6C57DBF44F3141B231C5BEF30B",

*/

function sendEmail() {
  const bodymessage = 'Nombre: $(nombre.value)<br>Correoe: $(email.value)<br>Telefono: $(phone.value)<br>Asunto: $(subject.value)<br>Mensaje: $(message.value)';
  Email.send({
    SecureToken: "60844d32-aac7-4013-a4c7-f93ab7a4fefa",
    To: "easr01@gmail.com",
    From: "easr01@gmail.com",
    Subject: subject,
    Body: bodymessage
  }).then(
    message => {
      if (message == "OK") {
        
        Swal.fire({
          title: "Exito!",
          text: "Mensaje Enviado!",
          icon: "success"
        });
      }
    }
  );
}

function checkInputs() {
  const items = document.querySelectorAll(".item");
  /* console.log("Items: ", items); */
  for (const item of items) {
    if (item.value.trim() == "") {
      item.classList.add("error");
      item.parentElement.classList.add("error");
    }
    console.log("Items: ", items);

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
  const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const errorTxtEmail = document.querySelector(".error-txt.email");
  /*   console.log("errorTxtEmail: ", errorTxtEmail); */
  if (!email.value.match(emailRegex)) {
    email.classList.add("error");
    email.parentElement.classList.add("error");
        console.log("Lo que va: ", email);
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
  checkInputs();

  if (!nombre.classList.contains("error") && !email.classList.contains("error") && !phone.classList.contains("error") && !subject.classList.contains("error") && !message.classList.contains("error")) {
    /* console.log("Ok"); */
    sendEmail();
  }
})