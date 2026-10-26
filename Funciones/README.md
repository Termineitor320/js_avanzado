obó o reprobó.

### Función calcularPromedio

```javascript
function calcularPromedio(nota1, nota2, nota3) {
    return (nota1 + nota2 + nota3) / 3;
}
```

#### Explicación

Recibe las tres notas y devuelve el promedio.

### Función determinarEstado

```javascript
function determinarEstado(promedio) {
    if (promedio >= 3) {
        return "Aprobado";
    } else {
        return "Reprobado";
    }
}
```

#### Explicación

Comprueba si el promedio es igual o mayor que 3 para determinar el estado del estudiante.

### Función mostrarResultado

```javascript
function mostrarResultado(promedio, estado) {
    document.getElementById("resultado").innerHTML =
        "<h2>Resultados</h2>" +
        "<p>Promedio: " + promedio.toFixed(2) + "</p>" +
        "<p>Estado: " + estado + "</p>";
}
```

#### Explicación

Muestra el promedio y el estado en la página web.

### Función ejecutarEjemplo

Esta función obtiene las notas ingresadas, verific