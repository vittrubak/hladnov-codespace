let had = [document.querySelector(".had")]
let tlacitko = document.querySelector(".tlacitko")
let zacateki = null
let x = 0
let y = 1
document.addEventListener("keydown", pohyb);
tlacitko.addEventListener("click", zacatek);


function zacatek() {
  tlacitko.remove()
  zacateki = setInterval(hybani, 600);
}

function hybani() {
  if (x == 0 & y == 0)
    console.log("nebudu se hybat")
  else
    pohniHadem(x, y)
}

function konec(cil){
  if (cil == null) {
    alert("Narazil jsi do zdi:(")
    clearInterval(zacateki)
    location.reload()
  }
  else if (cil.classList.contains("had")) {
    alert("Sebe sežrat nemůžeš!")
    clearInterval(zacateki)
    location.reload()
  }
}

function randomzradlo(){
  const zradloradek = Math.floor(Math.random() * 7 + 1);
  const zradlosloupec = Math.floor(Math.random() * 7 + 1);
  const idZradlo = zradloradek + ":" + zradlosloupec;
  console.log(idZradlo);
  const zradlonekde = document.getElementById(idZradlo)
  zradlonekde.classList.add("zradlo")
}

function pohniHadem(dolu, doprava) {

  const hadHlava = had[0]
  console.log("Had je na " + hadHlava.id);

  let radek = parseInt(hadHlava.id.split(":")[0]);
  let sloupec = parseInt(hadHlava.id.split(":")[1]);
  const idCil = radek + dolu + ":" + (sloupec + doprava);
  console.log("Had bude na " + idCil);

  let cil = document.getElementById(idCil);

  if (cil == null || cil.classList.contains("had")) {
    konec(cil);
    return;
   }

  had.unshift(cil); // vloží do pole "cíl" na začátek


  if (cil.classList.contains("zradlo")) {
    console.log("had bude zrat")
    cil.classList.remove("zradlo")
    randomzradlo();
  }
  
  else {
    const polektereprestavabythadem = had.pop();
    polektereprestavabythadem.classList.remove("had");
  }

  cil.classList.add("had");

}


function pohyb(udalost) {
  if (udalost.which === 37) {
    console.log("Hade, jdi doleva pls");
    x = 0
    y = -1
  }
  if (udalost.which === 38) {
    console.log("Hade, jdi nahoru pls");
    x = -1
    y = 0
  }
  if (udalost.which === 39) {
    console.log("Hade, jdi doprava pls");
    x = 0
    y = 1
  }
  if (udalost.which === 40) {
    console.log("Hade, jdi dolů pls");
    x = 1
    y = 0
  }
}