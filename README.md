# CHALLENGE NTT DATA - PODCASTER

Este proyecto es parte del reto de NTT Data para construir una aplicación de podcasting.

## Tecnologías utilizadas

- **React**
- **Vite**
- **React Router**
- **Axios**
- **Styled Components**
- **Zustand**
- **React Query**

## Instrucciones para levantar el proyecto

Sigue estos pasos para levantar el proyecto en tu entorno local:

### 1. Clonar el repositorio

### 2. Instalar dependencias

```cd podcaster```
```npm install```

### 3. Levantar el servidor de desarrollo

```npm run dev```

## En el caso de querer crear un build

```npm run build```

Esto generará una carpeta dist/ con los archivos listos para ser desplegados.

Y para poder previsualizar la aplicación en modo producción hay que utilizar el comando:

```npm run preview```


# Sobre el proyecto

## Funcionalidades del proyecto

- `Home`: Permite la visualización de 100 podcasts obtenidos desde la web de iTunes
- `Detalle de podcast`: Permite visualizar el detalle de un podcast en concreto con sus respectivos episodios
- `Detalle de episodio`: Permite visualizar el detalle de un episodio en concreto, donde podremos ver una descripción y tener la posibilidad de escucharlo

## Estructura del proyecto

- Elegí esta arquitectura basada en features la cual centra el desarrollo exclusivo por modulos, cada pagina tiene sus propios componentes, hooks, etc.
- Creé una carpeta de componentes de manera global, el cual almacena componentes que se repitirían en mas de un lugar.
- La carpeta helpers contiene funciones que se pueden llegar a repetir o se repiten en mas de un lugar, entonces moviendo estas funciones como helpers se evita el DRY, lo mismo para el caso de constants, se mueven a un contexto más global para evitar repeticiones.
- Utilicé zustand para el manejo de estados globales ya que es de muy fácil integración y mantenible en proyectos chicos como en este caso, ademas de que se puede integrar cache/persistencia de manera muy facil con middlewares que la libreria proporciona.
- Para el manejo de datos del servidor, utilicé react query, el cual esta optimizado y configurado de manera nativa para el uso de cache y evitar llamadas innecesarias y obtener efectos no deseados.

```
├─ src
│  ├─ App.tsx
│  ├─ api <-- Carpeta donde se crea la instancia de axios
│  ├─ assets
│  ├─ components <-- Componentes globales
│  ├─ constants <-- Constantes globales
│  ├─ helpers <-- Funciones que se reutilizan
│  ├─ index.css
│  ├─ main.tsx
│  ├─ pages <-- Secciones de la aplicación
│  │  ├─ EpisodeDetail <-- Detalle de un episodio
│  │  ├─ Home <-- Inicio
│  │  └─ PodcastDetail <-- Detalle de un podcast
│  ├─ routing <-- Rutas de la aplicación
│  ├─ services <-- Servicios para llamada a servicios externos
│  ├─ stores <-- Estados globales
│  └─ vite-env.d.ts
├─ tsconfig.app.json
├─ tsconfig.json
├─ tsconfig.node.json
└─ vite.config.ts
```

