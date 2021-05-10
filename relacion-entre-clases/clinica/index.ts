class Paciente {
  nombre: string;
  dni: number;

  constructor(nombre: string, dni: number) {
    (this.nombre = nombre), (this.dni = dni);
  }
}

class Especialidad {
  nombre: string;
  profesional: string;

  constructor(nombre: string, profesional: string) {
    (this.nombre = nombre), (this.profesional = profesional);
  }
}

class Clinica {
  private pacientes: Paciente[];
  private especialidades: Especialidad[];

  sumarPaciente(paciente: Paciente) {
    this.pacientes.push(paciente);
  }

  sumarEspecialidad(especialidad: Especialidad) {
    this.especialidades.push(especialidad);
  }
}

function main() {
  const losVenados = new Clinica();
  const paciente1 = new Paciente("Ricardo", 36020123);
  const oftalmologia = new Especialidad("oftalmolgia", "Laura Lopez");

  losVenados.sumarEspecialidad(oftalmologia);
  losVenados.sumarPaciente(paciente1);
}

main();
