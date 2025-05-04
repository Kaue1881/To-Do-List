function CriarItem() {

    const Lista = document.querySelector('#list');
    const itemLista = document.createElement('section');
    const nomeItem = document.createElement('p');
    const buttonItem = document.createElement('button');
    let inputNomeItem = document.querySelector('#inputADD');

    
    if (inputNomeItem.value == "") {
        alert('coloque uma informação válida');
    } else {
        Lista.appendChild(itemLista);
        itemLista.setAttribute('id', 'item');

        itemLista.appendChild(nomeItem);
        nomeItem.innerText = inputNomeItem.value;

        itemLista.appendChild(buttonItem);
        buttonItem.innerText = "Deletar"
        buttonItem.setAttribute("id", "deletar");

        inputNomeItem.value = "";
    }
    //A função deletar deve estar dentro da func CriarItem
    //Dessa forma ele sempre vai atualizar a quantidade de 
    //Items que o deletar podera ampliar
    const btnDeletar = document.querySelectorAll('#deletar');
    btnDeletar.forEach(function(botao) {
        botao.addEventListener('click', function(e) {
            console.log(e.target.parentNode.remove());
        });
    });
}
