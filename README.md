
##  Sobre la App
weatherApp es un proyecto Fullstack donde cree una carpeta api que es el encargado de mandar la informacion desde la base de datos a la carpeta client que luego es renderizada.

librerias que uilice en Api: express = para armar las rutas que me manda a la base de datos, nodemon= reinicia el servidor automaticamente, pg= para conectar la base de datos, y sequelize = este lo utilice para crear los modelos, que luego serian las tablas que se armarian en mi db.

librerias que utilice en client:  axios= trae la informacion de mi api a mi frontend, react= para desarrollar interfaces con el client, react-leaflet= la utilice para poder crear mapas y renderizarlas en mi front. y react-bootstrap= para darle un estilo mas presentable a mi pagina 

<div align="center">
	<img src="Captura%20de%20Pantalla%202020-11-16%20a%20la(s)%2016.13.45.png" width='60%'>
</div> 

## Instalar el proyecto
Crea una base de datos en PostgreSQL con el nombre "weather". Se crea con el siguiente comando: CREATE DATABASE weather;
Corre el comando npm install tanto en la carpeta "api" como en "client", y luego podras iniciar ambos utilizando "npm start" en cada una de las carpetas.

-----------------
Incompleto: todavia sigo viendo de como realizar el deploy con heroku, segui los pasos de la documentacion pero sigo un poco confusa y si le dedico un poco mas de tiempo lo aprovecho para probar hacerlo con otro poyecto nuevo muy basico y ver videos.
