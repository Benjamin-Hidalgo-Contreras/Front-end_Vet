function procesar() 
{
    console.log("-- funcion procesar --");

    // Limpiar mensajes de error previos
    LimpiarErrores();

    const formulario = document.getElementById("form_agendamiento");
    const datos_formulario = new FormData(formulario);

    var nombre = datos_formulario.get("campo_nombre");
    var run = datos_formulario.get("campo_run");
    var telefono = datos_formulario.get("campo_telefono");
    var email = datos_formulario.get("campo_email");
    var direccion = datos_formulario.get("campo_direccion");
    var fecha = datos_formulario.get("campo_fecha");
    var hora = datos_formulario.get("campo_hora");

    console.log("nombre = " + nombre);
    console.log("run = " + run);
    console.log("telefono = " + telefono);
    console.log("email = " + email);
    console.log("direccion = " + direccion);
    console.log("fecha = " + fecha);
    console.log("hora = " + hora);

    var todoValido = true;

    //validar nombre
    if(!validarNombre(nombre)) 
    {
        let caja_error = document.getElementById("mensaje_nombre");
        caja_error.innerHTML = "El nombre ingresado no es válido";
        todoValido = false;
    }

    //validar run
    if(!validarRun(run)) 
    {
        let caja_error = document.getElementById("mensaje_run");
        caja_error.innerHTML = "El RUN ingresado no es válido";
        todoValido = false;
    }

    //validar telefono
    if(!validarTelefono(telefono))
    {
        let caja_error = document.getElementById("mensaje_telefono");
        caja_error.innerHTML = "Ingrese un número telefónico válido";
        todoValido = false;
    }

    //validar correo
    if(!validarEmail(email)) 
    {
        let caja_error = document.getElementById("mensaje_email");
        caja_error.innerHTML = "El correo electrónico no es válido";
        todoValido = false;
    }

    //validar direccion
    if(!validarDireccion(direccion)) 
    {
        let caja_error = document.getElementById("mensaje_direccion");
        caja_error.innerHTML = "La dirección ingresada no es válida";
        todoValido = false;
    }

    //validar fecha
    if(!validarCampoVacio(fecha)) 
    {
        let caja_error = document.getElementById("mensaje_fecha");
        caja_error.innerHTML = "Debe seleccionar una fecha de atención";
        todoValido = false;
    }

    //validar hora
    if(!validarCampoVacio(hora)) 
    {
        let caja_error = document.getElementById("mensaje_hora");
        caja_error.innerHTML = "Debe seleccionar una hora de atención";
        todoValido = false;
    }

    if(todoValido) 
    {
        console.log("Formulario válido. Cita lista para procesar.");
    }
       
}

function LimpiarErrores()
{
    let errores = document.querySelectorAll(".mensaje_error");
    errores.forEach(function(caja)
    {
        caja.innerHTML = "";
    });
    
}

function validarNombre(nombre_ingresado) 
{
    //valida que no se ingresen nulos
    if(!nombre_ingresado) return false;
    
    nombre_ingresado = nombre_ingresado.trim();
    var valido = (nombre_ingresado.length > 2);
    valido = valido && isNaN(nombre_ingresado);
    return valido;
}

//validar que el run no venga vacio y tenga un minimo de caracteres
function validarRun(run_ingresado) 
{
    //valida que no se ingresen nulos
    if (!run_ingresado) return false;

    run_ingresado = run_ingresado.trim();
    return run_ingresado.length >= 8;
}

function validarTelefono(telefono_ingresado) 
{
    //valida que no se ingresen nulos
    if (!telefono_ingresado) return false;

    telefono_ingresado = telefono_ingresado.trim();
    return telefono_ingresado.length >= 8;
}

//validar correo que contenga @ y .
function validarEmail(email_ingresado) 
{
    //valida que no se ingresen nulos
    if (!email_ingresado) return false;

    email_ingresado = email_ingresado.trim();
    return email_ingresado.includes("@") && email_ingresado.includes(".");
}

function validarDireccion(direccion_ingresada) 
{
    //valida que no se ingresen nulos
    if(!direccion_ingresada) return false;

    direccion_ingresada = direccion_ingresada.trim();
    return direccion_ingresada.length > 3;
}

//validar que un campo de fecha no este vacio
function validarCampoVacio(texto_ingresado) 
{
    //valida que no se ingresen nulos
    if (!texto_ingresado) return false;
    return texto_ingresado.trim().length > 0;
}