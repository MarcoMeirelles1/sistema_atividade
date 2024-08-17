function initMap() {
    const map = L.map('map');

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19
    }).addTo(map);

    const pontosDeColeta = [
        {
            coords: [-25.4284, -49.2733],
            popup: 'Prefeitura de Curitiba<br>Av. Cândido de Abreu, 817'
        },
        {
            coords: [-25.4300, -49.2800],
            popup: 'Ecoponto Centro<br>Rua Riachuelo, 29'
        },
        {
            coords: [-25.4200, -49.2900],
            popup: 'Ecoponto Jardim das Américas<br>Rua Martin Afonso, 165'
        },
        {
            coords: [-25.4400, -49.3000],
            popup: 'Ecoponto Santa Felicidade<br>Rua Piquiri, 389'
        }
    ];
    const bounds = L.latLngBounds(); 

    pontosDeColeta.forEach(ponto => {
        const marker = L.marker(ponto.coords).addTo(map)
            .bindPopup(ponto.popup);
        
        bounds.extend(marker.getLatLng()); 
    });

    map.fitBounds(bounds); 
}

document.addEventListener('DOMContentLoaded', initMap);
