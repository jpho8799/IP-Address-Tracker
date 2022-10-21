

async function apiCall(ipAddress){
    console.log(ipAddress);
    try{
        const API_KEY = process.env.IP_API;
        let URL = `https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}&ipAddress=${ipAddress}`;

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
        console.log('GEOIP💀',error)
    };
    
}


export {apiCall};