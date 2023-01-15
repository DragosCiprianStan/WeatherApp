/*
async function satelitLocation(){
    const res=await fetch('https://api.wheretheiss.at/v1/satellites/25544/positions?timestamps=1436029892,1436029902&units=miles');
    const data=res.json();
    console.log(data);
}
satelitLocation();*/
document.addEventListener('DOMContentLoaded',()=>{
	getLocation();
	
	
});

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
var getCoordsLatitudel=position.coords.latitude;
var getCoordsLogitude=position.coords.longitude;
 boredApp(getCoordsLatitudel,getCoordsLogitude)
}
function boredApp(lat,lon){


    fetch(`http://api.weatherapi.com/v1/current.json?key=425971dbec014b5a983172853231501&q=${lat},${lon}`) //1
    .then((response) => response.json()) //2'
    .then((users) => {
        console.log(users) //3
 
  document.getElementById('degrees').innerText=users.current.temp_c+'°';
  document.getElementById('count').innerText=users.location.region;
  document.getElementById('rainId').innerText=users.current.precip_mm+' MM';
  document.getElementById('windId').innerText=users.current.wind_mph+' MPH';/**/


    }); 
      
  //  const resp=await fetch('https://api.weatherbit.io/v2.0/current?city=sibiu&country=ro&key=ab77b481bc75480f8140983e2583e55f&include=minutely');
    //const data=resp.json();
    
}


function test(){
  const dataToSend = JSON.stringify({"city": "Sibiu", "country": "ro"});
let dataReceived = ""; 
fetch('https://api.weatherbit.io/v2.0/current?city=Sibiu&country=ro&key=a32176a6bf52d7601755816131306f43&include=minutely', {
    credentials:"include",
    mode: "no-cors",
    method: "GET",
    headers: { "Content-Type": "application/json" },
    body: dataToSend
})
    .then(resp => {
        if (resp.status === 200) {
            return resp.json()
        } else {
            console.log("Status: " + resp.status)
            return Promise.reject("server")
        }
    })
    .then(dataJson => {
        dataReceived = JSON.parse(dataJson)
    })
    .catch(err => {
        if (err === "server") return
        console.log(err)
    })

console.log(`Received: ${dataReceived}`) 
  
}
