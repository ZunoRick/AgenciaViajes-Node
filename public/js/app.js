
document.addEventListener('DOMContentLoaded', ()=> {
    const errores = document.querySelectorAll('.alert.col.alert-danger');
    for (let index = 0; index < errores.length; index++) {
        setTimeout(() => {
            errores[index].remove();
        }, 3000);
    }
});

