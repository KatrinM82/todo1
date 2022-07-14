
const todoList = document.querySelector('#todo-list');
const todoForm = document.querySelector('#todo-form');
const todoInput = document.querySelector('#todo-input');

todoForm.addEventListener('submit', formFunk);
function formFunk(e) {
    e.preventDefault();
    const taskText = todoInput.value;

    const newTask = document.createElement('li');
    newTask.innerText = taskText;
    todoList.append(newTask);

    // const li = `<li>${taskText}</li>`;

    // todoList.insertAdjacentHTML('beforeend', li);
    todoInput.value = '';
    todoInput.focus();

    //---кнопка удалить---
    const deleteItem = document.createElement('button');
    deleteItem.setAttribute('role', 'button');
    deleteItem.innerText = '-';
    newTask.append(deleteItem);
    deleteItem.addEventListener('click', function(){
        this.closest('li').remove();
    })

}

