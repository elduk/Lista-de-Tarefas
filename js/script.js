const input = document.querySelector('input');
const ul = document.querySelector('ul');
const btn = document.querySelector('.botaoRemove');
const btn2 = document.querySelector('.botao');
let cont = document.querySelectorAll('li').length;


function addInList(input, ul, cont) {
    //Adiciona elementos da lista em ordem crescente pelo input usando o contador (adicione o conteúdo no input e use a tecla "Enter")
    input.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') {
            let newLi = document.createElement('li');
            cont = cont + 1;
            newLi.classList.add(`new-list-${cont}`);
            newLi.textContent = input.value;
            ul.append(newLi);
            console.warn(` ${newLi.textContent.toUpperCase()} ADICIONADO A SUA LISTA!!!`);
            input.value = '';
        }
    })
}


function remove(btn, btn2, input) {
    //remove elementos da lista pela tecla "delete"
    input.addEventListener('keydown', function (e) {
        if (e.key === 'Delete') {
            const li = document.querySelector('.content ul li');
            const liIndex = document.querySelectorAll('.content ul li');
            if (li === null) {
                console.warn('NÃO EXISTEM ITENS PARA APAGAR');
                return;
            }
            let last = liIndex[liIndex.length - 1];
            last.remove();
            console.warn(`ITEM ${last.textContent.toUpperCase()} REMOVIDO!!!`);
        }
    })
    //remove elementos da lista pelo botão remove (clicando no botão)
    btn.addEventListener('click', function () {
        const li = document.querySelector('.content ul li');
        const liIndex = document.querySelectorAll('.content ul li');
        if (li === null) {
            console.warn('NÃO EXISTEM ITENS PARA APAGAR');
            return;
        }
        let last = liIndex[liIndex.length - 1];
        last.remove();
        console.warn(`ITEM ${last.textContent.toUpperCase()} REMOVIDO!!!`);
    })
    //remove todos elementos da lista pelo botão removeAll (clicando no botão)
    btn2.addEventListener('click', function () {
        const li = document.querySelectorAll('.content ul li');
        if (li.length === 0) {
            console.warn('NÃO EXISTEM ITENS PARA APAGAR');
            return;
        }
        li.forEach(el => {
            el.remove()
        })
        console.warn('TODOS OS ITENS REMOVIDOS!!!');
    })
}

remove(btn, btn2, input);
addInList(input, ul, cont);