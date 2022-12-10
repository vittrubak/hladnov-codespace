function pohniHadem(dolu, doprava) {
  const had = document.querySelector(".had");
  console.log("Had je na " + had.id);

  let radek = parseInt(had.id.split(":")[0]);
  let sloupec = parseInt(had.id.split(":")[1]);
  const idCil = radek + dolu + ":" + (sloupec + doprava);
  console.log("Had bude na " + idCil);

  const cil = document.getElementById(idCil);
  cil.classList.add("had");
  had.classList.remove("had");
}

function pohyb(udalost) {
  if (udalost.which === 37) {
    console.log("Hade, jdi doleva pls");
    pohniHadem(0, -1);
  }
  if (udalost.which === 38) {
    console.log("Hade, jdi nahoru pls");
    pohniHadem(-1, 0);
  }
  if (udalost.which === 39) {
    console.log("Hade, jdi doprava pls");
    pohniHadem(0, 1);
  }
  if (udalost.which === 40) {
    console.log("Hade, jdi dolů pls");
    pohniHadem(1, 0);
  }
}

document.addEventListener("keydown", pohyb);
