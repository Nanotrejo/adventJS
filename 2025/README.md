# AdventJS 2025

![AdventJS2025-Logo](./assets/logo.webp)

## Descripción

Este repositorio contiene mis soluciones para el reto **AdventJS 2025**, organizado por [midudev](https://github.com/midudev).

AdventJS es un evento anual con 25 ejercicios de dificultad creciente para mejorar habilidades en JavaScript/TypeScript (y en algunos casos Python). Cada día se publica un nuevo reto y los participantes comparten sus soluciones.

Para más información visita la web oficial: [AdventJS](https://adventjs.dev/).

## Cómo ejecutar el código

Si usas **VSCode**, hay tareas y scripts en la carpeta `.vscode` para ejecutar y depurar las soluciones.

### TypeScript

Instalar dependencias:

```console
npm i
```

Compilar y ejecutar un archivo TypeScript:

```console
npx tsc x.ts && node x.js
```

Compilar y ejecutar un archivo dentro de una carpeta de día (ejemplo día 04):

```console
npx tsc 04/04.ts && node 04/04.js
```

#### Ejecutar tests

Ejecutar todos los tests:

```console
npm run test
```

Ejecutar un único spec (útil durante el desarrollo de un día concreto):

```console
npm test -- 04/04.spec.ts
```

#### Formato / Estilo

```console
npm run format
```

### Nota sobre compilación

- Asegúrate de tener Node.js (v16+) instalado. El proyecto compila a ES2022 por defecto (`tsconfig.json`).
- Si `npx tsc` genera un `.js` que no refleja cambios recientes, borra el `.js` y vuelve a ejecutar `npx tsc`.

### Nuevo CLI: `adventjs-cli`

Existe un CLI útil para trabajar con los retos llamado `adventjs-cli` (si lo tienes instalado). Permite ejecutar un día concreto, iniciar un entorno de desarrollo o ejecutar tests de forma directa.

```console
npx adventjs-cli init
```
