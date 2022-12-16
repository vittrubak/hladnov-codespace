let had = [document.querySelector(".had")]

function pohniHadem(dolu, doprava) {
  const hadHlava = had[0]
  console.log("Had je na " + hadHlava.id);

  let radek = parseInt(hadHlava.id.split(":")[0]);
  let sloupec = parseInt(hadHlava.id.split(":")[1]);
  const idCil = radek + dolu + ":" + (sloupec + doprava);
  console.log("Had bude na " + idCil);

  const cil = document.getElementById(idCil);

  had.unshift(cil); // vloží do pole "cíl" na začátek

  cil.classList.add("had");
  
  if (cil.classList.contains("zradlo")) {
    console.log("had bude zrat")
    cil.classList.remove("zradlo")
    const zradloradek = Math.floor(Math.random() * 5+1);
    const zradlosloupec = Math.floor(Math.random() * 5+1);
    const idZradlo = zradloradek + ":" + zradlosloupec;

    console.log(idZradlo);
    const zradlonekde = document.getElementById(idZradlo)
    zradlonekde.classList.add("zradlo")
    
    
  }
    else {
      const polektereprestavabythadem = had.pop();
      polektereprestavabythadem.classList.remove("had"); }
      
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
