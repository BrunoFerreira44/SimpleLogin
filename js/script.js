const txtPassword = document.getElementById("password");

document.getElementById("pass-reveal-png").addEventListener("click", () => {
   if (txtPassword.type === "password") {
      txtPassword.type = "text";
   } else {
      txtPassword.type = "password";
   }
});

const teste = document.querySelector("section");
const teste2 = teste.getBoundingClientRect();

/* const txtPassword = document.getElementById("password");

document.getElementById("pass-reveal-png").addEventListener("click", () => {
   if (txtPassword.getAttribute[type] === "password") {
      txtPassword.setAttribute("type", "text");
   } else {
      txtPassword.setAttribute("type", "password");
   }
}); */
