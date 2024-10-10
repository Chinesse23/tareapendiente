import { obtenerProductos, eliminarProducto } from "./api.js";  

const listado = document.querySelector('#listado-Productos'); // Cambiado a “listado-Productos”  

listado.addEventListener('click',confirmarEliminar);
document.addEventListener('DOMContentLoaded', mostrarProductos);  

async function mostrarProductos() {  
    try {  
        const productos = await obtenerProductos();  
        productos.forEach(i => {  
            const { nombre, precio, categoria, id } = i;  
            const row = document.createElement('tr');  
            row.innerHTML += `  
                <td class="px-6 py-4 border-b border-gray-200 whitespace-no-wrap">
                    <p class="font-bold text-sm leading-5 font-medium text-gray-700 text-lg">${nombre}</p>
                </td>  
                <td class="px-6 py-4 border-b border-gray-200 whitespace-no-wrap">
                    <p class="font-bold text-sm leading-5 font-medium text-gray-700 text-lg">${precio}</p>
                </td>  
                <td class="px-6 py-4 border-b border-gray-200 whitespace-no-wrap">
                    <p class="font-bold text-sm leading-5 font-medium text-gray-700 text-lg">${categoria}</p>
                </td>  
                <td class="px-6 py-4 border-b border-gray-200 whitespace-no-wrap">
                    <a class="text-teal-600 hover:text-teal-900 mr-5" href="../editar-producto.html?id=${id}">Editar</a>
                    <a class="text-red-600 hover:text-red-900 eliminar" href="#" data-producto="${id} eliminar">Eliminar</a>
                </td>
            `;  
            listado.appendChild(row);  
        });  
    } catch (error) {  
        console.error('Error al obtener productos:', error);  
    }  
}

async function confirmarEliminar(e){
    if(e.target.classList.contains('eliminar')){
        const productoId = parseInt(e.target.dataset.producto)
        //console.log(productoId) 

        const confirmar = confirm('Quieres eliminar este proucto?')

        if(confirmar){
           await eliminarProducto(productoId)
        }
    }
}