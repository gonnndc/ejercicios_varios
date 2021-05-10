import * as jsonfile from "jsonfile";
import * as minimist from "minimist";

function main() {
  const parseo = minimist(process.argv.slice(2));
  const objeto = { deporte: parseo.deporte };
  if (parseo.deporte) {
    const promise = jsonfile.writeFile("./db/deportes.json", objeto);
    promise
      .then((msg) => console.log("Se agrego su deporte al archivo json"))
      .finally((msg) => console.log("Fin"));
  }
}

main();
