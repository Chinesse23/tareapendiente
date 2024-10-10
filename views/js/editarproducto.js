import { obtenerProducto,editarProducto } from "./api.js";
import { mostrarAlerta } from "./mostrarAlerta.js";

(function(){
    const nombreInput = document.querySelector('#nombre');
    const precioInput = document.querySelector('#precio');
    const categoriaInput = document.querySelector('#categoria');
    const idInput = document.querySelector('#id');
    const formulario = document.querySelector('#formulario')

    document.addEventListener('DOMContentLoaded',async()=>{
        const parametroURL = new URLSearchParams(window.location.search);
        //console.log(window.location.search); 
        const idProducto = parseInt(parametroURL.get('id'));
        //console.log(idProducto)

        const producto = await obtenerProducto(idProducto)
        //console.log((producto))

        mostrarProducto(producto);

        //registro de la actualizacion
        formulario.addEventListener('submit',validarProducto);
    })

    function mostrarProducto(producto){
        const {nombre, precio, categoria, id} = producto;

        nombreInput.value = nombre;
        precioInput.value = precio;
        categoriaInput.value = categoria;
        idInput.value = id;
    }

    async function validarProducto(e){
        e.preventDefault();
        const producto ={
            nombre:nombreInput.value,
            precio:precioInput.value,
            categoria:categoriaInput.value,
            id:parseInt(idInput.value)
        }

        if(validar(producto)){
            //console.log('todos los campos son obligatorios')
            mostrarAlerta('todos los campos son obligatorios')
            return;
        }else{
            await editarProducto(producto);
            window.location.href = 'index.html';
        }
    }

    function validar(obj){
        return !Object.values(obj).every(i=>i!=='')  
    }

})();