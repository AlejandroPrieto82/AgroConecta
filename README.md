# AgroConecta - Backend

Marketplace que conecta campesinos colombianos directamente con compradores, eliminando intermediarios mediante precios justos y comisiones mínimas.

## Versión del Lenguaje
- Node.js: v18.x o superior
- npm: v9.x o superior

## Dependencias
| Paquete    | Versión  | Uso                        |
|------------|----------|----------------------------|
| express    | ^4.18.2  | Framework HTTP             |
| cors       | ^2.8.5   | Manejo de CORS             |
| dotenv     | ^16.3.1  | Variables de entorno       |
| nodemon    | ^3.0.1   | Hot reload en desarrollo   |

## Instalación y Ejecución

1. Clonar el repositorio
git clone https://github.com/tu-usuario/AgroConecta.git
cd AgroConecta

2. Instalar dependencias
npm install

3. Configurar variables de entorno
cp .env.example .env

4. Ejecutar en desarrollo
npm run dev

5. Ejecutar en producción
npm start

## Endpoints
| Método | Ruta      | Descripción                  |  
|--------|-----------|------------------------------|  
| GET    | /health   | Verifica estado del servidor |  

## Estructura del Proyecto
src/  
├── config/         Configuración general  
├── controllers/    Lógica de controladores  
├── routes/         Definición de rutas  
├── services/       Lógica de negocio  
├── models/         Modelos de datos  
├── middlewares/    Middlewares (auth, validación)  
├── utils/          Funciones utilitarias  
└── app.js          Configuración de Express  

## Planeación del Proyecto
El backlog, historias de usuario y sprints están disponibles en:  
[Planeación del Backend]()