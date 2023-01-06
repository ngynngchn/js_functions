/* Aufgabenstellung


Deklariere die Funktion math() mit zwei Parametern. Im Funktionskörper{} passiert folgendes:
Gib in der Konsole die Multiplikation von den beiden Parametern aus.
Gib in der Konsole die Division von den beiden Parametern aus.
Ruf die Funktion mit den Argumenten (10, 2) auf.
Teste auch andere Werte:
30, 20
100, 100
5, 0
45, 173
1, 1000
 */

function math(numberOne, numberTwo) {
  console.log(
    `Das Ergbenis von ${numberOne} multipliziert mit ${numberTwo} ist ` +
      numberOne * numberTwo
  );
  console.log(
    `Das Ergbenis von ${numberOne} dividiert durch ${numberTwo} ist ` +
      numberOne / numberTwo
  );
}
math(10, 2);
math(30, 20);
math(100, 100);
math(5, 0);
math(45, 173);
math(1, 1000);
