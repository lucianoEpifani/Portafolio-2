const display = document.querySelector("#display");

const buttons = document.querySelectorAll("button");

buttons.forEach((item) =>{
    item.onclick=() =>{
        if(item.id=="clear"){
            display.innerText="";
        }else if(item.id == "borrador"){
            let string = display.innerText.toString();
            display.innerText = string.substr(0, string.length-1)
        }else if(display.innerText !=""&& item.id=="btn-igual"){
            display.innerText = eval(display.innerText);
        }else if(display.innerText=="" && item.id=="btn-igual"){
            display.innerText="Empty";
            setTimeout(() => (display.innerText= " "),1000);
        }else{
            display.innerText += item.id;
        }
    }
})

const togglerBtn = document.querySelector('.toggler');

const calculadora = document.querySelector('.calculadora');



togglerBtn.onclick = () => {
    calculadora.classList.toggle('dark');
    togglerBtn.classList.toggle('active');
};