import '../../styles/styles.scss';

async function apiCall(input){

    try{
        const API_KEY = process.env.IP_API;
        let URL = `https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}&domain=${input}`;

        let response = await fetch(URL, {
         mode: 'cors',
        })

        const ipData =  await response.json();

        return {
            "ipAddress": ipData.ip,
            "city": ipData.location.city,
            "region": ipData.location.region,
            "timezone": ipData.location.timezone,
            "isp": ipData.isp,
            "lat": ipData.location.lat,
            "lng": ipData.location.lng,
        }
        

    }catch(error){
       console.log('bad request');
    };
    
}

function badRequest(){
    const inputBar = document.getElementById('inputValue');
    inputBar.classList.add('invalid'); 
}


export {apiCall};