# features

Módulos verticales. Cada subcarpeta es una feature independiente (una sección o dominio del mockup).

```
features/<nombre>/
├── components/     Componentes visuales propios de la feature
└── index.js        API pública: lo único que App.jsx (o un router) puede importar
```

Reglas (verificadas por ESLint):

- Una feature puede importar de `components/` y `core/`.
- Una feature **no** importa de otra feature ni de `App.jsx`/`main.jsx`.
- La capa app importa únicamente desde `features/<nombre>` (el `index.js`), nunca de sus archivos internos.
- Crear carpetas (`components/`, hooks, servicios…) solo cuando haya algo que poner dentro.
