export function testFn(nombre) {
  // Déclarez en dessous :
  let texte = "";

  if (typeof nombre != "number") return "Pas un nombre";
  else if (typeof nombre === "number") {
    console.log(nombre);
    for (let i = 0; i <= 4; i++) {
      if (i != 1) return nombre++;
      else return (texte += toString(nombre++));
    }
  }
  return texte;
}
