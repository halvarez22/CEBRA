import React, { useState, useEffect, useRef, useCallback } from 'react';

// --- Icon Components ---
const MenuIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
  </svg>
);

const ArrowRightIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
  </svg>
);

const ChevronLeftIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
    </svg>
);

const ChevronRightIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
    </svg>
);

// Iconos SVG para servicios
const AnalyticsIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
    </svg>
);

const MediaIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z" />
    </svg>
);

const TechnologyIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
    </svg>
);

const CreativeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
    </svg>
);

const DigitalIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
    </svg>
);

const CommerceIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
    </svg>
);

// Iconos para pilares de estrategia de medios
const ChannelsIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0h-7.5m7.5 0v-3m0 0h-7.5m7.5 0v3" />
    </svg>
);

const OptimizationIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
    </svg>
);

const ContentIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6Z" />
    </svg>
);

// Iconos para pilares de creatividad y contenido
const ConceptIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
    </svg>
);

const CopywritingIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
    </svg>
);

const ProductionIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 0 1-1.125-1.125M3.375 19.5h7.5c.621 0 1.125-.504 1.125-1.125m-9.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625H10.5m2.25-12.75h7.5m-7.5 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m0 0h7.5m-7.5 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125" />
    </svg>
);

const BrandIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
    </svg>
);

// Iconos para pilares de analítica y datos
const TrackingIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const AttributionIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5V6.75a4.5 4.5 0 119 0v3.75M3.75 21.75h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H3.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
    </svg>
);

const DashboardIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0h-7.5m7.5 0v-3m0 0h-7.5m7.5 0v3" />
    </svg>
);


// --- Data ---
const navLinks = ["Inicio", "Nuestro Enfoque", "Nuestros Servicios", "Nuestros Clientes", "Insights de la Industria", "Contacto"];

const heroCards = [
    { 
        id: "estrategia-medios",
        title: "Estrategia de Medios", 
        description: "Creamos estrategias de medios personalizadas que conectan con tu audiencia y generan resultados.",
        details: {
            title: "Estrategia de Medios",
            subtitle: "Dejamos de adivinar. Maximizamos tu Inversión Publicitaria con un Plan de Medios Inteligente.",
            description: "En el complejo panorama digital y tradicional, no basta con publicar. Nuestro enfoque se centra en la planificación de medios basada en datos para identificar los canales, momentos y formatos exactos donde tu audiencia está más receptiva. Esto garantiza que cada euro invertido trabaje de manera eficiente, llevando tu mensaje a las personas correctas y generando el retorno que esperas.",
            pillars: [
                {
                    title: "Análisis de Audiencia Profundo (Buyer Persona)",
                    description: "Dejamos de lado las suposiciones. Investigamos datos demográficos, comportamientos de compra y hábitos de consumo de medios para saber dónde y cómo alcanzarlos de manera efectiva.",
                    icon: "analytics"
                },
                {
                    title: "Selección de Canales Estratégica (Digital y Offline)",
                    description: "Creamos un Mix de Medios optimizado (Social Ads, Google Ads, Programática, TV, Radio, Prensa, Influencers, etc.), enfocando el presupuesto en los canales que prometen el mayor ROI para tu objetivo.",
                    icon: "channels"
                },
                {
                    title: "Medición de Resultados en Tiempo Real y Optimización",
                    description: "Implementamos un sistema de atribución y seguimiento robusto. No solo entregamos reportes, sino que ajustamos y optimizamos las campañas a diario para mejorar el rendimiento y reducir el Coste por Adquisición (CPA).",
                    icon: "optimization"
                },
                {
                    title: "Mensaje y Contenido Adaptado al Canal",
                    description: "Aseguramos que el contenido y la creatividad se adapten perfectamente a la plataforma (de TikTok a LinkedIn, de un anuncio de televisión a un banner). La relevancia impulsa la conexión y la conversión.",
                    icon: "content"
                }
            ],
            differentiator: "No somos compradores de medios, somos socios estratégicos. Tu éxito es nuestra métrica.",
            cta: "Hablemos de tus Objetivos de Medios"
        }
    },
    { 
        id: "analitica-datos",
        title: "Analítica y Datos", 
        description: "Transformamos datos en decisiones inteligentes para optimizar tus campañas y maximizar el ROI.",
        details: {
            title: "Analítica y Datos",
            subtitle: "Convierte la Confusión de Datos en Claridad Estratégica y Rendimiento Medible.",
            description: "Vivimos en un mar de datos, pero la información solo es poder si se interpreta correctamente. Nos especializamos en la atribución, el seguimiento y el análisis riguroso para descifrar el rendimiento real de tus campañas. Te daremos las respuestas precisas para saber qué funciona, por qué y cómo escalarlo.",
            pillars: [
                {
                    title: "Configuración y Auditoría de Tracking (Datos Limpios)",
                    description: "Establecemos y validamos las herramientas de medición (Google Analytics 4, Tag Manager, Píxeles de Conversión) para garantizar que los datos que recibimos son 100% precisos y confiables.",
                    icon: "tracking"
                },
                {
                    title: "Atribución Multicanal Inteligente",
                    description: "Más allá del \"último clic\", analizamos todo el viaje del cliente (desde el primer contacto hasta la compra) para entender qué canal o anuncio realmente generó el valor. Así, invertimos donde el impacto es mayor.",
                    icon: "attribution"
                },
                {
                    title: "Dashboards Personalizados y Ejecutivos",
                    description: "Olvídate de reportes confusos. Creamos paneles de control visualmente claros y fáciles de entender, enfocados en los KPI (Indicadores Clave de Rendimiento) que te importan: ROI, CPA y LTV.",
                    icon: "dashboard"
                },
                {
                    title: "Pruebas A/B y Optimización Constante",
                    description: "Basamos las decisiones en la experimentación. Identificamos oportunidades de mejora (copys, audiencias, creativos) y realizamos pruebas continuas para generar insights accionables que mejoran el rendimiento en cada ciclo.",
                    icon: "optimization"
                }
            ],
            differentiator: "No solo te mostramos los números, te decimos qué hacer con ellos. Transformamos datos brutos en estrategias ganadoras.",
            cta: "Agenda una Revisión de tu Analítica Actual"
        }
    },
    { 
        id: "creatividad-contenido",
        title: "Creatividad y Contenido", 
        description: "Desarrollamos conceptos creativos y contenido atractivo que captura la esencia de tu marca.",
        details: {
            title: "Creatividad y Contenido",
            subtitle: "Contamos la Historia de tu Marca para que las Personas Quieran Escucharla (y Comprar).",
            description: "En un mundo saturado de mensajes, el contenido solo funciona si es relevante, auténtico y diseñado para emocionar. Nuestro equipo de storytellers y diseñadores no solo crea piezas bonitas; desarrollamos narrativas coherentes que le dan voz y personalidad a tu marca, asegurando que tu mensaje se destaque, resuene y, lo más importante, impulse la acción.",
            pillars: [
                {
                    title: "Conceptos Creativos Data-Driven",
                    description: "Fusionamos la creatividad audaz con los insights de la analítica. Desarrollamos un concepto central que atrae, pero que está respaldado por datos sobre lo que realmente le interesa a tu audiencia.",
                    icon: "concept"
                },
                {
                    title: "Copywriting Persuasivo y Orientado a Conversión",
                    description: "Cada palabra tiene un propósito. Creamos textos (para anuncios, web, emails) que resuelven objeciones, generan deseo y tienen llamadas a la acción (CTAs) irresistibles.",
                    icon: "copywriting"
                },
                {
                    title: "Producción de Contenido Multiformato",
                    description: "Nos encargamos de todo: desde el diseño de piezas gráficas y motion graphics, hasta la producción profesional de video y fotografía. Contenido nativo optimizado para cada plataforma (Reels, TikTok, YouTube, etc.).",
                    icon: "production"
                },
                {
                    title: "Gestión de Identidad y Tono de Marca",
                    description: "Aseguramos una voz de marca consistente y memorable en todos los puntos de contacto. Tu marca tendrá una personalidad definida y un tono que construye lealtad y reconocimiento a largo plazo.",
                    icon: "brand"
                }
            ],
            differentiator: "Creatividad con propósito. Nuestro contenido no solo se ve bien; está diseñado meticulosamente para complementar tu estrategia de medios y alcanzar tus objetivos de negocio.",
            cta: "Da el Salto Creativo con tu Marca"
        }
    },
];

const services = [
    { 
        id: "publicidad-programatica",
        title: "Publicidad Programática", 
        image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        description: "Maximiza el rendimiento de tus campañas publicitarias con tecnología programática avanzada que automatiza la compra de medios digitales.",
        details: {
            title: "Publicidad Programática",
            subtitle: "Automatiza y optimiza tu inversión publicitaria",
            description: "Nuestra solución de publicidad programática utiliza algoritmos avanzados y datos en tiempo real para comprar espacios publicitarios de manera automática, asegurando que tu mensaje llegue a la audiencia correcta en el momento perfecto.",
            benefits: [
                "Optimización automática de campañas",
                "Segmentación avanzada de audiencias",
                "Compra de medios en tiempo real",
                "Análisis predictivo de rendimiento",
                "Integración con múltiples plataformas"
            ],
            features: [
                "DSP (Demand Side Platform) integrado",
                "DMP (Data Management Platform)",
                "Fraud detection y brand safety",
                "Attribution modeling avanzado",
                "Reporting en tiempo real"
            ],
            results: [
                "Reducción del 30% en el costo por adquisición",
                "Incremento del 45% en la tasa de conversión",
                "Mejora del 60% en el ROI publicitario"
            ]
        }
    },
    { 
        id: "marketing-buscadores",
        title: "Marketing en Buscadores (SEM)", 
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        description: "Domina los resultados de búsqueda con estrategias SEM que posicionan tu marca en los momentos de mayor intención de compra.",
        details: {
            title: "Marketing en Buscadores (SEM)",
            subtitle: "Captura la intención de compra en el momento exacto",
            description: "Desarrollamos estrategias SEM integrales que combinan Google Ads, Microsoft Advertising y otras plataformas para maximizar tu visibilidad en los resultados de búsqueda y capturar tráfico altamente cualificado.",
            benefits: [
                "Visibilidad inmediata en resultados de búsqueda",
                "Segmentación por palabras clave específicas",
                "Control total sobre el presupuesto",
                "Métricas detalladas de rendimiento",
                "Integración con Google Analytics"
            ],
            features: [
                "Gestión de campañas en Google Ads",
                "Optimización de Quality Score",
                "Landing page optimization",
                "A/B testing de anuncios",
                "Remarketing y audiences personalizadas"
            ],
            results: [
                "Incremento del 200% en tráfico cualificado",
                "Reducción del 25% en CPC promedio",
                "Mejora del 80% en la tasa de conversión"
            ]
        }
    },
    { 
        id: "redes-sociales-pagadas",
        title: "Redes Sociales Pagadas", 
        image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
        description: "Amplifica tu alcance en redes sociales con campañas pagadas estratégicas que conectan con tu audiencia objetivo.",
        details: {
            title: "Redes Sociales Pagadas",
            subtitle: "Conecta con tu audiencia donde más importa",
            description: "Creamos campañas publicitarias efectivas en Facebook, Instagram, LinkedIn, Twitter y TikTok que no solo aumentan tu alcance, sino que generan engagement real y conversiones medibles.",
            benefits: [
                "Alcance ampliado en redes sociales",
                "Segmentación demográfica avanzada",
                "Contenido visual atractivo",
                "Engagement y interacción directa",
                "Métricas de rendimiento detalladas"
            ],
            features: [
                "Facebook Ads Manager",
                "Instagram Shopping Ads",
                "LinkedIn Campaign Manager",
                "TikTok for Business",
                "Twitter Ads Platform"
            ],
            results: [
                "Incremento del 150% en alcance orgánico",
                "Mejora del 40% en engagement rate",
                "Reducción del 35% en costo por lead"
            ]
        }
    },
    { 
        id: "marketing-contenidos",
        title: "Marketing de Contenidos", 
        image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        description: "Desarrolla una estrategia de contenidos que posicione tu marca como autoridad en tu industria y genere leads cualificados.",
        details: {
            title: "Marketing de Contenidos",
            subtitle: "Posiciona tu marca como autoridad en tu industria",
            description: "Desarrollamos estrategias de contenido integrales que van desde la planificación editorial hasta la creación de contenido multimedia, diseñadas para educar, entretener y convertir a tu audiencia objetivo.",
            benefits: [
                "Posicionamiento como autoridad",
                "Generación de leads cualificados",
                "Mejora del SEO orgánico",
                "Fortalecimiento de la marca",
                "Engagement a largo plazo"
            ],
            features: [
                "Estrategia editorial personalizada",
                "Creación de contenido multimedia",
                "Distribución cross-platform",
                "Content calendar y programación",
                "Análisis de rendimiento de contenido"
            ],
            results: [
                "Incremento del 300% en tráfico orgánico",
                "Mejora del 50% en tiempo de permanencia",
                "Generación de 200+ leads mensuales"
            ]
        }
    },
];

const clientLogos = [
    { 
        logo: "/images/logo_pai.png", 
        name: "PAI-B", 
        url: "https://www.pai-b.com/" 
    },
    { 
        logo: "/images/logo-o3.png", 
        name: "O3 México", 
        url: "https://www.o3mexico.com/" 
    },
    { 
        logo: "/images/logo-voltaic.png", 
        name: "Voltaic", 
        url: "https://www.voltaic.com.mx/" 
    },
    { 
        logo: "/images/logo_inverland.png", 
        name: "Inverland", 
        url: "https://www.inverland.mx/" 
    },
    { 
        logo: "/images/mc-logo.png", 
        name: "MC", 
        url: "https://www.movimiento.vercel.app" 
    },
    { 
        logo: "/images/logo_fresh_richie.png", 
        name: "Fresh Richie", 
        url: "#" 
    },
    { 
        logo: "/images/logo_setecled.png", 
        name: "Setecled", 
        url: "#" 
    },
    { 
        logo: "/images/Logo_voltair.gif", 
        name: "Voltair", 
        url: "#" 
    },
];

const insights = [
    { 
        id: "analitica-cookies",
        category: "Analítica", 
        title: "El Futuro de la Medición: Más Allá de las Cookies", 
        image: "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        details: {
            title: "El Futuro de la Medición: Más Allá de las Cookies",
            subtitle: "El panorama de la analítica digital está experimentando una transformación sísmica",
            description: "Para mantenerse a la vanguardia, las marcas deben adoptar un enfoque más estratégico, ético y tecnológicamente avanzado para la medición.",
            sections: [
                {
                    title: "El Declive de las Cookies de Terceros",
                    content: "La base de la medición digital durante décadas ha sido la cookie de terceros. Sin embargo, con navegadores como Safari y Firefox bloqueándolas por defecto, y Google Chrome programando su eliminación total, esta dependencia se ha vuelto insostenible.",
                    impact: "Esto dificulta la capacidad de rastrear a los usuarios a través de diferentes sitios web, lo que afecta la atribución de conversiones, la personalización de anuncios y la creación de audiencias de retargeting."
                },
                {
                    title: "El Ascenso de la Medición Basada en el Consentimiento y la Privacidad",
                    content: "El futuro se centra en el consentimiento del usuario y el respeto por la privacidad. La medición ya no será un 'por defecto', sino una 'opción elegida' por el usuario.",
                    solutions: [
                        "Modelado de Conversiones: Utilizar la inteligencia artificial (IA) y el machine learning para rellenar los vacíos de datos causados por la falta de cookies.",
                        "Modo de Consentimiento de Google: Herramientas que ajustan cómo se recopilan los datos de Google Analytics y Google Ads en función del estado de consentimiento de las cookies del usuario."
                    ]
                },
                {
                    title: "Soluciones First-Party y la Estrategia de Datos Propios",
                    content: "El activo más valioso de una empresa se convierte en sus datos propios (First-Party Data), la información que recopila directamente de sus clientes con consentimiento.",
                    technologies: [
                        "CDP (Customer Data Platforms): Plataformas que consolidan los datos propios de un cliente a partir de múltiples fuentes para crear un perfil único y unificado.",
                        "Servidores Server-Side Tracking: Mover la recopilación de datos del navegador del usuario al servidor de la propia empresa."
                    ]
                },
                {
                    title: "Enfoques Cuantitativos y Cualitativos",
                    content: "La analítica del futuro requiere un equilibrio entre el 'qué' y el 'por qué' del comportamiento del usuario.",
                    approaches: [
                        {
                            type: "Cuantitativo",
                            description: "Métricas y estadísticas (ej. tasa de conversión, Lifetime Value). Uso de herramientas como Google Analytics 4 (GA4) 📊, que se centra en eventos y usuarios, no en sesiones o páginas vistas."
                        },
                        {
                            type: "Cualitativo", 
                            description: "Comprensión del comportamiento (ej. mapas de calor, grabaciones de sesiones, encuestas). Herramientas como Hotjar o Microsoft Clarity para obtener el contexto humano detrás de los números."
                        }
                    ]
                }
            ],
            conclusion: "La transición \"más allá de las cookies\" no es el fin de la medición, sino una evolución hacia una analítica más precisa, ética y centrada en el valor del dato propio. La inversión en tecnología server-side, CDPs y modelos de IA es crucial para asegurar la relevancia futura de las estrategias de marketing digital."
        }
    },
    { 
        id: "creatividad-tendencias",
        category: "Creatividad", 
        title: "Tendencias Creativas que Dominarán el 2024", 
        image: "https://images.unsplash.com/photo-1522125670776-3c7abb882bc2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        details: {
            title: "Tendencias Creativas que Dominarán el 2024",
            subtitle: "La creatividad en el marketing digital está en constante evolución, impulsada por las nuevas plataformas y tecnología emergente",
            description: "En 2024, la clave es la autenticidad, la inmersión y la eficiencia impulsada por la IA. La creatividad exitosa no se trata solo de tener buenas ideas, sino de usar la tecnología para entregar esas ideas de manera auténtica, personalizada y en el formato inmersivo que el consumidor espera.",
            sections: [
                {
                    title: "La Hiper-Personalización a Escala (Creative Automation)",
                    content: "La era de los anuncios genéricos ha terminado. Los consumidores esperan que el contenido sea relevante para ellos en ese momento. La Inteligencia Artificial (IA) no solo asiste en la generación de ideas, sino que permite crear miles de variaciones de un solo anuncio para diferentes segmentos de audiencia.",
                    technologies: [
                        "DCO (Dynamic Creative Optimization): Sistemas que ajustan automáticamente elementos creativos (texto, imagen, CTA) en tiempo real, basándose en el historial de navegación, la ubicación o el clima del usuario.",
                        "Prototipado Rápido: La IA reduce el tiempo de ideación y producción, permitiendo a los equipos de marketing probar más conceptos creativos a una velocidad sin precedentes."
                    ]
                },
                {
                    title: "Contenido Auténtico y de Baja Fidelidad (Low-Fi)",
                    content: "En plataformas dominadas por lo efímero (TikTok, Reels), el contenido pulido y sobreproducido a menudo genera desconfianza. Los usuarios buscan autenticidad.",
                    trends: [
                        "Contenido \"Hecho por Creadores\": Las marcas invierten en creadores de contenido y UGC (User-Generated Content) para generar anuncios que se sientan como publicaciones orgánicas.",
                        "La Estética de lo Real: Videos filmados con un móvil, sin edición excesiva y con un tono conversacional. Se busca que el anuncio se mimetice con el feed del usuario."
                    ]
                },
                {
                    title: "La Inmersión y la Interactividad",
                    content: "La creatividad se vuelve bidireccional, transformando al consumidor de espectador a participante.",
                    innovations: [
                        "Realidad Aumentada (RA) en Publicidad: Filtros de Instagram y TikTok que permiten \"probarse\" un producto (maquillaje, ropa, muebles) o interactuar con el packaging del producto antes de comprar.",
                        "Publicidad en Metaversos y Juegos: Las marcas están diseñando experiencias creativas dentro de plataformas de juego (in-game advertising) o mundos virtuales, ofreciendo skins, artículos virtuales y eventos patrocinados."
                    ]
                },
                {
                    title: "Sonido y Accesibilidad como Prioridad",
                    content: "El audio ya no es un elemento secundario, especialmente en entornos donde el usuario no mira la pantalla (podcasts, música, videos de fondo).",
                    elements: [
                        "Diseño de Sonido Estratégico (Sound Logos): Creación de jingles o sonidos distintivos que se asocian a la marca, incluso cuando el video se consume sin imagen.",
                        "Narrativa de Audio: Uso de voces en off auténticas y con personalidad, junto con subtítulos obligatorios en video. La accesibilidad (colores de alto contraste, tipografía clara) se convierte en una métrica de rendimiento creativo."
                    ]
                }
            ],
            conclusion: "En 2024, la creatividad exitosa no se trata solo de tener buenas ideas, sino de usar la tecnología (IA, RA) para entregar esas ideas de manera auténtica, personalizada y en el formato inmersivo que el consumidor espera. La eficiencia en la producción y la inversión en la experiencia de audio-visual son esenciales."
        }
    },
    { 
        id: "estrategia-medios-integrada",
        category: "Estrategia", 
        title: "Cómo Construir una Estrategia de Medios Integrada", 
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        details: {
            title: "Cómo Construir una Estrategia de Medios Integrada",
            subtitle: "En un ecosistema digital fragmentado, la clave del éxito radica en tejer una narrativa coherente a través de todos los canales",
            description: "Una Estrategia de Medios Integrada garantiza que cada punto de contacto con el cliente (propio, pagado y ganado) trabaje en sinergia para alcanzar los objetivos de negocio. Requiere un cambio de mentalidad de canal centrado a cliente centrado.",
            sections: [
                {
                    title: "El Marco de la Estrategia Integrada: POE (Paid, Owned, Earned)",
                    content: "Una estrategia robusta debe equilibrar y conectar estos tres tipos de medios para crear una narrativa coherente.",
                    framework: [
                        {
                            type: "Medios Propios (Owned)",
                            description: "Canales controlados por la marca",
                            examples: "Sitio web, blog, perfiles de redes sociales, email marketing",
                            role: "Centro de la verdad de la marca, acumulación de First-Party Data"
                        },
                        {
                            type: "Medios Pagados (Paid)",
                            description: "Canales donde se compra visibilidad",
                            examples: "Publicidad en buscadores (SEM), Social Ads, Display, Influencer Marketing",
                            role: "Acelerador de alcance, testing y segmentación"
                        },
                        {
                            type: "Medios Ganados (Earned)",
                            description: "Visibilidad lograda orgánicamente",
                            examples: "Menciones de prensa, reseñas de clientes, viralidad en redes, shares",
                            role: "Construcción de confianza, prueba social y credibilidad"
                        }
                    ],
                    objective: "Los medios Pagados deben dirigir tráfico a los Propios para generar Medios Ganados."
                },
                {
                    title: "La Unificación del Viaje del Cliente (Customer Journey)",
                    content: "Una estrategia integrada mapea cómo se mueve el cliente a través de los diferentes canales, asegurando que el mensaje sea progresivo y relevante.",
                    principles: [
                        "Identidad Consistente: Tono de voz, identidad visual y propuesta de valor deben ser idénticos en un anuncio de Instagram, en el email de bienvenida y en el sitio web.",
                        "Progresión del Mensaje: Si un usuario ve un anuncio de \"Conciencia\" (Awareness) en YouTube, el siguiente anuncio de \"Consideración\" que ve en una búsqueda de Google debe basarse en ese conocimiento previo.",
                        "Integración Offline-Online: Uso de códigos QR o geofencing para conectar la publicidad exterior o en tiendas físicas con experiencias digitales personalizadas."
                    ]
                },
                {
                    title: "Medición Holística (Atribución Cross-Channel)",
                    content: "El mayor desafío es dejar de medir el rendimiento de cada canal de forma aislada y adoptar una visión unificada del impacto.",
                    methodologies: [
                        "Atribución Basada en Datos (DDA): Utilizar modelos avanzados para asignar el crédito de una conversión a múltiples puntos de contacto a lo largo del viaje del cliente, en lugar de solo al último clic.",
                        "KPIs Unificados: Establecer métricas de rendimiento clave que midan el impacto combinado. Por ejemplo, medir el incremento de búsquedas de marca como un KPI del impacto de la publicidad Display o Social.",
                        "CDP (Plataformas de Datos del Cliente): Unificar los datos en una CDP es esencial para tener una visión 360 del usuario y medir el impacto real de la estrategia integrada."
                    ]
                }
            ],
            conclusion: "Una Estrategia de Medios Integrada es más que publicar en todos los canales; es sobre la coordinación de esos canales para crear una única y poderosa narrativa de marca. Requiere un cambio de mentalidad de canal centrado a cliente centrado y una plataforma de datos que permita la medición unificada."
        }
    },
];

// --- Components ---

// Función para scroll suave
const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
};

// Función para obtener iconos de pilares
const getPillarIcon = (iconType: string) => {
    const iconProps = { className: "h-8 w-8 text-orange-500" };
    switch (iconType) {
        case "analytics": return <AnalyticsIcon {...iconProps} />;
        case "channels": return <ChannelsIcon {...iconProps} />;
        case "optimization": return <OptimizationIcon {...iconProps} />;
        case "content": return <ContentIcon {...iconProps} />;
        case "tracking": return <TrackingIcon {...iconProps} />;
        case "attribution": return <AttributionIcon {...iconProps} />;
        case "dashboard": return <DashboardIcon {...iconProps} />;
        case "concept": return <ConceptIcon {...iconProps} />;
        case "copywriting": return <CopywritingIcon {...iconProps} />;
        case "production": return <ProductionIcon {...iconProps} />;
        case "brand": return <BrandIcon {...iconProps} />;
        default: return <AnalyticsIcon {...iconProps} />;
    }
};

const Header: React.FC = () => (
    <header className="zebra-skin-natural border-b border-gray-100 sticky top-0 z-50">
        <div className="container mx-auto flex justify-end items-center py-4 relative z-10">
            <nav className="hidden lg:flex items-center space-x-4">
                {navLinks.map((link, index) => {
                    const sectionMap = ['inicio', 'enfoque', 'servicios', 'clientes', 'insights', 'contacto'];
                    const sectionId = sectionMap[index];
                    return (
                        <div key={link} className="zebra-text-container">
                            <button 
                                onClick={() => scrollToSection(sectionId)}
                                className="zebra-text hover:text-gray-700 transition-colors duration-200 font-medium cursor-pointer"
                            >
                                {link}
                            </button>
                        </div>
                    );
                })}
            </nav>
            <div className="lg:hidden">
                <div className="zebra-text-container">
                    <button className="zebra-text">
                        <MenuIcon className="h-6 w-6" />
                    </button>
                </div>
            </div>
        </div>
    </header>
);

const Main: React.FC = () => {
    const [gradientVariant, setGradientVariant] = useState(1);
    
    const gradientClasses = [
        'hero-gradient-1', // Vertical: #1a0033 → #4b0082 (como el código del cliente)
        'hero-gradient-2', // Horizontal: #1a0033 → #4b0082
        'hero-gradient-3', // Diagonal 45°: #1a0033 → #4b0082
        'hero-gradient-4'  // Vertical: #1a0033 → #4b0082
    ];
    
    const currentGradient = gradientClasses[gradientVariant - 1];
    
    return (
        <main id="inicio" className={`${currentGradient} section-spacing`} style={{ paddingTop: '120px', paddingBottom: '120px' }}>
            {/* Logo en esquina superior izquierda */}
            <img 
                src="/images/logo.png" 
                alt="Logo CEBRA" 
                className="h-56 w-56 object-contain absolute top-4 left-4 z-50"
            />
            <div className="container mx-auto text-center">
                <h1 className="heading-xl mb-6 text-white">
                    Desbloquea el <span className="text-orange-400">Crecimiento</span> de tu Negocio
                </h1>
                <p className="text-body max-w-3xl mx-auto mb-12 text-white">
                    <span className="text-2xl md:text-3xl font-semibold">Somos CEBRA</span><br />
                    <span className="text-2xl md:text-3xl font-semibold">Creatividad Estratégica para Branding y Resultados de Alto Impacto</span>
                </p>
                
                {/* Elemento destacado con efecto radial naranja y imagen de cebra */}
                <div className="hero-radial-orange w-80 h-80 rounded-full mx-auto mb-8 flex items-center justify-center overflow-hidden relative">
                    <img 
                        src="/images/cebra_jump.png" 
                        alt="Cebra saltando" 
                        className="w-72 h-72 object-contain relative z-10"
                        style={{
                            filter: 'drop-shadow(0 0 20px rgba(255, 140, 0, 0.5))',
                        }}
                    />
                </div>
                
                <p className="text-lg md:text-xl text-white font-medium mb-4">Transformamos tu marketing en una fuerza imparable para el crecimiento sostenible</p>
                
                <p className="text-white font-bold text-lg mb-8">¿LISTO PARA CRECER?</p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                    <button className="hero-cta-button">
                        Descubre cómo
                    </button>
                    <button className="bg-transparent text-white font-semibold py-4 px-8 rounded-lg border-2 border-white hover:bg-white hover:text-gray-900 transition-all duration-300">
                        Ver nuestro trabajo
                    </button>
                </div>
                
                {/* Selector de degradados para testing */}
                <div className="flex justify-center gap-2 mt-8">
                    {[1, 2, 3, 4].map((variant) => (
                        <button
                            key={variant}
                            onClick={() => setGradientVariant(variant)}
                            className={`w-4 h-4 rounded-full border-2 transition-all duration-200 ${
                                gradientVariant === variant 
                                    ? 'bg-white border-white' 
                                    : 'bg-transparent border-white hover:bg-white/50'
                            }`}
                            title={`Degradado ${variant}`}
                        />
                    ))}
                </div>
            </div>
        </main>
    );
};

interface HeroCardsProps {
    onCardClick?: (cardId: string) => void;
}

const HeroCards: React.FC<HeroCardsProps> = ({ onCardClick }) => (
    <section id="enfoque" className="section-spacing relative" style={{ background: 'linear-gradient(to bottom, #1a0033, #4b0082)' }}>
        {/* Imagen enfoque arriba a la derecha */}
        <img 
            src="/images/enfoque.png" 
            alt="Enfoque CEBRA" 
            className="h-48 w-48 object-contain absolute top-8 right-8 z-10"
        />
        <div className="container mx-auto">
            <div className="text-center mb-16">
                <h2 className="heading-lg mb-4 text-white">Nuestro Enfoque</h2>
                <p className="text-body max-w-2xl mx-auto text-white">
                    Tres pilares fundamentales que impulsan el éxito de tu marca
                </p>
            </div>
            <div className="grid-3">
                {heroCards.map((card, index) => (
                    <div 
                        key={card.title} 
                        className={`hero-transparent-card hover-lift ${card.id ? 'cursor-pointer' : ''}`}
                        onClick={() => card.id && onCardClick ? onCardClick(card.id) : null}
                    >
                        <h3 className="heading-md mb-4 text-white">{card.title}</h3>
                        <p className="text-body mb-6 text-white">{card.description}</p>
                        <div className="text-orange-400 font-medium inline-flex items-center group">
                            Ver más <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

interface ServicesProps {
    selectedService?: string | null;
    onServiceClick?: (serviceId: string) => void;
    onBackToServices?: () => void;
}

const Services: React.FC<ServicesProps> = ({ 
    selectedService = null, 
    onServiceClick, 
    onBackToServices 
}) => {
    const handleServiceClick = (serviceId: string) => {
        if (onServiceClick) {
            onServiceClick(serviceId);
        }
    };

    const handleBackToServices = () => {
        if (onBackToServices) {
            onBackToServices();
        }
    };

    // Efecto para scroll automático cuando se carga una página de servicio
    useEffect(() => {
        if (selectedService) {
            // Pequeño delay para asegurar que el DOM se haya actualizado
            setTimeout(() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }, 100);
        }
    }, [selectedService]);

    // Si hay un servicio seleccionado, mostrar la página del servicio con footer completo
    if (selectedService) {
        const service = services.find(s => s.id === selectedService);
        if (!service) return null;

        return (
            <div className="min-h-screen bg-white">
                <section className="section-spacing bg-white">
                    <div className="container mx-auto">
                        {/* Botón de regreso */}
                        <button 
                            onClick={handleBackToServices}
                            className="mb-8 flex items-center gap-2 text-orange-500 hover:text-orange-600 font-medium"
                        >
                            <ChevronLeftIcon className="h-5 w-5" />
                            Volver a Servicios
                        </button>

                        {/* Hero del servicio */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                            <div>
                                <h1 className="heading-xl mb-4 text-gray-900">{service.details.title}</h1>
                                <p className="text-xl text-orange-600 font-semibold mb-6">{service.details.subtitle}</p>
                                <p className="text-body mb-8">{service.details.description}</p>
                                <button className="bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-600 transition-colors duration-300">
                                    Solicitar Información
                                </button>
                            </div>
                            <div className="image-rounded overflow-hidden">
                                <img 
                                    src={service.image} 
                                    alt={service.title} 
                                    className="w-full h-96 object-cover" 
                                />
                            </div>
                        </div>

                        {/* Beneficios */}
                        <div className="mb-16">
                            <h2 className="heading-lg mb-8 text-center">Beneficios Clave</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {service.details.benefits.map((benefit, index) => (
                                    <div key={index} className="bg-gray-50 p-6 rounded-lg">
                                        <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mb-4">
                                            <span className="text-white font-bold text-lg">{index + 1}</span>
                                        </div>
                                        <h3 className="font-semibold text-gray-900 mb-2">{benefit}</h3>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Características */}
                        <div className="mb-16">
                            <h2 className="heading-lg mb-8 text-center">Características Técnicas</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {service.details.features.map((feature, index) => (
                                    <div key={index} className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-lg">
                                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                                        <span className="text-gray-700">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Resultados */}
                        <div className="mb-16">
                            <h2 className="heading-lg mb-8 text-center">Resultados Comprobados</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {service.details.results.map((result, index) => (
                                    <div key={index} className="text-center p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl">
                                        <div className="text-3xl font-bold text-orange-600 mb-2">
                                            {result.split(' ')[0]}
                                        </div>
                                        <p className="text-gray-700">{result}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* CTA Final */}
                        <div className="text-center bg-gray-900 text-white p-12 rounded-2xl mb-16">
                            <h2 className="heading-lg mb-4">¿Listo para Impulsar tu Negocio?</h2>
                            <p className="text-xl mb-8 opacity-90">
                                Contáctanos y descubre cómo podemos ayudarte a alcanzar tus objetivos
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button className="bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-600 transition-colors duration-300">
                                    Solicitar Consulta Gratuita
                                </button>
                                <button className="bg-transparent text-white px-8 py-4 rounded-lg font-semibold text-lg border-2 border-white hover:bg-white hover:text-gray-900 transition-all duration-300">
                                    Ver Casos de Estudio
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Footer completo para páginas de servicio */}
                <footer className="bg-gray-900 text-white">
                    <div className="container mx-auto py-16">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                            <div>
                                <h3 className="text-xl font-bold mb-4">CEBRA</h3>
                                <p className="text-gray-400 mb-6">Desbloqueando el crecimiento del negocio a través de estrategias digitales innovadoras.</p>
                            </div>
                            <div>
                                <h4 className="font-semibold text-gray-200 mb-4">Navegación</h4>
                                <ul className="space-y-2">
                                    <li><button onClick={() => scrollToSection('inicio')} className="text-gray-400 hover:text-white transition-colors">Inicio</button></li>
                                    <li><button onClick={() => scrollToSection('enfoque')} className="text-gray-400 hover:text-white transition-colors">Nuestro Enfoque</button></li>
                                    <li><button onClick={() => scrollToSection('servicios')} className="text-gray-400 hover:text-white transition-colors">Nuestros Servicios</button></li>
                                    <li><button onClick={() => scrollToSection('clientes')} className="text-gray-400 hover:text-white transition-colors">Nuestros Clientes</button></li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold text-gray-200 mb-4">Legal</h4>
                                <ul className="space-y-2">
                                    <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Política de Privacidad</a></li>
                                    <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Términos de Servicio</a></li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold text-gray-200 mb-4">Conecta</h4>
                                <p className="text-gray-400 mb-4">Únete a nuestra newsletter para recibir los últimos insights.</p>
                                <form className="flex">
                                    <input 
                                        type="email" 
                                        placeholder="Tu email" 
                                        className="flex-1 px-4 py-2 rounded-l-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                                    />
                                    <button className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700 transition-colors">
                                        →
                                    </button>
                                </form>
                            </div>
                        </div>
                        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
                            <p>&copy; 2025 CEBRA. Todos los derechos reservados.</p>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }

    // Vista original de servicios
    return (
        <section id="servicios" className="section-spacing relative" style={{ background: 'linear-gradient(135deg, rgba(204, 153, 51, 0.25) 0%, rgba(184, 134, 11, 0.35) 50%, rgba(160, 120, 20, 0.25) 100%)' }}>
            {/* Imagen servicios arriba a la izquierda */}
            <img 
                src="/images/servicios.png" 
                alt="Servicios CEBRA" 
                className="h-72 w-72 object-contain absolute top-8 left-8 z-10"
            />
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <h2 className="heading-lg mb-4 text-purple-800">Nuestros Servicios</h2>
                    <p className="text-body max-w-2xl mx-auto text-purple-900">
                        Soluciones digitales innovadoras y basadas en datos para potenciar tu marca
                    </p>
                </div>
                <div className="grid-4">
                    {services.map((service, index) => (
                        <div 
                            key={service.id} 
                            className="group cursor-pointer"
                            onClick={() => handleServiceClick(service.id)}
                        >
                            <div className="image-rounded mb-4 overflow-hidden">
                                <img 
                                    src={service.image} 
                                    alt={service.title} 
                                    className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500" 
                                />
                            </div>
                            <h3 className="heading-md mb-2 text-purple-800 text-center group-hover:text-orange-500 transition-colors duration-300">
                                {service.title}
                            </h3>
                            <p className="text-sm text-gray-600 text-center mb-4 px-4">
                                {service.description}
                            </p>
                            <div className="text-center">
                                <span className="text-orange-500 font-medium text-sm group-hover:text-orange-600 transition-colors duration-300">
                                    Ver detalles →
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// Componente para página de Estrategia de Medios
interface MediaStrategyProps {
    onBackToFocus: () => void;
}

const MediaStrategyPage: React.FC<MediaStrategyProps> = ({ onBackToFocus }) => {
    const strategyCard = heroCards.find(card => card.id === 'estrategia-medios');
    
    if (!strategyCard || !strategyCard.details) return null;

    return (
        <div className="min-h-screen bg-white">
            <section className="section-spacing bg-white">
                <div className="container mx-auto">
                    {/* Botón de regreso */}
                    <button 
                        onClick={onBackToFocus}
                        className="mb-8 flex items-center gap-2 text-orange-500 hover:text-orange-600 font-medium"
                    >
                        <ChevronLeftIcon className="h-5 w-5" />
                        Volver a Nuestro Enfoque
                    </button>

                    {/* Hero de la estrategia */}
                    <div className="text-center mb-16">
                        <h1 className="heading-xl mb-6 text-gray-900">{strategyCard.details.title}</h1>
                        <p className="text-2xl text-orange-600 font-semibold mb-8 max-w-4xl mx-auto">
                            {strategyCard.details.subtitle}
                        </p>
                        <p className="text-body max-w-4xl mx-auto text-gray-700 leading-relaxed">
                            {strategyCard.details.description}
                        </p>
                    </div>

                    {/* Pilares de la estrategia */}
                    <div className="mb-16">
                        <h2 className="heading-lg mb-12 text-center">Cómo lo Hacemos</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {strategyCard.details.pillars.map((pillar, index) => (
                                <div key={index} className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow duration-300">
                                    <div className="flex items-start gap-4 mb-4">
                                        {getPillarIcon(pillar.icon)}
                                        <h3 className="text-xl font-bold text-gray-900">{pillar.title}</h3>
                                    </div>
                                    <p className="text-gray-700 leading-relaxed">{pillar.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Diferenciador */}
                    <div className="text-center mb-16">
                        <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-12 rounded-2xl">
                            <h2 className="heading-lg mb-4">{strategyCard.details.differentiator}</h2>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="text-center mb-16">
                        <h2 className="heading-lg mb-6">¿Listo para Maximizar tu Inversión Publicitaria?</h2>
                        <p className="text-xl text-gray-600 mb-8">
                            Hablemos sobre tus objetivos y creemos juntos una estrategia que funcione
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-600 transition-colors duration-300">
                                {strategyCard.details.cta}
                            </button>
                            <button className="bg-transparent text-orange-500 px-8 py-4 rounded-lg font-semibold text-lg border-2 border-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-300">
                                Solicitar Auditoría Gratuita
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer completo */}
            <footer className="bg-gray-900 text-white">
                <div className="container mx-auto py-16">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div>
                            <h3 className="text-xl font-bold mb-4">CEBRA</h3>
                            <p className="text-gray-400 mb-6">Desbloqueando el crecimiento del negocio a través de estrategias digitales innovadoras.</p>
                        </div>
                        <div>
                            <h4 className="font-semibold text-gray-200 mb-4">Navegación</h4>
                            <ul className="space-y-2">
                                <li><button onClick={() => scrollToSection('inicio')} className="text-gray-400 hover:text-white transition-colors">Inicio</button></li>
                                <li><button onClick={() => scrollToSection('enfoque')} className="text-gray-400 hover:text-white transition-colors">Nuestro Enfoque</button></li>
                                <li><button onClick={() => scrollToSection('servicios')} className="text-gray-400 hover:text-white transition-colors">Nuestros Servicios</button></li>
                                <li><button onClick={() => scrollToSection('clientes')} className="text-gray-400 hover:text-white transition-colors">Nuestros Clientes</button></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold text-gray-200 mb-4">Legal</h4>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Política de Privacidad</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Términos de Servicio</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold text-gray-200 mb-4">Conecta</h4>
                            <p className="text-gray-400 mb-4">Únete a nuestra newsletter para recibir los últimos insights.</p>
                            <form className="flex">
                                <input 
                                    type="email" 
                                    placeholder="Tu email" 
                                    className="flex-1 px-4 py-2 rounded-l-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                                />
                                <button className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700 transition-colors">
                                    →
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
                        <p>&copy; 2025 CEBRA. Todos los derechos reservados.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

// Componente para página de Analítica y Datos
interface AnalyticsDataProps {
    onBackToFocus: () => void;
}

const AnalyticsDataPage: React.FC<AnalyticsDataProps> = ({ onBackToFocus }) => {
    const analyticsCard = heroCards.find(card => card.id === 'analitica-datos');
    
    if (!analyticsCard || !analyticsCard.details) return null;

    return (
        <div className="min-h-screen bg-white">
            <section className="section-spacing bg-white">
                <div className="container mx-auto">
                    {/* Botón de regreso */}
                    <button 
                        onClick={onBackToFocus}
                        className="mb-8 flex items-center gap-2 text-orange-500 hover:text-orange-600 font-medium"
                    >
                        <ChevronLeftIcon className="h-5 w-5" />
                        Volver a Nuestro Enfoque
                    </button>

                    {/* Hero de la analítica */}
                    <div className="text-center mb-16">
                        <h1 className="heading-xl mb-6 text-gray-900">{analyticsCard.details.title}</h1>
                        <p className="text-2xl text-orange-600 font-semibold mb-8 max-w-4xl mx-auto">
                            {analyticsCard.details.subtitle}
                        </p>
                        <p className="text-body max-w-4xl mx-auto text-gray-700 leading-relaxed">
                            {analyticsCard.details.description}
                        </p>
                    </div>

                    {/* Pilares de la analítica */}
                    <div className="mb-16">
                        <h2 className="heading-lg mb-12 text-center">Cómo lo Hacemos</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {analyticsCard.details.pillars.map((pillar, index) => (
                                <div key={index} className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow duration-300">
                                    <div className="flex items-start gap-4 mb-4">
                                        {getPillarIcon(pillar.icon)}
                                        <h3 className="text-xl font-bold text-gray-900">{pillar.title}</h3>
                                    </div>
                                    <p className="text-gray-700 leading-relaxed">{pillar.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Diferenciador */}
                    <div className="text-center mb-16">
                        <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-12 rounded-2xl">
                            <h2 className="heading-lg mb-4">{analyticsCard.details.differentiator}</h2>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="text-center mb-16">
                        <h2 className="heading-lg mb-6">¿Listo para Transformar tus Datos en Estrategias Ganadoras?</h2>
                        <p className="text-xl text-gray-600 mb-8">
                            Descubre el valor oculto de tus datos y maximiza tu ROI con insights accionables
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-600 transition-colors duration-300">
                                {analyticsCard.details.cta}
                            </button>
                            <button className="bg-transparent text-orange-500 px-8 py-4 rounded-lg font-semibold text-lg border-2 border-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-300">
                                Descubre el Valor Oculto de tus Datos
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer completo */}
            <footer className="bg-gray-900 text-white">
                <div className="container mx-auto py-16">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div>
                            <h3 className="text-xl font-bold mb-4">CEBRA</h3>
                            <p className="text-gray-400 mb-6">Desbloqueando el crecimiento del negocio a través de estrategias digitales innovadoras.</p>
                        </div>
                        <div>
                            <h4 className="font-semibold text-gray-200 mb-4">Navegación</h4>
                            <ul className="space-y-2">
                                <li><button onClick={() => scrollToSection('inicio')} className="text-gray-400 hover:text-white transition-colors">Inicio</button></li>
                                <li><button onClick={() => scrollToSection('enfoque')} className="text-gray-400 hover:text-white transition-colors">Nuestro Enfoque</button></li>
                                <li><button onClick={() => scrollToSection('servicios')} className="text-gray-400 hover:text-white transition-colors">Nuestros Servicios</button></li>
                                <li><button onClick={() => scrollToSection('clientes')} className="text-gray-400 hover:text-white transition-colors">Nuestros Clientes</button></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold text-gray-200 mb-4">Legal</h4>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Política de Privacidad</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Términos de Servicio</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold text-gray-200 mb-4">Conecta</h4>
                            <p className="text-gray-400 mb-4">Únete a nuestra newsletter para recibir los últimos insights.</p>
                            <form className="flex">
                                <input 
                                    type="email" 
                                    placeholder="Tu email" 
                                    className="flex-1 px-4 py-2 rounded-l-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                                />
                                <button className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700 transition-colors">
                                    →
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
                        <p>&copy; 2025 CEBRA. Todos los derechos reservados.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

// Componente para página de Creatividad y Contenido
interface CreativityContentProps {
    onBackToFocus: () => void;
}

const CreativityContentPage: React.FC<CreativityContentProps> = ({ onBackToFocus }) => {
    const creativityCard = heroCards.find(card => card.id === 'creatividad-contenido');
    
    if (!creativityCard || !creativityCard.details) return null;

    return (
        <div className="min-h-screen bg-white">
            <section className="section-spacing bg-white">
                <div className="container mx-auto">
                    {/* Botón de regreso */}
                    <button 
                        onClick={onBackToFocus}
                        className="mb-8 flex items-center gap-2 text-orange-500 hover:text-orange-600 font-medium"
                    >
                        <ChevronLeftIcon className="h-5 w-5" />
                        Volver a Nuestro Enfoque
                    </button>

                    {/* Hero de la creatividad */}
                    <div className="text-center mb-16">
                        <h1 className="heading-xl mb-6 text-gray-900">{creativityCard.details.title}</h1>
                        <p className="text-2xl text-orange-600 font-semibold mb-8 max-w-4xl mx-auto">
                            {creativityCard.details.subtitle}
                        </p>
                        <p className="text-body max-w-4xl mx-auto text-gray-700 leading-relaxed">
                            {creativityCard.details.description}
                        </p>
                    </div>

                    {/* Pilares de la creatividad */}
                    <div className="mb-16">
                        <h2 className="heading-lg mb-12 text-center">Cómo lo Hacemos</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {creativityCard.details.pillars.map((pillar, index) => (
                                <div key={index} className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow duration-300">
                                    <div className="flex items-start gap-4 mb-4">
                                        {getPillarIcon(pillar.icon)}
                                        <h3 className="text-xl font-bold text-gray-900">{pillar.title}</h3>
                                    </div>
                                    <p className="text-gray-700 leading-relaxed">{pillar.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Diferenciador */}
                    <div className="text-center mb-16">
                        <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-12 rounded-2xl">
                            <h2 className="heading-lg mb-4">{creativityCard.details.differentiator}</h2>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="text-center mb-16">
                        <h2 className="heading-lg mb-6">¿Listo para Contar la Historia de tu Marca?</h2>
                        <p className="text-xl text-gray-600 mb-8">
                            Creemos contenido que conecta, emociona y convierte
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-600 transition-colors duration-300">
                                {creativityCard.details.cta}
                            </button>
                            <button className="bg-transparent text-orange-500 px-8 py-4 rounded-lg font-semibold text-lg border-2 border-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-300">
                                Ver Nuestro Portafolio Creativo
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer completo */}
            <footer className="bg-gray-900 text-white">
                <div className="container mx-auto py-16">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div>
                            <h3 className="text-xl font-bold mb-4">CEBRA</h3>
                            <p className="text-gray-400 mb-6">Desbloqueando el crecimiento del negocio a través de estrategias digitales innovadoras.</p>
                        </div>
                        <div>
                            <h4 className="font-semibold text-gray-200 mb-4">Navegación</h4>
                            <ul className="space-y-2">
                                <li><button onClick={() => scrollToSection('inicio')} className="text-gray-400 hover:text-white transition-colors">Inicio</button></li>
                                <li><button onClick={() => scrollToSection('enfoque')} className="text-gray-400 hover:text-white transition-colors">Nuestro Enfoque</button></li>
                                <li><button onClick={() => scrollToSection('servicios')} className="text-gray-400 hover:text-white transition-colors">Nuestros Servicios</button></li>
                                <li><button onClick={() => scrollToSection('clientes')} className="text-gray-400 hover:text-white transition-colors">Nuestros Clientes</button></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold text-gray-200 mb-4">Legal</h4>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Política de Privacidad</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Términos de Servicio</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold text-gray-200 mb-4">Conecta</h4>
                            <p className="text-gray-400 mb-4">Únete a nuestra newsletter para recibir los últimos insights.</p>
                            <form className="flex">
                                <input 
                                    type="email" 
                                    placeholder="Tu email" 
                                    className="flex-1 px-4 py-2 rounded-l-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                                />
                                <button className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700 transition-colors">
                                    →
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
                        <p>&copy; 2025 CEBRA. Todos los derechos reservados.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

// Componente para página de Insights - Analítica
interface InsightsAnalyticsProps {
    onBackToInsights: () => void;
}

const InsightsAnalyticsPage: React.FC<InsightsAnalyticsProps> = ({ onBackToInsights }) => {
    const analyticsInsight = insights.find(insight => insight.id === 'analitica-cookies');
    
    if (!analyticsInsight || !analyticsInsight.details) return null;

    return (
        <div className="min-h-screen bg-white">
            <section className="section-spacing bg-white">
                <div className="container mx-auto">
                    {/* Botón de regreso */}
                    <button 
                        onClick={onBackToInsights}
                        className="mb-8 flex items-center gap-2 text-orange-500 hover:text-orange-600 font-medium"
                    >
                        <ChevronLeftIcon className="h-5 w-5" />
                        Volver a Insights de la Industria
                    </button>

                    {/* Hero del insight */}
                    <div className="text-center mb-16">
                        <div className="inline-block bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
                            {analyticsInsight.category}
                        </div>
                        <h1 className="heading-xl mb-6 text-gray-900">{analyticsInsight.details.title}</h1>
                        <p className="text-2xl text-orange-600 font-semibold mb-8 max-w-4xl mx-auto">
                            {analyticsInsight.details.subtitle}
                        </p>
                        <p className="text-body max-w-4xl mx-auto text-gray-700 leading-relaxed">
                            {analyticsInsight.details.description}
                        </p>
                    </div>

                    {/* Secciones del contenido */}
                    <div className="space-y-16">
                        {analyticsInsight.details.sections.map((section, index) => (
                            <div key={index} className="bg-gray-50 p-8 rounded-xl">
                                <h2 className="heading-lg mb-6 text-gray-900">{section.title}</h2>
                                <p className="text-body text-gray-700 leading-relaxed mb-6">{section.content}</p>
                                
                                {/* Impacto específico */}
                                {section.impact && (
                                    <div className="bg-orange-50 border-l-4 border-orange-500 p-4 mb-6">
                                        <p className="text-gray-800 font-medium">
                                            <strong>Impacto:</strong> {section.impact}
                                        </p>
                                    </div>
                                )}

                                {/* Soluciones */}
                                {section.solutions && (
                                    <div className="mb-6">
                                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Soluciones Clave:</h3>
                                        <ul className="space-y-3">
                                            {section.solutions.map((solution, idx) => (
                                                <li key={idx} className="flex items-start gap-3">
                                                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                                                    <p className="text-gray-700">{solution}</p>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {/* Tecnologías */}
                                {section.technologies && (
                                    <div className="mb-6">
                                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Tecnologías Emergentes:</h3>
                                        <ul className="space-y-3">
                                            {section.technologies.map((tech, idx) => (
                                                <li key={idx} className="flex items-start gap-3">
                                                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                                                    <p className="text-gray-700">{tech}</p>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {/* Enfoques */}
                                {section.approaches && (
                                    <div className="mb-6">
                                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Enfoques Complementarios:</h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            {section.approaches.map((approach, idx) => (
                                                <div key={idx} className="bg-white p-4 rounded-lg border border-gray-200">
                                                    <h4 className="font-semibold text-orange-600 mb-2">{approach.type}</h4>
                                                    <p className="text-gray-700 text-sm">{approach.description}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Conclusión */}
                    <div className="mt-16 text-center">
                        <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-12 rounded-2xl">
                            <h2 className="heading-lg mb-4">Conclusión</h2>
                            <p className="text-xl leading-relaxed">{analyticsInsight.details.conclusion}</p>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="text-center mt-16">
                        <h2 className="heading-lg mb-6">¿Listo para Adaptarte al Futuro de la Analítica?</h2>
                        <p className="text-xl text-gray-600 mb-8">
                            Te ayudamos a implementar estrategias de medición avanzadas y éticas
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-600 transition-colors duration-300">
                                Consulta tu Estrategia de Analítica
                            </button>
                            <button className="bg-transparent text-orange-500 px-8 py-4 rounded-lg font-semibold text-lg border-2 border-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-300">
                                Más Insights de la Industria
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer completo */}
            <footer className="bg-gray-900 text-white">
                <div className="container mx-auto py-16">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div>
                            <h3 className="text-xl font-bold mb-4">CEBRA</h3>
                            <p className="text-gray-400 mb-6">Desbloqueando el crecimiento del negocio a través de estrategias digitales innovadoras.</p>
                        </div>
                        <div>
                            <h4 className="font-semibold text-gray-200 mb-4">Navegación</h4>
                            <ul className="space-y-2">
                                <li><button onClick={() => scrollToSection('inicio')} className="text-gray-400 hover:text-white transition-colors">Inicio</button></li>
                                <li><button onClick={() => scrollToSection('enfoque')} className="text-gray-400 hover:text-white transition-colors">Nuestro Enfoque</button></li>
                                <li><button onClick={() => scrollToSection('servicios')} className="text-gray-400 hover:text-white transition-colors">Nuestros Servicios</button></li>
                                <li><button onClick={() => scrollToSection('clientes')} className="text-gray-400 hover:text-white transition-colors">Nuestros Clientes</button></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold text-gray-200 mb-4">Legal</h4>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Política de Privacidad</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Términos de Servicio</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold text-gray-200 mb-4">Conecta</h4>
                            <p className="text-gray-400 mb-4">Únete a nuestra newsletter para recibir los últimos insights.</p>
                            <form className="flex">
                                <input 
                                    type="email" 
                                    placeholder="Tu email" 
                                    className="flex-1 px-4 py-2 rounded-l-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                                />
                                <button className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700 transition-colors">
                                    →
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
                        <p>&copy; 2025 CEBRA. Todos los derechos reservados.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

// Componente para página de Insights - Creatividad
interface InsightsCreativityProps {
    onBackToInsights: () => void;
}

const InsightsCreativityPage: React.FC<InsightsCreativityProps> = ({ onBackToInsights }) => {
    const creativityInsight = insights.find(insight => insight.id === 'creatividad-tendencias');
    
    if (!creativityInsight || !creativityInsight.details) return null;

    return (
        <div className="min-h-screen bg-white">
            <section className="section-spacing bg-white">
                <div className="container mx-auto">
                    {/* Botón de regreso */}
                    <button 
                        onClick={onBackToInsights}
                        className="mb-8 flex items-center gap-2 text-orange-500 hover:text-orange-600 font-medium"
                    >
                        <ChevronLeftIcon className="h-5 w-5" />
                        Volver a Insights de la Industria
                    </button>

                    {/* Hero del insight */}
                    <div className="text-center mb-16">
                        <div className="inline-block bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
                            {creativityInsight.category}
                        </div>
                        <h1 className="heading-xl mb-6 text-gray-900">{creativityInsight.details.title}</h1>
                        <p className="text-2xl text-orange-600 font-semibold mb-8 max-w-4xl mx-auto">
                            {creativityInsight.details.subtitle}
                        </p>
                        <p className="text-body max-w-4xl mx-auto text-gray-700 leading-relaxed">
                            {creativityInsight.details.description}
                        </p>
                    </div>

                    {/* Secciones del contenido */}
                    <div className="space-y-16">
                        {creativityInsight.details.sections.map((section, index) => (
                            <div key={index} className="bg-gray-50 p-8 rounded-xl">
                                <h2 className="heading-lg mb-6 text-gray-900">{section.title}</h2>
                                <p className="text-body text-gray-700 leading-relaxed mb-6">{section.content}</p>
                                
                                {/* Tecnologías */}
                                {section.technologies && (
                                    <div className="mb-6">
                                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Tecnologías Clave:</h3>
                                        <ul className="space-y-3">
                                            {section.technologies.map((tech, idx) => (
                                                <li key={idx} className="flex items-start gap-3">
                                                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                                                    <p className="text-gray-700">{tech}</p>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {/* Tendencias */}
                                {section.trends && (
                                    <div className="mb-6">
                                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Tendencias Emergentes:</h3>
                                        <ul className="space-y-3">
                                            {section.trends.map((trend, idx) => (
                                                <li key={idx} className="flex items-start gap-3">
                                                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                                                    <p className="text-gray-700">{trend}</p>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {/* Innovaciones */}
                                {section.innovations && (
                                    <div className="mb-6">
                                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Innovaciones Creativas:</h3>
                                        <ul className="space-y-3">
                                            {section.innovations.map((innovation, idx) => (
                                                <li key={idx} className="flex items-start gap-3">
                                                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                                                    <p className="text-gray-700">{innovation}</p>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {/* Elementos */}
                                {section.elements && (
                                    <div className="mb-6">
                                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Elementos Clave:</h3>
                                        <ul className="space-y-3">
                                            {section.elements.map((element, idx) => (
                                                <li key={idx} className="flex items-start gap-3">
                                                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                                                    <p className="text-gray-700">{element}</p>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Conclusión */}
                    <div className="mt-16 text-center">
                        <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-12 rounded-2xl">
                            <h2 className="heading-lg mb-4">Conclusión</h2>
                            <p className="text-xl leading-relaxed">{creativityInsight.details.conclusion}</p>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="text-center mt-16">
                        <h2 className="heading-lg mb-6">¿Listo para Implementar las Tendencias Creativas del 2024?</h2>
                        <p className="text-xl text-gray-600 mb-8">
                            Te ayudamos a crear contenido auténtico, personalizado e inmersivo
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-600 transition-colors duration-300">
                                Consulta tu Estrategia Creativa
                            </button>
                            <button className="bg-transparent text-orange-500 px-8 py-4 rounded-lg font-semibold text-lg border-2 border-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-300">
                                Ver Nuestro Portafolio Creativo
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer completo */}
            <footer className="bg-gray-900 text-white">
                <div className="container mx-auto py-16">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div>
                            <h3 className="text-xl font-bold mb-4">CEBRA</h3>
                            <p className="text-gray-400 mb-6">Desbloqueando el crecimiento del negocio a través de estrategias digitales innovadoras.</p>
                        </div>
                        <div>
                            <h4 className="font-semibold text-gray-200 mb-4">Navegación</h4>
                            <ul className="space-y-2">
                                <li><button onClick={() => scrollToSection('inicio')} className="text-gray-400 hover:text-white transition-colors">Inicio</button></li>
                                <li><button onClick={() => scrollToSection('enfoque')} className="text-gray-400 hover:text-white transition-colors">Nuestro Enfoque</button></li>
                                <li><button onClick={() => scrollToSection('servicios')} className="text-gray-400 hover:text-white transition-colors">Nuestros Servicios</button></li>
                                <li><button onClick={() => scrollToSection('clientes')} className="text-gray-400 hover:text-white transition-colors">Nuestros Clientes</button></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold text-gray-200 mb-4">Legal</h4>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Política de Privacidad</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Términos de Servicio</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold text-gray-200 mb-4">Conecta</h4>
                            <p className="text-gray-400 mb-4">Únete a nuestra newsletter para recibir los últimos insights.</p>
                            <form className="flex">
                                <input 
                                    type="email" 
                                    placeholder="Tu email" 
                                    className="flex-1 px-4 py-2 rounded-l-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                                />
                                <button className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700 transition-colors">
                                    →
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
                        <p>&copy; 2025 CEBRA. Todos los derechos reservados.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

// Componente para página de Insights - Estrategia
interface InsightsStrategyProps {
    onBackToInsights: () => void;
}

const InsightsStrategyPage: React.FC<InsightsStrategyProps> = ({ onBackToInsights }) => {
    const strategyInsight = insights.find(insight => insight.id === 'estrategia-medios-integrada');
    
    if (!strategyInsight || !strategyInsight.details) return null;

    return (
        <div className="min-h-screen bg-white">
            <section className="section-spacing bg-white">
                <div className="container mx-auto">
                    {/* Botón de regreso */}
                    <button 
                        onClick={onBackToInsights}
                        className="mb-8 flex items-center gap-2 text-orange-500 hover:text-orange-600 font-medium"
                    >
                        <ChevronLeftIcon className="h-5 w-5" />
                        Volver a Insights de la Industria
                    </button>

                    {/* Hero del insight */}
                    <div className="text-center mb-16">
                        <div className="inline-block bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
                            {strategyInsight.category}
                        </div>
                        <h1 className="heading-xl mb-6 text-gray-900">{strategyInsight.details.title}</h1>
                        <p className="text-2xl text-orange-600 font-semibold mb-8 max-w-4xl mx-auto">
                            {strategyInsight.details.subtitle}
                        </p>
                        <p className="text-body max-w-4xl mx-auto text-gray-700 leading-relaxed">
                            {strategyInsight.details.description}
                        </p>
                    </div>

                    {/* Secciones del contenido */}
                    <div className="space-y-16">
                        {strategyInsight.details.sections.map((section, index) => (
                            <div key={index} className="bg-gray-50 p-8 rounded-xl">
                                <h2 className="heading-lg mb-6 text-gray-900">{section.title}</h2>
                                <p className="text-body text-gray-700 leading-relaxed mb-6">{section.content}</p>
                                
                                {/* Framework POE */}
                                {section.framework && (
                                    <div className="mb-6">
                                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Marco POE:</h3>
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                            {section.framework.map((item, idx) => (
                                                <div key={idx} className="bg-white p-6 rounded-lg border border-gray-200">
                                                    <h4 className="font-semibold text-orange-600 mb-3">{item.type}</h4>
                                                    <p className="text-gray-700 text-sm mb-3">{item.description}</p>
                                                    <div className="mb-3">
                                                        <p className="text-xs font-medium text-gray-500 mb-1">Ejemplos:</p>
                                                        <p className="text-gray-600 text-sm">{item.examples}</p>
                                                    </div>
                                                    <div>
                                                        <p className="text-xs font-medium text-gray-500 mb-1">Rol:</p>
                                                        <p className="text-gray-600 text-sm">{item.role}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                        {section.objective && (
                                            <div className="mt-6 bg-orange-50 border-l-4 border-orange-500 p-4">
                                                <p className="text-gray-800 font-medium">
                                                    <strong>Objetivo:</strong> {section.objective}
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                )}

                                {/* Principios */}
                                {section.principles && (
                                    <div className="mb-6">
                                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Principios Clave:</h3>
                                        <ul className="space-y-3">
                                            {section.principles.map((principle, idx) => (
                                                <li key={idx} className="flex items-start gap-3">
                                                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                                                    <p className="text-gray-700">{principle}</p>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {/* Metodologías */}
                                {section.methodologies && (
                                    <div className="mb-6">
                                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Metodologías de Medición:</h3>
                                        <ul className="space-y-3">
                                            {section.methodologies.map((methodology, idx) => (
                                                <li key={idx} className="flex items-start gap-3">
                                                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                                                    <p className="text-gray-700">{methodology}</p>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Conclusión */}
                    <div className="mt-16 text-center">
                        <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-12 rounded-2xl">
                            <h2 className="heading-lg mb-4">Conclusión</h2>
                            <p className="text-xl leading-relaxed">{strategyInsight.details.conclusion}</p>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="text-center mt-16">
                        <h2 className="heading-lg mb-6">¿Listo para Construir tu Estrategia de Medios Integrada?</h2>
                        <p className="text-xl text-gray-600 mb-8">
                            Te ayudamos a coordinar todos tus canales para crear una narrativa de marca poderosa
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-600 transition-colors duration-300">
                                Consulta tu Estrategia de Medios
                            </button>
                            <button className="bg-transparent text-orange-500 px-8 py-4 rounded-lg font-semibold text-lg border-2 border-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-300">
                                Auditoría de Medios Gratuita
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer completo */}
            <footer className="bg-gray-900 text-white">
                <div className="container mx-auto py-16">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div>
                            <h3 className="text-xl font-bold mb-4">CEBRA</h3>
                            <p className="text-gray-400 mb-6">Desbloqueando el crecimiento del negocio a través de estrategias digitales innovadoras.</p>
                        </div>
                        <div>
                            <h4 className="font-semibold text-gray-200 mb-4">Navegación</h4>
                            <ul className="space-y-2">
                                <li><button onClick={() => scrollToSection('inicio')} className="text-gray-400 hover:text-white transition-colors">Inicio</button></li>
                                <li><button onClick={() => scrollToSection('enfoque')} className="text-gray-400 hover:text-white transition-colors">Nuestro Enfoque</button></li>
                                <li><button onClick={() => scrollToSection('servicios')} className="text-gray-400 hover:text-white transition-colors">Nuestros Servicios</button></li>
                                <li><button onClick={() => scrollToSection('clientes')} className="text-gray-400 hover:text-white transition-colors">Nuestros Clientes</button></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold text-gray-200 mb-4">Legal</h4>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Política de Privacidad</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Términos de Servicio</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold text-gray-200 mb-4">Conecta</h4>
                            <p className="text-gray-400 mb-4">Únete a nuestra newsletter para recibir los últimos insights.</p>
                            <form className="flex">
                                <input 
                                    type="email" 
                                    placeholder="Tu email" 
                                    className="flex-1 px-4 py-2 rounded-l-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                                />
                                <button className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700 transition-colors">
                                    →
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
                        <p>&copy; 2025 CEBRA. Todos los derechos reservados.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

const Clients: React.FC = () => {
    const [isPaused, setIsPaused] = useState(false);
    const bannerRef = useRef<HTMLDivElement>(null);

    // Crear array con logos de clientes intercalados con logos de CEBRA
    const createBannerContent = () => {
        const bannerContent = [];
        let cebraIndex = 0;
        
        for (let i = 0; i < clientLogos.length; i++) {
            // Agregar cliente
            bannerContent.push({
                type: 'client',
                data: clientLogos[i]
            });
            
            // Cada 4 clientes, agregar logo de CEBRA
            if ((i + 1) % 4 === 0) {
                const cebraLogo = cebraIndex % 2 === 0 ? 'logo-cebra_1' : 'logo-cebra_2';
                bannerContent.push({
                    type: 'cebra',
                    data: {
                        logo: `/images/${cebraLogo}.png`,
                        name: 'CEBRA',
                        url: '#'
                    }
                });
                cebraIndex++;
            }
        }
        
        return bannerContent;
    };

    const bannerContent = createBannerContent();
    // Duplicar el contenido para crear un loop infinito
    const duplicatedContent = [...bannerContent, ...bannerContent];

    useEffect(() => {
        if (!isPaused && bannerRef.current) {
            const banner = bannerRef.current;
            let position = 0;
            
            const animate = () => {
                position -= 0.5; // Velocidad lenta (0.5px por frame)
                banner.style.transform = `translateX(${position}px)`;
                
                // Reset cuando se completa un ciclo
                if (Math.abs(position) >= banner.scrollWidth / 2) {
                    position = 0;
                }
                
                if (!isPaused) {
                    requestAnimationFrame(animate);
                }
            };
            
            animate();
        }
    }, [isPaused]);

    return (
        <section id="clientes" className="section-spacing-sm bg-light">
            <div className="container mx-auto text-center">
                <h2 className="heading-lg mb-16">Nuestros Clientes</h2>
                
                <div 
                    className="relative overflow-hidden group"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    <div
                        ref={bannerRef}
                        className="flex items-center space-x-16 py-8"
                        style={{ width: 'max-content' }}
                    >
                        {duplicatedContent.map((item, index) => (
                            <div key={index} className="flex-shrink-0">
                                {item.type === 'client' ? (
                                    <a 
                                        href={item.data.url} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="block hover:scale-110 transition-transform duration-300 cursor-pointer"
                                    >
                                        <img 
                                            src={item.data.logo} 
                                            alt={`${item.data.name} logo`}
                                            className="h-25 w-40 object-contain mx-auto"
                                        />
                                    </a>
                                ) : (
                                    <div className="block hover:scale-110 transition-transform duration-300">
                                        <img 
                                            src={item.data.logo} 
                                            alt={`${item.data.name} logo`}
                                            className="h-25 w-40 object-contain mx-auto opacity-80"
                                        />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                    
                    {/* Overlay para indicar que es clickeable */}
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-white/20 pointer-events-none"></div>
                </div>
                
                {/* Instrucción para el usuario */}
                <p className="text-sm text-gray-600 mt-4">
                    Haz clic en cualquier logo de cliente para visitar su sitio web
                </p>
            </div>
        </section>
    );
};


interface InsightsProps {
    onInsightClick?: (insightId: string) => void;
}

const Insights: React.FC<InsightsProps> = ({ onInsightClick }) => (
    <section id="insights" className="section-spacing relative" style={{ background: 'linear-gradient(135deg, rgba(128, 0, 128, 0.15) 0%, rgba(147, 51, 234, 0.2) 50%, rgba(139, 69, 19, 0.15) 100%)' }}>
        <div className="container mx-auto">
            <div className="text-center mb-16">
                <h2 className="heading-lg mb-4">Insights de la Industria</h2>
                <p className="text-body max-w-2xl mx-auto">
                    Mantente a la vanguardia con nuestros análisis y perspectivas sobre el futuro del marketing digital
                </p>
            </div>
            {/* Imagen insights a la izquierda a la altura de las tarjetas */}
            <img 
                src="/images/insigths.png" 
                alt="Insigths CEBRA" 
                className="h-72 w-72 object-contain absolute top-1/2 left-8 transform -translate-y-1/2 z-10"
            />
            <div className="grid-3">
                {insights.map((insight, index) => (
                    <div 
                        key={insight.title} 
                        className={`group cursor-pointer ${insight.id ? 'hover:shadow-lg transition-shadow duration-300' : ''}`}
                        onClick={() => insight.id && onInsightClick ? onInsightClick(insight.id) : null}
                    >
                        <div className="image-rounded mb-4 overflow-hidden">
                            <img 
                                src={insight.image} 
                                alt={insight.title} 
                                className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500" 
                            />
                        </div>
                        <div className="p-4">
                            <p className="text-accent font-medium text-sm mb-2">{insight.category}</p>
                            <h3 className="heading-md group-hover:text-accent transition-colors duration-200">{insight.title}</h3>
                            {insight.id && (
                                <div className="mt-3 text-orange-500 font-medium inline-flex items-center group-hover:text-orange-600">
                                    Leer más <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);


const Contact: React.FC = () => (
    <section id="contacto" className="section-spacing relative" style={{ 
        backgroundImage: "url('/images/piel de cebra.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
    }}>
        {/* Overlay para mejorar legibilidad */}
        <div className="absolute inset-0 bg-white/80"></div>
        
        <div className="container mx-auto relative z-10">
            <div className="text-center mb-16">
                <h2 className="heading-lg mb-4 text-gray-900">Contacto</h2>
                <p className="text-body max-w-2xl mx-auto text-gray-600">
                    ¿Listo para transformar tu marketing? Contáctanos y descubramos juntos cómo podemos impulsar tu negocio.
                </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Información de contacto */}
                <div className="space-y-8">
                    <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Información de Contacto</h3>
                        <div className="space-y-4">
                            <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="font-medium text-gray-900">Email</p>
                                    <p className="text-gray-600">hola@cebra.com</p>
                                </div>
                            </div>
                            
                            <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="font-medium text-gray-900">Teléfono</p>
                                    <p className="text-gray-600">+52 (55) 1234-5678</p>
                                </div>
                            </div>
                            
                            <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="font-medium text-gray-900">Ubicación</p>
                                    <p className="text-gray-600">Ciudad de México, México</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Horarios de Atención</h3>
                        <div className="space-y-2 text-gray-600">
                            <p><span className="font-medium">Lunes - Viernes:</span> 9:00 AM - 6:00 PM</p>
                            <p><span className="font-medium">Sábados:</span> 10:00 AM - 2:00 PM</p>
                            <p><span className="font-medium">Domingos:</span> Cerrado</p>
                        </div>
                    </div>
                </div>
                
                {/* Formulario de contacto */}
                <div className="bg-white rounded-lg shadow-lg p-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-6">Envíanos un Mensaje</h3>
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-2">Nombre</label>
                                <input
                                    type="text"
                                    id="nombre"
                                    name="nombre"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                    placeholder="Tu nombre completo"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                    placeholder="tu@email.com"
                                />
                            </div>
                        </div>
                        
                        <div>
                            <label htmlFor="empresa" className="block text-sm font-medium text-gray-700 mb-2">Empresa</label>
                            <input
                                type="text"
                                id="empresa"
                                name="empresa"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                placeholder="Nombre de tu empresa"
                            />
                        </div>
                        
                        <div>
                            <label htmlFor="servicio" className="block text-sm font-medium text-gray-700 mb-2">Servicio de Interés</label>
                            <select
                                id="servicio"
                                name="servicio"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                            >
                                <option value="">Selecciona un servicio</option>
                                <option value="marketing-digital">Marketing Digital</option>
                                <option value="branding">Branding y Diseño</option>
                                <option value="sem">Marketing en Buscadores (SEM)</option>
                                <option value="redes-sociales">Redes Sociales Pagadas</option>
                                <option value="contenidos">Marketing de Contenidos</option>
                            </select>
                        </div>
                        
                        <div>
                            <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-2">Mensaje</label>
                            <textarea
                                id="mensaje"
                                name="mensaje"
                                rows={4}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                placeholder="Cuéntanos sobre tu proyecto..."
                            ></textarea>
                        </div>
                        
                        <button
                            type="submit"
                            className="w-full bg-orange-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-200"
                        >
                            Enviar Mensaje
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>
);

const Footer: React.FC = () => (
    <footer className="bg-gray-900 text-white">
        <div className="container mx-auto py-16">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                    <h3 className="text-xl font-bold mb-4">CEBRA</h3>
                    <p className="text-gray-400 mb-6">Desbloqueando el crecimiento del negocio a través de estrategias digitales innovadoras.</p>
                </div>
                <div>
                    <h4 className="font-semibold text-gray-200 mb-4">Navegación</h4>
                    <ul className="space-y-2">
                        {navLinks.slice(0, 4).map(link => <li key={link}><a href="#" className="text-gray-400 hover:text-white transition-colors">{link}</a></li>)}
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold text-gray-200 mb-4">Legal</h4>
                    <ul className="space-y-2">
                        <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Política de Privacidad</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Términos de Servicio</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold text-gray-200 mb-4">Conecta</h4>
                    <p className="text-gray-400 mb-4">Únete a nuestra newsletter para recibir los últimos insights.</p>
                    <form className="flex">
                        <input 
                            type="email" 
                            placeholder="Tu email" 
                            className="flex-1 px-4 py-2 rounded-l-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                        />
                        <button className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700 transition-colors">
                            →
                        </button>
                    </form>
                </div>
            </div>
            <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
                <p>&copy; {new Date().getFullYear()} CEBRA. Todos los derechos reservados.</p>
            </div>
        </div>
    </footer>
);


const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<'main' | 'service' | 'media-strategy' | 'analytics-data' | 'creativity-content' | 'insights-analytics' | 'insights-creativity' | 'insights-strategy'>('main');
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const handleServiceNavigation = (serviceId: string) => {
    setSelectedService(serviceId);
    setCurrentView('service');
    // Scroll automático al inicio de la página
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCardNavigation = (cardId: string) => {
    if (cardId === 'estrategia-medios') {
      setCurrentView('media-strategy');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (cardId === 'analitica-datos') {
      setCurrentView('analytics-data');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (cardId === 'creatividad-contenido') {
      setCurrentView('creativity-content');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleBackToMain = () => {
    setSelectedService(null);
    setCurrentView('main');
    // Scroll automático al inicio de la página
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleInsightNavigation = (insightId: string) => {
    if (insightId === 'analitica-cookies') {
      setCurrentView('insights-analytics');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (insightId === 'creatividad-tendencias') {
      setCurrentView('insights-creativity');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (insightId === 'estrategia-medios-integrada') {
      setCurrentView('insights-strategy');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleBackToInsights = () => {
    setCurrentView('main');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToFocus = () => {
    setCurrentView('main');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Si estamos en vista de estrategia de medios
  if (currentView === 'media-strategy') {
    return (
      <div className="bg-white font-sans">
        <Header />
        <MediaStrategyPage onBackToFocus={handleBackToFocus} />
      </div>
    );
  }

  // Si estamos en vista de analítica y datos
  if (currentView === 'analytics-data') {
    return (
      <div className="bg-white font-sans">
        <Header />
        <AnalyticsDataPage onBackToFocus={handleBackToFocus} />
      </div>
    );
  }

  // Si estamos en vista de creatividad y contenido
  if (currentView === 'creativity-content') {
    return (
      <div className="bg-white font-sans">
        <Header />
        <CreativityContentPage onBackToFocus={handleBackToFocus} />
      </div>
    );
  }

  // Si estamos en vista de insights - analítica
  if (currentView === 'insights-analytics') {
    return (
      <div className="bg-white font-sans">
        <Header />
        <InsightsAnalyticsPage onBackToInsights={handleBackToInsights} />
      </div>
    );
  }

  // Si estamos en vista de insights - creatividad
  if (currentView === 'insights-creativity') {
    return (
      <div className="bg-white font-sans">
        <Header />
        <InsightsCreativityPage onBackToInsights={handleBackToInsights} />
      </div>
    );
  }

  // Si estamos en vista de insights - estrategia
  if (currentView === 'insights-strategy') {
    return (
      <div className="bg-white font-sans">
        <Header />
        <InsightsStrategyPage onBackToInsights={handleBackToInsights} />
      </div>
    );
  }

  // Si estamos en vista de servicio, solo mostrar el servicio con su footer
  if (currentView === 'service') {
    return (
      <div className="bg-white font-sans">
        <Header />
        <Services 
          selectedService={selectedService}
          onBackToServices={handleBackToMain}
        />
      </div>
    );
  }

  // Vista principal con todas las secciones
  return (
    <div className="bg-white font-sans">
      <Header />
      <Main />
      <HeroCards onCardClick={handleCardNavigation} />
      <Services onServiceClick={handleServiceNavigation} />
      <Clients />
      <Insights onInsightClick={handleInsightNavigation} />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
