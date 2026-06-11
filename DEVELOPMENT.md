# Bitácora de Modificaciones y Guía de Desarrollo

Este archivo documenta todos los cambios que realizamos en el proyecto y sirve como guía de orientación para que puedas ubicarte fácilmente la próxima vez que ingreses.

---

## 🛠️ Stack Tecnológico Actualizado
- **Framework**: [React](https://react.dev) con [Vite](https://vite.dev) (instalado en la raíz del proyecto).
- **Estilos**: [Tailwind CSS v4](https://tailwindcss.com) (integración directa con el compilador de Vite).
- **Estructura**: Componentes modulares reutilizables.

---

## 📂 Mapa de Archivos Clave

### 🎨 Configuración y Estilos Globales
- [vite.config.js](file:///c:/Users/Usuario/Pictures/AnacondaPyth/Antigravity/Porfolio/vite.config.js): Carga los plugins de React y Tailwind CSS v4.
- [src/index.css](file:///c:/Users/Usuario/Pictures/AnacondaPyth/Antigravity/Porfolio/src/index.css): Contiene los colores corporativos, tipografías y el fondo técnico de rejilla radial configurados mediante la directiva `@theme` de Tailwind v4.

### 🧱 Componentes de la Interfaz (en `src/components/`)
- [Navbar.jsx](file:///c:/Users/Usuario/Pictures/AnacondaPyth/Antigravity/Porfolio/src/components/Navbar.jsx): Menú interactivo y responsivo con resaltado dinámico de sección activa.
- [Hero.jsx](file:///c:/Users/Usuario/Pictures/AnacondaPyth/Antigravity/Porfolio/src/components/Hero.jsx): Cabecera de presentación con aviso de disponibilidad.
- [TerminalSimulator.jsx](file:///c:/Users/Usuario/Pictures/AnacondaPyth/Antigravity/Porfolio/src/components/TerminalSimulator.jsx): Simulador reactivo de consola interactiva.
- [ExperienceAndEducation.jsx](file:///c:/Users/Usuario/Pictures/AnacondaPyth/Antigravity/Porfolio/src/components/ExperienceAndEducation.jsx): Bento grid con tu trayectoria en el Casino y promedios académicos de I.A.E.S.
- [Projects.jsx](file:///c:/Users/Usuario/Pictures/AnacondaPyth/Antigravity/Porfolio/src/components/Projects.jsx): Showcase técnico de tus sistemas operativos y automatizadores de reportes.
- [Contact.jsx](file:///c:/Users/Usuario/Pictures/AnacondaPyth/Antigravity/Porfolio/src/components/Contact.jsx): Formulario de comunicación con validación visual y simulación de envío.
- [Footer.jsx](file:///c:/Users/Usuario/Pictures/AnacondaPyth/Antigravity/Porfolio/src/components/Footer.jsx): Cierre del sitio con enlaces.

### 🔄 Ensamblador General
- [src/App.jsx](file:///c:/Users/Usuario/Pictures/AnacondaPyth/Antigravity/Porfolio/src/App.jsx): Une todos los componentes individuales en una estructura única.
- [index.html](file:///c:/Users/Usuario/Pictures/AnacondaPyth/Antigravity/Porfolio/index.html): Carga los iconos de Material Symbols y optimizaciones de metatags SEO.

---

## ⚡ Cómo Ejecutar el Proyecto
Para iniciar el entorno de desarrollo de forma inmediata, puedes utilizar el script automatizado de Windows que he creado en la raíz:
- **Ejecutable**: [start.bat](file:///c:/Users/Usuario/Pictures/AnacondaPyth/Antigravity/Porfolio/start.bat) (Haz doble clic sobre este archivo para que realice el `npm install` y levante el servidor en `http://localhost:5173/` automáticamente).

---

## 📝 Historial de Modificaciones
1. **Resguardo**: Trasladamos los archivos HTML/CSS/JS originales a la carpeta [backup-vanilla/](file:///c:/Users/Usuario/Pictures/AnacondaPyth/Antigravity/Porfolio/backup-vanilla) para conservar la referencia previa.
2. **Estructuración**: Inicializamos Vite con la plantilla de React.
3. **Tailwind CSS v4**: Instalamos la nueva especificación de Tailwind v4 y su plugin nativo de compilación rápida para Vite.
4. **Reactificación**: Modularizamos el diseño en componentes funcionales individuales, permitiendo una fácil expansión.
5. **Consola**: La terminal del Hero ahora es reactiva (utiliza el estado de React `useState`), manteniendo la misma lógica del simulador original.
