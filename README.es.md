# ![alt text](https://assets.breatheco.de/apis/img/images.php?blob&random&cat=icon&tags=breathecode,32)  Random Card Dealer (generator)

En este proyecto, aprenderá cómo cambiar los estilos de su sitio web durante el tiempo de ejecución utilizando [VanillaJS](https://stackoverflow.com/questions/20435653/what-is-vanillajs) (plain normal js).

<p align="center">
<img height="200px" src="https://github.com/breatheco-de/exercise-random-card/blob/master/preview.gif?raw=true" />
</p>

## Intrucciones

Cree un algoritmo que genere aleatoriamente una tarjeta en cada actualización:

1. Cada vez que el sitio web actualiza una nueva tarjeta aleatoria debe mostrarse
2. La tarjeta debe tener una de las posibles suites: Corazones, Picas, Clubes y Diamantes.
3. El valor de la tarjeta debe ser uno de los siguientes: 1 a 10, Rey, Reina, Jota o As (sin comodín).

Al final, el proyecto debe ser similar a [esta demostración](https://github.com/breatheco-de/exercise-random-card/blob/master/preview.gif?raw=true).

### Pistas 

- Recuerde que el primer evento en el ciclo de vida de un sitio web es [onLoad (su código comienza a ejecutarse allí)](https://www.w3schools.com/jsref/event_onload.asp), debe generar un número aleatorio entre 1 y 4 para elegir un palo y otro número aleatorio entre 0 y 12 para elegir un número de tarjeta.
- Cree una clase general **.card** que aplique los estilos generales a cada tarjeta, y una clase CSS adicional para cada suite: .spade, .club, .heart & .diamond.
- Aplique la clase .card a toda la división, pero solo aplique una de las clases de la suite a la vez, dependiendo de la suite que desee aplicar. Por ejemplo, un 3 de corazones tendrá esta declaración HTML:
```
    <div class='card heart'></div>
```
- Copia y pega estos emogies dentro te tu codigo para los simbolos: ♦ ♥ ♠ ♣

### 😎 Te sientes con confianza?

Los siguientes requeriemientos no son necesarios para completar satisfactoriamente el proyecto pero puedes intentar retarte a ti mismo!

`+1` Agrega un botón que genere una nueva carta cuando sea apretado.
`+1` Agrega un timer que genere una nueva carta automaticamente cada 10 segundos.
`+1` Permítele al usuario especificar el width y height de la carta utilizando text-inputs.
