const socket = io();   // setup connection with backend by calling io.on()
console.log("HI");
if(navigator.geolocation){
    navigator.geolocation.watchPosition((position) => {
        socket.emit('send-location', { latitude: position.coords.latitude, longitude: position.coords.longitude})
        }, (err)=>{
            console.error(err);
        },{
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 0
        }
    );
}

const map = L.map("map").setView([0,0],10);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{
    attribution: "Mohit"
}).addTo(map);

const markers = {};
socket.on("recieve-location",(data)=>{
    const {id,lat,long} = data;
    map.setView([lat,long],12);
    if(markers[id]){
        markers[id].setLatLng([lat,long]);
    }else{
        markers[id] = L.marker([lat,long]).addTo(map);
    }
})
socket.on("user-disconnect",(id)=>{
    map.removeLayer(markers[id]);
    delete markers[id];
})
