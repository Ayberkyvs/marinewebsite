const body = document.querySelector(".container-fluid");
const demodiv = document.querySelectorAll(".demo");
run();

function run(){
    body.addEventListener("click",hideAll);
}

let sayac = 0;
function hideAll(){
    if(sayac % 2 == 0){
        demodiv.forEach(x => {
            console.log(x);
            x.classList.toggle("hidden");
        });
    }else{
        demodiv.forEach(x => {
            x.classList.remove("hidden");
        });
    }
    sayac++;
}