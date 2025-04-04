# crud-proyecto-gitflow

Este proyecto permite realizar las operaciones CRUD (Crear, Leer, Actualizar y Eliminar) sobre una lista de ítems.

## Tecnologías utilizadas

- Node.js – Motor JavaScript del lado del servidor
- Express.js – Framework web para Node.js
- Git + Git Flow – Para control de versiones
- Thunder Client – Para pruebas de endpoints (alternativa a Postman)

## Estructura del proyecto
crud-proyecto-gitflow/ │ ├── index.js # Archivo principal del servidor ├── package.json # Dependencias y configuración del proyecto ├── node_modules/ # Dependencias (ignoradas por git) └── README.md # Documentación del proyecto.

## Instalación y ejecución
1. Clonar el repositorio:
2. Instalar dependencias:npm install
3. Ejecutar el servidor:node index.js
4. Acceder a la API en:  
http://localhost:3000

## Endpoints disponibles

Metodo| RUTA       |Descripcion
       
GET   |/items      |Obtener todos los items
POST  |/items      |Agregar nuevo item.
PUT   |/items/:id  |Actualizar item por indice.
DELETE|/itemes/:id |Eliminar item por indice.

## Git Flow Implementado

### Ramas principales:
- main: rama estable
- developer: rama de integración
- qa: rama de pruebas

### Ramas de funcionalidad (feature/):
- feature/endpoints-get
- feature/endpoints-post
- feature/endpoints-put
- feature/endpoints-delete
- feature/documentacion
- feature/validaciones

## Pruebas realizadas

Se probaron todos los endpoints desde Thunder Client, incluyendo:

- Creación de ítems (POST)
- Listado general (GET)
- Edición por índice (PUT)
- Eliminación por índice (DELETE)

## Licencia

Este proyecto es únicamente para fines educativos. Puedes usarlo libremente para practicar y mejorar tus habilidades con Node.js y Git.
