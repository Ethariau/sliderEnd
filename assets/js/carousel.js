const next = document.querySelector(".right")
const prev = document.querySelector(".left")
const liTab = document.querySelectorAll(".slider li")

console.log(liTab.length);


index = 1; 
    next.addEventListener("click",()=>{   
        if (index < liTab.length) {
            nextF();
            index++;
            console.log(index);
            return index   
        }else{
            index = 1;
            liTab.forEach(e => {
                e.className="positionRight";
            });
            liTab[0].className="positionMiddle"
        }
    })
    prev.addEventListener("click",()=>{
        if (index > 1) {
        prevF();
        index = index-1;
        console.log(index);
        return index;
        }else{
            index = liTab.length;
            imoins = index-1;
            liTab.forEach(e => {
                e.className="positionLeft"
            });
            liTab[imoins].className = "positionMiddle";
        }
    })


    // function
    function nextF() {
        iplus = index+1;
        imoins = index-1;
        if (liTab[imoins].classList == "positionMiddle") {
            liTab[imoins].classList.add("positionLeft");
            liTab[index].className = "positionMiddle";     
        }
    }
    function prevF() {
        imoins = index-1;
        imoinsmoins = index-2;
        if (liTab[imoins].classList == "positionMiddle") {
            liTab[imoins].classList.add("positionRight");
            liTab[imoinsmoins].className = "positionMiddle";   
        }
    }