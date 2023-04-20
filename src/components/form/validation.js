export default function validate(input) {
    let errors = {};
  
    if (!input.name) {
      errors.name = "Se requiere un nombre";
    } else if (!input.name.match(/^[A-Za-z\s]+$/)) {
      errors.name = "Sólo letras por favor";
    }
  
    if (!input.age) errors.age = "Debe seleccionar una opción";
  
    if (!input.gender) {
      errors.gender = "Este campo es obligatorio";
    }
  
    if (!input.description) {
      errors.description = "Este campo es obligatorio";
    }
    if (!input.image) {
      errors.image = "Se requiere una imagen"
    }
  
    if (!input.state) {
      errors.state = "Debe seleccionar una opción";
    }   
    return errors;
  }