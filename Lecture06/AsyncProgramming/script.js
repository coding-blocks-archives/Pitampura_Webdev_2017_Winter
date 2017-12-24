let i = 0

for (i = 0; i < 5; i++) {
    let j = i
    setTimeout(function () {console.log(i)}, i*1000)
}

