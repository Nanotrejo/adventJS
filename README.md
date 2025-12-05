# AdventJS Solutions

Repositorio con soluciones a los retos de AdventJS organizados por midudev.

Estructura
- `2024/`, `2025/`, ...: carpetas por año con los retos y sus tests.

Requisitos
- Node.js >= 16
- npm
- TypeScript (se usa `npx tsc` cuando hace falta)

Cómo ejecutar una solución

- Instala dependencias:

```bash
npm install
```

- Compilar y ejecutar un archivo TypeScript (ejemplo genérico):

```bash
npx tsc path/to/file.ts && node path/to/file.js
```

- Compilar/ejecutar un día concreto (ejemplo día 04):

```bash
npx tsc 2025/04/04.ts && node 2025/04/04.js
```

Tests

- Ejecutar todos los tests:

```bash
npm test
```

- Ejecutar un único spec (útil durante desarrollo):

```bash
npm test -- 2025/04/04.spec.ts
```

Nota sobre compilación

- `tsconfig.json` apunta a `ES2022`. Si tu entorno no refleja cambios, borra el `.js` y recompila con `npx tsc`.

CLI recomendado https://github.com/AntonioMrtz/adventjs-cli

- Añade soluciones por día en la carpeta del año correspondiente.
- Sigue las pruebas y estilo ya configurados en el repo.
