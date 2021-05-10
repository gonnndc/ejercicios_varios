class Auto {
  marca: string;
  modelo: number;
  color: string;

  constructor(marca: string, modelo: number, color: string) {
    (this.marca = marca), (this.modelo = modelo), (this.color = color);
  }
}

class Concesionaria {
  private autosDisp: Auto[];

  agregarAuto(auto: Auto) {
    this.autosDisp.push(auto);
  }

  mostrarAutos() {
    return this.autosDisp;
  }
}

function main() {
  const autito = new Auto("Peugeot", 2020, "negro");

  const concesionaria = new Concesionaria();
  concesionaria.agregarAuto(autito);
  concesionaria.mostrarAutos();
}

main();
