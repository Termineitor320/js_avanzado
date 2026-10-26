# Exposición: Geolocalización con JavaScript

**Tema:** Geolocalización con JavaScript  
**Modalidad:** exposición individual teórico-práctica   

# 3. Guion para decir durante la exposición

## Diapositiva 1 — Portada 



“Buenos días. Hoy voy a explicar la geolocalización utilizando JavaScript. Primero veremos qué significa y cómo funciona en una página web. Después haré una demostración en vivo y, al final, les dejaré un ejercicio para que lo desarrollen en su propio repositorio.”

## Diapositiva  — ¿Qué es la geolocalización? 



“La geolocalización es el proceso de determinar la ubicación geográfica de un dispositivo. Se utiliza en mapas, aplicaciones de transporte, domicilios y servicios que muestran lugares cercanos. Por ejemplo, una página puede pedir nuestra ubicación para ayudarnos a encontrar una dirección o mostrar dónde estamos en un mapa.

La ubicación no siempre es exacta: depende del dispositivo, de la señal y de las fuentes de posicionamiento disponibles.”

**Pregunta para el curso:** “¿Qué aplicaciones conocen que utilicen nuestra ubicación?”

## Diapositiva 3 — ¿Cómo funciona? 



“En una página web, JavaScript no debería obtener la ubicación en secreto. El navegador solicita permiso al usuario. Si la persona lo autoriza, el navegador intenta determinar la posición con los recursos disponibles, por ejemplo GPS, redes Wi-Fi o información de red. Después entrega los datos a la página.

Si el usuario rechaza el permiso, el dispositivo no puede determinar la ubicación o tarda demasiado, el programa debe manejar ese error y mostrar un mensaje.”

## Diapositiva 4 — La API de Geolocalización 



“En JavaScript usamos la API de Geolocalización del navegador, accesible mediante `navigator.geolocation`. No es necesario instalar una librería adicional para este ejemplo.

El método `getCurrentPosition()` solicita una posición actual. El método `watchPosition()` sirve para recibir actualizaciones de la posición. En esta demostración utilizaré `getCurrentPosition()` porque solo necesito obtener una ubicación cuando el usuario presione un botón.”

## Diapositiva 5 — Latitud, longitud y precisión 

**Di:**

“La latitud indica una posición al norte o al sur del ecuador. La longitud indica una posición al este o al oeste del meridiano de Greenwich. En JavaScript, estos valores se encuentran en `position.coords.latitude` y `position.coords.longitude`.

También existe `position.coords.accuracy`, que representa la precisión estimada en metros. Por ejemplo, una precisión de 30 metros significa que la posición se estima dentro de un radio aproximado de 30 metros; no significa que el dispositivo esté exactamente en ese punto.”

**Señala en el código:** `latitude`, `longitude` y `accuracy`.

## Diapositiva 6 — Demostración en vivo 

“Ahora vamos a ver cómo funciona. Esta página tiene un botón llamado ‘Obtener mi ubicación’. Al pulsarlo, el programa comprueba si el navegador admite la API. Si está disponible, solicita la posición actual.

Cuando la operación tiene éxito, una función recibe el objeto `posicion`. De ahí obtenemos `posicion.coords`, que contiene la latitud, la longitud y la precisión. Después mostramos esos datos en la página y construimos un enlace para abrir las coordenadas en Google Maps.

También hay una función de error. Si se rechaza el permiso, no se logra determinar la posición o se acaba el tiempo de espera, la página muestra un mensaje.”

**Mientras lo dices, haz esto:**
1. Muestra la página en el navegador.
2. Pulsa “Obtener mi ubicación”.
3. Explica la solicitud de permiso del navegador.
4. Si aceptas, señala las coordenadas y la precisión.
5. Abre el enlace del mapa, si la conexión lo permite.
6. Vuelve al editor y señala `getCurrentPosition()`, la función de éxito y la función de error.

**Si falla la ubicación:** no pierdas tiempo intentando arreglarla frente al curso. Explica el mensaje de error y muestra el código. Comprueba antes de la clase que funcione en el equipo y navegador que usarás.

## Diapositiva 7 — Reto para los compañeros (aprox. 2–3 minutos para explicarlo)

**Di:**

“Ahora cada uno va a crear esta función en su propio repositorio. Deben tener un archivo HTML y otro JavaScript. El reto consiste en crear un botón que solicite la ubicación, mostrar la latitud y longitud, enseñar la precisión, crear un enlace a Google Maps y manejar los errores.

En la carpeta `practica` tienen un HTML y un JavaScript inicial con espacios para completar. Intenten resolverlo primero sin copiar el ejemplo completo. La meta es entender qué hace cada parte del código.”

**Criterios sugeridos sobre 10 puntos:**
- Estructura HTML: 1 punto.
- Solicitar la ubicación correctamente: 2 puntos.
- Mostrar latitud, longitud y precisión: 2 puntos.
- Crear el enlace al mapa: 2 puntos.
- Manejar errores: 2 puntos.
- Código organizado y funcionando: 1 punto.

## Diapositiva 8 — Privacidad y conclusión (aprox. 1 minuto)

**Di:**

“Para concluir, la geolocalización permite crear páginas web que reaccionan a la ubicación del usuario. JavaScript accede a esta función mediante la API del navegador, pero se necesita permiso y un contexto seguro. Además, las coordenadas pueden ser datos sensibles, así que solo debemos utilizarlas cuando sean necesarias y explicar para qué se van a usar.

Con esta demostración vimos cómo obtener una posición, mostrar sus datos y enlazarla a un mapa. Muchas gracias. ¿Tienen alguna pregunta?”

---

# 4. Conceptos que debes saber explicar

- **`navigator.geolocation`:** objeto del navegador que da acceso a la API de Geolocalización, si está disponible.
- **`getCurrentPosition(success, error, options)`:** solicita la posición actual; llama a la función de éxito o a la de error.
- **`watchPosition(success, error, options)`:** permite recibir actualizaciones de posición. No lo usamos en el ejemplo principal.
- **`coords.latitude`:** latitud en grados decimales.
- **`coords.longitude`:** longitud en grados decimales.
- **`coords.accuracy`:** precisión estimada, en metros.
- **HTTPS / localhost:** condiciones habituales necesarias para que la API esté disponible.
- **Permiso:** el usuario puede aceptar o rechazar el acceso.
- **Errores:** permiso denegado, posición no disponible o tiempo de espera agotado.

## Ejemplo de uso

Una aplicación de domicilios puede pedir la ubicación para facilitar la dirección de entrega. Una aplicación de mapas puede mostrar dónde se encuentra el usuario. La página debe pedir permiso y explicar el uso de los datos.

---

# 5. Preguntas que podrían hacerte

**¿JavaScript localiza el dispositivo por sí solo?**  
No exactamente. JavaScript llama a la API del navegador y el navegador usa las fuentes de posicionamiento disponibles en el dispositivo.

**¿La ubicación siempre es exacta?**  
No. La precisión depende del dispositivo, el entorno y la señal. Por eso se devuelve un valor de precisión estimada.

**¿Qué pasa si el usuario no acepta?**  
Se ejecuta la función de error y la página debe informar que no puede obtener la ubicación.

**¿Para qué sirve `watchPosition()`?**  
Para recibir actualizaciones de la ubicación, por ejemplo en una aplicación de navegación. Debe usarse con cuidado y detenerse cuando ya no sea necesario.

**¿Por qué puede no funcionar al abrir el archivo directamente?**  
La API suele requerir HTTPS o `localhost`. Prueba con Live Server u otro servidor local.

**¿Necesito instalar una librería?**  
No para este ejemplo básico; la API está integrada en los navegadores compatibles.

---

# 6. Fuentes para la última diapositiva

- MDN Web Docs — Geolocation API: https://developer.mozilla.org/es/docs/Web/API/Geolocation_API
- MDN Web Docs — `getCurrentPosition()`: https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition
- MDN Web Docs — `watchPosition()`: https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/watchPosition

---

# 7. Estructura de la carpeta

- `README.md`: guion completo, tiempos, teoría y preguntas.
- `ejemplo/index.html`: página funcional de demostración.
- `ejemplo/script.js`: lógica JavaScript de geolocalización.
- `ejemplo/styles.css`: estilos de la demostración.
- `practica/index.html`: página inicial para que los compañeros completen.
- `practica/script.js`: plantilla incompleta del reto.
- `practica/ENUNCIADO.md`: instrucciones y criterios de evaluación.
