
var gTodos = [
    {id: 't101', txt: 'Learn HTML', isDone: false},
    {id: 't102', txt: 'Master CSS', isDone: true}
]

function onInit() {
    console.log('Hi');
    renderTodos();
}

function renderTodos() {
    var elTodoList = document.querySelector('.todo-list');
    var strHTMLs = gTodos.map(function(todo){
        return `<li class="${(todo.isDone)? 'done': ''}" onclick="toggleTodo('${todo.id}')">
            ${todo.txt}
            <button onclick="removeTodo('${todo.id}', event)">x</button>
        </li>`
    })
    elTodoList.innerHTML = strHTMLs.join('')
}


function toggleTodo(todoId) {
    console.log('Toggling: ', todoId);
    var todo = gTodos.find(function(todo){
        return todo.id === todoId
    })
    todo.isDone = !todo.isDone;
    renderTodos()
}

function removeTodo(todoId, ev) {
    ev.stopPropagation();

    console.log('Removing: ', todoId);
    var idx = gTodos.findIndex(function(todo){
        return todo.id === todoId
    })
    gTodos.splice(idx, 1);
    renderTodos();
}

function addTodo() {
    var elTxt = document.querySelector('[name=newTodoTxt]');
    var txt = elTxt.value;
    if (!txt) return;

    var todo = {
        id : 't' + (Date.now() % 100),
        txt: txt,
        isDone: false
    }
    gTodos.unshift(todo);
    elTxt.value = '';
    
    renderTodos();
}