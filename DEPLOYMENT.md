# Configuración de despliegue para CEBRA Website

## Variables de Entorno
NODE_ENV=production

## Configuración de Build
- Framework: Vite + React
- Output Directory: dist
- Build Command: npm run build
- Install Command: npm install

## Optimizaciones Aplicadas
- Minificación con esbuild
- Code splitting automático
- Compresión gzip
- Assets optimizados

## URLs de Despliegue
- Producción: https://cebra-website.vercel.app
- Preview: https://cebra-website-git-main.vercel.app

## Monitoreo
- Performance: Lighthouse CI
- Analytics: Vercel Analytics (opcional)
