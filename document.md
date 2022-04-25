
## Los estados en la aplicación son manejados en base a contextApi

## TimerContext
Encargado de mantener fecha de inicio y fecha termino para el contador
##
**importación**
```javasript
import { useTimer } from "../context/timerContext";
```

**invocación**
```javascript
const { timer, setTimer } = useTimer();
```
**llenando el context**

```javascript
useEffect(() => {
    setTimer({
        //timer.start_timer (fecha inicio desde bbdd)
      inicioPartido: timers.start_timer,
      //timer.end_timer (fecha termino desde bbdd)
      finPartido: timers.end_timer,
    });
  }, []);
```

**uso**
- entonces para usar la fecha de inicio y termino desde el context usamos
  ```javascript
  const { timer } = useTimer();
  ```
- que se lo pasamos al hook counter para que haga la cuenta regresiva y devuelva los valores que necesitamos para mostrar u ocultar componentes

  ```javascript
  const { inicio, termino, segundo, minuto, hora, dia } = useCounterhook(
    timer.inicioPartido,
    timer.finPartido
  );
  ```


##


## counterContext
- este context se encarga de almacenar el tiempo entre inicio y fin de partido ademas del contador actualizado cada segundo

**importación**
```javascript
import { useCounter } from "../../context/counterContext";
```
**invocación**
```javascript
const { counter, setCounter } = useCounter();
```

- enviamos las fechas del partido al customhook counter para que haga la cuenta regresiva

```javascript
const { inicio, termino, segundo, minuto, hora, dia } = useCounterhook(
    timer.inicioPartido,
    timer.finPartido
  );
```
**llenando el context**
- una vez obtenidos los valores del customhook counter podemos enviarlos al context counter. los valores de inicio y termino los usamos para mostrar u ocultar componentes dependo de si el partido esta activo, aun no empieza o ya ha terminado
```javascript
useEffect(() => {
    setCounter({
      inicio,
      termino,
      segundo,
      minuto,
      hora,
      dia,
    });
  }, [inicio, termino]);

```
## playerContext
- este context se encarga de almacenar los jugadores que estarán disponibles para ser votados por el usuario
##
**importacion**
```javascript
import { usePlayer } from '../context/playerContext';
```
##
**invocación**

```javascript
const { players, setPlayers } = usePlayer();
```
**llenando el context**
- seteamos los jugadores desde la base de datos (Jugadores corresponde a un arreglo de objetos con cada uno de los jugadores disponibles)

```javascript
useEffect(() => {
      setPlayers(jugadores);
    }, [players]);
```
**uso**
```javascript
 const { players, setPlayers } = usePlayer();
```








## regionesContext
- este context se encarga de almacenar las regiones para pasarlas al formulario de registro
##
**importacion**
```javascript
import { useRegiones } from "../context/regionesContext";
```
##
**invocación**

```javascript
  const { region, setRegiones } = useRegiones();

```
**llenando el context**
- seteamos las regiones desde la base de datos

```javascript
 useEffect(() => {
    setRegiones({ regiones });
  }, []);
```
**uso**
```javascript
 const { players, setPlayers } = usePlayer();
```
