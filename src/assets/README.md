# assets

Recursos estáticos que se **importan** desde el código (imágenes, iconos SVG, fuentes locales) y que Next.js optimiza y versiona con hash.

```tsx
import logo from "@/assets/images/logo.svg";
```

Organización: `images/`, `icons/`, `fonts/` (crear cada una al añadir el primer recurso).

Los archivos que deben servirse tal cual en una URL fija (`favicon.ico`, `robots.txt`, imágenes referenciadas por URL absoluta) van en `public/` en la raíz del proyecto.
