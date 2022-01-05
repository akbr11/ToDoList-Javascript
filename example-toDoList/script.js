const button = document.querySelector('.btn');
const input = document.querySelector('.input');
const ul = document.querySelector('ul');

function addInput() {
    // add input list in li
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";

    // remove list in li
    const btnDelete = document.createElement('button');
    btnDelete.appendChild(document.createTextNode('X'));
    btnDelete.classList.add('remove');
    li.appendChild(btnDelete);

    function deleteList() {    
        li.remove();
    }
    btnDelete.addEventListener('click', deleteList);

    function checkListDone(){
        li.classList.toggle('done');
    }
    li.addEventListener('click', checkListDone);
}
button.addEventListener('click', addInput);

