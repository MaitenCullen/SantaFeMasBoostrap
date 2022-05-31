

let Formulario_contacto= document.getElementById("formulario_contacto");
Formulario_contacto.addEventListener("submit", validarFormulario);



function validarFormulario(datos){
    datos.preventDefault();
    swal("Gracias por contactarnos!", "Nos estaremos comunicando prontamente", "success");
} 

