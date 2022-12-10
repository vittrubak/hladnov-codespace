const had = [document.querySelector('.had')]

function pohniHadem(dolu, doprava) {
  
  console.log("Had je na " + had.id)

  let x = parseInt(had[0].id.split(":")[0])
  let y = parseInt(had[0].id.split(":")[1])
  const idCil = (x + dolu) + ":" + (y + doprava)
  console.log("Had bude na " + idCil)

  const cil = document.getElementById(idCil)
  cil.classList.add("had")
  had.unshift(cil)
  
  const posledni = had.pop()
  posledni.classList.remove("had")
}

function pohyb(udalost) {
  if (udalost.which === 37) {
    console.log('Hade, jdi doleva pls')
    pohniHadem(0, -1)
  }
  if (udalost.which === 38) {
    console.log('Hade, jdi nahoru pls')
    pohniHadem(-1, 0)
  }
  if (udalost.which === 39) {
    console.log('Hade, jdi doprava pls')
    pohniHadem(0, 1)
  }
  if (udalost.which === 40) {
    console.log('Hade, jdi dolů pls')
    pohniHadem(1, 0)
  }
}

document.addEventListener('keydown', pohyb)
