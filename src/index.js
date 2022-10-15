import './styles/styles.scss'
import { apiCall } from './modules/api';
var map = L.map('map').setView([2, 2], 5);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);



L.marker([2, 2]).addTo(map)
    .openPopup()


apiCall('192.212.174.101');