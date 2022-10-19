import { apiCall } from "./request/api";

function initDisplay(){
    var map = L.map('map').setView([2, 2], 5);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);



    L.marker([2, 2]).addTo(map)
    .openPopup()
}

async function displayInfoSection(input){

    const ipData = await apiCall(input);
    const ipAddress = document.getElementById('address');
    const location = document.getElementById('location');
    const timeZone = document.getElementById('time-zone');
    const isp = document.getElementById('isp');

    
    console.log('displayInfo' + ipData);
    
    
    ipAddress.lastElementChild.textContent = ipData.ip;
    location.lastElementChild.textContent = ipData.location.city + ", " + ipData.location.region;
    timeZone.lastElementChild.textContent = "UTC " + ipData.location.timezone;
    isp.lastElementChild.textContent = ipData.isp;
    
    

}

function displayMap(lat, lon){

}

export {initDisplay, displayInfoSection}