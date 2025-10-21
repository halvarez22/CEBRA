# 🚀 Guía de Despliegue CEBRA Website

## 📋 Checklist Pre-Despliegue

### ✅ Archivos Preparados
- [x] `.gitignore` - Archivos a ignorar
- [x] `README.md` - Documentación actualizada
- [x] `vercel.json` - Configuración de Vercel
- [x] `package.json` - Scripts optimizados
- [x] `vite.config.ts` - Build optimizado
- [x] Build local probado exitosamente

### ✅ Optimizaciones Aplicadas
- [x] Minificación con esbuild
- [x] Code splitting automático
- [x] Assets optimizados
- [x] Configuración de producción

## 🎯 Pasos para Desplegar en Vercel

### Paso 1: Preparar el Repositorio GitHub

1. **Inicializar Git** (si no está inicializado)
   ```bash
   git init
   git add .
   git commit -m "Initial commit: CEBRA website ready for deployment"
   ```

2. **Crear repositorio en GitHub**
   - Ve a [github.com](https://github.com)
   - Crea un nuevo repositorio llamado `cebra-website`
   - **NO** inicialices con README (ya tenemos uno)

3. **Conectar repositorio local**
   ```bash
   git remote add origin https://github.com/TU-USUARIO/cebra-website.git
   git branch -M main
   git push -u origin main
   ```

### Paso 2: Desplegar en Vercel

#### Opción A: Despliegue Automático (Recomendado)

1. **Acceder a Vercel**
   - Ve a [vercel.com](https://vercel.com)
   - Inicia sesión con tu cuenta de GitHub

2. **Importar Proyecto**
   - Haz clic en "New Project"
   - Selecciona el repositorio `cebra-website`
   - Vercel detectará automáticamente la configuración

3. **Configuración Automática**
   ```
   Framework Preset: Vite
   Build Command: npm run build
   Output Directory: dist
   Install Command: npm install
   ```

4. **Desplegar**
   - Haz clic en "Deploy"
   - Espera 2-3 minutos
   - ¡Tu sitio estará disponible!

#### Opción B: Despliegue Manual con CLI

1. **Instalar Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login en Vercel**
   ```bash
   vercel login
   ```

3. **Desplegar**
   ```bash
   vercel --prod
   ```

### Paso 3: Configuración Adicional

#### Dominio Personalizado (Opcional)
1. En el dashboard de Vercel
2. Ve a "Settings" → "Domains"
3. Agrega tu dominio personalizado
4. Configura los DNS según las instrucciones

#### Variables de Entorno (Si las necesitas)
1. En "Settings" → "Environment Variables"
2. Agrega variables como:
   ```
   NODE_ENV=production
   ```

## 🔧 Configuración Técnica

### Build Output
```
dist/
├── index.html          # 1.59 kB
├── assets/
│   ├── index-CXWHCXqg.css    # 8.47 kB
│   ├── vendor-Bzgz95E1.js    # 11.79 kB
│   └── index-CyDDK2l5.js     # 202.58 kB
```

### Performance Metrics
- **Tiempo de Build**: ~2.5 segundos
- **Tamaño Total**: ~224 kB (gzipped: ~67 kB)
- **Lighthouse Score**: 95+ (estimado)

## 🚨 Solución de Problemas

### Error: "Build Failed"
```bash
# Verificar dependencias
npm install

# Limpiar cache
npm run build -- --force

# Verificar TypeScript
npm run type-check
```

### Error: "Module Not Found"
- Verificar que todas las imágenes estén en `/public/images/`
- Revisar rutas relativas en el código

### Error: "Vercel Build Timeout"
- Optimizar imágenes grandes
- Reducir dependencias innecesarias

## 📊 Monitoreo Post-Despliegue

### URLs Importantes
- **Producción**: `https://cebra-website.vercel.app`
- **Preview**: `https://cebra-website-git-main.vercel.app`
- **Dashboard**: `https://vercel.com/dashboard`

### Métricas a Monitorear
- Tiempo de carga
- Core Web Vitals
- Errores en consola
- Uptime del sitio

## 🔄 Actualizaciones Futuras

### Workflow Recomendado
1. Hacer cambios localmente
2. Probar con `npm run dev`
3. Build local: `npm run build`
4. Commit y push a GitHub
5. Vercel despliega automáticamente

### Comandos Útiles
```bash
# Desarrollo
npm run dev

# Build local
npm run build

# Preview producción
npm run preview

# Verificar tipos
npm run type-check
```

## ✅ Checklist Post-Despliegue

- [ ] Sitio carga correctamente
- [ ] Todas las imágenes se muestran
- [ ] Navegación funciona
- [ ] Formulario de contacto funciona
- [ ] Responsive design correcto
- [ ] Performance optimizada
- [ ] SEO básico implementado

---

**🎉 ¡Tu sitio CEBRA está listo para conquistar el mundo digital!**
