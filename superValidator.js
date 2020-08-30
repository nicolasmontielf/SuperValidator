class SuperValidator {
    constructor() {
        this.elementReturn = 'msg_return'
        this.nodeParent = 'form-group'
        this.classError = 'is-invalid'
        this.classSuccess = 'is-valid'
        this.rules = new Object;
        this.esValidoEnviar = true;

        this.validacionNumeros = /^[0-9+]+$/;
        this.validacionRuc = /^[0-9-]+$/;
    }

    limpiarTodo() {
        $("." + this.elementReturn).empty();
        $("." + this.elementReturn).hide();
        $("input").removeClass('is-invalid')
        $("input").removeClass('is-valid')
        return false
    }

    makeValidation(obj) {
        this.rules = obj.rules
        this.actualizarConfig(obj)
        this.limpiarTodo()
        
        for (var campo_individual in this.rules) {
            this.validar(campo_individual, this.rules[campo_individual])
        }
        return this.esValidoEnviar
    }

    validar(campo, reglas) {
        var valor = $("#" + campo).val()

        for (const aux in reglas) {
            if (aux === 'required') {
                if (valor.length < 1) {
                    this.mostrarError(campo, reglas[aux], "error")
                }
            }

            if (aux === 'numeros') {
                if (!valor.match(this.validacionNumeros)) {
                    this.mostrarError(campo, reglas[aux], "error")
                }
            }

            if (aux === 'ruc') {
                if (!valor.match(this.validacionRuc) || !valor.includes('-')) {
                    this.mostrarError(campo, reglas[aux], "error")
                }
            }

            if (aux === 'ci') {
                if (!valor.match(this.validacionRuc)) {
                    this.mostrarError(campo, reglas[aux], "error")
                }
            }

            if (aux === 'email') {
                if (!valor.includes('@')) {
                    this.mostrarError(campo, reglas[aux], "error")
                }
            }

            if (aux.includes('min_')) {
                let cantidad = aux.split('_')[1];
                if (valor.length < cantidad) {
                    this.mostrarError(campo, reglas[aux], "error")
                }
            }

            if (aux.includes('max_')) {
                let cantidad = aux.split('_')[1];
                if (valor.length > cantidad) {
                    this.mostrarError(campo, reglas[aux], "error")
                }
            }

            if (aux.includes('exact_')) {
                let cantidad = aux.split('_')[1];
                if (valor.length != cantidad) {
                    this.mostrarError(campo, reglas[aux], "error")
                }
            }
        }
        return false
    }

    mostrarError(campo, mensaje, type = 'error') {
        const clase_padre = "." + this.nodeParent
        const donde_insertar = "." + this.elementReturn
        const campo_new = "#" + campo;

        const campo_true = $(campo_new).parents(clase_padre).find(donde_insertar)
        
        if (type == 'error') {
            campo_true.append(mensaje + " ").show()
            $(campo_new).addClass(this.classError)
        }
        this.esValidoEnviar = false
        return false
    }

    actualizarConfig(obj) {
        if (obj.hasOwnProperty('elementReturn')) {
            this.elementReturn = obj.elementReturn;
        }
    
        if (obj.hasOwnProperty('nodeParent')) {
            this.nodeParent = obj.nodeParent;
        }
    
        if (obj.hasOwnProperty('classError')) {
            this.classError = obj.classError;
        }
    
        if (obj.hasOwnProperty('classSuccess')) {
            this.classSuccess = obj.classSuccess;
        }
        return false
    }
}
