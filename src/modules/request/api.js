

async function apiCall(ipAddress){
    try{
        console.log('reached');
        const API_KEY = process.env.IP_API;
        let URL = `https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}&ipAddress=${ipAddress}`;

        let response = await fetch(URL, {
         mode: 'cors',
        })

        return await response.json();
        

    }catch(error){
        console.log('GEOIP💀',error)
    };
    
}


export {apiCall};