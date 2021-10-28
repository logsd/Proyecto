
window.addEventListener('DOMContentLoaded',()=>{
  const contadores = document.querySelectorAll('.contador_cantidad')
  const velocidad= 1000

  const animarContadores = () =>{
    for (const contador of contadores) {
        const actualizar_contador = () =>{
          let cantidad_maxima = +contador.dataset.cantidadTotal,
          valor_actual = +contador.innerText,
          incremento = cantidad_maxima/velocidad

          if(valor_actual < cantidad_maxima){
              contador.innerText =Math.ceil(valor_actual + incremento)
              setTimeout(actualizar_contador, 5)
          }else{
              contador.innerText = cantidad_maxima
          }
        }
        actualizar_contador()
    }
  }

  //IntersectionObserver

  const mostrarContadores = elementos =>{
    elementos.forEach(elemento =>{
      if(elemento.isIntersecting){
          elemento.target.classList.add('animar')
          elemento.target.classList.remove('ocultar')
          setTimeout(animarContadores, 300)
      }
    })
  }

  const observer = new IntersectionObserver(mostrarContadores, {
    threshold:0.75
  })

  const elementosHTML = document.querySelectorAll('.contador')
  elementosHTML.forEach(elementoHTML =>{
    observer.observe(elementoHTML)
  })

} )

window.addEventListener('scroll',function(){
  let animacion = this.document.getElementById('animado');
  let posicionObj1 = animacion.getBoundingClientRect().top;
  console.log(posicionObj1);
  let tamañoDePantalla = window.innerHeight/2;

  if(posicionObj1 < tamañoDePantalla){
    animacion.style.animation = 'mover 1s ease-out'
  }
})
window.addEventListener('scroll',function(){
  let animacion = this.document.getElementById('line');
  let posicionObj1 = animacion.getBoundingClientRect().top;
  console.log(posicionObj1);
  let tamañoDePantalla = window.innerHeight;

  if(posicionObj1 < tamañoDePantalla){
    animacion.style.animation = 'mover 1s ease-out'
  }
})


window.addEventListener('scroll',function(){
  let animacion1 = this.document.getElementById('animado2');
  let posicionObj2 = animacion1.getBoundingClientRect().top;
  console.log(posicionObj2);
  let tamañoDePantalla = window.innerHeight;

  if(posicionObj2 < tamañoDePantalla){
    animacion1.style.animation = 'mover1 2s ease-out'
  }
})

window.addEventListener('scroll',function(){
  let animacion1 = this.document.getElementById('animado1');
  let posicionObj2 = animacion1.getBoundingClientRect().top;
  console.log(posicionObj2);
  let tamañoDePantalla = window.innerHeight/2;

  if(posicionObj2 < tamañoDePantalla){
    animacion1.style.animation = 'mover2 2s ease-out'
  }
})

function mensaje(){
  alert('Mesaje enviado')
  document.getElementById('input1').value= '';
  document.getElementById('input2').value= '';
  document.getElementById('input3').value= '';
  document.getElementById('floatingTextarea2').value= '';
}


