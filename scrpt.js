let totalIngresos = 0
let alumnos = []

function mostrarMenu() {
  alert("Bienvenidos a MusicArte\n" +
    "------------------------\n" +
    "Presione 1 para ver los aranceles\n" +
    "Presione 2 para cargar nombres y aranceles\n" +
    "Presione 3 para ver los alumnos registrados\n" +
    "Presione 4 para buscar un alumno\n" +
    "Presione 5 para filtrar alumnos por arancel\n" +
    "Presione 6 para salir del programa\n" +
    "------------------------")
}

function mostrarAranceles() {
  const arancelesInfo =
    "Aranceles:\n" +
    "-------------------\n" +
    "Arancel 1: $4500\n" +
    "Arancel 2: $5000\n" +
    "Arancel 3: $6000\n" +
    "-------------------"

  alert(arancelesInfo);
}

function agregarAlumno() {
  const nombre = prompt("Ingrese el nombre del alumno:")
  if (!nombre) {
    alert("Por favor, ingrese un nombre válido.")
    return
  }

  const arancelStr = prompt("Ingrese el monto del arancel:")
  const arancel = parseFloat(arancelStr)
  if (isNaN(arancel) || arancel <= 0) {
    alert("Por favor, ingrese un monto de arancel válido.")
    return
  }

  alumnos.push({ nombre, arancel });
  totalIngresos += arancel
  alert(
    "Se agregó el alumno: " +
    nombre +
    "\n" +
    "Monto del arancel: " +
    arancel +
    "\n" +
    "Ingresos totales: " +
    totalIngresos
  )

  mostrarRegistroAlumnos(); // Mostrar registro en la consola después de agregar un alumno
}

function mostrarRegistroAlumnos() {
  console.log("Alumnos registrados:")
  alumnos.forEach(function (alumno) {
    console.log("Nombre: " + alumno.nombre + ", Arancel: " + alumno.arancel)
  });
}

function buscarAlumno() {
  const nombreBuscado = prompt("Ingrese el nombre del alumno a buscar:")
  if (!nombreBuscado) {
    alert("Por favor, ingrese un nombre válido.")
    return
  }

  const resultados = alumnos.filter(function (alumno) {
    return alumno.nombre.toLowerCase() === nombreBuscado.toLowerCase()
  })

  if (resultados.length === 0) {
    alert("No se encontró ningún alumno con ese nombre.")
  } else {
    let mensaje = "Resultados de búsqueda:\n"
    resultados.forEach(function (alumno) {
      mensaje +=
        "Nombre: " + alumno.nombre + ", Arancel: " + alumno.arancel + "\n"
    })
    alert(mensaje)
  }
}

function filtrarAlumnosPorArancel() {
  const arancelFiltroStr = prompt(
    "Ingrese el monto de arancel para filtrar los alumnos:"
  )
  const arancelFiltro = parseFloat(arancelFiltroStr)
  if (isNaN(arancelFiltro) || arancelFiltro <= 0) {
    alert("Por favor, ingrese un monto de arancel válido.")
    return
  }

  const resultados = alumnos.filter(function (alumno) {
    return alumno.arancel === arancelFiltro
  })

  if (resultados.length === 0) {
    alert("No se encontraron alumnos con ese monto de arancel.")
  } else {
    let mensaje = "Resultados de filtrado por arancel:\n"
    resultados.forEach(function (alumno) {
      mensaje +=
        "Nombre: " + alumno.nombre + ", Arancel: " + alumno.arancel + "\n"
    });
    alert(mensaje)
  }
}

function iniciarPrograma() {
  mostrarMenu()

  const opcion = prompt("Ingrese una opción:")
  switch (opcion) {
    case "1":
      mostrarAranceles()
      break
    case "2":
      agregarAlumno()
      break
    case "3":
      mostrarRegistroAlumnos()
      break
    case "4":
      buscarAlumno()
      break
    case "5":
      filtrarAlumnosPorArancel()
      break
    case "6":
      alert("Gracias por elegir MusicArte")
      return
    default:
      alert("Opción inválida. Por favor, ingrese una opción válida.")
      break
  }

  iniciarPrograma()
}

// Iniciar el programa
iniciarPrograma()
