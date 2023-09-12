function Contacto(nombre, telefono) {
    this.nombre = nombre;
    this.telefono = telefono;
  }
  

  const listaDeContactos = [
    new Contacto("Eva Reyes", "111 111111"),
    new Contacto("José Ignacio", "222 222222"),
    new Contacto("María Vargas", "333 333333"),
    new Contacto("Diego Oviedo", "444 444444"),
    new Contacto("Juan Andrés", "555 555555"),
  ];
  

  function agregarContacto(nombre, telefono) {
    const nuevoContacto = new Contacto(nombre, telefono);
    listaDeContactos.push(nuevoContacto);
  }
  

  function borrarContacto(nombre) {
    const indice = listaDeContactos.findIndex((contacto) => contacto.nombre === nombre);
    if (indice !== -1) {
      listaDeContactos.splice(indice, 1);
    }
  }
  
  
  function imprimirContactos() {
    listaDeContactos.forEach((contacto) => {
      console.log(`Nombre: ${contacto.nombre}, Teléfono: ${contacto.telefono}`);
    });
  }

  agregarContacto("Pedro Andrade", "666 666666");
  borrarContacto("Juan Andrés");
  imprimirContactos();