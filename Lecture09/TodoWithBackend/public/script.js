

$(function () {

    let task = $('#task')
    let todolist = $('#todolist')


    function refreshTodos (todos) {
        todolist.empty()
        for (let i = 0; i < todos.length; i++) {
            let todo = todos[i] // {task: jasgvjahv, done: }
            if (todo.done) {
                todo.done = 'checked'
            } else {
                todo.done = ''
            }
            todolist.append(
                $(`
                <div class="row my-4">
                    <div class="col"></div>
                    <div class="col-1"><input onchange="dotodo(${i})" type="checkbox" ${todo.done}></div>
                    <div class="col-6 todo-item">${todo.task}</div>
                    <div class="col-1"></div>
                    <div class="col"></div>
                </div>
            `)
            )
        }
    }

    window.dotodo = function (todoId) {
        $.get(`/dotodo?id=${todoId}`, function (data) {
            refreshTodos(data)
        })
    }

    window.deletetodo = function(todoId) {
        $.get(`/deletetodo?id=${todoId}`, function (data) {
            refreshTodos(data)
        })
    }

    $.get('/showtodos', function (data) {
        refreshTodos(data)
    })


    $('#add').click(function () {


    })


})


// arr = [a,b,c,d,e,f,g]

function moveUp(arr, i) {
    arr.splice(i,0, arr.splice(i-1, 1)[0])
}

function moveDown (arr, i) {
    arr.splice(i,0, arr.splice(i+1, 1)[0])
}