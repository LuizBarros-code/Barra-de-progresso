const next = document.getElementById('next')
const prev = document.getElementById('prev')
const progress = document.getElementById('progress')
const circulos = document.querySelectorAll('.circulo')

let currentactive = 1

next.addEventListener('click', () =>{
    currentactive++

    if(currentactive > circulos.length){
        currentactive = circulos.length
    }

    update()
})

prev.addEventListener('click', () =>{
    currentactive--

    if(currentactive < 1){
        currentactive = 1
    }

    update()
})

function update(){
    circulos.forEach((circulo,idx) => {
        if(idx < currentactive){
            circulo.classList.add('ativo')
        }else{
            circulo.classList.remove('ativo')
        }
    })

    const ativos = document.querySelectorAll('.ativo')

    progress.style.width = (ativos.length - 1)/ (circulos.length - 1) * 100 + '%'

    if(currentactive === 1){
        prev.disabled = true
    }else if(currentactive === circulos.length){
        next.disabled = true
    }else{
        prev.disabled = false
        next.disabled = false
    }
}