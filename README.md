# NutriScan_api_gateway
Este microservicio recibe las peticiones de que lleguen al backend de NutriScan para procesarlas a los distintos microservicios de la misma organización NutriScan UN

Toda peticion debe ser mandada a user ms para verificar la authenticación del usuario.
y debe contener todos los llamados a las funciónes de los otros microservicios. Para saber cuales son las funciones a llamar simule mientras estas se codifican y saquenlas de las funciones del diagrama de descomposición funcional.

## Commands to Docker Compile and Run

To build and run the Docker container, use the following commands:

```js
docker build -t nutriscanun-api-gateway .
docker run -d -p 3003:3003 --env-file .env --name nutriscanun-api-gateway-docker nutriscanun-api-gateway
```


## Image Deploy

```js
docker tag nutriscanun-api-gateway juanxo074/nutriscanun-api-gateway:latest
```


## Instructions to Deploy on Render
Follow these steps to deploy your service on Render:

Create a repository on GitHub and upload your code.
In Render, select "New Web Service" and connect your GitHub repository.
Configure the following parameters in Render:
Build Command:
bash
```js
docker build -t nutriscanun-api-gateway .
```
Start Command:
```js
docker run -d -p 3003:3003 --env-file .env --name nutriscanun-api-gateway-docker nutriscanun-api-gateway
```
Environment Variables: Add the necessary environment variables (e.g., PORT).
Deploy the service.
