# Document Object Model

En este proyecto se nuclean diversas interacciones con el DOM. Se utilizan varias APIs presentes en los navegadores y se opera programáticamente desde JavaScript.

Está hecho íntegramente en _Vanilla JS_, _HTML_ y _CSS_ nativo.

Los componentes creados son:

- **Check Connection**: A través del método **onLine** del _navigator_, se comprueba la conexión del cliente, y se envía un mensaje temporario al documento en el caso de que se pierda la conexión o se recupere la misma.
- **Clock**: Se crea un reloj digital con un Date constructor, el cuál puede ocultarse y mostrarse a discreción. Se agrega un elemento de tipo audio para hacer sonar (y pausar) una alarma mediante un click.
- **Countdown**: Componente que va contando el tiempo faltante para determinada fecha elegida. Al llegar el momento, muestra un mensaje.
- **Dark Mode**: Componente que permite cambiar de modo claro a modo oscuro (estéticamente).
- **Device Detection**: Mediante el método **userAgent** del _navigator_, y utilizando una serie de matchers para determinar de qué dispositivo se trata, se muestra en el documento el utilizado por el cliente.
- **Search Filter**: Filtro de búsqueda dinámico que, mediante un addEventListener, va buscando entre una lista de elementos y dejando en pantalla sólo aquellos que coincidan.
- **Geolocalization**: Se renderiza en el DOM la ubicación del cliente, mediante el método _getCurrentPosition_ de la propiedad _localization_ del _navigator_.
- **Key Events**: A través de determinar la posición de un elemento, se aplica funcionalidad a determinadas teclas (flechas) para manipular la posición del mismo y transladarla dentro de ciertos límites establecidos.
- **Narrator**: Utilizando la propiedad _speechSynthesis_ del _navigator_ y una **Web Speech API** se crea un componente dónde se ingresa texto y se lo reproduce auditivamente con el idioma seleccionado (alguno de los que provee la API).
- **Nav Menu**: Menú de navegación del sitio responsivo y dinámico.
- **Slider**: Slider de imágenes dinámico.
- **Responsive Tester**: Componente que abre una nueva ventana con la URL y las medidas proporcionadas por el cliente.
- **Responsive con JavaScript**: Función que detecta las _MediaQuerys_ e intercambia los elementos insertados según las mismas.
- **Scroll Top**: Botón dinámico que realiza un scroll hacia la parte superior del sitio.
- **Scroll Spy**: Utilizando la API **Intersection Observer**, se detecta en que sección del sitio se encuentra el cliente y aplica la clase correspondiente al link pertinente en el menú de navegación.
- **Raffle**: Función que elije un elemento aleatoriamente entre una lista (array) de elementos.
- **Form Validation**: Validación de un formulario HTML hecha con JavaScript. No permite que se envíen los datos si no son correctos.
- **Smart Video**: Componente que renderiza, en el DOM, un video que empieza a visualizarse cuando el cliente pasa por esa sección de la página. Lo intercepta a través de la API **Intersection Observer** y lo manipula con el eventListener _'visibilitychange'_.
- **Webcam Detection**: Mediante el método _getUserMedia_ de la propiedad _mediaDevices_ y la API **Media Stream** se reproduce en el DOM lo que refleja la webcam del ordenador (si el cliente lo permite).

Este proyecto surgió de una tarea del curso de JavaScript de **@JonMirCha**.
