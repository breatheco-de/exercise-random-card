<!--hide-->
# Repartidor de cartas al azar en JavaScript, HTML y CSS
<!--endhide-->

<p align="center">
<img height="200px" src="https://github.com/breatheco-de/exercise-random-card/blob/master/preview.gif?raw=true" />
</p>

En este proyecto, aprenderás cómo cambiar los estilos de tu sitio web durante el tiempo de ejecución utilizando [VanillaJS](https://stackoverflow.com/questions/20435653/what-is-vanillajs) (JavaScript estándar).

## Instrucciones

Crea un algoritmo que genere aleatoriamente una carta en cada actualización:

1. Cada vez que el sitio web se actualice, una nueva carta aleatoria debe mostrarse.

2. La carta debe tener uno de los posibles palos: Corazones, Picas, Clubes y Diamantes.

3. El valor de la carta debe ser uno de los siguientes: 2 a 10, Rey, Reina, Jota o As (sin comodín).

Al final, el proyecto debe ser similar a [esta demostración](https://github.com/breatheco-de/exercise-random-card/blob/master/preview.gif?raw=true).

## 🌱 Cómo comenzar este proyecto

No clones este repositorio porque vamos a usar una plantilla diferente.

Recomendamos abrir el `vanilla.js boilerplate` usando un entorno de desarrollo como [Codespaces](https://4geeks.com/es/lesson/tutorial-de-github-codespaces) (recomendado) o [Gitpod](https://4geeks.com/es/lesson/como-utilizar-gitpod). Alternativamente, puedes clonarlo en tu computadora local usando el comando `git clone`.

Este es el repositorio que necesitas abrir o clonar:

```text
https://github.com/4GeeksAcademy/vanillajs-hello.git
```

**👉 Por favor sigue estos pasos sobre** [cómo comenzar un proyecto de programación](https://4geeks.com/es/lesson/como-comenzar-un-proyecto-de-codificacion).


> 💡 Importante: Recuerda guardar y subir tu código a GitHub creando un nuevo repositorio, actualizando el remoto (`git remote set-url origin <your new url>`) y subiendo el código a tu nuevo repositorio usando los comandos `add`, `commit` y `push` desde la terminal de git.

## 💡 Pistas

- Recuerda que el primer evento en el ciclo de vida de un sitio web es [onLoad (tu código comienza a ejecutarse allí)](https://www.w3schools.com/jsref/event_onload.asp), debes generar un número aleatorio entre 1 y 4 para elegir un palo y otro número aleatorio entre 0 y 12 para elegir un número de carta.

- Crea una clase general `.card` que aplique los estilos comunes a cada carta, y una clase CSS adicional para cada palo: `.spade`, `.club`, `.heart` & `.diamond`.

- Aplica la clase `.card` a toda la división, pero solo aplica una de las clases de la pinta/palo a la vez, dependiendo de la pinta/palo que desees aplicar. Por ejemplo, un 3 de corazones tendrá esta declaración HTML:

```html
<div class='card heart'></div>
```

- Copia y pega estos emojis dentro de tu código para los símbolos: ♦ ♥ ♠ ♣

## 😎 ¿Te sientes seguro?

¡Los siguientes requerimientos no son necesarios para completar satisfactoriamente el proyecto, pero puedes intentar retarte a ti mismo!

`+1` Agrega un botón que genere una nueva carta cuando sea apretado.

`+1` Agrega un temporizador que genere una nueva carta automáticamente cada 10 segundos.

`+1` Permítele al usuario especificar el *width* y *height* de la carta utilizando text-inputs.

Este y otros proyectos son usados para [aprender a programar](https://4geeksacademy.com/es/aprender-a-programar/aprender-a-programar-desde-cero) por parte de los alumnos de 4Geeks Academy [Coding Bootcamp](https://4geeksacademy.com/us/coding-bootcamp) realizado por [Alejandro Sánchez](https://twitter.com/alesanchezr) y muchos otros contribuyentes. Conoce más sobre nuestros [Cursos de Programación](https://4geeksacademy.com/es/curso-de-programacion-desde-cero?lang=es) para convertirte en [Full Stack Developer](https://4geeksacademy.com/es/coding-bootcamps/desarrollador-full-stack/?lang=es), o nuestro [Data Science Bootcamp](https://4geeksacademy.com/es/coding-bootcamps/curso-datascience-machine-learning).
