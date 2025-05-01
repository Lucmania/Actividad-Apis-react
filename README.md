# Aplicación de Gestión de Usuarios con React

## Instalación:
Clona este repositorio o descarga el código fuente
Navega al directorio del proyecto
Instala las dependencias:

-bash-
npm install
# o
yarn install

Dependencias Principales
# React
# React Router Dom
# Axios

Ejecución
Para iniciar la aplicación en modo desarrollo:
-bash-
npm start
# o
yarn start

La aplicación se abrirá automáticamente en http://localhost:3000

Estructura del Proyecto
src/
├── pages/
│   ├── Botones.jsx    # Página principal con navegación
│   ├── Botones.css    # Estilo de botones
│   ├── Get.jsx        # Componente para peticiones GET
│   ├── Get.css        # Estilos para el get
│   ├── Post.jsx       # Componente para peticiones POST
│   ├── Post.css       # Estilos para el post
├── App.js             # Configuración de rutas
├── index.js           # Punto de entrada
└── index.css          # Estilos globales

Puntos importantes sobre la API

Para peticiones POST a /api/users se requiere un header personalizado:
Header: x-api-key
Valor: reqres-free-v1
