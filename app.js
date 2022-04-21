


let total = 0;
const carrito_container = document.querySelector(".carrito");
let car_titulo =[];

function init(){

    mostrarBotones();
    mostrarUsuarios();
    actualizarprecio(total);
    recuperar();
 }


 function mostrarBotones()
{
    const nodoBoton = document.createElement("button"); //crear boton
    nodoBoton.setAttribute("class","z_index");
    nodoBoton.innerHTML="Ordenar Por Precio"; // nombre del boton
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
        nodoLista = document.createElement("div");
        nodoLista.setAttribute("id", "listaUsuarios"); 
        nodoLista.setAttribute("class", "row");
    }

    nodoLista.innerHTML="";

    autos.forEach(element=>{
        const nodoEl = document.createElement("div");
        nodoEl.setAttribute("class","col-4");
        let nombre = ` 
                        <h1>${element.nombre}</h1>
                        <p>Precio :  ${element.precio} $ Año : ${element.año}</p>
                      `;
        nodoEl.innerHTML=`${nombre} <button onclick="borrarElemento('${element.id}')">Borrar</button>`;
        nodoEl.innerHTML +=`<button onclick="Comprar('${element.precio}','${element.nombre}','${element.año}')">Comprar</button>`;

        /*    const sar = {
                titulo : element.nombre,
                precio : element.precio
            }
            car_titulo.push(sar);
            localStorage.setItem('titulo', JSON.stringify(car_titulo));*/
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
                    const sar = {
                        titulo : nombre,
                        precio : pr,
                        años : año
                    }
                    car_titulo.push(sar);
                    localStorage.setItem('titulo', JSON.stringify(car_titulo));
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



function recuperar() {
    let recuperoLS = JSON.parse(localStorage.getItem('titulo'))
    if(recuperoLS){
      recuperoLS.forEach(item=>{
          console.log(item.nombre );
          Comprar(item.precio,item.titulo, item.años);
      })
    }
  }


  function Borrar_carrito()
  {
      localStorage.clear();
      swal({
        title: "El carrito fue Borrado",
        text: "Refresca la pagina para verlos",
        icon: "success",
      });
  }



  function IF_OR()
  {
      let num = Number(prompt("Ingrese un numero si el numero es 5 o 10 tendra un mensaje positivo"));
        if (num === 5 || num === 10)
        {
            swal({
                title: "El numero es 5 o 10",
                icon: "success"
              });
        }else
        {
            swal({
                title: "El numero no es 5 o 10",
                icon: "warning"
              });
        }
  }