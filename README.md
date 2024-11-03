# Proyecto de Prueba Técnica - React con Vite

Este proyecto es una prueba técnica desarrollada con **React** y **Vite**. La aplicación es una lista de productos con scroll infinito y carga de datos simulada usando `json-server` como servidor de API simulado.

## Requisitos Previos

- **Node.js** (versión 14 o superior)
- **npm** o **yarn**

## Instalación

1. **Descargar el repositorio**

   Descomprime el archivo en tu sistema.

2. **Instalar dependencias**

   Abre una terminal en el directorio del proyecto y ejecuta el siguiente comando para instalar las dependencias:
    
    ```
    npm install
    ```

3. **Configurar y ejecutar json-server (API simulada)**

  Este proyecto utiliza json-server para simular una API RESTful con datos. 
  
  - **Asegúrate de tener json-server instalado globalmente:**
    
    ```
    npm install -g json-server
    ```

  - **Ejecuta el servidor JSON:**
  
    ```
    json-server --watch db.json --port 5000
    ```    

  Esto iniciará json-server en el puerto 5000, y podrás acceder a los datos en http://localhost:5000/items.

## Ejecución del Proyecto

1. **Iniciar el servidor de desarrollo de Vite**

  En una nueva terminal, en el directorio del proyecto, ejecuta el siguiente comando:

  ```
  npm run dev
  ```

2. **Abrir la aplicación en el navegador**

  La aplicación estará disponible en http://localhost:5173. Abre esta URL en tu navegador para ver la aplicación en funcionamiento.
  Scripts Disponibles
  - npm run dev: Inicia el servidor de desarrollo de Vite.
  - npm run build: Crea una versión de producción de la aplicación.
  - npm run preview: Muestra una vista previa de la versión de producción.

  Notas
  - Asegúrate de que json-server esté ejecutándose en el puerto 5000 antes de iniciar el servidor de desarrollo de Vite.
  - En caso de conflictos de puertos, puedes cambiar el puerto de json-server o de Vite modificando la configuración en el proyecto.
