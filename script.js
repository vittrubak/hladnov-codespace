let had;
let tlacitko = document.querySelector(".tlacitko")
let tlacitkoGen = document.getElementById("generovat")
let zacateki = null
let x = 0
let y = 1
let mrizka = document.getElementById("plocha");
document.addEventListener("keydown", pohyb);
tlacitko.addEventListener("click", zacatek);
tlacitkoGen.addEventListener("click", mapaGen);
let poleVelikostX;
let poleVelikostY;
let velikostX;
let velikostY;
let pocetpolicek;
let score = 0
let kolikjidla;


function mapaGen() {

  for (const element of mrizka.querySelectorAll("br, .pole")) {
    element.remove()
  }

  poleVelikostX = document.getElementById("velikostX");
  poleVelikostY = document.getElementById("velikostY");
  velikostX = parseInt(poleVelikostX.value);
  velikostY = parseInt(poleVelikostY.value);

  console.log("Měním mřížku na velikost " + velikostX + ":" + velikostY)
  for (let noveX = 1; noveX <= velikostX; noveX++) {
    for (let noveY = 1; noveY <= velikostY; noveY++) {
      const novyDiv = document.createElement("div");
      novyDiv.classList.add("pole");
      novyDiv.id = noveX + ":" + noveY
      mrizka.append(novyDiv);
      console.log("Přidám div s id" + novyDiv.id)
      mrizka.append(" ");
    }
    const noveBr = document.createElement("br");
    mrizka.append(noveBr);
  }
  console.log("uvnitr" + velikostX)
  return spawnHad(), spawnJidlo(), spocitatPole();
}

function spocitatPole() {
 pocetpolicek = velikostX * velikostY
 console.log(pocetpolicek)
 
}

function spawnHad() {
  const spawnHadX = Math.floor(velikostX / 2) 
  const spawnHadY = Math.floor(velikostY / 2)
  const idSpawn = spawnHadX + ":" + spawnHadY
  console.log(idSpawn);
  const spawnkde = document.getElementById(idSpawn)
  spawnkde.classList.add("had");
  had = had = [document.querySelector(".had")]
}

function spawnJidlo() {
  kolikjidla = Math.floor(velikostX / 2)
  for (i = 1; i <= kolikjidla; i++) {
    randomzradlo();
  }

}
function zacatek() {
  tlacitko.remove()
  zacateki = setInterval(hybani, 600);
}

function hybani() {
  if (x == 0 && y == 0)
    console.log("nebudu se hybat")
  else
    pohniHadem(x, y)
}

function vyhra(score) {
if (score === pocetpolicek - kolikjidla) {
  clearInterval(zacateki)
  alert("ZVÍTĚZIL JSI!!!")
  location.reload()
}
else {
  return;
}
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

function randomzradlo() {
  const zradloradek = Math.floor(Math.random() * velikostX + 1);
  const zradlosloupec = Math.floor(Math.random() * velikostY + 1);
  const idZradlo = zradloradek + ":" + zradlosloupec;
  console.log(idZradlo);
  const zradlonekde = document.getElementById(idZradlo)
  if (zradlonekde.classList.contains("had") || zradlonekde.classList.contains("zradlo")) {
    randomzradlo();
    return;
  }
  zradlonekde.classList.add("zradlo")
}

function pohniHadem(dolu, doprava) {

  const hadHlava = had[0]
  console.log("Had je na " + hadHlava.id);

  let radek = parseInt(hadHlava.id.split(":")[0]);
  let sloupec = parseInt(hadHlava.id.split(":")[1]);
  const idCil = radek + dolu + ":" + (sloupec + doprava);
  console.log("Had bude na " + idCil);

  const cil = document.getElementById(idCil);

  if (cil == null || cil.classList.contains("had")) {
    konec(cil);
    return;
  }

  had.unshift(cil); // vloží do pole "cíl" na začátek


  if (cil.classList.contains("zradlo")) {
    console.log("had bude zrat")
    cil.classList.remove("zradlo")
    cil.classList.add("had");
    score += 1 
    document.getElementById("scoreH").innerHTML = score
    vyhra(score), randomzradlo();
  }

  else {
    const polektereprestavabythadem = had.pop();
    polektereprestavabythadem.classList.remove("had");
    cil.classList.add("had");
  }

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
