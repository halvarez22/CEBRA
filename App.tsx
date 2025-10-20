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


// --- Data ---
const navLinks = ["Inicio", "Nuestro Enfoque", "Nuestros Servicios", "Nuestros Clientes", "Insights de la Industria", "Contacto"];

const heroCards = [
    { title: "Estrategia de Medios", description: "Creamos estrategias de medios personalizadas que conectan con tu audiencia y generan resultados." },
    { title: "Analítica y Datos", description: "Transformamos datos en decisiones inteligentes para optimizar tus campañas y maximizar el ROI." },
    { title: "Creatividad y Contenido", description: "Desarrollamos conceptos creativos y contenido atractivo que captura la esencia de tu marca." },
];

const services = [
    { title: "Publicidad Programática", image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" },
    { title: "Marketing en Buscadores (SEM)", image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" },
    { title: "Redes Sociales Pagadas", image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" },
    { title: "Marketing de Contenidos", image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" },
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
    { category: "Analítica", title: "El Futuro de la Medición: Más Allá de las Cookies", image: "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" },
    { category: "Creatividad", title: "Tendencias Creativas que Dominarán el 2024", image: "https://images.unsplash.com/photo-1522125670776-3c7abb882bc2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" },
    { category: "Estrategia", title: "Cómo Construir una Estrategia de Medios Integrada", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" },
];

// --- Components ---

// Función para scroll suave
const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
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

const HeroCards: React.FC = () => (
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
                    <div key={card.title} className="hero-transparent-card hover-lift">
                        <h3 className="heading-md mb-4 text-white">{card.title}</h3>
                        <p className="text-body mb-6 text-white">{card.description}</p>
                        <a href="#" className="text-orange-400 font-medium inline-flex items-center group">
                            Ver más <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                        </a>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const Services: React.FC = () => (
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
                    <div key={service.title} className="group cursor-pointer">
                        <div className="image-rounded mb-4 overflow-hidden">
                            <img 
                                src={service.image} 
                                alt={service.title} 
                                className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500" 
                            />
                        </div>
                        <h3 className="heading-md mb-2 text-purple-800 text-center">{service.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

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


const Insights: React.FC = () => (
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
                    <div key={insight.title} className="group cursor-pointer">
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
  return (
    <div className="bg-white font-sans">
      <Header />
      <Main />
      <HeroCards />
      <Services />
      <Clients />
      <Insights />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
