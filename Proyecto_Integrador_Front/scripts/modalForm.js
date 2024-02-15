const form =  document.getElementById("form");

const datosForm = (form)=>{
    form.addEventListener("click", () => {
        //console.log("quiero vre el formulario")
        document.body.innerHTML +=`
           <div class="modalForm">
           <section>
              <button class="fa-solid fa-xmark" id="closeModal"></button>
              <span>contenido del formulario</span>
              <section>
           </div>
        
        `
        
    })

}
const closeForm = () =>{
document.addEventListener("click", (event) =>{
    if(event.target.id == "closeModal"){
        const modal = document.querySelector(".modalForm");
        modal.remove();
    }

})

}
datosForm(form);
closeForm();


const containerFrom = document.getElementById("container_form");
containerFrom.innerHTML= ``;
