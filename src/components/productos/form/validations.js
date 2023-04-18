
export default function validate(input) {
    let errors = {};
  
    if (!input.name) {
      errors.name = "Se requiere un nombre";
    }
  
    if (!input.price) errors.price = "Debe seleccionar una opción";
  else if (input.price < 0 )errors.price ="Debe ser igual o superior a 0"
    if (!input.stock) {
      errors.stock = "Este campo es obligatorio";
    }
    else if (input.stock < 0 )errors.stock ="Debe ser igual o superior a 0"
  
    if (!input.summary) {
      errors.summary = "Este campo es obligatorio";
    }
    if (!input.image) {
      errors.image = "Se requiere una imagen";
    }
    if(!input.categoryId){
        errors.categoryId = "Debe seleccionar una categoria"
    }
  
    return errors;
  }