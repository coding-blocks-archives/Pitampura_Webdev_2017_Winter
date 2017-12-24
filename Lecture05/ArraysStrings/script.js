let nums = [3,7,12,15]

let sqr = (a) => Math.pow(a, 2)
let sum = (a, i) => a + i

let rms = Math.sqrt(nums.map(sqr).reduce(sum) / nums.length)

let todos = [
    {task: 'Task X', done: false, priority: 4},
    {task: 'Task K', done: true, priority: 2},
    {task: 'Task L', done: false, priority: 3},
    {task: 'Task P2', done: true, priority: 1},
    {task: 'Task T1', done: false, priority: 5},
    {task: 'Task K4', done: false, priority: 1},
    {task: 'Task A', done: true, priority: 2},
]

let order = todos
    .filter(i => !i.done)
    .sort((a,b) => b.priority - a.priority)
    .map(i => i.task.substring(5))
    .reduce((a, i) => a + ' > ' + i)

// order = 'T1 > X > .... '