import { apiCall } from "./request/api";

function initDisplay(){
    var map = L.map('map').setView([2, 2], 5);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);



    L.marker([2, 2]).addTo(map)
    .openPopup()
}

function displayInfoSection(input){
    console.log(input);
    const ipData = apiCall(input);

    const ipAddress = document.getElementById('address');
    const location = document.getElementById('location');
    const timeZone = document.getElementById('time-zone');
    const isp = document.getElementById('isp');


    ipAddress.lastElementChild.textContent = ipData.ip;
    location.lastElementChild.textContent = ipData.location.city + ", " + ipData.location.region;
    timeZone.lastElementChild = ipData.location.timezone;
    isp.lastElementChild = ipData.isp;

}

export {initDisplay, displayInfoSection}