

async function apiCall(ipAddress){
    try{
        console.log(ipAddress);
        const API_KEY = process.env.IP_API;
        console.log(API_KEY);
        let URL = `https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}&ipAddress=${ipAddress}`;

        let response = await fetch(URL, {
         mode: 'cors'
        })
        return response.json();

    }catch(error){
        console.log('GEOIP💀',error)
    };
    
}


export {apiCall};