var gTodos = _createTodos();

var gFilterBy = 'all'


function getTodosForDisplay() {
    if (gFilterBy === 'all')  return gTodos;
    
    var todos = gTodos.filter(function(todo){
        return (gFilterBy === 'active' && !todo.isDone) || 
               (gFilterBy === 'done' && todo.isDone)

    })
    return todos;
}

function removeTodo(todoId) {
    var idx = gTodos.findIndex(function(todo){
        return todo.id === todoId
    })
    gTodos.splice(idx, 1);
    _saveTodosToStorage();
}

function addTodo(txt) {
    var todo = {
        id : 't' + (Date.now() % 100),
        txt: txt,
        isDone: false
    }
    gTodos.unshift(todo);
    _saveTodosToStorage()
}

function toggleTodo(todoId) {
    var todo = gTodos.find(function(todo){
        return todo.id === todoId
    })
    todo.isDone = !todo.isDone;
    _saveTodosToStorage();
}

function setFilterBy(filterBy) {
    gFilterBy = filterBy
}

function getTotalCount() {
    return gTodos.length
}
function getActiveCount() {
    var activeTodos = gTodos.filter(function(todo){
        return !todo.isDone
    })
    return activeTodos.length;
}


function _saveTodosToStorage() {
    saveToStorage('todoDB', gTodos)
}

function _createTodos() {

    var todos = loadFromStorage('todoDB')
    if (!todos) {
        todos = [
            {id: 't101', txt: 'Learn HTML', isDone: false},
            {id: 't102', txt: 'Master CSS', isDone: true},
            {id: 't103', txt: 'Do JS', isDone: false}
        ]
    }
    return todos;
}