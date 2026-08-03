// Edita aquí tu información.
//
// `meta` = datos que NO cambian entre idiomas (nombre, contacto, foto).
// `content.es` / `content.en` = todo el texto visible, con la MISMA forma
// en los dos idiomas.
//
// MOLDE de un proyecto nuevo — copiá esto (en `es` Y en `en`, mismo slug):
// {
//   slug: "nombre-del-proyecto",       // define la URL: /projects/nombre-del-proyecto
//                                       // usá minúsculas, sin espacios ni tildes/ñ, separado por guiones
//   title: "...",
//   status: "..." | null,
//   summary: "Resumen de 2-4 líneas para la card (vista rápida).",
//   image: "/projects/archivo.png" | null,
//   imageFit: "contain" | "cover",     // default "contain" (logos), "cover" para screenshots anchos
//   featured: true | false,            // ocupa 2 columnas en la grilla (opcional)
//   tech: ["React", "Node.js"],        // se buscan íconos en techIcons.js por nombre exacto
//   links: {
//     site: "https://tu-sitio.com" | null,   // si existe, aparece el botón "Sitio web"
//     github: "https://github.com/..." | null, // si existe, aparece el botón "GitHub"
//   },
//   caseStudy: {
//     objective: "¿Qué problema resolvía el proyecto?",
//     architecture: "Cómo está construido (stack, infraestructura).",
//     architectureDiagram: "/projects/diagrama.png" | null, // captura/diagrama de arquitectura
//     contribution: "Qué desarrollaste específicamente vos.",
//     challenges: [
//       { problem: "...", solution: "..." },
//     ],
//     results: "Qué logró el proyecto / en qué estado quedó.",
//     lessons: "Qué aprendiste.",
//     gallery: ["/projects/captura1.png"], // opcional, capturas adicionales
//     heroImage: "/projects/captura-principal.png" | null, // foto del proyecto, debajo del título
//   },
// }

export const meta = {
  name: "Ariel Angulo",
  location: "Costa Rica",
  email: "arielangulomendez@gmail.com",
  linkedin: "https://www.linkedin.com/in/ariel-angulo-méndez-b407013a2/",
  github: "https://github.com/arielangulo",
  cvUrl: "#", // reemplazá por el link a tu CV en PDF
  photo: "/profile.jpg",
};

const projectsEs = [
  {
    slug: "crix-portal",
    title: "CRIX.CR — Portal institucional",
    status: "En producción",
    summary:
      "Sitio web oficial de CRIX.CR, el punto de intercambio de tráfico de Costa Rica. Construido en Next.js con PostgreSQL, con CI/CD automatizado de punta a punta.",
    image: "/projects/5.png",
    imageFit: "contain",
    featured: false,
    tech: ["Next.js", "PostgreSQL", "CI/CD", "Microsoft Entra ID"],
    links: { site: "https://crix.cr", github: null, docs: null }, // agregá la URL cuando esté público
    caseStudy: {
      objective:
        "NIC Costa Rica necesitaba un sitio institucional para CRIX.CR, el punto de intercambio de tráfico del país, que comunicara claramente qué es un IXP, quiénes participan y cómo unirse.",
      architecture:
        "Aplicación Next.js con PostgreSQL para el contenido dinámico, autenticación vía Microsoft Entra ID, y despliegue automatizado dentro de la red interna de NIC Costa Rica.",
      architectureDiagram: null,
      contribution:
        "Diseño y desarrollo completo del sitio: estructura de páginas, componentes de UI, modelo de datos en PostgreSQL, integración de autenticación y el pipeline de CI/CD para el despliegue.",
      challenges: [
        {
          problem:
            "El servidor de despliegue está protegido por FortiClient, así que los runners de GitHub Actions alojados en la nube no tenían acceso directo a la red interna.",
          solution:
            "Configuré un runner self-hosted dentro de la red de NIC Costa Rica. Cada push a main dispara el workflow, que construye la aplicación y la despliega automáticamente en el servidor, sin exponer la red hacia afuera.",
        },
      ],
      results:
        "Sitio en producción, con despliegue continuo funcionando de punta a punta: cada cambio en main llega a producción sin intervención manual.",
      lessons:
        "Configurar CI/CD en un entorno con restricciones de red reales (no solo en la nube) me enseñó a pensar la automatización considerando el contexto de infraestructura, no solo el código de la aplicación.",
      gallery: [],
      heroImage: null,
    },
  },
  {
    slug: "cdn-analytics",
    title: "Análisis de tráfico CDN — NIC Costa Rica",
    status: "Piloto técnico",
    summary:
      "Pipeline propio, diseñado e implementado en solitario, para analizar el consumo de tráfico de CDNs entre los miembros de NIC Costa Rica, usando Akvorado, ClickHouse y Python.",
    image: "/projects/akvorado.jpeg",
    imageFit: "cover",
    featured: false,
    tech: ["Akvorado", "ClickHouse", "Python", "Docker", "Linux", "sFlow"],
    links: { site: null, github: null, docs: "/docs/akvorado-guia-instalacion.pdf" }, // agregá la URL cuando esté público
    caseStudy: {
      objective:
        "NIC Costa Rica necesitaba una forma de medir el consumo de tráfico de CDNs específicos entre sus ISPs miembros (Tigo, Telecable, Cabletica, entre otros), como base para reportes periódicos de consumo.",
      architecture:
        "Akvorado como motor de recolección de flujos sFlow, ClickHouse como base de datos para almacenar y consultar los datos de tráfico, y scripts en Python para extraer los datos y generar los reportes. Todo desplegado en contenedores Docker sobre Linux.",
      architectureDiagram: null,
      contribution:
        "Diseño e implementación completa del pipeline de principio a fin, de forma individual: configuración de Akvorado, modelado de datos en ClickHouse, containerización con Docker, y scripts en Python para el procesamiento y la generación automática de reportes.",
      challenges: [
        {
          problem:
            "Llevar el pipeline a una operación continua con datos reales de facturación requería además ajustes en la topología de red interna que quedaban fuera del alcance que el equipo quiso abordar en ese momento.",
          solution:
            "El pipeline de software (recolección, almacenamiento y generación de reportes) quedó completo, funcional y validado por mi cuenta. La decisión de priorizar otros proyectos (como el desarrollo de crix.cr) dejó la puesta en producción continua pendiente para una siguiente fase.",
        },
      ],
      results:
        "Pipeline técnico completo y validado: Akvorado recolectando flujos correctamente, datos consultables en ClickHouse y reportes generándose vía scripts en Python. No llegó a operar en producción continua con datos reales de facturación por una decisión de priorización del equipo, no por una limitación técnica del pipeline.",
      lessons:
        "Trabajar solo en un pipeline de datos de red de principio a fin —desde la recolección hasta el reporte— me dio una base sólida en observabilidad de tráfico y en cómo estructurar sistemas de datos de networking con bases orientadas a analítica.",
      gallery: [],
      heroImage: null,
    },
  },
  {
    slug: "montesuma",
    title: "Adiestramiento Montesuma — Sitio web",
    status: "Publicado",
    summary:
      "Sitio web corporativo para un negocio de adiestramiento canino en Costa Rica, con más de 30 años de experiencia. React + Vite, con integración de Google Maps y WhatsApp.",
    image: "/projects/Montesuma Logo.png",
    imageFit: "contain",
    featured: false,
    tech: ["React", "Vite", "JavaScript"],
    links: { site: "https://adiestramientomontesuma.com", github: "https://github.com/arielangulo/Adiestramiento_Montesuma" },
    caseStudy: {
      objective:
        "Adiestramiento Montesuma, un negocio con más de 30 años de trayectoria, necesitaba presencia web para mostrar sus servicios y facilitar el contacto con clientes potenciales.",
      architecture:
        "Sitio construido con React + Vite, con páginas dedicadas por servicio, integración de Google Maps y WhatsApp, y despliegue en Vercel con dominio personalizado.",
      architectureDiagram: null,
      contribution: "Diseño y desarrollo completo del sitio, de principio a fin, incluyendo el despliegue.",
      challenges: [],
      results: "Sitio publicado y en uso activo por el negocio, en producción bajo dominio propio.",
      lessons:
        "Buena práctica llevando un proyecto completo — diseño, desarrollo, integración con servicios externos y despliegue — de principio a fin por mi cuenta.",
      gallery: [],
      heroImage: null,
    },
  },
];

const projectsEn = [
  {
    slug: "crix-portal",
    title: "CRIX.CR — Institutional portal",
    status: "In production",
    summary:
      "Official website for CRIX.CR, Costa Rica's traffic exchange point. Built with Next.js and PostgreSQL, with fully automated CI/CD.",
    image: "/projects/5.png",
    imageFit: "contain",
    featured: false,
    tech: ["Next.js", "PostgreSQL", "CI/CD", "Microsoft Entra ID"],
    links: { site: "https://crix.cr", github: null },
    caseStudy: {
      objective:
        "NIC Costa Rica needed an institutional site for CRIX.CR, the country's traffic exchange point, that clearly communicates what an IXP is, who participates, and how to join.",
      architecture:
        "Next.js application with PostgreSQL for dynamic content, authentication via Microsoft Entra ID, and automated deployment inside NIC Costa Rica's internal network.",
      architectureDiagram: null,
      contribution:
        "Full design and development of the site: page structure, UI components, the PostgreSQL data model, authentication integration, and the CI/CD deployment pipeline.",
      challenges: [
        {
          problem:
            "The deployment server sits behind FortiClient, so cloud-hosted GitHub Actions runners had no direct access to the internal network.",
          solution:
            "I set up a self-hosted runner inside NIC Costa Rica's network. Every push to main triggers the workflow, which builds the app and deploys it automatically on the server, without exposing the network outward.",
        },
      ],
      results:
        "Site in production, with end-to-end continuous deployment: every change to main reaches production with no manual steps.",
      lessons:
        "Setting up CI/CD in an environment with real network constraints (not just cloud) taught me to think about automation in terms of infrastructure context, not just application code.",
      gallery: [],
      heroImage: null,
    },
  },
  {
    slug: "cdn-analytics",
    title: "CDN traffic analysis — NIC Costa Rica",
    status: "Technical pilot",
    summary:
      "A pipeline I designed and built solo to analyze CDN traffic consumption across NIC Costa Rica members, using Akvorado, ClickHouse, and Python.",
    image: "/projects/akvorado.jpeg",
    imageFit: "cover",
    featured: false,
    tech: ["Akvorado", "ClickHouse", "Python", "Docker", "Linux", "sFlow"],
    links: { site: null, github: null },
    caseStudy: {
      objective:
        "NIC Costa Rica needed a way to measure CDN traffic consumption across its ISP members (Tigo, Telecable, Cabletica, among others), as the basis for periodic consumption reports.",
      architecture:
        "Akvorado as the sFlow collection engine, ClickHouse as the database for storing and querying traffic data, and Python scripts for data extraction and report generation. All deployed in Docker containers on Linux.",
      architectureDiagram: null,
      contribution:
        "Full end-to-end design and implementation of the pipeline, done solo: Akvorado setup, ClickHouse data modeling, Docker containerization, and Python scripts for processing and automatically generating reports.",
      challenges: [
        {
          problem:
            "Moving the pipeline to continuous operation on real billing data also required changes to the internal network topology that fell outside the scope the team wanted to take on at the time.",
          solution:
            "The software pipeline (collection, storage, and report generation) was fully built, functional, and validated on my own. A prioritization decision (shifting focus to the crix.cr site) left the move to continuous production for a later phase.",
        },
      ],
      results:
        "A complete, validated technical pipeline: Akvorado correctly collecting flows, data queryable in ClickHouse, and reports generated via Python scripts. It didn't reach continuous production on real billing data due to a team prioritization decision, not a technical limitation of the pipeline.",
      lessons:
        "Building a networking data pipeline solo, end to end — from collection to reporting — gave me a solid foundation in traffic observability and in structuring networking data systems with analytics-oriented databases.",
      gallery: [],
      heroImage: null,
    },
  },
  {
    slug: "montesuma",
    title: "Adiestramiento Montesuma — Website",
    status: "Published",
    summary:
      "Full website for Adiestramiento Montesuma, a Costa Rican dog training company with over 30 years of experience. Built with React + Vite, with Google Maps and WhatsApp integration.",
    image: "/projects/Montesuma Logo.png",
    imageFit: "contain",
    featured: false,
    tech: ["React", "Vite", "JavaScript"],
    links: { site: "https://adiestramientomontesuma.com", github: "https://github.com/arielangulo/Adiestramiento_Montesuma" },
    caseStudy: {
      objective:
        "Adiestramiento Montesuma, a company with over 30 years of experience, needed a web presence to showcase its services and make it easy for potential clients to reach out.",
      architecture:
        "Responsive React application built with Vite, with dedicated service pages, Google Maps integration, and deployment on Vercel with a custom domain.",
      architectureDiagram: null,
      contribution: "Full design and development of the site, start to finish, including deployment.",
      challenges: [],
      results: "Site published and actively used by the business, live on its own custom domain.",
      lessons:
        "Good practice taking a complete project — design, development, third-party integrations, and deployment — from start to finish on my own.",
      gallery: [],
      heroImage: null,
    },
  },
];

export const content = {
  es: {
    ui: {
      nav: {
        profile: "Perfil",
        experience: "Experiencia",
        projects: "Proyectos",
        skills: "Skills",
        contact: "Contacto",
        cv: "Ver CV",
      },
      hero: {
        eyebrowSuffix: "Disponible para roles cloud",
        viewProjects: "Ver proyectos",
        contactMe: "Contactarme",
      },
      sections: {
        profile: "Perfil",
        experience: "Experiencia",
        projects: "Proyectos",
        skills: "Skills",
        contact: "Contacto",
        certifications: "Certificaciones",
      },
      project: {
        caseStudy: "Caso de estudio",
        site: "Sitio web",
        github: "GitHub",
        docs: "Ver documentación",
        back: "Volver a proyectos",
        objective: "Objetivo del proyecto",
        architecture: "Arquitectura",
        techStack: "Tecnologías",
        contribution: "Mi contribución",
        challenges: "Retos técnicos",
        results: "Resultados",
        gallery: "Galería",
        lessons: "Lecciones aprendidas",
        problem: "Problema",
        solution: "Solución",
        notFoundTitle: "Proyecto no encontrado",
        notFoundText: "No existe ningún proyecto con esa dirección.",
      },
      contact: {
        title: "Contacto",
        text: "Busco activamente oportunidades como Cloud Engineer / Cloud Support Engineer, en infraestructura y automatización de redes en la nube. Si hay una posición abierta o un proyecto donde pueda aportar, contáctenme.",
      },
      footer: {
        built: "",
      },
    },
    profile: {
      role: "Estudiante de Ingeniería Informática · Aspirante a Cloud Engineer",
      tagline:
        "Construyo y automatizo infraestructura — de redes a la nube — con foco en AWS.",
    },
    about: {
      lede: "De redes a la nube: me interesa la infraestructura que sostiene todo lo demás.",
      paragraphs: [
        "Estoy terminando la carrera de Ingeniería Informática (el título se otorga al concluir la Licenciatura) con experiencia práctica en redes, automatización e infraestructura cloud, ganada en mi pasantía en NIC Costa Rica / CRIX, el punto de intercambio de tráfico del país.",
        "Esa experiencia me llevó también a brindar acompañamiento remoto a NIC Brasil y TIGO CR para la instalación y configuración de Akvorado, incluyendo una guía de instalación propia — confirmando que el análisis de tráfico de red es una necesidad compartida por varios ISPs e IXPs, no un caso aislado.",
        "Actualmente enfocado en certificarme como AWS Solutions Architect – Associate (SAA-C03), como parte de mi camino hacia Cloud Engineering.",
      ],
    },
    experience: [
      {
        role: "Pasante",
        org: "NIC Costa Rica",
        period: "2026 - 8 meses (enero-agosto)",
        description:
          "Pasantía técnica en el área de CRIX, con exposición a redes, infraestructura y análisis de datos de tráfico: desarrollo del sitio institucional crix.cr con CI/CD, y diseño en solitario de un pipeline de análisis de tráfico de CDN con Akvorado y ClickHouse.",
        tags: ["Redes", "Infraestructura", "Automatización"],
      },
    ],
    projects: projectsEs,
    skills: {
      groups: [
        {
          key: "cloud",
          label: "Cloud",
          items: [
            "AWS (SAA-C03 en proceso de certificación)",
            "IAM",
            "EC2 / S3 básico",
            "Arquitectura cloud",
            "RDS",
            "VPC",
            "S3",
            "CloudFront",
            "Route 53",
            "Lambda",
          ],
        },
        {
          key: "networking",
          label: "Networking",
          items: [
            "Redes TCP/IP",
            "VPC",
            "Subneteo",
            "Configuración de routers y switches",
            "Monitoreo de tráfico (NetFlow / sFlow)",
            "Akvorado",
          ],
        },
        {
          key: "dev",
          label: "Desarrollo",
          items: [
            "JavaScript",
            "React",
            "Python",
            "Scripting / Automatización",
            "Git",
            "Node.js",
            "TailwindCSS",
            "Next.js",
            "SQL / NoSQL",
          ],
        },
      ],
    },
    certifications: [
      {
        name: "AWS Certified Solutions Architect – Associate (SAA-C03)",
        status: "En preparación",
      },
    ],
  },

  en: {
    ui: {
      nav: {
        profile: "Profile",
        experience: "Experience",
        projects: "Projects",
        skills: "Skills",
        contact: "Contact",
        cv: "Resume",
      },
      hero: {
        eyebrowSuffix: "Open to cloud roles",
        viewProjects: "View projects",
        contactMe: "Get in touch",
      },
      sections: {
        profile: "Profile",
        experience: "Experience",
        projects: "Projects",
        skills: "Skills",
        contact: "Contact",
        certifications: "Certifications",
      },
      project: {
        caseStudy: "Case study",
        site: "Website",
        github: "GitHub",
        docs: "View documentation",
        back: "Back to projects",
        objective: "Project objective",
        architecture: "Architecture",
        techStack: "Tech stack",
        contribution: "My contribution",
        challenges: "Technical challenges",
        results: "Results",
        gallery: "Gallery",
        lessons: "Lessons learned",
        problem: "Problem",
        solution: "Solution",
        notFoundTitle: "Project not found",
        notFoundText: "There's no project at that address.",
      },
      contact: {
        title: "Contact",
        text: "I'm actively looking for opportunities as a Cloud Engineer / Cloud Support Engineer, in cloud infrastructure and network automation. If you have an open role or a project where I could contribute, get in touch.",
      },
      footer: {
        built: "",
      },
    },
    profile: {
      role: "Computer Science Engineering Student · Aspiring Cloud Engineer",
      tagline:
        "I build and automate infrastructure — from networking to the cloud — with a focus on AWS.",
    },
    about: {
      lede: "From networking to the cloud: I care about the infrastructure that holds everything else up.",
      paragraphs: [
        "I'm finishing my degree in Computer Science Engineering (the title is granted upon completing the graduate-level Licenciatura), with hands-on experience in networking, automation, and cloud infrastructure gained during my internship at NIC Costa Rica / CRIX, the country's traffic exchange point.",
        "That experience also led me to provide remote guidance to NIC Brasil and TIGO CR on installing and configuring Akvorado, including an installation guide I wrote myself — confirming that network traffic analysis is a need shared across multiple ISPs and IXPs, not an isolated case.",
        "Currently focused on earning the AWS Solutions Architect – Associate certification (SAA-C03), as part of my path toward Cloud Engineering.",
      ],
    },
    experience: [
      {
        role: "Intern",
        org: "NIC Costa Rica",
        period: "2026 - 8 months (January-August)",
        description:
          "Technical internship in the CRIX area, with hands-on exposure to networking, infrastructure, and traffic data analysis: development of the crix.cr institutional site with CI/CD, and solo design of a CDN traffic analysis pipeline with Akvorado and ClickHouse.",
        tags: ["Networking", "Infrastructure", "Automation"],
      },
    ],
    projects: projectsEn,
    skills: {
      groups: [
        {
          key: "cloud",
          label: "Cloud",
          items: [
            "AWS (SAA-C03 in progress)",
            "IAM",
            "EC2 / S3 basics",
            "Cloud architecture",
            "RDS",
            "VPC",
            "S3",
            "CloudFront",
            "Route 53",
            "Lambda",
          ],
        },
        {
          key: "networking",
          label: "Networking",
          items: [
            "TCP/IP networking",
            "VPC",
            "Subnetting",
            "Router and switch configuration",
            "Traffic monitoring (NetFlow / sFlow)",
            "Akvorado",
          ],
        },
        {
          key: "dev",
          label: "Development",
          items: [
            "JavaScript",
            "React",
            "Python",
            "Scripting / Automation",
            "Git",
            "Node.js",
            "TailwindCSS",
            "Next.js",
            "SQL / NoSQL",
          ],
        },
      ],
    },
    certifications: [
      {
        name: "AWS Certified Solutions Architect – Associate (SAA-C03)",
        status: "In progress",
      },
    ],
  },
};