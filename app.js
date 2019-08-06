const  loadingBarItemEl = document.querySelector(".loading-bar__item");
const loadingBarButtonEls = document.getElementsByClassName("buttons");

let width= 1;
let loadingBar = setInterval(function() {
    if( width >=100){
        clearInterval(loadingBar);
    } else {
        width +=1;
        loadingBarItemEl.style.width = width + "%";
    }
},30)

function loadButtons(){
    for( let button of loadingBarButtonEls) {
        button.addEventListener("click", function () {
            // console.log(loadingBarItemEl.style.width);
            console.log(event.target.innerText);
            let valueToLoad = event.target.innerText.slice(0,-1);
            let loadingBar = setInterval( function () {
                if( width >= valueToLoad){
                    clearInterval(loadingBar);
                } else {
                    width +=1;
                    loadingBarItemEl.style.width = width + "%";
                }
            },20)
            width = 1;
        });
    }
}

loadButtons();