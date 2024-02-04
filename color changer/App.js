const btns = document.querySelectorAll('.button');
const body = document.querySelector("body")

btns.forEach(function(button){
    button.addEventListener('click', function(evnt){
        if(evnt.target.id === "gray"){
            body.style.backgroundColor = evnt.target.id
        }
        if(evnt.target.id === "white"){
            body.style.backgroundColor = evnt.target.id
        }
        if(evnt.target.id === "blue"){
            body.style.backgroundColor = evnt.target.id
        }
        if(evnt.target.id === "yellow"){
            body.style.backgroundColor = evnt.target.id
        }
        if(evnt.target.id === "black"){
            body.style.backgroundColor = evnt.target.id
        }
    
    })
})