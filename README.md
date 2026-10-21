# Frontend

Base arquitectónica en **React + Vite (JavaScript/JSX)**, organizada con Clean Architecture y principios SOLID. No contiene lógica de negocio ni datos: está preparada para incorporar el mockup por secciones y seguir el curso paso a paso.

## Instalación y ejecución

Requiere Node.js >= 20.19.

```bash
npm install
npm run dev        # http://localhost:5173
```

| Script            | Descripción                        |
| ----------------- | ---------------------------------- |
| `npm run dev`     | Servidor de desarrollo (Vite)      |
| `npm run build`   | Build de producción en `dist/`     |
| `npm run preview` | Sirve el build de producción       |
| `npm run lint`    | ESLint (incluye fronteras de capa) |

Dependencias de runtime: solo `react` y `react-dom`. Vite y su plugin son de desarrollo.

## Estructura

```
index.html            Punto de entrada de Vite (carga /src/main.jsx)
vite.config.js        Plugin de React y alias @ -> src
src/
├── main.jsx          Monta <App /> en #root e importa los estilos globales
├── App.jsx           Composición de pantallas (capa app)
├── components/
│   ├── ui/           Componentes visuales genéricos (Button, ButtonLink, Card, Badge, Stat, Logo, MediaPlaceholder…)
│   └── layout/       Estructura de página (AppShell, Container, Grid, Section, TopBar, SiteHeader, SiteFooter…)
├── features/         Módulos verticales independientes (accessibility, home…)
├── core/utils/       Utilidades puras y compartidas
├── styles/           index.css, tokens.css (design tokens), reset.css, base.css
└── assets/           Recursos importados desde código (images/logo-suma21.png…)
```

| Directorio            | Responsabilidad                                                          | Puede importar de                |
| --------------------- | ------------------------------------------------------------------------ | -------------------------------- |
| `main.jsx`, `App.jsx` | Arranque y composición de pantallas.                                     | `features`, `components`, `core` |
| `features/<x>`        | Todo lo propio de una sección: componentes y, a futuro, estado y datos.  | `components`, `core`             |
| `components/ui`       | Primitivos y compuestos genéricos, sin conocimiento de negocio.          | `core`                           |
| `components/layout`   | Contenedores, shell de página, encabezados/barras laterales genéricos.   | `core`, `components/ui`          |
| `core`                | Utilidades usadas por varias capas. No es un cajón de sastre.            | nada                             |
| `styles`              | Tokens CSS y estilos globales.                                           | —                                |

ESLint (`import/no-restricted-paths`) convierte estas fronteras en error de lint: `core` no importa de `components`/`features`/app; `components` no importa de `features`/app; una feature no importa de otra feature ni de la app. `import/no-cycle` impide ciclos.

Las carpetas `hooks/`, `services/` o `store/` **no** existen: se crearán dentro de la feature que las necesite, cuando haya una responsabilidad concreta. Si la app llega a tener varias pantallas, el router vivirá en la capa app (`App.jsx`).

## Identidad visual

Tipografía **Nunito** (`@fontsource-variable/nunito`, autoalojada) y paleta de marca en `src/styles/tokens.css`: verde `#2E938A`, naranja `#F19727` y gris `#EDECED`, con variantes más oscuras para texto.

| Uso                                                 | Contraste |
| --------------------------------------------------- | --------- |
| Texto oscuro `#1F2A29` sobre naranja (botón primario) | 6.47      |
| Blanco sobre verde 700 `#1F6F68` (botón secundario)   | 5.95      |
| Verde 600 `#257A72` como texto/enlace sobre blanco    | 5.12      |
| Naranja 700 `#A65A00` como texto sobre blanco         | 5.14      |

Reglas: **nunca texto blanco sobre naranja** (2.28) ni sobre el verde de marca `#2E938A` (3.71, solo texto grande); usa los tokens semánticos (`--color-primary`, `--color-secondary`, `--color-accent-text`, `--color-link`), no los hex.

## Cabecera

`App.jsx` compone la cabecera por slots; `SiteHeader` no conoce rutas ni features:

```jsx
<SiteHeader brand={…} items={NAV_ITEMS} actions={<><TextSizeToggle /><ButtonLink …/></>} />
```

`NAV_ITEMS` vive en `App.jsx` (los `href` son provisionales hasta que haya router; `current` marca la página activa). El control A/A+ es la feature `accessibility` (`data-text-size` en `<html>`, sin persistencia).

## Pestaña Inicio

La feature `home` (`HomePage`) se compone de secciones (`Hero`, `InitiativesSection`, `ActivitiesSection`, `ParticipateSection`, `FamiliesSection`, `SupportSection`) construidas con `Section`, `Grid`, `Card`, `Badge`, `Stat` y `ContentCard` (tarjeta propia de la feature; súbela a `components/ui` cuando otra feature la necesite). El contenido es **provisional y neutro**: los textos entre corchetes (`[Descripción…]`) y `MediaPlaceholder` se sustituyen por el contenido real. Solo los nombres tomados del menú (Semana Down, Iniciativa Café) y los enlaces existentes son definitivos.

## Donación

`SiteHeader` acepta un slot `leading` (antes del logo, fuera del menú colapsable) donde `App.jsx` coloca `DonationLauncher`, de la feature `donation`: el botón «Donar ahora» siempre visible y el diálogo que abre. La cabecera es `position: sticky` (`top: 0`, `z-index: 10`); no pongas `overflow` en sus ancestros.

- `components/ui/Dialog`: diálogo genérico sobre `<dialog>` nativo (foco atrapado, Escape, fondo inerte y devolución del foco los aporta el navegador). Sigue montado cuando está cerrado, así su estado interno se conserva. `variant="fullscreen" | "centered"`. El bloqueo del scroll del fondo está en `styles/base.css` (`html:has(dialog[open])`).
- `components/ui/Checkbox`: casilla nativa con etiqueta.
- `features/donation`: `DonationDialog` (maqueta de la referencia), `FrequencyToggle`, `AmountSelector`, `SecurityNotice`.

**Estado actual: solo presentación.** Monto, frecuencia y casillas guardan estado local; el botón «Donar ahora» del diálogo no envía ni procesa nada. La caja «Donación 100 % segura» reproduce la referencia, pero aún no hay pasarela: valida ese texto antes de publicar.

## Jerarquía de componentes

| Nivel     | Ubicación                 | Ejemplo                          |
| --------- | ------------------------- | -------------------------------- |
| Primitivo | `components/ui`           | `Button`                         |
| Compuesto | `components/ui`           | `Card`, `CardHeader`, `CardBody` |
| Layout    | `components/layout`       | `AppShell`, `Container`          |
| Feature   | `features/<x>/components` | (según el mockup)                |
| Pantalla  | `App.jsx`                 | composición de lo anterior       |

## Crear un componente

1. Decide la ubicación (ver "Compartido vs feature").
2. Crea una carpeta en PascalCase:

```
Nombre/
├── Nombre.jsx          Componente (con la API de props documentada en JSDoc)
├── Nombre.module.css   Estilos aislados, solo con tokens (var(--...))
└── index.js            API pública: export { Nombre } from "./Nombre.jsx";
```

3. Reglas:
   - Componentes funcionales. Props mínimas y documentadas con JSDoc (`@param`), que sirve de contrato y da autocompletado en el editor.
   - Si envuelve un elemento HTML, propaga `...rest` y `className` (con `cx` de `@/core/utils/cx`) para que sea sustituible por el elemento nativo.
   - Variantes con props (`variant`, `size`) mapeadas a clases del módulo CSS.
   - Importa siempre por la carpeta (`@/components/ui/Button`), no por el archivo interno.

## Incorporar una pantalla del mockup

1. **Analiza** la sección antes de escribir código: qué bloques contiene y cuáles se repiten.
2. **Reutiliza** lo existente (`components/ui`, `components/layout`) y los tokens de `styles/tokens.css`.
3. **Crea solo lo nuevo**:
   - genérico y reutilizable → `components/ui` o `components/layout`;
   - propio de la sección → `features/<seccion>/components`.
4. Si el diseño necesita un valor visual nuevo (color, espaciado, sombra…), añádelo como **token**, no como valor literal.
5. Prefiere **composición o una nueva variante** antes que modificar internamente un componente compartido.
6. Expón la feature con `features/<seccion>/index.js` y compónla en `App.jsx` (que solo ensambla).
7. Sin lógica de negocio al implementar una sección visual; no toques código no relacionado.
8. Ejecuta `npm run lint && npm run build`.

## Compartido vs propio de la feature

- **Empieza en la feature.** Un componente nace en `features/<x>/components` si solo esa sección lo usa o su aspecto depende del dominio.
- **Súbelo a `components/`** cuando una segunda feature lo necesite realmente (no antes) y pueda describirse sin vocabulario de negocio.
- Si dos features comparten algo, nunca importes de una a otra: súbelo a `components/` o `core/`.
- `core/` solo para utilidades puras usadas por varias capas.

## SOLID en este proyecto

- **SRP**: cada componente vive en su carpeta con una responsabilidad; estilos separados en `.module.css`; `App.jsx` solo compone.
- **OCP**: se extiende por composición y props (`Card` + `CardHeader`/`CardBody`, `AppShell` por slots, `Button` por `variant`/`size`) sin editar la implementación interna.
- **LSP**: `Button` acepta las props de `<button>` y conserva su comportamiento (`type="button"` por defecto, `ref`, atributos nativos), por lo que sustituye a un `<button>` nativo sin sorpresas.
- **ISP**: props mínimas por componente; no hay "props bolsa".
- **DIP**: no hay abstracciones prematuras. Cuando aparezca acceso a datos (p. ej. `fetch`), la feature dependerá de una función/contrato propio y la implementación concreta se inyectará desde la capa app; la UI no hará `fetch` directamente.

## Convenciones

- Alias `@/*` → `src/*`. Imports ordenados (externos, `@/…`, relativos).
- Componentes: PascalCase (`.jsx`); utilidades: camelCase (`.js`).
- Estilos: CSS Modules + tokens. Nada de colores/espaciados literales en componentes.
- HTML semántico y accesible (landmarks, `lang`, foco visible, enlace "saltar al contenido"); `jsx-a11y` activo en lint.
- Mobile-first: estilos base para móvil y `min-width` para escritorio.
- Comentarios solo para decisiones no evidentes.
- Sin dependencias nuevas salvo necesidad justificada.

## Decisiones técnicas

- **Vite + JavaScript** por seguir el curso (`index.html` en la raíz, `src/main.jsx`, `src/App.jsx`). Trade-off: no hay tipado estricto; se compensa con JSDoc y reglas de lint. Migrar a TypeScript más adelante es posible renombrando a `.tsx`.
- **ESLint 9** con `eslint-plugin-import` (soporta hasta ESLint 9) y resolver de alias para `@/`.
- La base se construyó primero en Next.js + TypeScript y se migró; la arquitectura (capas, tokens, CSS Modules) se conservó intacta.
