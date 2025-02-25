## Proposito App

La plataforma permite a los viajeros encontrar y reservar fácilmente hoteles en cualquier destino.
A través de un sistema intuitivo y seguro, los usuarios pueden explorar una amplia variedad de opciones de hospedaje,
comparar precios y elegir la mejor alternativa según sus necesidades y presupuesto. El objetivo es simplificar el proceso de reserva,
garantizando comodidad, confianza y acceso a alojamientos de calidad en cualquier parte del mundo. Con una experiencia de usuario optimizada,
la plataforma busca hacer que la planificación de los viajes sea más sencilla y eficiente, permitiendo que los viajeros disfruten al máximo su destino sin preocupaciones.

## Explicacion funcionalidad Booking

El componente Bookins se encarga de mostrar una lista de tarjetas (Card) con información proveniente de una API.
Cada tarjeta incluye un carrusel de imágenes (CardCarousel) y detalles sobre una ubicación específica.

1. Bookins.js
   Descripción
   El componente Bookins obtiene datos desde una API y los muestra en una lista de tarjetas (Card).

Propósito
Obtiene datos de la API al montarse el componente (useEffect).
Almacena los datos en el estado data.
Mapea los datos y los pasa al componente Card.
Props que recibe
Ninguna (los datos se obtienen internamente).

2. Card.js
   Descripción
   El componente Card representa una tarjeta con un carrusel de imágenes (CardCarousel), título, ubicación, precio y rating.

Props que recibe
title → Nombre de la ubicación.
location → Dirección o ciudad.
price → Precio por noche en COP.
rating → Valoración del lugar.
images → Array de URLs de imágenes.

3. CardCarousel.js
   Descripción
   El componente CardCarousel muestra un carrusel de imágenes utilizando la librería react-slick.

Props que recibe
images → Array de imágenes a mostrar en el carrusel.

4. Estilización de los Dots del Carrusel
   Para asegurarnos de que los dots del carrusel aparezcan sobre la imagen y sean visibles, se recomienda agregar el siguiente CSS:

Explicación
position: absolute; bottom: 10px; → Ubica los dots dentro del carrusel.
left: 50%; transform: translateX(-50%); → Los centra horizontalmente.
z-index: 10; → Asegura que estén por encima de la imagen.
background: rgba(0, 0, 0, 0.5); → Agrega un fondo oscuro para mejorar la visibilidad.
.carousel-container { position: relative; } → Asegura que los dots se posicionen correctamente dentro del contenedor del carrusel.
