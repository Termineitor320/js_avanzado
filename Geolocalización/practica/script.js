const boton = document.getElementById("btnUbicacion");
const estado = document.getElementById("estado");
const resultado = document.getElementById("resultado");
const mapa = document.getElementById("mapa");

boton.addEventListener("click", () => {
    // RETO 1: comprueba que navigator.geolocation esté disponible.

    // RETO 2: usa getCurrentPosition() para solicitar la ubicación.

    // RETO 3: dentro de la función de éxito, obtén:
    // posicion.coords.latitude
    // posicion.coords.longitude
    // posicion.coords.accuracy

    // RETO 4: muestra latitud, longitud y precisión dentro de #resultado.

    // RETO 5: asigna a mapa.href una URL de Google Maps con las coordenadas
    // y muestra el enlace quitando hidden.

    // RETO 6: añade la función de error y muestra un mensaje comprensible.
});
