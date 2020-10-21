//se crea la función validarFormulario
function validarFormulario()
{
    //se remueve las alertas
    $('.alert').remove(); 

    //declaración de variables
    var nombre=$('#nombre').val(),
        correo=$('#correo').val(),
        asunto=$('#asunto').val(),
        mensaje=$('#mensaje').val();


    //se valida el campo del nombre
    if(nombre=="" || nombre ==null)
    {
        cambiarColor("nombre");
        mostrarAlerta("Campo obligatorio"); //se muestra el mensaje de alerta 
        return false;
    }
    else 
    {
        var expresion= /^[a-zA-ZñÑáéíóúÁÉÍÓÚ ]*$/;
        if(!expresion.test(nombre))
        {
            //mostrara el mensaje de que debe de ingresar un nombre valido
            cambiarColor("nombre");
            mostrarAlerta("No se permite carácteres especiales o números");
            return false;
        }
    }

    //se valida el campo del correo
    if(correo=="" || correo==null){

        cambiarColor("correo");
        mostraAlerta("Campo obligatorio"); // se muestra el mensaje de alerta
        return false;

    }
    else
    {
        var expresion= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
        if(!expresion.test(correo))
        {
            // se mostrara el mesaje que debe ingresar un nombre válido
            cambiarColor("correo");
            mostraAlerta("Por favor ingrese un correo válido");
            return false;
        }
    }

    //se valida el campo del asunto
    if(asunto=="" || asunto ==null)
    {
        cambiarColor("asunto");
        mostrarAlerta("Campo obligatorio"); //se muestra el mensaje de alerta 
        return false;
    }
    else 
    {
        var expresion= /^[,\\.\\a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ ]*$/;
        if(!expresion.test(asunto))
        {
            //mostrara el mensaje de que debe de ingresar un nombre valido
            cambiarColor("asunto");
            mostrarAlerta("No se permite carácteres especiales");
            return false;
        }
    }

    //se valida el campo del mensaje
    if(mensaje=="" || mensaje ==null)
    {
        cambiarColor("mensaje");
        mostrarAlerta("Campo obligatorio"); //se muestra el mensaje de alerta 
        return false;
    }
    else 
    {
        var expresion= /^[,\\.\\a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ ]*$/;
        if(!expresion.test(mensaje))
        {
            //mostrara el mensaje de que debe de ingresar un nombre valido
            cambiarColor("mensaje");
            mostrarAlerta("No se permite carácteres especiales");
            return false;
        }
    }
    $('form').submit();
    return true;
}

$('input').focus(function()
{
    $('.alert').remove();
    colorDefeault('nombre');
    colorDefeault('asunto');
});

$('textarea').focus(function()
{
    $('.alert').remove();
    colorDefeault('mensaje');
});


//se crea una función para cambiar color del borde de los input
function cambiarColor(dato)
{
    $('#' + dato).css
    ({
        border: "1px solid #dd5144"
    });
}

//se crea una función para el color por defecto
function colorDefeault(dato)
{
    $('#' + dato).css
    ({
        border: "1px solid #999"
    });
}

//función para mostrar el mensaje de alerta
function mostrarAlerta(texto)
{
    $('#nombre').before('<div class="alert">Error: '+ texto +'</div>')
}