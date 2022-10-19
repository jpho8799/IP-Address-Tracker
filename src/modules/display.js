import { apiCall } from "./request/api";

function initDisplay(){
    var map = L.map('map').setView([2, 2], 5);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);



    L.marker([2, 2]).addTo(map)
    .openPopup()
}

async function display(input){

    const ipData = await apiCall(input);
    console.log(ipData);
    displayInfoSection(ipData);


    const {lat: lat, lng: lng} = ipData;
    console.log(`${lat} , ${lng}`)
    displayMap(ipData);

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

function displayMap(ipData){
    console.log(`${ipData.lat}, ${ipData.lng}`);
    map = L.map('map').setView([ipData.lat, ipData.lng], 5);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([ipData.lat, ipData.lng]).addTo(map)
    .openPopup()
}



export {initDisplay, display}