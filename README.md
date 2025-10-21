# 🦓 CEBRA - Creatividad Estratégica para Branding y Resultados

<div align="center">
<img width="1200" height="475" alt="CEBRA Banner" src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" />
</div>

## 🚀 Desbloquea el Crecimiento de tu Negocio

CEBRA es una agencia de marketing digital especializada en **Creatividad Estratégica para Branding y Resultados de Alto Impacto**. Transformamos tu marketing en una fuerza imparable para el crecimiento sostenible.

### ✨ Características

- **Diseño Responsivo**: Optimizado para todos los dispositivos
- **Efectos Visuales**: Piel de cebra auténtica con animaciones suaves
- **Navegación Fluida**: Scroll suave entre secciones
- **Formulario de Contacto**: Interfaz intuitiva para generar leads
- **Carrusel de Clientes**: Animación automática con logos de clientes
- **Performance Optimizada**: Carga rápida con Vite

### 🛠️ Tecnologías

- **Frontend**: React 19.2.0 + TypeScript
- **Styling**: TailwindCSS + CSS personalizado
- **Build Tool**: Vite 6.2.0
- **Deployment**: Vercel Ready

## 🏃‍♂️ Ejecutar Localmente

### Prerrequisitos
- Node.js 18+ 
- npm o yarn

### Instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/tu-usuario/cebra-website.git
   cd cebra-website
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Ejecutar en modo desarrollo**
   ```bash
   npm run dev
   ```

4. **Abrir en el navegador**
   ```
   http://localhost:3000
   ```

## 🚀 Despliegue en Vercel

### Opción 1: Despliegue Automático desde GitHub

1. **Subir a GitHub**
   ```bash
   git add .
   git commit -m "Initial commit: CEBRA website"
   git push origin main
   ```

2. **Conectar con Vercel**
   - Ve a [vercel.com](https://vercel.com)
   - Conecta tu cuenta de GitHub
   - Importa el repositorio
   - Vercel detectará automáticamente la configuración de Vite

3. **Configuración automática**
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

### Opción 2: Despliegue Manual

1. **Build para producción**
   ```bash
   npm run build
   ```

2. **Instalar Vercel CLI**
   ```bash
   npm i -g vercel
   ```

3. **Desplegar**
   ```bash
   vercel --prod
   ```

## 📁 Estructura del Proyecto

```
cebra-website/
├── public/
│   └── images/          # Imágenes y assets
├── src/
│   ├── App.tsx          # Componente principal
│   ├── index.tsx        # Punto de entrada
│   └── index.css        # Estilos personalizados
├── index.html           # HTML base
├── package.json         # Dependencias y scripts
├── vite.config.ts      # Configuración de Vite
├── tsconfig.json        # Configuración de TypeScript
└── vercel.json          # Configuración de Vercel
```

## 🎨 Personalización

### Colores de Marca
- **Naranja Principal**: `#ff4500`
- **Púrpura**: `#1a0033` → `#4b0082`
- **Fondo**: Gradientes personalizados

### Imágenes Requeridas
Asegúrate de tener estas imágenes en `/public/images/`:
- `logo.png` - Logo principal
- `cebra_jump.png` - Cebra saltando
- `enfoque.png` - Imagen de enfoque
- `servicios.png` - Imagen de servicios
- `insigths.png` - Imagen de insights
- `piel de cebra.jpg` - Fondo de piel de cebra
- Logos de clientes (PAI-B, O3 México, etc.)

## 📞 Contacto

- **Email**: hola@cebra.com
- **Teléfono**: +52 (55) 1234-5678
- **Ubicación**: Ciudad de México, México

## 📄 Licencia

© 2024 CEBRA. Todos los derechos reservados.

---

**Desarrollado con ❤️ para impulsar el crecimiento de tu negocio**
