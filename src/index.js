import './styles/styles.scss'
import {displayInfoSection, initDisplay} from './modules/display'
import { initButton } from './modules/form';


window.onload = (event)=>{
    initButton();
    initDisplay();
    //displayInfoSection();
}


