# Reto práctico: Mi ubicación

## Objetivo
Crear una página web con JavaScript que obtenga la ubicación actual del dispositivo y permita abrirla en un mapa.

## Requisitos
2. Usa los archivos `index.html` y `script.js` proporcionados.
3. Comprueba si el navegador admite `navigator.geolocation`.
4. Solicita la ubicación con `getCurrentPosition()`.
5. Muestra latitud, longitud y precisión aproximada en metros.
6. Crea un enlace a Google Maps con las coordenadas.
7. Muestra un mensaje si el usuario deniega el permiso, no se puede obtener la ubicación o se agota el tiempo.
8. Prueba el proyecto con Live Server o un servidor local compatible.

## Pistas
- La función de éxito recibe un objeto `posicion`.
- Los datos están dentro de `posicion.coords`.
- Para construir un enlace de mapa puedes usar:
  `https://www.google.com/maps?q=LATITUD,LONGITUD`
- No supongas que la ubicación siempre se puede obtener.
- La API normalmente requiere HTTPS o localhost.

## Evaluación sugerida (10 puntos)
- Estructura HTML: 1 punto.
- Solicitud de geolocalización: 2 puntos.
- Mostrar coordenadas y precisión: 2 puntos.
- Enlace al mapa: 2 puntos.
- Manejo de errores: 2 puntos.
- Organización y funcionamiento: 1 punto.

## Entrega
Sube los archivos terminados a tu repositorio y verifica que el enlace al mapa corresponda a las coordenadas obtenidas.
