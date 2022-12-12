const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");
const link4 = document.getElementById("link4");
const link5 = document.getElementById("link5");


const myCollapsible = document.getElementById('navbarNav');
const submit = document.getElementById('boton_submit');
const myModalAlternative = new bootstrap.Modal(document.getElementById('modal'), {})
const nombre_input = document.getElementById("nombre-input");
const correo_input = document.getElementById("correo-input");
const tipo_documento_input = document.getElementById("tipo-documneto-select");
const numero_documento_input = document.getElementById("numero-documento-input");
const telefono_documento_input = document.getElementById("telefono-documento-input");
const check = document.getElementById("check");

const myModalEl = document.getElementById('modal');

const form = document.querySelector("form");

form.addEventListener('submit', (evento) => {

  evento.preventDefault();
  myModalAlternative.show();

})








// submit.addEventListener("click", (evento)=>{
//   evento.preventDefault();
//   myModalAlternative.show();

// })


myModalEl.addEventListener('hidden.bs.modal', event => {
  nombre_input.value = "";
  correo_input.value = "";
  tipo_documento_input.value = "";
  numero_documento_input.value = "";
  telefono_documento_input.value = "";
  check.checked= false;
})



link1.addEventListener('click',()=>{
    const instancia_collapse= bootstrap.Collapse.getOrCreateInstance(myCollapsible);
    
    
    instancia_collapse.hide();
  })

link2.addEventListener('click',()=>{
    const instancia_collapse= bootstrap.Collapse.getOrCreateInstance(myCollapsible);
    
    
    instancia_collapse.hide();
  })

link3.addEventListener('click',()=>{
    const instancia_collapse= bootstrap.Collapse.getOrCreateInstance(myCollapsible);
    
    
    instancia_collapse.hide();
  })

link4.addEventListener('click',()=>{
    const instancia_collapse= bootstrap.Collapse.getOrCreateInstance(myCollapsible);
    
    
    instancia_collapse.hide();
  })

link5.addEventListener('click',()=>{
    const instancia_collapse= bootstrap.Collapse.getOrCreateInstance(myCollapsible);
    
    
    instancia_collapse.hide();
  })