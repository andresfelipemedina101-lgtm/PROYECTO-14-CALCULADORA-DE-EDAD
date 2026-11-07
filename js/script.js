
    // Activar el calendario

    flatpickr("#fechaNacimiento", {
        dateFormat: "d-m-Y",
        maxDate: "today"
    });


    const formulario = document.getElementById("formularioEdad");
    const campoFecha = document.getElementById("fechaNacimiento");
    const resultado = document.getElementById("resultado");

    // Obtener la libreria Luxon

    const DateTime = luxon.DateTime;


    formulario.addEventListener("submit", function(event) {

        event.preventDefault();

        

        const fechaIngresada = campoFecha.value;

        // Convertir la fecha utilizando Luxon

        const fechaNacimiento = DateTime.fromFormat(fechaIngresada, "d-M-yyyy");


        const fechaActual = DateTime.now().startOf("day");


        if (!fechaNacimiento.isValid) {
            resultado.innerHTML = "La fecha ingresada no es valida.";
            return;
        }

        

        if (fechaNacimiento > fechaActual) {
            resultado.innerHTML = "La fecha no puede ser futura.";
            return;
        }


        const edad = fechaActual.diff(fechaNacimiento, ["years", "months", "days"]).toObject();

        

        resultado.innerHTML = `
            <h3>Tu edad es:</h3>
            <p>${Math.floor(edad.years)} años</p>
            <p>${Math.floor(edad.months)} meses</p>
            <p>${Math.floor(edad.days)} días</p>
        `;

    });
