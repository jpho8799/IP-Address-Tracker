import { display } from "./display.js";
import '../styles/styles.scss';

function validateForm(form){
    let formComplete = true;
    Array.from(form.elements).forEach(element=>{
        if(element.tagName == 'INPUT'){
            if(element.value <= 0){
                formComplete = false;
                invalidInput(element);
                
            }else{
                validInput(element);
               
            }
         }
        
    })

    return formComplete;

}



function invalidInput(element){
    console.log(element);
    element.classList.add('invalid');
}

function validInput(element){
    element.classList.remove('invalid');
}

function initButton(){
    const submitBtn = document.getElementById('submitBtn');

    submitBtn.addEventListener('click', ()=>{
        const searchForm = document.getElementById('searchbar');
        if(validateForm(searchForm)){
            const input = document.getElementById('inputValue');
            display(input.value);
        }
    })
}

export {initButton};