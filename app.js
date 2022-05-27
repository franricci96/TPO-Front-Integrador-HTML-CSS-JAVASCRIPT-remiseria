window.addEventListener('load', ()=> {
    const form = document.querySelector('#formulario')
    const nombre = document.querySelector('#nombre')
    const telefono = document.querySelector('#telefono')
    const mail = document.querySelector('#mail')
    const descripcion = document.querySelector('#descripcion')

    form.addEventListener('submit', (e) => {
        e.preventDefault()
        validaCampos()
    })

    const validaCampos = ()=> {
        const nombreValor = nombre.value.trim()
        const telefonoValor = telefono.value.trim()
        const mailValor = mail.value.trim()
        const descripcionValor = descripcion.value
        

        if(!nombreValor){
            validaFalla(nombre, 'Campo vacío')
        }else{
            validaOk(nombre)
        }

        if(!mailValor){
            validaFalla(mail, 'Campo vacío')
        }else if(!validaMail(mailValor)) {
            validaFalla(mail, 'El e-mail no es válido')
        }else{
            validaOk(mail)
        }

    }

    const validaFalla = (input, msje) => {
        const formControl = input.parentElement
        const aviso = formControl.querySelector('p')
        aviso.innerText = msje

        formControl.className = 'form-control falla'
    }

    const validaOk = (input, msje) => {
        const formControl = input.parentElement
        formControl.className = 'form-control ok'
    }

    const validaMail = (mail) => {
        return /^(([^<>()[]\.,;:\s@"]+(.[^<>()[]\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/.test(mail);
    }


})