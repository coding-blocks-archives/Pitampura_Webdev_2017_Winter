

$.get('/showtodos', function (data) {
    console.log(data)
})

$(function () {

    let task = $('#task')

    $('#add').click(function () {

        $('#todolist').append(
            $(`
                <div class="row my-4">
                    <div class="col"></div>
                    <div class="col-6 todo-item">${task.val()}</div>
                    <div class="col"></div>
                </div>
            `)
        )
    })


})