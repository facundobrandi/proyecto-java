


let total = 0;
const carrito_container = document.querySelector(".carrito");

function init(){

    mostrarBotones();
    mostrarUsuarios();
    actualizarprecio(total);
 }


 function mostrarBotones()
{
    const nodoBoton = document.createElement("button"); //crear boton
    nodoBoton.innerHTML="Ordenar"; // nombre del boton
    nodoBoton.addEventListener("click", ()=>{ 
       ordenarASC(); //evento 
    }); 
    document.body.append(nodoBoton); // se pone con el body
}



function mostrarUsuarios()
{

    let nodoLista = document.querySelector("#listaUsuarios");
    
    if(!nodoLista)
    {
        nodoLista = document.createElement("ul");
        nodoLista.setAttribute("id", "listaUsuarios"); 
    }

    nodoLista.innerHTML="";

    autos.forEach(element=>{
        const nodoEl = document.createElement("li");
        let nombre = `  <div>
                        <h1>${element.nombre}</h1>
                        <p>Precio :  ${element.precio} $ Año : ${element.año}</p>
                        </div>
                      `;
        nodoEl.innerHTML=`${nombre} <button onclick="borrarElemento('${element.id}')">Borrar</button>`;
        nodoEl.innerHTML +=`<button onclick="Comprar('${element.precio}','${element.nombre}','${element.año}')">Comprar</button>`;
        nodoLista.appendChild(nodoEl);
    });
    document.body.append(nodoLista);
}

function ordenarASC()
{
    autos.sort((a,b)=>
    {
        if(a.precio < b.precio)
            return -1;
        else
            return 1;
    });
    mostrarUsuarios();   
}

function borrarElemento(id)
{
    let mapped = autos.map((element)=>element.id);
    let index = mapped.indexOf(id);
    autos.splice(index,1);

    mostrarUsuarios();
}

function Comprar(pr, nombre , año)
{
   const div = document.createElement("div");
   const car = document.querySelector(".carrito");
   const contenido = `<div class="producto">
                    <h2> Auto : ${nombre}</h2>
                    <p>Precio :  ${pr} $ Año : ${año}</p>
                    </Div>`;
                    //console.log(div);
    div.innerHTML = contenido;
    car.append(div);

    total = Number( pr) + total;
    actualizarprecio(total);
}

function actualizarprecio(total)
{
    const precio = document.querySelector(".TOTAL");
    precio.innerHTML = ` EL PRECIO TOTAL ES :${total}`; 
}
