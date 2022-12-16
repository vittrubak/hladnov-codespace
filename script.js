let had = [document.querySelector(".had")]

function pohniHadem(dolu, doprava) {
  const hadiHlava = had[0]
  console.log("Had je na " + hadiHlava.id);

  let radek = parseInt(hadiHlava.id.split(":")[0]);
  let sloupec = parseInt(hadiHlava.id.split(":")[1]);
  const idCil = radek + dolu + ":" + (sloupec + doprava);
  console.log("Had bude na " + idCil);

  const cilovePolicko = document.getElementById(idCil);

  had.unshift(cilovePolicko);

  cilovePolicko.classList.add("had");

  if (cilovePolicko.classList.contains("zradlo")) {
    console.log("Had bude žrát");
    cilovePolicko.classList.remove("zradlo");
  } else {
    const polickoKterePrestavaBytHadem = had.pop();
    polickoKterePrestavaBytHadem.classList.remove("had");
  }
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
