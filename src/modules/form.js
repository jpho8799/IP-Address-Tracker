import { displayInfoSection } from "./display.js";
import {apiCall} from "./request/api.js";

function validateForm(form){
    let formComplete = true;
    Array.from(form.elements).forEach(element=>{
        if(element.tagName == 'INPUT' || element.tagName == 'SELECT'){
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
            displayInfoSection(input.textContent);
        }
    })
}

export {initButton};