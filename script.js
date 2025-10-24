//Cria uma tarefa
function CriarItem(){

    const Lista = document.querySelector('#list');
    const itemLista = document.createElement('section'); // tarefa
    const nomeItem = document.createElement('p'); // nome da tarefa
    const buttonItem = document.createElement('button'); // btn deletar
    let inputNomeItem = document.querySelector('#inputADD'); //input de add tarefa

    
    if (inputNomeItem.value == "") {
        alert('coloque uma informação válida');
    } else {
        //Cria lista = section
        Lista.appendChild(itemLista);
        itemLista.setAttribute('id', 'item');
        //Nome da tarefa = p
        itemLista.appendChild(nomeItem);
        nomeItem.innerText = inputNomeItem.value;
        nomeItem.setAttribute("class", "itemNome");
        //cria btn X = Deletar
        itemLista.appendChild(buttonItem);
        buttonItem.innerText = "X"
        buttonItem.setAttribute("id", "deletar");
        buttonItem.setAttribute("class", "deletar");

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

const criarbtn = document.querySelector("#criarbtn");
const inputadd = document.querySelector("#inputADD");
const inputfiltro = document.querySelector("#filtro");

//Tecla Enter -> Cria uma tarefa
document.addEventListener("keydown", function(e){
    if(e.key === "Enter"){
        CriarItem();
    }
});
//Foca no inputadd
document.addEventListener("keydown", function(e){
    if(document.activeElement == inputfiltro){
        return;
    } else {
        if(e.key.length == 1){
            inputadd.focus();
        }
    }
});
//Clicar no criarbtn -> Cria uma tarefa
criarbtn.addEventListener("click", () => {
    CriarItem();
});

//filtro por pesquisa
inputfiltro.addEventListener("input", () => {
    const termo = inputfiltro.value.toLowerCase();
    const itens = document.querySelectorAll(".itemNome");

    itens.forEach(itemLista => {
        const texto = itemLista.textContent.toLowerCase();
        if (texto.match(termo)) {
            itemLista.parentElement.style.display = "flex";
        } else {
            itemLista.parentElement.style.display = "none";
        }
    });
})