
import { apiCall } from "./request/api";

var map = L.map('map');
function initMap(lat = 20.3, lng = 20.3){
    
    map.setView([lat, lng], 6);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([lat, lng]).addTo(map)
    .openPopup()
}

async function display(input){
    const ipData = await apiCall(input);
    displayInfoSection(ipData);

    const {lat: lat, lng: lng} = ipData;
    
    displayMap(lat, lng);

}

function displayInfoSection(ipData){
    const ipAddress = document.getElementById('address');
    const location = document.getElementById('location');
    const timeZone = document.getElementById('time-zone');
    const isp = document.getElementById('isp');

    ipAddress.lastElementChild.textContent = ipData.ipAddress;
    location.lastElementChild.textContent = `${ipData.city}, ${ipData.region}`
    timeZone.lastElementChild.textContent = "UTC " + ipData.timezone;
    isp.lastElementChild.textContent = ipData.isp;
}


function displayMap(lat, lng){
    map.flyTo([lat, lng], 6,{
        animate: true,
        duration: 1
    });


    L.marker([lat, lng]).addTo(map)
    .openPopup()
    
}
 



export {initMap, display}