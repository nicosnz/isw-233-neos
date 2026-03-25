# 🚀 Refactorización del Portfolio con Vite + Handlebars + BEM

## 📌 Descripción

Este update del proyecto consiste en la **refactorización del CV/Portfolio personal**, migrando a un entorno moderno basado en **Vite**, incorporando **Handlebars como motor de plantillas**, un **preprocesador CSS con PostCSS**, y reorganizando completamente los estilos bajo la **metodología BEM con estructura nested**.

---

## ⚙️ Tecnologías utilizadas

- ⚡ Vite — entorno de desarrollo rápido
- 🧩 Handlebars — motor de plantillas (partials reutilizables)
- 🎨 PostCSS — preprocesador CSS
- 🧹 ESLint — análisis estático de JavaScript
- 🎯 Stylelint — análisis de CSS con soporte BEM
- 🧱 Metodología BEM — estructura de estilos

---

## 🔥 Cambios principales

### 1. ⚡ Integración de Vite

Se migró el proyecto a Vite para:

- Mejorar la velocidad de desarrollo
- Hot reload (recarga instantánea)
- Build optimizado

Configuración clave en `vite.config.js`:

- Uso de `vite-plugin-handlebars`
- Definición de `root` en `/src`
- Carpeta de salida `/dist`

---

### 2. 🧩 Uso de Handlebars (partials)

Se implementaron **partials reutilizables** para evitar duplicación de código:

📁 `src/partials/`

- `navbar.hbs`
- `footer.hbs`

Ejemplo de uso:

```html
{{> navbar}} {{> footer}}
```

✅ Beneficios:

- Reutilización de layout
- Mantenimiento centralizado
- Código más limpio

---

### 3. 🎨 PostCSS como preprocesador

Se integró PostCSS para mejorar la gestión de estilos:

- Permite optimización y escalabilidad
- Preparado para futuras extensiones (autoprefixer, nesting, etc.)

---

### 4. 🧱 Reestructuración con BEM (Nested)

Se reorganizó completamente el CSS usando **BEM estructurado en carpetas (nested)**.

📁 Nueva estructura:

```
src/
└── components/
    ├── navbar/
    │   ├── __contenedor
    │   ├── __links
    │   ├── __link
    │   ├── __icono
    │   └── __sociales
    ├── projects/
    │   ├── __proyecto
    │   ├── __proyecto-contenido
    │   ├── __proyecto-imagen
    │   ├── __proyecto-nombre
    │   ├── __proyecto-descripcion
    │   └── __proyecto-tecnologia--*
    └── blog/
        ├── __tarjeta
        ├── __imagen
        ├── __cuerpo
        └── __titulo
```

---

### 5. 🧹 Linters configurados

#### ✅ ESLint (JavaScript)

Archivo:

```
.eslintrc.json
```

Script:

```bash
npm run lint:js
```

---

#### ✅ Stylelint (CSS + BEM)

Archivo:

```
.stylelintrc.json
```

Incluye:

- `stylelint-config-standard`
- `stylelint-selector-bem-pattern`

Script:

```bash
npm run lint:css
```

---

#### 🔥 Script combinado

```bash
npm run lint
```

---

## 📁 Estructura del proyecto

```
public/
src/
├── components/
├── data/
├── pages/
├── partials/
├── services/
└── vendor/
```

---

#

## 🚀 Cómo ejecutar el proyecto

```bash
npm install
npm run dev
```

---

## 🧪 Ejecutar linters

```bash
npm run lint
```

---

## 📌 Conclusión

Esta refactorización transforma el proyecto en una arquitectura más profesional, modular y escalable, alineada con estándares actuales de desarrollo frontend.

---

## 👨‍💻 Autor

Emanuel Oly

```

```
