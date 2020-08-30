# Super Validator

Super Validator es un pequeño plugin de javascript (jQuery dependiente) para validar tus formularios de html.

### Como usar

  - Descarga el archivo superValidator.js
  - Enlaza el archivo en tu documento html
  - Inicializa la clase en una constante
    ```
    const validator = new SuperValidator;
    ```
- Luego llama a la función makeValidation() del validator y pasale los parametros necesarios (listados más abajo.). A la vez, este retornará un valor true o false, dependiendo de si todos los campos pasaron las validaciones.

   ```
    var esValido = validador.makeValidation(validaciones)
    ```

### Parámetros para la función makeValidation()

Dentro de esta función se pasan todos los parámetros y configuraciones para realizar la validación. Todos los campos a continuación son opcionales, **excepto "rules"**, que contiene un objeto de los campos a validar.

| Parámetro | Valor Default | Descripción
| ------ | ------ | ------ |
| elementReturn | msg_return | Es la clase en la cual será insertada la respuesta en caso de que no haya pasado la validación. Normalmente es un div o un span bajo el input.
| nodeParent | form-group | Es el nodo padre que contiene al input y al elementReturn, es necesario que exista un nodo padre.
| classError | is-invalid | Es la clase que será agregada al input en caso de que no pase la validación.
| rules | Sin valor default | Objecto que contiene los campos y las validaciones a los mismos, este parámetro es explicado en detalle en la siguiente sección.

### Objeto rules

El objecto rules contiene el ID de los campos y las respectivas validaciones, así como los mensajes en caso de que no pasen las validaciones.

    
    rules: {
        "id_campo_nombre": {
            "required": "Este campo es requerido",
            "min_2": "Este campo debe contener por lo menos 2 caracteres."
        }
        "id_campo_ci": {
            "required": "Este campo es requerido",
            "ci": "Este campo es para CI, debe contener solo números",
            "max_8": "Este campo solo permite 8 caracteres."
        }
    }


### Tipos de validaciones

Actualmente se permiten 8 tipos de validaciones, los cuales se explican en la tabla de abajo. Los campos pueden tener la cantidad de validaciones que sean necesarias.

| Tipo de Validación | Descripción
| ------ | ------ |
| required | El campo es requerido. Debe contener por lo menos 1 caracter.
| numeros | El campo solo puede contener valores numéricos.
| ruc | El campo debe contener solo valores numéricos y un guión (-)
| ci | El campo solo puede contener valores numéricos y con posibilidad de un guión.
| email | El campo debe contener por lo menos un "@" y un punto.
| min_8 | El campo debe contener por lo menos la cantidad de caracteres indicada luego del guión bajo. (El 8 es solo de ejemplo).
| max_8 | El campo debe contener solo la cantidad de caracteres indicada luego del guión bajo. (El 8 es solo de ejemplo).
| exact_8 | El campo debe contener la cantidad exacta de caracteres indicada luego del guión bajo. (El 8 es solo de ejemplo).


## Licencia 
MIT
