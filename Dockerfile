FROM node:22-alpine AS build

# Crear y establecer el directorio de trabajo
WORKDIR /app

# Copiar package.json y package-lock.json
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar todo el código al contenedor
COPY . .

RUN npm run buildgen
RUN npm run compile

FROM build AS start

COPY --from=build /app/src/schema.graphql /app/dist/schema.graphql

# Exponer el puerto
EXPOSE 4000
# Comando para iniciar la aplicación
CMD ["node", "dist/index.js"]