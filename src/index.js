import './styles/styles.scss'
import {initMap} from './modules/display'
import { initButton } from './modules/form';


window.onload = (event)=>{
    initButton();
    initMap();

}


