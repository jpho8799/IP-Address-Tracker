

function getAddress(){

}

function apiCall(ipAddress){
    const API_KEY = process.env.API_KEY;
    let URL = `https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}&ipAddress=${ipAddress}`;

    fetch(URL, {
        mode: 'cors'
    })
    .then(function(response) {
            console.log(response);
    })
    .catch(function(err) {
    // Error :(
    });

}

export {apiCall};