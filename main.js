import contactos from "./contactos.js"

let buscar=document.getElementById("buscar")
let aceptar=document.getElementById("aceptar")
let nombre=document.getElementById("user")
let opi=document.getElementById("propiedades")
let display=document.getElementById("display")
let perfil=document.getElementById("perfil")
let url=""
let poci=0
let box_perfiles=document.getElementById("box_perfiles")
let personas=""

if(localStorage.getItem("contactos")!=null){
    personas=JSON.parse(localStorage.getItem("contactos"))
}
else{
    personas=contactos
}



buscar.addEventListener("click",function(){
    if(personas.find(personas=>personas.nombre==nombre.value)){
       poci=personas.findIndex(personas=>personas.nombre==nombre.value)
       url=personas[poci].foto   
       perfil.innerHTML=`<img src="${url}" alt="">`
       display.innerHTML=` numero:${personas[poci].numero} <br> apellido: ${personas[poci].apellido} <br> gustos:${personas[poci].gustos[0]}  ${personas[poci].gustos[1]}  ${personas[poci].gustos[2]}  `




       if(opi.value=="apellido"){
     
        display.innerHTML=`apellido:${personas[poci].apellido}`
        

       
        }
        else if(opi.value=="numero"){
            display.innerHTML=`numero:${personas[poci].numero}`
        }
        else if(opi.value=="gustos"){
            display.innerHTML=`gustos:${personas[poci].gustos[0]} <br> ${personas[poci].gustos[1]} <br> ${personas[poci].gustos[2]}  `
        }
        
       
        
        
    }
    
    
})
personas.forEach(imagen=>{
    box_perfiles.innerHTML+=` <img src="${imagen.foto}" alt="">`
})

