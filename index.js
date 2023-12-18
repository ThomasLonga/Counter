document.addEventListener("DOMContentLoaded", function () {
  const numCounter = document.getElementById("cont");
  let contador = 0;

  function actualizarContador() {
    numCounter.textContent = contador;
  }

  function incrementarContador() {
    contador++;
    if (contador > 0) {
      numCounter.style.color = "green";
    } else if (contador === 0) {
      numCounter.style.color = "black";
    }
    numCounter.textContent = contador;
  }

  function decrementarContador() {
    contador--;
    if (contador < 0) {
      numCounter.style.color = "red";
    } else if (contador === 0) {
      numCounter.style.color = "black";
    }
    numCounter.textContent = contador;
  }

  function reiniciarContador() {
    contador = 0;
    if (contador === 0) {
      numCounter.style.color = "black";
    }
    numCounter.textContent = contador;
  }

  const increaseButton = document.getElementById("increase");
  const decrementButton = document.getElementById("decrease");
  const resetButton = document.getElementById("reset");

  increaseButton.addEventListener("click", incrementarContador);
  decrementButton.addEventListener("click", decrementarContador);
  resetButton.addEventListener("click", reiniciarContador);

  //   const increaseButton = document.getElementById("increase");
  //   const decrementButton = document.getElementById("decrease");
  //   const resetButton = document.getElementById("reset");
  //   increaseButton.addEventListener("click", function () {
  //     numCounter.innerHTML = contador;
  //     contador++;
  //   });
  //   decrementButton.addEventListener("click", function () {
  //     numCounter.innerHTML = contador;
  //     contador--;
  //   });
  //   resetButton.addEventListener("click", function () {
  //     numCounter.innerHTML = contador;
  //     contador = 0;
  //   });
  actualizarContador();
});
