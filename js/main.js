
const seconds = document.getElementById('seconds');
const  kino = document.getElementById('blms');
const trailer = document.getElementById('trailer');



let count = 20;

let timer = setInterval(()=>{
    count = count -1;
    // console.log(count);
    
    seconds.textContent = count;

    if(count === 0){
        clearInterval(timer)
        seconds.textContent = 'X';
        seconds.style.cursor = "pointer";
    }
},1000);



seconds.addEventListener('click', ()=>{
    trailer.removeAttribute('src');
    seconds.style.display = "none";
    kino.style.display = "block";
})


