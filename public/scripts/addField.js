// Procurar o botao
document.querySelector("#add-time")
// Quando clicar no botao
.addEventListener('click', cloneField)

// Executar uma acao
function cloneField() {
    // Duplicar os campos. Que campos?
    const newFieldsContainer = document.querySelector('.schedule-item').cloneNode(true)

    // Pegar os campos. Que campos?
    const fields = newFieldsContainer.querySelectorAll('input')

    // Para cada campo, limpar
    fields.forEach(function(field) {
        // Pegar o field do momento e limpa
        field.value = ""
    })

    // Colocar na página. Onde?
    document.querySelector('#schedule-items').appendChild(newFieldsContainer)

}