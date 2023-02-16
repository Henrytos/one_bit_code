const input = document.getElementById("input");

document.getElementById("value").addEventListener("click", function () {
  input.value = "Olá, mundo!";

  console.log(input.value);
  //pega valor predefinido
  console.log(input.getAttribute("value"));
});
