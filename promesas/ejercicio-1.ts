import * as jsonfile from "jsonfile";

function recuperarFiltrar() {
  jsonfile
    .readFile("./db/heroes.json")
    .then((json) => {
      const primerFiltrado = json.filter((heroe) => heroe.id > 2);
      return primerFiltrado;
    })
    .then((filtrado) => {
      const busqueda = filtrado.filter((heroe) => heroe.poder == "Dinero");
      return busqueda;
    })
    .then((segFiltrado) => {
      const busqueda = segFiltrado.find((heroe) => heroe.id == 7);
      console.log(busqueda);
    })
    .catch((err) => console.log(err))
    .finally(() => console.log("Busqueda y filtracion finalizada"));
}

function main() {
  recuperarFiltrar();
}

main();
