var gTodos = [
    {id: 't101', txt: 'Learn HTML', isDone: false},
    {id: 't102', txt: 'Master CSS', isDone: true},
    {id: 't103', txt: 'Do JS', isDone: false}
]

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
}

function addTodo(txt) {
    var todo = {
        id : 't' + (Date.now() % 100),
        txt: txt,
        isDone: false
    }
    gTodos.unshift(todo);
}

function toggleTodo(todoId) {
    var todo = gTodos.find(function(todo){
        return todo.id === todoId
    })
    todo.isDone = !todo.isDone;
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