Este es el desarrollo del FrontEnd para el TPO del Grupo 4, curso 24134, para su presentación el 22/05/2024. 
Es un desarrollo del grupo compuesto por Vanessa Alfonzo, Sebastian García y Enrique Sifontes. 
Este es un repositorio alterno, creado ante la imposibilidad de solucionar un problema de permisologías, que no permitía desplegar en GITPages.
El proyecto es la página WEB de la Empresa SurSolar, una empresa fictícia, solo para uso de este proyecto y en modo didáctico.
La integrante V. Alfonzo, tuvo que retirarse y el integrante S. García presenta problemas de salud que le impiden ser el vocero del grupo, por tanto, Enrique Sifontes, asume la vocería.

------------------ ... ----------------

Coformación a los Criterios de Evaluación del TPO:

1.- El sitio consta de una página de entrada con 6 secciones, navegables e independientes, desplegadas con JS, en modo no-scroll sino, transicionando de una sección a otra, o por enlaces en el cintillo de navegación y en el pie del final de página. La página puede visualizarse en todo su potencial, en modo de pantalla completa, de preferencia. Igualmente está diseñado -no completamente desarrollado por falta de tiempo-, para tener unas formas de Productos y Servicios, las cuales llevan, a su vez, a diferentes sub-páginas hasta el nivel de detalle de producto o, servicio. En este caso específico, solo se pudo desarrollar home > Productos > Paneles Solares > Paneles Fotovoltáicos + Termodinámicos + Calentadores de agua. Desde cada forma de detalle de producto se puede regresar por todo el camino de migas a la página de entrada, pasando por cada página de nivel superiór o, ir directamente a las secciones, mediante enlaces en los pié de página. Las formas no desarrolladas, enlazan -por redireccionamiento- a una página "en construcción", cual, a su vez, permite retornar a la página ppal.

2.- El formulario de contacto está dividido en dos secciones, una de "contáctenos" en la Sección de Contacto de la pagina ppal y uno de Presupuestos, en una página aparte, al que se accede por enlace en la página de contactos. Originalemete estaban ambos en la misma sección pero, ocasionaban demasiados conflictos entre ellos, por lo que se decidió separarlos, por razones de tiempo. Aún lo estoy terminando, por esa razón.
La sección que está alojada en la pág. ppal, cumple con todo lo exigido en relación con JS. La que está en la forma de solicitud de presupuesto, se tuvo que rehacer, para efectos prácticos; cumple con el requisito de los radios y el select pero, aún no funciona con el servidor de correo. Estamos en eso.
29/5 Corregida la forma de consultas, ya está funcional.

3.- Todas las páginas son responsivas para efectos de imágenes y diseño, con puntos de corte en min(1600), max(1440) y max(768), para textos.

4.- Desde la página de entrada, pasando por las formas de Productos y Servicios, hasta el detalle de productos; pueden encontrarse diferentes animaciones y transiciones.

5.- Se usa ampliamente el display: flex y/o grid, en todas las páginas, para efectos de responsividad.

6. Se cuidó hasta donde se pudo la navegación vertical y transversal de las páginas.

7.- Los archivos están en:
    https://github.com/easr97/SurSolar.git

8.- La página está alojada en: 
    https://easr97.github.io/SurSolar/

9.- Como tuve que hacer cámbios de última hora, voy a rechequear pero, todas las páginas son conformes con este punto. (24/05/24 13:17) Verificado.

10.- Se utilizan tanto los FontAwesome -sección de productos- como iframes, para el mapa de ubicación de la empresa y los badges de LinkedIn.

Solo se usa bootstrap, a partir del nivel de sub-páginas hasta el detalle de producto y/o servicio -cuando se desarrolle-. La página de entrada es solo HTML, CSS y JS.

Se pretendía alcanzar a la Voyager II pero, Júpiter tendrá que ser bueno, por el momento.

------------------------------------------------------

Comentario de las modificaciones sugeridas:

2- Falta un input de img
	Por favor indíquemelo,que no lo encuentro.

3- No se aprecia diseño responsive (la página se rompe en otras medidas)
	No entiendo, mis disculpas, si pudiera ser un poquito más específico; la página se adapta y no pierde funcionalidad con los cambios de formato, hasta donde yo lo veo.
 
4- No se encuentra animación alguna o item que corresponda a este punto.
	Toda la página de entrada es una aimación, porque los eventos de rueda y flechas se capturan en JS para generar una transición de una página a la otra. El desplazarse entre páginas por el cintillo, es otro modo de generar esas animaciones.
	Quizás fue mi error, al no decirle eso específicamente, además:
	Sección de contacto, botones de acción, "SOLICITAR" cambia de brillo y "ENVIAR", oculta las sombras cuando se hace hover.
	Página de detalles de producto: Home > Productos > Paneles Solares > Paneles Solares (FV / TD / PH), las tarjetas de los productos están animadas

6- El sitio carece de estilo CSS alguno, eso repercute en muchos de los puntos del TPO, punto 10 inclusive.
	Ese punto lo había obviado porque era responsabilidad de la muchacha del equipo, quien desertó. Si entiendo bien el asunto de los estilos, como adaptar la paleta de colores, se adpató a: https://docs.google.com/spreadsheets/d/1G6Puuyg8A-szenzi7aBWQxCuvLxUiJWkMPNMR_7LXls/edit#gid=595672561 -->  28. Rojo, amarillo, azul y cian, Los códigos hexadecimales corresponden al rojo (#e31e24), amarillo (#ffed00), azul (#393185) y cian (#00a0e3). Su unión es ideal para mostrar contraste entre valores. 
  Por lo demás, todo el sitio funciona sobre CSS externos.

10-Utilizar iframes y/o íconos de FontAwesome y/o fuenteslocales o bien de Google Fonts.Es optativo incluir algún elemento de Bootstrap.
	Se usan iframes en la sección "Saber mas" de la página y se usan para el mapa de Google Maps, se retiraron los iframes (están como comentario en la página index.html) de las tarjetas de LinkedIn porque, una de los integrantes ya no estaba y no conseguí su información y el otro está bastante enfermo y no me responde a las solicitudes. Las tarjetas están remplazadas por enlaces a sus páginas de LinkedIn, que utilizan íconos de FontAwesome, al igual que el enlace "Saber mas" que se usa para acceder a ella.
	No se usaron Fuentes locales/Google porque, no se consideraron relevantes para la página.
