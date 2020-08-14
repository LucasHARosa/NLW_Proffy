// Procurar o botão 
document.querySelector("#add-time")
// Quando clicar, executar ação
.addEventListener('click', cloneField)

//executar uma acao
function cloneField() {

    // Duplica os campos, quais?
    const newFieldContainer = document.querySelector('.schendule-item').cloneNode(true)
    
    // pegar campos, como/quais?
    const fields = newFieldContainer.querySelectorAll('input')

    // para cada um, limpar
    fields.forEach(function(field){

    // pegar field, e limpa
        field.value = ""
    })

    // colocar na pagina, onde?
    document.querySelector('#schendule-items').appendChild(newFieldContainer)
}