/* ==========================================================================
   NEXUS COMPANY — datos de marca y contenido
   Editá los valores de este archivo para actualizar la web. No toques main.js
   salvo que sepas lo que hacés: ahí vive solo el comportamiento, no el texto.
   ========================================================================== */
(function () {
  "use strict";

  window.__BRAND__ = {
    name: "NEXUS COMPANY",
    tagline: "Diseño web para negocios",

    /* ------------------------------------------------------------------
       CONTACTO — reemplazá estos valores por los datos reales del estudio.
       ------------------------------------------------------------------ */
    contact: {
      instagramHandle: "@Nexuscompany2026",
      instagramUrl: "https://instagram.com/Nexuscompany2026",
      email: "compaynexus31@gmail.com"
    },

    nav: [
      { label: "Servicios", href: "#servicios" },
      { label: "Proyectos", href: "#proyectos" },
      { label: "Proceso", href: "#proceso" },
      { label: "Contacto", href: "#contacto" }
    ],

    services: [
      {
        icon: "landing",
        title: "Landing pages",
        desc: "Una sola página, directa al grano, pensada para convertir una visita en un cliente."
      },
      {
        icon: "building",
        title: "Páginas para empresas",
        desc: "Sitios institucionales que comunican seriedad y le dan presencia real a tu negocio."
      },
      {
        icon: "grid",
        title: "Catálogos de productos",
        desc: "Mostrá lo que vendés con orden, buenas fotos y una navegación simple."
      },
      {
        icon: "whatsapp",
        title: "Integración con WhatsApp",
        desc: "Cada botón importante lleva directo a un chat, sin pasos de más."
      },
      {
        icon: "form",
        title: "Formularios de contacto",
        desc: "Para que los interesados te dejen sus datos sin salir de la página."
      },
      {
        icon: "responsive",
        title: "Diseño responsive",
        desc: "Se ve y funciona igual de bien en el celular, la tablet y la computadora."
      },
      {
        icon: "video",
        title: "Videos profesionales",
        desc: "Hacemos videos profesionales adaptados a tu empresa: para redes, tu web o publicidad, con la identidad de tu marca."
      }
    ],

    projects: [
      {
        id: "constructora",
        category: "Constructora",
        title: "Estudio de construcción",
        desc: "Sitio institucional con enfoque en obras realizadas, confianza y contacto directo.",
        tone: "constructora"
      },
      {
        id: "concesionaria",
        category: "Concesionaria",
        title: "Concesionaria de autos",
        desc: "Catálogo de vehículos con fichas claras y consulta inmediata por WhatsApp.",
        tone: "concesionaria"
      },
      {
        id: "barberia",
        category: "Barbería",
        title: "Barbería de barrio",
        desc: "Landing con estilo, servicios y reserva de turno en un solo scroll.",
        tone: "barberia"
      }
    ],

    whyUs: [
      { icon: "spark", title: "Diseño personalizado", desc: "Nada de plantillas genéricas: cada web se piensa para tu negocio." },
      { icon: "mobile", title: "Adaptado a celulares", desc: "La mayoría de tus clientes te va a ver desde el teléfono. Ahí es donde más cuidamos el detalle." },
      { icon: "bolt", title: "Carga rápida", desc: "Código liviano, sin excesos: la página abre al instante." },
      { icon: "whatsapp", title: "WhatsApp integrado", desc: "El camino más corto entre un visitante y una consulta real." },
      { icon: "badge", title: "Diseño profesional", desc: "Una imagen prolija que transmite confianza desde el primer segundo." },
      { icon: "support", title: "Acompañamiento", desc: "Te guiamos en cada etapa, de la idea inicial a la web publicada." }
    ],

    process: [
      { step: "01", title: "Nos contás tu idea", desc: "Charlamos sobre tu negocio, qué necesitás y qué querés lograr con tu web." },
      { step: "02", title: "Diseñamos tu página", desc: "Creamos una propuesta de diseño a medida, lista para que la revises." },
      { step: "03", title: "Hacemos los ajustes", desc: "Afinamos textos, colores y detalles hasta que quede exactamente como la imaginás." },
      { step: "04", title: "Publicamos tu web", desc: "Subimos tu página a internet y queda lista para recibir visitas y clientes." }
    ]
  };
})();
