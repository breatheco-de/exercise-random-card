# ![alt text](https://assets.breatheco.de/apis/img/images.php?blob&random&cat=icon&tags=breathecode,32)  Random Card Dealer (generator)

<p align="center">
<img height="200px" src="https://github.com/breatheco-de/exercise-random-card/blob/master/preview.gif?raw=true" />
</p>

En este proyecto, aprenderás cómo cambiar los estilos de tu sitio web durante el tiempo de ejecución utilizando [VanillaJS](https://stackoverflow.com/questions/20435653/what-is-vanillajs) (plain normal js).

## Intrucciones

Crea un algoritmo que genere aleatoriamente una carta en cada actualización:

1. Cada vez que el sitio web actualiza una nueva carta aleatoria debe mostrarse.

2. La carta debe tener una de las posibles palo/pinta: Corazones, Picas, Clubes y Diamantes.

3. El valor de la carta debe ser uno de los siguientes: 2 a 10, Rey, Reina, Jota o As (sin comodín).

Al final, el proyecto debe ser similar a [esta demostración](https://github.com/breatheco-de/exercise-random-card/blob/master/preview.gif?raw=true).

## 🌱  Cómo iniciar este proyecto

 No clones este repositorio. El primer paso para comenzar a codificar es clonar el [vanillajs boilerplate](https://github.com/4GeeksAcademy/vanillajs-hello) en tu computador local o con Gitpod.

a) Si usas Gitpod (recomendada) puedes clonar el boilerplate [clic aquí](https://github.com/4GeeksAcademy/vanillajs-hello).

b) Si trabajas localmente, escribe el siguiente comando en tu terminal: 

```sh
$ git clone  https://github.com/4GeeksAcademy/vanillajs-hello
```

## 🔎 Importante

Recuerda actualizar el `remote` del proyecto con el de tu repositorio usando `git remote set-url origin <your new url>`, y luego guardar tu código en tu nuevo repositorio usando `add`, `commit` y `push`.

## 💡 Pista

- Recuerda que el primer evento en el ciclo de vida de un sitio web es [onLoad (su código comienza a ejecutarse allí)](https://www.w3schools.com/jsref/event_onload.asp), debe generar un número aleatorio entre 1 y 4 para elegir un palo y otro número aleatorio entre 0 y 12 para elegir un número de tarjeta.

- Crea una clase general **.card** que aplique los estilos generales a cada carta, y una clase CSS adicional para cada palo/pinta: .spade, .club, .heart & .diamond.

- Aplica la clase .card a toda la división, pero solo aplica una de las clases de la pinta/palo a la vez, dependiendo de la pinta/palo que desees aplicar. Por ejemplo, un 3 de corazones tendrá esta declaración HTML:

```html
    <div class='card heart'></div>
```

- Copia y pega estos emojis dentro te tu código para los simbolos: ♦ ♥ ♠ ♣

### 😎 ¿Te sientes seguro?

¡Los siguientes requeriemientos no son necesarios para completar satisfactoriamente el proyecto pero puedes intentar retarte a ti mismo!

`+1` Agrega un botón que genere una nueva carta cuando sea apretado.

`+1` Agrega un timer que genere una nueva carta automaticamente cada 10 segundos.

`+1` Permítele al usuario especificar el width y height de la carta utilizando text-inputs.
