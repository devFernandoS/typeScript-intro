# TypeScript Intro

Este repositorio está orientado a la enseñanza y repaso de conceptos fundamentales de TypeScript en el marco de un curso de Angular. Se abordan temas que van desde tipos básicos, interfaces, funciones, destructuración, clases, generics, decorators y optional chaining, entre otros. Cada archivo en la carpeta `src/topic/` ejemplifica un concepto específico y explica a través de comentarios su funcionamiento y utilidad.

## Estructura del Repositorio

- **index.html**: Archivo HTML que carga la aplicación.
- **src/**
  - **main.ts**: Punto de entrada de la aplicación que importa el archivo de estilos y los módulos de los distintos temas.  
  - **style.css**: Archivo de estilos CSS para la aplicación.
  - **topic/**: Carpeta donde se alojan los ejemplos de TypeScript.
    - [`01-basic-types.ts`](src/topic/01-basic-types.ts): Demostración de los tipos básicos en TypeScript.
    - [`02-objects-interface.ts`](src/topic/02-objects-interface.ts): Ejemplos sobre objetos e interfaces.
    - [`03-functions.ts`](src/topic/03-functions.ts): Funciones tipadas, uso de parámetros opcionales y valores por defecto.
    - [`04-homeWork-types.ts`](src/topic/04-homeWork-types.ts): Ejemplo de manejo de interfaces en un contexto de "home work".
    - [`05-basic-destructuring.ts`](src/topic/05-basic-destructuring.ts): Ejemplos de destructuración de objetos y arrays.
    - [`06-function-destructuring.ts`](src/topic/06-function-destructuring.ts): Uso de destructuración en parámetros de funciones.
    - [`07-import-export.ts`](src/topic/07-import-export.ts): Ejemplo de importación y exportación en TypeScript.
    - [`08-classes.ts`](src/topic/08-classes.ts): Ejemplo de clases, encapsulación, herencia y composición.
    - [`09-generiicos.ts`](src/topic/09-generiicos.ts): Uso de funciones genéricas.
    - [`10-decorators.ts`](src/topic/10-decorators.ts): Ejemplo básico sobre cómo utilizar decorators en clases.
    - [`11-optional-chaining.ts`](src/topic/11-optional-chaining.ts): Uso de optional chaining para evitar errores de acceso a propiedades inexistentes.

- **Configuración:**
  - [`tsconfig.json`](tsconfig.json): Archivo de configuración de TypeScript.
  - [`package.json`](package.json): Scripts para desarrollo, compilación y preview utilizando [Vite](https://vitejs.dev/).

## Uso

1. Instala las dependencias:
   ```sh
   npm install