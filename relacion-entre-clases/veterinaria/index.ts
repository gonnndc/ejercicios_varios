class Animal {
  tipo: string;
  raza: string;
  color: string;

  constructor(tipo: string, raza: string, color: string) {
    (this.tipo = tipo), (this.raza = raza), (this.color = color);
  }
}

class Mascota {
  nombre: string;
  tipo: Animal;

  constructor(nombre: string, tipo: Animal) {
    (this.nombre = nombre), (this.tipo = tipo);
  }
}

class Duenio {
  mascota: Mascota;
  nombre: string;
  dni: number;

  constructor(mascota: Mascota, nombre: string, dni: number) {
    (this.mascota = mascota), (this.nombre = nombre), (this.dni = dni);
  }
}

class Veterinaria {
  private duenios: Duenio[];

  sumarDuenio(duenio: Duenio) {
    this.duenios.push(duenio);
  }
}

function main() {
  const perro1 = new Animal("Perro", "Raza Mediana", "Marron y blanco");
  const mascota1 = new Mascota("Flufly", perro1);
  const duenio1 = new Duenio(mascota1, "Javier Mascherano", 33132383);

  const arcaDeNoe = new Veterinaria();
  arcaDeNoe.sumarDuenio(duenio1);
}

main();
