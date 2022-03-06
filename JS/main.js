const main = () => {

    let body = document.getElementsByClassName('tema1');
    
    let opcion = document.querySelector('#slcTemas');

    let btnCambiar = document.querySelector('#btnCambiar');
    btnCambiar.addEventListener('click', cambiarTema);
    
    let mostar = document.getElementById('visible');
    let ocultar = document.getElementById('hidden');
    
    let btnMostar = document.getElementById('visible');
    btnMostar.addEventListener('click', mostrarContenido());
  

    const mostarContenido = ()=>{
        let ocultar = document.getElementById('hidden');
        
        
        if (ocultar.style.display === 'none') {
            //ocultar el contenido
            ocultar.style.displey = 'block';
           
        } else {
            //mostar el contenido
            ocultar.style.displey = 'none';
            
        }
    }
    
    const cambiarTema = () => {

        let body = document.getElementById('tema1');
        let opcion = document.querySelector('#slcTemas');

        switch (Number(opcion.value)) {
            case 1:
                body.classList.add('tema1');
                break;
            case 2:
                body.classList.add('tema2');
                break;
            case 3:
                body.classList.add('tema3');
                break;
            case 4:
                body.classList.add('tema4');
                break;
            default:
                console.log(body);
                break;
        }
    }
     
    
}






