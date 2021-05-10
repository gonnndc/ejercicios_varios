import * as jsonfile from "jsonfile";
import * as minimist from "minimist";

function recuperarTareas() {
  return jsonfile.readFile("./db/tareas.json");
}

function agregarTarea(opc) {
  return recuperarTareas().then((data) => {
    data.push(opc);
    return jsonfile.writeFile("./db/tareas.json", data).then(() => {
      return "Se agrego la tarea de manera exitosa";
    });
  });
}

function main() {
  const parseo = minimist(process.argv.slice(2));
  if (parseo.tarea) {
    const promise = agregarTarea({ tarea: parseo.tarea });
    promise.then((msg) => console.log(msg));
  }
}

main();
