function Contacto(id, nombres, apellidos, telefono, ubicaciones) {
    this.id = id;
    this.nombres = nombres;
    this.apellidos = apellidos;
    this.telefono = telefono;
    this.ubicaciones = ubicaciones;
  }
  

  const listaDeContactos = [
    new Contacto(1, "Eva", "Reyes", "111 111111",[{ciudad: "Bogotá", direccion: "calle 1"}]),
    new Contacto(2, "José", "Barraquer", "222 222222", [{ciudad: "Bogotá", direccion: "calle 2"}]),
    new Contacto(3, "María", "Vargas", "333 333333", [{ciudad: "Cartagena", direccion: "calle 3"}]),
    new Contacto(4, "Diego", "Oviedo", "444 444444", [{ciudad: "Cali", direccion: "calle 4"}]),
    new Contacto(5, "Juan", "Andrés", "555 555555", [{ciudad: "Medellín", direccion: "calle 5"}]),
  ];
  

  function agregarContacto(id, nombres, apellidos, telefono, ubicaciones) {
    const nuevoContacto = new Contacto(id, nombres, apellidos, telefono, ubicaciones);
    listaDeContactos.push(nuevoContacto);
  }
  

  function borrarContacto(id) {
    const indice = listaDeContactos.findIndex((contacto) => contacto.id === id);
    if (indice !== -1) {
      listaDeContactos.splice(indice, 1);
    }
  }
  
  
  function imprimirContactos() {
    listaDeContactos.forEach((contacto) => {
      console.log(`ID: ${contacto.id}, Nombres: ${contacto.nombres}, Apellidos: ${contacto.apellidos}, Teléfono: ${contacto.telefono}`);
      contacto.ubicaciones.forEach((ubicacion) => {
        console.log(`  Ciudad: ${ubicacion.ciudad}, Dirección: ${ubicacion.dirección}`);
      });
    });
  }

  

  agregarContacto(6, "Pedro", "Andrade", "666 666666", [{ ciudad: "Barranquilla", dirección: "Dirección6" }]);
  borrarContacto(5);
  imprimirContactos();

  function actualizarContacto(id, nuevosDatos) {
    const contacto = listaDeContactos.find((c) => c.id === id);
    if (contacto) {
      // Actualizar las propiedades con los nuevos datos
      Object.assign(contacto, nuevosDatos);
    }
  }