# Imagen base de Node
FROM n8nio/n8n:latest

# Crea directorio dentro del contenedor
WORKDIR /app

# Copia archivos
COPY package*.json ./

# Instala dependencias
RUN npm install

# Copia todo el proyecto
COPY . .

# Expone el puerto de tu servidor (ej. 3000)
EXPOSE 3000

# Comando para ejecutar tu app
CMD ["npm", "start"]