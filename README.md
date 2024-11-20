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
