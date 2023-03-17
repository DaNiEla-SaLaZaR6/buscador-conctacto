
import contactos from "./contactos.js"


let info1=document.getElementById("info1")
let info2=document.getElementById("info2")
let info3=document.getElementById("info3")
let info4=document.getElementById("info4")
let info5=document.getElementById("info5")
let formulario=document.getElementById("formulario")
let contactoPersonas=""
let img=document.getElementById=("img")


let datos=[]
formulario.addEventListener("click",(e)=>{
    e.preventDefault()
    if(e.target.id=="agregar"){
      
        if(localStorage.getItem("contactos")==null){
            contactoPersonas=[...contactos]
        }
        else{
            contactoPersonas=JSON.parse(localStorage.getItem("contactos"))
        }

        let misGutos=(info4.value).split(",")
       
        contactoPersonas.push({nombre:info1.value,apellido:info2.value,numero:info3.value,gustos:misGutos,foto:info5.value})
        localStorage.setItem("contactos",JSON.stringify(contactoPersonas))
        

    }
   
    

})

// let array=[{
//     nombre:info1.value,
//     apellido:info2.value,
// }]

// crossOriginIsolated.push(array[0])

// localStorage.setItem()
