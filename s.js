let inp1 = document.querySelector('.inp1')
let inp2 = document.querySelector('.inp2')
let btm = document.querySelector('button')
btm.addEventListener('click', () =>{
    if(inp1.value == 1234 && inp2.value == 1234){
        window.location.href ='./index2.html'
    } else{alert('error')}

})


inp1.addEventListener('input',()  => {
if(inp1.value.length > 0 && inp2.value. length > 0){ btm.style.background = 'red'

}
})
inp2.addEventListener('input',()  => {
if(inp1.value.length > 0 && inp2.value. length > 0){ btm.style.background = 'red' 

}
})