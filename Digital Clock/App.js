const date = document.querySelector('#clock')

setInterval(function () {
    let dateObj = new Date();
    date.innerHTML = dateObj.toLocaleString()
}, 1000)